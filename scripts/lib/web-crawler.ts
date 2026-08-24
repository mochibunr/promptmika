// PromptMika v3.5.0 web tools — MCP registration layer.
// Core logic lives in lib/web/. This file registers MCP tools only.

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { fetchGuarded } from "./web/fetch";
import { crawlSite } from "./web/crawl";
import { searchWeb } from "./web/search";
import { scrapeUrl } from "./web/scrape";
import { htmlToText, htmlToMarkdown, extractLinks, extractTitle } from "./web/html";

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
          try { content = extractLinks(content, new URL(res.finalUrl)).join("\n"); } catch { content = ""; }
        } else if (extract === "json") {
          try { content = JSON.stringify(JSON.parse(content), null, 2); } catch { /* keep raw */ }
        }
        const cap = max_bytes ?? 262_144;
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
          return { content: [{ type: "text" as const, text: `web_crawl: no pages fetched.\n${detail}` }], isError: true };
        }
        const sections = pages.map(
          (p, i) => `## [${i + 1}/${pages.length}] ${p.url} (depth ${p.depth}, HTTP ${p.status}, ${p.links} links)\n${p.title ? `# ${p.title}\n\n` : ""}${p.content || "(empty)"}`
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
    "Search the web for pages before fetching/crawling them: DuckDuckGo HTML first (free), Serper/Google fallback if available (free 2500 queries), Bing HTML fallback as last resort (free). Returns ranked results with title, URL, and snippet, and names the engine used.",
    {
      query: z.string().min(1).describe("Search query"),
      count: z.number().int().min(1).max(20).default(8).describe("Number of results (default 8, max 20)"),
    },
    async ({ query, count }) => {
      try {
        const { results, source } = await searchWeb(query, { count: count ?? 8 });
        if (results.length === 0) return { content: [{ type: "text" as const, text: `web_search: no results (${source}).` }] };
        const lines = results.map((r, i) => `${i + 1}. ${r.title}\n   ${r.url}\n   ${r.snippet}`);
        return { content: [{ type: "text" as const, text: `[Results from ${source}]\n\n${lines.join("\n\n")}` }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `web_search error: ${(e as Error).message}` }], isError: true };
      }
    }
  );

  server.tool(
    "browser_scrape",
    "Fetch a URL that resists plain HTTP fetching (JS-rendered or Cloudflare-protected). Strategy chain: (1) your own Cloudflare Worker if PROMPTMIKA_CF_WORKER_URL is set, (2) Jina Reader free proxy (no key), (3) direct fetch. Returns title + markdown text and names the strategy used.",
    {
      url: z.string().min(1).describe("URL to scrape"),
    },
    async ({ url }) => {
      try {
        const { title, text, source } = await scrapeUrl(url);
        const head = title ? `# ${title}\n\n` : "";
        return { content: [{ type: "text" as const, text: `${head}${text}\n\n*[Scraped via ${source}]*` }] };
      } catch (e) {
        return { content: [{ type: "text" as const, text: `browser_scrape error: ${(e as Error).message}` }], isError: true };
      }
    }
  );
}
