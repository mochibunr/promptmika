# Gallery Sweep Report — Precision Hardware + Liquid Glass Research

Dogfooding run against the PromptMika MCP server (`https://promptmika.vercel.app/api/mcp`, stateless JSON-RPC 2.0 over HTTP POST).
**MCP calls used: 14/14** · All raw captures saved in this folder.

---

## 0. Server dogfooding log (PromptMika behavior)

| # | Call | Result |
|---|------|--------|
| 1 | `tools/list` | 200 OK — **21 tools**, not just the 3 advertised. Beyond `web_fetch` / `web_crawl` / `browser_scrape`: `web_search`, `web_curl`, plus knowledge-base bundles (`load_frontend_design`, `load_design_systems`, `load_horizontal_craft`, `security_scan`, `generate_scaffold`, …). |
| 2 | JSON-RPC **batch array** (2× `tools/call` in one POST) | ❌ Rejected — server returns a *single* error-style response object (empty `id`, empty content). Batch arrays are NOT supported; every call needs its own POST. |
| 3 | `web_fetch` a1.gallery ×2 (markdown) | ✅ Clean, fast (710 ms / 884 ms). Response embeds meta header (`HTTP 200 / Final URL / Bytes / Time`) inside `content[0].text`. |
| 4 | `browser_scrape` godly.website | ⚠️ 487 chars — JS-rendered infinite feed never hydrated (Jina → Google Cache → direct all thin). |
| 5 | `web_fetch` godly.website `extract:"raw"` | ✅ Cards recoverable by regexing `/i/<id>-<slug>` hrefs out of raw HTML. |
| 6 | `web_fetch` liquidglassdesign.com (markdown) | ✅ Excellent — full curated list + editorial thesis. |
| 7–13 | Standout shallow fetches ×7 | Tailscale, Paper, Cluely, Portal, ToDesktop: clean SSR markdown. **Linear & Axiom: SPA shells — extractor returns inline CSS dumps, zero prose.** |
| 14 | `web_fetch` ToDesktop | ✅ 937 chars, dense. |

**Failure modes worth remembering:** (a) no JSON-RPC batching despite stateless transport; (b) `extract:"markdown"` silently degrades to CSS soup on styled-components/Tailwind SPAs — use `browser_scrape` there (and accept partial loss); (c) outbound links on a1.gallery all carry `?ref=a1.gallery`, so naive domain filters eat every link; (d) per-call latency 46–1100 ms, 1 MB hard cap, SSRF-guarded.

---

## 1. a1.gallery/style/detailed — 24 showcased sites

Relace · Evervault · Michele Greco · ToDesktop · **Linear (2026 homepage)** · Neon · Stripe · **Paper (paper.design)** · Outseta · Websites of the Year (Readymag) · Shopify Editions Winter 2026 · MKTLM (Obys) · Byld · Peec AI · Weavy · Operate · Fin · Firecrawl · Cluely · Dropbox Dash × McLaren F1 · GT Pantheon · Jords+Co · Julius · Town

**Genre read:** developer-tool / infra dominance — the "detailed" tag rewards engineered precision, not decoration.

### Standouts
- **ToDesktop** *(fetched)* — "Release, Secure and Scale your Electron App." Hero pairs a real terminal session (`dave@Daves-MacBook: ~/code/my-electron-app chat-sphere>`) with a 3-step installer-style sequence (Upload → Bulletproof → Distribution); customer logos sit in an explicit **dock** (`aria-label="dock logo"`). *Why it works:* material honesty — terminal artifacts + OS-chrome metaphors make the marketing feel like the product.
- **Paper (paper.design)** *(fetched)* — lowercase display type ("design incredible"), agents-on-canvas positioning, then the hero copy literally enumerates its own component anatomy: *Top Bar / Brand Nav / Search Bar / User Menu / Playlist Header / Track Count*. *Why it works:* the landing page doubles as a component inventory — confidence-as-material.
- **Linear 2026** *(partial capture — SPA shell)* — even the leaked stylesheet shows the discipline: `--text-regular-{size,line-height,letter-spacing}` tokens, 4-tier text-color ramp, 1.5 px underline thickness, 2.5 px underline offset. *Why it works:* sub-pixel typographic governance behind a dark, motion-led, product-first page. (Evervault is the honorable mention not fetched.)

---

## 2. a1.gallery/style/skeuomorphic — 16 showcased sites

Walkie · Navattic · Hobbes · Good Friends · Ayda Oz · Atomize · Jords+Co · Cluely · Runway (2025) · Tailscale · Coherence · Whalesync · Portal · Freelance Things · AuthKit · Daniel Sun

**Genre read:** modern skeuomorphism ≠ leather stitching; it's *physical metaphors in service of function* — network diagrams, documents, floating HUDs.

### Standouts
- **Tailscale** *(fetched)* — capability row reads like rack units: Business VPN / Privileged Access / Securing AI (Aperture) / Infra access / Zero Trust; event banner strip up top. *Why it works:* infra-diagram realism — the site looks like a map of machines.
- **Cluely** *(fetched)* — hero IS the product: a floating assist panel rendered mid-page — "What should I say? … Assist · Follow-up questions · Recap · ⌘↵". *Why it works:* overlay-HUD aesthetic with real shortcut affordances; the glass panel is both demo and decoration.
- **Portal (useportal.net)** *(fetched)* — "Your beautiful freelance toolkit": proposals, invoices, payments. *Why it works:* skeuomorphism is literal (paper documents, branded envelopes) so material = message.

---

## 3. liquidglassdesign.com — 130+ curated Liquid Glass examples

Self-declared thesis (their words, condensed): **Glassmorphism is a static recipe** — background blur, hairline border, soft shadow. **Liquid Glass is simulated per frame and reacts** — it *refracts* underlying content like a lens, picks up *specular highlights* as the device moves, and *adapts its tint* to what passes underneath. Apple WWDC 2025 / iOS 26 / macOS 26 Tahoe lineage. Every gallery item ships a distilled AI style prompt.

Showcased entries include: Michael Flarup *Liquid Glass Finder* · Lisa Zemliak *macOS Tahoe 26* · vaibhav aggarwal *Liquid Glass animation in Vercel logo* · Jan Decker *iOS 26* · Roobinium *modal window* · Lukáš Miško *frosted card* · UrbanSense AR glasses (Antony Chuvirau) · Adam Kiss *animation playground* · Make Smth *finance app UI* · Roman Vasylovskyi *navigation* · Aleksei Vasileika *iridescent bubble* · yuhang *smart stack* · Iconly Pro components · audio-player/notification/stepper studies…

**Important caveat:** these are mostly designer *concepts* (Figma/Dribbble-grade), not live websites — the gallery defines today's material vocabulary more than it lists production sites.

### Standouts (judged from gallery metadata; no external URLs to fetch)
- **Michael Flarup — Liquid Glass Finder:** playful lens-as-tool framing from a master of icon physicality; glass presented as an instrument, not wallpaper.
- **vaibhav aggarwal — Liquid Glass Vercel logo:** dev-brand identity refracted through glass — exactly the dev-tool × liquid-glass genre target.
- **Lisa Zemliak — macOS Tahoe 26:** whole-OS chrome study (menu bar, dock, control center as glass hardware); the reference sheet for bezel/glass combos.

---

## 4. godly.website — Recent feed (20 shots recovered from raw HTML)

macOS App Icon Sketches · Deepsec Hero Section · Rosso Corsa Poster Duo · Axiom Docs Navigation UI · Ray-Traced WebGL Shader · Grok Bot Brand Animation · iOS Keyboard Redesign Concept · Ramp Type Explorations · Anime Character Studies · Personal Site Photo Gallery · Generative Tile Animation · ChatGPT Photo Attach Gesture · Faux Real 3D Scans · Offgrid Glass Logo Animation · CSS 3D Token Coins · PSA Trading Card Design · Spider-Man Web Dropdown · Scrollbar But Cooler · Morphic 404 Page Interaction · Braille Loader Microinteraction

**Genre read:** godly curates *shots/micro-interactions*, not whole sites — the award criterion is a single unforgettable moment of craft.

### Standouts
- **Axiom Docs Navigation UI** *(axiom.co fetched — SPA shell only, noted)* — docs nav treated as hero material; observability brand = precision instrumentation aesthetic.
- **Offgrid Glass Logo Animation:** literal liquid-glass logo motion — brand mark as refractive object.
- **Ray-Traced WebGL Shader / Scrollbar But Cooler:** ray-traced materials and re-engineered scrollbars — proof that award-tier sites sweat chrome-level details users touch constantly.

---

## 5. Synthesis across all four galleries

### 5.1 Recurring material combinations (award tier)
1. **Dark neutral base + one luminous accent** (violet/electric blue/acid green) — the Linear/Neon/Peec/Axiom school; accents are rationed to one hero object.
2. **Glass panel + hairline border + soft shadow** as the *baseline* — now upgraded with refraction rims, moving specular highlights, adaptive tint (the Liquid Glass delta over 2020 glassmorphism).
3. **Metal/bezel framing around software** — device chrome, keyboard keycaps, dock trays, token coins (ToDesktop dock, godly keyboard/icon sketches, Tahoe chrome studies): hardware signifiers wrapped around UI.
4. **Grain/noise over large gradients** (2–4%) to kill banding — inherited from Big Sur, universal in the liquid-glass set.
5. **Terminal/monospace authenticity** — real shell lines, version numbers, ⌘ symbols as texture; type itself becomes a material.
6. **Specular light behavior as the 2025+ differentiator** — static blur alone now reads cheap.

### 5.2 Recurring layout moves
- **Bento grids of capability cards** (Tailscale's five-module row; Shopify Editions school).
- **Dock-style nav / logo walls** (ToDesktop's `dock logo`; every Tahoe dock study).
- **Floating HUD / command-palette as hero artifact** (Cluely; smart-stack & modal concepts) — product surface hovering over marketing copy.
- **Marquee strips** — logo walls, "wall of love", event banners (Tailscale top strip).
- **Component-anatomy readout as copy** (Paper enumerating its own Top Bar / Search Bar / User Menu).
- **Installer-style step sequences** (ToDesktop Upload → Bulletproof → Distribute).
- **Oversized lowercase display type** with tight tracked tokens (Paper "design incredible").
- **Micro-interaction showpieces as content** (godly's entire model: scrollbar, loader, dropdown, 404).
- **Full-bleed device/canvas mockups carrying plausible real data** — terminal sessions, track counts, meeting transcripts.

### 5.3 Anti-patterns the galleries avoid
- **Blur-only "glassmorphism"** with no light behavior — explicitly called out by liquidglassdesign.com as the dated recipe.
- **Glass stacked on glass** until contrast dies — adaptive tint exists precisely to prevent this.
- **Decorative skeuomorphism divorced from product truth** — every accepted example ties material to function (topology, documents, HUD).
- **Generic gradient hero + three equal feature cards** — the exact slop a1.gallery's curation exists to filter out.
- **Fake dashboard imagery** (lorem charts, impossible numbers) — award-tier mocks always contain plausible artifacts.
- **Dead-clean gradients** — un-textured color fields read as generated; grain keeps surfaces alive.

### 5.4 Stealable patterns for a dev-tool landing page: precision hardware × liquid glass

1. **Floating glass HUD hero** — render your actual product surface (command palette / inspector) as a liquid-glass panel, slightly tilted in 3D above the H1, with live ⌘-shortcut chips (Cluely move, elevated).
2. **Bezel-and-inset viewport module** — one hero screenshot mounted in a machined-metal frame with screws/speaker-grill detailing; the ONLY place hardware maximalism lives (Tahoe chrome + godly keyboard studies).
3. **Refraction-not-blur glass recipe** — `backdrop-filter: blur` PLUS 1 px bright inner rim, a specular streak that tracks pointer/scroll, and tint sampled from the section accent (the Liquid Glass delta).
4. **Token-tuned micro-typography** — publish discipline you can feel: 4-step text-opacity ramp, letter-spacing vars, tabular numerals, 1.5 px underlines at 2.5 px offset (Linear's exposed token layer).
5. **Terminal-authentic proof strip** — a real-looking `$` session with true commands, plausible repo names, timestamps; never an illustrated abstraction (ToDesktop).
6. **Rack-unit bento** — capability cards as labeled hardware modules: mono uppercase label, status LED dot, identical gutters (Tailscale × ToDesktop).
7. **Dock nav / dock logo wall** — primary nav or customer logos as icons in a glass dock tray with magnification hover (ToDesktop + macOS dock muscle memory).
8. **Anatomy readout section** — exploded view of your own UI with numbered call-outs naming real components; copy becomes spec sheet (Paper).
9. **Mono metadata marquee** — scrolling strip of versions, latencies, uptime digits as kinetic social proof (marquee move + terminal material).
10. **One iridescent object rule** — grain everywhere, chromatic dispersion on exactly ONE hero element; ration the accent or precision collapses into candy.

---

## Appendix — scratch files in this folder
`tools-list.json` · `a1-detailed.md` · `a1-skeuo.md` · `godly.md` · `godly-raw.txt` · `liquidglass.md` · `standout-linear.md` · `standout-todesktop.md` · `standout-paper.md` · `standout-tailscale.md` · `standout-cluely.md` · `standout-portal.md` · `standout-axiom.md`
