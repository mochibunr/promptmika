# Tactile / Skeuomorphic Hardware-Feel UI — Deep-Mine Token Sheets (7 sites)

Dogfooding run of the **PromptMika MCP server** (`https://promptmika.vercel.app/api/mcp`, stateless JSON-RPC 2.0 over HTTP POST).
Method: `tools/list` once → raw HTML per site (`web_fetch`, `extract:"raw"`, `max_bytes:900000`) → local `<link>`/`<style>` parsing → biggest stylesheet per site fetched via MCP → regex deep-mining of every `box-shadow`, `border-radius`, gradient, easing, font, texture, and state rule.

**MCP call ledger: 14 of 16 budget** — 1× tools/list, 7× HTML, 6× CSS/JS assets. Plain HTTP HEAD/size probes were done locally (not MCP) purely to pick each site's *biggest* stylesheet.

| Site | Platform | CSS source mined | Size |
|---|---|---|---|
| evervault.com | Framer | inline `<style>` blocks (26) | ~297 KB |
| todesktop.com | Custom + Tailwind | inline blocks (45) | ~124 KB |
| firecrawl.dev | Next.js + Tailwind | `chunks/2f2cdsn-69kpb.css` (largest of 8) + inline | 263 KB |
| julius.ai | Next.js + Tailwind/shadcn | `956daae570f9b97e.css` (largest of 3) | 295 KB |
| walkie-talkie.io | React SPA | `bundle.js` (no CSS extractable — see sheet) | 810 KB |
| whalesync.com | Webflow + token theme | `whalesync-2024-shared-min.css` + `-index-opt-min.css` | 31 + 103 KB |
| navattic.com | Next.js + Tailwind v4/shadcn | `086cb788f01245d8.css` | 319 KB |

---

## 1. evervault.com — "precision instrument" glass on near-black

### Palette
| Role | Hex |
|---|---|
| Page void | `#010314` (near-black navy) |
| Panel greys (machined slate) | `#0b0d1c` `#141626` `#1a1c2c` `#252738` `#32354d` `#2b2e44` |
| Text | `#ffffffe6` `#fff9` `#b1b3c3` `#60616c` |
| Accent violet | `#8e64ff`, focus ring `rgb(190,167,255)` |
| Secondary blue-violet | `#6633ee` (written `#63e`) |
| Link blue | `#0099ff` (`#09f`) |

### Type
- **Fonts:** Inter (body), **Roobert Medium** (display), code stack rotates **IBM Plex Mono / Geist Mono / Fragment Mono / Roboto Mono**, plus Geologica & Montserrat loaded.
- **Scale:** Framer root-multiplier rhythm: `.8 · 1 · 1.2 · 1.3 · 1.45 · 1.85 · 2 · 3.5rem`.
- **Tracking:** overwhelmingly `-.02em` (26×), `-.01em`, `0`.

### Radius scale
`3 · 4 · 6 · 8 · 9px` (chips/inputs) → `13 · 16 · 18 · 20px` (cards) → `56px` (hero capsules) → `500px` full-round.

### Shadow recipes
- **Left-lit triple ambient** (light source bottom-LEFT — unusual):
  ```css
  box-shadow: -3.15px 4.5px 18.6px #00000040,
              -.9px  .9px 4px    #0000002b,
              -.9px 1.8px 34.5px #0000004d;
  ```
  (scales up to `-7px 10px 18.6px …` for larger plates)
- **7-layer exponential drop** (offsets ×~1.8, blur 3.5→177px, spread −0.68→−4.75px, all tinted `#040514`):
  ```css
  box-shadow:
    .35px .67px  3.47px -.68px #04051478,  .86px 1.63px  8.49px -1.36px #04051473,
   1.64px 3.09px 16.09px -2.04px #0405146e, 2.86px 5.40px 28.09px -2.71px #04051466,
   4.97px 9.39px 48.90px -3.39px #04051459, 9.11px 17.21px 89.56px -4.07px #04051440,
      18px   34px 176.97px -4.75px #04051408;
  ```
- **Inset focus ring pair** (rest → engaged):
  `inset 0 0 0 1px rgba(190,167,255,.12)` → `inset 0 0 0 2px rgb(190,167,255)`.

### States
- Form `:focus-within`: the 2px violet inset ring appears; all props transition `.15s cubic-bezier(.44,0,.56,1)`.
- Submit `:hover`: bg → `rgba(190,167,255,.25)` (violet wash, no shadow change).
- Soft ambient floats under cards: `0 27px 40px #01031433` family.

### Textures / materials
No raster noise. Material = **smoked glass**: `backdrop-filter: blur(3–5px)` over `#010314cc` panels.
Corner **radial glows**: `radial-gradient(115% 55% at 107% -3.2%, #8e64ff 0%, #6633ee 25%, transparent 62.6%)` mirrored at opposite corner; horizontal slate fades `linear-gradient(270deg,#32354d,transparent)`.

### Depth system
3 planes: gradient-wash void → glass panels (blur) → floating chips with the 7-layer shadow. Layering reads as *glass slabs suspended in fog*.

### Motion
One easing everywhere: `cubic-bezier(.44,0,.56,1)`, 150ms micro-moves. Keyframe `liveGradientPulse` pulses `scale(var(--hover-mult)) ↔ scale(calc(var(--loop-scale)*var(--hover-mult)))` — breathing hardware idle.

### Signature techniques
```css
/* Violet inset-ring engagement */
.field:focus-within { box-shadow: inset 0 0 0 2px rgb(190 167 255); }
.field { box-shadow: inset 0 0 0 1px rgba(190,167,255,.12);
         transition: all .15s cubic-bezier(.44,0,.56,1); }

/* Smoked-glass slab */
.slab { background:#010314cc; backdrop-filter:blur(5px);
        border-radius:18px; box-shadow:-7px 10px 18.6px #00000040,
        -2px 2px 4px #0000002b, -2px 4px 34.5px #0000004d; }

/* Corner plasma glow */
.glow { background:radial-gradient(220% 25% at 107% -3.2%,#fff 0%,#6633ee 25%,transparent 62.6%); }
```

---

## 2. www.todesktop.com — THE machined-aluminum site (best-in-class hardware CSS)

### Palette
| Role | Values |
|---|---|
| Aluminum skins | `#efefef #eDEDED #f2f2f2 #d9d9d9 #d6d6d6 #b0b2b3 #d6d6d6` |
| Ink (violet-black) | `#080114 #090114 #030823 #0f071d #13023a #12072b` |
| Pure greys | `#141414 (loud) #656565 (muted) #A4A4A4 (ghost) #37373711/1F/07 (bg tints)` |
| Primary | `#0036ff` (declared twice: sRGB + `color(display-p3 .0118 .2067 .9861)`) |
| Accents | amber `#fba61e`, blue `#1f6af2` (glow tints) |
| Highlight alphas | `#ffffff0a → #ffffff52` (top lights); shadow alphas `#00000005 → #00000014` |

### Type
- **Fonts:** **Aeonik Pro** (display), Inter 400/500/600 (UI, self-hosted `/electron/fonts/inter/*.woff2`), **Geist Mono** 400/500 (code).
- **Scale:** UI core 12/13/14px; body 16/18px; display 36/46/48/64/74px, `2.25rem/3rem`.
- **Tracking:** negative-pixel discipline: `-.10 … -.24 … -.72 … -1.11px`; lone positive `+.33px` on tiny caps.

### Radius scale & BEZEL treatments
Pills `999px`; buttons `7.25/8px`; cards `10–32px`; **machined step-down corners** (the money detail):
```
outer shell   border-radius: 5px 5px 2px 2px;
inner face (::before, inset 1px)   border-radius: 4px 4px 1px 1px;
lid strip                          border-radius: 3px 3px 0 0;
```
Two nested rounded rectangles 1px apart = stamped-metal seam.

### THE SHADOW RECIPES
**Primary button, rest state** — three inset *top lights* + six-layer contact stack (all sub-8px, tight negative spreads, violet-tinted ink):
```css
box-shadow:
  0 1px 2px -.5px #ffffff1f inset,
  0 .5px .5px #ffffff29 inset,
  0 8px 24px -4px #ffffff29 inset,     /* wide interior glow */
  0 8px 8px -3px #09011408, 0 5px 5px -2.5px #09011408,
  0 3px 3px -1.5px #08011408, 0 2px 2px -1px #08011408,
  0 1px 1px -.5px #08011408, 0 .5px .5px #08011408;
```
Every value declared **twice** — sRGB then `color(display-p3 …)` fallback pattern.

**Press (:active)** — interior lights die, *brand-colored* depth floods in:
```css
.button-primary:active { box-shadow:
  0 1px 2px -.5px #001b8729 inset, 0 .5px .5px #001c8829 inset,
  0 8px 24px -4px #001c8829 inset,   /* same geometry, blue-tinted */
  /* …identical 6-layer contact stack unchanged */ }
```

**Hover lift** — first layer doubles (8→16px) + hairline ring joins: `… , 0 0 0 1px #0000000a`.
Dark button press: bg `#ffffff05` + inset `0 4px 8px #12072b29, 0 3px 6px #12072b0f inset…`. Gray keycap press: bg `#292929` + `inset 0 4px 8px #0003…`.

**Brushed-aluminum edge** (keyboard deck / lid strip):
```css
background:linear-gradient(180deg,#f2f2f2,#ededed);
box-shadow:
  0 -32px 40px #66666608 inset,   /* huge soft cavity above */
  0 -8px 56px #6666660a inset,
  0 -2px 2px #6666661f inset,     /* occlusion band */
  0 -1px .5px #ffffffa3 inset,    /* crisp top specular line */
  0 1px .25px #ffffff80 inset;    /* lower lip catch-light */
```

**MacBook shell** (two-piece stamped housing):
```css
.macbook-screen { padding:3%; border-radius:5px 5px 2px 2px;
  transform-style:preserve-3d;
  background:linear-gradient(180deg,#efefef,#d9d9d9 98.41%),#b0b2b3; }
.macbook-screen::before { content:""; position:absolute; inset:1px;
  border-radius:4px 4px 1px 1px;
  background:linear-gradient(180deg,#d6d6d6,#efefef 98.41%); }
```

**Card recipe** (hairline border drawn as final shadow layer):
`0 12px 12px -3px #0000000a, 0 6px 6px -3px #00000005, 0 3px 3px -1.5px #00000005, 0 1px 1px -.5px #00000008, 0 0 0 1px #0000000a`

**Hero floor shadow:** `0 262px 105px -72px #01012014, 0 147px 88px -40px #01012029, 0 64px 80px -32px #01012033, 0 16px 36px -12px #0101203d, + inset top lights`.

### Specular / gloss
`.button-primary::before { background:linear-gradient(to bottom,#fff,#ffffff80); opacity:.12 }` → `:hover::before { opacity:.24 }`, transitioned `.45s cubic-bezier(.6,.6,0,1)` — a literal glass sheen that thickens on approach.

### States (controls)
- Lift: `.hover:-translate-y-0.5` (−2px); press: `.active:translate-y-1` (+1px physical push).
- Focus: Tailwind 2px ring. Scrollbar thumb: `#0f071d99`, `background-clip:padding-box`, 1px transparent border (floating grip look).

### Motion
Signature easings: **`cubic-bezier(.6,.6,0,1)`** (fast-start snap, 18×), **`(.76,0,.24,1)`** (heavy mechanical doors/lids, 1–1.5s, e.g. `macbook-lid 1.5s 1s both`), **overshoot `(.87,-.41,.19,1.44)`** (playful snaps). Status pill breathes via `footer-status-pulse 4.8s ease-out infinite`; skeletons shimmer `linear-gradient(90deg,var(--body-light-loud) 40%,var(--body-light-ghost) 50%,var(--body-light-loud) 60%)`.

### Depth system
5+ planes: page → floor-shadow stage → device housings (`preserve-3d` shells) → panel strips → buttons with interior lighting. Reads as *photographed hardware*, not cards.

### Signature techniques (verbatim-ready)
See recipes above — the button rest/press pair, the aluminum-edge quintet, the stepped-radius bezel, and the `::before` sheen are the four to steal.

---

## 3. firecrawl.dev — matte print shop with one molten accent

### Palette
- Paper: `--surface: #ffffffff`; dark alt `#171717`.
- Greys: Tailwind slate/gray ramp `#111827 #374151 #4b5563 #6b7280 #9ca3af #d1d5db #e5e7eb`.
- **Heat scale** (the identity): `--heat-4: #fa5d190a` → `-8:…14` `-12:…1f` `-16:…29` `-20:…33` `-24:…3d` `-40:…66` `-48:…7a` `-90:…e6` `-100: #fa5d19ff`; deep variant `#FA4500`. Crimson `var(--accent-crimson)`, signal yellow `#eab308`, alert `#dc2626`.
- **Alpha ladder utility**: `--black-alpha-1 … -88` (`#00000003 → #262626e0`) used for every hover/shadow.

### Type
System-sans + `ui-monospace` stack. UI sizes 10/11/12/13/14px; docs em-scale `.857143em/.875em/.888889em`; headings 20/22px.

### Radius
kbd `.3125rem`; inputs `.375rem/.75rem`; cards `1rem/1.5rem`; pills `9999px`.

### Shadow recipes
- **Soft plate + hairline**: `0 16px 24px -8px #00000008, 0 8px 16px -4px #00000008, 0 0 0 1px #00000008`
- **Hero card with matte halo ring**: previous + `, 0 0 0 12px #f9f9f9` — a printed margin around the card.
- **Typewriter kbd** (mechanical bottom lip):
  ```css
  box-shadow: 0 0 0 1px rgb(var(--tw-prose-kbd-shadows)/10%), 0 3px 0 rgb(var(--tw-prose-kbd-shadows)/10%);
  border-radius:.3125rem;
  ```
- **Heat focus ring**: `:focus-within { box-shadow:0 0 0 3px #ff64320f }`; **hover glow**: `0 4px 12px -4px #fa5d1940`.

### States
Hovers = alpha-ladder swaps (`bg-black-alpha-4→8`, `bg-heat-4→16`), `-translate-y-1`, `scale-[1.02]`, `grayscale-0` photo reveal, `before:scale-100` wipe.

### Textures / motion
Dotted matrix: `radial-gradient(#000 60%,#0000 100%)` tiled; separator PNG; mask fades. Animations: `parseSlideIn .22s ease-out`, `fade-in-up .5s`, `cursor-blink .7s`, `spin-reverse`, `snowfall`; easings stock Tailwind `(.4,0,.2,1)`.

### Depth
Flat print aesthetic: 2–3 planes; depth via hairlines + the 12px paper-margin halo rather than drops.

---

## 4. julius.ai — app-grade flat with electric-blue glow

### Palette
Zinc/neutral ramp (`#171717 #404040 #525252 #737373 #a3a3a3 #d4d4d4 #e5e5e5 #fafafa`); primary **`#2563eb`** (25×) with glow `0 0 15px #2563eb`; `#006ED6`; hero sky `rgba(30,144,255,.6)`; success `#16a34a`/`#86efac`.

### Type
Inter/system; base `1rem`, UI `.875rem`, display `2.25/3/3.75rem`, app `17px`. Tracking: body `-.005…-.025em`; eyebrows POSITIVE `.05–.2em` (uppercase micro-labels).

### Radius / controls
shadcn `calc(var(--radius) ± npx)` system; kbd `.3125rem`; pills `9999px/1000px/100px`. Checkboxes/radii filled by **inline SVG data-URIs** (`currentColor` bg) — crisp instrument switches.

### Shadow recipes
Mostly ring-composition (Tailwind ring stack) — the tactile moments:
- Same **typewriter kbd lip** as Firecrawl (`0 0 0 1px + 0 3px 0` shadows).
- Neon glow: `0 0 15px #2563eb`.
- Focus: `--tw-ring-color:#2563eb`, border-color sync — 1px inset-style ring + matching border.
- Interaction model is overlay-based: `.interactive:hover{background:var(--hover-overlay)} :active{var(--active-overlay)} [data-state=open]{var(--selected-overlay)}` — app chrome, not hardware.

### Motion
`accordion-down .2s ease-out`; slides `.3s`; **`shine 3s linear infinite`** (`background-position:-200%→200%` sweep); `pingPulse 2s cubic-bezier(0,.1,.8,1)`; `steps()` marquees (`g-container-move calc(var(--speed)*var(--s)) steps(var(--s)) infinite`); `blob`.

### Depth
Flat layered surfaces (`surface-1..4`); zero inset shadows found. Least tactile of the seven — its "hardware" is the kbd lips + switch glyphs.

---

## 5. walkie-talkie.io — skeuomorphism by bitmap, not CSS ⚠️

`https://www.walkie-talkie.io` → redirects to `walkie-talkie.io` (HTTP 200, 5.5 KB). It's a **React PWA shell**: `<div id="app">` + `bundle.js` (810 KB). Exhaustive probe of the bundle found **zero** `box-shadow`/`border-radius`/gradient CSS (only style-loader plumbing and 2 SVG-icon `linearGradient`s). Visual identity ships as **bitmap assets**: mouth-animation frames `images/mouth01–04.png`, `screen_photo.png`, `screenshot.png`, hashed SVGs, `graphic_feature.png` (OG image). Theme metadata: `theme-color #ffffff/#3e3e3e`, Safari mask-icon `#3e3e3e`, Google-Fonts preconnect.

**Design takeaway:** old-school skeuomorphic apps often fake hardware in *Photoshop, not CSS*. CSS extraction here is a dead end; treat its look as image-carried. (Budget prevented pulling PNGs for pixel analysis.)

---

## 6. whalesync.com — glossy plastic buttons on a semantic-token system

The most **disciplined token architecture** of the seven (Webflow + custom theme layer).

### Palette (semantic variables — verbatim)
```
--colors-primary--brand-blue:#02a2f2   --colors-primary--brand-blue-accent:#016ca2
--colors-primary--bg-blue:#f6fbfe      --colors-primary--light-blue:#9cdcfc
--colors-primary--light-blue-accent:#d0edfb   --colors-primary--mid-blue:#094e71
--colors-primary--mid-blue-accent:#073a55     --colors-primary--dark-blue:#031a26
--colors-primary--dark-blue-accent:#032232
--colors-neutral--black:#0d0d0d  --neutral--mid-gray:#8d8d8d  --light-gray:#e6e6e6  --bg-gray:#f9f9f9
Secondary quads (bg-/light/base/dark): green #f7fdf9/#ccf0d8/#1dca57/#0a2914 ·
red #snow/#fedbd7/#f54c3d/#2a0c09 · yellow #fff9ed/#feeecd/#f8ab12/#281e0b · purple #f8f5ff/#e5dbfa/#9464f3/#13062d
Body modes map onto primaries: light-bg=bg-blue, light-bg-border=light-blue, dark-bg=dark-blue…
```
Material tones live in the *alpha shadows*: warm-grey ink `#031a26` tints every drop shadow (see below).

### Type
Self-hosted variable fonts: **Geist VF** + **Geist Mono VF** (`geistvf.woff2`). Breakpoint type scale via `--type-h1/h2/h3--font-size-{xs,sm,md,lg}`; **eyebrow**: `.7–.75rem`, `letter-spacing:.05em`; **button**: `.85rem/1.2em/ls 0`.

### Radius scale
```
--size-border-radius--small:.25rem   --size-border-radius--medium:.5rem   (large: 2rem tier)
--component-button--border-radius:var(--size-border-radius--medium)
--component-card--border-radius:var(--size-border-radius--medium)
plus 50% / .5em / 2em pills
```

### THE SHADOW RECIPES (the plastic button trilogy)
```css
/* REST — whisper-quiet drop + invisible top lip */
.btn { box-shadow: 0 3px 6px #00000005, 0 2px 4px #00000005,
                   0 0 2px #0000000a, inset 0 2px 1px #ffffff03; }
/* HOVER — drop grows AND the specular lip lights up */
.btn:hover { background:var(--colors-primary--brand-blue-accent); color:#fff;
  box-shadow: 0 8px 12px #0000000a, 0 4px 8px #0000000f,
              0 1px 2px #00000014, inset 0 2px 1px #ffffff29; }
/* ACTIVE — drops collapse toward the surface, lip goes dark again */
.btn:active { box-shadow: 0 3px 6px #00000005, 0 2px 4px #00000005,
                          0 0 2px #0000000a, inset 0 2px 1px #ffffff03; }
```
The `inset 0 2px 1px white@α` top lip is the entire "glossy plastic" illusion — modulate α `03→29→03` across rest/hover/press.

**Other tactile moves**
- Double-border selection: `inset 0 0 0 3px var(--colors-neutral--white)` (and `.2em` variant) — ring *inside* the element leaves the outline intact.
- Focus halos: radio/checkbox `0 0 0 6px #9cdcfc52` / `#02a2f233` (soft blue aura rings at 4px & 6px).
- Table-cell shade: `inset 0 80px #0000001a` — one giant inset wash as hover.
- White-veil trick over arbitrary backgrounds: `inset 0 0 0 100px #ffffff26`.
- Legacy Webflow focus: `0 0 3px 1px #3898ec`.
- Card hover is calm: border-color `light-card-border(accent) → brand-blue` only, `box-shadow:none`.

### Textures
`dot-pattern-light-blue.svg` tiled as dotted-grid background; custom `select-arrow-white.svg`; fade-out gradients into `--light-bg`/`--dark-bg`.

### Motion
Single house curve: **`cubic-bezier(.165,.84,.44,1)`** (easeOutQuint) at `.3–.4s` on `background-color/border-color/color/box-shadow/transform/padding` — one buttery glide for everything. Only keyframe: `spin .8s linear infinite`.

### Depth
Borders-first system: 1px semantic borders + inset rings do the separation; drops reserved for CTAs. Planes: page tint → bordered card → plastic button.

---

## 7. navattic.com — rubber-keycap design system (most complete tactile library)

### Palette
- shadcn HSL roots: `--background:0 0% 100%; --foreground:0 0% 3.9%; --primary:0 0% 9%; --muted:96.1%; --destructive:0 84.2% 60.2%; --border:89.8%; --ring:0 0% 3.9%; --radius:.5rem`.
- Brand: `#266DF0 #1C62E3 #1890ff` blues, violet `#4F44E0`, cyan `#0bbfd9`.
- **Shadow-tint inks**: navy `#243153` (elevations), graphite `#373750` (rings) — never pure black.

### Type
**Suisse** (display/UI) + Inter + **GeistMono**. Sizes `.75–2.25rem`; tracking via `--tw-tracking` defaults `-.02rem/-​.01rem/-​.1rem/.01rem/-​.045rem`.

### Radius
`--radius:.5rem` with derived ladder `calc(var(--radius)-2px/-4px)`, `--radius-xl/2xl/3xl`; form/button nesting via `calc(var(--ct-form-field-border-radius) - 1px)` and `calc(var(--ct-button-border-radius) + 2px)` — **nested shells get their own derived radii** (physical part fit).

### THE SHADOW RECIPES — a full keycap grammar
**Raised solid button (rest)** — dark cavity at TOP inside, light lip at BOTTOM inside, white hairline, colored aura:
```css
.shadow-solid-button-blue-focus {
  box-shadow: 0 -3px 2px 0 #0003 inset,          /* top inner occlusion */
              0 2px .4px 0 #ffffff24 inset,       /* bottom inner catch-light */
              0 0 0 1px var(--colors-white,#fff), /* 1px enamel ring */
              0 0 1px 3px #266df066;              /* colored aura halo */
}  /* gray-focus: #0006 + #070a0d66 · red-focus: #ef444466 */
```
Plus outer contact stack: `0 1px 1px #0000001a, 0 2px 3px #00000014, 1px 4px 8px #0000001f, inset 0 -3px 2px #0003, inset 0 2px .4px #ffffff24` (note the *raised* polarity: dark bottom-inset, light top-inset — two polarities coexist deliberately for different cap depths).

**PRESSED keycap (:active)** — polarity flips, cavity forms:
```css
.shadow-solid-button-active {
  box-shadow: inset 0 3px 1px #0003, inset 0 0 3px #0003;
}
/* wired as .active\:shadow-solid-button-active:active and
   .enabled\:active\:shadow-solid-button-active:enabled:active */
```

**Gel badges** (per-hue soft-plastic pill, exact pairs):
```css
box-shadow: inset 0 -1px 1px <hue-dark>24, inset 0 1px 2px <hue-light>80;
/* red    #811d1d / #fef1f1     pink  #811842 / #fdf2f8
   orange #7d2d12 / #fff6eb     yellow#733f12 / #fefce7
   green  #054d26 / #ebfaf6     blue  #071e69 / #f5fbff
   gray   #070a0d / #f6f8f9     indigo#0f0443 / #efe7f3 */
```

**Tinted elevation ladder** (navy, includes hairline):
```css
box-shadow: 0 32px 56px -8px #24315308, 0 16px 24px -8px #24315308,
            0  8px 16px -4px #24315308, 0  4px  8px -2px #24315308,
            0  2px  3px      #24315308, 0 .75px .75px #3737500a,
            0  0    0  1px   #3737500a;
```

**Glass hover:** `inset 0 3px 8px 0 #ffffff4d, inset 0 0 .5px 0 #0000004d` (group-hover).

### States
Focus: border `blue-500` + outer ring `blue-200`; checkbox/radio checked = `currentColor` fill + white SVG glyph; `[data-state=checked]` drives group styling; `enabled:active` compound variant chains.

### Textures
**Stepped mask-gradients** = dashed/dotted machine patterns without images:
```css
.mask-gradient-5 { mask-image: linear-gradient(#0000 62.5%,#000 75% 87.5%,#0000); }
.mask-gradient-7 { mask-image: linear-gradient(#0000 87.5%,#000); }
/* siblings step at 12.5%/25%/37.5%… — dash-length presets */
```
Spotlight: `radial-gradient(#fff 0 30%,#0000 70%)`; modern gamut: `linear-gradient(in lab,red,red)`; spinner.webp.

### Motion
Staggered entrances `fadeUp .3s/.5s/.7s ease-in-out` with sequenced delays; `marquee 25s linear infinite`; `progressBar var(--duration) linear forwards`; `moveLine .5s linear infinite`; easing base `cubic-bezier(.4,0,.2,1)`.

### Depth
4 clean planes: page → navy-tinted elevation cards → solid keycaps → aura halo. The most *systematized* hardware language of the set.

---

## Cross-site synthesis — how these sites fake hardware in CSS

1. **The Universal Tactile Formula** =
   `outer contact stack (3–6 layers, all ≤8–32px, tight negative spreads, tinted ink)`
   + `inset pair (white top-light + dark bottom-occlusion)`
   + `hairline ring as final shadow layer (0 0 0 1px)`.
   Borders-as-last-shadow-layer keeps rings composited with drops (ToDesktop, Navattic).

2. **Press = polarity inversion.** Rest: light enters from top. Active: insets flip to dark-top (`Navattic inset 0 3px 1px #0003`), drops shrink to nothing, sometimes +1px `translateY` (ToDesktop `.active:translate-y-1`). Whalesync instead dims its specular lip `#ffffff29→03`.

3. **Tinted shadow inks, never pure black:** `#090114/#080114` (ToDesktop violet-ink), `#243153/#373750` (Navattic navy), `#031a26` (Whalesync petrol), `#040514` (Evervault), `#010120` floors.

4. **Specular management is one property:** a single `::before` white gradient whose *opacity* animates (ToDesktop `.12→.24`), or an inset white lip whose *alpha* steps (`#ffffff03→29`, Navattic `#ffffff24`). Cheap, physically plausible gloss.

5. **Machined seams come from geometry:** nested elements inset by exactly `1px` with radius reduced by exactly `1px` (ToDesktop `5/5/2/2` over `4/4/1/1`); derived `calc(radius−1px)` shells (Navattic).

6. **Materials map to technique:** aluminum = grey vertical gradients + giant soft inset cavity (`0 -32px 40px #66666608 inset`); plastic = colored fill + top lip inset; rubber keycaps = full-cavity active inset; glass = `backdrop-filter` + translucent panel fill; print = hairlines + halo rings, no insets.

7. **House easings are fingerprints:** ToDesktop `cubic-bezier(.6,.6,0,1)` (+ heavy `(.76,0,.24,1)` lids, overshoot `(.87,-.41,.19,1.44)`); Whalesync `(.165,.84,.44,1)`; Evervault `(.44,0,.56,1)`; Tailwind sites `(.4,0,.2,1)`.

8. **Modern-CSS tells:** `color(display-p3 …)` duplicate declarations (ToDesktop), `color-mix(in srgb …)` (Navattic), `mask-image` dash patterns, HSL-variable theming (julius/navattic), semantic 4-tone color quads (Whalesync).

---

## Raw artifacts on disk (this folder)
`_tools.json`, `evervault.html`, `todesktop.html`, `firecrawl.html`, `julius.html`, `walkie.html`, `whalesync.html`, `navattic.html`, `*-inline.raw`, `*-main.raw`, `whalesync-{shared,index}.raw`, `walkie-bundle.raw`, `_digests.txt`, `_digests2.txt`, `_states.txt`.
