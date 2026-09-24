// Tool definitions for the MCP Worker.

import { resolveDocument, listReferences, searchReferences } from "./refs";
import { searchWeb } from "./search";
import { crawlSite } from "./crawl";
import { scrapeUrl } from "./scrape";
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
    description: "Fetch multiple public URLs in one call with PromptMika's SSRF guard. Returns status, timing, final URL, and extracted content for each target.",
    inputSchema: {
      type: "object",
      properties: {
        urls: prop("array", "URLs to fetch (max 10)", { items: { type: "string" } }),
        extract: prop("string", "Extraction mode", { enum: ["raw", "text", "markdown"], default: "text" }),
        max_bytes_each: prop("number", "Maximum bytes per URL (default 200000, max 500000)", { default: 200000 }),
      },
      required: ["urls"],
    },
    handler: async (args) => {
      const urls = (Array.isArray(args.urls) ? args.urls : []).slice(0, 10).map(String);
      const extract = String(args.extract ?? "text");
      const maxBytes = Math.max(1000, Math.min(Number(args.max_bytes_each ?? 200000), 500000));
      const results = await Promise.all(urls.map(async (url) => {
        try {
          const res = await fetchGuarded(url, { maxBytes, timeoutMs: 20_000 });
          let content = res.text;
          if (extract === "text") content = htmlToText(content);
          if (extract === "markdown") content = htmlToMarkdown(content);
          return { url, ok: true, status: res.status, final_url: res.finalUrl, timing_ms: res.timingMs, bytes: res.bytes, content: content.slice(0, 30000) };
        } catch (e) {
          return { url, ok: false, error: (e as Error).message };
        }
      }));
      return JSON.stringify(results, null, 2);
    },
  },

  extract_html: {
    description: "Extract useful content from supplied HTML without making a network request. Supports text, markdown, links, title, or a combined structural summary.",
    inputSchema: {
      type: "object",
      properties: {
        html: prop("string", "HTML source"),
        mode: prop("string", "Extraction mode", { enum: ["text", "markdown", "links", "title", "summary"], default: "markdown" }),
        base_url: prop("string", "Base URL used to resolve relative links"),
      },
      required: ["html"],
    },
    handler: async (args) => {
      const html = String(args.html);
      const mode = String(args.mode ?? "markdown");
      if (mode === "text") return htmlToText(html);
      if (mode === "markdown") return htmlToMarkdown(html);
      if (mode === "title") return (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").replace(/<[^>]+>/g, "").trim();
      if (mode === "links") {
        const base = new URL(String(args.base_url ?? "https://example.invalid/"));
        return extractLinks(html, base).join("\n");
      }
      const text = htmlToText(html);
      return JSON.stringify({
        title: (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").replace(/<[^>]+>/g, "").trim(),
        characters: html.length,
        text_characters: text.length,
        headings: (html.match(/<h[1-6]\b/gi) ?? []).length,
        links: (html.match(/<a\b/gi) ?? []).length,
        images: (html.match(/<img\b/gi) ?? []).length,
        forms: (html.match(/<form\b/gi) ?? []).length,
        text_preview: text.slice(0, 3000)
      }, null, 2);
    },
  },

  compare_extractions: {
    description: "Compare PromptMika's raw, text, and markdown extraction of a URL or supplied HTML. Useful for deciding which representation preserves the important content best.",
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
      if (!html) {
        if (!args.url) return "Provide either url or html.";
        const res = await fetchGuarded(String(args.url), { maxBytes: 600_000, timeoutMs: 20_000 });
        html = res.text;
        source = res.finalUrl;
      }
      const text = htmlToText(html);
      const markdown = htmlToMarkdown(html);
      return JSON.stringify({
        source,
        raw: { characters: html.length, preview: html.slice(0, 1800) },
        text: { characters: text.length, preview: text.slice(0, 3000) },
        markdown: { characters: markdown.length, preview: markdown.slice(0, 3000) },
        recommendation: markdown.length >= text.length * 0.55 ? "markdown" : "text"
      }, null, 2);
    },
  },

  web_scrape: {
    description: "Scrape a public URL using PromptMika's multi-strategy extraction chain. Alias of browser_scrape for clients that expect the web_scrape name.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "URL to scrape"),
        strategies: prop("array", "Strategy order", { items: { type: "string", enum: ["jina", "google-cache", "direct"] }, default: ["jina", "google-cache", "direct"] }),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const strategies = (args.strategies as ("jina" | "google-cache" | "direct")[]) ?? undefined;
      const result = await scrapeUrl(String(args.url), strategies ? { strategies } : {});
      return `${result.title ? `# ${result.title}\n\n` : ""}${result.text}\n\n---\nSource: ${result.source} | HTTP ${result.status} | ${result.timingMs}ms`;
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

  web_curl: {
    description:
      "cURL-like HTTP request. Returns full response: status, headers, body, timing, redirects, cookies. Supports any method, custom headers, body. Useful for debugging APIs, checking response headers, inspecting redirect chains.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "URL to request (http/https only)"),
        method: prop("string", "HTTP method", { enum: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"], default: "GET" }),
        headers: prop("object", "Custom request headers (key-value pairs)"),
        body: prop("string", "Request body for POST/PUT/PATCH"),
        follow_redirects: prop("boolean", "Follow redirects (default true). Set false to see 3xx response.", { default: true }),
        timeout_ms: prop("number", "Timeout in ms (default 15000, max 30000)"),
        cookies: prop("object", "Cookies to send (key-value pairs)"),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const res = await fetchGuarded(args.url as string, {
        method: args.method as string,
        headers: args.headers as Record<string, string>,
        body: args.body as string,
        timeoutMs: args.timeout_ms as number,
        followRedirects: args.follow_redirects as boolean,
        cookies: args.cookies as Record<string, string>,
      });

      const setCookies = res.headers["set-cookie"] ?? "";
      const ct = res.headers["content-type"] ?? "unknown";

      // Format request summary like curl -v
      const lines: string[] = [];
      lines.push(`> ${(args.method as string ?? "GET").toUpperCase()} ${args.url}`);
      lines.push(`> Host: ${new URL(args.url as string).host}`);
      if (args.headers) {
        for (const [k, v] of Object.entries(args.headers as Record<string, string>)) {
          lines.push(`> ${k}: ${v}`);
        }
      }
      if (args.cookies) lines.push(`> Cookie: ${Object.entries(args.cookies as Record<string, string>).map(([k, v]) => `${k}=${v}`).join("; ")}`);
      lines.push("");

      // Response headers
      lines.push(`< HTTP/${res.status >= 200 && res.status < 300 ? "1.1" : "1.1"} ${res.status} ${res.statusText}`);
      for (const [k, v] of Object.entries(res.headers)) {
        if (k === "set-cookie") continue;
        lines.push(`< ${k}: ${v}`);
      }
      if (setCookies) lines.push(`< set-cookie: ${setCookies}`);
      lines.push("");

      // Stats
      lines.push(`// ${res.bytes} bytes received in ${res.timingMs}ms`);
      if (res.redirects > 0) lines.push(`// ${res.redirects} redirect(s) followed`);
      lines.push("");

      // Body
      lines.push(res.text.slice(0, 50_000));
      if (res.bytes > 50_000) lines.push(`\n// ... truncated (${res.bytes} total bytes)`);

      return lines.join("\n");
    },
  },

  web_fetch: {
    description:
      "Fetch any URL over HTTP(S): method, custom headers, request body, redirects. Extract modes: raw, text, markdown, links, json. SSRF-guarded, 1 MB cap.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "URL to fetch (http/https only)"),
        method: prop("string", "HTTP method", { enum: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD"], default: "GET" }),
        headers: prop("object", "Custom request headers"),
        body: prop("string", "Request body for POST/PUT/PATCH"),
        extract: prop("string", "Extraction mode", { enum: ["raw", "text", "markdown", "links", "json"], default: "text" }),
        max_bytes: prop("number", "Response size cap in bytes (default 262144, max 1048576)"),
        timeout_ms: prop("number", "Per-request timeout in ms (default 15000, max 30000)"),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const res = await fetchGuarded(args.url as string, {
        method: args.method as string,
        headers: args.headers as Record<string, string>,
        body: args.body as string,
        timeoutMs: args.timeout_ms as number,
        maxBytes: args.max_bytes as number,
      });
      let content = res.text;
      const extract = (args.extract as string) ?? "text";
      if (extract === "text") content = htmlToText(content);
      else if (extract === "markdown") content = htmlToMarkdown(content);
      else if (extract === "links") {
        try { content = extractLinks(content, new URL(res.finalUrl)).join("\n"); } catch { content = ""; }
      } else if (extract === "json") {
        try { content = JSON.stringify(JSON.parse(content), null, 2); } catch {}
      }
      return `HTTP ${res.status} ${res.statusText}\nFinal URL: ${res.finalUrl}\nBytes: ${res.bytes}\nTime: ${res.timingMs}ms\nContent-Type: ${res.headers["content-type"] ?? "?"}\n\n${content}`;
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
      "Crawl a site: breadth-first, depth-limited, same-domain by default, robots.txt respected, configurable delay. Returns title + content per page with timing.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "Seed URL"),
        max_pages: prop("number", "Max pages (default 8, max 25)", { default: 8 }),
        max_depth: prop("number", "Max link depth (default 2, 0 = seed only)", { default: 2 }),
        same_domain: prop("boolean", "Only follow same-domain links (default true)", { default: true }),
        extract: prop("string", "Extraction format", { enum: ["text", "markdown"], default: "markdown" }),
        delay_ms: prop("number", "Delay between requests in ms (default 300, max 5000)", { default: 300 }),
        respect_robots: prop("boolean", "Respect robots.txt (default true)", { default: true }),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const { pages, skipped, errors } = await crawlSite(
        args.url as string,
        {
          maxPages: (args.max_pages as number) ?? 8,
          maxDepth: (args.max_depth as number) ?? 2,
          sameDomain: (args.same_domain as boolean) ?? true,
          extract: (args.extract as "text" | "markdown") ?? "markdown",
          delayMs: (args.delay_ms as number) ?? 300,
          respectRobots: (args.respect_robots as boolean) ?? true,
        }
      );
      if (pages.length === 0) return `web_crawl: no pages fetched.\n${[...skipped, ...errors].map((s) => `- ${s}`).join("\n")}`;
      const sections = pages.map((p, i) =>
        `## [${i + 1}/${pages.length}] ${p.url}\nDepth: ${p.depth} | HTTP ${p.status} | ${p.links} links | ${p.timingMs}ms\n${p.title ? `# ${p.title}\n\n` : ""}${p.content || "(empty)"}`
      );
      const totalTime = pages.reduce((s, p) => s + p.timingMs, 0);
      return `# Crawl of ${args.url}\nPages: ${pages.length} | Skipped: ${skipped.length} | Errors: ${errors.length} | Total: ${totalTime}ms\n${skipped.length ? `\nSkipped:\n${skipped.map((s) => `- ${s}`).join("\n")}` : ""}${errors.length ? `\nErrors:\n${errors.map((s) => `- ${s}`).join("\n")}` : ""}\n\n${sections.join("\n\n")}`;
    },
  },

  browser_scrape: {
    description:
      "Scrape JS-rendered or Cloudflare-protected pages. Multi-strategy: Jina Reader (free) → Google Cache (free) → Direct fetch. Returns title + markdown + timing.",
    inputSchema: {
      type: "object",
      properties: {
        url: prop("string", "URL to scrape"),
        strategies: prop("array", "Strategy order (default: jina, google-cache, direct)", {
          items: { type: "string", enum: ["jina", "google-cache", "direct"] },
          default: ["jina", "google-cache", "direct"],
        }),
      },
      required: ["url"],
    },
    handler: async (args) => {
      const strategies = (args.strategies as ("jina" | "google-cache" | "direct")[]) ?? undefined;
      const result = await scrapeUrl(args.url as string, strategies ? { strategies } : {});
      return `${result.title ? `# ${result.title}\n\n` : ""}${result.text}\n\n---\nSource: ${result.source} | HTTP ${result.status} | ${result.timingMs}ms`;
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
