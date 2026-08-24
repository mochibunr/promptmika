import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerAppTool, registerAppResource, RESOURCE_MIME_TYPE } from "@modelcontextprotocol/ext-apps/server";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import { readReference, listReferences, searchReferences, readSkillFile, readDesignFile, readClaudeFile, readClaudeDigestFile, resolveDocument } from "./references";
import { scanPath, summarize, type Finding, type Severity } from "./security-scanner";
import { generateScaffold, SUPPORTED_LANGUAGES, PROJECT_TYPES } from "./scaffold-generator";
import { registerPackTools } from "./pack-tools";
import { registerWebTools } from "./web-crawler";

export function createServer() {
  const server = new McpServer({
    name: "promptmika",
    version: "3.5.0",
  });

// ---------------------------------------------------------------------------
// Resources
// ---------------------------------------------------------------------------

server.registerResource(
  "Knowledge reference",
  "references://{path}",
  {
    description: "A PromptMika knowledge reference file (coding patterns, design, security, testing, APIs, state management)",
  },
  async (uri) => {
    const doc = readReference(uri.href);
    if (!doc) return { contents: [] };
    return {
      contents: [{ uri: uri.href, mimeType: doc.mimeType, text: doc.content }],
    };
  }
);

server.registerResource(
  "PromptMika skill definition",
  "skill://SKILL.md",
  {
    description: "The full PromptMika skill: silent refinement workflow, minimalism mindset, and coding directives. READ THIS FIRST on initialization — it is the contract for how to use the MCP. Do not guess, do not pretend: batch-read via load_reference if over 10000 lines.",
  },
  async (uri) => {
    const skill = readSkillFile();
    if (!skill) return { contents: [] };
    return {
      contents: [{ uri: uri.href, mimeType: skill.mimeType, text: skill.content }],
    };
  }
);

server.registerResource(
  "PromptMika design language",
  "design://DESIGN.md",
  {
    description: "The project's DESIGN.md — the handmade papercut editorial design language this product ships with. Load it before ANY UI/design/frontend work: palette tokens (paper/ink/leaf/orange), typography rules, layout composition, motion vocabulary, and the anti-pattern ban list.",
  },
  async (uri) => {
    const design = readDesignFile();
    if (!design) return { contents: [] };
    return {
      contents: [{ uri: uri.href, mimeType: design.mimeType, text: design.content }],
    };
  }
);

server.registerResource(
  "User default CLAUDE.md policy",
  "claude://CLAUDE.md",
  {
    description: "The user's default ~/.claude/CLAUDE.md shipped with the server: their personal constitution, behavior and communication preferences, and coding rules (4,251 lines). FIRST read the condensed digest claude://CLAUDE.digest.md — it is the token-efficient first-run read and binding. Batch-read this full file via load_reference (offset/limit) ONLY when the task needs depth in a domain the digest marks [full]. CLAUDE.md wins over everything else in this server.",
  },
  async (uri) => {
    const claude = readClaudeFile();
    if (!claude) return { contents: [] };
    return {
      contents: [{ uri: uri.href, mimeType: claude.mimeType, text: claude.content }],
    };
  }
);

server.registerResource(
  "User policy digest (condensed CLAUDE.md)",
  "claude://CLAUDE.digest.md",
  {
    description: "Condensed version of claude://CLAUDE.md (~200 lines vs 4,251) — the token-efficient first-run read for subagents and new sessions. Contains all binding rules distilled: behavior, memory, storage, connectors, search/copyright, coding standards, API. Read this instead of the full file unless the task needs depth in a [full] domain. Alias: claude://digest.",
  },
  async (uri) => {
    const digest = readClaudeDigestFile();
    if (!digest) return { contents: [] };
    return {
      contents: [{ uri: uri.href, mimeType: digest.mimeType, text: digest.content }],
    };
  }
);

// ---------------------------------------------------------------------------
// Tools
// ---------------------------------------------------------------------------

server.tool(
  "search_references",
  "Search the PromptMika knowledge base for reference files relevant to a coding topic (e.g. 'security', 'responsive', 'state management'). Returns matching file URIs to load.",
  { query: z.string().describe("Search query, e.g. 'sql injection' or 'design tokens'") },
  async ({ query }) => {
    const results = searchReferences(query);
    if (results.length === 0) {
      return { content: [{ type: "text" as const, text: "No references matched." }] };
    }
    const text = results
      .map((r) => `- ${r.uri} (${r.mimeType})`)
      .join("\n");
    return {
      content: [{ type: "text" as const, text: `Matching references (load via references://{path}):\n${text}` }],
    };
  }
);

const BATCH_DEFAULT = 10000;

server.tool(
  "load_reference",
  "Load a knowledge file by URI: references://{path}, skill://SKILL.md, design://DESIGN.md (project design language), claude://CLAUDE.digest.md (condensed policy — read this first), claude://CLAUDE.md (full policy, on demand only). Files over 10000 lines are returned in 10000-line batches — page through with offset/limit. NEVER claim to know a file you have not fully read; read large files batch by batch.",
  {
    path: z.string().describe("File URI, e.g. 'references://DESIGN_BIBLE.md', 'design://DESIGN.md', 'skill://SKILL.md', 'claude://CLAUDE.digest.md', 'claude://CLAUDE.md' (bare names like 'DESIGN_BIBLE.md' are treated as references://DESIGN_BIBLE.md; 'claude://digest' aliases the digest)"),
    offset: z.number().int().min(0).optional().describe("0-based line offset for paging (default 0)"),
    limit: z.number().int().min(1).max(10000).optional().describe("Max lines to return (default: whole file if 10000 lines or fewer, otherwise 10000)"),
  },
  async ({ path, offset, limit }) => {
    const doc = resolveDocument(path);
    if (!doc) {
      const available = listReferences().map((r) => r.name).join("\n");
      return {
        content: [
          {
            type: "text" as const,
            text: `File not found. Available references:\n${available}\nAlso loadable: skill://SKILL.md, claude://CLAUDE.md`,
          },
        ],
        isError: true,
      };
    }
    const lines = doc.content.split("\n");
    const total = lines.length;
    const start = Math.min(Math.max(offset ?? 0, 0), total);
    const end =
      limit !== undefined
        ? Math.min(start + limit, total)
        : total <= BATCH_DEFAULT
          ? total
          : Math.min(start + BATCH_DEFAULT, total);
    let text = lines.slice(start, end).join("\n");
    if (end < total) {
      text += `\n\n--- PromptMika batch notice: ${doc.name} lines ${start + 1}-${end} of ${total}. ${total - end} lines remain. Continue with load_reference(path="${path}", offset=${end}) — do NOT skip batches. ---`;
    } else if (total > BATCH_DEFAULT && start > 0) {
      text += `\n\n--- PromptMika batch notice: end of ${doc.name} (${total} lines). File fully read. ---`;
    }
    return { content: [{ type: "text" as const, text }] };
  }
);

server.tool(
  "security_scan",
  "Scan a file or directory for security vulnerabilities across 100+ languages. Returns categorized findings with severity, location, and fixes. Run on any code before delivering.",
  {
    path: z.string().describe("File or directory path to scan"),
    min_severity: z
      .enum(["all", "low", "medium", "high"])
      .default("all")
      .describe("Minimum severity to report (default: all)"),
  },
  async ({ path, min_severity }) => {
    try {
      const { findings, filesScanned } = scanPath(path, (min_severity ?? "all").toUpperCase() as Severity | "ALL");
      const summary = summarize(findings);
      const body = findings.length === 0
        ? `Files scanned: ${filesScanned}\n${summary}`
        : findings
            .map(
              (f: Finding) =>
                `[${f.ruleId}] ${f.ruleName} (${f.severity})\n  File: ${f.file}:${f.line}\n  Code: ${f.code}\n  Fix:  ${f.fix}`
            )
            .join("\n\n");
      return {
        content: [
          {
            type: "text" as const,
            text: `Files scanned: ${filesScanned}\nSummary: ${summary}\n\n${body}`,
          },
        ],
      };
    } catch (e) {
      return { content: [{ type: "text" as const, text: `Scan failed: ${(e as Error).message}` }], isError: true };
    }
  }
);

server.tool(
  "list_references",
  "List the full catalog of knowledge references available in the PromptMika knowledge base.",
  {},
  async () => {
    const all = listReferences();
    const text = all.map((r) => `- ${r.name}`).join("\n");
    return { content: [{ type: "text" as const, text: `PromptMika knowledge base (${all.length} files):\n${text}` }] };
  }
);

// ---------------------------------------------------------------------------
// Pack tools — one-call domain bundles (v3.5.0: extracted to pack-tools.ts)
// ---------------------------------------------------------------------------

registerPackTools(server);

// ---------------------------------------------------------------------------
// Web tools: free crawler / fetcher / searcher (v3.3.0)
// ---------------------------------------------------------------------------

registerWebTools(server);

// ---------------------------------------------------------------------------
// MCP App: scaffold generator with interactive UI
// ---------------------------------------------------------------------------

const SCAFFOLD_UI_URI = "ui://scaffold/mcp-app.html";
const UI_TTL_MS = 60_000;

let scaffoldUiCache: { html: string; at: number } | undefined;

function readScaffoldUi(): string {
  const now = Date.now();
  if (scaffoldUiCache && now - scaffoldUiCache.at < UI_TTL_MS) {
    return scaffoldUiCache.html;
  }
  const p = path.join(process.cwd(), "public", "mcp-app.html");
  try {
    const html = fs.readFileSync(p, "utf-8");
    scaffoldUiCache = { html, at: now };
    return html;
  } catch {
    return "<!doctype html><html><body><h1>UI not built. Run `npm run build:ui`.</h1></body></html>";
  }
}

registerAppTool(
  server,
  "generate_scaffold",
  {
    title: "Generate Project Scaffold",
    description:
      "Generate a secure, production-ready project scaffold (files + build commands) for a language. Returns the full file map as JSON so you can create every file. Includes CI/CD and security scanning by default. TypeScript scaffolds are project-type aware: web/app = Express web app, api = JSON API, cli = arg-parser CLI, lib = exported module, game = canvas game, test = vitest-only, embedded = library.",
    inputSchema: {
      language: z.enum(SUPPORTED_LANGUAGES as [string, ...string[]]).describe("Programming language"),
      project_name: z.string().describe("Project name"),
      project_type: z.enum([...PROJECT_TYPES] as [string, ...string[]]).default("app").describe("Project type (default: app)"),
    },
    _meta: { ui: { resourceUri: SCAFFOLD_UI_URI } },
  },
  async ({ language, project_name, project_type }) => {
    const result = generateScaffold(language, project_name, project_type ?? "app");
    if (result.error) {
      return { content: [{ type: "text" as const, text: result.error }], isError: true };
    }
    const payload = JSON.stringify(
      {
        language,
        project_name,
        project_type: project_type ?? "app",
        build_command: result.buildCommand,
        files: Object.entries(result.files).map(([p, c]) => ({ path: p, content: c })),
      },
      null,
      2
    );
    return { content: [{ type: "text" as const, text: payload }] };
  }
);

registerAppResource(
  server,
  "PromptMika Scaffold UI",
  SCAFFOLD_UI_URI,
  { mimeType: RESOURCE_MIME_TYPE },
  async () => {
    return {
      contents: [
        { uri: SCAFFOLD_UI_URI, mimeType: RESOURCE_MIME_TYPE, text: readScaffoldUi() },
      ],
    };
  }
);

  return server;
}
