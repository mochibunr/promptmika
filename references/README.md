---
version: 3.0.0
last_updated: 2026-06-09
---

# PromptMika References — Master Index

## Decision Tree

Start here to find the right reference file for your task.

### What are you doing?

**Building software** → `iteration-workflow.md` (mandatory Build-Test-Loop). For code patterns: `CODE_PROMPTS.md`. For security: `vuln_catalogs/`.

**Frontend / UI / Visual design** → `DESIGN_BIBLE.md` (philosophy) → `design-system.md` (selection/generation) → `design-systems/` (catalog). For craft details: `horizontal-craft/`. For responsive: `RESPONSIVE_DESIGN.md`.

**Creative writing / Art direction** → `CREATIVE_PROMPTS.md`.

**System design / DevOps** → `SYSTEMS_PROMPTS.md`.

**Token optimization** → `TOKEN_EFFICIENCY.md`.

**Self-improvement / Critique** → `SELF_IMPROVEMENT.md`.

**Context retention / Long conversations** → `CONTEXT_ENGINE.md`.

**State management** → `STATE_MANAGEMENT.md`.

**API integration** → `API_INTEGRATION.md`.

**Testing** → `TESTING_PATTERNS.md` and `testing_strategies.md`.

**Scaffolding projects** → `scripts/build_scaffold_generator.py`.

**Security scanning** → `scripts/universal_security_scanner.py`.

---

## All Reference Files

### Core Engineering

| File | Purpose | When to Load |
|------|---------|--------------|
| `TOKEN_EFFICIENCY.md` | 7 compression rules, 6 intensity levels | Token optimization |
| `SELF_IMPROVEMENT.md` | Self-critique patterns, failure modes | Before delivering any code |
| `CONTEXT_ENGINE.md` | Context retention strategies | Long conversations, complex projects |
| `iteration-workflow.md` | Build-Test-Loop protocol | Every software task |

### Domain Knowledge

| File | Purpose | When to Load |
|------|---------|--------------|
| `FRONTEND_PROMPTS.md` | Frontend patterns (component, hook, animation, layout, responsive) | Frontend, web, UI tasks |
| `CODE_PROMPTS.md` | Coding patterns (architecture, security, quality) | Software engineering, debugging |
| `CREATIVE_PROMPTS.md` | Creative patterns | Writing, storytelling, art direction |
| `SYSTEMS_PROMPTS.md` | Systems patterns | DevOps, infrastructure, scaling |

### Engineering References

| File | Purpose | When to Load |
|------|---------|--------------|
| `STATE_MANAGEMENT.md` | Redux, Zustand, signals, state machines, context patterns | Any app with state |
| `API_INTEGRATION.md` | REST, GraphQL, WebSocket, gRPC, SSE patterns | Any app with API calls |
| `TESTING_PATTERNS.md` | Unit, integration, e2e, mocking, TDD/BDD | Any app needing tests |
| `testing_strategies.md` | Testing frameworks per language, fuzzing, static analysis, CI/CD | Language-specific test tooling |

### Design System

| File | Purpose | When to Load |
|------|---------|--------------|
| `DESIGN_BIBLE.md` | Philosophy, color, typography, layout, components, motion, accessibility, tokens, theming | Core design philosophy |
| `RESPONSIVE_DESIGN.md` | Mobile-first, fluid, container queries, breakpoints | Responsive layout |
| `design-system.md` | Select and apply references, or import/extract/persist DESIGN.md | Design system selection or generation |
| `design-systems/INDEX.md` | Selection rules for style skills and brand inspiration | Choosing a reference |
| `design-systems/TAG-VOCABULARY.md` | Controlled vocabulary for brand matching | Tagging and filtering |
| `design-systems/index.json` | Structured metadata for 40+ style-skills and 89+ brands | Programmatic selection |
| `design-systems/index-summary.json` | Lean summary (~2KB) for quick matching before loading full index | Fast mood/formality matching |

### Artifact Skills

| File | Purpose | When to Load |
|------|---------|--------------|
| `landing-page.md` | Landing page patterns | Creating landing pages |
| `deck.md` | Presentation deck patterns | Creating slide decks |
| `content-page.md` | Article/content page patterns | Creating articles |
| `portfolio.md` | Portfolio patterns | Creating portfolios |
| `prototype.md` | Rapid prototype patterns | Quick prototypes |
| `social-card.md` | Social card patterns | Social media cards |
| `web-tool.md` | Calculator/generator patterns | Interactive tools |
| `info-interactive.md` | Data visualization patterns | Charts, graphs, data viz |
| `quality-gate.md` | Quality checklist | Before delivering any artifact |
| `export.md` | Code export patterns | Exporting to code |
| `canvas-and-device.md` | Viewport/orientation handling | Device-specific design |

### Craft & Specialization

| File | Purpose | When to Load |
|------|---------|--------------|
| `horizontal-craft/README.md` | Internal index for craft files | Starting point for craft |
| `horizontal-craft/accessibility.md` | WCAG coverage, ARIA, screen readers | Accessibility requirements |
| `horizontal-craft/animation-discipline.md` | Animation principles, timing, easing | Motion design |
| `horizontal-craft/anti-ai-slop.md` | Anti-AI detection patterns | Avoiding generic AI output |
| `horizontal-craft/chinese-typography.md` | CJK typography | Chinese text layout |
| `horizontal-craft/color.md` | Color theory, palettes, contrast | Color decisions |
| `horizontal-craft/data-integrity.md` | Data validation patterns | Data-heavy interfaces |
| `horizontal-craft/form-validation.md` | Form patterns, validation, UX | Forms and inputs |
| `horizontal-craft/icon-system.md` | Icon system patterns | Iconography |
| `horizontal-craft/laws-of-ux.md` | UX laws compilation (Hick's, Fitts's, etc.) | UX principles |
| `horizontal-craft/link-and-proof.md` | Link validation patterns | Link checking |
| `horizontal-craft/state-coverage.md` | State management patterns | UI state handling |
| `horizontal-craft/technique-library.md` | Technique catalog | General techniques |
| `horizontal-craft/visual-explanation.md` | Visual explanation patterns | Explaining concepts visually |
| `horizontal-craft/reference/` | 6 files: directions, fonts, grid-system, punctuation, text-detail, title-and-breaking | Typography deep dive |

### Security

| File | Purpose | When to Load |
|------|---------|--------------|
| `vuln_catalogs/config_markup.md` | YAML/JSON/XML/Docker/K8s vulnerabilities | Config and markup code |
| `vuln_catalogs/dynamic_scripting.md` | JS/Python/Ruby/PHP/Perl vulnerabilities | Dynamic languages |
| `vuln_catalogs/memory_unsafe.md` | C/C++/Rust/Assembly vulnerabilities | Memory-unsafe languages |
| `vuln_catalogs/managed_languages.md` | Java/C#/Swift/Kotlin/Go vulnerabilities | Managed languages |
| `vuln_catalogs/web_frontend.md` | React/Vue/Angular/HTML/CSS vulnerabilities | Web frontend code |
| `vuln_catalogs/query_database.md` | SQL/NoSQL/MongoDB/Neo4j/Cassandra vulnerabilities | Database queries |
| `vuln_catalogs/functional_languages.md` | Haskell/Erlang/Lisp/Clojure vulnerabilities | Functional languages |
| `vuln_catalogs/hardware_description.md` | Verilog/VHDL/SystemVerilog vulnerabilities | Hardware description |
| `vuln_catalogs/esoteric_legacy.md` | Brainfuck/COBOL/Fortran/Assembly/AWK vulnerabilities | Legacy and esoteric |

### Scripts

| File | Purpose | When to Use |
|------|---------|-------------|
| `scripts/build_scaffold_generator.py` | Universal project scaffolding for 40+ languages | New project setup |
| `scripts/universal_security_scanner.py` | Security scanner for 100+ languages | Security auditing |

### Testing

| File | Purpose | When to Use |
|------|---------|-------------|
| `test-fixtures.md` | 10 coding behavior test cases | Validate PromptMika coding output quality |
