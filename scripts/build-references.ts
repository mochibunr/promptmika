import fs from "node:fs";
import path from "node:path";

const REFS_DIR = path.join(import.meta.dirname, "..", "references");
const SKILL_FILE = path.join(import.meta.dirname, "..", "SKILL.md");
const DESIGN_FILE = path.join(import.meta.dirname, "..", "DESIGN.md");
const APPLE_FILE = path.join(import.meta.dirname, "..", "APPLE.md");
const GUIDELINES_FILE = path.join(import.meta.dirname, "..", "GUIDELINES.md");
const CLAUDE_FILE = path.join(import.meta.dirname, "..", "user-policy", "CLAUDE.md");
const CLAUDE_DIGEST_FILE = path.join(import.meta.dirname, "..", "user-policy", "CLAUDE.digest.md");
const OUT_FILE = path.join(import.meta.dirname, "..", "worker", "embedded-refs.json");

const MIME: Record<string, string> = {
  ".md": "text/markdown",
  ".html": "text/html",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain",
};

interface RefEntry {
  name: string;
  content: string;
  mimeType: string;
}

function walk(dir: string, base: string, out: RefEntry[]): void {
  let entries: fs.Dirent[] = [];
  try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name).replace(/\\/g, "/");
    if (entry.isDirectory()) {
      walk(full, rel, out);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      out.push({ name: rel, content: fs.readFileSync(full, "utf-8"), mimeType: MIME[ext] ?? "text/plain" });
    }
  }
}

const refs: RefEntry[] = [];
walk(REFS_DIR, "", refs);

const skill = fs.readFileSync(SKILL_FILE, "utf-8");
const design = fs.readFileSync(DESIGN_FILE, "utf-8");
const apple = fs.readFileSync(APPLE_FILE, "utf-8");
const guidelines = fs.readFileSync(GUIDELINES_FILE, "utf-8");
const claude = fs.readFileSync(CLAUDE_FILE, "utf-8");
const digest = fs.readFileSync(CLAUDE_DIGEST_FILE, "utf-8");

const embedded = {
  references: refs,
  specials: {
    "SKILL.md": { content: skill, mimeType: "text/markdown" },
    "DESIGN.md": { content: design, mimeType: "text/markdown" },
    "APPLE.md": { content: apple, mimeType: "text/markdown" },
    "GUIDELINES.md": { content: guidelines, mimeType: "text/markdown" },
    "CLAUDE.md": { content: claude, mimeType: "text/markdown" },
    "CLAUDE.digest.md": { content: digest, mimeType: "text/markdown" },
  },
};

fs.writeFileSync(OUT_FILE, JSON.stringify(embedded));
console.log(`Bundled ${refs.length} references + 6 special files -> ${OUT_FILE}`);
