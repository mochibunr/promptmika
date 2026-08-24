# Spatial / Dimensional UI — Design Research via PromptMika MCP Dogfooding

**Sites:** spline.design · rive.app · poolside.ai · cluely.com · sui.io
**Method:** PromptMika MCP server (`https://promptmika.vercel.app/api/mcp`), stateless JSON-RPC 2.0 over HTTP POST, driven from PowerShell `Invoke-RestMethod`.
**Budget:** 12 of ≤13 MCP calls used (1× tools/list, 6× web_fetch pages, 5× web_fetch CSS bundles).
**Scratch assets:** `tools.json`, `{site}.html`, `{site}-css-*.css` in this folder.

---

## 0. The meta-finding

**None of these "3D sites" ship live 3D above the fold — they ship video, canvas placeholders, and CSS that *implies* dimensionality.** Even spline.design renders its hero as pre-rendered MP4 loops with the real WebGL canvas shipped `style="display:none"` until hydration. Every site's dimensional *feel* is carried by CSS: light direction, layered shadows, edge fog, motion easing. That means a mostly-CSS site can steal ~90% of the look.

---

## 1. Per-site findings

### 1.1 spline.design — "3D as MP4, glass on black"

- **Hero architecture:** `<section class="…__container"><div class="…__content"><h1>Make anything 3D</h1>…` — text + prompt-box sit **above** a `__scene` wrapper whose `<canvas>` is `display:none`. Visible motion comes from 12 CDN MP4 loops: `<video autoplay loop muted playsinline src="https://cdn.spline.design/_assets/_videos/usecase-N.mp4">`, bento tiles use `object-fit:cover` feature videos. Progressive-enhancement pattern: static poster → video loop → live canvas.
- **Palette tokens** (CSS chunk A): `--color-bg:#000`; text hierarchy as **white opacity tiers**: `--color-text-navigation:var(--color-white-070)`, paragraphs `-060`, hairlines `-010`. Accents: purple family `#915eff/#a770ff/#d680ff`, blue `#0062ff`, pink `#ff5cab`, red `#fd585b`, yellow `#ffb01f`.
- **Glass without backdrop-blur:** panels are white at 5–8% alpha over black: `--color-btn-bg:#ffffff0d; --color-btn-bg-highlight:#ffffff0f; --panel-bg-alpha:.08`.
- **Border language = light, not shadow:** `box-shadow: inset 0 0 0 1px var(--color-white-010)` — a 10%-white hairline ring reads as rim light on floating chrome.
- **Type:** Brockmann (geometric display) + Spline Sans / Spline Sans Mono; restrained scale in chunks (2.75rem hero down to 9–11px micro-labels).

### 1.2 rive.app — "one spectrum accent, everything else monochrome"

- Built on Framer; **254KB of inline CSS**, 2,099 custom-property references. Palette is essentially `#000 ×43 / #fff ×17` plus two warm accents (`#f30058`, `#ffa41c`). Restraint makes the one colorful element pop.
- **Signature technique — oklch spectrum wipe on text:** an absolutely-positioned overlay span (pointer-events:none) over the label "SCRIPTING IS LIVE":
  ```css
  background-image: linear-gradient(in oklch 90deg,
    #ffffff 0% 30%, #3084ff 35%, #19f2ff 45%, #ffa41c 50%,
    #f30058 55%, #ff483c 60%, #f30058 65%, #000000 70% 100%);
  background-clip: text; -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 1600% 100%;        /* ultra-wide gradient = smooth sweep */
  background-position-x: 100%;        /* JS/CSS animates this */
  will-change: background-position, opacity, filter;
  ```
  Compressing all hue stops into 30–70% of the gradient and stretching it to 1600% width gives a liquid rainbow wash across glyphs — pure CSS, no WebGL.
- **Motion signature:** `transition: color .1s cubic-bezier(.12,.23,.5,1)` — near-instant color flips that still settle softly.
- **Media hygiene:** hero videos inline-styled `width:100%;height:100%;object-fit:cover;background-color:rgba(0,0,0,0)`, some `preload="none"` (lazy); offscreen runtime canvases ship `width:0;height:0`.

### 1.3 poolside.ai — "paper room + electric indigo, fade-the-scene-in"

- SvelteKit + Tailwind v4. Three ramps: **warm paper mono** `--color-mono-100:#fbfaf6 → mono-200:#f7f6ef → mono-700:#6f6d69` (the "room"), **electric indigo** `pri-500:#4c91ff … pri-800:#4137ff → pri-900:#010080`, **heat** `sec-300:#fed253 → sec-600:#ff8040 → sec-700:#ff5e23`. Display font Untitled Sans.
- **Loading state for heavy scenes:** the hero canvas is an aria-hidden decorative layer that starts invisible and cross-fades:
  ```html
  <section class="bg-mono-200 after-shadow-inset-border relative overflow-hidden">
    <div aria-hidden="true" class="pointer-events-none absolute inset-0">
      <canvas class="block size-full transition-opacity duration-1000" style="opacity:0"></canvas>
    </div>
    <div class="relative m-6 md:m-10">…content…</div>
  </section>
  ```
  Content is readable instantly; the scene fades in over 1s whenever it's ready. No spinner, no layout shift.
- **Inset bezel as pseudo-element** (zero layout impact): `--shadow-inset-border: 0px 0px 0px 1px var(--color-inset-border) inset;` applied via `.after-shadow-inset-border::after { position:absolute; inset:0; z-index:1; pointer-events:none }`.
- **Stacked elevation:** `box-shadow: 0 16px 32px #0000000f, 0 8px 16px #0000000f, 0 0 0 1px #0000000f` — two soft layers + hairline.
- **Theme-recolored graphics via filters:** tiny logo canvas gets `class="size-4 dark:invert dark:hue-rotate-130 dark:brightness-40 dark:saturate-60"` — one asset, two moods, no duplicate art.

### 1.4 cluely.com — "floating objects in a bright porcelain room"

- The only **light-theme** site of the five. Surfaces `#dde2ee / #edeef2 / #f9fafb / #f2f4f9`, ink `#19191d→#2e3038`, accent `#3152f4`, dusty blue `#b2c2dd`. Fonts: Geist (UI), EB Garamond (editorial serif contrast), forma.
- **Ground-contact system for floating devices/cards** (`.pricing-card-shadow-primary`):
  ```css
  background-color:#f2f4f9;
  box-shadow:
    -18px -9px 32.9px #ffffff80,   /* sky light, upper-left */
    -10px -4px 11.3px  #eef1f766,
     10px  4px 15.4px  #8591ac33,   /* cool bounce, right */
     10px 20px 20px    #798cb633,   /* contact shadow below */
     15px 15px 39.3px  #b2c2dd,     /* ambient occlusion floor */
     inset 2px 2px 1.4px #ffffff8f; /* bevel catchlight */
  ```
  Five layers tell one story: a soft object hovering slightly above a lit desk. Directionally consistent (light from upper-left) — that consistency is what sells "dimension."
- **Brushed-metal bezels** (device frames): repeating band gradient `linear-gradient(96.56deg,#667799 21%,#94a0b8 34.6%,#667799 47.6% 69.3%,…)` overlaid with a moving specular sweep `linear-gradient(97.12deg,#fff0 13%,#ffffff80 26.4%,#fff0 39.2%…)`.
- **Hero word-rise entrance:** `@keyframes hero-word-rise { from { transform:translateY(1.25em) } }` — words slide up out of an overflow-hidden line box (offset = full line height so nothing peeks), paired with `hero-fade-up { from {opacity:0; transform:translateY(8px)} }`, both disabled under `prefers-reduced-motion`.
- **Ambient motion language:** infinite marquees `translate(0)→translate(-50%)` running 15–16s; springs `cubic-bezier(.34,1.56,.64,1)` for interactive pops. Hero itself is one centered `video aspect-[1.6] h-[80%]`.

### 1.5 sui.io — "cursor-tracked frosted spotlight over everything"

- Webflow build; white base + Sui blue `#298dff` (+`#5ca9ff` lights), slate text ramp `#222529/#343940/#4b515b/#a1a7b2`.
- **The standout: mouse-following progressive-blur veil** — three stacked fixed layers, each stronger-blurred but masked to only show *outside* a cursor-centered hole:
  ```css
  .gradient-blur { position:absolute; inset:0; z-index:5; pointer-events:none;
                   contain:layout style paint; transform:translateZ(0); }
  .gradient-blur > div { position:absolute; inset:0; backface-visibility:hidden; }
  .gradient-blur > div:nth-of-type(1) { backdrop-filter:blur(2.8px);
    mask: radial-gradient(circle at var(--mouse-x) var(--mouse-y),
          transparent 0%, transparent 14%, black 20%); }
  .gradient-blur > div:nth-of-type(2) { backdrop-filter:blur(4px);
    mask: radial-gradient(circle at var(--mouse-x) var(--mouse-y),
          transparent 0%, transparent 16%, black 38%); }
  .gradient-blur > div:nth-of-type(3) { backdrop-filter:blur(7px);
    mask: radial-gradient(circle at var(--mouse-x) var(--mouse-y),
          transparent 0%, transparent 18%, black 50%); }
  ```
  Two `--mouse-x/--mouse-y` custom props (updated by ~3 lines of JS) drive a depth-of-field spotlight: content near the cursor is crisp, edges melt into frosted fog. Reads as *camera focus* — instant dimensionality.
- **Brand motion tokens:** `--cubic-default: cubic-bezier(0.51, 0, 0.08, 1)` (slow wind-up → fast settle) at `--duration-default:.525s` / `--duration-fast:.375s`; elsewhere easeOutExpo `cubic-bezier(.16,1,.3,1)` appears 14×. One house curve everywhere = coherent physics.
- **Fog fades at section edges:** `mask` gradients `linear-gradient(to bottom, black, transparent)` / `(to top, …)` dissolve scenes instead of hard-cropping them.
- **Poster-first lazy videos:** `<video autoplay loop style="background-image:url(poster.jpg)" data-src="…" data-poster="…">` — poster painted before the video bytes arrive.
- **Scroll-scrubbed canvas sequence:** `.canvas-wrapper > canvas.canvas_sequence` (pre-rendered frames scrubbed by scroll position — film-strip fake-3D).
- **Grain pass:** a dedicated full-bleed `<canvas class="noise absolutetop">` overlays animated noise, unifying video/canvas/DOM into one "material."

---

## 2. Top 5 transferable techniques (no WebGL required)

1. **Cursor-tracked frosted spotlight (Sui)** — copy the 3-layer `.gradient-blur` stack verbatim; feed `--mouse-x/--mouse-y` from one `mousemove` listener. Depth of field in pure CSS.
2. **Five-layer float-in-a-lit-room shadow (Cluely)** — directional white highlights upper-left, blue-gray contact lower-right, inset catchlight. Works on any light theme; flip signs for dark themes with colored spill.
3. **Fade-in scene layer with zero layout shift (Poolside)** — `aria-hidden` + `pointer-events-none` absolute canvas/video at `opacity:0`, transition to 1 over 1s when ready; content never waits on the scene.
4. **oklch spectrum text wipe (Rive)** — `background-clip:text` + stops compressed to 30–70% + `background-size:1600%` + animated `background-position-x`. One accent moment, zero images.
5. **Hairline rim-light borders (Spline/Poolside)** — replace drop-shadows on dark UI with `inset 0 0 0 1px rgba(255,255,255,.06–.10)` (or a `::after` inset-ring utility on light UI). Chrome reads as lit glass, not stickered-on.

Bonus micro-moves: MP4 loops (`autoplay muted loop playsinline`) as 3D stand-ins (Spline/Rive); poster-first `data-poster` videos + scroll-scrubbed canvas sequences + grain-overlay canvas (Sui); word-mask hero rises with reduced-motion kill switch (Cluely); theme-recolor one asset via `dark:` filter utilities (Poolside); house easing token like Sui's `cubic-bezier(.51,0,.08,1)` @ .525s/.375s.

---

## 3. PromptMika MCP dogfooding notes

- **DX:** Clean stateless JSON-RPC 2.0; `tools/list` schemas were accurate (matched recipe's `web_fetch(url, extract, max_bytes)` exactly). No auth, no handshake/session dance needed — plain POST works.
- **Performance:** All 12 calls returned quickly (~1–2s each); no rate-limit friction across 11 sequential fetches.
- **Gotchas:** default `extract` is `text`, not `raw` — always pass `extract:"raw"` for markup analysis. Page responses appear capped around ~180KB regardless of `max_bytes` (spline came back at exactly 180,003 chars) — enough here, but deep single-page scrapes may truncate; external CSS files fetched in full up to the cap.
- **Coverage win:** because raw HTML included full SSR output (rive's 254KB inline CSS, sui's 13 style blocks), `browser_scrape` (Jina) fallback was never needed — budget stayed at 12/13.
