// PromptMika site crawler: bounded BFS, RFC-aware robots, canonical dedupe, and content filtering.

import { fetchWithRetry, looksBinaryContentType, PROMPTMIKA_UA } from "./fetch";
import {
  extractLinkRecords,
  extractPageMetadata,
  htmlToMarkdown,
  htmlToText,
  isCloudflareChallenge,
} from "./html";
import { loadRobotsPolicy, robotsAllows } from "./robots";
import { assertSafeUrl } from "./ssrf";

export interface CrawlPage {
  url: string;
  finalUrl: string;
  canonical: string;
  depth: number;
  status: number;
  title: string;
  content: string;
  contentType: string;
  bytes: number;
  truncated: boolean;
  links: number;
  words: number;
  timingMs: number;
}

export interface CrawlOptions {
  maxPages?: number;
  maxDepth?: number;
  sameDomain?: boolean;
  includeSubdomains?: boolean;
  extract?: "text" | "markdown" | "none";
  delayMs?: number;
  respectRobots?: boolean;
  concurrency?: number;
  includePatterns?: string[];
  excludePatterns?: string[];
  followNofollow?: boolean;
  stripTracking?: boolean;
  perPageChars?: number;
  timeoutMs?: number;
}

const ASSET_EXTENSIONS = /\.(?:7z|avi|avif|bmp|css|csv|docx?|eot|exe|gif|gz|ico|jpe?g|js|m4a|m4v|mov|mp3|mp4|mpeg|pdf|png|pptx?|rar|svg|tar|tiff?|ttf|wav|webm|webp|woff2?|xlsx?|xml\.gz|zip)$/i;
const TRACKING_PARAMS = new Set([
  "fbclid", "gclid", "dclid", "msclkid", "mc_cid", "mc_eid",
  "_ga", "_gl", "igshid", "yclid",
]);

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function globToRegex(glob: string): RegExp {
  const escaped = glob.replace(/[.+^$(){}|[\]\\]/g, "\\$&")
    .replace(/\*/g, ".*")
    .replace(/\?/g, ".");
  return new RegExp(escaped, "i");
}

function matchesPatterns(url: string, includes: string[], excludes: string[]): boolean {
  if (excludes.some((pattern) => {
    try { return globToRegex(pattern).test(url); } catch { return false; }
  })) return false;
  if (includes.length === 0) return true;
  return includes.some((pattern) => {
    try { return globToRegex(pattern).test(url); } catch { return false; }
  });
}

function normalizeUrl(raw: string, base: URL, stripTracking: boolean): string | null {
  try {
    const url = new URL(raw, base);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    url.hash = "";

    if (stripTracking) {
      for (const key of [...url.searchParams.keys()]) {
        if (key.toLowerCase().startsWith("utm_") || TRACKING_PARAMS.has(key.toLowerCase())) {
          url.searchParams.delete(key);
        }
      }
    }

    const sorted = [...url.searchParams.entries()].sort(([a, av], [b, bv]) =>
      a.localeCompare(b) || av.localeCompare(bv),
    );
    url.search = "";
    for (const [key, value] of sorted) url.searchParams.append(key, value);

    if (url.pathname !== "/" && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.replace(/\/+$/, "");
    }
    if (url.port === "80" && url.protocol === "http:") url.port = "";
    if (url.port === "443" && url.protocol === "https:") url.port = "";
    return url.toString();
  } catch {
    return null;
  }
}

function inHostScope(candidate: URL, seed: URL, sameDomain: boolean, includeSubdomains: boolean): boolean {
  if (!sameDomain) return true;
  if (candidate.hostname === seed.hostname) return true;
  return includeSubdomains && candidate.hostname.endsWith("." + seed.hostname);
}

function isPageCandidate(url: URL): boolean {
  return !ASSET_EXTENSIONS.test(url.pathname);
}

export async function crawlSite(
  seedUrl: string,
  opts: CrawlOptions = {},
): Promise<{
  pages: CrawlPage[];
  skipped: string[];
  errors: string[];
  discovered: number;
  robots: Record<string, { status: number; source: string; sitemaps: string[] }>;
}> {
  const maxPages = Math.max(1, Math.min(opts.maxPages ?? 10, 40));
  const maxDepth = Math.max(0, Math.min(opts.maxDepth ?? 2, 6));
  const sameDomain = opts.sameDomain ?? true;
  const includeSubdomains = opts.includeSubdomains ?? false;
  const extract = opts.extract ?? "markdown";
  const delayMs = Math.max(0, Math.min(opts.delayMs ?? 250, 5_000));
  const respectRobots = opts.respectRobots ?? true;
  const concurrency = Math.max(1, Math.min(opts.concurrency ?? 2, 4));
  const includePatterns = opts.includePatterns ?? [];
  const excludePatterns = opts.excludePatterns ?? [];
  const followNofollow = opts.followNofollow ?? false;
  const stripTracking = opts.stripTracking ?? true;
  const perPageChars = Math.max(1_000, Math.min(opts.perPageChars ?? 30_000, 80_000));
  const timeoutMs = Math.max(2_000, Math.min(opts.timeoutMs ?? 15_000, 30_000));

  const seed = assertSafeUrl(seedUrl);
  const normalizedSeed = normalizeUrl(seed.toString(), seed, stripTracking) ?? seed.toString();
  const queue: Array<{ url: string; depth: number }> = [{ url: normalizedSeed, depth: 0 }];
  const queued = new Set<string>([normalizedSeed]);
  const fetched = new Set<string>();
  const canonicalSeen = new Set<string>();
  const pages: CrawlPage[] = [];
  const skipped: string[] = [];
  const errors: string[] = [];
  const robotSummary: Record<string, { status: number; source: string; sitemaps: string[] }> = {};

  const enqueue = (raw: string, base: URL, depth: number) => {
    if (depth > maxDepth) return;
    const normalized = normalizeUrl(raw, base, stripTracking);
    if (!normalized || queued.has(normalized) || fetched.has(normalized)) return;
    let url: URL;
    try { url = new URL(normalized); } catch { return; }
    if (!inHostScope(url, seed, sameDomain, includeSubdomains)) return;
    if (!isPageCandidate(url)) return;
    if (!matchesPatterns(normalized, includePatterns, excludePatterns)) return;
    queued.add(normalized);
    queue.push({ url: normalized, depth });
  };

  while (queue.length > 0 && pages.length < maxPages) {
    const batch = queue.splice(0, Math.min(concurrency, maxPages - pages.length));
    let effectiveDelay = delayMs;

    const prepared = await Promise.all(batch.map(async (item) => {
      const url = new URL(item.url);
      if (!respectRobots) return { item, policy: null };

      const policy = await loadRobotsPolicy(url.origin);
      robotSummary[url.origin] = {
        status: policy.status,
        source: policy.source,
        sitemaps: policy.sitemaps,
      };
      if (policy.crawlDelayMs !== undefined) effectiveDelay = Math.max(effectiveDelay, policy.crawlDelayMs);
      return { item, policy };
    }));

    if ((pages.length > 0 || fetched.size > 0) && effectiveDelay > 0) {
      await sleep(effectiveDelay);
    }

    const results = await Promise.all(prepared.map(async ({ item, policy }) => {
      const requested = new URL(item.url);
      fetched.add(item.url);

      if (policy && !robotsAllows(policy, requested)) {
        return { kind: "skip" as const, text: item.url + " (robots.txt disallowed)" };
      }

      try {
        const res = await fetchWithRetry(item.url, {
          timeoutMs,
          maxBytes: 650_000,
          userAgent: PROMPTMIKA_UA,
        }, 1);

        if (looksBinaryContentType(res.contentType)) {
          return { kind: "skip" as const, text: item.url + " (non-text content: " + (res.contentType || "binary") + ")" };
        }
        if (isCloudflareChallenge(res.text)) {
          return { kind: "skip" as const, text: item.url + " (browser challenge)" };
        }

        const finalUrl = new URL(res.finalUrl);
        if (!inHostScope(finalUrl, seed, sameDomain, includeSubdomains)) {
          return { kind: "skip" as const, text: item.url + " (redirected out of crawl scope to " + res.finalUrl + ")" };
        }

        const meta = extractPageMetadata(res.text, finalUrl);
        const canonical = normalizeUrl(meta.canonical || res.finalUrl, finalUrl, stripTracking) || res.finalUrl;
        if (canonicalSeen.has(canonical) && canonical !== item.url) {
          return { kind: "skip" as const, text: item.url + " (duplicate canonical: " + canonical + ")" };
        }
        canonicalSeen.add(canonical);

        const links = extractLinkRecords(res.text, finalUrl);
        const robotsMeta = meta.robots.toLowerCase();
        const pageNofollow = robotsMeta.split(",").some((token) => token.trim() === "nofollow");

        if (item.depth < maxDepth && !pageNofollow) {
          for (const link of links) {
            if (!followNofollow && link.nofollow) continue;
            enqueue(link.url, finalUrl, item.depth + 1);
          }
        }

        let fullContent = "";
        if (extract === "markdown") fullContent = htmlToMarkdown(res.text);
        else if (extract === "text") fullContent = htmlToText(res.text);

        const content = fullContent.slice(0, perPageChars);
        const words = content.trim() ? content.trim().split(/\s+/).length : 0;

        return {
          kind: "page" as const,
          page: {
            url: item.url,
            finalUrl: res.finalUrl,
            canonical,
            depth: item.depth,
            status: res.status,
            title: meta.title || meta.ogTitle,
            content,
            contentType: res.contentType,
            bytes: res.bytes,
            truncated: res.truncated || fullContent.length > perPageChars,
            links: links.length,
            words,
            timingMs: res.timingMs,
          } satisfies CrawlPage,
        };
      } catch (error) {
        return {
          kind: "error" as const,
          text: item.url + ": " + (error as Error).message,
        };
      }
    }));

    for (const result of results) {
      if (result.kind === "page") pages.push(result.page);
      else if (result.kind === "skip") skipped.push(result.text);
      else errors.push(result.text);
    }
  }

  return {
    pages: pages.slice(0, maxPages),
    skipped,
    errors,
    discovered: queued.size,
    robots: robotSummary,
  };
}
