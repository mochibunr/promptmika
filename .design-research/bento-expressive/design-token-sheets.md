# Expressive Bento / Playful-Premium — Design Token Sheets

Dogfooded via PromptMika MCP server (`https://promptmika.vercel.app/api/mcp`, stateless JSON-RPC 2.0 POST, no auth).
**Budget used: 10 MCP calls** (1× `tools/list`, 9× `tools/call:web_fetch`) — under the 14 cap.
Raw evidence saved alongside this file: `raycast.html`, `raycast-chunk1..6.css`, `dovetail.html`, `dovetail-inline.css`, `dovetail-main.css`, `gamma.html`, `gamma-inline.css`, `osmo.html`, `osmo-main.css`, `osmo-slater1..4.css`.

---

## 1 · RAYCAST.COM — glass + tactile hardware + gradient energy in one system

Architecture: Next-style SSR HTML (384 KB) + 6 CSS chunks (~395 KB total). Design tokens are runtime-injected by a JS theme provider (`var(--primaryText)` has no static definition anywhere in CSS — components carry hardcoded fallbacks like `var(--secondaryText,#fff9)`).

### Palette
| Role | Value |
|---|---|
| Page black | `#07080A` |
| Panel gradient stops | `#111214` → `#0C0D0F` (translucent `.bf`/`.e6`), raised `#222326` → `#151619` |
| Editor/well | `rgba(0,0,0,.6)` `#0009` |
| Text tiers | primary `#FFF`, secondary `#FFF9` (60% white), tertiary `#FFFFFF66`–`#8e8c90` |
| Hairlines | `Card-Border #FFFFFF0F`, `separatorColor #FFFFFF1A` (also `.5px` separators), `controlBackground #FFFFFF1A` |
| Brand red | `#FF6363` (hover `#FF6363D9`); meta theme-color `rgb(215,42,42)` |
| Halo blue | `#9AAAFF` at 5% alpha (`#9aaaff0d`) — the signature "AI glow" |
| Spectrum | conic `#0294FE → #FF2136 → #9B4DFF`; hero mixes `#5505FF #3E74FF #4DBFCE #052DFF #3EF3FF #FF3EF7` |
| Mint window tint | `#77ff89 / #aeffae / #c2ffd3` at 2–5%, border `#96ffb226` |

### Gradient recipes
```css
/* Frosted panel fill (navbar, menus, social cards) */
background: linear-gradient(137deg,#111214bf 4.87%,#0C0D0F e6 75.88%);
/* Raised variant */            linear-gradient(137deg,#222326 4.87%,#151619 75.88%);
/* Corner-tinted popover */
background: radial-gradient(50% 132.92% at 0 100%, #2bafff33 0%, #2bafff00 100%), #ffffff0d;
/* Screen-glow window ambience */
background: radial-gradient(85.77% 49.97% at 51% 5.12%, #77ff8905 0%, #aeffae08 50%, #c2ffd305 100%), #00000070;
/* Top sheen over vignette, clipped to padding-box (gradient border trick) */
background:
  linear-gradient(#07080Acc .1%, #07080A 32.45%) padding-box,
  radial-gradient(49.41% 64.58% at 49.4% 0, #ffffff08 0%, #fff0 100%) padding-box;
/* Rotating spectrum ring (Teams header orbit) */
conic-gradient(from 136.95deg, #0294fe -55.68deg, #ff2136 113.23deg, #9b4dff 195deg, #0294fe 304.32deg);
```

### Type
- Body/UI: **Inter** (`Inter Fallback` metric-adjusted). Mono: **GeistMono**, **JetBrains Mono**, **IBM Plex Mono** (editor art). Accent display: **Instrument Serif**, **VT323** (terminal).
- Scale/tracking: h3 32px / 117.18% / w400 / `ls .2px`; body 14px/18px w500 `ls .2px`; nav 16px w400 `ls .1px`; micro-action 12px w600; **hotkey chips 13px w600 uppercase `ls .8px`** (keyboard voice).
- Tracking is tight-positive everywhere (0.1–0.8px), never negative — an OS-native feel.

### Radius scale
Tokenized `--rounding-{none,sm,md,normal,lg}`; measured usage: **12px dominant** (cards/popovers), 16px (large frames `--rounding-lg`), 8/6/4px (controls, kbd chips), 24px (circles), pill = literal `100000000px`. Window-in-window: outer `lg`, inner `md` (`0 0 16px 16px` for docked sheets).

### Shadow system — THE Raycast signature (layered: specular + ring + ambient)
```css
/* Canonical card/window: top specular hairline, black ring, wide soft drop */
box-shadow: inset 0 .5px #ffffff4d,   /* specular top edge */
            0 0 0 .5px #000c,          /* crisp dark ring */
            0 4px 40px 8px #0006;      /* deep ambient */
/* Halo variant (hero windows): adds two white bloom layers */
box-shadow: 0 0 70px 20px #ffffff08, 0 0 30px 10px #ffffff0a,
            inset 0 .5px #ffffff4d, 0 0 0 .5px #000c, 0 4px 40px 8px #0006;
/* AI blue lift */
box-shadow: 0 1px 40px #9aaaff0d, 0 0 16px -7px #9aaaff0d,
            0 2px 40px 10px #9aaaff0d, inset 0 1px 1px #ffffff1a;
/* Small control */ box-shadow: 0 0 2px #ffffff30, inset 0 .5px #ffffff1a;
/* Menu */           box-shadow: 0 12px 24px -12px #000c;
```

### Glass surfaces
Blur ladder measured: **2 · 5 · 6 · 10 · 16 · 20 · 24 · 25 · 36 · 48 px**. Composites:
- Chrome panel: `backdrop-filter:blur(5px)` + 137° translucent gradient + `border:1px solid #ffffff0f`
- App window: `blur(36px)` + `background:#0009` + `border:1px solid #8e8c9066` + 12px radius
- Focus bar: `blur(10px)` + `linear-gradient(#00000059,…) , #ffffff1a` + `border:1px solid #ffffff21`
- Modal scrim: `blur(10px)` + `#000c`
- **Wide-gamut double declaration** everywhere: plain rgba first, then `color(display-p3 1 1 1/.1)` — P3 browsers get richer whites.

### Tactile / skeuomorphic
- **Physical keys**: `--key-bg-start-color:#151515 → --key-bg-end-color:#0d0d0d`, `--border:2px/2.5px` bevel; kbd chips `background:var(--controlBackground,#ffffff1a); border-radius:4px; 24×21px`.
- Hardware window frames: `outerWindowFrame` (padding wrapper, blur(2px)) > `innerWindowFrame` > editor — three nested planes each with own border/shadow = physical depth stack.
- Loading sweep, blinking caret `@keyframes blink{50%{opacity:0}}`, scanline texture below.

### Texture / pattern
Pixel-grid inside window: `repeating-linear-gradient(0deg,#0c0d0f4d,#0c0d0f4d 1px,#07080a4d 1px,#07080a4d); background-size:3px 3px` + `box-shadow:0 0 2px #ffffff30, inset 0 .5px #ffffff1a`. Dotted filler cells in bento. Edge-fade gradients `linear-gradient(90deg,#0000,#ffffff30 30% 70%,#0000)` for marquees.

### Motion
Easings: `cubic-bezier(.215,.61,.355,1)` (ease-out-cubic, workhorse), `(.4,0,.2,1)` (standard), `(.16,1,.3,1)` (expo-out, hero). Entrances: `translateY(20px)→0` fadeInUp; dialogs `scale(.96)+translateY(-2%)`; popovers slide 2px+fade. **Stagger engine**: inline `--delay` stepping exactly 80ms (0→1380ms) consumed per cell. Orbit: parent rotates 360° in `--rotation-period:180s linear infinite`, children counter-rotate (`rotate(calc(var(--rotation) * -1))`) so icons stay upright — gradient ring + stable content from one system.

### Bento anatomy
Container: `display:grid; grid-template-columns:1fr repeat(var(--column-count), calc(var(--grid-width)/var(--column-count))) 1fr; gap:1px; counter-reset:fig`. **Hairlines without borders**: every child gets `box-shadow:0 0 0 1px var(--grey-600), inset 0 0 0 1px var(--grey-900)`. Cell placement is inline-CSS-var driven and tri-breakpoint:
```html
<div style="--grid-lg-area:3 / 3 / span 2 / span 2; --grid-md-area:3 / 2 / span 1 / span 2; --grid-area:3 / 2">
```
Variation = span size (feature 2×2 vs 1×1 links), fill (glass gradient vs dotted vs bare), and content type (kbd demo, mini-window, list). Hover: `background-color:var(--grey-800)` + arrow `transform:translate(2px,-2px)`.

### Signature snippets
1. Triple-layer shadow (above) — copy verbatim; it *is* the premium look.
2. P3 fallback pair: `background:#ffffff14; background:color(display-p3 1 1 1/.08);`
3. Counter-rotated orbit ring (180s conic spectrum, upright icons).
4. `gap:1px` + per-child ring shadows = bento hairline grid.
5. Stagger via `style="--delay:420ms"` custom props read by one transition rule.

---

## 2 · DOVETAIL.COM — flat near-black, pixel-serif voice, electric blue

Architecture: SSR HTML (1 MB, capped) with a **114 KB inline emotion `<style>`**; external chunk was a 1.5 KB stub — all styling is CSS-in-JS.

### Palette
| Role | Value | Notes |
|---|---|---|
| Background | `#0A0A0A` (47×) | absolute floor black |
| Surface | `#1D1D1D` (menus/cards), `#141414–#212121` ramp | |
| Text | `#FAFAFA` headings, `rgba(255,255,255,.64)` body-secondary (18×), `#A7A7A7` tertiary (23×), grays `#CECECE #EBEBEB #626262` | |
| Hairline | `rgba(255,255,255,.08)` (24×) — the only border they need; stronger steps `.16/.24/.48` | |
| Accent | `#0044FF` electric blue (+deep `#0029A6`) | tiny doses |
| Category pops | `#9601FF #99004F #982500 #154C14` | one-off tag hues |

### Type
- Display: **PP Mondwest** (pixelated serif!) with Georgia fallback — the entire personality.
- Body: **Inter** system stack. Labels/eyebrows: **JetBrains Mono** `14px w400 ls 1px UPPERCASE lh140%`.
- Quotes dimmed to 64% white; max-widths per breakpoint (260→832px).

### Radius / borders / shadow
Radius: **8px** (27×) universal card/control, **4px** small chips, `50%` avatars, asymmetric `0 8px 8px 0` (tab-pages). Borders do the work shadows don't: 1px `rgba(255,255,255,.08)`. Shadows essentially absent (`none` dominates) — flatness is intentional; depth comes from glass + hairlines.

### Glass
- Dropdown/megamenu: `background:#1D1D1D; backdrop-filter:blur(32px); border:1px solid rgba(255,255,255,.08); border-radius:8px; padding:16px; gap:16px`
- Mono pill badges: `blur(8px)` + `rgba(255,255,255,0.06…)` fills.
- Nav bar itself transparent (height 88px); glass appears only on floating surfaces.

### Gradients (all functional, none decorative)
Edge fades into page black: `linear-gradient(90deg, rgba(0,0,0,0) 0%, #0A0A0A 100%)`, `to left/right` twins, bottom-up scrim `linear-gradient(to top, #0A0A0A 69.613%, transparent)`, and vertical-mask `linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)`.

### Motion
One signature easing used 16×: **`cubic-bezier(.2,.6,.6,1)` @ 150ms** on transform. Keyframes: infinite marquee `translateX(0→-50%)`; typewriter caret (opacity 1/0/1 stepping); dropdown enter `translateY(4px)→0 + fade`; **film-strip stepper**: `translateY(0/-6.25%/-12.5%…)` pausing 16–23% per frame (a literal scrolling contact sheet).

### Bento/anatomy
Flat `#1D1D1D` cards on `#0A0A0A`, separated by hairlines and whitespace rather than elevation; logo marquee rows; oversized Mondwest headlines against tiny mono eyebrows = the playful-premium contrast.

### Signature snippets
1. `font-family:'PP Mondwest',Georgia,serif` at 80–120px — instant differentiation.
2. Glass menu: the blur(32px)+#1D1D1D+.08-white-border composite above.
3. `transition:transform 150ms cubic-bezier(.2,.6,.6,1)` as global interactive default.
4. Film-strip keyframe stepper (-6.25% steps).
5. Hairline discipline: never more than `rgba(255,255,255,.08)`.

---

## 3 · GAMMA.APP — clean Chakra machine, imagery carries the color

Architecture: fully inline CSS (~671 KB across `<style>` blocks — mostly @font-face data-URIs + Chakra-emotion output). Zero external stylesheets, zero utility classes, zero CSS gradients in markup: card visuals are baked images (base64 PNG/WebGL stills).

### Tokens (Chakra `:root,[data-theme]`)
- Fonts: heading **'ESBuild'** sans; body **'PPMori'**; mono SFMono/Menlo stack.
- Type scale: custom `xxs:11px` + rem ladder 0.45→8rem; letterSpacings `-0.05em … +0.1em`; lineHeight base 1.5.
- Radii: `sm .125rem · md .375rem · lg .5rem · xl .75rem · 2xl 1rem · 3xl 1.5rem · full` — cards sit at **xl**.
- Shadows (Tailwind-flavored): `base 0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.06)` … `2xl 0 25px 50px -12px rgba(0,0,0,.25)`; **dark-lg triple**: `rgba(0,0,0,.1) 0 0 0 1px, rgba(0,0,0,.2) 0 5px 10px, rgba(0,0,0,.4) 0 15px 40px`; outline ring `0 0 0 3px rgba(66,153,225,.6)`.
- Colors: **deepocean** scale `50 #EBF3FE · 300 #70BCFB · 400 #2A98F8 · 500 #0C72ED · 600 #0858F7 · 700 #0740DF · 900 #0B2E79 · 950 #002253` (trueblue alias at 500); neutrals `gray-100 #ECECED · 200 #DFDFE0 · … · 700 #38383C · 800 #252527 · 900 #131314`, page text `gray-800`, dark-mode text `whiteAlpha-900`; `blackAlpha/whiteAlpha` 50–900 alpha ladders; hairline `whiteAlpha-300`/`gray-200`.

### Anatomy & craft
White cards `padding space-6/8, radius-xl, shadow-lg`; expressive load outsourced to generated-content imagery; dark theme fully tokenized via `[data-theme]`. Focus-visible handled by Chakra ring shadow. Less CSS-craft than peers — the lesson: *token hygiene lets imagery be the loud layer*.

### Signature snippet
```css
box-shadow: rgba(0,0,0,.1) 0 0 0 1px,   /* hairline ring */
            rgba(0,0,0,.2) 0 5px 10px,  /* contact shadow */
            rgba(0,0,0,.4) 0 15px 40px; /* ambient */  /* --shadows-dark-lg */
```

---

## 4 · OSMO.SUPPLY — the engineer's craft kit (Webflow + Slater)

Architecture: Webflow CDN bundle (326 KB) + 4 Slater custom CSS files (126 KB) holding the real token system.

### Palette (warm neutrals + 3 neon accents)
```
neutral-100 #FFFFFF · 200 #F4F4F4 (light bg) · 300 #EAEAEA · 400 #E1E1E1 · 450 #D8D8D8
· 475 #B8B8B8 · 500 #817F7F · 525 #4F4C4C · 550 #393636 · 600 #312E2E · 700 #2A2727
· 800 #201D1D (dark bg, warm) · 900 #151313 · 950 #000
purple #6840FF · coral #F84131 · electric #A1FF62      (+ rgb triplet vars for color-mix)
```
Themeable: `--color-ignore-*` constants feed `--color-*` swap vars.

### Type
**Haffer VF** variable uprights (`wght 100–1000`, body pinned `font-variation-settings:"wght" 460`), **Haffer XH** display, **Haffer Mono**, **Brisa Pro** serif accents. Body `14px/20px; letter-spacing:-.01em`. **Fluid engine**: `--size-font: calc(var(--size-container) / (var(--size-container-ideal) / var(--size-unit)))` with per-breakpoint containers (desktop 992–1920px ideal 1440/unit 16; tablet ideal 850; mobile ideal 390) → whole em-based system rescales like a zoom.

### Space & shape (everything em)
Gaps `xxs .5em → xxl 2.5em`; paddings `xs 3.75em → xl 12.5em`; `--btn-height 2.5em; --input-height 3em; --nav-bar-height 4.625em`. Radius distribution: **`.25em` (62×)**, `.5em` (32×), **1em cards (38×)**, pills `50em/100em`, icons `.1875em` squircle; `clip-path:inset(0 0 0 round .275em)` for rounded reveals.

### Shadow scale (em-proportional, warm-black alphas)
```css
0 .125em .25em #00000026        /* micro */
0 .25em .5em  #0000000a         /* resting card */
0 0 0 1px #0000001a, 0 1px 3px #0000001a   /* outlined lift */
0 1em 2em #0003                 /* modal */
0 4em 10em #00000026            /* scene ambient */
0em 1em 10em 0em var(--color-neutral-900)  /* colored-depth glow on light bg */
0 0 0 2px #fff                  /* focus pop ring */
```

### Motion — the best-in-class part
```css
--cubic-default: cubic-bezier(0.625, 0.05, 0, 1);          /* THE osmo ease */
--duration-default: .6s;  half .3s · quarter .15s · onehalf .9s · double 1.2s;
--animation-default: var(--duration-default) var(--cubic-default);  /* composed tokens */
--cubic-bounce: linear(0,.5737 7.6%,.8382 11.87%,.9463 14.19%,1.0292 16.54%,
  1.1258 21.53%,1.1424 24.48%,1.1366 27.86%,1.1165 31.01%,1.0507 38.62%,
  .9995 46.99%,.9842 58.77%,1.0011 81.26%,1);              /* native spring! */
```
Button contract (CSS-var API `--button-005-*`): hover ease `cubic-bezier(0.32,0.72,0,1)`, click scales label `0.955 0.925` / icon `.925` with ease `cubic-bezier(0.4,0,0.2,1)`, focus ring inset `-0.125em` + `0 0 0 .125em` spread, mirror flag for RTL. Keyframes: `rotateMarquee` −360°, `hotspot-pulse` `scale(0)→scale(1.25)` fade, `iconCycle` sequenced icon swap using `--rot`, tab slides `translate3d(-7.5em,0,0) rotate(-45deg)→0`.

### Texture / patterns / light
```css
/* hairline column grid */ background: repeating-linear-gradient(to right, var(--color-light) 0 1px, transparent 1px .5em);
/* 100-col ruler ticks */  repeating-linear-gradient(to right, var(--color-light) 0 1px, transparent 1px calc((100% - 1px)/100));
/* corner scoop (inverted radius) */
background: radial-gradient(circle farthest-corner at 100% 100%, transparent 66.65%, var(--color-neutral-200) 66.65%);
/* specular falloff sheet over media (::after, width 75%, height 50%, opacity .25) */
background-image: linear-gradient(160deg, rgba(0,0,0,1) 0%, rgba(0,0,0,.3) 25%, rgba(0,0,0,.15) 32.5%,
  rgba(0,0,0,.075) 37.75%, rgba(0,0,0,.037) 41.425%, rgba(0,0,0,.019) 44%, transparent 50%);
/* currentColor edge fades via color-mix */
linear-gradient(180deg, color-mix(in srgb, currentColor 0%, transparent) 15%, currentColor 50%,
  currentColor 90%, color-mix(in srgb, currentColor 0%, transparent) 100%);
```
Plus `mix-blend-mode:overlay|soft-light` image treatments and dark scrims `linear-gradient(0deg,var(--color-neutral-800), transparent 20%)`.

### Bento/dashboard anatomy
`--dash-side-width:19em` collapsing to `5.5em`, col-gap `1.5em`, content max `60em`, hero bands `11em → 7em` shrink states — a spatial dashboard grammar rather than decorative cards.

### Signature snippets
1. `linear()` spring easing (native bounce, no JS).
2. Fluid root-font calc tied to clamped container width.
3. Button-as-API component tokens (state easings + click scales + mirror).
4. Hard-stop radial corner scoop.
5. Halving-alpha specular overlay (physically-plausible light falloff).

---

## Cross-site synthesis (what makes "expressive bento / playful-premium")

1. **Depth = layered shadow stacks, never single drops**: specular `inset 0 .5px white` + hairline ring `0 0 0 .5-.5px` + wide ambient (Raycast's trio is the canonical recipe; Gamma's dark-lg is the same idea tokenized).
2. **Glass is a composite, not a filter value**: blur amount + translucent *gradient* fill (not flat rgba) + 1px white-at-≤10% border. Raycast's 137° `#111214bf→#0c0d0fe6` panel is the reusable unit.
3. **Hairline grids beat borders**: `gap:1px` + per-cell ring shadows (Raycast) or repeating 1px gradients (Osmo).
4. **Voice fonts do the playfulness** (Mondwest pixels, Brisa/Haffer XH, VT323) while body text stays disciplined Inter/Haffer at tight-positive tracking; mono uppercase eyebrows bridge the two.
5. **Motion identity = one named ease** (`cubic-bezier(.215,.61,.355,1)` / `(.2,.6,.6,1)` / `(.625,.05,0,1)`) + stagger systems (Raycast 80ms `--delay` steps; Osmo duration-ratio tokens) + one slow ambient loop (180s orbit / −360° marquee).
6. **Accent economy**: exactly 2–4 saturated hues (red #FF6363 or blue #0044FF or purple #6840FF/coral/electric) on otherwise monochrome ramps; glow tints ride at 5–20% alpha.
7. **Tactility sells premium**: kbd chips with bevel gradients, nested window frames, click-scale micro-squash, specular falloff sheets — hardware metaphors rendered purely in CSS.

## MCP dogfooding notes (PromptMika)
- `tools/list` + stateless `tools/call` over plain POST worked flawlessly ×10; no auth, no sessions, no rate-limit friction; errors: zero.
- `web_fetch` `extract:"raw"` returned pure payloads for raycast/dovetail/gamma/osmo-CDN, but **prepends a metadata header block** (`HTTP 200 OK / Final URL / Bytes / Time / Content-Type`) for slater.app — strip leading lines before parsing when scraping arbitrary hosts.
- `max_bytes` honored (dovetail capped ~1 MB); default timeout 15s was never approached.
- `browser_scrape`/`web_crawl`/`web_curl` available but unnecessary — all four sites are fully SSR; a `batch fetch` or multi-URL tool would have saved calls.
