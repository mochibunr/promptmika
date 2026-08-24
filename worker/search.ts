// Search engines: DDG -> Serper -> Bing. Cloudflare Workers compatible.

import { fetchGuarded } from "./fetch";
import { decodeEntities } from "./html";

function parseDuckDuckGo(html: string): Array<{ title: string; url: string; snippet: string }> {
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

function decodeBingUrl(href: string): string {
  if (href.startsWith("https://www.bing.com/ck/a")) {
    const m = href.match(/[?&]u=([^&]+)/);
    if (m) {
      try {
        const decoded = atob(decodeURIComponent(m[1]).replace(/^a1/, ""));
        if (decoded.startsWith("http")) return decoded;
      } catch {}
    }
  }
  return href;
}

function parseBingHtml(html: string): Array<{ title: string; url: string; snippet: string }> {
  const results: Array<{ title: string; url: string; snippet: string }> = [];
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

export async function searchWeb(
  query: string,
  count: number,
  serperKey?: string
): Promise<{ results: Array<{ title: string; url: string; snippet: string }>; source: string }> {
  // 1. DuckDuckGo
  try {
    const res = await fetchGuarded("https://html.duckduckgo.com/html/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `q=${encodeURIComponent(query)}`,
      timeoutMs: 10_000,
      maxBytes: 400_000,
    });
    const blocked = res.status !== 200 || res.text.includes("anomaly") ||
      res.text.includes("bots use DuckDuckGo") || res.text.includes("challenge-form");
    if (!blocked) {
      const results = parseDuckDuckGo(res.text).slice(0, count);
      if (results.length > 0) return { results, source: "DuckDuckGo" };
    }
  } catch {}

  // 2. Serper
  const key = serperKey || (globalThis as any).SERPER_API_KEY || "";
  if (key) {
    try {
      const res = await fetchGuarded("https://google.serper.dev/search", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-API-KEY": key },
        body: JSON.stringify({ q: query, num: count }),
        timeoutMs: 10_000,
        maxBytes: 500_000,
      });
      if (res.status === 200) {
        const data = JSON.parse(res.text);
        const organic: any[] = data.organic ?? [];
        const results = organic.slice(0, count).map((r: any) => ({
          title: decodeEntities(r.title).trim(),
          url: r.link,
          snippet: decodeEntities(r.snippet ?? "").trim(),
        }));
        if (results.length > 0) return { results, source: "Serper (Google)" };
      }
    } catch {}
  }

  // 3. Bing
  try {
    const res = await fetchGuarded(
      `https://www.bing.com/search?q=${encodeURIComponent(query)}&setlang=en`,
      { timeoutMs: 10_000, maxBytes: 500_000 }
    );
    if (res.status === 200) {
      const results = parseBingHtml(res.text).slice(0, count);
      if (results.length > 0) return { results, source: "Bing" };
    }
  } catch {}

  throw new Error("All search engines failed (DuckDuckGo -> Serper -> Bing)");
}
