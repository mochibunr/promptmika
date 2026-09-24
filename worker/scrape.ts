// PromptMika smart scraper: direct-first, quality-aware, Jina Reader fallback.

import { fetchWithRetry, looksBinaryContentType } from "./fetch";
import {
  extractPageMetadata,
  extractionQuality,
  htmlToMarkdown,
  isCloudflareChallenge,
  isLikelyJsShell,
} from "./html";
import { assertSafeUrl } from "./ssrf";

export type ScrapeStrategy = "direct" | "jina" | "google-cache";

export interface ScrapeAttempt {
  strategy: ScrapeStrategy;
  ok: boolean;
  status?: number;
  timingMs?: number;
  quality?: number;
  reason?: string;
}

export interface ScrapeResult {
  title: string;
  text: string;
  source: string;
  status: number;
  timingMs: number;
  finalUrl: string;
  quality: ReturnType<typeof extractionQuality>;
  truncated: boolean;
  attempts: ScrapeAttempt[];
}

export interface ScrapeOptions {
  strategies?: ScrapeStrategy[];
  maxChars?: number;
  noCache?: boolean;
  jinaEngine?: "default" | "direct" | "cf-browser-rendering";
  targetSelector?: string;
  removeSelector?: string;
}

function clampChars(value?: number): number {
  return Math.max(2_000, Math.min(value ?? 100_000, 160_000));
}

async function scrapeDirect(rawUrl: string, maxChars: number): Promise<ScrapeResult> {
  const res = await fetchWithRetry(rawUrl, {
    timeoutMs: 20_000,
    maxBytes: 800_000,
  }, 2);

  if (looksBinaryContentType(res.contentType)) {
    throw new Error(`Unsupported content type for scraping: ${res.contentType || "binary"}`);
  }
  if (isCloudflareChallenge(res.text)) {
    throw new Error("Cloudflare/browser challenge detected");
  }

  const markdown = htmlToMarkdown(res.text);
  const quality = extractionQuality(markdown, res.text);
  const meta = extractPageMetadata(res.text, new URL(res.finalUrl));

  return {
    title: meta.title || meta.ogTitle,
    text: markdown.slice(0, maxChars),
    source: "direct",
    status: res.status,
    timingMs: res.timingMs,
    finalUrl: res.finalUrl,
    quality,
    truncated: res.truncated || markdown.length > maxChars,
    attempts: [],
  };
}

async function scrapeViaJina(rawUrl: string, opts: ScrapeOptions, maxChars: number): Promise<ScrapeResult> {
  const target = assertSafeUrl(rawUrl).toString();
  const headers: Record<string, string> = {
    Accept: "text/plain, text/markdown, */*",
  };

  if (opts.noCache ?? true) headers["X-No-Cache"] = "true";
  if (opts.jinaEngine && opts.jinaEngine !== "default") headers["X-Engine"] = opts.jinaEngine;
  if (opts.targetSelector) headers["X-Target-Selector"] = opts.targetSelector;
  if (opts.removeSelector) headers["X-Remove-Selector"] = opts.removeSelector;

  const res = await fetchWithRetry(
    "https://r.jina.ai/" + target,
    {
      timeoutMs: 28_000,
      maxBytes: 900_000,
      headers,
    },
    1,
  );

  if (!res.ok || res.text.length < 40 || isCloudflareChallenge(res.text)) {
    throw new Error(`Jina Reader returned HTTP ${res.status} or empty/challenge content`);
  }

  const bodyIndex = res.text.indexOf("Markdown Content:");
  const markdown =
    bodyIndex >= 0
      ? res.text.slice(bodyIndex + "Markdown Content:".length).trim()
      : res.text.trim();
  const title = res.text.match(/^Title:\s*(.+)$/m)?.[1]?.trim() ?? "";
  const quality = extractionQuality(markdown);

  return {
    title,
    text: markdown.slice(0, maxChars),
    source: opts.jinaEngine && opts.jinaEngine !== "default"
      ? `Jina Reader (${opts.jinaEngine})`
      : "Jina Reader",
    status: res.status,
    timingMs: res.timingMs,
    finalUrl: target,
    quality,
    truncated: res.truncated || markdown.length > maxChars,
    attempts: [],
  };
}

export async function scrapeUrl(
  rawUrl: string,
  opts: ScrapeOptions = {},
): Promise<ScrapeResult> {
  assertSafeUrl(rawUrl);
  const maxChars = clampChars(opts.maxChars);
  const strategies = opts.strategies?.length ? opts.strategies : ["direct", "jina"];
  const attempts: ScrapeAttempt[] = [];
  let fallback: ScrapeResult | null = null;

  for (const strategy of strategies) {
    if (strategy === "google-cache") {
      attempts.push({
        strategy,
        ok: false,
        reason: "Deprecated: Google retired cached-page access. Use direct or Jina Reader.",
      });
      continue;
    }

    try {
      const result =
        strategy === "jina"
          ? await scrapeViaJina(rawUrl, opts, maxChars)
          : await scrapeDirect(rawUrl, maxChars);

      const weakDirect =
        strategy === "direct" &&
        (result.quality.thin || result.quality.score < 45);

      if (strategy === "direct" && weakDirect) {
        // Keep it in case the renderer fallback fails.
        fallback = result;
        attempts.push({
          strategy,
          ok: true,
          status: result.status,
          timingMs: result.timingMs,
          quality: result.quality.score,
          reason: "Direct extraction was thin; trying rendered fallback.",
        });
        continue;
      }

      attempts.push({
        strategy,
        ok: true,
        status: result.status,
        timingMs: result.timingMs,
        quality: result.quality.score,
      });
      result.attempts = attempts;
      return result;
    } catch (error) {
      attempts.push({
        strategy,
        ok: false,
        reason: (error as Error).message,
      });

      // A direct fetch can fail specifically because the page is a JS shell.
      // This extra probe is deliberately best-effort and never blocks the fallback.
      if (strategy === "direct") {
        try {
          const probe = await fetchWithRetry(rawUrl, { timeoutMs: 12_000, maxBytes: 250_000 }, 0);
          const md = htmlToMarkdown(probe.text);
          if (isLikelyJsShell(probe.text, md)) {
            attempts[attempts.length - 1].reason = "JS-heavy/thin shell detected; trying rendered fallback.";
          }
        } catch {}
      }
    }
  }

  if (fallback) {
    fallback.attempts = attempts;
    return fallback;
  }

  throw new Error(
    "All scrape strategies failed: " +
    attempts.map((a) => `${a.strategy}: ${a.reason ?? "failed"}`).join(" | "),
  );
}
