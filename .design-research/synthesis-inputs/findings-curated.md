# First-hand CSS mining findings (curated from .design-research caches)

## Raycast (north star — decoded from 5 stylesheet chunks)

**Base darks:** #0c0d0f · #0d0d0d · #111214 (blue-cast near-blacks; never pure #000 as surface)
**Accent:** #ff6363 coral (25x, incl. #ff6363d9 hover) + wood-dark support #452324; violet whisper #9aaaff0d
**White-alpha ladder (hairlines/rims/highlights):** #ffffff08 .0a .0d .0f .14 .1a .1f .26 .30 .40 .4d .80 .e6
**Skeuomorphic keys:** literal gradient tokens --key-bg-start-color:#121212→--key-bg-end:#0d0d0d; alt #151515→#222
**Radii:** --radius 8px (controls) / 20px (cards); card padding 32px; grid max ~1065px
**Type stack:** Inter + JetBrains Mono + GeistMono (+ Instrument Serif & VT323 as display easter eggs)
**Motion quirks:** --rotation-period:180s slow ambient rotation; marquee via --scroll-start/end

## Signature shadow physics (tactile + bento caches)

Layered ambient drop (5–6 steps, same hue decreasing alpha):
  0 8px 8px -3px C1, 0 3px 3px -1.5px C2, 0 2px 2px -1px C3, 0 1px 1px -.5px C4, 0 .5px .5px C5
Paired inset rim set (dark glass panel):
  inset 0 -4px 12px -4px #ffffff14   ← bottom bounce light
  inset 0 1px 3px #ffffff0f          ← top edge light
  inset 0 .5px .5px #ffffff1f        ← hairline specular
Pressed/inset state: invert — stacked INSET dark layers (0 4px 8px #00000005 inset … 0 .5px .5px #0000000a inset)
Hero float: 0 262px 105px -72px, 0 147px 88px -40px, 0 64px 80px -32px, 0 16px 36px -12px + inset top lights
Light-mode tactile pair: inset 0 -32px 40px #66666608, inset 0 -1px .5px #ffffffa3, inset 0 1px .25px #ffffff80
Key-cap: 0 8px 12px #0000000f, 0 4px 8px #00000014, 0 1px 2px #0000001f, inset 0 1.5px 1px #ffffff47
Raycast casts are VIOLET-tinted (#090114/#080114 family) not grey-black.

## Glass usage census (all cached CSS)

blur(10px)x7 · blur(36px)x6 · blur(16px)x4 · blur(24px)x3 · blur(15px)x3 · blur(20px)x2 · blur(60px)
Only ONE saturate() combo found (20px saturate(80%)) → premium feel = layered shadows + rims, NOT filter stacks.
Apple globalheader.css present (170KB) for nav-glass reference.

## Linear (bento-corp)

styled-components + token ramp: --title-N-size / -line-height / -letter-spacing per step (strict scale discipline).
Semantic color tokens (--color-text-tertiary, --label-faint, --color-teal/red/yellow); muted greys #9c9da1/#6b6b6b.

## Fonts across ecosystem (frequency)

Inter dominant (70x+46x stack variants) · JetBrains Mono 22x+19x · GeistMono 21x · SF Pro (Apple only).
Conclusion: body Inter is industry-neutral; distinctiveness must come from display face + mono labels.

## Palette implications for PromptMika

- Dark base: blue-violet cast blacks (own mix, e.g. #0B0C10 tier) + white-alpha rim ladder
- ONE warm metal accent (brass/amber family) + coral/ember signal — avoids AI-purple AND clones Raycast
- Key-gradient variables for pressable controls (copy buttons, tabs) like Raycast's keys
