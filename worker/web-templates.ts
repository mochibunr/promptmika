import { fetchGuarded } from "./fetch";

import { WEB_TEMPLATE_CATALOG, type WebTemplateMeta } from "../lib/web-template-catalog";

export function listWebTemplates(kind?: string): WebTemplateMeta[] {
  if (!kind || kind === "all") return WEB_TEMPLATE_CATALOG;
  return WEB_TEMPLATE_CATALOG.filter((template) => template.kind === kind);
}

export function searchWebTemplateLibrary(query: string): Array<WebTemplateMeta & { score: number }> {
  const normalized = query.toLowerCase().trim();
  const words = normalized.split(/\s+/).filter(Boolean);
  return WEB_TEMPLATE_CATALOG.map((template) => {
    const haystack = [template.name, template.folder, template.kind, template.description].join(" ").toLowerCase();
    const exact = haystack.includes(normalized) ? 4 : 0;
    const score = exact + words.reduce((sum, word) => sum + (haystack.includes(word) ? 1 : 0), 0);
    return { ...template, score };
  })
    .filter((template) => template.score > 0)
    .sort((a, b) => b.score - a.score || a.id - b.id);
}

export function resolveWebTemplate(nameOrId: string | number): WebTemplateMeta | undefined {
  const value = String(nameOrId).trim().toLowerCase();
  return WEB_TEMPLATE_CATALOG.find((template) =>
    String(template.id) === value ||
    template.name.toLowerCase() === value ||
    template.folder.toLowerCase() === value
  );
}

export async function loadWebTemplateStudy(nameOrId: string | number): Promise<string> {
  const template = resolveWebTemplate(nameOrId);
  if (!template) {
    throw new Error(`Unknown WebTemplate reference: ${nameOrId}`);
  }

  const url = `https://raw.githubusercontent.com/WyvernCW/WebTemplate/main/${encodeURIComponent(template.folder)}/info.md`;
  const result = await fetchGuarded(url, { timeoutMs: 20_000, maxBytes: 400_000 });

  if (result.status < 200 || result.status >= 300) {
    throw new Error(`Unable to load ${template.name} study notes (HTTP ${result.status}).`);
  }

  return [
    `# WebTemplate Study Reference: ${template.name}`,
    "",
    `Source: WyvernCW/WebTemplate / ${template.folder}`,
    `Category: ${template.kind}`,
    template.liveDemo ? `Live demo: ${template.liveDemo}` : "",
    "",
    "## Usage contract",
    "- READ-ONLY study reference.",
    "- Study design DNA, layout logic, components, motion, responsive behavior, and architecture.",
    "- Do NOT clone files, copy JSX/CSS line-by-line, reuse assets, or recreate the exact section tree.",
    "- Before implementation, summarize the reference in your own words and state how the new work will differ.",
    "- Build a fresh implementation adapted to the active project.",
    "",
    "## Source study notes",
    result.text,
  ].filter(Boolean).join("\n");
}
