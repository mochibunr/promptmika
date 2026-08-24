import fs from "node:fs";
import path from "node:path";

export type Severity = "HIGH" | "MEDIUM" | "LOW";

export interface ScanRule {
  id: string;
  name: string;
  pattern: RegExp;
  severity: Severity;
  langs: string[];
  fix: string;
}

export interface Finding {
  ruleId: string;
  ruleName: string;
  severity: Severity;
  file: string;
  line: number;
  code: string;
  fix: string;
}

const SEVERITY_ORDER: Record<Severity, number> = { HIGH: 3, MEDIUM: 2, LOW: 1 };

const LANG_MAP: Record<string, string> = {
  ".c": "c", ".h": "c", ".cpp": "cpp", ".hpp": "cpp", ".cc": "cpp", ".cxx": "cpp",
  ".cs": "csharp", ".csx": "csharp",
  ".java": "java", ".kt": "kotlin", ".kts": "kotlin", ".scala": "scala", ".sc": "scala",
  ".swift": "swift",
  ".go": "go",
  ".rs": "rust",
  ".py": "python", ".pyw": "python", ".pyi": "python",
  ".rb": "ruby", ".erb": "ruby",
  ".php": "php", ".phtml": "php", ".php3": "php", ".php4": "php", ".php5": "php",
  ".js": "javascript", ".jsx": "javascript", ".mjs": "javascript",
  ".ts": "typescript", ".tsx": "typescript",
  ".html": "html", ".htm": "html", ".xhtml": "html",
  ".css": "css", ".scss": "css", ".sass": "css", ".less": "css",
  ".sql": "sql", ".psql": "sql", ".mysql": "sql", ".plsql": "sql", ".tsql": "sql",
  ".graphql": "graphql", ".gql": "graphql",
  ".yaml": "yaml", ".yml": "yaml",
  ".json": "json",
  ".toml": "toml",
  ".xml": "xml",
  ".dockerfile": "dockerfile",
  ".tf": "terraform", ".tfvars": "terraform", ".hcl": "terraform",
  ".sh": "shell", ".bash": "shell", ".zsh": "shell", ".fish": "shell",
  ".ps1": "powershell", ".psm1": "powershell", ".psd1": "powershell",
  ".bat": "batch", ".cmd": "batch",
  ".pl": "perl", ".pm": "perl",
  ".lua": "lua",
  ".tcl": "tcl",
  ".awk": "awk",
  ".hs": "haskell", ".lhs": "haskell",
  ".ml": "ocaml", ".mli": "ocaml",
  ".fs": "fsharp", ".fsx": "fsharp", ".fsi": "fsharp",
  ".erl": "erlang", ".hrl": "erlang",
  ".ex": "elixir", ".exs": "elixir",
  ".lisp": "lisp", ".lsp": "lisp", ".cl": "lisp",
  ".scm": "scheme", ".ss": "scheme",
  ".clj": "clojure", ".cljs": "clojure", ".cljc": "clojure",
  ".v": "verilog", ".sv": "verilog", ".vh": "verilog",
  ".vhd": "vhdl", ".vhdl": "vhdl",
  ".cbl": "cobol", ".cob": "cobol", ".cpy": "cobol",
  ".f": "fortran", ".f90": "fortran", ".f95": "fortran", ".f03": "fortran", ".f08": "fortran",
  ".bas": "basic", ".vb": "vb", ".vbs": "vb",
  ".pas": "pascal", ".pp": "pascal", ".inc": "pascal",
  ".ada": "ada", ".adb": "ada", ".ads": "ada",
  ".d": "d",
  ".nim": "nim",
  ".zig": "zig",
  ".cr": "crystal",
  ".vala": "vala",
  ".groovy": "groovy",
  ".dart": "dart",
  ".r": "r", ".R": "r",
  ".jl": "julia",
  ".m": "matlab", ".mat": "matlab",
  ".make": "makefile", ".mk": "makefile",
  ".cmake": "cmake",
  ".gradle": "gradle", ".gradle.kts": "gradle",
  ".pom": "maven",
  ".sbt": "sbt",
  ".nix": "nix",
  ".bzl": "bazel",
  ".jenkinsfile": "jenkins",
  ".ansible": "ansible",
  ".puppet": "puppet",
  ".md": "markdown", ".markdown": "markdown",
  ".rst": "rst", ".rest": "rst",
  ".tex": "latex",
  ".svg": "svg",
  ".ini": "ini", ".cfg": "ini", ".conf": "ini",
  ".properties": "properties",
  ".env": "env",
  ".log": "log",
  ".txt": "text",
};

const SPECIAL_NAMES: Record<string, string> = {
  Dockerfile: "dockerfile",
  "CMakeLists.txt": "cmake",
  Makefile: "makefile",
  makefile: "makefile",
  Jenkinsfile: "jenkins",
  BUILD: "bazel",
  WORKSPACE: "bazel",
  "pom.xml": "maven",
};

const RULES: ScanRule[] = [
  { id: "SEC-001", name: "Unbounded String Operation", pattern: /\b(strcpy|strcat|sprintf|gets)\s*\(/, severity: "HIGH", langs: ["c", "cpp"], fix: "Use strncpy, strncat, snprintf, or fgets with explicit bounds" },
  { id: "SEC-002", name: "Raw new without smart pointer", pattern: /\bnew\s+\w+\s*\((?![^)]*std::(?:unique|shared)_ptr)/, severity: "MEDIUM", langs: ["cpp"], fix: "Wrap in std::unique_ptr or std::shared_ptr" },
  { id: "SEC-003", name: "Unchecked malloc/calloc/realloc", pattern: /\b(malloc|calloc|realloc)\s*\([^)]+\)\s*;/, severity: "MEDIUM", langs: ["c", "cpp"], fix: "Check return value for NULL before dereferencing" },
  { id: "SEC-004", name: "Format String Vulnerability", pattern: /\b(printf|fprintf|sprintf|snprintf|wprintf)\s*\(\s*[^"']/, severity: "HIGH", langs: ["c", "cpp"], fix: "Use literal format strings; validate dynamic formats" },
  { id: "SEC-010", name: "Unsafe Deserialization", pattern: /(ObjectInputStream|BinaryFormatter|pickle\.loads|yaml\.load\()/i, severity: "HIGH", langs: ["java", "csharp", "python"], fix: "Use safe deserialization with schema validation" },
  { id: "SEC-011", name: "SQL String Concatenation", pattern: /(SELECT|INSERT|UPDATE|DELETE).*\+.*\$?\{?\w+\}?/i, severity: "HIGH", langs: ["java", "csharp", "python", "php", "javascript", "typescript"], fix: "Use parameterized queries or prepared statements" },
  { id: "SEC-020", name: "Command Injection Risk", pattern: /\b(os\.system|subprocess\.call\s*\(.*shell\s*=\s*True|exec\s*\(|eval\s*\(|Runtime\.getRuntime\(\)\.exec|Process\.Start)/, severity: "HIGH", langs: ["python", "javascript", "typescript", "java", "csharp", "ruby", "php", "shell", "powershell"], fix: "Avoid shell execution with user input; use safe APIs" },
  { id: "SEC-021", name: "Path Traversal Risk", pattern: /(open\s*\(|File\.Open|new\s+FileInputStream|fs\.readFile|\.sendFile)/i, severity: "MEDIUM", langs: ["python", "java", "csharp", "javascript", "typescript", "ruby", "php"], fix: "Canonicalize paths and validate against allowed directories" },
  { id: "SEC-022", name: "Prototype Pollution Risk", pattern: /(Object\.assign|lodash\.merge|\.extend|__proto__)/i, severity: "MEDIUM", langs: ["javascript", "typescript"], fix: "Validate all keys; use Object.create(null) for dictionaries" },
  { id: "SEC-030", name: "XSS Risk - innerHTML", pattern: /\.innerHTML\s*=/, severity: "HIGH", langs: ["javascript", "typescript", "html"], fix: "Use textContent or sanitize with DOMPurify before DOM insertion" },
  { id: "SEC-031", name: "Dangerous eval usage", pattern: /\beval\s*\(/, severity: "HIGH", langs: ["javascript", "typescript", "python", "ruby", "php"], fix: "Never use eval with untrusted input; use JSON.parse or safe alternatives" },
  { id: "SEC-040", name: "SQL Injection in Query", pattern: /(SELECT|INSERT|UPDATE|DELETE|DROP|UNION).*\$\w+|\+.*\w+.*\+/i, severity: "HIGH", langs: ["sql", "php", "python", "java", "csharp", "javascript", "ruby"], fix: "Use parameterized queries exclusively" },
  { id: "SEC-050", name: "Hardcoded Secret", pattern: /(api[_-]?key|password|secret|token|private[_-]?key)\s*[=:]\s*["']\w+/i, severity: "HIGH", langs: ["yaml", "json", "toml", "ini", "xml", "properties", "env", "dockerfile", "terraform", "shell", "powershell", "python", "javascript", "java", "csharp", "go", "ruby", "php"], fix: "Load secrets from environment variables or secret management systems" },
  { id: "SEC-051", name: "YAML Unsafe Load", pattern: /yaml\.load\(/i, severity: "HIGH", langs: ["python"], fix: "Use yaml.safe_load() instead of yaml.load()" },
  { id: "SEC-052", name: "Dockerfile Running as Root", pattern: /^USER\s+root\b/i, severity: "MEDIUM", langs: ["dockerfile"], fix: "Create and use a non-root user with USER directive" },
  { id: "SEC-053", name: "Terraform Open Security Group", pattern: /0\.0\.0\.0\/0/, severity: "HIGH", langs: ["terraform"], fix: "Restrict CIDR blocks to specific IP ranges" },
  { id: "SEC-060", name: "Shell Command Injection", pattern: /\$\w+.*\|.*\$\w+|eval\s+"?\$/, severity: "HIGH", langs: ["shell", "bash"], fix: "Quote all variables; use arrays for arguments; avoid eval" },
  { id: "SEC-061", name: "PowerShell Command Injection", pattern: /Invoke-Expression|iex\s+"?\$/, severity: "HIGH", langs: ["powershell"], fix: "Use parameter binding instead of string concatenation" },
  { id: "SEC-070", name: "Unsafe FFI Usage", pattern: /\bunsafe\b/, severity: "LOW", langs: ["rust", "haskell", "fsharp"], fix: "Document invariants; minimize unsafe scope; use safe wrappers" },
  { id: "SEC-080", name: "Unsynchronized Clock Domain Crossing", pattern: /(always\s*@\s*\(\s*posedge\s+\w+\s*\)\s*.*\w+\s*<=\s*\w+[^;]*[^reg])/i, severity: "HIGH", langs: ["verilog", "vhdl"], fix: "Use synchronizer chains for signals crossing clock domains" },
  { id: "SEC-090", name: "COBOL ACCEPT without Validation", pattern: /\bACCEPT\s+\w+/i, severity: "MEDIUM", langs: ["cobol"], fix: "Validate all ACCEPT input against expected formats and ranges" },
  { id: "SEC-091", name: "Fortran Implicit Typing", pattern: /^\s*[^!]*IMPLICIT\s+NONE/i, severity: "LOW", langs: ["fortran"], fix: "Use IMPLICIT NONE in all program units" },
  { id: "SEC-100", name: "Insecure Random for Security", pattern: /\brand\s*\(|Math\.random\(|Random\(\)/, severity: "MEDIUM", langs: ["c", "cpp", "java", "csharp", "javascript", "python", "ruby", "php"], fix: "Use cryptographically secure random number generators" },
  { id: "SEC-101", name: "TODO/FIXME Security Comment", pattern: /(TODO|FIXME|HACK|XXX|BUG)\s*:?\s*(security|vuln|insecure|unsafe|password|secret|auth)/i, severity: "MEDIUM", langs: ["c", "cpp", "java", "csharp", "python", "javascript", "typescript", "go", "rust", "ruby", "php", "shell", "powershell"], fix: "Address security TODOs before production deployment" },
];

function detectLanguage(filePath: string): string {
  const name = path.basename(filePath);
  if (SPECIAL_NAMES[name]) return SPECIAL_NAMES[name];
  return LANG_MAP[path.extname(name).toLowerCase()] ?? "unknown";
}

function scanLines(content: string, filePath: string, lang: string, minSeverity: Severity | "ALL"): Finding[] {
  const findings: Finding[] = [];
  const lines = content.split(/\r?\n/);
  const minOrder = minSeverity === "ALL" ? 0 : SEVERITY_ORDER[minSeverity];

  for (const rule of RULES) {
    if (!rule.langs.includes(lang) && !rule.langs.includes("all")) continue;
    if (SEVERITY_ORDER[rule.severity] < minOrder) continue;

    for (let i = 0; i < lines.length; i++) {
      if (rule.pattern.test(lines[i])) {
        findings.push({
          ruleId: rule.id,
          ruleName: rule.name,
          severity: rule.severity,
          file: filePath,
          line: i + 1,
          code: lines[i].trim().slice(0, 100),
          fix: rule.fix,
        });
      }
    }
  }
  return findings;
}

function walkFiles(dir: string): string[] {
  const out: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walkFiles(full));
    } else {
      out.push(full);
    }
  }
  return out;
}

export interface ScanOptions {
  path: string;
  minSeverity?: Severity | "ALL";
}

export function scanPath(target: string, minSeverity: Severity | "ALL" = "ALL"): { findings: Finding[]; filesScanned: number } {
  const findings: Finding[] = [];
  let filesScanned = 0;

  const processFile = (filePath: string) => {
    const lang = detectLanguage(filePath);
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      findings.push(...scanLines(content, filePath, lang, minSeverity));
    } catch {
      findings.push({
        ruleId: "ERR",
        ruleName: "File Read Error",
        severity: "HIGH",
        file: filePath,
        line: 0,
        code: "ERROR reading file",
        fix: "Check file permissions and encoding",
      });
    }
    filesScanned++;
  };

  const stat = fs.existsSync(target) ? fs.statSync(target) : null;
  if (!stat) {
    throw new Error(`Path not found: ${target}`);
  }
  if (stat.isFile()) {
    processFile(target);
  } else if (stat.isDirectory()) {
    for (const file of walkFiles(target)) {
      const lang = detectLanguage(file);
      if (lang !== "unknown") processFile(file);
    }
  }

  findings.sort((a, b) => SEVERITY_ORDER[b.severity] - SEVERITY_ORDER[a.severity]);
  return { findings, filesScanned };
}

export function summarize(findings: Finding[]): string {
  if (findings.length === 0) return "No issues found. Excellent work!";
  const high = findings.filter((f) => f.severity === "HIGH").length;
  const med = findings.filter((f) => f.severity === "MEDIUM").length;
  const low = findings.filter((f) => f.severity === "LOW").length;
  return `${high} HIGH | ${med} MEDIUM | ${low} LOW`;
}
