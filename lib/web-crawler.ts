// PromptMika v3.3.0 web tools: web_fetch, web_crawl, web_search, browser_scrape.
// Free: no API keys, no external services. Optional user-deployed Cloudflare Worker
// (browser-worker/) for JS-rendered / Cloudflare-protected sites.
// Security: SSRF-guarded (DNS-resolve + block private/loopback/link-local/reserved
// IPs, every redirect hop re-validated), body size caps, timeouts, robots.txt respected
// by web_crawl.

import { lookup } from "node:dns/promises";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

const DEFAULT_TIMEOUT_MS = 15_000;
const MAX_REDIRECTS = 5;
const HARD_MAX_BYTES = 1_048_576;
const DEFAULT_MAX_BYTES = 262_144;
const CF_WORKER_URL = process.env.PROMPTMIKA_CF_WORKER_URL ?? "";

// ── SSRF guard ──────────────────────────────────────────

function isPrivateIp(ip: string): boolean {
  if (ip.includes(":")) {
    const v = ip.toLowerCase().replace(/%.*$/, "");
    if (v === "::" || v === "::1") return true;
    if (v.startsWith("fc") || v.startsWith("fd")) return true;
    if (v.startsWith("fe8") || v.startsWith("fe9") || v.startsWith("fea") || v.startsWith("feb")) return true;
    if (v.startsWith("::ffff:")) return isPrivateIp(v.slice(7));
    return false;
  }
  const parts = ip.split(".").map(Number);
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return true;
  const [a, b] = parts;
  if (a === 0) return true;
  if (a === 10) return true;
  if (a === 100 && b >= 64 && b <= 127) return true;
  if (a === 127) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  if (a === 192 && b === 0) return true;
  if (a === 198 && (b === 18 || b === 19)) return true;
  if (a >= 224) return true;
  return false;
}

async function assertSafeUrl(raw: string): Promise<URL> {
  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    throw new Error(`Invalid URL: ${raw}`);
  }
  if (u.protocol !== "http:" && u.protocol !== "https:") {
    throw new Error(`Unsupported protocol '${u.protocol}' (only http/https)`);
  }
  const host = u.hostname.replace(/^\[|\]$/g, "");
  if (host === "localhost" || host.endsWith(".localhost")) {
    throw new Error("Blocked: localhost");
  }
  if (host === "metadata" || host === "metadata.google.internal" || host.endsWith(".internal")) {
    throw new Error("Blocked: internal/metadata hostname");
  }
  const isLiteral = /^[\d.]+$/.test(host) || host.includes(":");
  if (isLiteral) {
    if (isPrivateIp(host)) throw new Error(`Blocked: private/reserved IP ${host}`);
    return u;
  }
  let addresses: string[];
  try {
    addresses = (await lookup(host, { all: true })).map((a) => a.address);
  } catch {
    throw new Error(`DNS resolution failed for ${host}`);
  }
  if (addresses.length === 0) throw new Error(`DNS resolution failed for ${host}`);
  for (const addr of addresses) {
    if (isPrivateIp(addr)) {
      throw new Error(`Blocked: ${host} resolves to private/reserved IP ${addr}`);
    }
  }
  return u;
}

// ── Fetch with guard ────────────────────────────────────

async function readBodyLimited(res: Response, maxBytes: number): Promise<{ bytes: number; text: string }> {
  if (!res.body) {
    const text = await res.text().catch(() => "");
    return { bytes: text.length, text };
  }
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (total + value.length > maxBytes) {
      await reader.cancel();
      break;
    }
    chunks.push(value);
    total += value.length;
  }
  const buf = new Uint8Array(total);
  let off = 0;
  for (const c of chunks) {
    buf.set(c, off);
    off += c.length;
  }
  return { bytes: total, text: new TextDecoder().decode(buf) };
}

function pickHeaders(res: Response): Record<string, string> {
  const out: Record<string, string> = {};
  res.headers.forEach((v, k) => {
    out[k] = v.length > 200 ? `${v.slice(0, 200)}...` : v;
  });
  return out;
}

interface FetchOpts {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  timeoutMs?: number;
  maxBytes?: number;
}

interface FetchResult {
  status: number;
  statusText: string;
  finalUrl: string;
  headers: Record<string, string>;
  bytes: number;
  text: string;
}

async function fetchGuarded(rawUrl: string, opts: FetchOpts = {}): Promise<FetchResult> {
  const method = (opts.method ?? "GET").toUpperCase();
  const timeoutMs = Math.min(opts.timeoutMs ?? DEFAULT_TIMEOUT_MS, 30_000);
  const maxBytes = Math.min(opts.maxBytes ?? DEFAULT_MAX_BYTES, HARD_MAX_BYTES);

  let url = await assertSafeUrl(rawUrl);
  const blockedHeaders = new Set(["host", "content-length", "connection", "accept-encoding"]);
  const headers: Record<string, string> = {
    "User-Agent": BROWSER_UA,
    Accept: "text/html,application/xhtml+xml,application/xml,application/json;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    ...(opts.headers ?? {}),
  };
  for (const key of Object.keys(headers)) {
    if (blockedHeaders.has(key.toLowerCase())) delete headers[key];
  }

  let finalUrl = url.toString();
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let res: Response;
    try {
      res = await fetch(url, {
        method,
        headers,
        body: method === "GET" || method === "HEAD" ? undefined : opts.body,
        redirect: "manual",
        signal: controller.signal,
      });
    } catch (e) {
      throw new Error(
        (e as Error).name === "AbortError" ? `Timeout after ${timeoutMs}ms` : `Fetch failed: ${(e as Error).message}`
      );
    } finally {
      clearTimeout(timer);
    }
    finalUrl = url.toString();
    if (res.status >= 300 && res.status < 400) {
      const loc = res.headers.get("location");
      if (!loc) {
        return { status: res.status, statusText: res.statusText, finalUrl, headers: pickHeaders(res), bytes: 0, text: "" };
      }
      try {
        url = new URL(loc, url);
      } catch {
        throw new Error(`Invalid redirect Location: ${loc}`);
      }
      await assertSafeUrl(url.toString());
      continue;
    }
    const body = await readBodyLimited(res, maxBytes);
    return { status: res.status, statusText: res.statusText, finalUrl, headers: pickHeaders(res), bytes: body.bytes, text: body.text };
  }
  throw new Error(`Too many redirects (max ${MAX_REDIRECTS})`);
}

// ── HTML extraction (zero-dependency) ───────────────────

function decodeEntities(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "...")
    .replace(/&mdash;/g, "--")
    .replace(/&ndash;/g, "-");
}

function cleanHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");
}

function htmlToText(html: string): string {
  let text = cleanHtml(html)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/li>/gi, "")
    .replace(/<h([1-6])[^>]*>/gi, (_, n) => `\n\n${"#".repeat(Number(n))} `)
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<p[^>]*>/gi, "\n\n")
    .replace(/<\/p>/gi, "")
    .replace(/<tr[^>]*>/gi, "\n")
    .replace(/<td[^>]*>|<\/td>/gi, " | ")
    .replace(/<\/tr>/gi, "\n")
    .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, " [img: $1] ")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ");
  return decodeEntities(text).trim();
}

function htmlToMarkdown(html: string): string {
  let md = cleanHtml(html)
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, inner) => {
      const label = inner.replace(/<[^>]+>/g, "").trim();
      if (!label || !/^https?:\/\//i.test(href)) return label || href;
      return `[${label}](${href})`;
    })
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/li>/gi, "")
    .replace(/<h([1-6])[^>]*>/gi, (_, n) => `\n\n${"#".repeat(Number(n))} `)
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<p[^>]*>/gi, "\n\n")
    .replace(/<\/p>/gi, "")
    .replace(/<tr[^>]*>/gi, "\n")
    .replace(/<td[^>]*>|<\/td>/gi, " | ")
    .replace(/<\/tr>/gi, "\n")
    .replace(/<pre[^>]*>/gi, "\n```\n")
    .replace(/<\/pre>/gi, "\n```\n")
    .replace(/<code[^>]*>/gi, "`")
    .replace(/<\/code>/gi, "`")
    .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, " ![img: $1] ")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ");
  return decodeEntities(md).trim();
}

function extractLinks(html: string, base: URL): string[] {
  const out = new Set<string>();
  const re = /<a[^>]+href=["']([^"']+)["']/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const href = m[1];
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("javascript:")) continue;
    try {
      const u = new URL(href, base);
      if (u.protocol === "http:" || u.protocol === "https:") out.add(u.toString());
    } catch {
      /* skip malformed */
    }
  }
  return [...out];
}

function extractTitle(html: string): string {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(m[1].replace(/<[^>]+>/g, "")).trim() : "";
}

function isCloudflareChallenge(text: string): boolean {
  return (
    text.length > 50 &&
    text.includes("Just a moment") &&
    (text.includes("security verification") ||
      text.includes("checking your browser") ||
      text.includes("Please stand by") ||
      text.includes("DDoS protection") ||
      text.includes("Enable JavaScript") ||
      text.includes("challenge-platform") ||
      text.includes("cf_chl_opt"))
  );
}

// ── Free search: DuckDuckGo HTML (POST) → Bing RSS fallback ─

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

function parseDuckDuckGo(html: string): SearchResult[] {
  const links: Array<{ href: string; title: string }> = [];
  const linkRe = /<a[^>]*class="result__a"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let m: RegExpExecArray | null;
  while ((m = linkRe.exec(html)) !== null) {
    const title = decodeEntities(m[2].replace(/<[^>]+>/g, "")).trim();
    if (!title) continue;
    const uddg = m[1].match(/uddg=([^&]+)/);
    links.push({ href: uddg ? decodeURIComponent(uddg[1]) : m[1], title });
  }
  const snippets: string[] = [];
  const snipRe = /<a[^>]*class="result__snippet"[^>]*>([\s\S]*?)<\/a>/gi;
  while ((m = snipRe.exec(html)) !== null) {
    const s = decodeEntities(m[1].replace(/<[^>]+>/g, "")).trim();
    if (s) snippets.push(s);
  }
  return links.map((l, i) => ({ title: l.title, url: l.href, snippet: snippets[i] ?? "" }));
}

async function searchDuckDuckGo(query: string, count: number): Promise<SearchResult[] | null> {
  const res = await fetchGuarded("https://html.duckduckgo.com/html/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `q=${encodeURIComponent(query)}`,
    timeoutMs: 10_000,
    maxBytes: 400_000,
  });
  const blocked =
    res.status !== 200 ||
    res.text.includes("anomaly") ||
    res.text.includes("bots use DuckDuckGo") ||
    res.text.includes("challenge-form") ||
    res.text.includes("Please complete the following challenge");
  if (blocked) return null;
  const results = parseDuckDuckGo(res.text);
  return results.length > 0 ? results.slice(0, count) : null;
}

function decodeBingUrl(href: string): string {
  if (href.startsWith("https://www.bing.com/ck/a")) {
    const m = href.match(/[?&]u=([^&]+)/);
    if (m) {
      try {
        const decoded = Buffer.from(decodeURIComponent(m[1]).replace(/^a1/, ""), "base64").toString("utf8");
        if (/^https?:\/\//i.test(decoded)) return decoded;
      } catch {
        /* keep original */
      }
    }
  }
  return href;
}

function parseBingHtml(html: string): SearchResult[] {
  const results: SearchResult[] = [];
  const blockRe = /<li class="b_algo"[\s\S]*?<\/li>/g;
  let m: RegExpExecArray | null;
  while ((m = blockRe.exec(html)) !== null) {
    const block = m[0];
    const urlMatch = block.match(/<h2[^>]*>\s*<a[^>]*href="([^"]*)"[^>]*>/);
    const url = urlMatch ? decodeBingUrl(decodeEntities(urlMatch[1])) : "";
    const title = decodeEntities((block.match(/<h2[^>]*>\s*<a[^>]*href="[^"]*"[^>]*>([\s\S]*?)<\/a>\s*<\/h2>/) ?? [])[1] ?? "").replace(/<[^>]+>/g, "").trim();
    const snippet = decodeEntities((block.match(/<p[^>]*>([\s\S]*?)<\/p>/) ?? [])[1] ?? "").replace(/<[^>]+>/g, "").trim();
    if (title && url && !url.startsWith("javascript:")) results.push({ title, url, snippet });
  }
  return results;
}

async function searchWeb(query: string, count: number): Promise<{ results: SearchResult[]; source: string }> {
  const ddg = await searchDuckDuckGo(query, count);
  if (ddg) return { results: ddg, source: "DuckDuckGo" };
  const bing = await fetchGuarded(`https://www.bing.com/search?q=${encodeURIComponent(query)}&setlang=en`, {
    timeoutMs: 10_000,
    maxBytes: 500_000,
  });
  if (bing.status !== 200) throw new Error(`DuckDuckGo is blocking this server's IP and the Bing fallback returned HTTP ${bing.status}`);
  const results = parseBingHtml(bing.text).slice(0, count);
  if (results.length === 0) throw new Error("DuckDuckGo is blocking this server's IP and the Bing fallback returned no parseable results");
  return { results, source: "Bing (DuckDuckGo blocked this server's IP)" };
}

// ── Free bypass strategies (JS-rendered / CF-protected) ─

async function fetchViaCfWorker(rawUrl: string): Promise<{ text: string; source: string } | null> {
  if (!CF_WORKER_URL) return null;
  try {
    const res = await fetchGuarded(`${CF_WORKER_URL}?url=${encodeURIComponent(rawUrl)}`, {
      timeoutMs: 20_000,
      maxBytes: 500_000,
    });
    if (res.status !== 200 || res.text.length < 50 || isCloudflareChallenge(res.text)) return null;
    return { text: res.text.slice(0, 60_000), source: "Cloudflare Worker (own free deployment)" };
  } catch {
    return null;
  }
}

async function fetchViaJina(rawUrl: string): Promise<{ text: string; source: string } | null> {
  try {
    const res = await fetchGuarded(`https://r.jina.ai/${rawUrl}`, {
      timeoutMs: 20_000,
      maxBytes: 500_000,
      headers: { Accept: "text/plain, text/markdown, */*" },
    });
    if (res.status !== 200 || res.text.length < 50 || isCloudflareChallenge(res.text)) return null;
    const bodyIdx = res.text.indexOf("Markdown Content:");
    const content = bodyIdx >= 0 ? res.text.slice(bodyIdx + "Markdown Content:".length).trim() : res.text.trim();
    return { text: content.slice(0, 60_000), source: "Jina Reader (free proxy)" };
  } catch {
    return null;
  }
}

async function browserScrape(rawUrl: string): Promise<{ title: string; text: string; source: string }> {
  const cf = await fetchViaCfWorker(rawUrl);
  if (cf) return { title: extractTitle(cf.text), text: htmlToMarkdown(cf.text), source: cf.source };
  const jina = await fetchViaJina(rawUrl);
  if (jina) return { title: "", text: jina.text, source: jina.source };
  const res = await fetchGuarded(rawUrl, { timeoutMs: 15_000, maxBytes: 500_000 });
  if (isCloudflareChallenge(res.text)) {
    throw new Error(
      "Site returned a Cloudflare challenge. Free bypass options: (1) deploy the included browser-worker/ (2-minute, free Cloudflare account) and set PROMPTMIKA_CF_WORKER_URL on the server — it fetches from inside Cloudflare's network so challenges are not shown; (2) try web_search for cached snippets instead."
    );
  }
  return { title: extractTitle(res.text), text: htmlToMarkdown(res.text), source: `direct fetch (HTTP ${res.status})` };
}

// ── Crawl with robots.txt respect ───────────────────────

const robotsCache = new Map<string, string[]>();

async function loadRobotsDisallow(origin: string): Promise<string[]> {
  const u = new URL(origin);
  const key = u.hostname;
  if (robotsCache.has(key)) return robotsCache.get(key) ?? [];
  let disallow: string[] = [];
  try {
    const res = await fetchGuarded(`${u.protocol}//${u.host}/robots.txt`, { timeoutMs: 5_000, maxBytes: 50_000 });
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
  } catch {
    /* robots fetch failure = allow */
  }
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

interface CrawlPage {
  url: string;
  depth: number;
  status: number;
  title: string;
  content: string;
  links: number;
}

async function crawlSite(
  seedUrl: string,
  opts: { maxPages: number; maxDepth: number; sameDomain: boolean; extract: "text" | "markdown" }
): Promise<{ pages: CrawlPage[]; skipped: string[]; errors: string[] }> {
  const seed = await assertSafeUrl(seedUrl);
  const queue: Array<{ url: string; depth: number }> = [{ url: seed.toString(), depth: 0 }];
  const visited = new Set<string>([seed.toString()]);
  const pages: CrawlPage[] = [];
  const skipped: string[] = [];
  const errors: string[] = [];

  const isInScope = (raw: string): boolean => {
    let u: URL;
    try {
      u = new URL(raw);
    } catch {
      return false;
    }
    if (u.protocol !== "http:" && u.protocol !== "https:") return false;
    if (opts.sameDomain && u.hostname !== seed.hostname) return false;
    return !visited.has(u.toString());
  };

  while (queue.length > 0 && pages.length < opts.maxPages) {
    const batch = queue.splice(0, Math.min(3, opts.maxPages - pages.length));
    const results = await Promise.all(
      batch.map(async (item): Promise<{ kind: "page"; page: CrawlPage } | { kind: "skip"; url: string; reason: string } | { kind: "error"; url: string; message: string }> => {
        const u = new URL(item.url);
        if (!(await robotsAllow(u))) {
          visited.add(u.toString());
          return { kind: "skip", url: item.url, reason: "robots.txt" };
        }
        try {
          const res = await fetchGuarded(item.url, { timeoutMs: 12_000, maxBytes: 400_000 });
          if (isCloudflareChallenge(res.text)) {
            return { kind: "skip", url: item.url, reason: "Cloudflare challenge (use browser_scrape)" };
          }
          const links = extractLinks(res.text, u);
          if (item.depth < opts.maxDepth) {
            for (const link of links) {
              if (pages.length + queue.length >= opts.maxPages) break;
              if (isInScope(link)) {
                visited.add(link);
                queue.push({ url: link, depth: item.depth + 1 });
              }
            }
          }
          const content = (opts.extract === "markdown" ? htmlToMarkdown(res.text) : htmlToText(res.text)).slice(0, 30_000);
          return {
            kind: "page",
            page: { url: item.url, depth: item.depth, status: res.status, title: extractTitle(res.text), content, links: links.length },
          };
        } catch (e) {
          return { kind: "error", url: item.url, message: (e as Error).message };
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

// ── Registration ────────────────────────────────────────

export function registerWebTools(server: McpServer): void {
  server.tool(
    "web_fetch",
    "Fetch any URL over HTTP(S) like curl: method, custom headers, request body, redirects, status + headers + content. Extract modes: raw (as received), text (readable article text), markdown (with links), links (all hrefs), json (pretty-printed if parseable). SSRF-guarded (private/internal IPs blocked), 1 MB size cap, timeout configurable. Free, no API key.",
    {
      url: z.string().min(1).describe("URL to fetch (http/https only)"),
      method: z.enum(["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"]).default("GET").describe("HTTP method (default GET)"),
      headers: z.record(z.string(), z.string()).optional().describe("Custom request headers (host/content-length/accept-encoding are ignored)"),
      body: z.string().optional().describe("Request body for POST/PUT/PATCH"),
      extract: z.enum(["raw", "text", "markdown", "links", "json"]).default("text").describe("How to extract the response (default text)"),
      max_bytes: z.number().int().min(1).max(1_048_576).optional().describe("Response size cap in bytes (default 262144, max 1048576)"),
      timeout_ms: z.number().int().min(1_000).max(30_000).optional().describe("Per-request timeout in ms (default 15000, max 30000)"),
    },
    async ({ url, method, headers, body, extract, max_bytes, timeout_ms }) => {
      try {
        const res = await fetchGuarded(url, { method, headers, body, timeoutMs: timeout_ms, maxBytes: max_bytes });
        let content = res.text;
        if (extract === "text") content = htmlToText(content);
        else if (extract === "markdown") content = htmlToMarkdown(content);
        else if (extract === "links") {
          try {
            content = extractLinks(content, new URL(res.finalUrl)).join("\n");
          } catch {
            content = "";
          }
        } else if (extract === "json") {
          try {
            content = JSON.stringify(JSON.parse(content), null, 2);
          } catch {
            /* keep raw */
          }
        }
        const cap = max_bytes ?? DEFAULT_MAX_BYTES;
        const head = `HTTP ${res.status} ${res.statusText}\nFinal URL: ${res.finalUrl}\nBytes: ${res.bytes}${res.bytes >= cap ? " (size cap reached)" : ""}\nContent-Type: ${res.headers["content-type"] ?? "?"}`;
        return { content: [{ type: "text" as const, text: `${head}\n\n${content}` }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `web_fetch error: ${(e as Error).message}` }], isError: true };
      }
    }
  );

  server.tool(
    "web_crawl",
    "Crawl a site starting from a seed URL: breadth-first, depth-limited, same-domain by default, robots.txt respected. Returns each page as title + extracted content (text or markdown) with its status and link count. Free, no API key.",
    {
      url: z.string().min(1).describe("Seed URL to start crawling from"),
      max_pages: z.number().int().min(1).max(10).default(8).describe("Max pages to fetch (default 8, max 10)"),
      max_depth: z.number().int().min(0).max(3).default(2).describe("Max link depth from seed (default 2, 0 = seed only)"),
      same_domain: z.boolean().default(true).describe("Only follow links on the seed's domain (default true)"),
      extract: z.enum(["text", "markdown"]).default("markdown").describe("Extraction format per page (default markdown)"),
    },
    async ({ url, max_pages, max_depth, same_domain, extract }) => {
      try {
        const { pages, skipped, errors } = await crawlSite(url, {
          maxPages: max_pages ?? 8,
          maxDepth: max_depth ?? 2,
          sameDomain: same_domain ?? true,
          extract: extract ?? "markdown",
        });
        if (pages.length === 0) {
          const detail = [...skipped, ...errors].map((s) => `- ${s}`).join("\n");
          return {
            content: [{ type: "text" as const, text: `web_crawl: no pages fetched.\n${detail}` }],
            isError: true,
          };
        }
        const sections = pages.map(
          (p, i) =>
            `## [${i + 1}/${pages.length}] ${p.url} (depth ${p.depth}, HTTP ${p.status}, ${p.links} links)\n${p.title ? `# ${p.title}\n\n` : ""}${p.content || "(empty)"}`
        );
        const meta = `# Crawl of ${url}\nPages: ${pages.length} | Skipped: ${skipped.length} | Errors: ${errors.length}\n`;
        const skippedList = skipped.length ? `\nSkipped:\n${skipped.map((s) => `- ${s}`).join("\n")}` : "";
        const errorList = errors.length ? `\nErrors:\n${errors.map((s) => `- ${s}`).join("\n")}` : "";
        return { content: [{ type: "text" as const, text: `${meta}${skippedList}${errorList}\n\n${sections.join("\n\n")}` }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `web_crawl error: ${(e as Error).message}` }], isError: true };
      }
    }
  );

  server.tool(
    "web_search",
    "Search the web for pages before fetching/crawling them: DuckDuckGo HTML first (free), automatic Bing RSS fallback if DuckDuckGo blocks the server's IP (free). Returns ranked results with title, URL, and snippet, and names the engine used.",
    {
      query: z.string().min(1).describe("Search query"),
      count: z.number().int().min(1).max(20).default(8).describe("Number of results (default 8, max 20)"),
    },
    async ({ query, count }) => {
      try {
        const { results, source } = await searchWeb(query, count ?? 8);
        if (results.length === 0) {
          return { content: [{ type: "text" as const, text: `web_search: no results (${source}).` }] };
        }
        const lines = results.map((r, i) => `${i + 1}. ${r.title}\n   ${r.url}\n   ${r.snippet}`);
        return { content: [{ type: "text" as const, text: `[Results from ${source}]\n\n${lines.join("\n\n")}` }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `web_search error: ${(e as Error).message}` }], isError: true };
      }
    }
  );

  server.tool(
    "browser_scrape",
    "Fetch a URL that resists plain HTTP fetching (JS-rendered or Cloudflare-protected). Strategy chain: (1) your own Cloudflare Worker if PROMPTMIKA_CF_WORKER_URL is set — fetches from inside Cloudflare's network so challenges are bypassed, (2) Jina Reader free proxy (no key), (3) direct fetch. Returns title + markdown text and names the strategy used. For sites that still block, the error explains the free fix.",
    {
      url: z.string().min(1).describe("URL to scrape"),
    },
    async ({ url }) => {
      try {
        const { title, text, source } = await browserScrape(url);
        const head = title ? `# ${title}\n\n` : "";
        return { content: [{ type: "text" as const, text: `${head}${text}\n\n*[Scraped via ${source}]*` }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `browser_scrape error: ${(e as Error).message}` }], isError: true };
      }
    }
  );
}