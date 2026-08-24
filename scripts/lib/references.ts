import fs from "node:fs";
import path from "node:path";

const REFERENCES_DIR = path.join(process.cwd(), "references");
const SKILL_FILE = path.join(process.cwd(), "SKILL.md");
const CLAUDE_FILE = path.join(process.cwd(), "user-policy", "CLAUDE.md");
const CLAUDE_DIGEST_FILE = path.join(process.cwd(), "user-policy", "CLAUDE.digest.md");

const LIST_TTL_MS = 60_000;
const HEAD_CACHE_MAX = 256;

let cachedList: { docs: ReferenceDoc[]; at: number } | undefined;
const headCache = new Map<string, string>();

export interface ReferenceDoc {
  uri: string;
  name: string;
  path: string;
  mimeType: string;
}

const MIME: Record<string, string> = {
  ".md": "text/markdown",
  ".html": "text/html",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain",
};

function walk(dir: string, base: string, out: ReferenceDoc[]): ReferenceDoc[] {
  let entries: fs.Dirent[] = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    const rel = path.join(base, entry.name).replace(/\\/g, "/");
    if (entry.isDirectory()) {
      walk(full, rel, out);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      out.push({
        uri: `references://${rel}`,
        name: rel,
        path: full,
        mimeType: MIME[ext] ?? "text/plain",
      });
    }
  }
  return out;
}

export function listReferences(): ReferenceDoc[] {
  const now = Date.now();
  if (!cachedList || now - cachedList.at > LIST_TTL_MS) {
    cachedList = { docs: walk(REFERENCES_DIR, "", []), at: now };
  }
  return cachedList.docs;
}

export function getReference(uri: string): ReferenceDoc | undefined {
  const clean = uri.replace(/^references:\/\//, "");
  return listReferences().find((r) => r.name === clean);
}

export function readReference(uri: string): { content: string; mimeType: string } | undefined {
  const doc = resolveDocument(uri);
  return doc ? { content: doc.content, mimeType: doc.mimeType } : undefined;
}

export function readSkillFile(): { content: string; mimeType: string } | undefined {
  try {
    return { content: fs.readFileSync(SKILL_FILE, "utf-8"), mimeType: "text/markdown" };
  } catch {
    return undefined;
  }
}

export function readClaudeFile(): { content: string; mimeType: string } | undefined {
  try {
    return { content: fs.readFileSync(CLAUDE_FILE, "utf-8"), mimeType: "text/markdown" };
  } catch {
    return undefined;
  }
}

export function readClaudeDigestFile(): { content: string; mimeType: string } | undefined {
  try {
    return { content: fs.readFileSync(CLAUDE_DIGEST_FILE, "utf-8"), mimeType: "text/markdown" };
  } catch {
    return undefined;
  }
}

export function resolveDocument(
  uri: string
): { content: string; mimeType: string; name: string } | undefined {
  if (uri.startsWith("skill://")) {
    if (uri !== "skill://SKILL.md") return undefined;
    const s = readSkillFile();
    return s ? { ...s, name: "SKILL.md" } : undefined;
  }
  if (uri.startsWith("claude://")) {
    const target = uri.slice("claude://".length);
    if (target === "CLAUDE.digest.md" || target === "digest") {
      const d = readClaudeDigestFile();
      return d ? { ...d, name: "CLAUDE.digest.md" } : undefined;
    }
    if (target !== "CLAUDE.md") return undefined;
    const c = readClaudeFile();
    return c ? { ...c, name: "CLAUDE.md" } : undefined;
  }
  const refUri = uri.startsWith("references://") ? uri : `references://${uri}`;
  const doc = getReference(refUri);
  if (!doc) return undefined;
  try {
    return { content: fs.readFileSync(doc.path, "utf-8"), mimeType: doc.mimeType, name: doc.name };
  } catch {
    return undefined;
  }
}

function readHead(p: string): string {
  let head = headCache.get(p);
  if (head === undefined) {
    try {
      head = fs.readFileSync(p, "utf-8").slice(0, 2000).toLowerCase();
    } catch {
      head = "";
    }
    if (headCache.size >= HEAD_CACHE_MAX) headCache.clear();
    headCache.set(p, head);
  }
  return head;
}

export function searchReferences(query: string): ReferenceDoc[] {
  const q = query.toLowerCase();
  const all = listReferences();
  return all
    .map((doc) => {
      let score = 0;
      const name = doc.name.toLowerCase();
      if (name.includes(q)) score += 10;
      if (q.split(/\s+/).every((w) => name.includes(w))) score += 5;
      if (score === 0) {
        const head = readHead(doc.path);
        if (head.includes(q)) score += 3;
        if (q.split(/\s+/).every((w) => head.includes(w))) score += 2;
      }
      return { doc, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map((r) => r.doc);
}
