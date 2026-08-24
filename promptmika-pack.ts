// PromptMika Pack Tools — opencode plugin
// Usage in opencode.json:
//   { "plugin": ["promptmika-pack"] }
// or with custom URL:
//   { "plugin": ["promptmika-pack", { "url": "https://your-deployment.vercel.app/api/mcp" }] }

import { tool } from "@opencode-ai/plugin";

const DEFAULT_URL = "https://promptmika.vercel.app/api/mcp";

const PACKS = {
  load_contract: {
    description: "First-run contract read: project design language + condensed policy digest + full skill definition. Small docs first so truncation-happy clients still get them. Load BEFORE anything else in a new session.",
    files: ["design://DESIGN.md", "claude://CLAUDE.digest.md", "skill://SKILL.md"],
  },
  load_frontend_design: {
    description: "Core frontend/UI design references: project design language first (design://DESIGN.md), then design philosophy bible, frontend component patterns, responsive mobile-first layout, anti-AI-slop rules, and the AI Web UX/UI/Motion Guidelines (guidelines://GUIDELINES.md).",
    files: ["design://DESIGN.md", "DESIGN_BIBLE.md", "FRONTEND_PROMPTS.md", "RESPONSIVE_DESIGN.md", "horizontal-craft/anti-ai-slop.md", "guidelines://GUIDELINES.md"],
  },
  load_design_systems: {
    description: "Design system catalog: system selection guide, index summary, and full INDEX. Use when choosing or applying a design system.",
    files: ["design-system.md", "design-systems/index-summary.json", "design-systems/INDEX.md"],
  },
  load_horizontal_craft: {
    description: "Typography, animation, color, icons, accessibility, form validation, UX laws, and visual craft rules.",
    files: [
      "horizontal-craft/accessibility.md", "horizontal-craft/animation-discipline.md",
      "horizontal-craft/chinese-typography.md", "horizontal-craft/color.md",
      "horizontal-craft/data-integrity.md", "horizontal-craft/form-validation.md",
      "horizontal-craft/icon-system.md", "horizontal-craft/laws-of-ux.md",
      "horizontal-craft/link-and-proof.md", "horizontal-craft/state-coverage.md",
      "horizontal-craft/technique-library.md", "horizontal-craft/visual-explanation.md",
    ],
  },
  load_backend_api: {
    description: "Backend engineering patterns and API integration: code prompts, API design, integration patterns.",
    files: ["CODE_PROMPTS.md", "API_INTEGRATION.md"],
  },
  load_security: {
    description: "All security vulnerability catalogs: memory-unsafe, dynamic/scripting, managed, web frontend, query/database, config/markup, functional, hardware, esoteric/legacy.",
    files: [
      "vuln_catalogs/memory_unsafe.md", "vuln_catalogs/dynamic_scripting.md",
      "vuln_catalogs/managed_languages.md", "vuln_catalogs/web_frontend.md",
      "vuln_catalogs/query_database.md", "vuln_catalogs/config_markup.md",
      "vuln_catalogs/functional_languages.md", "vuln_catalogs/hardware_description.md",
      "vuln_catalogs/esoteric_legacy.md",
    ],
  },
  load_testing: {
    description: "Testing patterns and strategies: unit, integration, e2e, mocking, coverage.",
    files: ["TESTING_PATTERNS.md", "testing_strategies.md"],
  },
  load_state_management: {
    description: "State management patterns: Redux, Zustand, Jotai, signals, stores, persistence.",
    files: ["STATE_MANAGEMENT.md"],
  },
  load_systems_devops: {
    description: "Systems, architecture, DevOps, infrastructure: system prompts, build systems, interop, performance, universal patterns.",
    files: ["SYSTEMS_PROMPTS.md", "build_systems.md", "interop_guide.md", "performance_guide.md", "universal_patterns.md"],
  },
  load_creative_writing: {
    description: "Creative writing prompts and patterns: narrative, prose, style, tone.",
    files: ["CREATIVE_PROMPTS.md"],
  },
  load_token_efficiency: {
    description: "Token efficiency rules and self-improvement / self-critique protocol.",
    files: ["TOKEN_EFFICIENCY.md", "SELF_IMPROVEMENT.md"],
  },
  load_context_engine: {
    description: "Context retention, iteration workflow, and quality gate: mental models across conversations, build-test loops, output quality checks.",
    files: ["CONTEXT_ENGINE.md", "iteration-workflow.md", "quality-gate.md"],
  },
  load_specialized_pages: {
    description: "Specialized page templates: landing pages, portfolios, prototypes, content pages, web tools, decks, social cards, interactive data, canvas/device, export.",
    files: [
      "landing-page.md", "portfolio.md", "prototype.md", "content-page.md",
      "web-tool.md", "deck.md", "social-card.md", "info-interactive.md",
      "canvas-and-device.md", "export.md",
    ],
  },
};

async function callMcp(url: string, methodName: string, params: Record<string, unknown> = {}): Promise<string> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json, text/event-stream" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: methodName, params }),
  });
  const data = await res.json();
  if (data.error) throw new Error(`MCP error: ${data.error.message}`);
  return data.result?.content?.[0]?.text ?? "No response from PromptMika server.";
}

export default async function promptmikaPack(_ctx: any, options: { url?: string } = {}) {
  const url = options.url ?? DEFAULT_URL;

  const tools: Record<string, ReturnType<typeof tool>> = {};
  for (const [name, pack] of Object.entries(PACKS)) {
    const fileCount = pack.files.length;
    tools[name] = tool({
      description: `Load a bundle of ${fileCount} related PromptMika knowledge files in one call. ${pack.description} Files: ${pack.files.join(", ")}.`,
      args: {
        file_offset: tool.schema
          .number()
          .int()
          .min(0)
          .optional()
          .describe(`File index to start from (0-${fileCount - 1}, default 0). Use to skip already-loaded files.`),
      },
      async execute(args) {
        const result = await callMcp(url, "tools/call", {
          name,
          arguments: { file_offset: args.file_offset },
        });
        return result;
      },
    });
  }

  return { tool: tools };
}
