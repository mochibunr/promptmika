// Pack core — pure pack logic, no MCP, no Node.js.
// Dependency-injected: callers provide a resolveDocument function.

export const PACK_FILE_CAP = 20000;
export const PACK_TOTAL_BUDGET = 40000;

export interface ResolvedDoc {
  content: string;
  mimeType: string;
  name: string;
}

export interface PackDeps {
  resolveDocument: (uri: string) => ResolvedDoc | undefined;
}

export interface PackDef {
  description: string;
  files: string[];
}

export interface PackResult {
  text: string;
  paged: string[];
  totalFiles: number;
}

export const PACKS: Record<string, PackDef> = {
  load_contract: {
    description: "First-run contract read: the project design language (DESIGN.md) + the condensed user policy digest + the full skill definition. Ordered small-docs-first so clients that truncate large tool results still receive DESIGN.md and the digest intact. Load this BEFORE anything else in a new session.",
    files: ["design://DESIGN.md", "claude://CLAUDE.digest.md", "skill://SKILL.md"],
  },
  load_frontend_design: {
    description: "Core frontend/UI design references: the project's own design language first (design://DESIGN.md — overrides generic defaults), then design philosophy bible, frontend component patterns, responsive mobile-first layout, anti-AI-slop rules, and the AI Web UX/UI/Motion Guidelines (guidelines://GUIDELINES.md).",
    files: ["design://DESIGN.md", "DESIGN_BIBLE.md", "FRONTEND_PROMPTS.md", "RESPONSIVE_DESIGN.md", "horizontal-craft/anti-ai-slop.md", "guidelines://GUIDELINES.md"],
  },
  load_design_systems: {
    description: "Design system catalog: system selection guide, index summary (match by mood/formality), and full INDEX.",
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
    description: "Context retention, iteration workflow, and quality gate.",
    files: ["CONTEXT_ENGINE.md", "iteration-workflow.md", "quality-gate.md"],
  },
  load_specialized_pages: {
    description: "Specialized page templates: landing, portfolio, prototype, content, web tool, deck, social card, interactive data, canvas/device, export.",
    files: [
      "landing-page.md", "portfolio.md", "prototype.md", "content-page.md",
      "web-tool.md", "deck.md", "social-card.md", "info-interactive.md",
      "canvas-and-device.md", "export.md",
    ],
  },
};

export function loadPack(
  toolName: string,
  deps: PackDeps,
  fileOffset?: number
): PackResult | string {
  const pack = PACKS[toolName];
  if (!pack) return `Unknown pack: ${toolName}. Available: ${Object.keys(PACKS).join(", ")}`;

  const startIdx = fileOffset ?? 0;
  const parts: string[] = [];
  const paged: string[] = [];
  let usedLines = 0;

  for (let i = startIdx; i < pack.files.length; i++) {
    const filePath = pack.files[i];
    const doc = deps.resolveDocument(filePath);
    if (!doc) {
      parts.push(`## ${filePath}\n\n*File not found — skipped.*`);
      continue;
    }
    const lines = doc.content.split("\n");
    const total = lines.length;

    if (usedLines > 0 && usedLines + total > PACK_TOTAL_BUDGET) {
      parts.push(`## ${filePath}\n\n*Skipped — pack budget (${PACK_TOTAL_BUDGET} lines per call) reached. Use load_reference(path="${filePath}") to read this file.*`);
      paged.push(filePath);
      continue;
    }

    if (total <= PACK_FILE_CAP) {
      parts.push(`## ${filePath}\n\n${doc.content}`);
      usedLines += total;
    } else {
      const chunk = lines.slice(0, PACK_FILE_CAP).join("\n");
      parts.push(`## ${filePath}\n\n${chunk}\n\n*PAGE REQUIRED: ${total - PACK_FILE_CAP} more lines — use load_reference(path="${filePath}", offset=${PACK_FILE_CAP}) to read the rest.*`);
      paged.push(filePath);
      usedLines += PACK_FILE_CAP;
    }
  }

  let text = parts.join("\n\n---\n\n");
  const fileCount = pack.files.length;
  if (startIdx > 0) {
    text += `\n\n--- PromptMika pack notice: ${toolName} files ${startIdx + 1}-${pack.files.length} of ${fileCount} loaded. ---`;
  } else {
    text += `\n\n--- PromptMika pack notice: ${toolName} — all ${fileCount} files loaded.${
      paged.length ? ` ${paged.length} file(s) were NOT served in full (${paged.join(", ")}) — load their remaining lines via load_reference before proceeding.` : ""
    } ---`;
  }

  return { text, paged, totalFiles: fileCount };
}
