// Embedded references — built at compile time by scripts/build-references.ts.

import embeddedRefs from "./embedded-refs.json";

const refsMap = new Map<string, { content: string; mimeType: string }>();
for (const r of embeddedRefs.references) refsMap.set(r.name, { content: r.content, mimeType: r.mimeType });

export function resolveDocument(uri: string): { content: string; mimeType: string; name: string } | undefined {
  if (uri.startsWith("skill://")) return { ...embeddedRefs.specials["SKILL.md"], name: "SKILL.md" };
  if (uri.startsWith("design://")) return { ...embeddedRefs.specials["DESIGN.md"], name: "DESIGN.md" };
  if (uri.startsWith("guidelines://")) return { ...embeddedRefs.specials["GUIDELINES.md"], name: "GUIDELINES.md" };
  if (uri.startsWith("claude://")) {
    const target = uri.slice("claude://".length);
    if (target === "CLAUDE.digest.md" || target === "digest") return { ...embeddedRefs.specials["CLAUDE.digest.md"], name: "CLAUDE.digest.md" };
    if (target === "CLAUDE.md") return { ...embeddedRefs.specials["CLAUDE.md"], name: "CLAUDE.md" };
    return undefined;
  }
  const name = uri.startsWith("references://") ? uri.slice("references://".length) : uri;
  if (name === "DESIGN.md") return { ...embeddedRefs.specials["DESIGN.md"], name: "DESIGN.md" };
  if (name === "GUIDELINES.md") return { ...embeddedRefs.specials["GUIDELINES.md"], name: "GUIDELINES.md" };
  const doc = refsMap.get(name);
  return doc ? { ...doc, name } : undefined;
}

export function listReferences(): string[] {
  return [...refsMap.keys()];
}

// Lowercased heads cached once — lets topic searches match file contents,
// not just filenames ("sql injection" should find vuln_catalogs/web_frontend.md).
const MAX_RESULTS = 10;
const headCache = new Map<string, string>();
for (const [name, doc] of refsMap) {
  headCache.set(name, doc.content.slice(0, 2000).toLowerCase());
}
// Specials (SKILL.md, DESIGN.md, CLAUDE.md, digest) are searchable too.
for (const [name, doc] of Object.entries(embeddedRefs.specials)) {
  headCache.set(name, doc.content.slice(0, 2000).toLowerCase());
}

function scoreDoc(name: string, head: string, q: string, words: string[]): number {
  if (name.includes(q)) return 10;
  if (words.every((w) => name.includes(w))) return 5;
  let s = 0;
  if (head.includes(q)) s += 3;
  else if (words.length > 1 && words.every((w) => head.includes(w))) s += 3;
  else if (words.some((w) => w.length > 3 && head.includes(w))) s += 2;
  return s;
}

export function searchReferences(query: string): { name: string; score: number }[] {
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/).filter(Boolean);
  return [...headCache.entries()]
    .map(([name, head]) => ({ name, score: scoreDoc(name, head, q, words) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name))
    .slice(0, MAX_RESULTS);
}
