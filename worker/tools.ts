// Tool definitions for the MCP Worker.

import { resolveDocument, listReferences, searchReferences } from "./refs";
import { searchWeb } from "./search";
import { crawlSite } from "./crawl";
import { scrapeUrl } from "./scrape";
import { fetchGuarded } from "./fetch";
import { htmlToText, htmlToMarkdown, extractLinks } from "./html";
import { PACKS, PACK_FILE_CAP, loadPack } from "./pack";
import { scanCode, summarize, type Severity } from "./security-scan";
import { generateScaffold, SUPPORTED_LANGUAGES, PROJECT_TYPES } from "./scaffold";

const BATCH_DEFAULT = 20000;

function prop(type: string, description: string, extra?: Record<string, unknown>) {
  return { type, description, ...extra };
}

export interface ToolDef {
  description: string;
  inputSchema: { type: "object"; properties: Record<string, unknown>; required?: string[] };
  handler: (args: Record<string, unknown>, env?: { SERPER_API_KEY?: string }) => Promise<string>;
}

export const TOOLS: Record<string, ToolDef> = {
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
