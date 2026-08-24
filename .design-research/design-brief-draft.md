# PromptMika Website — Design Brief v0.1 (pre-synthesis draft)

Status: skeleton. Token tables get filled from `.design-research/*` CSS mining reports before implementation.

## Concept (working)

**"Precision instrument, warm lab."** PromptMika is a knowledge instrument for coding agents:
a machined control panel (skeuomorphic/tactile hardware cues) with liquid-glass viewing windows
into the reference library, set on a selective bento grid with real dimensional depth.
Not a glass-everything template — materials are assigned by function:

- **Machined / tactile** → controls, endpoint box, copy buttons, tabs, dock nav. Things you "press".
- **Liquid glass** → content viewers: terminal, palette, code panels, pack cards' media slots. Things you "look into".
- **Paper-solid** → text-dense zones: docs lists, facts, footer. Things you "read".
- **3D depth** → spatial hierarchy via layered shadows + parallax micro-tilt on hero objects only.

## Voice & art direction

- Dark-first, one warm metal accent family + one signal accent. No AI-purple, no neon gradient washes.
- Grain/noise texture on large surfaces to kill flat-gradient cheapness; dotted engineering grid in hero field.
- Mono type for machine labels (`tools/list`, file paths, stats); grotesk display for headlines; humanist body.
- Micro-labels like an instrument panel: `01 · LOAD`, `REF`, `SCAN`, small caps, wide tracking.
- Motion: spring-ish ease-out, 200–300ms, transform/opacity only, reduced-motion collapses everything.

## Page architecture (landing)

1. Dock nav (floating pill, metal bezel + glass face)
2. Hero — eyebrow status LED · H1 · subline · endpoint-box (machined URL plate + copy key) · CTAs
   - right/background: LiveTerminal inside a glass instrument window
3. Proof bento (2-up): CmdPalette demo card + live numbers card (23 tools / 162 refs / budgets)
4. Packs bento grid — 13 packs as varied-size bento cells (selective bento: size = weight)
5. Tools control panel — web tools + scanner + scaffolder as switch/module modules
6. How it works — 3 steps, numbered instrument style
7. Connect band — client tabs teaser + CTA
8. Footer

## Binding class contract (existing components — must keep working)

- Reveal: `.reveal`, `.is-in`, `--d`
- LiveTerminal: `.terminal .term-bar .term-dot .term-title .term-state .status-dot .term-body .tl (.cmd|.dim|.file|.ok) .term-caret`
- MCPUrl/CopyUrl: `.copy-btn (.ok)`
- ConnectTabs: `.tabs .tabs-rail .tab (.is-active) .tab-led .tabs-panel .panel-chrome .chrome-dot .chrome-title .panel-code .panel-note`
- CmdPalette: `.palette-wrap .palette .palette-query .palette-typed .term-caret .palette-rows .palette-row (.active|.ghost) .row-glyph (.g-ref|.g-scan|.g-search|.g-gen|.g-web|.g-done) .row-title .row-detail .palette-foot kbd .palette-status .term-caption`
- /connect page: `.nav .nav-pill .brand .brand-mark .nav-links .hero .hero-field .container .eyebrow .hero-sub .cta-row .endpoint-box .endpoint-url .section .connect-facts .fact .footer .footer-inner .footer-links`

## Typography candidates (final pick after research synthesis)

- Display: Space Grotesk · Body: Geist or Inter · Mono: JetBrains Mono
- Scale (draft): 12 / 13 / 15 / 17 / 22 / 28 / 40 / 56 / 76 · tracking: display -2%, mono labels +8%

## TBD from research (fill before build)

- [ ] Palette hexes (bg tiers, metal accent, signal accent, text tiers)
- [ ] Shadow/bezel recipes (outer layers + inset highlight pairs) — from tactile report
- [ ] Glass recipes (blur/saturate values, rim gradients, sheens) — from glass report
- [ ] Bento anatomy ratios — from bento reports
- [ ] Noise/grid texture techniques — from galleries/tactile
- [ ] Motion easings observed — from all reports
