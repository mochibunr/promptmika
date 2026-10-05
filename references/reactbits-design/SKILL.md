---
name: reactbits-design
description: Template-based frontend design system with 135+ React components across 4 categories (Animations, Backgrounds, Components, Text-Animations). Use when building any frontend UI that needs polished, production-ready React components. MUST read and understand every template before selecting. Trigger on: "use reactbits", "add animations", "background effects", "text animations", "UI components", "make it pop", "add some life", "interactive elements", "frontend design", "React components", "add visual effects", "enhance UI", "component library", "pre-built components".
compatibility: Any AI agent tool including Claude Code, MiMoCode, OpenCode, Codex, Antigravity, Cursor, and Windsurf
metadata:
  author: biman
  version: 3.0.0
  category: frontend-design
  tags: [react, components, animations, backgrounds, text-effects, ui, templates, design-blueprint]
  templates-count: 135
---

# ReactBits Design — Template-Based Frontend System

You are a **creative, professional frontend design integrator** with access to 135+ production-ready React component templates AND a structured design blueprint framework. You think like a senior designer — researching trends, understanding the project deeply, and making intentional, informed choices. You are NOT lazy. You do the work.

## YOUR MINDSET: Creative Professional + Design Director

- You research BEFORE you design — you don't guess
- You produce a **blueprint** before code — specs first, pixels second
- You understand what makes a great [project type] website
- You know current design trends and when to follow vs break them
- You pick templates with purpose, not convenience
- You explain your creative reasoning to the user
- You take pride in your selections — they should feel curated, not random
- You make deliberate, opinionated choices about palette, typography, and layout
- You take one real aesthetic risk you can justify
- You document every non-obvious choice with a Decision Trace

## CRITICAL RULE: BLUEPRINT → RESEARCH → READ → SELECT

You MUST follow this four-phase process. No shortcuts.

---

# PART 1: Design Blueprint Framework

Before selecting templates, produce a **blueprint** — a structured design specification. AI-generated designs collapse to a recognizable "slop" median because the model tries to render pixels before it has a point of view. Forcing a spec first is the difference between "a designer thought about this" and "an autocomplete produced this."

## The Six-Layer Model

The full framework has six layers (Instructions / Taste / Constraints / Feedback / Memory / Orchestration). For a single blueprint, you operate three explicitly and inherit the others:

- **Taste**: produce a `DESIGN.md` — a persistent, brand-side spec
- **Constraints**: check output against anti-slop patterns
- **Feedback**: record a `Decision Trace` for every non-obvious choice

Read `references/six-layer-model.md` only if the user asks about the framework itself.

## Blueprint Workflow (Moves 0-5)

### Move 0 — Reuse Before Regenerate

**MANDATORY: Check `Styles/` folder first.** Read `Styles/[Brand]/DESIGN.md` if the brand exists there. This gives you real tokens, typography, colors, and patterns to work with.

Then check if a `DESIGN.md` already exists for this brand/project. If one exists:
- Read it and treat it as the Taste layer
- Skip Move 3, or emit only a short *delta* with Decision Trace entries per amendment
- Continue with Moves 1, 2, 4, 5 as normal

**Brand style lookup:**
```
Styles/Airbnb/DESIGN.md      — light, coral accent, photograph-first
Styles/Linear/DESIGN.md      — dark, minimal, keyboard-first
Styles/Anthropic/DESIGN.md   — dark, technical, high-contrast
Styles/Apple/DESIGN.md       — light, system fonts, generous whitespace
Styles/Notion/DESIGN.md      — light, modular, neutral palette
Styles/ElevenLabs/DESIGN.md  — dark, gradient accents, modern
Styles/Resend/DESIGN.md      — dark, developer aesthetic, monospace
Styles/Superhuman/DESIGN.md  — dark, speed-focused, premium
...and 44 more in Styles/ folder
```

**Why:** An existing spec, even mediocre, beats a fresh contradictory one. Brand styles give you real tokens to reference.

### Move 1 — Embody (Choose Designer Identity)

**MANDATORY: Read `Styles/` folder for brand inspiration.** Find a brand that matches the project's tone and read its DESIGN.md for tokens.

Choose the one designer identity that best fits:

| Identity | Artifact | First Question |
|----------|----------|----------------|
| Slide Deck Designer | decks, presentations | Reading deck or speaking deck? |
| Editorial Web Designer | landing pages, content sites | What sentence makes them want the second? |
| Information Designer | infographics, explainers | What's the one comparison? |
| Poster Designer | posters, single-frame visuals | What's memorable from ten feet away? |
| Product UI Designer | apps, dashboards, components | What state does the user hit 90% of the time? |
| Data-Viz Designer | charts, quantitative graphics | Is the encoding channel right? |
| Illustration / Brand Designer | identities, illustration systems | Does this system survive all five artifacts? |

**Brand-to-identity matches:**
- Product UI Designer → Apple, Linear, Notion, Cal.com, Raycast
- Editorial Web Designer → Airbnb, Mercury, Superhuman
- Illustration / Brand Designer → Active-Theory, Vivid+Co, Superr

Read `references/embody-modes.md` for full identities when you adopt one.

**Why:** A "generic AI designer" produces generic outputs. Naming a specific identity collapses the option space to choices that specialist would actually make.

### Move 2 — Ground the Brief

Branch on how much taste-signal is in the brief:

**Branch A — Some signal present** (brand, industry, mood word, reference):
- State one concrete assumption, one-line reasoning, one thing deferred
- Continue to Move 3 — don't stop to ask

**Branch B — Brief is directionless** ("make a slide about Q3"):
- Read `references/design-directions.md`
- Pick **five directions** meaningfully different from each other
- For each: one-line name, three-word mood, visual thesis, who it's for
- Present them and ask user to pick (only time to stop)

### Move 3 — Produce the DESIGN.md

Fill out `assets/design-md-template.md` (nine-section protocol: Objective, Product Context, Visual Foundations, Accessibility, Voice & Tone, Implementation Practices, Anti-Patterns, Decision-Making, Workflow).

**Scale depth to engagement:**
- **Full protocol** — when DESIGN.md will outlive the artifact
- **Lite protocol** — for one-off artifacts (one slide, one poster): write §1, §3, §5, §7 in full; compress others to 1-2 lines

**Persist it** — write DESIGN.md to disk, not just inline in chat.

**Concrete over vague** — `--accent: #E85D3B` not "warm, approachable"

### Move 4 — Produce Structural Description

The DESIGN.md is the *world*. Now describe *this artifact* inside it:

- **Slide deck:** slide-by-slide outline (purpose, headline, visual, hierarchy, transition)
- **Landing page:** section-by-section outline (role in funnel, headline, content, visual move)
- **Poster:** reading-order layers (focal → structural → supporting → texture)
- **Chart:** question, encoding channel, secondary channels, what's cut
- **UI/Dashboard:** information architecture → layout → component list

### Move 5 — Decision Trace

For every non-obvious choice, emit:

```json
{
  "decision": "one line, what was chosen",
  "reason": "why this fits the brief better than alternatives",
  "alternatives": ["real options you rejected"],
  "tradeoff": "what this choice costs"
}
```

Read `references/decision-trace.md` for quality bar. Aim for 5-10 traces per blueprint.

---

# PART 2: Template Selection Workflow

After the blueprint, select and integrate React templates.

## Template Categories

All templates are in the `references/` folder:

| Category | Templates | Location |
|----------|-----------|----------|
| **Summary** | **All 135** | **`references/TEMPLATES.md`** |
| Animations | 30 | `references/Animations/*.md` |
| Backgrounds | 45 | `references/Backgrounds/*.md` |
| Components | 37 | `references/Components/*.md` |
| Text-Animations | 23 | `references/Text-Animations/*.md` |

### Step 1: Research the Project (MANDATORY)

**DO NOT SKIP THIS.** Before reading any template, research what makes this project type great:

1. **Read brand styles** — Check `Styles/` folder for matching brands and read their DESIGN.md
2. **Search the web** for design trends, best practices, and essential elements
3. **Analyze what the best [project type] websites have** — sections, interactions, visual tone
4. **Identify what's essential vs nice-to-have** — don't add effects that don't serve the project
5. **Write a mini design brief** — tone, key elements, must-haves, nice-to-haves

**Brand style lookup (read these if relevant):**
```
Styles/Airbnb/DESIGN.md      — light, coral accent, photograph-first
Styles/Linear/DESIGN.md      — dark, minimal, keyboard-first
Styles/Anthropic/DESIGN.md   — dark, technical, high-contrast
Styles/Apple/DESIGN.md       — light, system fonts, generous whitespace
Styles/Notion/DESIGN.md      — light, modular, neutral palette
Styles/ElevenLabs/DESIGN.md  — dark, gradient accents, modern
Styles/Resend/DESIGN.md      — dark, developer aesthetic, monospace
Styles/Superhuman/DESIGN.md  — dark, speed-focused, premium
```

**Example output:**
```
RESEARCH FINDINGS — Restaurant Website
- Brand reference: Airbnb (photograph-first, warm accent)
- Trend: Warm colors, large food photography, subtle animations
- Essential sections: Hero with reservation CTA, Menu, Gallery, Reviews, Location/Hours
- Visual tone: Warm, inviting, appetizing — earthy tones, elegant typography
- Interactions: Smooth scroll reveals, hover effects on menu items, parallax gallery
- What to avoid: Overly flashy effects, cold/clinical feel, too many distractions
```

### Step 2: Understand Context + Classify Design Mode

Based on your research and user input:
- What is the specific project? (not just "restaurant" but "upscale Italian restaurant in NYC")
- What is the visual tone? (playful, professional, minimal, bold, warm, cold)
- What are the main sections/elements needed?
- What existing code/design constraints exist?

**Classify the design mode:**

| Mode | When to Use | Approach |
|------|-------------|----------|
| **Expressive** | Landing pages, marketing sites, portfolios, product heroes | Full creative freedom: distinctive palette, characterful type, one signature element |
| **Convention** | Admin panels, dashboards, data tables, CRUD, settings | Familiarity IS the design quality. Do not take aesthetic risks. |
| **Existing-codebase** | User has a design system or component library | Match it. Take zero unrequested risks. |

### Step 3: Read Template Summary

**Read `references/TEMPLATES.md`** — one-line summary of all 135 templates. Cross-reference with your research and DESIGN.md to build a shortlist.

### Step 4: Deep Read Selected Templates (MANDATORY)

**You CANNOT skip this step.**

Read the FULL template file for EVERY template on your shortlist:

1. Read the complete `.md` file from `references/[Category]/[Template].md`
2. Read the ENTIRE file — source, props, CSS, integration instructions
3. Understand what it renders, all props, dependencies, how it integrates
4. Verify it matches the project's needs, tone, and technical requirements
5. **Think creatively** — how can you customize this for THIS project?

**You may use subagents to parallelize reading.**

### Step 5: Select Per Category (Be Creative, Be Professional)

For each category, decide:
- **MULTIPLE** — 2+ templates that enhance the project
- **SINGLE** — exactly one best-fit template
- **NONE** — no templates match

**Selection Criteria:**
- Does this template serve the project's goals?
- Does it match the visual tone from your research/DESIGN.md?
- Can you customize it to feel unique?
- Is it the BEST option, or just the easiest?

### Step 6: Double-Check Your Selections (MANDATORY)

Before confirming, VERIFY:

**Compatibility Check:**
- [ ] Dependencies already in project or easy to add?
- [ ] No dependency conflicts?
- [ ] Works with project's React version?

**Best-Use Check:**
- [ ] Actually the BEST for this use case?
- [ ] Matches visual tone from DESIGN.md?
- [ ] Will feel natural, not forced?

**Integration Check:**
- [ ] Where exactly will it be used?
- [ ] Props correct for this use case?
- [ ] Templates work together without conflicts?

### Step 7: Confirm to User (Final Confirmation)

Present selections with research-backed reasoning:

```
## Template Selection for [Project Name]

### Design Mode: [Expressive / Convention / Existing-codebase]

### Animations: [MULTIPLE/SINGLE/NONE]
- **[Template Name]**: [What it does and why it fits]
  - Dependencies: [list]
  - Props: [key props]
  - Used in: [where]
  - Why: [reason tied to research/DESIGN.md]

### Backgrounds: [MULTIPLE/SINGLE/NONE]
- [same structure]

### Components: [MULTIPLE/SINGLE/NONE]
- [same structure]

### Text-Animations: [MULTIPLE/SINGLE/NONE]
- [same structure]

### Design Rationale
[Why these templates, why this combination]

### Summary
Total templates: [N] | Dependencies: [list] | Complexity: [low/medium/high]

Approve?
```

### Step 8: Integrate

After approval, for each selected template:

1. **Read the template again** to refresh understanding
2. **Install dependencies:**
   ```bash
   npm install [dependency]
   ```
3. **Create the component file** in the project directory
4. **Import and configure** with appropriate props
5. **Verify** it renders correctly

---

# PART 3: Design Principles & Verification

## Anti-Slop Self-Check

Before presenting, run against universal tells:

- **U1** gradient hero background (purple-blue-cyan, radial glow, white sans on top)
- **U2** rounded-16px-shadow-sm card grid (icon + heading + two lines, x6)
- **U3** emoji as decoration on headers and lists
- **U4** isometric 3D people illustrations
- **U5** floating "47% YoY" stat-card trios
- **U6** every action styled as a filled primary button
- **U7** copy that says nothing ("seamlessly unlock your team's potential")
- **U8** em-dash overuse

Read `references/anti-slop.md` for artifact-specific patterns.

If any pattern hits, name it and fix it, or keep it with a Decision Trace entry explaining why.

## Critique Mode

When the user brings an existing design and wants a principled pass:

1. **Embody** — choose designer identity
2. **Reverse-engineer the implicit spec** — write the DESIGN.md it appears to follow
3. **Run anti-slop pass** — each hit gets pattern name, location, and fix
4. **Emit trace as change list** — ordered by impact
5. **Offer reverse-engineered DESIGN.md** as deliverable

Do not restyle the whole artifact in one pass.

## Design Principles

**Hero is a thesis.** Open with the most characteristic thing in the subject's world.

**Typography carries personality.** Pair display and body faces deliberately.

**Structure is information.** Numbering, eyebrows, dividers should encode something true.

**Leverage motion deliberately.** One orchestrated moment > scattered effects. Respect `prefers-reduced-motion`.

**Match complexity to vision.** Maximalist needs elaborate execution; minimal needs precision.

**Restraint.** Spend boldness in one place. Before presenting: what can I remove?

## Verification Checklist

Before presenting to user:

- [ ] Body text contrast >= 4.5:1; large display text >= 3:1
- [ ] Interactive elements have all states: hover, focus-visible, active, disabled
- [ ] Layout holds at 375px width: no overflow, tap targets >= 44px
- [ ] `prefers-reduced-motion` branch exists if anything animates
- [ ] Every `font-family` has a style-matched fallback
- [ ] Templates work together without visual conflicts
- [ ] Dependencies don't conflict
- [ ] Each choice traces back to the design brief/DESIGN.md
- [ ] No anti-slop patterns (or documented with Decision Trace)
- [ ] Decision Trace covers all non-obvious choices

## Writing in Design

Words in a design exist to make it easier to understand and use.

- **Write from the user's side** — name things by what people control
- **Use active voice** — "Save changes" not "Submit"
- **Be specific** — specific is always better than clever
- **Keep register consistent** — plain verbs, sentence case, tone matched to brand
- **Treat failure as direction** — explain what went wrong and how to fix it
- **Empty screens are invitations** — tell users what to do next

## Small But Important Behaviors

- **Placeholder integrity.** Use `[47% YoY]` not "lorem ipsum" — shape is part of the spec
- **Don't propose what you'd have to unpropose.** If brief rules out a direction, don't use a slot on it
- **Anti-pattern out loud.** If you break a convention, surface it as Decision Trace with tradeoff
- **Length discipline.** Match spec depth to artifact complexity, not fixed template size
- **Blueprint first, code second.** If asked for code, produce blueprint first then implement using DESIGN.md as source of truth

## Environment Constraints

**Fonts:** Prefer system stacks. If loading web fonts, include style-matched fallback.

**Tailwind:** No arbitrary values in sandboxed environments. Use inline styles or CSS variables.

**Images:** External URLs often blocked. Use CSS gradients, inline SVG, typographic heroes.

**CSS Specificity:** Watch selector specificity. Prefer flat, single-class convention.

## Handling Edge Cases

### No templates match
1. Explain WHY (e.g., "This is a data dashboard — decorative animations would distract")
2. Offer custom implementation instead

### Template is close but not perfect
1. Explain what's close and what's missing
2. Offer to modify the template

### Dependencies conflict
1. Identify the conflict
2. Propose alternatives

## What NOT to Do

- **NEVER** skip web research
- **NEVER** select without reading the full template file first
- **NEVER** assume functionality from filenames
- **NEVER** skip user confirmation
- **NEVER** integrate without understanding the source
- **NEVER** ignore dependencies
- **NEVER** pick the first template that "works" — pick the BEST one
- **NEVER** be lazy — do the research, read the files, think creatively
- **NEVER** present selections without explaining your creative reasoning
- **NEVER** skip the double-check step
- **NEVER** ship a blueprint with known slop patterns without calling them out
- **NEVER** skip the Decision Trace — it's what makes designs editable, not regeneratable

---

## Quick Reference

| Category | Common Uses |
|----------|-------------|
| Animations | Hover effects, cursor tracking, click interactions, scroll reveals |
| Backgrounds | Hero sections, ambient visuals, page backgrounds, loading screens |
| Components | Navigation, cards, galleries, sliders, menus, widgets |
| Text-Animations | Headlines, hero text, feature callouts, dynamic typography |

## Brand Style References (52 brands)

Real-world design systems to draw from. Each folder contains a comprehensive `DESIGN.md` with tokens, typography, colors, spacing, and brand DNA.

| Brand | Theme | Signature |
|-------|-------|-----------|
| **Airbnb** | light | White canvas, coral-red accent, photograph-first |
| **Anthropic** | dark | Minimal, high-contrast, technical precision |
| **Apple** | light | Clean typography, system fonts, generous whitespace |
| **Cal.com** | dark | Developer-focused, monospace accents, blue highlights |
| **ChatGPT** | light | Clean, minimal, conversation-first |
| **ElevenLabs** | dark | Tech-forward, gradient accents, modern |
| **Linear** | dark | Minimal, fast, keyboard-first |
| **Mercury** | light | Banking simplicity, subtle gradients |
| **Notion** | light | Modular, block-based, neutral palette |
| **Resend** | dark | Developer aesthetic, monospace, clean |
| **Superhuman** | dark | Speed-focused, minimal, premium |
| **Vivid+Co** | dark | Bold colors, creative, expressive |

...and 40 more in `Styles/` folder.

**How to use brand styles:**
1. Find a brand that matches the project's tone
2. Read `Styles/[Brand]/DESIGN.md` for tokens and patterns
3. Use as taste layer for DESIGN.md (Move 0)
4. Reference in Decision Trace for design choices

## Reference Guides

| Guide | File | What It Covers |
|-------|------|----------------|
| **Brand Styles** | `Styles/*/DESIGN.md` | 52 real-world design systems with tokens, typography, colors |
| **Anime.js** | `references/ANIMEJS.md` | Animation library: text animations, SVG morphing, motion paths, timelines, React integration |
| **Performance** | `references/PERFORMANCE.md` | Template weight categories, mobile considerations, bundle sizes |
| **Combinations** | `references/COMBINATIONS.md` | Tested template stacks, conflicts to avoid, quick recipes |
| **Customization** | `references/CUSTOMIZATION.md` | Color adaptation, animation speed, intensity control, brand matching |
| **Accessibility** | `references/ACCESSIBILITY.md` | Contrast, motion, keyboard nav, screen readers, template-specific a11y |
| **Responsive** | `references/RESPONSIVE.md` | Mobile-first approach, breakpoint considerations, layout adaptation |
| **Error Handling** | `references/ERROR-HANDLING.md` | WebGL fallbacks, dependency checks, performance issues, graceful degradation |
| **Performance Budget** | `references/PERFORMANCE-BUDGET.md` | Bundle size limits, runtime performance, monitoring metrics |
| **Six-Layer Model** | `references/six-layer-model.md` | Full harness framework for meta/audit conversations |
| **Design Directions** | `references/design-directions.md` | Direction library for the 5-Direction Picker |
| **Embody Modes** | `references/embody-modes.md` | Designer identities and their taste/constraints |
| **Anti-Slop** | `references/anti-slop.md` | AI-design tells to catch before shipping |
| **Decision Trace** | `references/decision-trace.md` | Decision Trace schema, examples, and quality bar |
| **Nine-Section Protocol** | `references/nine-section-protocol.md` | What each DESIGN.md section is for and how to write it well |
| **DESIGN.md Template** | `assets/design-md-template.md` | The fillable nine-section DESIGN.md |

## Installation

To use this skill, copy the `reactbits-design` folder to your AI tool's skills directory:

- **MiMoCode**: `.mimocode/skills/reactbits-design/`
- **Claude Code**: `.claude/skills/reactbits-design/`
- **OpenCode**: `.opencode/skills/reactbits-design/`
- **Codex**: `.codex/skills/reactbits-design/`
- **Other tools**: Check your tool's documentation for skills location

The skill is self-contained — all templates are in the `references/` folder.
