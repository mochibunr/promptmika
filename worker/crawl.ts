// Crawler — Cloudflare Workers compatible.

import { fetchGuarded, fetchWithRetry } from "./fetch";
import { extractLinks, extractTitle, htmlToMarkdown, htmlToText, isCloudflareChallenge } from "./html";
import { assertSafeUrl } from "./ssrf";

export interface CrawlPage {
  url: string;
  depth: number;
  status: number;
  title: string;
  content: string;
  links: number;
  timingMs: number;
}

const robotsCache = new Map<string, string[]>();

async function loadRobotsDisallow(origin: string): Promise<string[]> {
  const u = new URL(origin);
  const key = u.hostname;
  if (robotsCache.has(key)) return robotsCache.get(key) ?? [];
  const disallow: string[] = [];
  try {
    const res = await fetchGuarded(`${u.protocol}//${u.host}/robots.txt`, {
      timeoutMs: 5_000,
      maxBytes: 50_000,
    });
    if (res.status === 200) {
      let inAgent = false;
      for (const raw of res.text.split("\n")) {
        const line = raw.trim();
        if (!line || line.startsWith("#")) continue;
        const idx = line.indexOf(":");
        if (idx < 0) continue;
        const keyName = line.slice(0, idx).trim().toLowerCase();
        const value = line.slice(idx + 1).trim();
        if (keyName === "user-agent") inAgent = value.toLowerCase() === "*";
        else if (keyName === "disallow" && inAgent && value) disallow.push(value);
      }
    }
  } catch { /* robots fetch failure = allow all */ }
  robotsCache.set(key, disallow);
  return disallow;
}

async function robotsAllow(url: URL): Promise<boolean> {
  const disallow = await loadRobotsDisallow(url.origin);
  if (disallow.length === 0) return true;
  const p = url.pathname + url.search;
  for (const d of disallow) {
    const escaped = d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*");
    if (new RegExp(`^${escaped}`).test(p)) return false;
  }
  return true;
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function normalizeUrl(raw: string, base: URL): string | null {
  try {
    const u = new URL(raw, base);
    if (u.protocol !== "http:" && u.protocol !== "https:") return null;
    // Strip hash, trailing slash on non-root, default ports
    u.hash = "";
    if (u.pathname !== "/" && u.pathname.endsWith("/")) u.pathname = u.pathname.slice(0, -1);
    if (u.port === "80" && u.protocol === "http:") u.port = "";
    if (u.port === "443" && u.protocol === "https:") u.port = "";
    return u.toString();
  } catch {
    return null;
  }
}

export async function crawlSite(
  seedUrl: string,
  opts: {
    maxPages?: number;
    maxDepth?: number;
    sameDomain?: boolean;
    extract?: "text" | "markdown";
    delayMs?: number;
    respectRobots?: boolean;
  } = {}
): Promise<{ pages: CrawlPage[]; skipped: string[]; errors: string[] }> {
  const maxPages = Math.min(opts.maxPages ?? 8, 25);
  const maxDepth = opts.maxDepth ?? 2;
  const sameDomain = opts.sameDomain ?? true;
  const extract = opts.extract ?? "markdown";
  const delayMs = opts.delayMs ?? 300;
  const respectRobots = opts.respectRobots ?? true;

  const seed = assertSafeUrl(seedUrl);
  const queue: Array<{ url: string; depth: number }> = [{ url: seed.toString(), depth: 0 }];
  const visited = new Set<string>([seed.toString()]);
  const pages: CrawlPage[] = [];
  const skipped: string[] = [];
  const errors: string[] = [];

  const isInScope = (raw: string): boolean => {
    const normalized = normalizeUrl(raw, seed);
    if (!normalized) return false;
    if (visited.has(normalized)) return false;
    if (sameDomain) {
      try {
        if (new URL(normalized).hostname !== seed.hostname) return false;
      } catch {
        return false;
      }
    }
    return true;
  };

  const markVisited = (raw: string) => {
    const n = normalizeUrl(raw, seed);
    if (n) visited.add(n);
  };

  while (queue.length > 0 && pages.length < maxPages) {
    const batch = queue.splice(0, Math.min(3, maxPages - pages.length));
    if (delayMs > 0 && pages.length > 0) await sleep(delayMs);

    const results = await Promise.all(
      batch.map(async (item) => {
        const u = new URL(item.url);
        if (respectRobots && !(await robotsAllow(u))) {
          markVisited(item.url);
          return { kind: "skip" as const, url: item.url, reason: "robots.txt disallowed" };
        }
        try {
          const res = await fetchWithRetry(item.url, {
            timeoutMs: 12_000,
            maxBytes: 500_000,
          }, 1);
          if (isCloudflareChallenge(res.text)) {
            return { kind: "skip" as const, url: item.url, reason: "Cloudflare challenge" };
          }
          const links = extractLinks(res.text, u);
          if (item.depth < maxDepth) {
            for (const link of links) {
              if (pages.length + queue.length >= maxPages) break;
              if (isInScope(link)) {
                markVisited(link);
                queue.push({ url: link, depth: item.depth + 1 });
              }
            }
          }
          const content = (extract === "markdown" ? htmlToMarkdown(res.text) : htmlToText(res.text)).slice(0, 40_000);
          return {
            kind: "page" as const,
            page: {
              url: item.url,
              depth: item.depth,
              status: res.status,
              title: extractTitle(res.text),
              content,
              links: links.length,
              timingMs: res.timingMs,
            },
          };
        } catch (e: any) {
          return { kind: "error" as const, url: item.url, message: e.message };
        }
      })
    );
    for (const r of results) {
      if (r.kind === "page") pages.push(r.page);
      else if (r.kind === "skip") skipped.push(`${r.url} (${r.reason})`);
      else errors.push(`${r.url}: ${r.message}`);
    }
  }
  return { pages, skipped, errors };
}
