import { fetchWithRetry, looksBinaryContentType, PROMPTMIKA_UA } from "./fetch";
import { decodeEntities } from "./html";
import { loadRobotsPolicy } from "./robots";
import { assertSafeUrl } from "./ssrf";

export interface SitemapResult {
  seed: string;
  sitemapUrls: string[];
  urls: string[];
  errors: string[];
  robots: {
    status: number;
    source: string;
    declaredSitemaps: string[];
  };
}

function xmlLocs(xml: string): string[] {
  const out: string[] = [];
  const re = /<loc\b[^>]*>([\s\S]*?)<\/loc>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(xml)) !== null) {
    const value = decodeEntities(match[1]).trim();
    if (value) out.push(value);
  }
  return out;
}

function inScope(url: URL, seed: URL, sameDomain: boolean): boolean {
  return !sameDomain || url.hostname === seed.hostname || url.hostname.endsWith("." + seed.hostname);
}

export async function discoverSitemap(
  seedUrl: string,
  opts: { maxUrls?: number; maxSitemaps?: number; sameDomain?: boolean } = {},
): Promise<SitemapResult> {
  const seed = assertSafeUrl(seedUrl);
  const maxUrls = Math.max(1, Math.min(opts.maxUrls ?? 500, 2_000));
  const maxSitemaps = Math.max(1, Math.min(opts.maxSitemaps ?? 12, 30));
  const sameDomain = opts.sameDomain ?? true;

  const robots = await loadRobotsPolicy(seed.origin);
  const initial = robots.sitemaps.length > 0
    ? robots.sitemaps
    : [seed.origin + "/sitemap.xml"];

  const queue = [...initial];
  const seenSitemaps = new Set<string>();
  const pageUrls = new Set<string>();
  const errors: string[] = [];

  while (queue.length > 0 && seenSitemaps.size < maxSitemaps && pageUrls.size < maxUrls) {
    const raw = queue.shift()!;
    let sitemapUrl: URL;
    try {
      sitemapUrl = assertSafeUrl(new URL(raw, seed.origin).toString());
    } catch (error) {
      errors.push(raw + ": " + (error as Error).message);
      continue;
    }

    if (seenSitemaps.has(sitemapUrl.toString())) continue;
    if (!inScope(sitemapUrl, seed, sameDomain)) continue;
    seenSitemaps.add(sitemapUrl.toString());

    try {
      const res = await fetchWithRetry(sitemapUrl.toString(), {
        timeoutMs: 15_000,
        maxBytes: 900_000,
        userAgent: PROMPTMIKA_UA,
      }, 1);

      if (!res.ok) {
        errors.push(sitemapUrl.toString() + ": HTTP " + res.status);
        continue;
      }
      if (looksBinaryContentType(res.contentType) && !res.contentType.includes("xml")) {
        errors.push(sitemapUrl.toString() + ": unsupported content type " + res.contentType);
        continue;
      }

      const locs = xmlLocs(res.text);
      const isIndex = /<sitemapindex\b/i.test(res.text);
      if (isIndex) {
        for (const loc of locs) {
          if (seenSitemaps.size + queue.length >= maxSitemaps) break;
          try {
            const nested = new URL(loc, sitemapUrl);
            if (inScope(nested, seed, sameDomain)) queue.push(nested.toString());
          } catch {}
        }
      } else {
        for (const loc of locs) {
          if (pageUrls.size >= maxUrls) break;
          try {
            const page = assertSafeUrl(new URL(loc, sitemapUrl).toString());
            if (inScope(page, seed, sameDomain)) {
              page.hash = "";
              pageUrls.add(page.toString());
            }
          } catch {}
        }
      }
    } catch (error) {
      errors.push(sitemapUrl.toString() + ": " + (error as Error).message);
    }
  }

  return {
    seed: seed.toString(),
    sitemapUrls: [...seenSitemaps],
    urls: [...pageUrls],
    errors,
    robots: {
      status: robots.status,
      source: robots.source,
      declaredSitemaps: robots.sitemaps,
    },
  };
}
