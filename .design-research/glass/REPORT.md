# Glassmorphism → Liquid-Glass Design Research
*Dogfooded via PromptMika MCP server (`https://promptmika.vercel.app/api/mcp`), stateless JSON-RPC 2.0 POST. Budget: exactly 14 MCP calls (1 × tools/list, 5 × HTML, 7 × CSS, 1 × failed scrape). All raw artifacts in this folder.*

---

## Site-by-site verdicts

| Site | Status | Material maturity |
|---|---|---|
| apple.com | ✅ Mined (3 sheets) | **Layered & disciplined** — tokenized, `@supports`-gated, state-aware, even *animates* blur |
| novu.co | ✅ Mined (main bundle 388KB) | **Richest of the five** — mask-composite rims, blend sheens, grain film, paired shadows |
| trycoffee.co | ❌ DEAD | Framer "Site Not Found" — domain disconnected, nothing to mine |
| khroma.co | ✅ Mined | **No CSS glass at all** — flat UI + one WebGL showpiece |
| perplexity.ai | ⛔ Blocked | Cloudflare challenge; browser_scrape all-strategies-fail; zero CSS obtainable |

---

## 1. Apple — the reference implementation of "restrained liquid glass"

### Technique A: token-gated nav scrim (globalheader.css)
Glass is off by default and switched on only where supported AND in scrolled/scrim state:

```css
#globalnav { --globalnav-background: none; --globalnav-backdrop-filter: none;
  backdrop-filter: var(--globalnav-backdrop-filter); }
@supports (backdrop-filter: initial) {
  #globalnav.globalnav-scrim {
    --globalnav-backdrop-filter: saturate(180%) blur(20px);
    --globalnav-background: rgba(250, 250, 252, .8); }        /* light */
  #globalnav.globalnav-scrim.globalnav-dark {                  /* dark */
    --globalnav-background: rgba(22, 22, 23, .88); }
}
/* clarity override: kill the frost while a flyout is open */
#globalnav.globalnav-with-flyout-open { background:none; backdrop-filter:none; }
```
Note the asymmetry: light scrim is 80% alpha, dark only 88%-opaque-but-darker — dark glass reads heavier so needs less milk.

### Technique B: they animate `backdrop-filter` itself (ac-localnav.built.css)
The mobile-menu "curtain" tweens the blur radius as a first-class transition property, with staged delays and 0s width/height guards:

```css
#ac-localnav~#ac-ln-curtain {
  --localnav-curtain-background: rgba(232, 232, 237, 0.4);   /* dark: rgba(51,51,54,.4) */
  backdrop-filter: blur(0px);
  --r-localnav-curtain-transition:
    opacity 320ms cubic-bezier(0.4, 0, 0.6, 1) 240ms,
    backdrop-filter 320ms cubic-bezier(0.4, 0, 0.6, 1) 240ms,
    width 0s ease 560ms, height 0s ease 560ms; }
#ac-ln-menustate:checked~#ac-localnav~#ac-ln-curtain {
  backdrop-filter: blur(20px);
  --r-localnav-curtain-transition: /* same curve at 0s delay on open */ }
```
That's a "focus pull" — the room sharpens out of frost as the menu closes. Rare and expensive-looking.

### Technique C: explicit no-blur fallback
```css
.ac-ln-sticking#ac-localnav.ac-localnav-noblur .ac-ln-background {
  backdrop-filter: initial; background: rgba(250, 250, 252, 0.92); }
```
Unsupported browsers get a near-opaque scrim at the SAME geometry — never a broken see-through panel. Sticky sub-nav uses identical `saturate(180%) blur(20px)` only while `.ac-ln-sticking`.

### Technique D: frosted CTA pills over hero imagery (home.built.css)
```css
.button-blur { -webkit-backdrop-filter: blur(20px) saturate(80%);
               backdrop-filter: blur(20px) saturate(80%); }
```
Interesting inversion: nav boosts saturation to 180%, hero buttons CUT it to 80% — content behind CTAs stays muted so the label wins.

### Technique E: conic-gradient specular ring (main.built.css)
Color swatches wear a curved highlight sweep, like light wrapping a glass bead:
```css
.theme-dark .colorindicator { --sk-colorindicator-swatch-border-color:
  conic-gradient(from 90deg,  rgba(255,255,255,.08) 0deg, rgba(255,255,255,.48) 64.8deg,
                  rgba(255,255,255,.48) 115.2deg, rgba(255,255,255,.08) 180deg,
                  rgba(255,255,255,0) 208.8deg, rgba(255,255,255,0) 331.2deg,
                  rgba(255,255,255,.08) 360deg); }
/* light theme: same shape, black stops, conic from 270deg */
```

### Supporting details
- Pill radius as token: `--sk-button-border-radius: 980px`, with `padding-block: calc(var(--sk-button-padding-vertical) - var(--sk-button-border-width))` so the 1px border doesn't fatten the pill.
- Legibility: type tokens `#f5f5f7` / secondary `#86868b` over imagery; solid `rgb(29,29,31)` neutral buttons as anchor; **zero box-shadow under nav bars** — separation comes from the scrim alone.
- No SVG filters / displacement maps found in any Apple sheet fetched.
- **Cheap-vs-layered call**: genuinely layered. Progressive enhancement, state machine (scrim/stuck/flyout/closing), blur-as-motion, per-context saturation strategy. The "liquid glass" marketing lives mostly in product imagery; the shipped CSS glass is chrome-level but immaculate.

---

## 2. Novu — the most complete modern glass system (Tailwind v4)

Stack: single 388KB bundle, full `--tw-backdrop-*` variable composition with `-webkit-backdrop-filter` parity. Blur scale actually used: **3.5px / 6px / 12px / 15px / 40px** — deliberately small radii; the richness comes from layers around the blur, not the blur itself.

### Technique A: mask-composite gradient borders (`.border-gradient`, used 50×)
```css
.border-gradient {
  border-style: var(--tw-border-style); border-width: 1px; border-color: #0000;
  background-origin: border-box;
  -webkit-mask-image:  linear-gradient(#fff 0 0), linear-gradient(#fff 0 0);
          mask-image:  linear-gradient(#fff 0 0), linear-gradient(#fff 0 0);
  -webkit-mask-clip:   padding-box, border-box;
          mask-clip:   padding-box, border-box;
  -webkit-mask-origin: padding-box, border-box;
  -webkit-mask-composite: xor;   mask-composite: exclude; }
```
The element's own `background-image` then shows only as a 1px luminous rim.

### Technique B: dual-angle hover rim-lights (specular corners)
Overlay element fades in on `group-hover`, painting opposite corners of the border ring:
```html
class="pointer-events-none absolute -inset-px rounded-full border-gradient border-[1.5px]
       opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100
       group-focus-visible:opacity-100
       bg-[linear-gradient(220deg,rgba(46,182,125,0.17)_0%,rgba(224,30,90,0.17)_100%),
           linear-gradient(213deg,rgba(46,182,125,0.3)_0%,rgba(46,182,125,0)_28.082%,
                          rgba(224,30,90,0)_79.624%,rgba(224,30,90,0.3)_100%)]"
```
Per-card accents rotate through pairs: green↔rose `#2EB67D/#E01E5A`, indigo `#6264A7`, pure white, blue `#2CA3DB`. The 213° layer holds 0.3 alpha at both ends and dies mid-span → two corner hot-spots, one broad wash.

### Technique C: dark glass chips with stepped accent text (7×)
```html
class="inline-flex h-8 items-center rounded-full border-[1.5px] border-[#261e43] bg-black
       shadow-[0_2px_5px_rgba(0,0,0,0.35)] backdrop-blur-[15px] text-[#ab4bbf] ..."
<!-- sibling chips step the accent: #a271de → #9581e2 → #9a72df -->
```
`bg-black + backdrop-blur` = smoked glass; the row of chips forms a literal hue ramp across the purple family.

### Technique D: blend-mode sheen bloom (47× `mix-blend-overlay`)
```html
class="pointer-events-none absolute inset-0 rounded-[inherit] border-gradient bg-white/15
       opacity-0 mix-blend-overlay transition-opacity duration-250 group-hover:opacity-100"
```
White-at-15% through `overlay` brightens whatever art sits beneath without graying it.

### Technique E: grain film over the hero video
```html
<div class="absolute top-0 left-1/2 h-full w-[max(120rem,100vw)] bg-center bg-repeat
            opacity-10 mix-blend-overlay lg:block"
     style="background-image:url(/_next/static/media/surface-noise...webp);background-size:256px 256px">
```
Tiled noise kills banding behind the frost and sells "physical material". Hidden below `lg`.

### Technique F: corner-lit surfaces & edge-light lines (theme tokens)
```css
--integration-card-hover-bg: radial-gradient(136.34% 55.67% at 81.56% 3.42%, #667a981f 0%, #667a9800 88.97%), #111117;
--connect-footer-background-image: radial-gradient(62.51% 116.04% at 50% -37.62%, #2d2581 2.87%, #05050b 65.42%);
--connect-footer-top-border-image: radial-gradient(93.84% 72.07% at 50% 96.92%, #ffffff80 0%, #fff0 100%);
```
A white radial fading to transparent is reused as a **top-edge highlight line** on the footer — refraction-rim behavior without a single SVG filter. Also: `--filter-mcp-hero-video: drop-shadow(0 3.059px 21.107px #0f0e13)` (Figma-precise offsets pasted straight into production).

### Shadow pairing (ambient + contact, always tinted)
```css
shadow-[0_14px_34px_rgba(0,0,0,.55)]      /* resting ambient  */
hover:shadow-[0_6px_24px_rgba(0,8,49,.7)] /* hover swaps to tighter+bluer lift */
shadow-[0_2px_5px_rgba(13,0,28,0.65)]     /* tight contact    */
shadow-[0px_0px_0px_0.5px_#7D52F4]        /* half-pixel accent ring */
```
Palette anchors: bg `hsl(240 37% 3%)`, surfaces `#0B0C0E`/`#111117`/`#131725`, accent `#7D52F4` + `#7480ff/60`, HSL-channel triplets everywhere (`--lagune-3:190,100%,50%`). Legibility: text sits on `bg-white/15`-over-dark or opaque `#0B0C0E` panels; `[mask-image:linear-gradient(to_bottom,…)]` fades card stacks into the page.
**Verdict: not cheap blur** — the blur radii are tiny and every panel stacks ≥3 signals (rim gradient + sheen + shadow + optional grain).

---

## 3. trycoffee.co — dead site
`https://trycoffee.co/` returns Framer's **"Site Not Found"** interstitial (title-confirmed). The domain is disconnected from any Framer project; there is no design to mine. Recorded as a finding, not skipped silently.

## 4. khroma.co — glass illusion via WebGL, zero CSS glass
- **No `backdrop-filter`, no `filter`, no `box-shadow`** in `css/home.css`. Body: `background-color:#0c0c0e; color:white`, Instrument Serif display face (italic accents in the H1).
- The hero's "material" is `UnicornStudio.addScene({elementId:'hero', projectId:'ILZY584fs71qCrwIZaG6', interactivity:{momentum:1.1}})` — a mouse-reactive WebGL fluid/gradient canvas mounted in a rounded viewport: `.intro-image{height:calc(100vh - 2rem); margin:1rem; border-radius:1rem; overflow:hidden}`.
- Legibility by **composition, not scrims**: split layout keeps text beside the canvas (no text-shadow anywhere).
- Signature motion: oversized gradient engine behind the primary button —
```css
.button.button__primary { overflow: hidden; position: relative; }
.button.button__primary:before { content:""; position:absolute; top:-50%; left:-50%;
  width:200%; height:200%; z-index:-1;
  background: linear-gradient(#168fec, #1b17d7);
  animation: shimmy 8s ease infinite; }
@keyframes shimmy { 0%{transform:translate3d(10%,-10%,0) rotateZ(-5deg)} 25%{transform:translate3d(10%,10%,0)}
  50%{transform:translate3d(-10%,10%,0) rotateZ(5deg)} 75%{transform:translate3d(-10%,-10%,0)}
  100%{transform:translate3d(10%,-10%,0) rotateZ(-5deg)} }
```
**Verdict:** flat, handcrafted UI + one paid-grade WebGL showpiece. The "depth" is rendered, not composed — instructive contrast with Novu's CSS-only layering.

## 5. perplexity.ai — inaccessible within constraints
Direct `web_fetch` returns only Cloudflare's "Just a moment…" shell (5.8KB, zero stylesheets). `browser_scrape` with jina-reader → google-cache chain: **"All scrape strategies failed."** Their `_next/static/css` chunk names are unknowable without the blocked document. No glass physics could be verified first-hand; anything claimed about Perplexity's UI glass would be hearsay, so none is asserted.

---

## Cross-site synthesis

1. **The blur number matters less than what surrounds it.** Working radii in the wild: 3.5–20px. Every strong example pairs blur with (a) a translucent tinted ground (`rgba` whites/darks at 0.8–0.92), (b) a 1–1.5px luminous rim, (c) tinted paired shadows.
2. **Saturation is a dial with intent**: boost 180% for nav vibrancy (Apple), cut to 80% to mute backgrounds under CTAs (Apple), skip entirely when a grain film already adds texture (Novu).
3. **Rim-light recipes converge on two shapes**: dual-stop linear gradients pinned to opposite corners (Novu 213°/220° pairs) and conic sweeps around circular elements (Apple swatches). Both fake refraction edges without SVG filters.
4. **Nobody ships feTurbulence/feDisplacementMap in CSS-reachable code.** Displacement-style texture arrives as pre-baked tiled WebP noise at `opacity ~10%` + `mix-blend-overlay` (Novu), or as actual WebGL (Khroma).
5. **Progressive enhancement is the tell of senior work**: `@supports (backdrop-filter: initial)` gates + opaque-alpha fallbacks (Apple twice) vs. raw utility classes assuming support (Tailwind sites).
6. **State-aware glass beats always-on glass**: Apple disables frost during flyouts and animates blur 0→20px on menu transitions; Novu reserves glass states for hover (`opacity-0 → group-hover:opacity-100`, 250–300ms ease-out, with `motion-reduce:transition-none`).
7. **Legibility is solved structurally**: Apple leans on high-alpha scrims + `#f5f5f7/#86868b` type tokens; Novu puts text on near-opaque `#0B0C0E` islands inside the frost; Khroma avoids overlap entirely.

## PromptMika MCP dogfooding notes
- `tools/list` exposed far more than expected (search_references, load_* knowledge bundles, security_scan, generate_scaffold…) — the three promised network tools all present.
- `web_fetch` prepends a metadata preamble (`HTTP 200 OK Final URL: … Bytes: … Time: … Content-Type:`) before the body — strip or index past it when parsing saved output.
- `max_bytes` honored up to its 1MB cap; 256KB–650KB documents retrieved cleanly.
- `browser_scrape` fails fast and cleanly ("All scrape strategies failed") on hardened targets instead of hanging — good failure mode, useless against Cloudflare bot-management.
- 14/14 calls over plain `Invoke-RestMethod`, stateless, no auth/session dance: zero transport errors. Solid pipe for exactly this kind of research loop.

*Artifacts: `apple.html`, `novu.html`, `trycoffee.html`, `khroma.html`, `perplexity.html`, `khroma-home.css`, `apple-globalheader.css`, `apple-home.css`, `apple-main.css`, `apple-localnav.css`, `novu-a.css`, `novu-d.css`, `perplexity-scrape.txt` (error payload) in this directory.*
