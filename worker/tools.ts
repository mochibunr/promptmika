// Tool definitions for the MCP Worker.

import { resolveDocument, listReferences, searchReferences } from "./refs";
import { searchWeb } from "./search";
import { crawlSite } from "./crawl";
import { scrapeUrl, type ScrapeStrategy } from "./scrape";
import { fetchGuarded, fetchWithRetry, looksBinaryContentType } from "./fetch";
import { htmlToText, htmlToMarkdown, extractLinks, extractLinkRecords, extractPageMetadata, extractionQuality } from "./html";
import { PACKS, PACK_FILE_CAP, loadPack } from "./pack";
import { scanCode, summarize, type Severity } from "./security-scan";
import { generateScaffold, SUPPORTED_LANGUAGES, PROJECT_TYPES } from "./scaffold";
import { listWebTemplates, searchWebTemplateLibrary, loadWebTemplateStudy } from "./web-templates";
import { discoverSitemap } from "./sitemap";
import { probeUrl } from "./probe";

const BATCH_DEFAULT = 20000;

function prop(type: string, description: string, extra?: Record<string, unknown>) {
  return { type, description, ...extra };
}

export interface ToolDef {
  description: string;
  inputSchema: { type: "object"; properties: Record<string, unknown>; required?: string[] };
  handler: (args: Record<string, unknown>, env?: { SERPER_API_KEY?: string }) => Promise<string>;
}


function docStats(content: string) {
  const lines = content.split("\n");
  const words = content.trim() ? content.trim().split(/\s+/).length : 0;
  const headings = lines.filter((line) => /^#{1,6}\s/.test(line)).length;
  const codeFences = lines.filter((line) => /^\s*\`\`\`/.test(line)).length;
  return { lines: lines.length, words, headings, code_blocks: Math.floor(codeFences / 2), characters: content.length };
}

function extractMeta(html: string, name: string): string {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const a = html.match(new RegExp(`<meta[^>]+(?:name|property)=["']${escaped}["'][^>]+content=["']([^"']*)["'][^>]*>`, "i"));
  const b = html.match(new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]+(?:name|property)=["']${escaped}["'][^>]*>`, "i"));
  return (a?.[1] ?? b?.[1] ?? "").trim();
}

async function verifyUrl(url: string) {
  const res = await fetchGuarded(url, { timeoutMs: 20_000, maxBytes: 750_000 });
  const html = res.text;
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").replace(/<[^>]+>/g, "").trim();
  const viewport = extractMeta(html, "viewport");
  const description = extractMeta(html, "description");
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
    ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
    ?? "";
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  const imgCount = (html.match(/<img\b/gi) ?? []).length;
  const imgAltCount = (html.match(/<img\b[^>]*\balt=["'][^"']*["']/gi) ?? []).length;
  const formCount = (html.match(/<form\b/gi) ?? []).length;
  const scriptCount = (html.match(/<script\b/gi) ?? []).length;
  const links = (() => { try { return extractLinks(html, new URL(res.finalUrl)); } catch { return []; } })();
  return {
    status: res.status,
    statusText: res.statusText,
    finalUrl: res.finalUrl,
    timingMs: res.timingMs,
    bytes: res.bytes,
    contentType: res.headers["content-type"] ?? "",
    title,
    description,
    viewport,
    canonical,
    h1Count,
    imgCount,
    imgAltCount,
    formCount,
    scriptCount,
    linkCount: links.length,
    links,
    html,
  };
}

export const TOOLS: Record<string, ToolDef> = {

  // ── PromptMika context / inspection tools ─────────────

  promptmika_info: {
    description: "Describe the running PromptMika server: version, capabilities, packs, tool names, reference count, and runtime notes.",
    inputSchema: { type: "object", properties: {} },
    handler: async () => {
      return JSON.stringify({
        name: "promptmika",
        version: "3.7.0",
        transport: "JSON-RPC 2.0 over HTTP/SSE",
        reference_count: listReferences().length,
        web_template_count: listWebTemplates("all").length,
        web_template_source: "WyvernCW/WebTemplate",
        pack_count: Object.keys(PACKS).length,
        tool_count: Object.keys(TOOLS).length,
        packs: Object.keys(PACKS),
        tools: Object.keys(TOOLS),
        notes: [
          "Runs directly on the Vercel MCP endpoint.",
          "Web requests are SSRF-guarded.",
          "Reference and pack tools use embedded build-time knowledge.",
          "Web templates are read-only study references loaded on demand from WyvernCW/WebTemplate; direct cloning is forbidden."
        ]
      }, null, 2);
    },
  },

  get_context: {
    description: "Build a task-specific PromptMika context brief. Given what you are trying to do, recommends the most relevant packs and references and returns concise previews so an agent knows what to load next without guessing.",
    inputSchema: {
      type: "object",
      properties: {
        task: prop("string", "What you are building, debugging, researching, or changing."),
        max_references: prop("number", "Maximum matched references to return (default 8, max 15)", { default: 8 }),
      },
      required: ["task"],
    },
    handler: async (args) => {
      const task = String(args.task ?? "").trim();
      const max = Math.max(1, Math.min(Number(args.max_references ?? 8), 15));
      const matches = searchReferences(task).slice(0, max);
      const lower = task.toLowerCase();
      const recommendedPacks: string[] = [];
      const choose = (name: string, re: RegExp) => { if (re.test(lower)) recommendedPacks.push(name); };
      choose("load_frontend_design", /front|ui|ux|css|react|website|layout|design|component/);
      choose("load_design_systems", /design system|style|theme|visual|brand/);
      choose("load_backend_api", /backend|api|server|endpoint|database|auth/);
      choose("load_security", /security|vuln|xss|sql|csrf|ssrf|secret|auth/);
      choose("load_testing", /test|vitest|jest|playwright|e2e|unit|integration/);
      choose("load_state_management", /state|redux|zustand|jotai|signal/);
      choose("load_systems_devops", /devops|deploy|docker|ci|performance|architecture|system/);
      choose("load_context_engine", /context|agent|workflow|iterate|quality/);
      choose("load_token_efficiency", /token|prompt|compact|context window/);
      choose("load_specialized_pages", /landing|portfolio|dashboard|prototype|deck|social|page/);
      if (recommendedPacks.length === 0) recommendedPacks.push("load_contract");

      const templateMatches = /front|ui|ux|website|landing|portfolio|design|style|brand|app|dashboard|commerce/i.test(task)
        ? searchWebTemplateLibrary(task).slice(0, 5).map(({ id, name, folder, kind, description, liveDemo, score }) => ({ id, name, folder, kind, description, liveDemo, score }))
        : [];
      const previews = matches.map((m) => {
        const doc = resolveDocument(m.name);
        return {
          path: m.name,
          score: m.score,
          preview: doc?.content.slice(0, 420).replace(/\s+/g, " ").trim() ?? ""
        };
      });

      return JSON.stringify({
        task,
        recommended_packs: [...new Set(recommendedPacks)],
        references: previews,
        web_template_matches: templateMatches,
        next_step: "Load only the packs/references relevant to the task, then execute against those references."
      }, null, 2);
    },
  },

  load_claude_policy: {
    description: "Load the user's PromptMika CLAUDE policy. Defaults to the condensed digest; request full=true only when the task needs the complete policy.",
    inputSchema: {
      type: "object",
      properties: {
        full: prop("boolean", "Load full CLAUDE.md instead of CLAUDE.digest.md", { default: false }),
        offset: prop("number", "0-based line offset", { default: 0 }),
        limit: prop("number", "Maximum lines to return (default 5000, max 20000)", { default: 5000 }),
      },
    },
    handler: async (args) => {
      const path = args.full ? "claude://CLAUDE.md" : "claude://CLAUDE.digest.md";
      const doc = resolveDocument(path);
      if (!doc) return "CLAUDE policy is not embedded in this build.";
      const lines = doc.content.split("\n");
      const start = Math.max(0, Number(args.offset ?? 0));
      const limit = Math.max(1, Math.min(Number(args.limit ?? 5000), 20000));
      const end = Math.min(start + limit, lines.length);
      return lines.slice(start, end).join("\n") +
        (end < lines.length ? `\n\n--- Continue with offset=${end}; ${lines.length - end} lines remain. ---` : "");
    },
  },

  inspect_reference: {
    description: "Inspect a PromptMika reference without dumping the whole file. Returns metadata, size/statistics, headings, and a configurable preview.",
    inputSchema: {
      type: "object",
      properties: {
        path: prop("string", "Reference URI or filename"),
        preview_chars: prop("number", "Preview characters (default 1600, max 8000)", { default: 1600 }),
      },
      required: ["path"],
    },
    handler: async (args) => {
      const doc = resolveDocument(String(args.path));
      if (!doc) return `Reference not found: ${args.path}`;
      const previewChars = Math.max(200, Math.min(Number(args.preview_chars ?? 1600), 8000));
      const headings = doc.content.split("\n").filter((line) => /^#{1,6}\s/.test(line)).slice(0, 80);
      return JSON.stringify({
        name: doc.name,
        mime_type: doc.mimeType,
        stats: docStats(doc.content),
        headings,
        preview: doc.content.slice(0, previewChars)
      }, null, 2);
    },
  },

  list_web_templates: {
    description: "List the 25 read-only WebTemplate references available to PromptMika, grouped as origin, frontend, full-stack, and visual style studies.",
    inputSchema: {
      type: "object",
      properties: {
        kind: prop("string", "Optional category filter", { enum: ["all", "origin", "frontend", "fullstack", "style"], default: "all" }),
      },
    },
    handler: async (args) => {
      const items = listWebTemplates(String(args.kind ?? "all"));
      return JSON.stringify({
        source: "WyvernCW/WebTemplate",
        policy: "Read-only study references. Learn the design DNA; never clone code/assets.",
        count: items.length,
        templates: items,
      }, null, 2);
    },
  },

  search_web_templates: {
    description: "Search PromptMika's 25-item WebTemplate reference library by name, category, visual direction, or product purpose.",
    inputSchema: {
      type: "object",
      properties: {
        query: prop("string", "Template intent, style, or product type, e.g. 'playful professional', 'editorial', '3D gallery', 'fullstack notes'"),
        limit: prop("number", "Maximum results (default 8, max 25)", { default: 8 }),
      },
      required: ["query"],
    },
    handler: async (args) => {
      const limit = Math.max(1, Math.min(Number(args.limit ?? 8), 25));
      const results = searchWebTemplateLibrary(String(args.query)).slice(0, limit);
      return JSON.stringify({
        query: String(args.query),
        source: "WyvernCW/WebTemplate",
        results,
      }, null, 2);
    },
  },

  load_web_template: {
    description: "Load one WebTemplate study reference from WyvernCW/WebTemplate. Returns read-only study notes plus a strict anti-copy/adaptation contract; it never clones the template into the active project.",
    inputSchema: {
      type: "object",
      properties: {
        name: prop("string", "Template ID, name, or folder, e.g. '17', 'Kaleo', or 'kaleo-style'"),
      },
      required: ["name"],
    },
    handler: async (args) => loadWebTemplateStudy(String(args.name)),
  },

  browser_verify: {
    description: "Verify a deployed web page over HTTP and inspect basic browser-facing signals: status, redirects, title, meta description, viewport, canonical URL, H1 count, image alt coverage, forms, scripts, and links.",
    inputSchema: {
      type: "object",
      properties: { url: prop("string", "Public http/https URL to verify") },
      required: ["url"],
    },
    handler: async (args) => {
      const v = await verifyUrl(String(args.url));
      return JSON.stringify({
        ok: v.status >= 200 && v.status < 400,
        status: v.status,
        status_text: v.statusText,
        final_url: v.finalUrl,
        timing_ms: v.timingMs,
        bytes: v.bytes,
        content_type: v.contentType,
        title: v.title,
        description: v.description,
        viewport: v.viewport,
        canonical: v.canonical,
        h1_count: v.h1Count,
        images: v.imgCount,
        images_with_alt: v.imgAltCount,
        forms: v.formCount,
        scripts: v.scriptCount,
        links: v.linkCount,
        checks: {
          has_title: Boolean(v.title),
          has_description: Boolean(v.description),
          has_viewport: Boolean(v.viewport),
          single_h1: v.h1Count === 1,
          image_alt_coverage: v.imgCount === 0 ? 1 : Number((v.imgAltCount / v.imgCount).toFixed(2))
        }
      }, null, 2);
    },
  },

  debug_website: {
    description: "Diagnose a website from its real HTTP response and HTML. Reports redirects, metadata, accessibility-adjacent markup signals, suspicious error text, and a sample of discovered links.",
    inputSchema: {
      type: "object",
      properties: { url: prop("string", "Public http/https URL to diagnose") },
      required: ["url"],
    },
    handler: async (args) => {
      const v = await verifyUrl(String(args.url));
      const text = htmlToText(v.html).slice(0, 12000);
      const issuePatterns = [
        /application error/i, /internal server error/i, /404 not found/i,
        /hydration failed/i, /uncaught (?:type)?error/i, /failed to load/i
      ];
      const detected = issuePatterns.filter((re) => re.test(v.html) || re.test(text)).map((re) => re.source);
      return JSON.stringify({
        url: String(args.url),
        final_url: v.finalUrl,
        http: { status: v.status, timing_ms: v.timingMs, bytes: v.bytes, content_type: v.contentType },
        document: {
          title: v.title, description: v.description, viewport: v.viewport, canonical: v.canonical,
          h1_count: v.h1Count, images: v.imgCount, images_with_alt: v.imgAltCount,
          forms: v.formCount, scripts: v.scriptCount, links: v.linkCount
        },
        detected_error_signatures: detected,
        link_sample: v.links.slice(0, 30),
        text_preview: text.slice(0, 2500)
      }, null, 2);
    },
  },

  debug_screenshot: {
    description: "Prepare screenshot-focused diagnostics for a public page: verifies that the page is reachable, reports viewport/meta/render-risk signals, and returns the exact capture target. This runtime does not bundle a headless Chromium binary, so it does not fabricate a pixel screenshot.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "Public http/https page URL"),
        width: prop("number", "Requested viewport width", { default: 1440 }),
        height: prop("number", "Requested viewport height", { default: 900 }),
        full_page: prop("boolean", "Whether the intended capture is full-page", { default: true }),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const v = await verifyUrl(String(args.url));
      return JSON.stringify({
        capture_target: v.finalUrl,
        requested_viewport: {
          width: Math.max(320, Math.min(Number(args.width ?? 1440), 3840)),
          height: Math.max(320, Math.min(Number(args.height ?? 900), 2160)),
          full_page: args.full_page ?? true
        },
        reachable: v.status >= 200 && v.status < 400,
        status: v.status,
        title: v.title,
        viewport_meta: v.viewport,
        render_risks: {
          heavy_script_count: v.scriptCount > 30,
          missing_viewport_meta: !v.viewport,
          document_too_large: v.bytes > 700_000
        },
        limitation: "No Chromium binary is bundled in this deployment, so this tool reports screenshot readiness rather than returning fake pixels."
      }, null, 2);
    },
  },

  web_batch_fetch: {
    description: "Fetch multiple public URLs concurrently with retries, extraction, redirect/truncation metadata, and SSRF protection. Good for comparing docs or collecting a small research set in one call.",
    inputSchema: {
      type: "object",
      properties: {
        urls: prop("array", "URLs to fetch (max 12)", { items: { type: "string" } }),
        extract: prop("string", "Extraction mode", { enum: ["auto", "raw", "text", "markdown", "links", "json"], default: "auto" }),
        max_bytes_each: prop("number", "Maximum captured bytes per URL (default 250000, max 750000)", { default: 250000 }),
        timeout_ms: prop("number", "Per-URL total timeout in ms (default 18000, max 30000)", { default: 18000 }),
        retries: prop("number", "Retries for temporary/network failures (default 1, max 2)", { default: 1 }),
        concurrency: prop("number", "Parallel requests (default 4, max 6)", { default: 4 }),
        include_headers: prop("boolean", "Include response headers in each result", { default: false }),
      },
      required: ["urls"],
    },
    handler: async (args) => {
      const urls = (Array.isArray(args.urls) ? args.urls : []).slice(0, 12).map(String);
      const extract = String(args.extract ?? "auto");
      const maxBytes = Math.max(1000, Math.min(Number(args.max_bytes_each ?? 250000), 750000));
      const timeoutMs = Math.max(1000, Math.min(Number(args.timeout_ms ?? 18000), 30000));
      const retries = Math.max(0, Math.min(Number(args.retries ?? 1), 2));
      const concurrency = Math.max(1, Math.min(Number(args.concurrency ?? 4), 6));
      const includeHeaders = Boolean(args.include_headers ?? false);
      const results: unknown[] = [];

      for (let i = 0; i < urls.length; i += concurrency) {
        const chunk = urls.slice(i, i + concurrency);
        const chunkResults = await Promise.all(chunk.map(async (url) => {
          try {
            const res = await fetchWithRetry(url, { maxBytes, timeoutMs }, retries);
            let mode = extract;
            if (mode === "auto") {
              if (res.contentType.includes("json")) mode = "json";
              else if (res.contentType.includes("html") || /<html\b/i.test(res.text)) mode = "markdown";
              else mode = "text";
            }

            let content = res.text;
            if (looksBinaryContentType(res.contentType)) content = "(binary response body omitted)";
            else if (mode === "text") content = htmlToText(content);
            else if (mode === "markdown") content = htmlToMarkdown(content);
            else if (mode === "links") {
              try { content = extractLinks(content, new URL(res.finalUrl)).join("\n"); } catch { content = ""; }
            } else if (mode === "json") {
              try { content = JSON.stringify(JSON.parse(content), null, 2); } catch {}
            }

            const quality = mode === "markdown" ? extractionQuality(content, res.text) : undefined;
            return {
              url,
              ok: res.ok,
              status: res.status,
              final_url: res.finalUrl,
              timing_ms: res.timingMs,
              bytes: res.bytes,
              content_length: res.contentLength ?? null,
              content_type: res.contentType,
              charset: res.charset,
              redirects: res.redirectChain,
              truncated: res.truncated,
              extract_mode: mode,
              quality,
              headers: includeHeaders ? res.headers : undefined,
              content: content.slice(0, 40000),
            };
          } catch (error) {
            return { url, ok: false, error: (error as Error).message };
          }
        }));
        results.push(...chunkResults);
      }
      return JSON.stringify(results, null, 2);
    },
  },

  extract_html: {
    description: "Extract useful structure from supplied HTML without a network request: clean text/Markdown, plain or structured links, metadata, title, or a compact structural summary with extraction quality.",
    inputSchema: {
      type: "object",
      properties: {
        html: prop("string", "HTML source"),
        mode: prop("string", "Extraction mode", { enum: ["text", "markdown", "links", "structured_links", "metadata", "title", "summary"], default: "markdown" }),
        base_url: prop("string", "Base URL used to resolve relative links/canonical URLs"),
        max_chars: prop("number", "Maximum output characters for text/markdown (default 60000, max 120000)", { default: 60000 }),
      },
      required: ["html"],
    },
    handler: async (args) => {
      const html = String(args.html);
      const mode = String(args.mode ?? "markdown");
      const maxChars = Math.max(500, Math.min(Number(args.max_chars ?? 60000), 120000));
      const base = new URL(String(args.base_url ?? "https://example.invalid/"));

      if (mode === "text") return htmlToText(html).slice(0, maxChars);
      if (mode === "markdown") return htmlToMarkdown(html).slice(0, maxChars);
      if (mode === "title") return extractPageMetadata(html, base).title;
      if (mode === "metadata") return JSON.stringify(extractPageMetadata(html, base), null, 2);
      if (mode === "links") return extractLinks(html, base).join("\n");
      if (mode === "structured_links") return JSON.stringify(extractLinkRecords(html, base), null, 2);

      const text = htmlToText(html);
      const markdown = htmlToMarkdown(html);
      return JSON.stringify({
        metadata: extractPageMetadata(html, base),
        characters: html.length,
        text_characters: text.length,
        markdown_characters: markdown.length,
        headings: (html.match(/<h[1-6]\b/gi) ?? []).length,
        links: (html.match(/<a\b/gi) ?? []).length,
        images: (html.match(/<img\b/gi) ?? []).length,
        forms: (html.match(/<form\b/gi) ?? []).length,
        scripts: (html.match(/<script\b/gi) ?? []).length,
        extraction_quality: extractionQuality(markdown, html),
        text_preview: text.slice(0, 3000),
      }, null, 2);
    },
  },

  compare_extractions: {
    description: "Compare raw HTML, cleaned text, and Markdown extraction for a URL or supplied HTML. Reports quality signals and recommends the representation that preserves useful content with less context noise.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "URL to fetch when html is not supplied"),
        html: prop("string", "Optional HTML source; skips network fetch when provided"),
      },
    },
    handler: async (args) => {
      let html = typeof args.html === "string" ? args.html : "";
      let source = "provided HTML";
      let fetchMeta: unknown = undefined;
      if (!html) {
        if (!args.url) return "Provide either url or html.";
        const res = await fetchWithRetry(String(args.url), { maxBytes: 650000, timeoutMs: 20000 }, 1);
        html = res.text;
        source = res.finalUrl;
        fetchMeta = {
          status: res.status,
          content_type: res.contentType,
          bytes: res.bytes,
          truncated: res.truncated,
          redirects: res.redirectChain,
          timing_ms: res.timingMs,
        };
      }

      const text = htmlToText(html);
      const markdown = htmlToMarkdown(html);
      const quality = extractionQuality(markdown, html);
      const textWords = text.trim() ? text.trim().split(/\s+/).length : 0;
      const markdownWords = markdown.trim() ? markdown.trim().split(/\s+/).length : 0;
      const recommendation = quality.score >= 45 && markdownWords >= Math.max(30, textWords * 0.55)
        ? "markdown"
        : "text";

      return JSON.stringify({
        source,
        fetch: fetchMeta,
        metadata: extractPageMetadata(html, source === "provided HTML" ? undefined : new URL(source)),
        raw: { characters: html.length, preview: html.slice(0, 1800) },
        text: { characters: text.length, words: textWords, preview: text.slice(0, 3000) },
        markdown: { characters: markdown.length, words: markdownWords, quality, preview: markdown.slice(0, 3000) },
        recommendation,
      }, null, 2);
    },
  },

  web_scrape: {
    description: "Smart page scraper: direct fetch first for speed/privacy, then rendered Jina Reader fallback when extraction is thin or JS-heavy. Reports extraction quality and every attempted strategy.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "Public URL to scrape"),
        strategies: prop("array", "Strategy order. google-cache is accepted only as a deprecated compatibility value.", { items: { type: "string", enum: ["direct", "jina", "google-cache"] }, default: ["direct", "jina"] }),
        max_chars: prop("number", "Maximum extracted characters (default 100000, max 160000)", { default: 100000 }),
        no_cache: prop("boolean", "Ask Jina Reader not to cache/track the request (default true)", { default: true }),
        jina_engine: prop("string", "Jina rendering engine", { enum: ["default", "direct", "cf-browser-rendering"], default: "default" }),
        target_selector: prop("string", "Optional CSS selector to keep in Jina Reader"),
        remove_selector: prop("string", "Optional CSS selector(s) to remove in Jina Reader"),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const strategies: ScrapeStrategy[] | undefined = Array.isArray(args.strategies) ? args.strategies.map(String) as ScrapeStrategy[] : undefined;
      const result = await scrapeUrl(String(args.url), {
        strategies,
        maxChars: Number(args.max_chars ?? 100000),
        noCache: Boolean(args.no_cache ?? true),
        jinaEngine: String(args.jina_engine ?? "default") as "default" | "direct" | "cf-browser-rendering",
        targetSelector: args.target_selector ? String(args.target_selector) : undefined,
        removeSelector: args.remove_selector ? String(args.remove_selector) : undefined,
      });
      return [
        result.title ? "# " + result.title + "\n" : "",
        result.text,
        "\n---",
        "Source: " + result.source,
        "Final URL: " + result.finalUrl,
        "HTTP: " + result.status,
        "Time: " + result.timingMs + "ms",
        "Quality: " + result.quality.score + "/100 (" + result.quality.words + " words)",
        "Truncated: " + result.truncated,
        "Attempts: " + JSON.stringify(result.attempts),
      ].filter(Boolean).join("\n");
    },
  },

  // ── Reference tools ──────────────────────────────────

  search_references: {
    description: "Search the PromptMika knowledge base for reference files relevant to a coding topic. Returns matching file URIs to load.",
    inputSchema: { type: "object", properties: { query: prop("string", "Search query, e.g. 'sql injection' or 'design tokens'") }, required: ["query"] },
    handler: async (args) => {
      const results = searchReferences(args.query as string);
      return results.length === 0
        ? "No references matched."
        : `Matching references (load via references://{path}):\n${results.map((r) => `- ${r.name}`).join("\n")}`;
    },
  },

  load_reference: {
    description: "Load a knowledge file by URI: references://{path}, skill://SKILL.md, design://DESIGN.md (the project's design language), guidelines://GUIDELINES.md (AI web UX/UI/motion guidelines), claude://CLAUDE.digest.md, claude://CLAUDE.md. Files over 20000 lines are returned in batches.",
    inputSchema: {
      type: "object",
      properties: {
        path: prop("string", "File URI, e.g. 'references://DESIGN_BIBLE.md'"),
        offset: prop("number", "0-based line offset for paging (default 0)"),
        limit: prop("number", "Max lines to return (default: whole file if <=200, else 200)"),
      },
      required: ["path"],
    },
    handler: async (args) => {
      const doc = resolveDocument(args.path as string);
      if (!doc) return `File not found. Available: ${listReferences().slice(0, 20).join(", ")}...`;
      const lines = doc.content.split("\n");
      const total = lines.length;
      const start = Math.min(Math.max((args.offset as number) ?? 0, 0), total);
      const end = args.limit !== undefined
        ? Math.min(start + (args.limit as number), total)
        : total <= BATCH_DEFAULT ? total : Math.min(start + BATCH_DEFAULT, total);
      let text = lines.slice(start, end).join("\n");
      if (end < total) {
        text += `\n\n--- Batch ${start + 1}-${end} of ${total}. Continue: load_reference(path="${args.path}", offset=${end}) ---`;
      } else if (total > BATCH_DEFAULT && start > 0) {
        text += `\n\n--- End of file (${total} lines). Fully read. ---`;
      }
      return text;
    },
  },

  list_references: {
    description: "List the full catalog of knowledge references available in the PromptMika knowledge base.",
    inputSchema: { type: "object", properties: {} },
    handler: async () => {
      const all = listReferences();
      return `PromptMika knowledge base (${all.length} files):\n${all.map((r) => `- ${r}`).join("\n")}`;
    },
  },

  // ── Pack tools ──────────────────────────────────────

  ...Object.fromEntries(
    Object.entries(PACKS).map(([toolName, pack]) => {
      const fileCount = pack.files.length;
      return [toolName, {
        description: `Load a bundle of ${fileCount} related PromptMika knowledge files in one call. ${pack.description} Files: ${pack.files.join(", ")}. Files are served in full — only files longer than ${PACK_FILE_CAP} lines are paged.`,
        inputSchema: {
          type: "object",
          properties: {
            file_offset: prop("number", `File index to start from (0-${fileCount - 1}, default 0). Use to skip already-loaded files.`),
          },
        },
        handler: async (args: Record<string, unknown>) => {
          const result = loadPack(toolName, { resolveDocument }, args.file_offset as number);
          if (typeof result === "string") return result;
          return result.text;
        },
      }];
    })
  ),

  // ── Web tools ────────────────────────────────────────


  web_probe: {
    description: "Lightweight site/HTTP preflight. Uses HEAD with bounded GET fallback and reports redirects, content/cache metadata, security headers, HTML metadata, robots status, sitemap declarations, and timing without scraping the whole page.",
    inputSchema: {
      type: "object",
      properties: { url: prop("string", "Public http/https URL to probe") },
      required: ["url"],
    },
    handler: async (args) => JSON.stringify(await probeUrl(String(args.url)), null, 2),
  },

  web_sitemap: {
    description: "Discover site URLs from robots.txt and XML sitemaps without crawling every page body. Recursively follows sitemap indexes with bounded URL and sitemap counts.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "Seed site URL"),
        max_urls: prop("number", "Maximum discovered page URLs (default 500, max 2000)", { default: 500 }),
        max_sitemaps: prop("number", "Maximum sitemap files to inspect (default 12, max 30)", { default: 12 }),
        same_domain: prop("boolean", "Restrict sitemaps and URLs to seed domain/subdomains (default true)", { default: true }),
      },
      required: ["url"],
    },
    handler: async (args) => JSON.stringify(await discoverSitemap(String(args.url), {
      maxUrls: Number(args.max_urls ?? 500),
      maxSitemaps: Number(args.max_sitemaps ?? 12),
      sameDomain: Boolean(args.same_domain ?? true),
    }), null, 2),
  },

  web_curl: {
    description:
      "Advanced cURL-like HTTP debugger. Supports methods, query params, headers, cookies, JSON/body payloads, bounded redirects, safe retries, body caps, and either verbose curl-style or structured JSON output.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "URL to request (http/https only)"),
        method: prop("string", "HTTP method", { enum: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"], default: "GET" }),
        query: prop("object", "Optional query parameters appended to the URL"),
        headers: prop("object", "Custom request headers (key-value pairs)"),
        cookies: prop("object", "Cookies to send (key-value pairs)"),
        body: prop("string", "Raw request body for POST/PUT/PATCH/DELETE"),
        json: prop("object", "JSON request body. Ignored when body is provided; Content-Type is set automatically."),
        follow_redirects: prop("boolean", "Follow redirects (default true)", { default: true }),
        max_redirects: prop("number", "Maximum redirects (default 8, max 12)", { default: 8 }),
        timeout_ms: prop("number", "Total timeout across the redirect chain in ms (default 15000, max 30000)", { default: 15000 }),
        max_bytes: prop("number", "Maximum response bytes captured (default 262144, max 1048576)", { default: 262144 }),
        retries: prop("number", "Retries for safe methods and temporary failures (default 0, max 2)", { default: 0 }),
        include_body: prop("boolean", "Include response body in output (default true)", { default: true }),
        output: prop("string", "Output format", { enum: ["verbose", "json"], default: "verbose" }),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const url = new URL(String(args.url));
      if (args.query && typeof args.query === "object") {
        for (const [key, value] of Object.entries(args.query as Record<string, unknown>)) {
          if (Array.isArray(value)) {
            for (const item of value) url.searchParams.append(key, String(item));
          } else if (value !== undefined && value !== null) {
            url.searchParams.set(key, String(value));
          }
        }
      }

      const headers: Record<string, string> = { ...((args.headers as Record<string, string>) ?? {}) };
      let body = args.body !== undefined ? String(args.body) : undefined;
      if (body === undefined && args.json && typeof args.json === "object") {
        body = JSON.stringify(args.json);
        if (!Object.keys(headers).some((key) => key.toLowerCase() === "content-type")) {
          headers["Content-Type"] = "application/json";
        }
      }

      const requestOptions = {
        method: String(args.method ?? "GET"),
        headers,
        body,
        timeoutMs: Number(args.timeout_ms ?? 15000),
        maxBytes: Number(args.max_bytes ?? 262144),
        followRedirects: Boolean(args.follow_redirects ?? true),
        maxRedirects: Number(args.max_redirects ?? 8),
        cookies: (args.cookies as Record<string, string>) ?? undefined,
      };
      const retries = Math.max(0, Math.min(Number(args.retries ?? 0), 2));
      const res = retries > 0
        ? await fetchWithRetry(url.toString(), requestOptions, retries)
        : await fetchGuarded(url.toString(), requestOptions);

      const includeBody = Boolean(args.include_body ?? true);
      const binary = looksBinaryContentType(res.contentType);
      const responseBody = !includeBody
        ? undefined
        : binary
          ? "(binary response body omitted)"
          : res.text;

      if (String(args.output ?? "verbose") === "json") {
        return JSON.stringify({
          request: {
            url: url.toString(),
            method: String(args.method ?? "GET").toUpperCase(),
            headers,
            cookies: args.cookies ?? undefined,
            body_bytes: body ? body.length : 0,
          },
          response: {
            ok: res.ok,
            status: res.status,
            status_text: res.statusText,
            final_url: res.finalUrl,
            final_method: res.method,
            headers: res.headers,
            content_type: res.contentType,
            charset: res.charset,
            content_length: res.contentLength ?? null,
            captured_bytes: res.bytes,
            truncated: res.truncated,
            redirects: res.redirectChain,
            timing_ms: res.timingMs,
            body: responseBody,
          },
        }, null, 2);
      }

      const lines: string[] = [];
      lines.push("> " + String(args.method ?? "GET").toUpperCase() + " " + url.toString());
      for (const [key, value] of Object.entries(headers)) lines.push("> " + key + ": " + value);
      if (args.cookies) {
        lines.push("> Cookie: " + Object.entries(args.cookies as Record<string, string>).map(([k, v]) => k + "=" + v).join("; "));
      }
      if (body !== undefined) lines.push("> Body: " + body.length + " characters");
      lines.push("");

      for (const hop of res.redirectChain) {
        lines.push("< " + hop.status + " " + hop.method + " " + hop.url);
        lines.push("< Location: " + hop.location);
        lines.push("");
      }

      lines.push("< HTTP " + res.status + " " + res.statusText);
      lines.push("< Final-URL: " + res.finalUrl);
      lines.push("< Final-Method: " + res.method);
      for (const [key, value] of Object.entries(res.headers)) lines.push("< " + key + ": " + value);
      lines.push("");
      lines.push("// captured=" + res.bytes + " bytes" +
        (res.contentLength !== undefined ? " declared=" + res.contentLength : "") +
        " time=" + res.timingMs + "ms redirects=" + res.redirects +
        " truncated=" + res.truncated);
      lines.push("// content-type=" + (res.contentType || "unknown") + " charset=" + res.charset);
      if (includeBody) {
        lines.push("");
        lines.push(responseBody ?? "");
      }
      return lines.join("\n");
    },
  },

  web_fetch: {
    description:
      "General-purpose HTTP fetcher with redirects, retries, cookies, custom headers/body, auto extraction, structured links/metadata, truncation reporting, and structured JSON output when needed.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "URL to fetch (http/https only)"),
        method: prop("string", "HTTP method", { enum: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"], default: "GET" }),
        headers: prop("object", "Custom request headers"),
        cookies: prop("object", "Cookies to send"),
        body: prop("string", "Request body for methods that accept one"),
        follow_redirects: prop("boolean", "Follow redirects (default true)", { default: true }),
        max_redirects: prop("number", "Maximum redirects (default 8, max 12)", { default: 8 }),
        retries: prop("number", "Retries for safe methods and temporary failures (default 1, max 2)", { default: 1 }),
        extract: prop("string", "Extraction mode", { enum: ["auto", "raw", "text", "markdown", "links", "structured_links", "metadata", "json"], default: "auto" }),
        response_format: prop("string", "Return just readable content or a structured envelope", { enum: ["content", "json"], default: "content" }),
        max_bytes: prop("number", "Response byte cap (default 350000, max 1048576)", { default: 350000 }),
        timeout_ms: prop("number", "Total timeout across redirects in ms (default 18000, max 30000)", { default: 18000 }),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const retries = Math.max(0, Math.min(Number(args.retries ?? 1), 2));
      const res = await fetchWithRetry(String(args.url), {
        method: String(args.method ?? "GET"),
        headers: (args.headers as Record<string, string>) ?? undefined,
        cookies: (args.cookies as Record<string, string>) ?? undefined,
        body: args.body !== undefined ? String(args.body) : undefined,
        followRedirects: Boolean(args.follow_redirects ?? true),
        maxRedirects: Number(args.max_redirects ?? 8),
        maxBytes: Number(args.max_bytes ?? 350000),
        timeoutMs: Number(args.timeout_ms ?? 18000),
      }, retries);

      let mode = String(args.extract ?? "auto");
      if (mode === "auto") {
        if (res.contentType.includes("json")) mode = "json";
        else if (res.contentType.includes("html") || /<html\b/i.test(res.text)) mode = "markdown";
        else mode = "text";
      }

      let content: string;
      let quality: ReturnType<typeof extractionQuality> | undefined;
      if (looksBinaryContentType(res.contentType)) {
        content = "(binary response body omitted)";
      } else if (mode === "text") {
        content = htmlToText(res.text);
      } else if (mode === "markdown") {
        content = htmlToMarkdown(res.text);
        quality = extractionQuality(content, res.text);
      } else if (mode === "links") {
        try { content = extractLinks(res.text, new URL(res.finalUrl)).join("\n"); } catch { content = ""; }
      } else if (mode === "structured_links") {
        try { content = JSON.stringify(extractLinkRecords(res.text, new URL(res.finalUrl)), null, 2); } catch { content = "[]"; }
      } else if (mode === "metadata") {
        content = JSON.stringify(extractPageMetadata(res.text, new URL(res.finalUrl)), null, 2);
      } else if (mode === "json") {
        try { content = JSON.stringify(JSON.parse(res.text), null, 2); }
        catch { content = res.text; }
      } else {
        content = res.text;
      }

      if (String(args.response_format ?? "content") === "json") {
        return JSON.stringify({
          ok: res.ok,
          status: res.status,
          status_text: res.statusText,
          requested_url: res.requestedUrl,
          final_url: res.finalUrl,
          final_method: res.method,
          timing_ms: res.timingMs,
          bytes: res.bytes,
          content_length: res.contentLength ?? null,
          content_type: res.contentType,
          charset: res.charset,
          truncated: res.truncated,
          redirects: res.redirectChain,
          headers: res.headers,
          extract_mode: mode,
          quality,
          content,
        }, null, 2);
      }

      return [
        "HTTP " + res.status + " " + res.statusText,
        "Final URL: " + res.finalUrl,
        "Method: " + res.method,
        "Bytes: " + res.bytes + (res.contentLength !== undefined ? " / " + res.contentLength : ""),
        "Time: " + res.timingMs + "ms",
        "Content-Type: " + (res.contentType || "?"),
        "Charset: " + res.charset,
        "Redirects: " + res.redirects,
        "Truncated: " + res.truncated,
        quality ? "Extraction quality: " + quality.score + "/100" : "",
        "",
        content,
      ].filter((line) => line !== "").join("\n");
    },
  },

  web_search: {
    description:
      "Search the web: DuckDuckGo first (free), Serper/Google fallback (free 2500 queries), Bing last resort (free). Returns title, URL, snippet.",
    inputSchema: {
      type: "object",
      properties: {
        query: prop("string", "Search query"),
        count: prop("number", "Number of results (default 8, max 20)", { default: 8 }),
      },
      required: ["query"],
    },
    handler: async (args, env) => {
      const count = (args.count as number) ?? 8;
      const serperKey = env?.SERPER_API_KEY;
      const { results, source } = await searchWeb(args.query as string, count, serperKey);
      if (results.length === 0) return `web_search: no results (${source}).`;
      return `[Results from ${source}]\n\n${results.map((r, i) => `${i + 1}. ${r.title}\n   ${r.url}\n   ${r.snippet}`).join("\n\n")}`;
    },
  },

  web_crawl: {
    description:
      "Production-minded bounded crawler: breadth-first, robots-aware, canonical-deduplicated, tracking-cleaned, content-type filtered, same-domain by default, with include/exclude patterns, nofollow controls, concurrency, and structured crawl diagnostics.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "Seed URL"),
        max_pages: prop("number", "Maximum fetched pages (default 10, max 40)", { default: 10 }),
        max_depth: prop("number", "Maximum link depth (default 2, max 6; 0 = seed only)", { default: 2 }),
        same_domain: prop("boolean", "Restrict navigation to the seed hostname (default true)", { default: true }),
        include_subdomains: prop("boolean", "Allow subdomains when same_domain=true (default false)", { default: false }),
        extract: prop("string", "Per-page extraction format", { enum: ["text", "markdown", "none"], default: "markdown" }),
        delay_ms: prop("number", "Minimum delay between crawl batches in ms (default 250, max 5000)", { default: 250 }),
        respect_robots: prop("boolean", "Respect robots.txt (default true)", { default: true }),
        concurrency: prop("number", "Parallel page requests (default 2, max 4)", { default: 2 }),
        include_patterns: prop("array", "Only crawl URLs matching at least one glob-like pattern, e.g. */docs/*", { items: { type: "string" } }),
        exclude_patterns: prop("array", "Skip URLs matching any glob-like pattern, e.g. */login*", { items: { type: "string" } }),
        follow_nofollow: prop("boolean", "Follow rel=nofollow links (default false)", { default: false }),
        strip_tracking: prop("boolean", "Remove utm_*, gclid, fbclid and similar tracking params before dedupe (default true)", { default: true }),
        per_page_chars: prop("number", "Maximum extracted characters per page (default 30000, max 80000)", { default: 30000 }),
        timeout_ms: prop("number", "Per-page fetch timeout in ms (default 15000, max 30000)", { default: 15000 }),
        response_format: prop("string", "Markdown report or structured JSON", { enum: ["markdown", "json"], default: "markdown" }),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const result = await crawlSite(String(args.url), {
        maxPages: Number(args.max_pages ?? 10),
        maxDepth: Number(args.max_depth ?? 2),
        sameDomain: Boolean(args.same_domain ?? true),
        includeSubdomains: Boolean(args.include_subdomains ?? false),
        extract: String(args.extract ?? "markdown") as "text" | "markdown" | "none",
        delayMs: Number(args.delay_ms ?? 250),
        respectRobots: Boolean(args.respect_robots ?? true),
        concurrency: Number(args.concurrency ?? 2),
        includePatterns: Array.isArray(args.include_patterns) ? args.include_patterns.map(String) : undefined,
        excludePatterns: Array.isArray(args.exclude_patterns) ? args.exclude_patterns.map(String) : undefined,
        followNofollow: Boolean(args.follow_nofollow ?? false),
        stripTracking: Boolean(args.strip_tracking ?? true),
        perPageChars: Number(args.per_page_chars ?? 30000),
        timeoutMs: Number(args.timeout_ms ?? 15000),
      });

      if (String(args.response_format ?? "markdown") === "json") {
        return JSON.stringify(result, null, 2);
      }

      if (result.pages.length === 0) {
        return [
          "# Crawl of " + args.url,
          "No pages were successfully fetched.",
          result.skipped.length ? "\nSkipped:\n" + result.skipped.map((s) => "- " + s).join("\n") : "",
          result.errors.length ? "\nErrors:\n" + result.errors.map((s) => "- " + s).join("\n") : "",
        ].filter(Boolean).join("\n");
      }

      const sections = result.pages.map((p, index) => [
        "## [" + (index + 1) + "/" + result.pages.length + "] " + (p.title || p.finalUrl),
        "URL: " + p.url,
        p.finalUrl !== p.url ? "Final URL: " + p.finalUrl : "",
        p.canonical && p.canonical !== p.finalUrl ? "Canonical: " + p.canonical : "",
        "Depth: " + p.depth + " | HTTP " + p.status + " | " + p.contentType +
          " | " + p.bytes + " bytes | " + p.words + " words | " + p.links + " links | " + p.timingMs + "ms",
        "Truncated: " + p.truncated,
        "",
        p.content || "(content extraction disabled/empty)",
      ].filter(Boolean).join("\n"));

      return [
        "# Crawl of " + args.url,
        "Pages: " + result.pages.length +
          " | Discovered: " + result.discovered +
          " | Skipped: " + result.skipped.length +
          " | Errors: " + result.errors.length,
        "Robots: " + JSON.stringify(result.robots),
        result.skipped.length ? "\nSkipped:\n" + result.skipped.map((s) => "- " + s).join("\n") : "",
        result.errors.length ? "\nErrors:\n" + result.errors.map((s) => "- " + s).join("\n") : "",
        "",
        sections.join("\n\n"),
      ].filter(Boolean).join("\n");
    },
  },

  browser_scrape: {
    description:
      "Renderer-first scraping for difficult or JS-heavy pages. Tries Jina Reader before direct extraction and returns source, quality, truncation, timing, and strategy-attempt diagnostics.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "Public URL to scrape"),
        strategies: prop("array", "Strategy order", { items: { type: "string", enum: ["jina", "direct", "google-cache"] }, default: ["jina", "direct"] }),
        max_chars: prop("number", "Maximum extracted characters (default 100000, max 160000)", { default: 100000 }),
        no_cache: prop("boolean", "Ask Jina Reader not to cache/track the request (default true)", { default: true }),
        jina_engine: prop("string", "Jina rendering engine", { enum: ["default", "direct", "cf-browser-rendering"], default: "cf-browser-rendering" }),
        target_selector: prop("string", "Optional CSS selector to keep"),
        remove_selector: prop("string", "Optional CSS selector(s) to remove"),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const strategies: ScrapeStrategy[] = Array.isArray(args.strategies)
        ? args.strategies.map(String) as ScrapeStrategy[]
        : ["jina", "direct"];
      const result = await scrapeUrl(String(args.url), {
        strategies,
        maxChars: Number(args.max_chars ?? 100000),
        noCache: Boolean(args.no_cache ?? true),
        jinaEngine: String(args.jina_engine ?? "cf-browser-rendering") as "default" | "direct" | "cf-browser-rendering",
        targetSelector: args.target_selector ? String(args.target_selector) : undefined,
        removeSelector: args.remove_selector ? String(args.remove_selector) : undefined,
      });
      return [
        result.title ? "# " + result.title + "\n" : "",
        result.text,
        "\n---",
        "Source: " + result.source,
        "Final URL: " + result.finalUrl,
        "HTTP: " + result.status,
        "Time: " + result.timingMs + "ms",
        "Quality: " + result.quality.score + "/100 (" + result.quality.words + " words)",
        "Truncated: " + result.truncated,
        "Attempts: " + JSON.stringify(result.attempts),
      ].filter(Boolean).join("\n");
    },
  },

  // ── Security scanning ────────────────────────────────

  security_scan: {
    description:
      "Scan code for security vulnerabilities across 100+ languages. Returns categorized findings with severity, location, and fixes. Runs on provided code content — pass the file contents in `code` and its name in `filename` for language detection.",
    inputSchema: {
      type: "object",
      properties: {
        code: prop("string", "The source code content to scan"),
        filename: prop("string", "File name used for language detection, e.g. 'app.ts' or 'main.py'", { default: "snippet.txt" }),
        min_severity: prop("string", "Minimum severity to report (default: all)", { enum: ["all", "low", "medium", "high"], default: "all" }),
      },
      required: ["code"],
    },
    handler: async (args) => {
      try {
        const { findings, filesScanned } = scanCode(
          args.code as string,
          (args.filename as string) || "snippet.txt",
          ((args.min_severity as string) ?? "all").toUpperCase() as Severity | "ALL"
        );
        if (findings.length === 0) return `Files scanned: ${filesScanned}\n${summarize(findings)}`;
        const body = findings
          .map((f) => `[${f.ruleId}] ${f.ruleName} (${f.severity})\n  File: ${f.file}:${f.line}\n  Code: ${f.code}\n  Fix:  ${f.fix}`)
          .join("\n\n");
        return `Files scanned: ${filesScanned}\nSummary: ${summarize(findings)}\n\n${body}`;
      } catch (e) {
        return `Scan failed: ${(e as Error).message}`;
      }
    },
  },

  // ── Project scaffolding ──────────────────────────────

  generate_scaffold: {
    description:
      "Generate a secure, production-ready project scaffold (files + build commands) for a language. Returns the full file map as JSON so you can create every file. Includes CI/CD and security scanning by default. TypeScript scaffolds are project-type aware: web/app = Express web app, api = JSON API, cli = arg-parser CLI, lib = exported module, game = canvas game, test = vitest-only, embedded = library.",
    inputSchema: {
      type: "object",
      properties: {
        language: prop("string", "Programming language", { enum: [...SUPPORTED_LANGUAGES] }),
        project_name: prop("string", "Project name"),
        project_type: prop("string", "Project type (default: app)", { enum: [...PROJECT_TYPES], default: "app" }),
      },
      required: ["language", "project_name"],
    },
    handler: async (args) => {
      const language = args.language as string;
      const project_name = args.project_name as string;
      const project_type = (args.project_type as string) || "app";
      const result = generateScaffold(language, project_name, project_type);
      if (result.error) return result.error;
      return JSON.stringify(
        {
          language,
          project_name,
          project_type,
          build_command: result.buildCommand,
          files: Object.entries(result.files).map(([p, c]) => ({ path: p, content: c })),
        },
        null,
        2
      );
    },
  },
};
