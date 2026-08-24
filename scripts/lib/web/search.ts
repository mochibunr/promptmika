import { fetchGuarded } from "./fetch";
import type { SearchResult, SearchOptions } from "./types";
import { decodeEntities } from "./html";

// ── DuckDuckGo (free, no key) ──────────────────────────

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

// ── Serper (Google results via API, 2500 free queries) ──

const SERPER_API = "https://google.serper.dev/search";

async function searchSerper(query: string, count: number, apiKey?: string): Promise<SearchResult[] | null> {
  const key = apiKey || process.env.SERPER_API_KEY;
  if (!key) return null;
  try {
    const res = await fetchGuarded(SERPER_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": key,
      },
      body: JSON.stringify({ q: query, num: count }),
      timeoutMs: 10_000,
      maxBytes: 500_000,
    });
    if (res.status !== 200) return null;
    const data = JSON.parse(res.text);
    const organic: Array<{ title: string; link: string; snippet: string }> = data.organic ?? [];
    return organic.slice(0, count).map((r) => ({
      title: decodeEntities(r.title).trim(),
      url: r.link,
      snippet: decodeEntities(r.snippet ?? "").trim(),
    }));
  } catch {
    return null;
  }
}

// ── Bing (free HTML scraping fallback) ──────────────────

function decodeBingUrl(href: string): string {
  if (href.startsWith("https://www.bing.com/ck/a")) {
    const m = href.match(/[?&]u=([^&]+)/);
    if (m) {
      try {
        const decoded = Buffer.from(decodeURIComponent(m[1]).replace(/^a1/, ""), "base64").toString("utf8");
        if (/^https?:\/\//i.test(decoded)) return decoded;
      } catch { /* keep original */ }
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

async function searchBing(query: string, count: number): Promise<SearchResult[] | null> {
  const bing = await fetchGuarded(`https://www.bing.com/search?q=${encodeURIComponent(query)}&setlang=en`, {
    timeoutMs: 10_000,
    maxBytes: 500_000,
  });
  if (bing.status !== 200) return null;
  const results = parseBingHtml(bing.text).slice(0, count);
  return results.length > 0 ? results : null;
}

// ── Main search: DDG → Serper → Bing ────────────────────

export async function searchWeb(
  query: string,
  opts: SearchOptions = {}
): Promise<{ results: SearchResult[]; source: string }> {
  const count = opts.count ?? 8;
  const engine = opts.engine ?? "auto";

  if (engine === "duckduckgo" || engine === "auto") {
    const ddg = await searchDuckDuckGo(query, count);
    if (ddg) return { results: ddg, source: "DuckDuckGo" };
    if (engine === "duckduckgo") throw new Error("DuckDuckGo returned no results");
  }

  if (engine === "serper" || engine === "auto") {
    const serper = await searchSerper(query, count, opts.serperApiKey);
    if (serper) return { results: serper, source: "Serper (Google)" };
    if (engine === "serper") throw new Error("Serper returned no results (check SERPER_API_KEY)");
  }

  if (engine === "bing" || engine === "auto") {
    const bing = await searchBing(query, count);
    if (bing) return { results: bing, source: "Bing" };
  }

  throw new Error("All search engines failed (DuckDuckGo → Serper → Bing)");
}
