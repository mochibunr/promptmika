// One-shot: port lib/security-scanner.ts + lib/scaffold-generator.ts into worker/
// as dependency-free copies (Workers have no node:fs).
import fs from "node:fs";

// ── security-scan.ts ──────────────────────────────────────────────
const scanner = fs.readFileSync("lib/security-scanner.ts", "utf-8");
let out = scanner
  .replace('import fs from "node:fs";\nimport path from "node:path";\n', "")
  .replace(
    `function detectLanguage(filePath: string): string {
  const name = path.basename(filePath);
  if (SPECIAL_NAMES[name]) return SPECIAL_NAMES[name];
  return LANG_MAP[path.extname(name).toLowerCase()] ?? "unknown";
}`,
    `function basename(p: string): string {
  const i = p.replace(/\\\\/g, "/").lastIndexOf("/");
  return i === -1 ? p : p.slice(i + 1);
}

function detectLanguage(filePath: string): string {
  const name = basename(filePath);
  if (SPECIAL_NAMES[name]) return SPECIAL_NAMES[name];
  const dot = name.lastIndexOf(".");
  const ext = dot === -1 ? "" : name.slice(dot).toLowerCase();
  return LANG_MAP[ext] ?? "unknown";
}`
  );

// Replace the fs-based walkFiles/scanPath block with a content-based scanCode.
const walkStart = out.indexOf("function walkFiles");
const summarizeStart = out.indexOf("export function summarize");
if (walkStart === -1 || summarizeStart === -1) throw new Error("marker not found in scanner");
out =
  out.slice(0, walkStart) +
  `export function scanCode(
  code: string,
  filename: string,
  minSeverity: Severity | "ALL" = "ALL"
): { findings: Finding[]; filesScanned: number } {
  const lang = detectLanguage(filename || "snippet.txt");
  const findings = scanLines(code, filename || "snippet", lang, minSeverity);
  findings.sort((a, b) => SEVERITY_ORDER[b.severity] - SEVERITY_ORDER[a.severity]);
  return { findings, filesScanned: 1 };
}

` +
  out.slice(summarizeStart);

out =
  `// Ported from lib/security-scanner.ts — fs/path stripped for Cloudflare Workers.\n` +
  out;
fs.writeFileSync("worker/security-scan.ts", out);
console.log("worker/security-scan.ts written");

// ── scaffold.ts ───────────────────────────────────────────────────
const scaffold = fs.readFileSync("lib/scaffold-generator.ts", "utf-8");
fs.writeFileSync(
  "worker/scaffold.ts",
  `// Ported from lib/scaffold-generator.ts — pure template logic, Worker-safe.\n` + scaffold
);
console.log("worker/scaffold.ts written");
