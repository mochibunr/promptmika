---
name: Design System Skill
description: Select, apply, import, extract, normalize, or persist a reusable DESIGN.md from an existing design system, HTML artifact, screenshot, template, style reference, or generated interface.
mode: design-system
platform: any
scenario: design-system
preview:
  type: none
default_for:
  - DESIGN.md
  - design system generation
  - design system extraction
  - design system import
  - design system persistence
  - design system reference
  - style reference
  - brand inspiration
  - preset template
  - open-source component system
  - user-owned design system
  - design rules
  - design tokens
fidelity: system
---

# Design System Skill

Use this skill when a design task should follow an existing reference or when the user wants to import, extract, normalize, persist, or reuse a design language.

This skill is not an artifact skill. It does not decide whether the artifact is a portfolio, landing page, prototype, content page, or H5 tool.

It works together with artifact skills by providing visual, structural, component, template, and style constraints.

Examples:

- `portfolio.md` + `design-system.md`
- `deck.md` + `design-system.md`
- `prototype.md` + `design-system.md`
- `landing-page.md` + `design-system.md`
- `web-tool.md` + `design-system.md`

---

## Trigger

Use this skill when:

- the user explicitly selects a design system, style, brand reference, or preset HTML template
- the user asks to use a known style skill
- the user asks to use a known open-source component system
- the user mentions a public brand or product style as inspiration
- the user uploads or provides a design system, style guide, screenshot, codebase, tokens, or component library
- the user asks to keep the new artifact consistent with an existing artifact
- the user says to follow a previous version, selected template, UI kit, component style, or visual language
- the user asks to import, extract, generate, normalize, or persist a reusable `DESIGN.md`

Examples:

- "用 Ant Design 做"
- "用 shadcn/ui"
- "做成 editorial 风格"
- "更 minimal"
- "像 Apple 一点"
- "参考 Linear"
- "小红书风格"
- "按这个截图的风格"
- "沿用上次那个页面的风格"
- "这是我们的设计规范，按这个来"
- "按这个 HTML 模板改"
- "这是我的 DESIGN.md，后面按这个来"
- "帮我整理一下这份 design.md"
- "从这个 HTML 里提炼 DESIGN.md"
- "把当前页面风格沉淀成 DESIGN.md"

Do not use this skill when:

- the user only asks to generate a single first-draft page without any reference
- the user only asks for pure writing, research, or coding
- the user only asks for a local edit without style changes
- the user only changes deterministic parameters such as color, spacing, radius, or density
- the reference would require copying proprietary assets, logos, distinctive commercial layouts, or private UI patterns

---

## Goal

The goal is to improve design quality and consistency by grounding output in the right reference, or to produce a reusable `DESIGN.md` that can guide future generation.

This skill should help the agent:

- avoid generic visual taste
- select only the relevant reference
- use existing systems when available
- distinguish reusable style skills from public brand inspiration
- distinguish open-source component systems from proprietary brand UI
- prevent unauthorized brand copying
- preserve consistency across generated artifacts
- reuse templates, tokens, components, and visual patterns responsibly
- import, extract, normalize, or persist design systems when requested

The goal is not to force every design into a design system.

If no relevant reference exists, proceed with scenario-specific defaults from the primary artifact skill.

---

## Operating Modes

This skill operates in two major categories: **Reference Mode** (applying existing systems) and **Generation Mode** (creating new DESIGN.md files).

---

### Reference Mode

Use when a design task should follow an existing reference instead of inventing a new visual language.

---

#### Reference Types

There are six reference types. Use the strongest applicable type. Do not load all reference types by default.

---

##### 1. User-Owned Design System

Use this when the user provides or owns the design system.

Examples:

- uploaded brand guideline
- uploaded tokens
- uploaded UI kit
- uploaded component library
- existing project codebase
- existing product screenshots
- user-provided Figma file or future Figma MCP reference
- previous artifact created in the same workspace

Priority: Highest.

Behavior:

- Treat as authoritative.
- Read the provided source before generating.
- Prefer exact tokens, colors, typography, spacing, radius, shadows, components, and patterns.
- Match the existing visual vocabulary before adding new elements.
- Do not invent new visual rules unless the user asks for a new direction.
- If the design system is incomplete, fill gaps conservatively and record assumptions.

---

##### 2. Style Skill Reference

Use this when the user asks for a general visual style, design mood, or UI style that exists in `style-skills/`.

Examples: minimal, luxury, editorial, paper, retro, dashboard, shadcn, ant, glassmorphism, neobrutalism, professional, expressive.

Priority: High when explicitly requested.

Behavior:

- Treat as a reusable design recipe.
- Read the selected style's `SKILL.md` and `DESIGN.md` when available.
- Apply the selected style to the current scenario, not the other way around.
- Do not let a style skill override the user's core artifact goal.
- Do not combine many style skills by default.

---

##### 3. Open-Source Component System

Use this when the user explicitly asks for a public/open-source design system or component library.

Examples: Ant Design, Material UI / MUI, Chakra UI, Radix UI, shadcn/ui, Bootstrap, Tailwind UI.

Priority: High when explicitly requested.

Behavior:

- Use the system directly according to public documentation and license.
- Prefer official components, tokens, layout patterns, and usage guidance.
- Generate implementation using real component APIs when relevant.
- Respect attribution or license requirements when relevant.
- Do not confuse the open-source system with the company's private brand assets or internal product UI.

Important: "Use Ant Design" means use Ant Design's public component system. It does not mean copying Ant Group's proprietary products, brand assets, internal dashboards, or non-public patterns.

---

##### 4. Public Brand Inspiration

Use this when the user mentions a well-known brand or product style, but does not provide official assets or authorization.

Examples: Apple style, Linear style, Notion style, Stripe style, Airbnb style, Nike style, 小红书风格, magazine style, premium style.

Priority: Medium.

Behavior:

- Treat as high-level inspiration only.
- Extract abstract qualities, not proprietary expression.
- Create an original design.
- Do not copy logos, brand assets, distinctive layouts, exact page structures, proprietary UI patterns, or internal product patterns.
- Do not claim the output uses an official design system.

Allowed to extract: mood, restraint, density, typography direction, spacing rhythm, content structure, interaction feel, motion temperament, visual temperature, hierarchy style.

Not allowed: copying branded layouts, using logos or trademarks as design assets, recreating proprietary product screens, mimicking distinctive commercial UI too closely, claiming official system usage.

---

##### 5. Preset HTML Template

Use this only when the user explicitly selects a preset HTML template.

Priority: High when selected.

Behavior:

- Treat the selected template as a structured starting point.
- Preserve useful layout, responsive behavior, section structure, and interaction patterns.
- Replace placeholder content with user-provided or clearly inferred content.
- Remove sections that do not serve the user's goal.
- Do not fill unused template slots with fake content.
- Adapt visual style, copy, density, and parameters to the user's request.
- Preserve editable structure for comment edits, parameter edits, and future export.
- Avoid rewriting the whole template when a local edit is enough.

Do not apply a preset template by default if the user did not select one.

---

##### 6. Prior Artifact Reference

Use this when the user asks to continue, match, reuse, or modify a previous artifact.

Priority: Very high for follow-up work.

Behavior:

- Treat the current or previous artifact as the active design system.
- Preserve approved visual direction.
- Preserve layout, rhythm, typography, components, and parameters unless the user asks to change them.
- Make local edits when possible.
- Do not restart from a new style unless the user explicitly requests it.

---

#### Selection Rules

When selecting a design system reference:

1. Prefer explicit user choice over inferred style.
2. Prefer user-owned systems over public systems.
3. Prefer a selected HTML template over generic scenario patterns.
4. Prefer style skills for general style requests.
5. Prefer open-source component systems when implementation depends on components.
6. Prefer brand inspiration only for mood and visual direction.
7. Prefer the current artifact when editing or continuing existing work.
8. Do not load multiple design systems unless the user asks to combine them.
9. If multiple references conflict, prioritize the one closest to the user's actual artifact or explicit request.

---

#### Conflict Rules

When references conflict:

**User content beats template slots.** If a template has sections the user did not ask for, remove them instead of inventing content.

**User-selected template beats generic scenario pattern.** Preserve the selected template's useful structure unless it conflicts with the user's goal.

**User-owned design system beats public inspiration.** If the user provides a brand guideline, use it over "Apple style" or other public inspiration.

**Style skill beats vague mood.** If the user explicitly asks for `editorial`, use the selected style skill instead of loosely guessing what editorial means.

**Open-source component API beats visual imitation.** If the user asks to use Ant Design, use Ant Design components correctly instead of merely imitating their appearance.

**Current artifact beats new direction during edits.** If the user asks for a small edit, preserve the current artifact unless they explicitly request a style change.

---

#### Usage Rules

When applying a design reference:

- Do not blindly copy the reference.
- Extract what is relevant to the current scenario.
- Preserve the user's content and goal.
- Keep the artifact editable.
- Avoid unnecessary redesign.
- Avoid mixing unrelated systems.
- Do not introduce visual rules from a lower-priority reference when a higher-priority reference already provides guidance.

When adapting a reference:

- remove irrelevant sections
- simplify when the reference is too complex
- preserve useful responsive behavior
- preserve useful interaction patterns
- keep component naming and structure clear
- record assumptions when useful

---

### Generation Mode

Use when the user wants to import, extract, normalize, persist, or reuse a design language as a new `DESIGN.md`.

---

#### Three Modes

##### 1. Import Mode

Use when the user provides an existing `DESIGN.md`, design guideline, brand guideline, or partial design system and wants it to become the reusable design reference.

Examples:

- "这是我的 DESIGN.md，后面按这个来"
- "帮我整理一下这份 design.md"
- "检查这个 DESIGN.md 有没有缺失"
- "把这份规范转成你能使用的格式"
- "把这个设计规范标准化一下"

Primary behavior:

- read the provided `DESIGN.md` or guideline
- preserve user-owned rules
- check for missing sections
- normalize structure only when useful
- do not rewrite the system into the model's own taste
- keep exact values when provided
- flag ambiguities or missing information when relevant

---

##### 2. Extraction Mode

Use when the user provides an existing visual artifact and wants design rules extracted from it.

Sources may include: HTML file, generated HTML artifact, screenshot, preset HTML template, existing page, CSS / theme file, style skill, brand inspiration reference, codebase styles, Figma / MCP reference.

Examples:

- "从这个 HTML 里提炼 DESIGN.md"
- "把这个截图总结成设计系统"
- "分析这个模板的设计规则"
- "从这个页面提取颜色、字体、布局规则"
- "把这个已有界面变成可复用设计规范"

Primary behavior:

- inspect the source artifact
- extract visible values and patterns
- distinguish exact values from inferred values
- describe both surface style and underlying intent
- do not mechanically copy every CSS property
- do not invent unavailable details
- separate reusable rules from one-off details

---

##### 3. Persistence Mode

Use when the user wants to preserve the current generated artifact's visual language for future pages.

Examples:

- "把当前页面风格沉淀成 DESIGN.md"
- "后面的页面都沿用这一版风格"
- "把这个作品集提炼成可复用设计规范"
- "把这个方向固化下来"
- "把当前界面的设计语言保存下来"

Primary behavior:

- inspect the current artifact state
- extract stable rules from the approved design
- identify which decisions should repeat
- identify which decisions are one-off
- create a reusable `DESIGN.md` for future artifacts
- avoid turning page-specific details into universal rules

---

#### Generation Workflow

##### Step 1: Determine Mode

Classify the task as Import, Extraction, or Persistence. If multiple modes apply, prefer the user's explicit request.

##### Step 2: Collect Source

For Import: read the provided `DESIGN.md`, preserve user-owned rules, check for missing sections, normalize structure only when useful.

For Extraction: inspect the provided artifact, extract visible values and patterns, distinguish exact values from inferred values, identify layout, typography, color, component, motion, and responsive rules.

For Persistence: inspect the current artifact state, extract stable rules from the approved design, separate reusable rules from one-off page details.

##### Step 3: Extract Design Intent

Do not only describe surface appearance. Explain why the design uses each pattern.

Weak: "Uses blue buttons and rounded cards."

Better: "Blue is reserved for primary actions and progress states, creating a clear path through the interface. Rounded cards soften the otherwise technical layout and make dense information feel approachable."

The system should explain: what visual choices communicate, which choices are structural vs decorative, how the design should scale to future pages, which elements are essential to the style, which elements should not be overused.

##### Step 4: Separate Stable Rules from One-Off Choices

Classify decisions as:

- **Core rule** — should repeat across future artifacts.
- **Optional motif** — useful but not required everywhere.
- **One-off detail** — belongs only to the current artifact.
- **Avoid** — should not be repeated.

##### Step 5: Produce or Update DESIGN.md

Output a reusable `DESIGN.md`. If the user provided an existing `DESIGN.md`, update or normalize it instead of replacing it wholesale.

---

#### DESIGN.md Structure

Use this structure by default:

```md
# DESIGN.md

## 1. Visual Theme & Atmosphere

## 2. Color Palette & Roles

## 3. Typography Rules

## 4. Layout Principles

## 5. Component Styling

## 6. Interaction & Motion

## 7. Responsive Behavior

## 8. Do's and Don'ts

## 9. Agent Prompt Guide
```

Add `Lightweight Tokens` when useful and values are available or responsibly inferred.

---

##### 1. Visual Theme & Atmosphere

Describe the overall feeling of the system. Include: mood, level of polish, density, visual temperature, personality, intended audience, what the design should feel like in the first 2 seconds.

Avoid vague words without explanation: modern, clean, beautiful, premium. If used, define what they mean in this system.

##### 2. Color Palette & Roles

Document colors by role, not just by list. Include: background, surface, primary text, secondary text, muted text, border, primary accent, secondary accent, success/warning/error, overlay/shadow.

Rules: explain where each color should be used; avoid too many accent colors; do not invent precise values if none are visible; note colors that should not be overused.

##### 3. Typography Rules

Document the type system. Include: font family or category, headline style, body style, label/metadata style, scale, weight, line height, letter spacing, casing rules, language-specific rules.

Rules: do not default to serif + monospace unless it fits; use 2 type voices at most; typography should create structure, not decoration; for mobile, body text should remain readable.

##### 4. Layout Principles

Describe how pages are structured. Include: grid or layout model, spacing rhythm, section structure, density, alignment, scroll behavior, use of asymmetry, hierarchy rules, how pages should start and end.

Rules: document the structural paradigm; avoid generic repeating vertical blocks; define how hierarchy is created; define how empty space should be used.

##### 5. Component Styling

Document reusable components and patterns. Include: buttons, cards, project items, navigation, metadata blocks, forms, modals/overlays, detail views, empty states, status elements.

For each important component, include: purpose, visual treatment, variants, states, usage notes, what to avoid.

##### 6. Interaction & Motion

Document how the system should move and respond. Include: hover behavior, active states, focus states, loading behavior, page transitions, scroll behavior, motion intensity, reduced motion expectations.

Rules: every interactive element needs feedback; motion should reinforce the visual world; avoid decorative animation with no function; respect reduced motion when relevant.

##### 7. Responsive Behavior

Document how the system adapts. Include: desktop, tablet, mobile behavior, navigation changes, layout stacking, touch behavior, image cropping, interaction fallbacks.

Rules: do not simply shrink desktop layout; replace hover-only interactions on touch devices; preserve content hierarchy on small screens.

##### 8. Do's and Don'ts

Write practical rules. Do: use work as primary proof; preserve strong hierarchy; use metadata labels sparingly and consistently; keep accent colors limited; reuse exact values when available.

Don't: add fake testimonials/metrics/logos; fill space with generic sections; copy brand assets or proprietary UI; add decorative gradients or emoji without purpose; make every section equally loud; use dead links.

##### 9. Agent Prompt Guide

Write instructions that future agents can follow. Make this section direct and operational.

---

#### Lightweight Tokens

If useful, include a compact token section. Use only when values are available or can be responsibly inferred.

```json
{
  "color": {
    "background": "#F7F3EA",
    "surface": "#FFFFFF",
    "textPrimary": "#171717",
    "textMuted": "#73706A",
    "accent": "#D94F30",
    "border": "rgba(23, 23, 23, 0.14)"
  },
  "radius": { "sm": "6px", "md": "12px", "lg": "24px" },
  "spacing": { "base": "8px", "section": "96px" },
  "typography": { "bodySize": "16px", "bodyLineHeight": "1.5", "labelSize": "11px" }
}
```

Do not include fake precision. If values are inferred, state that they are inferred.

---

#### Import Mode Rules

When the user uploads an existing `DESIGN.md`:

- preserve the user's system
- do not rewrite it into a different style
- normalize headings only when useful
- fill obvious missing sections carefully
- keep original exact values
- mark any inferred additions
- do not remove user rules unless they conflict or are duplicated

Output options: updated `DESIGN.md`, normalized `DESIGN.md`, gap analysis plus suggested edits, short compatibility note for future generation.

#### Extraction Mode Rules

When extracting from HTML, screenshot, template, or existing page:

- inspect visible design patterns
- preserve exact values when available
- infer cautiously when values are not available
- do not copy irrelevant implementation details
- describe design intent, not only CSS
- separate reusable rules from page-specific choices
- include tokens only when useful

Avoid: dumping raw CSS into DESIGN.md, inventing unavailable values, treating every one-off detail as a design system rule, missing responsive or interaction behavior.

#### Persistence Mode Rules

When persisting a generated artifact:

- extract from the current approved artifact state
- focus on stable rules that should guide future pages
- preserve the strongest design decisions
- classify one-off details as optional or page-specific
- make future use operational through Agent Prompt Guide

Avoid: overfitting to the current page, preserving placeholder content as design rules, turning a temporary experiment into a permanent system, ignoring user-approved style decisions.

---

#### Quality Rules

A generated `DESIGN.md` should be: reusable, specific, grounded in source material, concise enough to be useful, clear about what is essential vs optional, safe around brand and IP boundaries, useful for future page generation.

Avoid: generic design advice, vague premium/modern/clean language, long theory with no operational rules, copying proprietary brand systems, turning one artifact detail into a universal rule, inventing tokens not supported by the source.

---

## Available Reference Libraries

Look up known references in:

`references/design-systems/INDEX.md`

Do not load every reference by default. Select only the most relevant reference.

### Style Skills

Path: `references/design-systems/style-skills/`

These are reusable design style skills. Each style may contain: `SKILL.md`, `DESIGN.md`, `components.html` (optional), `tokens.css` (optional).

Use these when the user explicitly requests a visual style, UI style, design mood, or implementation style.

### Brand Inspiration

Path: `references/design-systems/brand-inspiration/`

These are public brand-inspired `DESIGN.md` references. Use these when the user mentions a known public brand or product style.

Treat as inspiration only. Extract high-level qualities. Create an original design. Do not copy logos, layouts, assets, proprietary screens, branded UI, or distinctive commercial patterns.

---

## IP and Brand Safety

Do not recreate copyrighted or proprietary designs.

Refuse or redirect if the user asks to: copy a company's distinctive UI, recreate a proprietary product screen, use logos or brand assets without authorization, mimic a proprietary command structure, clone a branded website or app too closely.

Instead, create an original design inspired by high-level qualities.

Safe phrasing: "I can create an original design with similar high-level qualities, such as restrained typography, premium spacing, and product-focused composition, but I should not copy the exact layout or assets."

If the source is public brand inspiration: do not present the output as an official design system, do not copy logos/assets/page structures/proprietary UI, describe only high-level visual qualities, create reusable rules that lead to original designs.

If the source is user-owned: treat it as authoritative when clearly provided by the user, preserve exact values when available, note assumptions when incomplete.

---

## Output Expectations

After applying this skill, the design should show:

- clearer visual direction
- better consistency
- reduced generic styling
- better fit to the user's stated reference
- appropriate use of templates, components, style skills, or inspiration
- no unauthorized copying
- preserved editability

When useful, record: reference type, selected design system/style skill/brand inspiration/template, files consulted, assumptions made, sections kept or removed, parameters changed, license or attribution concerns.

---

## Chinese Typography Reference

Use `horizontal-craft/chinese-typography.md` when the artifact contains substantial Chinese/CJK text, Chinese editorial layout, public-account formatting, Xiaohongshu content, Chinese deck typography, Chinese UI labels, or print-design-inspired HTML.

Translate print-design methods into HTML structure: 版心, 网格, 留白, 标题组, 图版, 边注, 章节 rhythm, and proper punctuation.

---

## Quality Gate

Before delivering this scenario, apply `quality-gate.md`.

This scenario may add stricter checks, but it must not weaken the shared gate.

---

## Handoff

After selecting and applying the reference (or generating/updating `DESIGN.md`), return to the primary artifact skill.

Examples:

- selected `apple` brand inspiration → return to `portfolio.md`
- selected `ant` or `shadcn` style skill → return to the relevant artifact skill
- selected HTML template → return to the relevant artifact skill
- selected previous artifact → return to the relevant artifact skill
- generated new `DESIGN.md` → future design tasks can use it through this skill

This skill guides visual and system constraints. The artifact skill still owns artifact structure and user goal.

When useful, also note: source artifact, source template, source screenshot, selected style skill, selected brand inspiration, date/version, assumptions, missing information.
