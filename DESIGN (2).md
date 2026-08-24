---
name: "Expressive Editorial Web Design System"
version: "1.0.0"
status: "normative"
purpose: "A production-ready visual system for AI-generated interfaces inspired by handmade editorial, pixel-retro, organic commerce, terminal-tech, retro-computing, playful packaging, and cartoon campaign design."
sourcePolicy:
  copyReferenceBrands: false
  copyReferenceLogos: false
  copyReferenceText: false
  copyReferenceArtwork: false
  reuseVisualLanguageOnly: true

designDNA:
  dominantTraits:
    - "expressive typography"
    - "intentional imperfection"
    - "editorial asymmetry"
    - "bold color blocking"
    - "tactile grain"
    - "pixel or hand-drawn graphics"
    - "limited palettes"
    - "strong art direction"
    - "minimal generic card UI"
  prohibitedDefaults:
    - "generic SaaS hero"
    - "glassmorphism"
    - "liquid-glass navigation"
    - "purple-blue AI gradient"
    - "dashboard mockup in every hero"
    - "identical rounded-card grids"
    - "excessive pill UI"
    - "sterile white-and-Inter layouts"
    - "random decorative noise without hierarchy"

modePolicy:
  dominantModeRequired: true
  maxDominantModesPerPage: 1
  maxSecondaryModesPerPage: 1
  maxModesPerSection: 2
  secondaryModeVisualShareMax: "30%"
  defaultMode: "papercut-editorial"
  allowedModes:
    - "papercut-editorial"
    - "pixel-retro"
    - "organic-commerce"
    - "terminal-tech"
    - "retro-mac"
    - "playful-packaging"
    - "cartoon-campaign"
    - "glitch-fashion"

colors:
  semantic:
    background:
      paper: "#F2E8CC"
      warm: "#FFF6DF"
      dark: "#171816"
      terminal: "#101310"
      lime: "#CFF29A"
      mustard: "#F6B91A"
      aqua: "#62C8B5"
      sky: "#9CCBE8"
    surface:
      default: "#FFF8E8"
      elevated: "#F7EFD8"
      dark: "#20221F"
      darkRaised: "#292B27"
      black: "#0A0A09"
    text:
      primary: "#171717"
      secondary: "#44423D"
      inverse: "#FFF9E9"
      muted: "#767166"
      terminal: "#C6FF84"
    accent:
      primary: "#4D9562"
      secondary: "#F06B3E"
      electric: "#A9FF6A"
      playfulPink: "#E56D8B"
      playfulOrange: "#F4793B"
      pixelBlue: "#4B86C5"
      sunYellow: "#F3E85F"
    border:
      default: "#1C1C1A"
      muted: "#AAA391"
      inverse: "#F4ECD8"
      terminal: "#3A3F39"
    state:
      success: "#4D9562"
      warning: "#E4A51A"
      error: "#C9483B"
      info: "#4B86C5"
  usageRatios:
    dominantSurface: "55-70%"
    supportingSurface: "15-25%"
    primaryInk: "10-20%"
    accentTotal: "5-15%"
    neonAccentMax: "8%"
  modePalettes:
    papercut-editorial:
      background: "#F2E8CC"
      surface: "#FFF6DF"
      text: "#211B16"
      secondary: "#4D9562"
      accent: "#F06B3E"
      dark: "#30241C"
    pixel-retro:
      background: "#F0E85E"
      surface: "#8DB7D6"
      text: "#171717"
      secondary: "#4A82BD"
      accent: "#EDEB55"
      dark: "#172019"
    organic-commerce:
      background: "#FFF9E9"
      surface: "#F8F0D8"
      text: "#282023"
      secondary: "#2E6D38"
      accent: "#DCEB86"
      dark: "#2A2025"
    terminal-tech:
      background: "#101310"
      surface: "#20231F"
      text: "#F0EEE5"
      secondary: "#91FF66"
      accent: "#B1FF76"
      dark: "#090B09"
    retro-mac:
      background: "#F4F4F0"
      surface: "#9CCBE8"
      text: "#111111"
      secondary: "#F2C63D"
      accent: "#6D9CCD"
      dark: "#1A1A1A"
    playful-packaging:
      background: "#F7B51A"
      surface: "#FFEAC1"
      text: "#11110F"
      secondary: "#55C4B0"
      accent: "#F4753C"
      dark: "#080807"
    cartoon-campaign:
      background: "#C9EE8F"
      surface: "#59C0AD"
      text: "#090A08"
      secondary: "#F7BA19"
      accent: "#E77393"
      dark: "#080907"
    glitch-fashion:
      background: "#8EABC1"
      surface: "#D6D3C8"
      text: "#F5EFE8"
      secondary: "#5BA766"
      accent: "#E58A68"
      dark: "#181818"

typography:
  families:
    displayCut:
      value: "'Papercuto', 'Bowlby One SC', 'Arial Black', sans-serif"
      purpose: "Irregular cut-paper, chunky, handmade display headings."
    displayHeavy:
      value: "'Arial Black', 'Helvetica Neue', Arial, sans-serif"
      purpose: "Massive blunt campaign and editorial headlines."
    displayRounded:
      value: "'Arial Rounded MT Bold', 'Nunito Sans', sans-serif"
      purpose: "Friendly organic-commerce wordmarks and soft display copy."
    pixel:
      value: "'Pixelify Sans', 'Press Start 2P', monospace"
      purpose: "Bitmap headings, retro-computing labels, low-resolution display copy."
    mono:
      value: "'IBM Plex Mono', 'Space Mono', 'Courier New', monospace"
      purpose: "Technical captions, body copy in terminal/pixel modes, metadata."
    serifEditorial:
      value: "'Cormorant Garamond', Georgia, serif"
      purpose: "High-contrast editorial headlines and retro-mac art direction."
    sans:
      value: "'Helvetica Neue', Arial, sans-serif"
      purpose: "Readable utility text, navigation, ecommerce controls."
    hand:
      value: "'Patrick Hand', 'Comic Sans MS', cursive"
      purpose: "Small annotations, doodle labels, casual notes."
  styles:
    displayHero:
      fontSize: "clamp(4.5rem, 12vw, 11rem)"
      fontWeight: "900"
      lineHeight: "0.82"
      letterSpacing: "-0.045em"
      maxMeasure: "9ch"
    displaySection:
      fontSize: "clamp(3rem, 7vw, 6.5rem)"
      fontWeight: "900"
      lineHeight: "0.88"
      letterSpacing: "-0.035em"
      maxMeasure: "12ch"
    editorialHero:
      fontSize: "clamp(3.75rem, 9vw, 8.5rem)"
      fontWeight: "500"
      lineHeight: "0.92"
      letterSpacing: "-0.03em"
      maxMeasure: "13ch"
    h1:
      fontSize: "clamp(2.8rem, 5vw, 5rem)"
      fontWeight: "800"
      lineHeight: "0.95"
      letterSpacing: "-0.03em"
    h2:
      fontSize: "clamp(2rem, 3.8vw, 3.75rem)"
      fontWeight: "800"
      lineHeight: "1.0"
      letterSpacing: "-0.02em"
    h3:
      fontSize: "clamp(1.35rem, 2vw, 2rem)"
      fontWeight: "700"
      lineHeight: "1.08"
      letterSpacing: "-0.015em"
    bodyLg:
      fontSize: "1.125rem"
      fontWeight: "400"
      lineHeight: "1.6"
      maxMeasure: "62ch"
    body:
      fontSize: "1rem"
      fontWeight: "400"
      lineHeight: "1.55"
      maxMeasure: "68ch"
    bodyMono:
      fontSize: "0.92rem"
      fontWeight: "400"
      lineHeight: "1.55"
      letterSpacing: "0.015em"
      maxMeasure: "58ch"
    label:
      fontSize: "0.78rem"
      fontWeight: "700"
      lineHeight: "1.2"
      letterSpacing: "0.06em"
    micro:
      fontSize: "0.6875rem"
      fontWeight: "500"
      lineHeight: "1.25"
      letterSpacing: "0.04em"

spacing:
  base: "4px"
  scale:
    0: "0"
    1: "4px"
    2: "8px"
    3: "12px"
    4: "16px"
    5: "20px"
    6: "24px"
    8: "32px"
    10: "40px"
    12: "48px"
    16: "64px"
    20: "80px"
    24: "96px"
    32: "128px"
    40: "160px"
  sectionDesktop: "clamp(96px, 10vw, 160px)"
  sectionMobile: "64px"
  contentGapDesktop: "48px"
  contentGapMobile: "28px"

radius:
  none: "0"
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "22px"
  xl: "32px"
  pill: "999px"
  organic: "48% 52% 44% 56% / 55% 45% 55% 45%"
  rule: "Do not default all components to rounded rectangles."

borders:
  hairline: "1px solid currentColor"
  standard: "2px solid currentColor"
  heavy: "4px solid currentColor"
  cartoon: "5px solid #090A08"
  terminal: "1px solid #343934"
  handDrawnWidth: "1.5px"
  pixelGridWidth: "1px"

shadows:
  none: "none"
  paper: "0 8px 24px rgba(30, 24, 18, 0.10)"
  hard: "6px 6px 0 #111111"
  cartoon: "5px 5px 0 #090A08"
  window: "2px 2px 0 rgba(0,0,0,0.45)"
  terminalGlow: "0 0 18px rgba(169,255,106,0.12)"
  rule: "Prefer no shadow, hard shadow, or subtle paper shadow over soft floating SaaS elevation."

layout:
  maxWidth: "1440px"
  editorialMaxWidth: "1680px"
  contentPaddingDesktop: "clamp(24px, 4vw, 72px)"
  contentPaddingMobile: "20px"
  gridColumnsDesktop: 12
  gridColumnsTablet: 8
  gridColumnsMobile: 4
  gridGapDesktop: "24px"
  gridGapMobile: "16px"
  asymmetryOffsetMax: "64px"
  overlapMaxDesktop: "18%"
  overlapMaxMobile: "8%"
  preferredHeroHeight: "min(900px, 92vh)"
  sectionMinHeightEditorial: "70vh"

breakpoints:
  xs: "360px"
  sm: "640px"
  md: "768px"
  lg: "1024px"
  xl: "1280px"
  xxl: "1536px"

motion:
  duration:
    instant: "100ms"
    fast: "160ms"
    normal: "280ms"
    slow: "520ms"
    reveal: "700ms"
  easing:
    standard: "cubic-bezier(0.22, 1, 0.36, 1)"
    snappy: "cubic-bezier(0.2, 0.9, 0.2, 1)"
    mechanical: "steps(6, end)"
  hoverTranslate: "-2px"
  hoverRotateMin: "-1deg"
  hoverRotateMax: "1deg"
  reducedMotionRequired: true

texture:
  paperNoiseOpacity: "0.03"
  filmGrainOpacity: "0.045"
  terminalGridOpacity: "0.16"
  halftoneOpacity: "0.18"
  lineArtOpacity: "0.14"
  maxSimultaneousTextures: 2
  rule: "Texture supports materiality; it must never reduce legibility."

imagery:
  photo:
    saturation: "0.82"
    contrast: "0.96"
    warmth: "slightly warm"
    grain: "subtle"
    crop: "editorial"
  pixelArt:
    imageRendering: "pixelated"
    interpolation: "nearest-neighbor"
    preferredScale: "integer"
  illustration:
    outlineMin: "2px"
    outlineMax: "5px"
    fillStyle: "flat or lightly textured"
    shadingStyle: "halftone, stipple, or none"
  glitch:
    pixelBlockSizeMin: "12px"
    pixelBlockSizeMax: "56px"
    maxAffectedImageArea: "35%"
  cutPaper:
    edgeRoughness: "subtle"
    rotationRange: "-3deg to 3deg"
    badgeRotationRange: "-7deg to 7deg"

icons:
  preferred:
    - "bitmap"
    - "hand-drawn outline"
    - "bold flat cartoon"
    - "retro desktop icon"
  avoid:
    - "generic glossy 3D"
    - "multicolor gradient icons"
    - "unmodified default icon-library hero graphics"
  defaultStrokeWidth: "2px"
  cartoonStrokeWidth: "4px"

controls:
  minTargetSize: "44px"
  primaryButtonHeight: "48px"
  compactButtonHeight: "36px"
  inputHeight: "48px"
  focusWidth: "2px"
  focusOffset: "4px"

zIndex:
  base: 0
  texture: 2
  content: 10
  decoration: 20
  navigation: 40
  modal: 100
  toast: 120

accessibility:
  bodyTextContrast: "WCAG AA minimum"
  largeTextContrast: "WCAG AA minimum"
  keyboardFocusRequired: true
  semanticHTMLRequired: true
  reducedMotionRequired: true
  decorativeTextCanContainCriticalInfo: false
  minimumBodyFontSize: "16px"
---

# DESIGN.md

## 1. Overview

This system defines a **highly art-directed, expressive editorial web language** synthesized from all supplied references: handmade papercut typography, retro pixel script over landscape photography, glitch-fashion collage, organic nature-led ecommerce, lime pixel-editorial agency design, dark terminal/Web3 UI, classic Macintosh-inspired storytelling, playful packaging illustration, and bold cartoon campaign pages.

These references differ on the surface, but their shared DNA is unusually consistent:

- typography behaves like imagery;
- layouts are asymmetric and poster-like;
- imperfection is deliberate;
- low-resolution, handmade, or tactile graphics are treated as premium design materials;
- palettes are narrow and confident;
- sections use strong color blocking;
- controls stay simple while art direction carries personality;
- generic card grids are minimized;
- every composition has an obvious visual idea.

Do **not** merge every aesthetic simultaneously. Select one dominant mode per page, then optionally one secondary mode occupying no more than about 30% of the visual language.

## 2. Non-Negotiable Design DNA

### Expressive typography

Every major page needs at least one typographic moment with obvious personality: cut-paper display lettering, bitmap type, a massive blunt sans, elegant editorial serif, rounded lowercase branding, hand-lettered campaign copy, or oversized symbols.

Do not build the entire interface using one neutral sans-serif at predictable sizes.

### Intentional imperfection

Accept slightly irregular silhouettes, small rotations, hand-drawn paths, pixel stair-stepping, halftone shading, controlled baseline variation, and selective image fragmentation.

Do not randomize every element. Imperfection must look authored, not broken.

### Editorial composition

Treat pages like a sequence of posters, magazine spreads, product advertisements, or digital exhibitions.

Prefer dramatic hierarchy, asymmetric grids, large negative space, selective overlap, floating annotations, unusual column spans, and section-specific compositions.

Avoid repeating `heading + paragraph + three equal cards` throughout the page.

### Limited palettes

A typical section should use one dominant surface, one primary ink, one supporting color, and one accent. Do not introduce unrelated colors just because a UI library includes them.

### Tactile materiality

Use paper grain, film grain, halftone, technical grid, line art, or pixel texture where appropriate. Never use more than two texture systems at once.

## 3. Mode Selection

### Decision matrix

| Product / content | Preferred mode |
|---|---|
| Art, creative tool, portfolio, cultural project | `papercut-editorial` or `retro-mac` |
| Fashion, music, youth culture, experimental brand | `glitch-fashion` or `pixel-retro` |
| Garden, food, wellness, nature-led shop | `organic-commerce` |
| Developer platform, crypto, technical community | `terminal-tech` |
| Computing history, design archive, educational story | `retro-mac` |
| Food packaging, mascot-led consumer brand | `playful-packaging` |
| Game, entertainment, comic campaign, themed commerce | `cartoon-campaign` |
| Nostalgia-first digital experience | `pixel-retro` |

When uncertain, default to `papercut-editorial`.

### Mixing rules

Use at most one secondary mode.

Good combinations:

- `papercut-editorial` + `pixel-retro`
- `organic-commerce` + `playful-packaging`
- `terminal-tech` + `pixel-retro`
- `retro-mac` + `papercut-editorial`
- `cartoon-campaign` + `playful-packaging`
- `glitch-fashion` + `pixel-retro`

The secondary mode should appear through only one or two channels such as typography + icons, color + texture, or illustration + dividers.

## 4. Color Usage

Use confident flat fields or photography for large areas. Preferred dominant surfaces are warm cream, acidic yellow, pale lime, mustard, charcoal, near-black, washed sky blue, or natural green photography.

Use orange, electric lime, pink, or bright yellow primarily for CTAs, badges, active states, markers, small decorative type, or one illustration detail. High-energy colors should remain accents rather than becoming visual static.

For terminal layouts, near-black and charcoal form the base. Off-white handles most readable text, while electric lime is reserved for hierarchy and electronic emphasis.

## 5. Typography

Large typography may overlap imagery, extend beyond a container, sit behind illustrations, crop against edges, or become a decorative silhouette. Body text may not.

Use `displayCut` for handmade poster moments. Use `displayHeavy` for campaign statements and fashion/editorial headlines. Use `displayRounded` for friendly lifestyle and organic commerce. Use `pixel` for nostalgic bitmap branding and large retro labels. Use `serifEditorial` for cultural, historical, or high-contrast storytelling. Use `sans` or `mono` for readable copy.

Pixel fonts are forbidden for long essential paragraphs.

Microcopy may be uppercase mono, handwritten, bitmap, or narrow sans, but should remain secondary.

## 6. Layout and Composition

Use the 12-column desktop grid as invisible scaffolding. The design may look loose, but it must not actually be arbitrary.

Useful spans:

- hero title: 6–10 columns;
- hero media: 5–8 columns;
- annotation: 2–4 columns;
- side note: 2–3 columns;
- feature illustration: 4–7 columns.

Asymmetry is preferred. Put titles and supporting copy on different vertical levels. Offset hero art. Use unequal columns. Allow one element to break the grid.

Major sections should feel like different compositions rather than repeated templates.

Overlap is encouraged for display text, labels, badges, illustrations, and retro windows. Never overlap dense body text, form labels, or accessibility-critical controls.

## 7. Photography

Photography should feel editorial rather than stock-like.

Prefer nature, interiors, fabric, landscapes, packaging, tactile objects, closeups, and documentary-style people.

Use slightly warm color, muted saturation, subtle grain, and decisive cropping. Avoid over-HDR treatment.

When placing display text on photography, use high contrast through intelligent crop selection before reaching for generic dark overlays.

## 8. Pixel and Low-Resolution Graphics

Pixel art is a first-class visual material.

Scale pixel assets by integer multiples when possible.

```css
.pixel-art {
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
```

A pixel heart, planet, cursor, flower, hand, or emblem may become a huge hero image. The contrast between primitive pixels and modern layout is desirable.

Do not pixelate every visual element. Usually pick one main pixel illustration, bitmap display type, or one pixel icon system.

## 9. Papercut and Handmade Graphics

Use rough polygons, irregular stars, hand-drawn capsules, asymmetric blobs, cut-paper labels, imperfect circles, small sparkles, doodle arrows, and hand-drawn underlines.

Edges should feel cut rather than randomly distressed. Avoid excessive torn-paper filters.

Annotations can include small circles, notes, stars, arrows, and labels, but they must not compete with primary content.

## 10. Organic Commerce

The organic-commerce mode should remain fully usable as a real shop.

Hero recipe:

- full-bleed natural photography;
- oversized rounded wordmark;
- tiny supporting phrase;
- floating minimal navigation;
- one simple CTA or direct path into products.

Product rows should look like specimens on paper rather than large generic ecommerce cards. Show the product image, title, compact price/variant control, and a small action with generous whitespace.

Irregular cream blobs on photography may hold editorial copy.

Pill navigation is acceptable specifically because it belongs to this mode. Do not spread pills across the entire design system.

## 11. Terminal-Tech

Use near-black surfaces, charcoal modular panels, technical grids, off-white text, and controlled electric lime accents.

Technical grids should stay subtle. A typical grid cell is around 32px with 8–18% opacity.

Panels should feel tool-like: small or zero radius, 1px borders, mono labels, dense metadata, and clear modular divisions.

Use one large pixel object as the hero motif rather than a generic glowing 3D tech sphere.

## 12. Retro Mac / Early Computing

Use classic desktop and window motifs selectively: thin title bars, 1px black frames, pale surfaces, bitmap controls, and compact iconography.

Nested windows are allowed when they support storytelling.

A strong typography recipe is editorial serif page title + heavy sans section title + mono or bitmap interface labels.

Background line art may appear at low opacity, like sketches, diagrams, or archival drawings.

## 13. Glitch-Fashion

Use blocky image corruption on one focal image. Affect roughly 10–35% of the image with rectangular blocks while preserving recognizability.

Typography may be oversized, cropped, rotated, mixed in scale, and allowed to cross image boundaries.

Fine grid overlays and tiny Swiss-style microcopy create order around the chaos.

## 14. Playful Packaging

Mascots should have simple silhouettes, expressive faces, thick outlines, flat fills, and light stipple or halftone texture.

Mix chunky branded display type, hand-lettered statements, and condensed utility copy. Do not use a pile of unrelated display fonts.

Treat packaging itself as hero art. Allow floating packs, rotated boxes, cropped product clusters, and hand-drawn marks.

## 15. Cartoon Campaign

The strongest default structure is:

1. bold flat section color;
2. giant headline;
3. one dominant cartoon illustration;
4. one CTA;
5. short supporting copy;
6. irregular section boundary.

Use thick black outlines for major cartoon assets.

Section transitions can use hills, spikes, blobs, silhouettes, grass, or irregular drawn edges.

## 16. Navigation

Navigation must remain visually quieter than the hero.

Default structure: wordmark, 3–5 links, one optional CTA, and one optional utility icon.

Mode-specific treatments:

- `papercut-editorial`: simple links with a hand-drawn active underline;
- `organic-commerce`: floating dark/cream pills;
- `terminal-tech`: compact mono labels and separators;
- `retro-mac`: menu-bar treatment;
- `playful-packaging`: compact black text on a flat brand surface;
- `cartoon-campaign`: simple links with one outlined CTA.

Do not default to translucent glass navigation.

## 17. Buttons and Calls to Action

Use one visually dominant CTA per composition.

The CTA must inherit the selected mode rather than using one universal component skin.

Examples:

- papercut: irregular bordered label or cut-paper tab;
- organic: compact dark pill or cream outlined button;
- terminal: square mono button with a 1px technical border;
- retro-mac: classic bordered control with minimal beveling;
- playful-packaging: compact high-contrast label with hand-drawn energy;
- cartoon-campaign: thick outlined rectangle with a hard black shadow.

Preferred hover behavior:

- translate by 1–2px;
- rotate by no more than 1 degree;
- shift a hard shadow;
- invert two flat colors;
- animate an underline;
- reveal or nudge a tiny icon.

Avoid dramatic 3D tilt, giant spring scaling, permanent glow, or hover transformations that change the layout.

## 18. Cards

Cards are **not** the default unit of composition.

Before creating a card, ask whether the content genuinely represents a discrete object. If not, use an editorial group instead.

Prefer:

- columns;
- paper labels;
- image cutouts;
- stacked text groups;
- floating retro windows;
- horizontal product specimens;
- asymmetrical feature clusters;
- flat color regions.

When cards are necessary, use minimal radius, strong type hierarchy, a mode-specific border, and little or no shadow.

Do not generate six identical cards merely because six features exist.

## 19. Forms and Inputs

Forms must remain more conventional than surrounding decorative areas.

Use expressive styling **around** the form rather than making each input difficult to understand.

Inputs should have:

- at least 48px height;
- strong contrast;
- a visible border or surface distinction;
- readable labels outside the field;
- a mode-appropriate background.

Always preserve a strong keyboard focus treatment.

```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}
```

Error states must use semantic `state.error` and include text or icon feedback rather than relying on color alone.

## 20. Decorative Elements

Decoration exists to strengthen hierarchy and brand character.

Allowed decorative vocabulary includes:

- irregular starbursts;
- four-point sparkles;
- hand-drawn arrows;
- pixel cursors;
- jagged lines;
- oversized quotation marks;
- chunky asterisks;
- line-art drawings;
- halftone patches;
- bitmap clouds or planets;
- doodle circles;
- irregular blobs;
- hand-drawn underlines.

Do not distribute decorations evenly. Strong pages alternate between visually dense zones and quiet zones.

## 21. Dividers and Section Boundaries

Do not default every transition to a thin gray `<hr>`.

Use mode-specific boundaries when useful:

- papercut: irregular cut edge or hand-drawn zigzag;
- pixel-retro: staircase or bitmap edge;
- organic-commerce: soft wave or natural photographic edge;
- terminal-tech: thin grid rule or neon marker;
- retro-mac: window bar or simple black rule;
- playful-packaging: hand-drawn sweep or illustrated separator;
- cartoon-campaign: hills, spikes, silhouettes, grass, or blob edges;
- glitch-fashion: crop jump, grid break, or hard image splice.

Use ordinary whitespace when an expressive divider would add noise.

## 22. Icons

Choose one icon language per section.

Do not mix pixel icons, Lucide-style line icons, retro Mac bitmap icons, and thick cartoons inside the same component group.

Preferred systems:

- bitmap icons for pixel/terminal modes;
- classic desktop glyphs for retro-mac;
- custom loose outlines for papercut/editorial;
- bold outlined flat drawings for cartoon/packaging;
- restrained monochrome utility icons for organic-commerce.

If a stock icon library is used, adjust presentation, weight, container, and scale so it belongs to the selected mode.

## 23. Texture Rules

### Paper grain

Use for `papercut-editorial`, `retro-mac`, `playful-packaging`, and `glitch-fashion`.

Target opacity: `0.02–0.05`.

### Film grain

Use on landscape and lifestyle photography when a nostalgic editorial effect is desired.

Target opacity: `0.02–0.05`.

### Halftone / stipple

Use for `playful-packaging`, `cartoon-campaign`, and selective `glitch-fashion` illustration.

Target opacity: `0.10–0.20`.

### Technical grid

Use for `terminal-tech`, `pixel-retro`, or experimental fashion layouts.

Target opacity: `0.08–0.18`.

### Line art

Use behind retro-mac or editorial compositions.

Target opacity: `0.08–0.15`.

Never stack paper grain + halftone + grid + scanlines + chromatic aberration simply because they exist. Two simultaneous texture systems is the hard maximum.

## 24. Motion

Motion should correspond to the visual material.

### Physical modes

For papercut, organic, packaging, and cartoon modes, prefer:

- paper sliding;
- slight rotation;
- reveal from behind another layer;
- a few pixels of bounce;
- illustration pieces entering independently;
- hand-drawn underline animation.

### Digital modes

For pixel, terminal, and retro-mac modes, prefer:

- stepped reveal;
- cursor blink;
- window opening;
- pixel wipe;
- grid fade;
- short terminal type-on sequences;
- low-frame-rate decorative motion.

### Glitch mode

Use short, occasional glitch bursts. Do not shake the interface continuously.

Never animate long body copy character-by-character.

Always respect `prefers-reduced-motion`.

## 25. Responsive Design

Responsive behavior must preserve personality rather than merely shrink the desktop composition.

### Desktop

Use the full editorial system:

- large overlaps;
- extreme display scale;
- floating annotations;
- offset grids;
- wide image crops;
- strong negative space.

### Tablet

Reduce overlap by roughly 30–40% while preserving asymmetry and one dominant decorative motif.

### Mobile

Recompose the design into vertical poster-like panels.

Keep:

- one strong visual per viewport;
- large display typography;
- the dominant color-blocking idea;
- one recognizable decorative language.

Simplify:

- dense microcopy;
- multi-layer overlaps;
- wide nested windows;
- decorative elements with no informational purpose.

Recommended mobile hero display size:

```css
font-size: clamp(3rem, 16vw, 6rem);
```

Do not create a tiny desktop screenshot disguised as a mobile layout.

## 26. Accessibility

Expressive design is not permission to create hostile UX.

Requirements:

- WCAG AA contrast for body text;
- minimum 16px body copy;
- visible keyboard focus;
- at least 44×44px touch targets;
- semantic heading order;
- alt text for meaningful imagery;
- reduced-motion support;
- critical information must not exist only in decorative typography;
- controls cannot rely solely on icons;
- pixel type cannot be used for long essential copy.

If texture harms legibility, remove the texture.

If overlap harms comprehension, remove the overlap.

If the artistic treatment conflicts with task completion, task completion wins.

## 27. Content Density

Use two alternating density bands.

### Editorial band

Characteristics:

- large type;
- few words;
- large visual element;
- generous negative space;
- stronger color or photography.

Use for heroes, campaign statements, product launches, quotes, and key story moments.

### Information band

Characteristics:

- smaller text;
- structured columns;
- simpler surfaces;
- restrained decoration;
- higher information density.

Use for product details, FAQs, forms, documentation, specifications, and technical explanations.

Alternating these bands creates rhythm and prevents visual exhaustion.

## 28. Composition Recipes

### 28.1 Papercut editorial hero

Use:

- dark olive, brown, or photographic background;
- giant cream cut-paper headline;
- one green supporting color;
- one orange starburst or accent badge;
- tiny handwritten annotations;
- a small irregular underline or sparkle;
- tactile grain.

Do not use a centered dashboard mockup.

### 28.2 Pixel landscape poster

Use:

- full-bleed landscape photography;
- giant yellow or blue pixel-script/bitmap display word;
- tiny clean sans labels in distant corners;
- film grain;
- one strong flat-color follow-up panel.

Preserve large empty areas around the main word.

### 28.3 Glitch editorial portrait

Use:

- full-height portrait or fashion image;
- oversized cropped headline crossing the image;
- fine technical grid;
- selective rectangular pixel corruption;
- tiny editorial microcopy;
- muted four-to-five-color palette.

Keep the subject recognizable.

### 28.4 Organic shop hero

Use:

- lush natural photography;
- huge rounded lowercase wordmark;
- minimal floating navigation;
- thin announcement/marquee strip;
- cream product area immediately afterward;
- spacious product specimens rather than boxed cards.

### 28.5 Lime pixel editorial section

Use:

- pale lime background;
- giant black/white pixel illustration;
- mono body copy;
- sparse icon groups;
- oversized quotation mark, arrow, or symbol;
- unusual empty regions;
- minimal outlined buttons.

### 28.6 Terminal community hero

Use:

- near-black technical grid;
- giant pixel planet/object;
- acid-lime field as a major section break;
- device/interface panels;
- bitmap heading;
- dense mono metadata;
- small lime call-to-action labels.

### 28.7 Retro Mac story page

Use:

- white or light gray paper surface;
- low-opacity line-art background;
- serif + sans headline pairing;
- classic desktop window;
- bitmap desktop icons;
- pale blue accent field;
- small yellow accent graphic;
- narrative text blocks below the simulated desktop.

### 28.8 Playful packaging campaign

Use:

- mustard or cream base;
- product packaging as oversized cutout art;
- hand-lettered statements;
- cartoon mascots;
- halftone/stipple shading;
- tiny utility copy;
- strong black lettering.

### 28.9 Cartoon landing page

Use:

- large flat color bands;
- giant uppercase heading;
- one character/product illustration per section;
- thick black outlines;
- one simple CTA;
- irregular section silhouette;
- restrained body copy.

## 29. AI Decision Rules

An AI agent must make design decisions in this order:

1. Identify the product category, audience, and emotional tone.
2. Select exactly one dominant mode.
3. Optionally select one secondary mode.
4. Lock the matching palette before designing components.
5. Select no more than three type families: display, body, and annotation/utility.
6. Define one hero visual motif.
7. Define one texture treatment.
8. Define one icon vocabulary.
9. Define one section-boundary vocabulary.
10. Build composition from editorial groups rather than a card grid.
11. Add decoration only after hierarchy works without it.
12. Run the anti-generic checklist.
13. Test desktop, tablet, and mobile independently.

Do not begin by selecting a landing-page template.

## 30. Anti-Generic Rules

The following are explicit failures unless the user requests them:

- centered eyebrow badge + heading + paragraph + two buttons + dashboard;
- six identical rounded feature cards;
- translucent glass navigation over a gradient;
- purple/blue AI gradients;
- floating glossy 3D spheres;
- random mesh gradients;
- giant blur blobs;
- generic startup illustrations;
- every button as a pill;
- every section inside a rounded container;
- excessive soft `box-shadow`;
- decorative waves unrelated to the active mode;
- monochrome minimalism with no expressive focal point;
- fake brutalism consisting only of thick black borders;
- fake retro styling consisting only of a pixel font;
- random nostalgia motifs with no compositional logic.

A page can be simple. It cannot be anonymous.

## 31. Quality Tests

### Thumbnail test

At 20% zoom, the page should still show a clear focal point, recognizable section rhythm, deliberate color blocking, and strong hierarchy.

### Squint test

When visually blurred, the composition should retain a dominant mass, supporting mass, accent, and negative space.

### Typography test

The page must contain one expressive display treatment, readable body text, and a clear metadata hierarchy.

### Texture test

Turning texture off should not destroy the composition. Texture is enhancement, not structure.

### Mode test

A reviewer should be able to identify the dominant visual mode without reading this document.

### Genericity test

If replacing the colors and logo would make the page indistinguishable from a common SaaS template, redesign it.

## 32. Implementation Notes

Use semantic CSS custom properties for each selected mode.

```css
:root {
  --bg: #F2E8CC;
  --surface: #FFF6DF;
  --text: #211B16;
  --secondary: #4D9562;
  --accent: #F06B3E;
}
```

For alternate modes, override semantic variables rather than rewriting every component.

Prefer:

- CSS Grid for editorial layout;
- SVG for irregular borders and line art;
- pseudo-elements for subtle texture;
- nearest-neighbor scaling for pixel assets;
- CSS masks or `clip-path` for simple blobs;
- actual custom illustration assets for prominent brand graphics;
- semantic HTML underneath unconventional visual composition.

Avoid extreme filter chains that attempt to fake every effect procedurally.

## 33. Component Architecture Guidance

Separate semantic primitives from visual modes.

Recommended conceptual structure:

```text
primitives/
  Typography
  Button
  Label
  Section
  Media
  Divider
  Icon
  Input

patterns/
  EditorialHero
  ProductSpecimen
  QuoteSpread
  FeatureCluster
  RetroWindow
  TerminalPanel
  OrganicCopyBlob
  CampaignBand
  PixelHero
  GlitchPortrait

modes/
  papercut-editorial
  pixel-retro
  organic-commerce
  terminal-tech
  retro-mac
  playful-packaging
  cartoon-campaign
  glitch-fashion
```

The same semantic component may have different visual adapters per mode. Do not duplicate business logic just to achieve styling variation.

## 34. Mode-Specific Component Guidance

### Papercut editorial

**Buttons:** rough label shape, 1–2px ink border, little or no shadow.

**Cards:** paper clipping or magazine panel rather than generic rounded surface.

**Badges:** hand-drawn capsule, starburst, or irregular circle.

**Icons:** doodle or rough outline.

**Hero:** giant cut-paper lettering over tactile photography.

### Pixel retro

**Buttons:** compact bitmap or mono label, square or lightly rounded.

**Cards:** rare; use flat panels or pixel windows.

**Badges:** tiny bitmap labels.

**Icons:** true bitmap language.

**Hero:** enormous pixel word or icon against photo/color field.

### Organic commerce

**Buttons:** compact dark or cream pill, used selectively.

**Cards:** avoid frames; let products float on warm paper.

**Badges:** soft compact labels.

**Icons:** simple dark outline.

**Hero:** nature photography with huge rounded branding.

### Terminal tech

**Buttons:** square, 1px border, mono label.

**Panels:** charcoal modular blocks.

**Badges:** tiny lime terminal labels.

**Icons:** pixel or technical mono symbols.

**Hero:** large pixel artifact on dark grid.

### Retro Mac

**Buttons:** classic simple rectangle with strong black edge.

**Panels:** window metaphor is acceptable.

**Badges:** small system labels or black pills outside the simulated OS area.

**Icons:** bitmap desktop icons.

**Hero:** editorial heading above or around a vintage-computing scene.

### Playful packaging

**Buttons:** small bold labels with black outline.

**Cards:** replace with illustrated feature statements where possible.

**Badges:** circular certification-style marks, doodles, or stamped shapes.

**Icons:** custom cartoon marks.

**Hero:** physical product + mascot + large brand typography.

### Cartoon campaign

**Buttons:** thick black outline + hard shadow.

**Cards:** avoid; use full-width color sections.

**Badges:** comic labels and stickers.

**Icons:** thick outlined cartoons.

**Hero:** massive message + one narrative illustration.

### Glitch fashion

**Buttons:** restrained; usually simple black/white editorial controls.

**Cards:** avoid unless intentionally framed like magazine modules.

**Badges:** tiny technical labels.

**Icons:** minimal monochrome.

**Hero:** oversized typography crossing a selectively corrupted portrait.

## 35. Hero Rules

The hero must establish the visual mode within the first viewport.

A strong hero normally contains only three to five of these:

- oversized title;
- one dominant visual;
- one short supporting paragraph;
- one CTA;
- one tiny annotation system;
- one badge;
- navigation.

Do not include all seven unless the composition remains extremely controlled.

The hero must not become a feature checklist.

## 36. Product and Commerce Rules

For commerce-oriented pages, let product imagery carry more visual weight than UI chrome.

Prefer:

- physical packs isolated on paper;
- tilted product clusters;
- compact quantity/price controls;
- editorial product photography;
- brief benefit statements;
- visual certifications or attributes.

Avoid building an entire store out of oversized generic cards with stock drop shadows.

## 37. Illustration Rules

Illustration should use one coherent rendering system per page.

Choose one:

- flat thick-outline cartoon;
- pixel art;
- hand-cut paper;
- loose doodle;
- retro desktop iconography;
- halftone mascot system.

Do not mix multiple unrelated illustration styles simply to make sections feel different.

## 38. Wordmarks and Brand Typography

When a custom brand font is unavailable, imitate **structural qualities**, not exact proprietary letterforms.

For example:

- chunky irregular geometry;
- rounded lowercase mass;
- blunt uppercase width;
- pixel stair-stepping;
- hand-painted unevenness.

Never redraw a reference logo exactly.

## 39. White Space

White space is active composition.

Large empty areas are encouraged when they create tension around a strong visual element.

Do not fill empty regions with extra cards, badges, gradients, or decorative copy merely because they appear unused.

Pixel-editorial and retro layouts especially benefit from strange but deliberate emptiness.

## 40. Section Rhythm

A long page should alternate visual behavior.

Example rhythm:

1. loud hero;
2. quiet information strip;
3. visual product/feature section;
4. editorial statement;
5. dense information section;
6. illustrated campaign moment;
7. quiet footer.

Do not make every section equally loud.

## 41. Footer

The footer should feel like the final panel of the visual story.

Possible treatments:

- dark olive or brown field with huge cream wordmark;
- simple lime terminal strip;
- classic desktop footer/menu-bar motif;
- mustard field with mascot cluster;
- pale lime field with pixel icon and compact navigation.

Keep legal and utility text readable even when the footer is expressive.

## 42. Copy Presentation

Keep campaign headlines concise.

Large decorative type works best with short phrases, usually 2–8 words.

Long paragraphs belong in information bands and should use the readable body family.

Do not use all caps for multi-paragraph copy.

Microcopy can be quirky, but key instructions must remain direct.

## 43. Controlled Randomness

Use curated irregularity only.

Recommended bounds:

- ordinary rotation: `-3deg` to `3deg`;
- large badge rotation: up to `±7deg`;
- local position offsets: `4–24px`;
- glitch block coverage: max `35%` of focal imagery;
- section overlap: max `18%` desktop and `8%` mobile.

Never randomize these values on every render. Art direction must remain stable.

## 44. Accessibility in Expressive Typography

Decorative display text should remain real HTML text whenever possible.

If a headline must be rendered as artwork for a special shape, provide an equivalent semantic heading in the DOM without duplicating it for screen readers.

Do not communicate navigation or actions through stylized lettering alone.

## 45. Performance Guidance

Texture and art direction should not produce a bloated page.

Prefer:

- one compressed texture reused through CSS;
- SVG for line art;
- WebP/AVIF for photography when supported;
- small nearest-neighbor pixel assets;
- CSS for simple blobs and hard shadows.

Avoid multiple autoplaying background videos, enormous PNG textures, or dozens of decorative canvases.

## 46. Source and Copyright Rule

The supplied images are visual references only.

AI agents must not reproduce:

- the original company names;
- exact wordmarks;
- slogans;
- packaging artwork;
- characters;
- proprietary illustrations;
- exact compositions.

Extract the **design grammar**, then create new content and original arrangements.

## 47. Anti-Patterns

Never default to:

- glassmorphism
- liquid glass
- generic bento grids
- identical rounded cards
- blue/purple gradients
- neon glow
- giant blurred gradient blobs
- perfectly symmetrical hero sections
- centered SaaS landing-page layouts
- excessive pill buttons
- dashboard mockups floating in the hero
- sterile `Inter + white background + purple CTA`
- generic AI-generated 3D illustrations
- excessive blur
- glossy chrome
- unnecessarily futuristic visuals

Do not turn the reference into a generic modern startup site with a cream color swap.

The **composition, typography, imperfection, and tactile character** matter more than copying individual colors.

## 48. If the Project Is a Website

If applying this style to a website, ensure these traits appear:

- a strong hero with large expressive type
- visible contrast between editorial and utility UI
- product/content modules that remain actually usable
- at least one soft organic block
- at least one more experimental typographic or pixel-based moment
- clear navigation
- breathable sectioning
- rich texture and image treatment
- a bottom section that feels like a campaign spread or ad page

---

## 49. If the Project Is a Poster or Campaign Graphic

If applying this style to a poster, emphasize:
- oversized expressive headline
- heavier texture
- more dramatic overlap
- stronger pixel or papercut treatment
- less emphasis on strict UI usability
- sharper hierarchy by scale and texture

## 50. Final Checklist

Before shipping, verify:

- [ ] Exactly one dominant mode is obvious.
- [ ] No more than one secondary mode is used.
- [ ] The page palette is limited and deliberate.
- [ ] At least one typographic element acts as a visual object.
- [ ] Body copy remains highly readable.
- [ ] The layout contains intentional asymmetry.
- [ ] Negative space is used as an active compositional tool.
- [ ] Generic card UI is minimized.
- [ ] One coherent icon language is used per section.
- [ ] Texture is subtle and mode-appropriate.
- [ ] Photography or illustration has deliberate editorial treatment.
- [ ] The primary CTA is visually obvious.
- [ ] Hover states are restrained and material-appropriate.
- [ ] Mobile has been recomposed rather than merely scaled down.
- [ ] Keyboard focus remains visible.
- [ ] Reduced motion is supported.
- [ ] Touch targets meet minimum size requirements.
- [ ] No reference brand, logo, text, character, or proprietary artwork is copied.
- [ ] The interface feels authored rather than templated.
- [ ] The design still works if textures are temporarily disabled.
- [ ] The first viewport communicates the chosen mode immediately.

## 48. Final Creative Brief

**Build interfaces like expressive digital posters and physical brand artifacts: use oversized personality-rich typography, intentional asymmetry, limited high-confidence palettes, tactile grain, pixel or hand-drawn graphics, strong color blocking, editorial photography, and simple usable controls. Select one coherent visual mode at a time, borrow only the shared visual grammar of the references, and reject generic SaaS composition whenever a more authored solution can communicate the same content clearly.**
