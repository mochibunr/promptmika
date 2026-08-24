import { fetchGuarded, fetchWithRetry } from "./fetch";
import { extractTitle, htmlToMarkdown, isCloudflareChallenge } from "./html";
import type { ScrapeResult, ScrapeOptions } from "./types";

async function scrapeViaJina(rawUrl: string): Promise<{ title: string; text: string; source: string } | null> {
  try {
    const res = await fetchWithRetry(`https://r.jina.ai/${rawUrl}`, {
      timeoutMs: 25_000,
      maxBytes: 600_000,
      headers: { Accept: "text/plain, text/markdown, */*", "X-No-Cache": "true" },
    }, 1);
    if (res.status !== 200 || res.text.length < 50 || isCloudflareChallenge(res.text)) return null;
    const bodyIdx = res.text.indexOf("Markdown Content:");
    const content = bodyIdx >= 0 ? res.text.slice(bodyIdx + "Markdown Content:".length).trim() : res.text.trim();
    const titleMatch = res.text.match(/^Title:\s*(.+)$/m);
    return { title: titleMatch ? titleMatch[1].trim() : "", text: content.slice(0, 80_000), source: "Jina Reader" };
  } catch { return null; }
}

async function scrapeViaGoogleCache(rawUrl: string): Promise<{ title: string; text: string; source: string } | null> {
  try {
    const cacheUrl = `https://webcache.googleusercontent.com/search?q=cache:${encodeURIComponent(rawUrl)}`;
    const res = await fetchGuarded(cacheUrl, { timeoutMs: 15_000, maxBytes: 500_000 });
    if (res.status !== 200 || res.text.length < 100) return null;
    if (isCloudflareChallenge(res.text)) return null;
    const title = extractTitle(res.text);
    const text = htmlToMarkdown(res.text).slice(0, 60_000);
    if (text.length < 50) return null;
    return { title, text, source: "Google Cache" };
  } catch { return null; }
}

async function scrapeDirect(rawUrl: string): Promise<{ title: string; text: string; source: string }> {
  const res = await fetchWithRetry(rawUrl, { timeoutMs: 15_000, maxBytes: 600_000 }, 1);
  if (isCloudflareChallenge(res.text)) {
    throw new Error("Cloudflare challenge detected. Options: (1) use Google Cache, (2) use web_search for cached snippets.");
  }
  return { title: extractTitle(res.text), text: htmlToMarkdown(res.text).slice(0, 80_000), source: `direct fetch (HTTP ${res.status})` };
}

export async function scrapeUrl(rawUrl: string, opts: ScrapeOptions = {}): Promise<ScrapeResult> {
  const strategies = opts.strategies ?? ["jina", "google-cache", "direct"];

  for (const strategy of strategies) {
    if (strategy === "jina") {
      const r = await scrapeViaJina(rawUrl);
      if (r) return r;
    } else if (strategy === "google-cache") {
      const r = await scrapeViaGoogleCache(rawUrl);
      if (r) return r;
    } else if (strategy === "direct") {
      return await scrapeDirect(rawUrl);
    }
  }
  throw new Error("All scrape strategies failed");
}
