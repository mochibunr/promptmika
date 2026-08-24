# Bento-Corporate Design Token Sheet — linear.app / attio.com / clerk.com / resend.com / liveblocks.io

Method: 12/12 PromptMika MCP calls (`tools/list` ×1, `web_fetch raw` ×11; JSON-RPC batch attempt rejected -32600).
Artifacts: `*.html` (5), `*.css` mined bundles, `linear.inline1.css` (261KB styled-components output), `tools-list.json`.

---

## 0) Cross-site synthesis

| | Linear | Attio | Clerk | Resend | Liveblocks |
|---|---|---|---|---|---|
| Stack | Next.js + styled-components + vanilla-extract-style var tokens | Next.js + Tailwind (custom white/black/blue numbered scales) | Next.js + Tailwind, Geist + Suisse Intl | Tailwind v4 `@theme` + Radix a1–a12 alpha scales (+ display-p3 dupes) | Tailwind v4 + CSS Modules, `--lb-*` theme namespace |
| Theme default | Dark (#08090a) | Light w/ dark hero islands | Dark (#131316) w/ cyan glow | Both; `.light-theme` / `.dark-theme`, near-black #000 | Dark marketing surface, themable accent API |
| Signature accent | Indigo #5E6AD2 hairline art | Blue #266df0 | Cyan #5de3ff / #64e5ff | Rainbow trio #00d1c6/#e9ac48/#611c98 on gray-12 | User-settable `--accent-color` (default #0090ff) |
| Radius center of gravity | var-driven (not extractable locally) | lg/xl (8–12px), glass panels →2xl | xl–2xl + ring-1 hairlines everywhere | **rounded-2xl (1rem) dominant**, up to radius-4xl 2rem | 12px cards, .25rem controls, full pills |
| Card treatment | stepped dot-grid animations, 0.5px SVG hairlines | `bg-white-300/80 backdrop-blur-md p-[3px]` floating glass | `ring-1 ring-gray-950/5` + 2-layer soft shadow | `border-white/5 border-2 + backdrop-blur-[25px] + texture overlay ::after` | conic spotlight beams + animated film grain |

---

## 1) LINEAR (linear.app)
- Palette (from `<meta theme-color>`, inline SVG fills/strokes): bg **#08090a**; text tiers **#e4e5e9** (high), **#d0d6e0**, **#9c9da1**, **#8a8f98** (muted); surfaces **#191d20 / #2e2e32 / #3e3e44 / #585a5c**; brand indigo **#5E6AD2** (used as 0.5px stroke in decorative circuit SVGs), deep indigo shade **#4354B8**; accents **#E5591D** (orange), **#02B8CC** (cyan), plus illustration-only **#B2D5FF**, **#DFD1FF**, acid **#E4F222**.
- Type system (var taxonomy from styled-components CSS): InterVariable.woff2; scales `--text-micro/small/mini/regular` each as {size, line-height, letter-spacing} triplets + display ladder `--title-2…--title-8`; weights normal/medium/semibold only; `--font-monospace` used 65×.
- Borders/hairlines: literal 0.5px SVG paths in brand indigo ("purpleLine"), text-decoration thickness 1.5px with quaternary color.
- Motion: signature **agent grid-dot animations**: `animation:grid-dot-0-0-pong 1600ms steps(1,end) infinite` — opacity steps 0.3→1→0.3 = discrete "signal traveling a circuit board"; also `steps(1,end)` pong/upDown/agent variants at 1600–3200ms.
```css
@keyframes grid-dot-0-0-pong{0%{opacity:.3}50%{opacity:.3}50%{opacity:1}87.5%{opacity:1}87.5%{opacity:.3}100%{opacity:.3}}
```
- Expensive tells: pixel-stepped (non-eased) keyframes for technical credibility; hairline SVG schematics colored at 0.5px; strict 4-tier text hierarchy; single-accent restraint.

## 2) ATTIO (attio.com)
- Palette: paper **#eeeff1** panel fills, ink **#242629/#232529**, hairline grays **#e6e7ea/#cdced2/#75777c/#5c5e63/#9fa1a7**; blue **#266df0** (+var tiers blue-400/450/500); semantic green **#54d490/#007d53/#cbf7e1/#e0fced**, amber **#F5A300**, red **#FF5454**, pastel violet **#e8ddfe**, lemon **#fcef7e**; button hairline literal **#50596780**.
- Type: **Inter + Inter Display** (regular/medium/semibold/bold) + one custom display face (hashed woff2). Tailwind defaults elsewhere.
- Button anatomy (from component CSS): primary = **top-lit radial gradient** + per-state from/to pairs:
```css
background: radial-gradient(at center -10%, var(--button-primary-bg-from) 0%, var(--button-primary-bg-to) 100%);
```
with state machine tokens `--button-primary-bg-{hover,focus,active}-from/to`, `-border`, `-text` — every interaction state pre-declared.
- Card anatomy: floating glass islands over the hero: `bg-white-300/80 backdrop-blur-md p-[3px] rounded-lg lg:rounded-2xl`; layered shadow recipe:
```css
box-shadow: 0 2px 8px rgba(11,13,24,.04), 0 16px 40px rgba(11,13,24,.08);
```
dark island variant `bg-black-0/80`.
- Backgrounds: radar-ring keyframes (opacity rings 0.067↔0.22, 3.6s ease-in-out; bob translateY −5px/4s) with prefers-reduced-motion opt-out.
- Expensive tells: numbered color scales (white-100…900) instead of raw hexes; per-state gradient token pairs; tiny padding ratios (`p-[3px]` frames inside blurred glass).

## 3) CLERK (clerk.com)
- Palette: canvas **#131316** (dominant SVG fill ×144+314), raised **#212126 / #26262c / #2f3037 / #37373c**, hairlines/text **#5e5f6e / #747686 / #9394a1**, light **#f7f7f8/#f3f3f4**; accent cyan **#5DE3FF** (SVG) / **#64e5ff** (arbitrary classes ×21), violet **#6C47FF**, material pops in illustrations (#ffc107, #ff3d00, #4caf50, #1976d2).
- Type: **Geist Sans/Mono/Numbers variable** + **Suisse Intl** (Book/Regular/Medium/Bold + italics):
```css
--font-suisse:"suisse","suisse Fallback"; --font-soehne-mono:"soehneMono";
```
- Border treatment: **hairline ring is the card language** — `ring-1` ×129; e.g. `ring-1 ring-gray-400` on 10px dots, `ring-1 ring-gray-950/5` on cards; `from-white/[x]` white-alpha gradients ×44 for top-edge lighting; `border-white/10`-style borders ×9.
- Shadow recipe (multi-layer, cool-tinted):
```css
box-shadow: 0 5px 15px rgba(0,0,0,.08), 0 15px 35px -5px rgba(25,28,33,.2);
```
- Expensive tells: Geist numbers tabular variants for stats; cyan-on-near-black glow discipline; ring-based 1px architecture instead of heavy borders; Suisse Intl as premium grotesk pairing.

## 4) RESEND (resend.com)
- System: Radix Colors a1–a12 **alpha scales** (gray/slate/mauve/sand/violet/blue/green/red/amber…) each shipped **twice — sRGB hex AND `color(display-p3 …)` under `@media (color-gamut:p3)`** (wide-gamut!). Themes: `:root,.light-theme` vs `.dark-theme`.
- Key values: light bg **#fdfdfd**/canvas **#eee**; dark bg **#000**; gray-12 light **#191919**; dark-theme gray-a2 `#16171aeb`; rainbow accents `--rainbow-cyan:#00d1c6; --rainbow-amber:#e9ac48; --rainbow-purple:#611c98`; label scales for 12 hue families.
- Type: **ABC Favorit** (display/book+medium), **Domaine** serif (reg/med/bold), **Commit Mono**, Inter Variable; weights 300–700; tracking tighter −.05em/tight −.025em; text-2xs .625rem custom step.
- Radius: xs .125rem → 4xl **2rem**; site leans rounded-2xl (1rem) ×63.
- Shadows:
```css
--shadow-button: 0px 0px 4px #ffffff0f, 0px 1px 14px #ffffff1f, 0px 3px 32px #ffffff2e;
--shadow-3xl: 0 0 60px 30px #f2f2f2;            /* ambient bloom */
--shadow-lg: 0 10px 15px -3px #0000001a, 0 4px 6px -4px #0000001a;
inset -.5px .5px 0 #fff3                          /* corner highlight */
```
- Backgrounds: textures `dot-pattern.png`, `noise.png`, `grid.png`, `texture-btn.png`; edge-fade vars; scanline fades `linear-gradient(#0000 0% 10%, #0000 80%, #000 100%)`.
- Signature techniques:
```css
/* AI shimmer text */ background-position 100%→0%, 2.5s linear infinite
/* disco border */    @keyframes disco{to{transform:translateY(-50%) rotate(360deg)}} /* conic-gradient(var(--tw-gradient-stops)) with --tw-gradient-position: in oklab, 6s linear */
/* glass CTA */       border-[2px] border-white/5 backdrop-blur-[25px]
                      bg-[linear-gradient(104deg,rgba(253,253,253,.05)_5%,rgba(240,240,228,.1)_100%)]
                      after:bg-[url(/static/texture-btn.png)] hover:shadow-button hover:bg-white/90 hover:text-black
```
- Motion: durations .2s standard; easings cubic-bezier(.4,0,.2,1)/(.4,0,1,1)/(0,0,.2,1); playful `plop` bounce staggered .1/.2/.4s; marquee scroll-x 180s linear.
- Expensive tells: P3 gamut duplication; oklab-interpolated rotating conic borders; texture-overlaid buttons; 12-hue label system.

## 5) LIVEBLOCKS (liveblocks.io)
- Namespace: `--lb-*` public theme API: `--lb-accent` default **#0090ff** with documented alternates (#8f6cef/#b499ff purple, #f44e6b/#fb6f87 red-pink, #e89304/#ffbf52 amber, #30a46c/#57bf8d green) + computed `--lb-accent-foreground` (#4a328b, #674100…); `--lb-radius` (.15em/.5em/2em); `--lb-transition-duration:.4s; --lb-transition-easing:ease-in-out`; elevation vars `--lb-product-shadow-elevation-{popover,raised}`.
- Type: Inter + **Suisse** + JetBrains Mono.
- Signature background — hero light cone + staggered streaks + film grain:
```css
.heroLight:before{background:conic-gradient(from 180deg at 50% 0,#fff,#ffffffe6 2deg,#fff9 6deg,#fff6 10deg,#ffffff1a 15deg,#fff0 20deg 340deg,…)}
.heroLightStreaks1..3{background:repeating-conic-gradient(from -3deg at 50% 0,#0000 0 5deg,#fff6 7deg,#000000e6 9deg,#0009 11deg,#ffffff4d 14deg,#0009 16deg,#0000 17deg 56deg);animation-delay:0s|3s|6s}
.noise:before{opacity:.06;background:url(/images/noise.png);background-size:128px 128px;width:300%;height:300%;
  animation:8s steps(10,end) infinite animate-noise} /* translate jitter keyframes */
```
plus `light-streaks` opacity pulse (0→.18→0) and edge-fade masks `linear-gradient(90deg,var(--surface-base) 80%,transparent 100%)`.
- Radii: 12px cards, .25/.375rem small controls, pills.
- Expensive tells: a real theming *API* (accent pairs auto-derived foreground), theatrical conic spotlights with 3s phase offsets, grain animated with `steps()` so it never looks eased/fake.

---

## What makes all five feel "expensive"
1. Token systems, not colors: numbered scales (Radix a1–a12, Attio white/black-100…900, Linear title/text triplets), so states derive rather than get picked.
2. Hairline discipline: 1px rings (Clerk ring-1 everywhere), 0.5px SVG strokes (Linear), #50596780 alpha borders (Attio), border-white/5 + inset -.5px .5px highlights (Resend).
3. Light as material: white-alpha gradients from top (from-white/[3%]), conic spotlights anchored `at 50% 0`, multi-layer glows (`shadow-button` 3-layer white bloom, `shadow-3xl 0 0 60px 30px`).
4. Physical textures & wide gamut: noise/dot/grid PNG overlays, P3 color() duplicates, oklab interpolation.
5. Engineered motion: steps() for digital honesty, .2s ease-in-out UI grammar, 3s-staggered loops, reduced-motion opt-outs.
