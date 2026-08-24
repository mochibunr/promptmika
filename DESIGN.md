---
name: Expressive Editorial Web Design System & Reference Style Selector
version: 4.0.0
status: normative
purpose: Help AI website-generation agents classify a project, select the most appropriate visual language from nine analyzed
  reference families, and execute that style consistently without copying reference brands or collapsing into generic SaaS
  design.
sourcePolicy:
  copyReferenceBrands: false
  copyReferenceLogos: false
  copyReferenceText: false
  copyReferenceArtwork: false
  reuseVisualLanguageOnly: true
designDNA:
  dominantTraits:
  - expressive typography
  - intentional imperfection
  - editorial asymmetry
  - bold color blocking
  - tactile grain
  - pixel or hand-drawn graphics
  - limited palettes
  - strong art direction
  - minimal generic card UI
  prohibitedDefaults:
  - generic SaaS hero
  - glassmorphism
  - liquid-glass navigation
  - purple-blue AI gradient
  - dashboard mockup in every hero
  - identical rounded-card grids
  - excessive pill UI
  - sterile white-and-Inter layouts
  - random decorative noise without hierarchy
modePolicy:
  dominantModeRequired: true
  maxDominantModesPerPage: 1
  maxSecondaryModesPerPage: 1
  maxModesPerSection: 2
  secondaryModeVisualShareMax: 30%
  defaultMode: paper-cut-editorial
  canonicalStyles:
  - paper-cut-editorial
  - pixel-pastoral
  - glitch-fashion
  - organic-garden-commerce
  - pixel-humanist-agency
  - terminal-community
  - retro-mac-editorial
  - playful-risograph
  - cartoon-campaign
  legacyModeAliases:
    papercut-editorial: paper-cut-editorial
    pixel-retro: pixel-pastoral
    organic-commerce: organic-garden-commerce
    terminal-tech: terminal-community
    retro-mac: retro-mac-editorial
    playful-packaging: playful-risograph
    cartoon-campaign: cartoon-campaign
    glitch-fashion: glitch-fashion
  legacyModesRemainValidAsUmbrellaTerms: true
  rule: Use canonical style IDs for selection and generation; legacy mode names may only resolve to their canonical style
    or act as umbrella terminology.
colors:
  semantic:
    background:
      paper: '#F2E8CC'
      warm: '#FFF6DF'
      dark: '#171816'
      terminal: '#101310'
      lime: '#CFF29A'
      mustard: '#F6B91A'
      aqua: '#62C8B5'
      sky: '#9CCBE8'
    surface:
      default: '#FFF8E8'
      elevated: '#F7EFD8'
      dark: '#20221F'
      darkRaised: '#292B27'
      black: '#0A0A09'
    text:
      primary: '#171717'
      secondary: '#44423D'
      inverse: '#FFF9E9'
      muted: '#767166'
      terminal: '#C6FF84'
    accent:
      primary: '#4D9562'
      secondary: '#F06B3E'
      electric: '#A9FF6A'
      playfulPink: '#E56D8B'
      playfulOrange: '#F4793B'
      pixelBlue: '#4B86C5'
      sunYellow: '#F3E85F'
    border:
      default: '#1C1C1A'
      muted: '#AAA391'
      inverse: '#F4ECD8'
      terminal: '#3A3F39'
    state:
      success: '#4D9562'
      warning: '#E4A51A'
      error: '#C9483B'
      info: '#4B86C5'
  usageRatios:
    dominantSurface: 55-70%
    supportingSurface: 15-25%
    primaryInk: 10-20%
    accentTotal: 5-15%
    neonAccentMax: 8%
  modePalettes:
    papercut-editorial:
      background: '#F2E8CC'
      surface: '#FFF6DF'
      text: '#211B16'
      secondary: '#4D9562'
      accent: '#F06B3E'
      dark: '#30241C'
    pixel-retro:
      background: '#F0E85E'
      surface: '#8DB7D6'
      text: '#171717'
      secondary: '#4A82BD'
      accent: '#EDEB55'
      dark: '#172019'
    organic-commerce:
      background: '#FFF9E9'
      surface: '#F8F0D8'
      text: '#282023'
      secondary: '#2E6D38'
      accent: '#DCEB86'
      dark: '#2A2025'
    terminal-tech:
      background: '#101310'
      surface: '#20231F'
      text: '#F0EEE5'
      secondary: '#91FF66'
      accent: '#B1FF76'
      dark: '#090B09'
    retro-mac:
      background: '#F4F4F0'
      surface: '#9CCBE8'
      text: '#111111'
      secondary: '#F2C63D'
      accent: '#6D9CCD'
      dark: '#1A1A1A'
    playful-packaging:
      background: '#F7B51A'
      surface: '#FFEAC1'
      text: '#11110F'
      secondary: '#55C4B0'
      accent: '#F4753C'
      dark: '#080807'
    cartoon-campaign:
      background: '#C9EE8F'
      surface: '#59C0AD'
      text: '#090A08'
      secondary: '#F7BA19'
      accent: '#E77393'
      dark: '#080907'
    glitch-fashion:
      background: '#8EABC1'
      surface: '#D6D3C8'
      text: '#F5EFE8'
      secondary: '#5BA766'
      accent: '#E58A68'
      dark: '#181818'
typography:
  families:
    displayCut:
      value: '''Papercuto'', ''Bowlby One SC'', ''Arial Black'', sans-serif'
      purpose: Irregular cut-paper, chunky, handmade display headings.
    displayHeavy:
      value: '''Arial Black'', ''Helvetica Neue'', Arial, sans-serif'
      purpose: Massive blunt campaign and editorial headlines.
    displayRounded:
      value: '''Arial Rounded MT Bold'', ''Nunito Sans'', sans-serif'
      purpose: Friendly organic-commerce wordmarks and soft display copy.
    pixel:
      value: '''Pixelify Sans'', ''Press Start 2P'', monospace'
      purpose: Bitmap headings, retro-computing labels, low-resolution display copy.
    mono:
      value: '''IBM Plex Mono'', ''Space Mono'', ''Courier New'', monospace'
      purpose: Technical captions, body copy in terminal/pixel modes, metadata.
    serifEditorial:
      value: '''Cormorant Garamond'', Georgia, serif'
      purpose: High-contrast editorial headlines and retro-mac art direction.
    sans:
      value: '''Helvetica Neue'', Arial, sans-serif'
      purpose: Readable utility text, navigation, ecommerce controls.
    hand:
      value: '''Patrick Hand'', ''Comic Sans MS'', cursive'
      purpose: Small annotations, doodle labels, casual notes.
  styles:
    displayHero:
      fontSize: clamp(4.5rem, 12vw, 11rem)
      fontWeight: '900'
      lineHeight: '0.82'
      letterSpacing: -0.045em
      maxMeasure: 9ch
    displaySection:
      fontSize: clamp(3rem, 7vw, 6.5rem)
      fontWeight: '900'
      lineHeight: '0.88'
      letterSpacing: -0.035em
      maxMeasure: 12ch
    editorialHero:
      fontSize: clamp(3.75rem, 9vw, 8.5rem)
      fontWeight: '500'
      lineHeight: '0.92'
      letterSpacing: -0.03em
      maxMeasure: 13ch
    h1:
      fontSize: clamp(2.8rem, 5vw, 5rem)
      fontWeight: '800'
      lineHeight: '0.95'
      letterSpacing: -0.03em
    h2:
      fontSize: clamp(2rem, 3.8vw, 3.75rem)
      fontWeight: '800'
      lineHeight: '1.0'
      letterSpacing: -0.02em
    h3:
      fontSize: clamp(1.35rem, 2vw, 2rem)
      fontWeight: '700'
      lineHeight: '1.08'
      letterSpacing: -0.015em
    bodyLg:
      fontSize: 1.125rem
      fontWeight: '400'
      lineHeight: '1.6'
      maxMeasure: 62ch
    body:
      fontSize: 1rem
      fontWeight: '400'
      lineHeight: '1.55'
      maxMeasure: 68ch
    bodyMono:
      fontSize: 0.92rem
      fontWeight: '400'
      lineHeight: '1.55'
      letterSpacing: 0.015em
      maxMeasure: 58ch
    label:
      fontSize: 0.78rem
      fontWeight: '700'
      lineHeight: '1.2'
      letterSpacing: 0.06em
    micro:
      fontSize: 0.6875rem
      fontWeight: '500'
      lineHeight: '1.25'
      letterSpacing: 0.04em
spacing:
  base: 4px
  scale:
    0: '0'
    1: 4px
    2: 8px
    3: 12px
    4: 16px
    5: 20px
    6: 24px
    8: 32px
    10: 40px
    12: 48px
    16: 64px
    20: 80px
    24: 96px
    32: 128px
    40: 160px
  sectionDesktop: clamp(96px, 10vw, 160px)
  sectionMobile: 64px
  contentGapDesktop: 48px
  contentGapMobile: 28px
radius:
  none: '0'
  xs: 4px
  sm: 8px
  md: 14px
  lg: 22px
  xl: 32px
  pill: 999px
  organic: 48% 52% 44% 56% / 55% 45% 55% 45%
  rule: Do not default all components to rounded rectangles.
borders:
  hairline: 1px solid currentColor
  standard: 2px solid currentColor
  heavy: 4px solid currentColor
  cartoon: '5px solid #090A08'
  terminal: '1px solid #343934'
  handDrawnWidth: 1.5px
  pixelGridWidth: 1px
shadows:
  none: none
  paper: 0 8px 24px rgba(30, 24, 18, 0.10)
  hard: '6px 6px 0 #111111'
  cartoon: '5px 5px 0 #090A08'
  window: 2px 2px 0 rgba(0,0,0,0.45)
  terminalGlow: 0 0 18px rgba(169,255,106,0.12)
  rule: Prefer no shadow, hard shadow, or subtle paper shadow over soft floating SaaS elevation.
layout:
  maxWidth: 1440px
  editorialMaxWidth: 1680px
  contentPaddingDesktop: clamp(24px, 4vw, 72px)
  contentPaddingMobile: 20px
  gridColumnsDesktop: 12
  gridColumnsTablet: 8
  gridColumnsMobile: 4
  gridGapDesktop: 24px
  gridGapMobile: 16px
  asymmetryOffsetMax: 64px
  overlapMaxDesktop: 18%
  overlapMaxMobile: 8%
  preferredHeroHeight: min(900px, 92vh)
  sectionMinHeightEditorial: 70vh
breakpoints:
  xs: 360px
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px
  xxl: 1536px
motion:
  duration:
    instant: 100ms
    fast: 160ms
    normal: 280ms
    slow: 520ms
    reveal: 700ms
  easing:
    standard: cubic-bezier(0.22, 1, 0.36, 1)
    snappy: cubic-bezier(0.2, 0.9, 0.2, 1)
    mechanical: steps(6, end)
  hoverTranslate: -2px
  hoverRotateMin: -1deg
  hoverRotateMax: 1deg
  reducedMotionRequired: true
texture:
  paperNoiseOpacity: '0.03'
  filmGrainOpacity: '0.045'
  terminalGridOpacity: '0.16'
  halftoneOpacity: '0.18'
  lineArtOpacity: '0.14'
  maxSimultaneousTextures: 2
  rule: Texture supports materiality; it must never reduce legibility.
imagery:
  photo:
    saturation: '0.82'
    contrast: '0.96'
    warmth: slightly warm
    grain: subtle
    crop: editorial
  pixelArt:
    imageRendering: pixelated
    interpolation: nearest-neighbor
    preferredScale: integer
  illustration:
    outlineMin: 2px
    outlineMax: 5px
    fillStyle: flat or lightly textured
    shadingStyle: halftone, stipple, or none
  glitch:
    pixelBlockSizeMin: 12px
    pixelBlockSizeMax: 56px
    maxAffectedImageArea: 35%
  cutPaper:
    edgeRoughness: subtle
    rotationRange: -3deg to 3deg
    badgeRotationRange: -7deg to 7deg
icons:
  preferred:
  - bitmap
  - hand-drawn outline
  - bold flat cartoon
  - retro desktop icon
  avoid:
  - generic glossy 3D
  - multicolor gradient icons
  - unmodified default icon-library hero graphics
  defaultStrokeWidth: 2px
  cartoonStrokeWidth: 4px
controls:
  minTargetSize: 44px
  primaryButtonHeight: 48px
  compactButtonHeight: 36px
  inputHeight: 48px
  focusWidth: 2px
  focusOffset: 4px
zIndex:
  base: 0
  texture: 2
  content: 10
  decoration: 20
  navigation: 40
  modal: 100
  toast: 120
accessibility:
  bodyTextContrast: WCAG AA minimum
  largeTextContrast: WCAG AA minimum
  keyboardFocusRequired: true
  semanticHTMLRequired: true
  reducedMotionRequired: true
  decorativeTextCanContainCriticalInfo: false
  minimumBodyFontSize: 16px
agentInstruction: Before generating layout, components, or styling, evaluate the project against the selection criteria,
  choose exactly one dominant canonical style, optionally choose one subordinate secondary style, lock the visual strategy,
  then implement and validate against that style profile.
sourceDocuments:
- name: Expressive Editorial Web Design System
  version: 1.0.0
  purpose: A production-ready visual system for AI-generated interfaces inspired by handmade editorial, pixel-retro, organic
    commerce, terminal-tech, retro-computing, playful packaging, and cartoon campaign design.
  role: shared design foundations, tokens, modes, components, recipes, implementation, and quality rules
- name: Expressive Editorial Style Catalog
  version: 2.0.0
  purpose: Help AI website-generation agents select and execute the most appropriate visual style from nine analyzed reference
    families.
  role: style-selection workflow and nine detailed reference-derived style profiles
selection:
  dominantStylesPerPage: 1
  secondaryStylesPerPageMax: 1
  secondaryVisualShareMax: 30%
  minimumStyleConfidenceToAutoselect: 0.65
  scoringScale: 0-10 per criterion before weighted normalization to 0.00-1.00
  requiredInputs:
  - productCategory
  - primaryGoal
  - brandPersonality
  - audience
  - contentDensity
  - availableMediaAssets
  - interactionComplexity
  - accessibilitySensitivity
  - implementationBudget
  - desiredEmotionalTone
  weights:
    productCategoryFit: 0.25
    brandPersonalityFit: 0.2
    contentDensityFit: 0.15
    audienceFit: 0.15
    mediaAssetFit: 0.1
    interactionFit: 0.1
    accessibilityFit: 0.05
  confidenceBands:
    high:
      min: 0.8
      behavior: autoselect unless the user explicitly requests another style
    medium:
      min: 0.65
      maxExclusive: 0.8
      behavior: autoselect and keep style strength moderate
    low:
      maxExclusive: 0.65
      behavior: apply gating/tie-break rules; default to paper-cut-editorial only when no candidate clearly fits
  styleStrengthBands:
    subtle:
      range: 0.35-0.50
      use: utility-heavy or information-dense pages
    balanced:
      range: 0.50-0.70
      use: default brand expression
    strong:
      range: 0.70-0.85
      use: campaign, launch, portfolio, editorial pages
    maximal:
      range: 0.85-1.00
      use: art-piece or showcase pages; usability constraints still apply
  gates:
    assetGate:
    - Reduce illustration-heavy styles when custom illustration or strong product imagery is unavailable and implementation
      budget is low.
    - Reduce glitch-fashion when no strong portrait/editorial image is available.
    - Reduce organic-garden-commerce when no high-quality nature/product photography is available.
    - Reduce playful-risograph and cartoon-campaign when no custom illustration pipeline exists.
    densityGate:
    - For high-density task interfaces, prefer terminal-community, retro-mac-editorial, or pixel-humanist-agency in restrained
      strength.
    - Penalize pixel-pastoral and cartoon-campaign for dense data or long-form task flows.
    - Penalize maximal glitch-fashion for forms, tables, documentation, and repeated workflows.
    accessibilityGate:
    - Reject any candidate if its intended treatment would force critical text into decorative, corrupted, or low-contrast
      presentation.
    - Reduce style strength before abandoning the style when accessibility can be preserved through calmer functional UI.
    interactionGate:
    - Use expressive campaign styles for low-to-medium interaction complexity.
    - For complex workflows, retain the style in shell, typography, color, and illustration while keeping controls conventional.
  tieBreakers:
  - Prefer the style that best matches the available media assets.
  - Prefer the style whose natural content density matches the project.
  - Prefer the less visually aggressive style for task-heavy interfaces.
  - Prefer the more expressive style for campaign, portfolio, editorial, or launch pages.
  - Prefer the style with lower implementation risk when scores are otherwise effectively tied.
  - If still tied and no project-specific evidence separates candidates, default to paper-cut-editorial.
  secondaryStyleRules:
  - 'The secondary style may influence at most two channels: typography, iconography, texture, accent color, illustration
    treatment, or section boundaries.'
  - The secondary style must not replace the dominant style layout, palette, typography, imagery, and component language
    simultaneously.
  - Do not select a secondary style merely to make the page look more complicated.
  - If dominant and secondary styles conflict on usability, the dominant style wins.
  procedure:
  - Infer or read project inputs.
  - Apply hard gates before scoring.
  - Score all plausible styles from 0-10 on each weighted criterion.
  - Normalize weighted scores to 0.00-1.00.
  - Select the highest-scoring viable style.
  - Apply tie-breakers when scores are within 0.03.
  - Set style strength based on task density and brand expression.
  - Optionally select one compatible secondary style only when it contributes a specific useful channel.
  - Lock palette, type roles, hero motif, media treatment, texture, icon language, and section-boundary language before
    coding.
  - Validate the result with recognition, genericity, accessibility, and responsive tests.
globalRules:
  genericSaaSLayouts: forbidden unless explicitly requested
  glassmorphism: forbidden by default
  liquidGlass: forbidden by default
  identicalRoundedCardGrids: avoid
  defaultBentoGrid: forbidden unless content structure genuinely requires it
  primaryDisplayFamiliesMax: 1
  totalFontFamiliesMax: 3
  simultaneousTexturesMax: 2
  minimumBodyFontSize: 16px
  minimumTargetSize: 44px
  bodyContrast: WCAG AA
  keyboardFocus: required
  semanticHTML: required
  reducedMotion: true
  styleRecognitionMinimumSignatures:
    balanced: 3
    strong: 4
  copyReferenceCompositionExactly: false
  copyReferenceTypographyExactly: false
  rule: Extract design grammar, not branded artifacts or exact compositions.
styles:
- id: paper-cut-editorial
  referenceOrder: 1
  name: Paper-Cut Editorial
  aliases:
  - papercut
  - handmade editorial
  - cut-paper poster
  - organic type specimen
  referenceVisual: 'Papercuto-style type specimen: oversized cream cut-paper lettering over a muted olive interior, handwritten
    notes, orange starburst, and a cream alphabet specimen with earthy green glyphs.'
  summary: A tactile, handmade editorial system built from oversized irregular lettering, warm paper tones, earthy accents,
    hand-drawn annotations, and intentionally imperfect geometry.
  description: A tactile handmade editorial language where typography is treated like cut material. Warm paper surfaces,
    earthy color, irregular silhouettes, handwritten annotation, and poster-scale type create a physical, human feeling
    without sacrificing digital usability.
  designPhilosophy: Make the interface feel assembled rather than rendered. Precision exists underneath the composition,
    but visible surfaces should carry controlled imperfection and evidence of a hand-made process.
  brandPersonality:
  - warm
  - artistic
  - craft-led
  - independent
  - human
  - slightly rebellious
  - culture-aware
  emotionalTone:
  - tactile
  - inviting
  - playful
  - editorial
  - imperfect
  - confident
  bestFor:
  - creative studios
  - artist portfolios
  - indie magazines
  - cultural projects
  - fashion capsules
  - craft brands
  - experimental landing pages
  avoidFor:
  - dense enterprise dashboards
  - banking
  - medical portals
  - high-frequency trading
  - data-heavy admin tools
  audience:
  - design-aware consumers
  - creative communities
  - culture audiences
  - craft/lifestyle buyers
  selectionProfile:
    pickWhen:
    - the brand should feel handcrafted or art-directed
    - the page is portfolio/editorial/cultural
    - there is room for oversized display type
    - warm tactile imagery or paper-like surfaces fit the content
    rejectWhen:
    - the product is a dense operational dashboard
    - formal trust conventions must dominate
    - custom display typography cannot be sourced or approximated safely
    contentDensityFit:
      level: low-medium
      score: 3
      note: Best when information can alternate between loud poster moments and quieter readable bands.
    mediaAssetFit:
      score: 8
      ideal:
      - editorial photography
      - paper textures
      - hand-drawn SVG marks
      minimum: Can work without photography if typography and shapes are strong.
    interactionFit:
      score: 5
      note: Good for marketing and light interaction; keep forms and complex controls conventional.
    accessibilityFit:
      score: 7
      note: Strong if decorative type is display-only and annotations never carry critical information.
    implementationBudget: medium
  palette:
    background: '#F2E7CB'
    surface: '#FFF4D8'
    text: '#211B16'
    muted_text: '#655D51'
    secondary: '#4F9461'
    accent: '#EF663F'
    dark: '#30251E'
    line: '#302A24'
  typography:
    display:
      direction: irregular chunky cut-paper display
      weight: 800-900
      lineHeight: 0.78-0.90
      use: hero and section statements only
    body:
      direction: warm humanist sans or soft grotesk
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: narrow handwritten or casual mono
      use: annotations, badges, captions; non-critical only
    familyLimit: 3
  layout:
    grid: 12-column invisible editorial grid
    alignment: asymmetric
    whitespace: generous
    overlap: selective type/image overlap
    sectionRhythm: poster band -> information band -> tactile feature -> quiet band
  hero:
    visualPriority: type-first
    formula: atmospheric image or earthy field + giant cut-paper headline + one note + one irregular badge + minimal copy
    ctaCount: 0-1 dominant
  components:
    navigation: quiet text links with hand-drawn active underline
    cards: paper clippings / magazine panels / cutout frames
    buttons: flat labels with irregular border; slight rotate/translate hover
    forms: simple rectangular fields on clean paper surface; expressive labels around, not inside, the inputs
    badges: starbursts, imperfect capsules, rough circles
  media:
    photography: warm, muted, tactile, editorial crop
    illustration: cut-paper or loose hand-drawn shapes
    icons: custom rough outline SVG
    texture:
    - paper grain
    - ink irregularity
    textureStrength: 2-5% opacity
  surfaces:
    borders: 1-2px ink, occasionally irregular SVG
    radius: mostly 0-14px; organic shapes use custom contours
    shadows: subtle paper shadow only
  motion:
  - paper slide
  - underline draw
  - 1-2px lift
  - ±1deg hover rotation
  responsive:
  - keep one oversized typographic moment per viewport
  - reduce overlap on mobile
  - move annotations to safe margins
  - preserve warm paper/earth palette
  accessibilityRisks:
  - decorative display font overuse
  - critical information placed in handwritten annotations
  - low contrast over photography
  signatureElements:
  - oversized irregular display lettering
  - warm cream paper
  - earthy green
  - burnt orange starburst
  - tiny handwritten notes
  - controlled imperfection
  recognitionHeuristics:
  - At thumbnail size the page should read as a handmade poster, not a standard landing page.
  - At least one major heading must look physically shaped rather than neutrally typeset.
  - The page needs a warm paper/material feeling even if photography is absent.
  scores:
    playful: 7
    nostalgic: 6
    technical: 2
    organic: 8
    editorial: 10
    pixel: 1
    illustrative: 7
    texture: 8
    bold: 9
    commerce: 6
    density: 3
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - pixel-pastoral
  - retro-mac-editorial
  - playful-risograph
  incompatibleSecondaryStyles:
  - terminal-community at high strength
  - glitch-fashion at high strength
  - cold corporate minimalism
  fallbackBehavior: If custom cut-paper type or illustration assets are unavailable, keep the warm palette, giant asymmetric
    display type, hand-drawn annotation system, and paper-like containers rather than replacing the style with generic minimalism.
  failureModes:
  - generic cream SaaS template with quirky font
  - too much random rotation
  - distressing every edge
  - using handwritten text for important instructions
- id: pixel-pastoral
  referenceOrder: 2
  name: Pixel Pastoral
  aliases:
  - lo-fi pixel romance
  - pastoral Y2K
  - pixel nostalgia
  - retro digital landscape
  referenceVisual: Grainy green hillside/blue-sky image with giant yellow pixel-script “Good,” followed by an acidic yellow
    panel with blue pixel-script “Luck” and tiny clean corner labels.
  summary: A nostalgic low-resolution editorial style that contrasts grainy organic photography with giant bitmap or pixel-script
    typography and a tiny clean UI layer.
  description: A dreamy lo-fi editorial language that deliberately collides organic landscape photography with visible digital
    pixels. It feels nostalgic and romantic rather than gamer-like, using very sparse UI and extreme type scale.
  designPhilosophy: Use low resolution as poetry, not as a novelty filter. The physical world should remain soft and imperfect
    while typography or graphic symbols reveal the digital grid.
  brandPersonality:
  - nostalgic
  - dreamy
  - indie
  - youthful
  - romantic
  - experimental
  emotionalTone:
  - quietly surreal
  - lo-fi
  - optimistic
  - wistful
  - spacious
  bestFor:
  - music microsites
  - fashion drops
  - creative portfolios
  - event pages
  - youth culture
  - experimental campaigns
  - indie product launches
  avoidFor:
  - formal enterprise software
  - dense documentation
  - government portals
  - serious finance
  - long-form accessibility-critical products
  audience:
  - music/fashion communities
  - younger culture audiences
  - creative portfolio viewers
  selectionProfile:
    pickWhen:
    - the site is image-led and low-density
    - nostalgia and mood matter more than utility density
    - strong landscape/lifestyle photography exists
    - music/fashion/event/culture context fits
    rejectWhen:
    - long documentation or forms dominate
    - enterprise/institutional trust is primary
    - there is no strong hero photography or visual media
    contentDensityFit:
      level: low
      score: 2
      note: Works best with sparse text and large visual pauses.
    mediaAssetFit:
      score: 9
      ideal:
      - grainy landscape or lifestyle photography
      - bitmap display type
      minimum: Requires at least one compelling image or strong color field.
    interactionFit:
      score: 3
      note: Best for browsing, launches, and storytelling rather than complex workflows.
    accessibilityFit:
      score: 6
      note: Keep pixel script decorative and ensure tiny labels are not essential.
    implementationBudget: low-medium
  palette:
    background: '#EFE85A'
    surface: '#8BB5D2'
    text: '#192019'
    muted_text: '#52616B'
    secondary: '#4A84BC'
    accent: '#EEE95A'
    dark: '#172117'
    line: '#4B6D77'
  typography:
    display:
      direction: bitmap/pixel-script or low-resolution display
      weight: variable
      lineHeight: 0.85-1.0
    body:
      direction: clean neutral sans
      size: 16-18px
    utility:
      direction: tiny clean sans or mono
      use: corner labels and metadata
    familyLimit: 3
  layout:
    grid: simple editorial grid
    alignment: sparse with distant corner anchors
    whitespace: extreme
    overlap: one giant word may cross the photograph
    sectionRhythm: image poster -> flat color field -> quiet content
  hero:
    visualPriority: photo + single pixel word
    formula: full-bleed landscape + giant bitmap/script display word + tiny separated labels
    ctaCount: 0-1 subtle
  components:
    navigation: minimal and nearly invisible
    cards: avoid; use full-bleed panels
    buttons: small flat utility controls
    forms: plain and modern; place in a quiet flat-color band
    badges: tiny bitmap labels only
  media:
    photography: grainy, analog-feeling, slightly color-cast
    illustration: rare; bitmap symbols only
    icons: pixel cursors/stars
    texture:
    - film grain
    - compression/noise
    textureStrength: 2-5% opacity
  surfaces:
    borders: usually none; 1px if needed
    radius: 0-8px
    shadows: none
  motion:
  - step reveal
  - pixel cursor blink
  - slow photo drift
  responsive:
  - preserve huge pixel word
  - crop photos decisively
  - move tiny labels into safe areas
  - avoid shrinking pixel glyphs below readable scale
  accessibilityRisks:
  - pixel script used for essential copy
  - tiny corner labels becoming necessary UI
  - low contrast on acidic fields
  signatureElements:
  - giant pixel-script word
  - grainy pastoral photo
  - acidic yellow
  - washed blue
  - tiny clean labels
  - low-resolution contrast
  recognitionHeuristics:
  - The page should feel like an art-school digital poster over analog photography.
  - Pixel treatment should be concentrated in type/symbols, not every component.
  - Large empty areas are necessary.
  scores:
    playful: 7
    nostalgic: 10
    technical: 3
    organic: 7
    editorial: 9
    pixel: 10
    illustrative: 4
    texture: 8
    bold: 8
    commerce: 4
    density: 2
  implementationComplexity: low-medium
  compatibleSecondaryStyles:
  - paper-cut-editorial
  - glitch-fashion
  - terminal-community
  incompatibleSecondaryStyles:
  - cartoon-campaign at high strength
  - playful-risograph at high strength
  - dense enterprise UI language
  fallbackBehavior: If pixel-script type is unavailable, use a legible bitmap display or convert a short decorative word
    to an original pixel SVG while preserving semantic text accessibly.
  failureModes:
  - turning it into a retro game UI
  - pixelating all body text
  - overcrowding the photograph
  - removing grain until it becomes generic stock imagery
- id: glitch-fashion
  referenceOrder: 3
  name: Glitch Fashion Editorial
  aliases:
  - digital fashion collage
  - glitch editorial
  - datamosh magazine
  - corrupted portrait poster
  referenceVisual: Portrait-driven fashion poster with huge cropped white FASHION lettering, visible fine grid, washed blue
    field, green cap, tiny microcopy, and rectangular image corruption across the face.
  summary: A raw fashion-editorial system that combines oversized distorted typography, image fragmentation, visible grids,
    muted photography, and tiny disciplined microcopy.
  description: A high-impact editorial system where controlled digital damage and oversized typography create tension around
    a strong portrait. A strict grid and tiny disciplined copy prevent the composition from becoming random chaos.
  designPhilosophy: Break the image, not the information architecture. The visual system earns its aggression through disciplined
    alignment, limited corruption, and clear hierarchy.
  brandPersonality:
  - rebellious
  - fashion-forward
  - provocative
  - experimental
  - confident
  - underground
  emotionalTone:
  - raw
  - kinetic
  - editorial
  - cool
  - disruptive
  bestFor:
  - fashion
  - music
  - creative direction portfolios
  - art publications
  - streetwear
  - experimental campaigns
  - festival identity
  avoidFor:
  - healthcare
  - banking
  - legal services
  - complex productivity tools
  - children's products requiring calm clarity
  audience:
  - fashion/streetwear audiences
  - music/culture audiences
  - creative professionals
  selectionProfile:
    pickWhen:
    - portrait/editorial imagery is central
    - brand should feel experimental or disruptive
    - content density is low-medium
    - campaign impact matters more than conventional polish
    rejectWhen:
    - critical forms/tables dominate
    - the audience expects calm institutional trust
    - no strong focal imagery exists
    contentDensityFit:
      level: low-medium
      score: 5
      note: Dense information should move into calm bands outside corrupted hero zones.
    mediaAssetFit:
      score: 10
      ideal:
      - strong portrait/fashion image
      - high-resolution source for selective corruption
      minimum: Requires one visually strong focal image.
    interactionFit:
      score: 4
      note: Best for campaigns, galleries, launches; functional UI must stay calm.
    accessibilityFit:
      score: 4
      note: High risk if corruption or cropping touches essential text/controls.
    implementationBudget: high
  palette:
    background: '#8EAFC5'
    surface: '#D4D0C5'
    text: '#F4EEE7'
    muted_text: '#D6D1CB'
    secondary: '#56A162'
    accent: '#E8896B'
    dark: '#171717'
    line: '#A8B7C1'
  typography:
    display:
      direction: oversized grotesk with crop/rotation/mixed scale
      weight: 700-900
      lineHeight: 0.75-0.95
    body:
      direction: tiny Swiss-style sans only in short blocks; standard readable sans for longer copy
      size: 16px minimum for essential text
    utility:
      direction: small mono/grotesk technical captions
    familyLimit: 2
  layout:
    grid: visible fine grid over an underlying editorial grid
    alignment: central image anchor with type crossing frame
    whitespace: moderate
    overlap: high but controlled
    sectionRhythm: chaotic hero -> calm editorial information -> image spread
  hero:
    visualPriority: portrait-first
    formula: portrait + giant cropped headline + 10-35% rectangular corruption + tiny caption clusters
    ctaCount: 0-1 understated
  components:
    navigation: tiny edge-aligned
    cards: avoid; use magazine modules
    buttons: flat monochrome editorial controls
    forms: place on clean uncorrupted field with simple rules
    badges: tiny technical labels
  media:
    photography: washed editorial portrait, selective pixel blocks
    illustration: rare
    icons: minimal monochrome
    texture:
    - fine grid
    - paper/canvas grain
    textureStrength: grid 8-16%; grain 2-4%
  surfaces:
    borders: 1px grid/rules
    radius: 0-4px
    shadows: none
  motion:
  - single short glitch burst
  - mask reveal
  - block assembly
  responsive:
  - reduce corruption coverage
  - keep face/subject recognizable
  - crop display type safely
  - move microcopy away from image damage
  accessibilityRisks:
  - corruption obscuring text/controls
  - rapid flicker/glitch motion
  - oversized cropped type hiding semantic meaning
  signatureElements:
  - oversized distorted headline
  - recognizable corrupted portrait
  - fine grid overlay
  - tiny editorial captions
  - muted blue/gray field
  - controlled chaos
  recognitionHeuristics:
  - At least one focal image must show selective rectangular corruption.
  - A visible grid or disciplined alignment must counterbalance distortion.
  - Functional controls should look calmer than the hero.
  scores:
    playful: 5
    nostalgic: 7
    technical: 5
    organic: 3
    editorial: 10
    pixel: 8
    illustrative: 3
    texture: 9
    bold: 10
    commerce: 5
    density: 5
  implementationComplexity: high
  compatibleSecondaryStyles:
  - pixel-pastoral
  - retro-mac-editorial
  - paper-cut-editorial
  incompatibleSecondaryStyles:
  - cartoon-campaign
  - organic-garden-commerce at high strength
  - soft luxury minimalism
  fallbackBehavior: If image-corruption tooling is unavailable, use layered cropped rectangles or masked duplicates of the
    focal image rather than generic blur/chromatic aberration.
  failureModes:
  - glitching everything
  - continuous shaking/flicker
  - obscuring important text
  - random distortion without grid discipline
- id: organic-garden-commerce
  referenceOrder: 4
  name: Organic Garden Commerce
  aliases:
  - nature-led ecommerce
  - soft organic commerce
  - garden editorial shop
  - botanical minimalism
  referenceVisual: Garden ecommerce page with lush green hero photography, huge rounded lowercase wordmark, floating pill
    navigation, cream product rows, an irregular cream copy blob, and editorial product-box composition.
  summary: A clean but expressive ecommerce style pairing lush nature photography, cream paper-like surfaces, oversized
    rounded branding, soft organic shapes, and sparse product presentation.
  description: A nature-led commerce system that stays highly usable while carrying distinct editorial personality through
    lush photography, soft cream surfaces, oversized rounded branding, organic containers, and sparse product specimens.
  designPhilosophy: Let nature and product imagery create emotion while UI remains quiet. Organic shapes and soft typography
    should feel grown rather than engineered, but transaction controls remain precise.
  brandPersonality:
  - fresh
  - friendly
  - sustainable
  - optimistic
  - approachable
  - design-aware
  emotionalTone:
  - calm
  - natural
  - bright
  - spacious
  - welcoming
  bestFor:
  - gardening
  - plants
  - wellness
  - natural goods
  - home products
  - sustainable brands
  - food and lifestyle ecommerce
  avoidFor:
  - cybersecurity
  - developer consoles
  - luxury finance
  - dense B2B admin tools
  audience:
  - lifestyle shoppers
  - nature-oriented consumers
  - home/wellness buyers
  - design-aware ecommerce visitors
  selectionProfile:
    pickWhen:
    - nature/product photography is strong
    - ecommerce conversion matters
    - brand is sustainable/wellness/home/garden
    - friendly premium rather than luxury-formal is desired
    rejectWhen:
    - brand is technical/cyber
    - no useful product or nature imagery exists
    - dense B2B workflows dominate
    contentDensityFit:
      level: medium
      score: 4
      note: Handles catalogs and product details well if sections stay spacious.
    mediaAssetFit:
      score: 10
      ideal:
      - lush nature photography
      - clean product cutouts
      - packaging imagery
      minimum: Needs either strong nature or product imagery.
    interactionFit:
      score: 8
      note: Naturally compatible with shopping, filtering, quantity controls, and checkout pathways.
    accessibilityFit:
      score: 9
      note: Easy to keep readable if controls move off busy photography.
    implementationBudget: medium
  palette:
    background: '#FFF9E8'
    surface: '#F6F0DA'
    text: '#292126'
    muted_text: '#5D5750'
    secondary: '#2F6D38'
    accent: '#D5E788'
    dark: '#2A2025'
    line: '#3A3334'
  typography:
    display:
      direction: very large rounded lowercase sans
      weight: 700-900
      lineHeight: 0.85-1.0
    body:
      direction: clean grotesk/humanist sans
      size: 16-19px
    utility:
      direction: thin editorial sans for captions and product metadata
    familyLimit: 2
  layout:
    grid: 12-column ecommerce/editorial grid
    alignment: clean with occasional asymmetry
    whitespace: high
    overlap: product/image overlap allowed, control overlap avoided
    sectionRhythm: photo hero -> product specimen row -> organic editorial block -> product campaign spread
  hero:
    visualPriority: photo + wordmark
    formula: lush full-bleed nature image + giant rounded brand word + short subtitle + floating minimal nav
    ctaCount: 0-1
  components:
    navigation: compact floating dark/cream pills allowed
    cards: avoid heavy frames; products float on cream
    buttons: compact pill or outlined utility control
    forms: clean cream/white inputs with dark borders; no organic-shaped fields
    badges: soft compact labels
  media:
    photography: lush, bright, editorial crop, naturally textured
    illustration: minimal botanical/simple line doodles
    icons: restrained dark outlines
    texture:
    - natural photographic texture
    - subtle paper grain
    textureStrength: 0-3%
  surfaces:
    borders: thin dark utility rules
    radius: pills selectively; organic blobs for editorial content only
    shadows: minimal/none
  motion:
  - gentle image drift
  - soft mask reveal
  - tiny control shift
  responsive:
  - stack product specimens
  - preserve giant rounded wordmark
  - simplify organic blobs
  - keep commerce controls close to products
  accessibilityRisks:
  - small controls over busy nature imagery
  - insufficient text contrast on photography
  - pill labels becoming too small
  signatureElements:
  - lush full-bleed nature photo
  - huge rounded lowercase wordmark
  - cream commerce surface
  - organic blob text panel
  - spacious product specimens
  - minimal dark pills
  recognitionHeuristics:
  - The page must still look like a shop, not merely a nature poster.
  - Product presentation should be sparse and editorial rather than card-heavy.
  - Organic shapes are used for storytelling, not every control.
  scores:
    playful: 6
    nostalgic: 3
    technical: 1
    organic: 10
    editorial: 8
    pixel: 0
    illustrative: 4
    texture: 5
    bold: 7
    commerce: 10
    density: 4
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - playful-risograph
  - paper-cut-editorial
  - cartoon-campaign
  incompatibleSecondaryStyles:
  - terminal-community
  - glitch-fashion at high strength
  - hard cyberpunk styling
  fallbackBehavior: If lush photography is unavailable, use cream/green flat fields, botanical closeups or simple original
    line art, and emphasize the rounded wordmark plus product cutouts.
  failureModes:
  - generic Shopify cards
  - overusing pills
  - oversaturated stock nature
  - placing tiny controls on busy grass photography
- id: pixel-humanist-agency
  referenceOrder: 5
  name: Pixel Humanist Agency
  aliases:
  - friendly pixel agency
  - lime bitmap studio
  - retro web agency
  - pixel editorial corporate
  referenceVisual: Pale lime agency page with giant monochrome pixel heart and arrow, bitmap tool/brain/team icons, mono
    copy, bold sans headings, huge quote marks, and wide empty areas.
  summary: A surprisingly warm agency/portfolio system that uses huge monochrome pixel graphics, pale lime fields, mono
    copy, blunt sans headings, and lots of intentional empty space.
  description: A friendly retro-web agency language that uses giant bitmap illustrations and monospace copy without becoming
    dark or hacker-coded. Pale lime fields and extreme whitespace make technical nostalgia feel optimistic and human.
  designPhilosophy: Treat bitmap graphics as large editorial illustrations, not tiny nostalgic decorations. Let emptiness,
    simple type hierarchy, and human copy keep the technology approachable.
  brandPersonality:
  - maker-minded
  - open
  - quirky
  - technical-but-human
  - optimistic
  - independent
  emotionalTone:
  - friendly
  - retro
  - spacious
  - playful
  - clever
  bestFor:
  - creative agencies
  - developer studios
  - open-source teams
  - design engineering firms
  - indie software companies
  - education workshops
  avoidFor:
  - luxury brands
  - formal institutions
  - high-end hospitality
  - dense analytics products
  audience:
  - developers
  - designers
  - open-source communities
  - creative-tech clients
  - makers
  selectionProfile:
    pickWhen:
    - agency/studio/developer brand needs retro personality
    - large pixel iconography is available
    - content is medium density
    - technical credibility should still feel friendly
    rejectWhen:
    - luxury/formal tone is required
    - dense analytics UI dominates
    - pixel language would undermine trust expectations
    contentDensityFit:
      level: medium
      score: 4
      note: Works for service/feature copy but benefits from generous spacing.
    mediaAssetFit:
      score: 7
      ideal:
      - custom monochrome pixel icons
      - few or no photos
      minimum: Can be built mostly from typography and original pixel SVG/canvas assets.
    interactionFit:
      score: 7
      note: Suitable for agency sites and moderate product interaction.
    accessibilityFit:
      score: 8
      note: Strong if mono text is not undersized and pixel art remains decorative.
    implementationBudget: medium
  palette:
    background: '#D4F2A4'
    surface: '#F4F7EC'
    text: '#0C0D0B'
    muted_text: '#3E4836'
    secondary: '#FFFFFF'
    accent: '#BDEB85'
    dark: '#0A0A09'
    line: '#1D251A'
  typography:
    display:
      direction: bold clean sans plus optional bitmap words
      weight: 700-900
    body:
      direction: readable monospace/typewriter
      size: 16-18px
      lineHeight: 1.55-1.7
    utility:
      direction: tiny mono
    familyLimit: 2
  layout:
    grid: 12-column sparse agency grid
    alignment: offset blocks
    whitespace: very high
    overlap: minimal
    sectionRhythm: giant pixel object -> service copy cluster -> icon grid -> oversized quote
  hero:
    visualPriority: pixel illustration-first
    formula: pale lime field + giant monochrome pixel object + concise value proposition + tiny divider
    ctaCount: 0-1 outlined
  components:
    navigation: plain top-right text columns
    cards: avoid; icon + heading + copy groups
    buttons: small outlined rectangles
    forms: simple black-outline controls on lime or white
    badges: tiny mono labels
  media:
    photography: rare and secondary
    illustration: large monochrome pixel graphics
    icons: consistent bitmap tools/brain/heart/team/star system
    texture:
    - optional faint grain
    textureStrength: 0-2%
  surfaces:
    borders: 2px black for controls
    radius: 0-8px
    shadows: none
  motion:
  - pixel step-in
  - arrow shift
  - cursor blink
  responsive:
  - stack giant pixel visual above copy
  - convert two-column icon groups to vertical pairs
  - keep mono text >=16px
  - preserve empty space
  accessibilityRisks:
  - monospace body text below 16px
  - bitmap glyphs used as essential labels
  - oversized decorative symbols entering focus order
  signatureElements:
  - pale lime field
  - huge black/white pixel symbol
  - mono copy
  - bold clean headings
  - oversized arrow/quote
  - extreme breathing room
  recognitionHeuristics:
  - Pixel assets should be large enough to function as illustration.
  - The palette should stay mostly pale lime, black, and white.
  - The page should feel friendly and open, not cyberpunk.
  scores:
    playful: 7
    nostalgic: 8
    technical: 7
    organic: 3
    editorial: 8
    pixel: 10
    illustrative: 8
    texture: 2
    bold: 8
    commerce: 5
    density: 4
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - terminal-community
  - pixel-pastoral
  - paper-cut-editorial
  incompatibleSecondaryStyles:
  - glitch-fashion at high strength
  - playful-risograph at high strength
  - luxury editorial serif systems
  fallbackBehavior: If custom pixel icons are unavailable, generate simple original grid-based SVG icons and keep the pale
    lime/mono/whitespace system intact.
  failureModes:
  - turning dark and hacker-like
  - using tiny pixel icons only
  - filling empty space with cards
  - setting mono body text too small
- id: terminal-community
  referenceOrder: 6
  name: Neo-Terminal Community
  aliases:
  - terminal web
  - pixel cyber community
  - retro-futurist tech
  - dark grid interface
  referenceVisual: Dark technical community page with a huge pixel-art Earth, fine grid, black/charcoal modular panels,
    bitmap COMMUNITY headline, tiny mono metadata, and a large acid-lime lower field.
  summary: A dark retro-futurist technical style combining bitmap display type, pixel art, neon-lime accents, dense mono
    metadata, technical grids, and modular terminal-like panels.
  description: A dark retro-futurist technical system that combines real information density with pixel art and restrained
    neon-lime emphasis. It evokes terminals and early network culture without defaulting to glossy cyberpunk.
  designPhilosophy: Structure first, atmosphere second. Dense information is organized through grids, modules, mono hierarchy,
    and tiny technical markers while one giant pixel artifact provides identity.
  brandPersonality:
  - technical
  - underground
  - collective
  - precise
  - internet-native
  - experimental
  emotionalTone:
  - intense
  - focused
  - retro-futurist
  - systemic
  - community-driven
  bestFor:
  - developer communities
  - blockchain
  - open-source tooling
  - cybersecurity
  - gaming communities
  - technical collectives
  - analytics products
  avoidFor:
  - wellness
  - weddings
  - gentle lifestyle brands
  - traditional luxury retail
  - children's education
  audience:
  - developers
  - technical communities
  - gamers
  - crypto-native users
  - open-source collectives
  selectionProfile:
    pickWhen:
    - technical/community content is central
    - dense modular information exists
    - retro-computing identity fits
    - pixel hero art can be produced
    rejectWhen:
    - soft lifestyle/wellness tone is required
    - audience is uncomfortable with technical interfaces
    - content is primarily warm emotional storytelling
    contentDensityFit:
      level: high
      score: 8
      note: One of the best styles for dense content when type sizes remain readable.
    mediaAssetFit:
      score: 8
      ideal:
      - large pixel artifact
      - technical diagrams/data
      minimum: Can work with original pixel emblem and grid.
    interactionFit:
      score: 9
      note: Naturally supports dashboards, community panels, data views, and technical navigation.
    accessibilityFit:
      score: 7
      note: Requires careful text sizing, reduced neon, and no rapid CRT effects.
    implementationBudget: high
  palette:
    background: '#101310'
    surface: '#20231F'
    text: '#F0EEE5'
    muted_text: '#A7ACA3'
    secondary: '#91FF66'
    accent: '#B1FF76'
    dark: '#090B09'
    line: '#343934'
  typography:
    display:
      direction: large bitmap/pixel display
      weight: 700-900
    body:
      direction: compact readable mono
      size: 16px minimum for essential copy
    utility:
      direction: uppercase/tiny mono for metadata; non-critical only
    familyLimit: 2
  layout:
    grid: visible 28-36px technical grid plus modular content grid
    alignment: rigid
    whitespace: medium
    overlap: device/panel layering allowed
    sectionRhythm: dark hero -> acid-lime break -> dense module cluster -> calmer technical footer
  hero:
    visualPriority: pixel artifact + system field
    formula: near-black grid + huge pixel planet/emblem + tiny corner metadata + bitmap headline
    ctaCount: 1 technical CTA
  components:
    navigation: tiny mono labels and separators
    cards: charcoal modular panels with 1px borders
    buttons: square compact mono controls with lime or off-white emphasis
    forms: dark rectangular fields with strong borders and readable labels
    badges: tiny terminal status labels
  media:
    photography: rare
    illustration: pixel planets/maps/machines
    icons: bitmap utility/status symbols
    texture:
    - technical grid
    - subtle scanline/noise
    textureStrength: grid 8-18%; scanline <=3%
  surfaces:
    borders: 1px charcoal/green-gray
    radius: 0-8px
    shadows: none or extremely subtle green ambient glow
  motion:
  - stepped reveal
  - cursor blink
  - terminal loading indicator
  - pixel wipe
  - grid fade
  responsive:
  - collapse panels to vertical modules
  - remove nonessential microcopy
  - increase mono text size
  - retain one primary pixel visual
  accessibilityRisks:
  - tiny terminal copy
  - neon contrast fatigue
  - scanline/flicker motion
  - status conveyed only through lime color
  signatureElements:
  - near-black grid
  - giant pixel Earth/object
  - acid lime
  - bitmap headline
  - dense mono microcopy
  - modular dark panels
  recognitionHeuristics:
  - The interface must remain structurally useful even if the pixel hero is removed.
  - Neon lime should be sparse enough to function as hierarchy.
  - Panels should feel like system modules, not glossy cards.
  scores:
    playful: 5
    nostalgic: 8
    technical: 10
    organic: 1
    editorial: 7
    pixel: 10
    illustrative: 7
    texture: 6
    bold: 9
    commerce: 5
    density: 8
  implementationComplexity: high
  compatibleSecondaryStyles:
  - pixel-humanist-agency
  - pixel-pastoral
  - retro-mac-editorial
  incompatibleSecondaryStyles:
  - organic-garden-commerce at high strength
  - playful-risograph at high strength
  - soft glassmorphism
  fallbackBehavior: If no pixel hero asset exists, create an original low-resolution emblem/map/data object and preserve
    grid + mono + modular-panel grammar.
  failureModes:
  - fake cyberpunk gradients
  - all-green text
  - tiny unreadable terminal copy
  - glowing glossy panels
  - decorative hacker gibberish
- id: retro-mac-editorial
  referenceOrder: 7
  name: Macintosh Editorial Archive
  aliases:
  - retro Mac editorial
  - classic desktop archive
  - bitmap museum
  - early-computing editorial
  referenceVisual: 'Editorial page about classic computer icon design: pale paper background with line drawing, large mixed
    serif/sans title, pill metadata, a blue retro desktop window, bitmap icons, nested paint/dialog windows, and archival
    text sections.'
  summary: An archival editorial system that juxtaposes elegant serif typography with classic desktop windows, bitmap icons,
    pale blue surfaces, monochrome line art, and nested interface metaphors.
  description: An archival editorial language that juxtaposes refined typography and storytelling with classic desktop metaphors,
    bitmap icons, thin black window frames, pale blue fields, and quiet line-art backgrounds.
  designPhilosophy: Use early-computing UI as a narrative frame, not a costume applied to every control. The page should
    feel like a digital exhibition where modern editorial hierarchy and retro interface artifacts support each other.
  brandPersonality:
  - curious
  - intellectual
  - archival
  - playful
  - design-literate
  - nostalgic
  emotionalTone:
  - museum-like
  - educational
  - clever
  - warmly technical
  - reflective
  bestFor:
  - design history
  - museums
  - creative portfolios
  - case studies
  - archives
  - educational storytelling
  - digital exhibitions
  avoidFor:
  - fast checkout flows
  - dense operational dashboards
  - serious medical tooling
  - real-time trading
  audience:
  - designers
  - students
  - history enthusiasts
  - creative professionals
  - retro-computing audiences
  selectionProfile:
    pickWhen:
    - storytelling/history/archive is central
    - retro computing is conceptually relevant
    - nested windows can support content
    - editorial reading matters
    rejectWhen:
    - fast conversion/checkout is primary
    - real-time operations dominate
    - retro OS metaphor would be arbitrary
    contentDensityFit:
      level: medium-high
      score: 7
      note: Can carry substantial narrative/detail when retro windows are used selectively.
    mediaAssetFit:
      score: 7
      ideal:
      - archival images
      - bitmap icons
      - line art
      minimum: Can be built with original retro UI windows and text.
    interactionFit:
      score: 7
      note: Good for exploratory archives, portfolios, case studies; less ideal for transactional flows.
    accessibilityFit:
      score: 7
      note: Requires semantic equivalents for decorative desktop metaphors and readable non-pixel body copy.
    implementationBudget: high
  palette:
    background: '#F4F4F0'
    surface: '#9ECBE7'
    text: '#111111'
    muted_text: '#5A5A56'
    secondary: '#F0C53A'
    accent: '#6F9BC6'
    dark: '#191919'
    line: '#222222'
  typography:
    display:
      direction: editorial serif for page title + heavy sans for section statements
      weight: 500 serif / 700-900 sans
    body:
      direction: neutral sans or mono for archival text
      size: 16-18px
    utility:
      direction: bitmap/mono labels inside retro windows
    familyLimit: 3
  layout:
    grid: editorial page grid containing nested window grids
    alignment: structured layering
    whitespace: medium-high
    overlap: window nesting and icon placement
    sectionRhythm: editorial intro -> retro desktop scene -> archival narrative -> quote/feature window
  hero:
    visualPriority: editorial title + retro window
    formula: mixed serif/sans heading + tag row + faint line art + embedded classic desktop scene
    ctaCount: 0-1
  components:
    navigation: minimal header or classic menu bar inside retro scene
    cards: classic 1px framed windows and archival text blocks
    buttons: simple classic bordered controls
    forms: modern accessible form shell; retro framing can surround but not obscure fields
    badges: small system labels or restrained black pills outside OS scene
  media:
    photography: archival photos/scans
    illustration: bitmap desktop graphics
    icons: black/white classic bitmap icons
    texture:
    - paper grain
    - low-opacity contour line art
    textureStrength: 2-5% grain; 8-15% line art
  surfaces:
    borders: 1px black window frames
    radius: 0-4px
    shadows: 1-2px hard window offset if needed
  motion:
  - window opening
  - cursor movement
  - bitmap inversion
  - mechanical short transitions
  responsive:
  - recompose desktop scenes rather than shrinking
  - allow horizontal window scroller only if intentional
  - stack archival windows
  - keep narrative text outside tiny UI
  accessibilityRisks:
  - decorative retro windows used as only navigation
  - desktop simulation shrunk unreadably
  - bitmap text used for long narrative
  signatureElements:
  - serif editorial title
  - classic desktop frame
  - bitmap icons
  - pale blue workspace
  - nested windows
  - background line drawing
  recognitionHeuristics:
  - The retro OS metaphor should support the story rather than dominate every section.
  - Modern editorial hierarchy must remain visible outside window simulations.
  - Bitmap icons and 1px frames should be consistent.
  scores:
    playful: 6
    nostalgic: 10
    technical: 6
    organic: 2
    editorial: 10
    pixel: 8
    illustrative: 7
    texture: 5
    bold: 7
    commerce: 3
    density: 7
  implementationComplexity: high
  compatibleSecondaryStyles:
  - paper-cut-editorial
  - terminal-community
  - glitch-fashion
  incompatibleSecondaryStyles:
  - cartoon-campaign at high strength
  - organic-garden-commerce at high strength
  - glossy futuristic styling
  fallbackBehavior: If authentic-looking bitmap assets are unavailable, create original monochrome pixel icons and simple
    window frames inspired by early desktop conventions without reproducing proprietary icons or exact OS screens.
  failureModes:
  - exactly copying an old OS
  - shrinking a desktop scene until unreadable
  - turning every section into a window
  - using bitmap type for long narrative copy
- id: playful-risograph
  referenceOrder: 8
  name: Playful Risograph Packaging
  aliases:
  - playful FMCG
  - screen-print brand
  - mascot packaging
  - risograph commerce
  referenceVisual: Bright food-brand page dominated by mustard yellow, cream, turquoise, orange, pink, and black; large
    product packs, smiling cartoon mascots, chunky hand lettering, stipple/halftone shading, badges, and vertical campaign
    statements.
  summary: A joyful consumer-brand style using bold flat color, custom chunky lettering, mascot illustration, hand-drawn
    copy, halftone/stipple shading, and product packaging as the hero graphic.
  description: A joyful packaging-first commerce language where product packs, mascots, custom display lettering, and screen-print
    texture carry the brand. Functional product information stays compact and clean beneath loud illustration.
  designPhilosophy: Treat the website like moving packaging and campaign print. Personality should come from original illustration,
    lettering, and print texture while commerce remains simple enough to disappear behind the brand.
  brandPersonality:
  - joyful
  - ethical
  - youthful
  - irreverent
  - friendly
  - bold
  emotionalTone:
  - energetic
  - warm
  - fun
  - optimistic
  - hand-printed
  bestFor:
  - food and beverage
  - snacks
  - coffee
  - sustainable consumer goods
  - kids/young adult brands
  - merch
  - playful subscriptions
  avoidFor:
  - serious B2B
  - legal
  - finance
  - clinical products
  - minimal luxury
  audience:
  - consumer-brand shoppers
  - younger audiences
  - families
  - design-aware sustainable buyers
  selectionProfile:
    pickWhen:
    - product packaging is visually strong
    - mascot/illustration is central
    - food/FMCG/consumer brand needs personality
    - playfulness supports conversion
    rejectWhen:
    - serious B2B/institutional context
    - no illustration/packaging assets exist
    - minimal luxury is required
    contentDensityFit:
      level: medium
      score: 5
      note: Works for product benefits and story sections, not dense admin information.
    mediaAssetFit:
      score: 10
      ideal:
      - packaging cutouts
      - custom mascots
      - hand-lettered campaign graphics
      minimum: Needs strong original product or illustration assets.
    interactionFit:
      score: 8
      note: Good for ecommerce and subscriptions when controls remain compact.
    accessibilityFit:
      score: 7
      note: Functional/legal information must use clean sans rather than hand lettering.
    implementationBudget: high
  palette:
    background: '#F5B418'
    surface: '#FFE9BF'
    text: '#10100E'
    muted_text: '#4D402A'
    secondary: '#55C5B2'
    accent: '#F4773E'
    accent_alt: '#E777A1'
    dark: '#080807'
  typography:
    display:
      direction: chunky custom display + one hand-lettered campaign voice
      weight: 700-900
    body:
      direction: compact clean sans
      size: 16-18px
    utility:
      direction: condensed/compact sans for product facts
    familyLimit: 3
  layout:
    grid: loose campaign grid
    alignment: asymmetric product/illustration clusters
    whitespace: medium
    overlap: products and doodles may overlap
    sectionRhythm: product hero -> benefit statement -> illustrated proof points -> reason grid -> newsletter mascot footer
  hero:
    visualPriority: packaging + mascot
    formula: cream/mustard field + oversized pack cutout + punchy copy + small claim/CTA + playful marks
    ctaCount: '1'
  components:
    navigation: compact text with optional announcement strip
    cards: replace with illustrated statements/badges
    buttons: small high-contrast printed labels
    forms: simple rectangular newsletter/checkout fields
    badges: round certifications, doodles, stamps
  media:
    photography: product packs/cutouts
    illustration: custom mascots with flat color + stipple
    icons: round badge/pictogram system
    texture:
    - stipple
    - halftone
    - screen-print grain
    textureStrength: 10-20% on illustration shading, not text
  surfaces:
    borders: black print-like outlines
    radius: 0-12px; badges may be circular
    shadows: flat painted/hard product shadows, no soft card elevation
  motion:
  - small wiggle
  - 2-4px bounce
  - packaging tilt
  - doodle stroke
  responsive:
  - one mascot/product group per screen
  - reduce decorative clusters
  - preserve loud display type
  - keep product facts readable
  accessibilityRisks:
  - hand lettering used for product/legal details
  - badges relying on color only
  - dense stipple behind text
  signatureElements:
  - mustard field
  - turquoise/orange palette
  - mascots
  - custom hand lettering
  - halftone/stipple
  - floating packaging
  recognitionHeuristics:
  - The site should feel like packaging came alive, not like ecommerce cards with stickers.
  - Print texture belongs primarily to illustrations and display art.
  - Product facts should remain visually quieter than brand statements.
  scores:
    playful: 10
    nostalgic: 7
    technical: 1
    organic: 6
    editorial: 7
    pixel: 1
    illustrative: 10
    texture: 9
    bold: 10
    commerce: 10
    density: 5
  implementationComplexity: high
  compatibleSecondaryStyles:
  - organic-garden-commerce
  - cartoon-campaign
  - paper-cut-editorial
  incompatibleSecondaryStyles:
  - terminal-community
  - glitch-fashion at high strength
  - minimal luxury systems
  fallbackBehavior: If mascot assets are unavailable, rely on strong packaging cutouts, bold flat color, original hand-drawn
    badges, and stipple graphics; do not substitute generic 3D blobs.
  failureModes:
  - mixing too many display fonts
  - making legal/product facts hand-lettered
  - glossy 3D product world
  - removing print texture until identity disappears
- id: cartoon-campaign
  referenceOrder: 9
  name: Cartoon Survival Campaign
  aliases:
  - comic commerce
  - cartoon campaign
  - illustrated landing page
  - bold character ecommerce
  referenceVisual: Zombie-themed campaign/ecommerce page with pale lime hero, giant black uppercase headline, pink hard-shadow
    CTA, thick outlined cartoon characters, black/teal/yellow section bands, irregular silhouettes, and simple product-focused
    copy.
  summary: A high-impact campaign style built from giant blunt headlines, flat color bands, thick outlined cartoon illustrations,
    simple CTAs, and playful irregular section transitions.
  description: 'A bold illustrated campaign system where each section becomes a self-contained poster: one giant message,
    one dominant cartoon object or character, a flat background, one CTA, and a strong irregular boundary.'
  designPhilosophy: Reduce each section to one unmistakable idea. Thick outlines, flat color, blunt type, and simple controls
    create instant comprehension while characters carry narrative personality.
  brandPersonality:
  - energetic
  - fun
  - direct
  - comic
  - irreverent
  - fan-oriented
  emotionalTone:
  - loud
  - playful
  - fast
  - approachable
  - theatrical
  bestFor:
  - games
  - entertainment
  - themed ecommerce
  - youth campaigns
  - events
  - merch
  - novelty products
  - comic brands
  avoidFor:
  - professional services
  - banking
  - luxury
  - minimal wellness
  - high-density SaaS
  audience:
  - gamers
  - entertainment fans
  - youth audiences
  - merchandise shoppers
  - event communities
  selectionProfile:
    pickWhen:
    - campaign/story sections can be simplified to one message each
    - custom cartoon illustration is available
    - game/entertainment/merch context fits
    - brand wants immediate playful impact
    rejectWhen:
    - dense SaaS/admin UI dominates
    - minimal premium tone is required
    - no illustration pipeline exists
    contentDensityFit:
      level: low
      score: 3
      note: Best for concise statements and conversion paths, not dense information.
    mediaAssetFit:
      score: 10
      ideal:
      - custom cartoon characters
      - product illustrations
      - themed objects
      minimum: Needs at least one coherent thick-outline illustration system.
    interactionFit:
      score: 7
      note: Good for landing/ecommerce flows; keep complex interaction in calmer bands.
    accessibilityFit:
      score: 8
      note: Strong contrast and large text are natural; avoid hiding controls in drawings.
    implementationBudget: medium-high
  palette:
    background: '#C8EE8E'
    surface: '#5BC3AF'
    text: '#090A08'
    muted_text: '#383C31'
    secondary: '#F6BB18'
    accent: '#E57391'
    accent_alt: '#F9F1A0'
    dark: '#080907'
  typography:
    display:
      direction: heavy wide uppercase sans
      weight: 800-900
      lineHeight: 0.80-0.95
    body:
      direction: simple readable sans
      size: 16-18px
    utility:
      direction: small clean sans or occasional hand-drawn label
    familyLimit: 2
  layout:
    grid: simple campaign grid underneath full-width color bands
    alignment: section-specific
    whitespace: medium-high around headline
    overlap: illustration may break section boundary
    sectionRhythm: color band + headline + illustration repeated with changing composition
  hero:
    visualPriority: headline + character scene
    formula: pale lime field + giant uppercase claim + one CTA + characters rising from irregular silhouette
    ctaCount: 1 dominant
  components:
    navigation: simple black text with one outlined CTA
    cards: avoid; use full-width sections
    buttons: 4-6px black border + hard shadow + flat fill
    forms: plain light fields with thick outline; keep away from illustration edges
    badges: comic stickers/labels
  media:
    photography: usually none
    illustration: flat cartoon with thick black outline
    icons: thick outlined objects/hands/tools
    texture:
    - optional subtle grain
    textureStrength: 0-3%
  surfaces:
    borders: 4-6px black on major cartoon/control assets
    radius: 0-14px
    shadows: hard black offset only
  motion:
  - small bounce
  - pop-in
  - button shadow shift
  - tiny squash/stretch
  responsive:
  - one illustration per viewport
  - stack CTA under copy
  - simplify boundary silhouettes
  - preserve giant headlines
  accessibilityRisks:
  - controls hidden in illustration
  - decorative characters obscuring focus
  - hard color bands with poor text contrast
  signatureElements:
  - flat lime/black/teal/yellow bands
  - thick comic outlines
  - giant uppercase campaign type
  - one hero cartoon per section
  - hard-shadow buttons
  - irregular section silhouettes
  recognitionHeuristics:
  - Every major section should have one dominant message and one dominant illustration.
  - Section boundaries should contribute to the cartoon world.
  - Controls remain obvious despite the illustration-heavy surface.
  scores:
    playful: 10
    nostalgic: 5
    technical: 1
    organic: 4
    editorial: 6
    pixel: 1
    illustrative: 10
    texture: 3
    bold: 10
    commerce: 9
    density: 3
  implementationComplexity: medium-high
  compatibleSecondaryStyles:
  - playful-risograph
  - organic-garden-commerce
  - pixel-humanist-agency
  incompatibleSecondaryStyles:
  - glitch-fashion
  - terminal-community at high strength
  - minimal luxury systems
  fallbackBehavior: If custom character art is limited, use a smaller coherent set of original objects/mascots repeatedly
    rather than mixing stock illustration styles.
  failureModes:
  - generic flat illustration with no outline system
  - too many messages per section
  - soft glass cards
  - controls hidden inside characters
styleIdMapping:
  papercut-editorial:
  - paper-cut-editorial
  pixel-retro:
  - pixel-pastoral
  - pixel-humanist-agency
  organic-commerce:
  - organic-garden-commerce
  terminal-tech:
  - terminal-community
  retro-mac:
  - retro-mac-editorial
  playful-packaging:
  - playful-risograph
  cartoon-campaign:
  - cartoon-campaign
  glitch-fashion:
  - glitch-fashion
styleSelectionNotes:
  legacyModesRemainValid: true
  canonicalCatalogStylesArePreferred: true
  rule: Choose a canonical catalog style whenever project evidence is specific enough; use a legacy umbrella name only for
    broad discussion or backwards compatibility.
  doNotBlendByDefault: true
  stylesAreReferenceDerivedNotBrandCopies: true
classificationAxes:
  playful: 0 = sober/institutional; 10 = overtly playful/characterful
  nostalgic: 0 = contemporary-neutral; 10 = strongly retro/archival
  technical: 0 = lifestyle/expressive; 10 = system/terminal/engineering oriented
  organic: 0 = synthetic/geometric; 10 = nature/material/handmade oriented
  editorial: 0 = utility-first; 10 = poster/magazine/art-direction driven
  pixel: 0 = smooth vector/photo language; 10 = bitmap/low-resolution language dominates
  illustrative: 0 = typography/photo only; 10 = custom illustration is central
  texture: 0 = flat/clean; 10 = tactile grain/halftone/grid is central
  bold: 0 = quiet; 10 = extreme scale/color/visual impact
  commerce: 0 = poor fit for transactional pages; 10 = naturally suited to ecommerce
  density: 0 = best for sparse content; 10 = can naturally carry dense information
agentOutputPlanSchema:
  selectedStyle: <canonical style id>
  styleConfidence: 0.00-1.00
  styleStrength: 0.35-1.00
  secondaryStyle: <canonical style id or null>
  selectionReason:
    productFit: <short reason>
    audienceFit: <short reason>
    moodFit: <short reason>
    densityFit: <short reason>
    mediaFit: <short reason>
    interactionFit: <short reason>
    accessibilityFit: <short reason>
  lockedDecisions:
    palette: <semantic palette>
    displayTypography: <direction>
    bodyTypography: <direction>
    heroConcept: <single dominant concept>
    imageTreatment: <treatment>
    textureTreatment: <0-2 systems>
    iconLanguage: <one coherent family>
    sectionBoundaryLanguage: <one coherent vocabulary>
    motionLanguage: <physical/digital/none>
  antiPatternsToAvoid:
  - <project-specific risk>
styleProfileSchema:
  requiredFields:
  - id
  - referenceOrder
  - name
  - aliases
  - referenceVisual
  - summary
  - description
  - designPhilosophy
  - brandPersonality
  - emotionalTone
  - bestFor
  - avoidFor
  - audience
  - selectionProfile
  - palette
  - typography
  - layout
  - hero
  - components
  - media
  - surfaces
  - motion
  - responsive
  - accessibilityRisks
  - signatureElements
  - recognitionHeuristics
  - scores
  - implementationComplexity
  - compatibleSecondaryStyles
  - incompatibleSecondaryStyles
  - fallbackBehavior
  - failureModes
  interpretation: Style profiles are normative defaults. Project-specific constraints may lower style strength but should
    not silently replace the selected design grammar.
---

# DESIGN.md
This document is both a **design system** and a **style-selection catalog**. The first layer tells an AI how to choose an art direction from the supplied reference families; the second layer tells it how to execute that direction consistently across tokens, components, imagery, motion, responsive behavior, accessibility, and implementation.

The catalog is intentionally specific, while the shared system remains reusable. The result should feel like one authored visual language with multiple coherent dialects, not a pile of unrelated reference notes.
## 0. How AI Agents Must Use This File

This file is a **style-selection system**, not a bag of decorative tricks.

Before producing components, the agent must:

1. identify the website's product category, audience, content density, brand personality, available media, and interaction needs;
2. score the nine styles using the rubric below;
3. select **one dominant style**;
4. optionally choose **one compatible secondary style**;
5. generate the page using the dominant style's composition, typography, imagery, controls, and motion rules;
6. keep the secondary style below roughly **30%** of the visual language;
7. verify that the result is recognizable as the chosen style even at thumbnail size.

Do **not** blend all nine references into one page. That produces design soup, which is technically food but nobody asked for it.

The point is to make a deliberate art-direction choice instead of defaulting to another centered SaaS hero with six rounded cards.
## 1. System Overview and Shared Design DNA
The system-level philosophy and the reference-level observations reinforce each other. The following rules define the common ground every style must preserve.
### 1.1 System overview
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
### 1.2 Shared DNA across all references
Although the references range from handmade paper to terminal UI, they share a clear design philosophy:

- **Typography is imagery.** Headlines may dominate, overlap, crop, distort, pixelate, or become symbols.
- **The layout is authored.** Sections resemble posters, magazine spreads, campaign panels, desktop scenes, or product advertisements.
- **Imperfection is intentional.** Pixel stair-steps, hand-drawn edges, halftone dots, paper grain, image corruption, and irregular boundaries are premium visual material.
- **Color is decisive.** Most references use a small number of confident colors rather than a large neutral rainbow.
- **Cards are not the default.** Content is grouped by composition, whitespace, windows, blobs, illustration, or type hierarchy.
- **One focal idea wins.** Every major section usually has one main headline, image, product, character, pixel object, or visual metaphor.
- **Functional UI stays simpler than the art direction.**
- **Texture supports identity.** Grain, grid, halftone, or line art adds materiality without becoming the whole design.
### 1.3 Non-negotiable design DNA

#### Expressive typography

Every major page needs at least one typographic moment with obvious personality: cut-paper display lettering, bitmap type, a massive blunt sans, elegant editorial serif, rounded lowercase branding, hand-lettered campaign copy, or oversized symbols.

Do not build the entire interface using one neutral sans-serif at predictable sizes.

#### Intentional imperfection

Accept slightly irregular silhouettes, small rotations, hand-drawn paths, pixel stair-stepping, halftone shading, controlled baseline variation, and selective image fragmentation.

Do not randomize every element. Imperfection must look authored, not broken.

#### Editorial composition

Treat pages like a sequence of posters, magazine spreads, product advertisements, or digital exhibitions.

Prefer dramatic hierarchy, asymmetric grids, large negative space, selective overlap, floating annotations, unusual column spans, and section-specific compositions.

Avoid repeating `heading + paragraph + three equal cards` throughout the page.

#### Limited palettes

A typical section should use one dominant surface, one primary ink, one supporting color, and one accent. Do not introduce unrelated colors just because a UI library includes them.

#### Tactile materiality

Use paper grain, film grain, halftone, technical grid, line art, or pixel texture where appropriate. Never use more than two texture systems at once.

## 2. Style Selection Framework
Choose the visual mode before choosing components. The detailed catalog names below are the precise style families; the broader legacy mode names remain valid umbrella categories and are mapped in the YAML front matter.
### 2.1 Required inputs

Before choosing a style, infer or read:

- **Product category:** commerce, editorial, portfolio, software, community, entertainment, archive, etc.
- **Brand personality:** calm, playful, rebellious, technical, nostalgic, organic, premium, youthful.
- **Content density:** low, medium, high.
- **Audience:** mainstream, design-aware, technical, youth culture, families, enterprise, enthusiasts.
- **Available media:** photography, product cutouts, illustrations, pixel art, archival imagery, no media.
- **Primary goal:** storytelling, conversion, exploration, utility, community, education.
- **Accessibility sensitivity:** ordinary, elevated, high.
- **Implementation budget:** low, medium, high.

### 2.2 Scoring formula

Score each candidate from **0–10** for each dimension:

```text
StyleScore =
  productCategoryFit × 0.25 +
  brandPersonalityFit × 0.20 +
  contentDensityFit × 0.15 +
  audienceFit × 0.15 +
  mediaAssetFit × 0.10 +
  interactionFit × 0.10 +
  accessibilityFit × 0.05
```

Normalize to `0.00–1.00`.

If the highest style is below `0.65`, use **Paper-Cut Editorial** as the broad expressive default or choose the least-conflicting style.

### 2.3 Fast decision tree

- **Nature / gardening / wellness / sustainable ecommerce** → **Organic Garden Commerce**
- **Food / FMCG / packaging / mascot-led consumer brand** → **Playful Risograph Packaging**
- **Game / entertainment / comic campaign / themed merch** → **Cartoon Survival Campaign**
- **Developer / crypto / cybersecurity / technical community** → **Neo-Terminal Community**
- **Creative agency / open-source studio**, friendlier than terminal → **Pixel Humanist Agency**
- **Design history / archive / museum / case study / retro computing** → **Macintosh Editorial Archive**
- **Fashion / music / youth culture / experimental portrait campaign** → **Glitch Fashion Editorial**
- **Dreamy nostalgia / image-led culture / low-content microsite** → **Pixel Pastoral**
- **Creative / handmade / editorial / hard to classify** → **Paper-Cut Editorial**

### 2.4 Content-density guardrail

- **Low density:** any style.
- **Medium density:** most styles work.
- **High density:** prefer Neo-Terminal Community, Macintosh Editorial Archive, Pixel Humanist Agency, or restrained Organic Garden Commerce.
- Avoid heavily distorted typography, pixel script, or large cartoon art as the main information layer for dense tools.

### 2.5 Style strength

- `0.35–0.50`: subtle influence, suitable for utility-heavy pages.
- `0.50–0.70`: balanced brand expression, default.
- `0.70–0.85`: strong campaign/editorial treatment.
- `0.85–1.00`: art-piece / launch / portfolio intensity.

Higher strength means stronger scale contrast, motifs, and section-specific composition. It does **not** mean worse usability.
### 2.6 Mode-selection matrix and mixing rules

#### Decision matrix

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

#### Mixing rules

Use at most one secondary mode.

Good combinations:

- `papercut-editorial` + `pixel-retro`
- `organic-commerce` + `playful-packaging`
- `terminal-tech` + `pixel-retro`
- `retro-mac` + `papercut-editorial`
- `cartoon-campaign` + `playful-packaging`
- `glitch-fashion` + `pixel-retro`

The secondary mode should appear through only one or two channels such as typography + icons, color + texture, or illustration + dividers.

### 2.7 Combining two styles without making a mess

A secondary style may alter **one or two** of the following:

- typography;
- iconography;
- texture;
- section-transition language;
- color accent;
- illustration treatment.

It should **not** replace the dominant style's layout, typography, color, imagery, and component system simultaneously.

#### Good combinations

- **Paper-Cut Editorial + Pixel Pastoral:** paper composition and palette with one bitmap display moment.
- **Organic Garden Commerce + Playful Risograph Packaging:** clean nature-led shop with hand-drawn mascot/packaging accents.
- **Neo-Terminal Community + Pixel Humanist Agency:** dark technical UI with friendlier oversized pixel illustrations in marketing sections.
- **Macintosh Editorial Archive + Paper-Cut Editorial:** archival windows surrounded by hand-drawn editorial annotation.
- **Cartoon Survival Campaign + Playful Risograph Packaging:** campaign section structure with stipple texture and richer mascot treatment.

#### Bad combination

Using a grainy landscape, giant pixel script, neon terminal grid, retro Mac windows, organic blobs, thick cartoon monsters, halftone snack mascots, and a papercut starburst in the same hero.

That is not eclectic. That is a hostage situation.

### 2.8 Hard gates before scoring

Scoring is not enough by itself. An AI should first eliminate or penalize styles that cannot be executed responsibly with the actual project.

**Asset gate:** illustration-heavy styles need an illustration pipeline; photo-led styles need strong photography; glitch-fashion needs a focal editorial image; retro-computing styles need original bitmap/window assets. If those assets do not exist and cannot be created within the implementation budget, reduce that candidate before scoring.

**Density gate:** visually aggressive poster styles can still wrap a real product, but dense task areas must become calmer. For dashboards, tables, documentation, forms, and repeated workflows, prefer `terminal-community`, `retro-mac-editorial`, or a restrained `pixel-humanist-agency`. Use campaign styles primarily in the marketing shell.

**Accessibility gate:** reject any treatment that requires critical information to become tiny, decorative, corrupted, low-contrast, or motion-dependent. First reduce style strength and move expression into typography, color, illustration, framing, and section composition. If usability still conflicts with the style, usability wins.

**Interaction gate:** the more complex the workflow, the more conventional the control layer should become. A page can look radically editorial while its inputs, menus, focus states, tables, and dialogs remain boringly competent. Humanity survives another checkbox.

### 2.9 Canonical style IDs and legacy aliases

Use the nine canonical IDs when generating a website:

| Canonical ID | Style | Legacy / umbrella mapping |
|---|---|---|
| `paper-cut-editorial` | Paper-Cut Editorial | `papercut-editorial` |
| `pixel-pastoral` | Pixel Pastoral | `pixel-retro` |
| `glitch-fashion` | Glitch Fashion Editorial | `glitch-fashion` |
| `organic-garden-commerce` | Organic Garden Commerce | `organic-commerce` |
| `pixel-humanist-agency` | Pixel Humanist Agency | `pixel-retro` |
| `terminal-community` | Neo-Terminal Community | `terminal-tech` |
| `retro-mac-editorial` | Macintosh Editorial Archive | `retro-mac` |
| `playful-risograph` | Playful Risograph Packaging | `playful-packaging` |
| `cartoon-campaign` | Cartoon Survival Campaign | `cartoon-campaign` |

Legacy names remain valid for backwards compatibility, but the canonical profiles are more precise and should drive actual generation.

### 2.10 What the AI must lock before coding

After style selection, the AI must commit to these decisions before building components:

1. dominant canonical style;
2. style confidence and strength;
3. optional secondary style and the exact one or two channels it may influence;
4. semantic palette;
5. display, body, and utility type directions;
6. one hero concept;
7. one image/illustration treatment;
8. zero to two texture systems;
9. one icon language;
10. one section-boundary vocabulary;
11. one motion language;
12. project-specific anti-patterns to avoid.

If those decisions are not clear, the design is not ready to code.

## 3. Style Catalog at a Glance
| Style | Best at | Avoid when | Core signature |
|---|---|---|---|

| **Paper-Cut Editorial** | creative studios, artist portfolios, indie magazines | dense enterprise dashboards, banking | oversized irregular display lettering, warm cream paper, earthy green |

| **Pixel Pastoral** | music microsites, fashion drops, creative portfolios | formal enterprise software, dense documentation | giant pixel-script word, grainy pastoral photo, acidic yellow |

| **Glitch Fashion Editorial** | fashion, music, creative direction portfolios | healthcare, banking | oversized distorted headline, recognizable-but-corrupted portrait, fine grid overlay |

| **Organic Garden Commerce** | gardening, plants, wellness | cybersecurity, developer consoles | lush full-bleed nature photo, huge rounded lowercase wordmark, cream commerce surface |

| **Pixel Humanist Agency** | creative agencies, developer studios, open-source teams | luxury brands, formal institutions | pale lime field, huge black-and-white pixel symbol, mono copy |

| **Neo-Terminal Community** | developer communities, blockchain, open-source tooling | wellness, weddings | near-black grid, giant pixel Earth/object, acid lime |

| **Macintosh Editorial Archive** | design history, museums, creative portfolios | fast checkout flows, dense operational dashboards | serif editorial title, classic desktop frame, bitmap icons |

| **Playful Risograph Packaging** | food and beverage, snacks, coffee | serious B2B, legal | mustard field, turquoise/orange palette, mascots |

| **Cartoon Survival Campaign** | games, entertainment, themed ecommerce | professional services, banking | flat lime/black/teal/yellow bands, thick comic outlines, giant uppercase campaign type |


---
The next section provides the full breakdown for each reference family. Use it as the primary source when deciding how a specific website should look and behave.
## 4. Detailed Style Profiles
### 4.1 Paper-Cut Editorial

**Reference family:** Handmade cut-paper type specimen / Papercuto-style reference


**Aliases:** papercut, handmade editorial, cut-paper poster, organic type specimen


**One-line summary:** A tactile, handmade editorial system built from oversized irregular lettering, warm paper tones, earthy accents, hand-drawn annotations, and intentionally imperfect geometry.



#### AI Selection Snapshot

**Choose this style when:** the brand should feel handcrafted or art-directed; the page is portfolio/editorial/cultural; there is room for oversized display type; warm tactile imagery or paper-like surfaces fit the content.

**Reject or heavily reduce it when:** the product is a dense operational dashboard; formal trust conventions must dominate; custom display typography cannot be sourced or approximated safely.

**Natural content density:** **low-medium** — Best when information can alternate between loud poster moments and quieter readable bands.

**Media dependency:** 8/10. Ideal assets: editorial photography, paper textures, hand-drawn SVG marks. Can work without photography if typography and shapes are strong.

**Interaction fit:** 5/10 — Good for marketing and light interaction; keep forms and complex controls conventional.

**Accessibility fit:** 7/10 — Strong if decorative type is display-only and annotations never carry critical information.

**Implementation budget:** medium.

#### Design Philosophy & Brand Personality

Make the interface feel assembled rather than rendered. Precision exists underneath the composition, but visible surfaces should carry controlled imperfection and evidence of a hand-made process.

**Brand personality:** warm, artistic, craft-led, independent, human, slightly rebellious, culture-aware.

#### Reference Visual Breakdown

Papercuto-style type specimen: oversized cream cut-paper lettering over a muted olive interior, handwritten notes, orange starburst, and a cream alphabet specimen with earthy green glyphs.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** editorial photography, paper textures, hand-drawn SVG marks.

**Interaction strategy:** Good for marketing and light interaction; keep forms and complex controls conventional.

**Form treatment:** simple rectangular fields on clean paper surface; expressive labels around, not inside, the inputs

#### Recognition Heuristics

- At thumbnail size the page should read as a handmade poster, not a standard landing page.
- At least one major heading must look physically shaped rather than neutrally typeset.
- The page needs a warm paper/material feeling even if photography is absent.

#### Incompatible Secondary Styles

- terminal-community at high strength
- glitch-fashion at high strength
- cold corporate minimalism

#### Fallback Behavior

If custom cut-paper type or illustration assets are unavailable, keep the warm palette, giant asymmetric display type, hand-drawn annotation system, and paper-like containers rather than replacing the style with generic minimalism.

#### Common AI Failure Modes

- generic cream SaaS template with quirky font
- too much random rotation
- distressing every edge
- using handwritten text for important instructions

#### Description

A tactile, handmade editorial system built from oversized irregular lettering, warm paper tones, earthy accents, hand-drawn annotations, and intentionally imperfect geometry. It feels tactile, warm, human, and slightly rebellious against digital perfection. The interface should resemble an art-directed poster or type specimen carefully translated into a usable website.


#### Emotional Tone

- warm
- handmade
- artful
- playful
- imperfect
- editorial
- tactile


#### Best-Fit Websites

- creative studios
- artist portfolios
- indie magazines
- cultural projects
- fashion capsules
- craft brands
- experimental landing pages


#### Poor-Fit Websites

- dense enterprise dashboards
- banking
- medical portals
- high-frequency trading
- data-heavy admin tools


#### Typical Audience

- design-aware consumers
- creative communities
- younger editorial audiences
- craft and culture buyers


#### Visual Keywords

- oversized irregular display lettering
- warm cream paper
- earthy green
- burnt orange starburst
- tiny handwritten notes
- controlled imperfection


#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|

| `background` | `#F2E7CB` | Main page or major section field |

| `surface` | `#FFF4D8` | Secondary surface / paper / panel |

| `text` | `#211B16` | Primary readable text |

| `muted_text` | `#655D51` | Secondary copy and metadata |

| `secondary` | `#4F9461` | Supporting brand color |

| `accent` | `#EF663F` | High-energy accent / CTA / marker |

| `dark` | `#30251E` | Dark anchor / border / inverse section |

| `line` | `#302A24` | Rules, borders, grids |


##### Color rules

- Use the background/surface pair for roughly 55–75% of the page.

- Keep the accent to roughly 5–15% unless the style explicitly uses a full accent-color section.

- Never introduce a random purple/blue gradient because a component generator got bored.

- Maintain WCAG AA contrast for essential copy and controls.


#### Typography

- **Display:** Irregular chunky cut-paper display face; polygonal edges; uneven width; high personality.

- **Body:** Warm humanist sans or soft grotesk.

- **Annotation / utility:** Narrow handwritten / marker-like face.

- Display type may be very large and tightly set.

- Body copy must remain conventional and readable.

- Do not fake all irregularity with extreme transforms.


##### Type hierarchy

```css
--display-xl: clamp(4.5rem, 12vw, 11rem);
--display-lg: clamp(3rem, 7vw, 6.5rem);
--h1: clamp(2.6rem, 5vw, 5rem);
--h2: clamp(2rem, 3.8vw, 3.75rem);
--body-lg: 1.125rem;
--body: 1rem;
--label: 0.78rem;
--micro: 0.6875rem;
```

The exact family changes by style, but the scale contrast should remain obvious.


#### Layout & Composition

Poster-like asymmetry with strong scale contrast, generous negative space, selective overlap, and small annotation islands around large typographic masses.

Use a 12-column desktop grid underneath the composition. The visible result does not need to look like a conventional grid, but alignment must remain deliberate.


#### Hero Pattern
Large atmospheric image or earthy flat field + huge cream/ink headline + one hand-drawn note + one starburst/badge + minimal supporting copy.


#### Navigation Pattern
Quiet text navigation, optionally with hand-drawn underline or one irregular CTA label.


#### Cards / Content Containers
Paper labels, irregular blobs, cutout panels, pinned-photo frames; avoid identical rounded cards.


#### Buttons & CTAs
Flat high-contrast labels with irregular edges or thin hand-drawn borders; subtle rotate/translate hover.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.


#### Imagery & Illustration
Warm, muted lifestyle photography, interiors, textiles, books, craft, paper, natural materials; editorial crop; subtle grain.


#### Iconography
Simple hand-drawn outline icons or custom irregular SVG marks.


#### Texture & Material
- paper grain
- ink irregularity
- subtle film grain

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.


#### Borders, Radius & Shadows

- **Borders:** 1–2px ink lines, slightly irregular SVG paths, imperfect circles/capsules.
- **Shadows:** Very light paper shadow only; never glossy floating elevation.
- Do not default every component to `border-radius: 24px`.


#### Section Transitions
Whitespace breaks, paper-cut edges, hand-drawn zigzags, oversized type as section divider.


#### Motion & Interaction
Physical and restrained: 1–2px lift, ±1deg rotation, paper slide-in, underline draw.


Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.


#### Responsive / Mobile Adaptation
Stack into poster panels; preserve one oversized typographic event per viewport; reduce overlap but keep annotations.


#### Accessibility Risks
- Do not use decorative display fonts for long copy.
- Keep annotations non-critical.
- Maintain AA contrast over photos.
- Preserve visible focus states.


#### Recognizable Signature Elements
- oversized irregular display lettering
- warm cream paper
- earthy green
- burnt orange starburst
- tiny handwritten notes
- controlled imperfection

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.


#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 7/10 |
| Nostalgia | 6/10 |
| Technical | 2/10 |
| Organic | 8/10 |
| Editorial | 10/10 |
| Pixel | 1/10 |
| Illustration | 7/10 |
| Texture | 8/10 |
| Boldness | 9/10 |
| Commerce fit | 6/10 |
| Content density | 3/10 |


#### Complexity
**Medium** — Requires custom type/shape handling and careful composition, but little complex interaction.


#### Compatible Secondary Styles

- **Pixel Pastoral** — use only as a supporting influence.

- **Macintosh Editorial Archive** — use only as a supporting influence.

- **Playful Risograph Packaging** — use only as a supporting influence.


#### Do
- Use type as the main visual mass.
- Keep warm tactile materials.
- Use annotations selectively.
- Let asymmetry feel intentional.


#### Don't
- Do not add glassmorphism.
- Do not turn every surface into a rounded card.
- Do not over-distress text.
- Do not use cold corporate blue as a random accent.


#### Implementation Recipe

1. Select a warm paper palette.
2. Choose one irregular display face + readable sans + handwritten annotation face.
3. Build a poster-like hero with one large type mass.
4. Add one hand-drawn badge/shape system.
5. Add subtle paper grain.
6. Use open editorial sections instead of card grids.


---

### 4.2 Pixel Pastoral

**Reference family:** Pixel-script 'Good Luck' over grainy landscape + acidic flat-color panel


**Aliases:** lo-fi pixel romance, pastoral Y2K, pixel nostalgia, retro digital landscape


**One-line summary:** A nostalgic low-resolution editorial style that contrasts grainy organic photography with giant bitmap or pixel-script typography and a tiny clean UI layer.



#### AI Selection Snapshot

**Choose this style when:** the site is image-led and low-density; nostalgia and mood matter more than utility density; strong landscape/lifestyle photography exists; music/fashion/event/culture context fits.

**Reject or heavily reduce it when:** long documentation or forms dominate; enterprise/institutional trust is primary; there is no strong hero photography or visual media.

**Natural content density:** **low** — Works best with sparse text and large visual pauses.

**Media dependency:** 9/10. Ideal assets: grainy landscape or lifestyle photography, bitmap display type. Requires at least one compelling image or strong color field.

**Interaction fit:** 3/10 — Best for browsing, launches, and storytelling rather than complex workflows.

**Accessibility fit:** 6/10 — Keep pixel script decorative and ensure tiny labels are not essential.

**Implementation budget:** low-medium.

#### Design Philosophy & Brand Personality

Use low resolution as poetry, not as a novelty filter. The physical world should remain soft and imperfect while typography or graphic symbols reveal the digital grid.

**Brand personality:** nostalgic, dreamy, indie, youthful, romantic, experimental.

#### Reference Visual Breakdown

Grainy green hillside/blue-sky image with giant yellow pixel-script “Good,” followed by an acidic yellow panel with blue pixel-script “Luck” and tiny clean corner labels.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** grainy landscape or lifestyle photography, bitmap display type.

**Interaction strategy:** Best for browsing, launches, and storytelling rather than complex workflows.

**Form treatment:** plain and modern; place in a quiet flat-color band

#### Recognition Heuristics

- The page should feel like an art-school digital poster over analog photography.
- Pixel treatment should be concentrated in type/symbols, not every component.
- Large empty areas are necessary.

#### Incompatible Secondary Styles

- cartoon-campaign at high strength
- playful-risograph at high strength
- dense enterprise UI language

#### Fallback Behavior

If pixel-script type is unavailable, use a legible bitmap display or convert a short decorative word to an original pixel SVG while preserving semantic text accessibly.

#### Common AI Failure Modes

- turning it into a retro game UI
- pixelating all body text
- overcrowding the photograph
- removing grain until it becomes generic stock imagery

#### Description

A nostalgic low-resolution editorial style that contrasts grainy organic photography with giant bitmap or pixel-script typography and a tiny clean UI layer. Its power comes from the contrast between organic photography and visibly digital type. The result feels dreamy, nostalgic, low-fi, romantic, and intentionally low-resolution without becoming a fake retro game interface.


#### Emotional Tone

- nostalgic
- dreamy
- lo-fi
- romantic
- quietly surreal
- youthful


#### Best-Fit Websites

- music microsites
- fashion drops
- creative portfolios
- event pages
- youth culture
- experimental campaigns
- indie product launches


#### Poor-Fit Websites

- formal enterprise software
- dense documentation
- government portals
- serious finance
- long-form accessibility-critical products


#### Typical Audience

- Gen Z / millennial nostalgia audiences
- music and fashion communities
- art and culture visitors


#### Visual Keywords

- giant pixel-script word
- grainy pastoral photo
- acidic yellow
- washed blue
- tiny clean labels
- nostalgic low-resolution contrast


#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|

| `background` | `#EFE85A` | Main page or major section field |

| `surface` | `#8BB5D2` | Secondary surface / paper / panel |

| `text` | `#192019` | Primary readable text |

| `muted_text` | `#52616B` | Secondary copy and metadata |

| `secondary` | `#4A84BC` | Supporting brand color |

| `accent` | `#EEE95A` | High-energy accent / CTA / marker |

| `dark` | `#172117` | Dark anchor / border / inverse section |

| `line` | `#4B6D77` | Rules, borders, grids |


##### Color rules

- Use the background/surface pair for roughly 55–75% of the page.

- Keep the accent to roughly 5–15% unless the style explicitly uses a full accent-color section.

- Never introduce a random purple/blue gradient because a component generator got bored.

- Maintain WCAG AA contrast for essential copy and controls.


#### Typography

- **Display:** Bitmap or pixel-script display, intentionally low-resolution and oversized.

- **Body:** Clean modern sans with thin or regular weight.

- **Annotation / utility:** Tiny neutral sans or mono in corners.

- Keep pixel type for display only.

- Use strong size contrast between huge pixel words and tiny clean labels.

- Allow sparse lowercase or script-like pixel lettering.


##### Type hierarchy

```css
--display-xl: clamp(4.5rem, 12vw, 11rem);
--display-lg: clamp(3rem, 7vw, 6.5rem);
--h1: clamp(2.6rem, 5vw, 5rem);
--h2: clamp(2rem, 3.8vw, 3.75rem);
--body-lg: 1.125rem;
--body: 1rem;
--label: 0.78rem;
--micro: 0.6875rem;
```

The exact family changes by style, but the scale contrast should remain obvious.


#### Layout & Composition

Large image-led panels, sparse corner labels, extreme scale contrast, simple two-part or stacked editorial compositions.

Use a 12-column desktop grid underneath the composition. The visible result does not need to look like a conventional grid, but alignment must remain deliberate.


#### Hero Pattern
Full-bleed landscape or textured photo + one huge pixel word over the center/foreground + tiny labels placed far apart.


#### Navigation Pattern
Minimal, nearly invisible; tiny clean text or compact top/bottom controls.


#### Cards / Content Containers
Mostly none. Prefer full-bleed image panels and flat-color fields.


#### Buttons & CTAs
Small, plain, high-contrast, almost utility-like; do not compete with the bitmap headline.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.


#### Imagery & Illustration
Grainy landscapes, natural hills, skies, flowers, analog-feeling photography; mild color cast and texture.


#### Iconography
Pixel cursors, bitmap stars, tiny 8-bit symbols.


#### Texture & Material
- film grain
- scan-like noise
- subtle compression texture

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.


#### Borders, Radius & Shadows

- **Borders:** Usually absent; if needed, 1px simple lines.
- **Shadows:** None.
- Do not default every component to `border-radius: 24px`.


#### Section Transitions
Hard color cut, image-to-flat panel transition, pixel stair-step divider.


#### Motion & Interaction
Step-based reveals, tiny pixel cursor blink, slow photo drift; keep overall motion minimal.


Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.


#### Responsive / Mobile Adaptation
Crop imagery aggressively, keep display word huge, move corner labels into safe margins; avoid shrinking pixel type into illegibility.


#### Accessibility Risks
- Pixel display text needs adequate size.
- Do not encode essential information in decorative script-like bitmap text.
- Avoid low-contrast blue-on-yellow body copy.


#### Recognizable Signature Elements
- giant pixel-script word
- grainy pastoral photo
- acidic yellow
- washed blue
- tiny clean labels
- nostalgic low-resolution contrast

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.


#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 7/10 |
| Nostalgia | 10/10 |
| Technical | 3/10 |
| Organic | 7/10 |
| Editorial | 9/10 |
| Pixel | 10/10 |
| Illustration | 4/10 |
| Texture | 8/10 |
| Boldness | 8/10 |
| Commerce fit | 4/10 |
| Content density | 2/10 |


#### Complexity
**Low–Medium** — Relies on strong media selection and typography more than heavy component engineering.


#### Compatible Secondary Styles

- **Paper-Cut Editorial** — use only as a supporting influence.

- **Glitch Fashion Editorial** — use only as a supporting influence.

- **Neo-Terminal Community** — use only as a supporting influence.


#### Do
- Keep the photo organic and the type visibly digital.
- Use huge bitmap scale.
- Keep utility UI tiny and calm.
- Embrace grain.


#### Don't
- Do not use pixel fonts for paragraphs.
- Do not clutter the landscape with UI.
- Do not use glossy 3D assets.
- Do not sharpen away the lo-fi texture.


#### Implementation Recipe

1. Choose one grainy hero photo.
2. Use a two-color bitmap display word at huge scale.
3. Add tiny clean corner labels.
4. Follow with one flat acidic color panel.
5. Keep controls minimal.
6. Use integer pixel scaling.


---

### 4.3 Glitch Fashion Editorial

**Reference family:** Fashion portrait poster with oversized FASHION lettering, technical grid, and blocky image corruption


**Aliases:** digital fashion collage, glitch editorial, datamosh magazine, corrupted portrait poster


**One-line summary:** A raw fashion-editorial system that combines oversized distorted typography, image fragmentation, visible grids, muted photography, and tiny disciplined microcopy.



#### AI Selection Snapshot

**Choose this style when:** portrait/editorial imagery is central; brand should feel experimental or disruptive; content density is low-medium; campaign impact matters more than conventional polish.

**Reject or heavily reduce it when:** critical forms/tables dominate; the audience expects calm institutional trust; no strong focal imagery exists.

**Natural content density:** **low-medium** — Dense information should move into calm bands outside corrupted hero zones.

**Media dependency:** 10/10. Ideal assets: strong portrait/fashion image, high-resolution source for selective corruption. Requires one visually strong focal image.

**Interaction fit:** 4/10 — Best for campaigns, galleries, launches; functional UI must stay calm.

**Accessibility fit:** 4/10 — High risk if corruption or cropping touches essential text/controls.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Break the image, not the information architecture. The visual system earns its aggression through disciplined alignment, limited corruption, and clear hierarchy.

**Brand personality:** rebellious, fashion-forward, provocative, experimental, confident, underground.

#### Reference Visual Breakdown

Portrait-driven fashion poster with huge cropped white FASHION lettering, visible fine grid, washed blue field, green cap, tiny microcopy, and rectangular image corruption across the face.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** strong portrait/fashion image, high-resolution source for selective corruption.

**Interaction strategy:** Best for campaigns, galleries, launches; functional UI must stay calm.

**Form treatment:** place on clean uncorrupted field with simple rules

#### Recognition Heuristics

- At least one focal image must show selective rectangular corruption.
- A visible grid or disciplined alignment must counterbalance distortion.
- Functional controls should look calmer than the hero.

#### Incompatible Secondary Styles

- cartoon-campaign
- organic-garden-commerce at high strength
- soft luxury minimalism

#### Fallback Behavior

If image-corruption tooling is unavailable, use layered cropped rectangles or masked duplicates of the focal image rather than generic blur/chromatic aberration.

#### Common AI Failure Modes

- glitching everything
- continuous shaking/flicker
- obscuring important text
- random distortion without grid discipline

#### Description

A raw fashion-editorial system that combines oversized distorted typography, image fragmentation, visible grids, muted photography, and tiny disciplined microcopy. The composition balances visual damage with strict editorial control. Corruption happens to the focal image and headline while microcopy, alignment, and grid remain disciplined.


#### Emotional Tone

- rebellious
- raw
- fashion-forward
- experimental
- confident
- chaotic-but-controlled


#### Best-Fit Websites

- fashion
- music
- creative direction portfolios
- art publications
- streetwear
- experimental campaigns
- festival identity


#### Poor-Fit Websites

- healthcare
- banking
- legal services
- complex productivity tools
- children's products requiring calm clarity


#### Typical Audience

- fashion-forward audiences
- creative professionals
- experimental culture communities


#### Visual Keywords

- oversized distorted headline
- recognizable-but-corrupted portrait
- fine grid overlay
- tiny editorial captions
- muted blue/gray field
- controlled chaos


#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|

| `background` | `#8EAFC5` | Main page or major section field |

| `surface` | `#D4D0C5` | Secondary surface / paper / panel |

| `text` | `#F4EEE7` | Primary readable text |

| `muted_text` | `#D6D1CB` | Secondary copy and metadata |

| `secondary` | `#56A162` | Supporting brand color |

| `accent` | `#E8896B` | High-energy accent / CTA / marker |

| `dark` | `#171717` | Dark anchor / border / inverse section |

| `line` | `#A8B7C1` | Rules, borders, grids |


##### Color rules

- Use the background/surface pair for roughly 55–75% of the page.

- Keep the accent to roughly 5–15% unless the style explicitly uses a full accent-color section.

- Never introduce a random purple/blue gradient because a component generator got bored.

- Maintain WCAG AA contrast for essential copy and controls.


#### Typography

- **Display:** Huge grotesk or mixed-scale sans with deliberate rotation, crop, stretch, and letter collisions.

- **Body:** Tiny Swiss-style sans or narrow grotesk.

- **Annotation / utility:** Small bold sans/mono labels.

- Typography may cross media boundaries.

- Use distortion selectively.

- Keep functional text rigid and calm.


##### Type hierarchy

```css
--display-xl: clamp(4.5rem, 12vw, 11rem);
--display-lg: clamp(3rem, 7vw, 6.5rem);
--h1: clamp(2.6rem, 5vw, 5rem);
--h2: clamp(2rem, 3.8vw, 3.75rem);
--body-lg: 1.125rem;
--body: 1rem;
--label: 0.78rem;
--micro: 0.6875rem;
```

The exact family changes by style, but the scale contrast should remain obvious.


#### Layout & Composition

Centered or off-center portrait anchor with type crossing the frame; a fine grid creates order underneath intentional chaos.

Use a 12-column desktop grid underneath the composition. The visible result does not need to look like a conventional grid, but alignment must remain deliberate.


#### Hero Pattern
Large portrait + headline extending beyond viewport edges + 10–35% blocky image corruption + small caption clusters.


#### Navigation Pattern
Very minimal, often tiny and edge-aligned.


#### Cards / Content Containers
Avoid cards; use transparent overlays, cropped type, text columns, and image blocks.


#### Buttons & CTAs
Understated, flat, monochrome, editorial labels.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.


#### Imagery & Illustration
Portrait photography, street/fashion imagery, washed sky/gray backgrounds, selective rectangular pixel corruption.


#### Iconography
Minimal monochrome symbols only.


#### Texture & Material
- fine grid
- paper/canvas grain
- compression artifacts

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.


#### Borders, Radius & Shadows

- **Borders:** Fine 1px grid/rule lines.
- **Shadows:** None.
- Do not default every component to `border-radius: 24px`.


#### Section Transitions
Cropping, hard image cuts, typography crossing boundaries, grid continuation.


#### Motion & Interaction
Short glitch burst, block reveal, masked type entrance; never constant shaking.


Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.


#### Responsive / Mobile Adaptation
Reduce corruption area, keep one dominant crop, prevent type from obscuring faces or essential text.


#### Accessibility Risks
- Keep body copy outside heavily corrupted areas.
- Do not place important controls under glitch effects.
- Avoid excessive motion or flicker.


#### Recognizable Signature Elements
- oversized distorted headline
- recognizable-but-corrupted portrait
- fine grid overlay
- tiny editorial captions
- muted blue/gray field
- controlled chaos

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.


#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 5/10 |
| Nostalgia | 7/10 |
| Technical | 5/10 |
| Organic | 3/10 |
| Editorial | 10/10 |
| Pixel | 8/10 |
| Illustration | 3/10 |
| Texture | 9/10 |
| Boldness | 10/10 |
| Commerce fit | 5/10 |
| Content density | 5/10 |


#### Complexity
**High** — Needs careful image treatment, responsive cropping, and disciplined layering.


#### Compatible Secondary Styles

- **Pixel Pastoral** — use only as a supporting influence.

- **Macintosh Editorial Archive** — use only as a supporting influence.

- **Paper-Cut Editorial** — use only as a supporting influence.


#### Do
- Corrupt one focal asset, not everything.
- Use the grid to restore order.
- Keep microcopy disciplined.
- Allow type to crop dramatically.


#### Don't
- Do not glitch every image.
- Do not make important text unreadable.
- Do not animate continuous flicker.
- Do not replace composition with random distortion.


#### Implementation Recipe

1. Choose one strong portrait.
2. Overlay a subtle grid.
3. Apply block corruption to 10–35% of the image.
4. Place an oversized cropped headline across the frame.
5. Add tiny editorial captions.
6. Keep motion to one short glitch/reveal pattern.


---

### 4.4 Organic Garden Commerce

**Reference family:** Lush garden ecommerce page with rounded wordmark, cream panels, product specimens, and organic blob copy block


**Aliases:** nature-led ecommerce, soft organic commerce, garden editorial shop, botanical minimalism


**One-line summary:** A clean but expressive ecommerce style pairing lush nature photography, cream paper-like surfaces, oversized rounded branding, soft organic shapes, and sparse product presentation.



#### AI Selection Snapshot

**Choose this style when:** nature/product photography is strong; ecommerce conversion matters; brand is sustainable/wellness/home/garden; friendly premium rather than luxury-formal is desired.

**Reject or heavily reduce it when:** brand is technical/cyber; no useful product or nature imagery exists; dense B2B workflows dominate.

**Natural content density:** **medium** — Handles catalogs and product details well if sections stay spacious.

**Media dependency:** 10/10. Ideal assets: lush nature photography, clean product cutouts, packaging imagery. Needs either strong nature or product imagery.

**Interaction fit:** 8/10 — Naturally compatible with shopping, filtering, quantity controls, and checkout pathways.

**Accessibility fit:** 9/10 — Easy to keep readable if controls move off busy photography.

**Implementation budget:** medium.

#### Design Philosophy & Brand Personality

Let nature and product imagery create emotion while UI remains quiet. Organic shapes and soft typography should feel grown rather than engineered, but transaction controls remain precise.

**Brand personality:** fresh, friendly, sustainable, optimistic, approachable, design-aware.

#### Reference Visual Breakdown

Garden ecommerce page with lush green hero photography, huge rounded lowercase wordmark, floating pill navigation, cream product rows, an irregular cream copy blob, and editorial product-box composition.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** lush nature photography, clean product cutouts, packaging imagery.

**Interaction strategy:** Naturally compatible with shopping, filtering, quantity controls, and checkout pathways.

**Form treatment:** clean cream/white inputs with dark borders; no organic-shaped fields

#### Recognition Heuristics

- The page must still look like a shop, not merely a nature poster.
- Product presentation should be sparse and editorial rather than card-heavy.
- Organic shapes are used for storytelling, not every control.

#### Incompatible Secondary Styles

- terminal-community
- glitch-fashion at high strength
- hard cyberpunk styling

#### Fallback Behavior

If lush photography is unavailable, use cream/green flat fields, botanical closeups or simple original line art, and emphasize the rounded wordmark plus product cutouts.

#### Common AI Failure Modes

- generic Shopify cards
- overusing pills
- oversaturated stock nature
- placing tiny controls on busy grass photography

#### Description

A clean but expressive ecommerce style pairing lush nature photography, cream paper-like surfaces, oversized rounded branding, soft organic shapes, and sparse product presentation. This is the cleanest and most conventionally usable style in the catalog, but it stays distinctive through lush photography, oversized friendly branding, sparse product treatment, and organic shapes.


#### Emotional Tone

- fresh
- friendly
- calm
- natural
- optimistic
- approachable


#### Best-Fit Websites

- gardening
- plants
- wellness
- natural goods
- home products
- sustainable brands
- food and lifestyle ecommerce


#### Poor-Fit Websites

- cybersecurity
- developer consoles
- luxury finance
- dense B2B admin tools


#### Typical Audience

- lifestyle shoppers
- nature-oriented consumers
- design-aware ecommerce audiences


#### Visual Keywords

- lush full-bleed nature photo
- huge rounded lowercase wordmark
- cream commerce surface
- organic blob text panel
- spacious product specimens
- minimal dark pills


#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|

| `background` | `#FFF9E8` | Main page or major section field |

| `surface` | `#F6F0DA` | Secondary surface / paper / panel |

| `text` | `#292126` | Primary readable text |

| `muted_text` | `#5D5750` | Secondary copy and metadata |

| `secondary` | `#2F6D38` | Supporting brand color |

| `accent` | `#D5E788` | High-energy accent / CTA / marker |

| `dark` | `#2A2025` | Dark anchor / border / inverse section |

| `line` | `#3A3334` | Rules, borders, grids |


##### Color rules

- Use the background/surface pair for roughly 55–75% of the page.

- Keep the accent to roughly 5–15% unless the style explicitly uses a full accent-color section.

- Never introduce a random purple/blue gradient because a component generator got bored.

- Maintain WCAG AA contrast for essential copy and controls.


#### Typography

- **Display:** Very large rounded lowercase sans / friendly geometric wordmark.

- **Body:** Clean grotesk or humanist sans.

- **Annotation / utility:** Thin editorial sans.

- Use massive soft wordmarks against photography.

- Keep product metadata compact.

- Avoid overly quirky body text.


##### Type hierarchy

```css
--display-xl: clamp(4.5rem, 12vw, 11rem);
--display-lg: clamp(3rem, 7vw, 6.5rem);
--h1: clamp(2.6rem, 5vw, 5rem);
--h2: clamp(2rem, 3.8vw, 3.75rem);
--body-lg: 1.125rem;
--body: 1rem;
--label: 0.78rem;
--micro: 0.6875rem;
```

The exact family changes by style, but the scale contrast should remain obvious.


#### Layout & Composition

Full-bleed photographic hero, clean cream commerce bands, irregular organic text containers, and large editorial product compositions.

Use a 12-column desktop grid underneath the composition. The visible result does not need to look like a conventional grid, but alignment must remain deliberate.


#### Hero Pattern
Lush greenery background + huge rounded lowercase brand word + thin subtitle + floating minimal nav.


#### Navigation Pattern
Small floating pills are acceptable; selected state may invert cream/dark.


#### Cards / Content Containers
Product specimens without heavy cards; irregular cream blobs for editorial copy.


#### Buttons & CTAs
Compact dark or cream pills; tiny quantity/price controls; low visual noise.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.


#### Imagery & Illustration
High-quality garden, flowers, grass, natural product cutouts, packaging photography.


#### Iconography
Simple line utility icons; friendly but restrained.


#### Texture & Material
- natural photo texture
- very subtle paper grain

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.


#### Borders, Radius & Shadows

- **Borders:** Thin dark borders for compact controls; organic content blocks usually borderless.
- **Shadows:** Minimal or none.
- Do not default every component to `border-radius: 24px`.


#### Section Transitions
Soft organic curves, full-bleed photo bands, cream-to-photo transitions.


#### Motion & Interaction
Gentle image parallax, tiny button shift, organic mask reveal; calm rather than bouncy.


Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.


#### Responsive / Mobile Adaptation
Stack product specimens vertically, preserve giant wordmark, convert complex product art direction into one object + one text block per screen.


#### Accessibility Risks
- Ensure text on greenery has adequate contrast.
- Do not place small controls directly on busy photos.
- Keep pill labels at readable sizes.


#### Recognizable Signature Elements
- lush full-bleed nature photo
- huge rounded lowercase wordmark
- cream commerce surface
- organic blob text panel
- spacious product specimens
- minimal dark pills

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.


#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 6/10 |
| Nostalgia | 3/10 |
| Technical | 1/10 |
| Organic | 10/10 |
| Editorial | 8/10 |
| Pixel | 0/10 |
| Illustration | 4/10 |
| Texture | 5/10 |
| Boldness | 7/10 |
| Commerce fit | 10/10 |
| Content density | 4/10 |


#### Complexity
**Medium** — Commerce remains conventional, while hero/art-direction work requires custom composition.


#### Compatible Secondary Styles

- **Playful Risograph Packaging** — use only as a supporting influence.

- **Paper-Cut Editorial** — use only as a supporting influence.

- **Cartoon Survival Campaign** — use only as a supporting influence.


#### Do
- Let photography carry emotion.
- Keep commerce UI sparse.
- Use organic shapes for editorial copy.
- Preserve generous whitespace.


#### Don't
- Do not use cyber/terminal motifs.
- Do not over-card the products.
- Do not oversaturate nature photos.
- Do not turn every control into a giant pill.


#### Implementation Recipe

1. Start with lush full-bleed imagery.
2. Place a huge rounded wordmark.
3. Use cream product sections with sparse controls.
4. Create one irregular cream editorial blob.
5. Use product cutouts rather than card frames.
6. Keep motion gentle.


---

### 4.5 Pixel Humanist Agency

**Reference family:** Pale-lime agency page with giant pixel heart, arrow, brain/tools icons, mono text, and oversized quote marks


**Aliases:** friendly pixel agency, lime bitmap studio, retro web agency, pixel editorial corporate


**One-line summary:** A surprisingly warm agency/portfolio system that uses huge monochrome pixel graphics, pale lime fields, mono copy, blunt sans headings, and lots of intentional empty space.



#### AI Selection Snapshot

**Choose this style when:** agency/studio/developer brand needs retro personality; large pixel iconography is available; content is medium density; technical credibility should still feel friendly.

**Reject or heavily reduce it when:** luxury/formal tone is required; dense analytics UI dominates; pixel language would undermine trust expectations.

**Natural content density:** **medium** — Works for service/feature copy but benefits from generous spacing.

**Media dependency:** 7/10. Ideal assets: custom monochrome pixel icons, few or no photos. Can be built mostly from typography and original pixel SVG/canvas assets.

**Interaction fit:** 7/10 — Suitable for agency sites and moderate product interaction.

**Accessibility fit:** 8/10 — Strong if mono text is not undersized and pixel art remains decorative.

**Implementation budget:** medium.

#### Design Philosophy & Brand Personality

Treat bitmap graphics as large editorial illustrations, not tiny nostalgic decorations. Let emptiness, simple type hierarchy, and human copy keep the technology approachable.

**Brand personality:** maker-minded, open, quirky, technical-but-human, optimistic, independent.

#### Reference Visual Breakdown

Pale lime agency page with giant monochrome pixel heart and arrow, bitmap tool/brain/team icons, mono copy, bold sans headings, huge quote marks, and wide empty areas.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** custom monochrome pixel icons, few or no photos.

**Interaction strategy:** Suitable for agency sites and moderate product interaction.

**Form treatment:** simple black-outline controls on lime or white

#### Recognition Heuristics

- Pixel assets should be large enough to function as illustration.
- The palette should stay mostly pale lime, black, and white.
- The page should feel friendly and open, not cyberpunk.

#### Incompatible Secondary Styles

- glitch-fashion at high strength
- playful-risograph at high strength
- luxury editorial serif systems

#### Fallback Behavior

If custom pixel icons are unavailable, generate simple original grid-based SVG icons and keep the pale lime/mono/whitespace system intact.

#### Common AI Failure Modes

- turning dark and hacker-like
- using tiny pixel icons only
- filling empty space with cards
- setting mono body text too small

#### Description

A surprisingly warm agency/portfolio system that uses huge monochrome pixel graphics, pale lime fields, mono copy, blunt sans headings, and lots of intentional empty space. It takes early-web bitmap language and makes it warm rather than cyberpunk. Oversized pixel icons act like editorial illustrations while the copy remains human, sparse, and practical.


#### Emotional Tone

- friendly
- maker-minded
- optimistic
- quirky
- technical-but-human


#### Best-Fit Websites

- creative agencies
- developer studios
- open-source teams
- design engineering firms
- indie software companies
- education workshops


#### Poor-Fit Websites

- luxury brands
- formal institutions
- high-end hospitality
- dense analytics products


#### Typical Audience

- developers
- designers
- makers
- open-source communities
- creative-tech clients


#### Visual Keywords

- pale lime field
- huge black-and-white pixel symbol
- mono copy
- bold clean headings
- oversized white arrow/quote
- extreme breathing room


#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|

| `background` | `#D4F2A4` | Main page or major section field |

| `surface` | `#F4F7EC` | Secondary surface / paper / panel |

| `text` | `#0C0D0B` | Primary readable text |

| `muted_text` | `#3E4836` | Secondary copy and metadata |

| `secondary` | `#FFFFFF` | Supporting brand color |

| `accent` | `#BDEB85` | High-energy accent / CTA / marker |

| `dark` | `#0A0A09` | Dark anchor / border / inverse section |

| `line` | `#1D251A` | Rules, borders, grids |


##### Color rules

- Use the background/surface pair for roughly 55–75% of the page.

- Keep the accent to roughly 5–15% unless the style explicitly uses a full accent-color section.

- Never introduce a random purple/blue gradient because a component generator got bored.

- Maintain WCAG AA contrast for essential copy and controls.


#### Typography

- **Display:** Heavy sans for titles plus bitmap/pixel lettering for visual moments.

- **Body:** Monospaced/typewriter-like text with generous leading.

- **Annotation / utility:** Tiny mono labels.

- Use pixel graphics larger than expected.

- Keep page copy narrow.

- Use monospace for personality but never below readable size.


##### Type hierarchy

```css
--display-xl: clamp(4.5rem, 12vw, 11rem);
--display-lg: clamp(3rem, 7vw, 6.5rem);
--h1: clamp(2.6rem, 5vw, 5rem);
--h2: clamp(2rem, 3.8vw, 3.75rem);
--body-lg: 1.125rem;
--body: 1rem;
--label: 0.78rem;
--micro: 0.6875rem;
```

The exact family changes by style, but the scale contrast should remain obvious.


#### Layout & Composition

Large empty lime fields, giant pixel illustration anchors, offset text blocks, icon clusters, oversized decorative arrows/quotes.

Use a 12-column desktop grid underneath the composition. The visible result does not need to look like a conventional grid, but alignment must remain deliberate.


#### Hero Pattern
Large pixel heart/object taking 40–60% of visual area + concise value proposition + tiny decorative rule.


#### Navigation Pattern
Simple top-right link columns; tiny social icons; no decorative container.


#### Cards / Content Containers
Mostly open composition; feature groups use icon + heading + tiny copy rather than cards.


#### Buttons & CTAs
Small outlined rectangles with black text, nearly utility-like.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.


#### Imagery & Illustration
Mostly pixel illustration rather than photos; if photography appears, keep it monochrome or secondary.


#### Iconography
Black-and-white bitmap/pixel tools, brain, heart, team, star, open-source symbols.


#### Texture & Material
- optional faint grain

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.


#### Borders, Radius & Shadows

- **Borders:** Simple 2px black outlines for controls.
- **Shadows:** None.
- Do not default every component to `border-radius: 24px`.


#### Section Transitions
Whitespace, oversized arrows, quote marks, sparse icon bands.


#### Motion & Interaction
Pixel step-in, short arrow shift, tiny cursor blink; do not overanimate.


Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.


#### Responsive / Mobile Adaptation
Place giant pixel image first, then narrow mono copy; convert two-column feature groups to vertical pairs.


#### Accessibility Risks
- Mono body text must remain 16px or larger.
- Avoid extremely low-density glyphs for essential information.
- Decorative oversized symbols should be aria-hidden.


#### Recognizable Signature Elements
- pale lime field
- huge black-and-white pixel symbol
- mono copy
- bold clean headings
- oversized white arrow/quote
- extreme breathing room

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.


#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 7/10 |
| Nostalgia | 8/10 |
| Technical | 7/10 |
| Organic | 3/10 |
| Editorial | 8/10 |
| Pixel | 10/10 |
| Illustration | 8/10 |
| Texture | 2/10 |
| Boldness | 8/10 |
| Commerce fit | 5/10 |
| Content density | 4/10 |


#### Complexity
**Medium** — Pixel assets are straightforward; composition and large-scale icon placement need care.


#### Compatible Secondary Styles

- **Neo-Terminal Community** — use only as a supporting influence.

- **Pixel Pastoral** — use only as a supporting influence.

- **Paper-Cut Editorial** — use only as a supporting influence.


#### Do
- Make pixel icons surprisingly large.
- Use lime as an open field.
- Keep copy narrow.
- Use oversized arrows/quotes as compositional devices.


#### Don't
- Do not become a dark hacker interface.
- Do not shrink pixel art to icon size everywhere.
- Do not pack the page with cards.
- Do not use tiny mono body text.


#### Implementation Recipe

1. Fill the page with pale lime.
2. Choose one giant monochrome pixel icon for the hero.
3. Use mono body copy and bold sans headings.
4. Build feature clusters from icon + heading + copy.
5. Add one huge arrow/quote element.
6. Leave large empty regions.


---

### 4.6 Neo-Terminal Community

**Reference family:** Dark Web3/community page with pixel Earth, technical grid, neon lime, and device-like modular panels


**Aliases:** terminal web, pixel cyber community, retro-futurist tech, dark grid interface


**One-line summary:** A dark retro-futurist technical style combining bitmap display type, pixel art, neon-lime accents, dense mono metadata, technical grids, and modular terminal-like panels.



#### AI Selection Snapshot

**Choose this style when:** technical/community content is central; dense modular information exists; retro-computing identity fits; pixel hero art can be produced.

**Reject or heavily reduce it when:** soft lifestyle/wellness tone is required; audience is uncomfortable with technical interfaces; content is primarily warm emotional storytelling.

**Natural content density:** **high** — One of the best styles for dense content when type sizes remain readable.

**Media dependency:** 8/10. Ideal assets: large pixel artifact, technical diagrams/data. Can work with original pixel emblem and grid.

**Interaction fit:** 9/10 — Naturally supports dashboards, community panels, data views, and technical navigation.

**Accessibility fit:** 7/10 — Requires careful text sizing, reduced neon, and no rapid CRT effects.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Structure first, atmosphere second. Dense information is organized through grids, modules, mono hierarchy, and tiny technical markers while one giant pixel artifact provides identity.

**Brand personality:** technical, underground, collective, precise, internet-native, experimental.

#### Reference Visual Breakdown

Dark technical community page with a huge pixel-art Earth, fine grid, black/charcoal modular panels, bitmap COMMUNITY headline, tiny mono metadata, and a large acid-lime lower field.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** large pixel artifact, technical diagrams/data.

**Interaction strategy:** Naturally supports dashboards, community panels, data views, and technical navigation.

**Form treatment:** dark rectangular fields with strong borders and readable labels

#### Recognition Heuristics

- The interface must remain structurally useful even if the pixel hero is removed.
- Neon lime should be sparse enough to function as hierarchy.
- Panels should feel like system modules, not glossy cards.

#### Incompatible Secondary Styles

- organic-garden-commerce at high strength
- playful-risograph at high strength
- soft glassmorphism

#### Fallback Behavior

If no pixel hero asset exists, create an original low-resolution emblem/map/data object and preserve grid + mono + modular-panel grammar.

#### Common AI Failure Modes

- fake cyberpunk gradients
- all-green text
- tiny unreadable terminal copy
- glowing glossy panels
- decorative hacker gibberish

#### Description

A dark retro-futurist technical style combining bitmap display type, pixel art, neon-lime accents, dense mono metadata, technical grids, and modular terminal-like panels. This is the most technical style in the catalog. It should feel like a community terminal, experimental operating environment, or retro-futurist developer artifact rather than a neon cyberpunk cliché.


#### Emotional Tone

- technical
- underground
- collective
- retro-futurist
- precise
- intense


#### Best-Fit Websites

- developer communities
- blockchain
- open-source tooling
- cybersecurity
- gaming communities
- technical collectives
- analytics products


#### Poor-Fit Websites

- wellness
- weddings
- gentle lifestyle brands
- traditional luxury retail
- children's education


#### Typical Audience

- developers
- technical communities
- gamers
- crypto-native users
- internet-culture audiences


#### Visual Keywords

- near-black grid
- giant pixel Earth/object
- acid lime
- bitmap headline
- dense mono microcopy
- modular dark panels


#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|

| `background` | `#101310` | Main page or major section field |

| `surface` | `#20231F` | Secondary surface / paper / panel |

| `text` | `#F0EEE5` | Primary readable text |

| `muted_text` | `#A7ACA3` | Secondary copy and metadata |

| `secondary` | `#91FF66` | Supporting brand color |

| `accent` | `#B1FF76` | High-energy accent / CTA / marker |

| `dark` | `#090B09` | Dark anchor / border / inverse section |

| `line` | `#343934` | Rules, borders, grids |


##### Color rules

- Use the background/surface pair for roughly 55–75% of the page.

- Keep the accent to roughly 5–15% unless the style explicitly uses a full accent-color section.

- Never introduce a random purple/blue gradient because a component generator got bored.

- Maintain WCAG AA contrast for essential copy and controls.


#### Typography

- **Display:** Large bitmap/pixel display face.

- **Body:** Compact mono with technical cadence.

- **Annotation / utility:** Tiny uppercase mono.

- Reserve neon for emphasis.

- Use body mono at comfortable size.

- Avoid fake hacker gibberish as decoration.


##### Type hierarchy

```css
--display-xl: clamp(4.5rem, 12vw, 11rem);
--display-lg: clamp(3rem, 7vw, 6.5rem);
--h1: clamp(2.6rem, 5vw, 5rem);
--h2: clamp(2rem, 3.8vw, 3.75rem);
--body-lg: 1.125rem;
--body: 1rem;
--label: 0.78rem;
--micro: 0.6875rem;
```

The exact family changes by style, but the scale contrast should remain obvious.


#### Layout & Composition

Dark gridded hero with one huge pixel object; lower region may switch to acid-lime field with modular UI/device compositions.

Use a 12-column desktop grid underneath the composition. The visible result does not need to look like a conventional grid, but alignment must remain deliberate.


#### Hero Pattern
Technical grid + large pixel Earth/emblem + tiny corner metadata + bold bitmap title.


#### Navigation Pattern
Tiny mono labels, compact separators, edge-aligned technical controls.


#### Cards / Content Containers
Dark modular panels with 1px borders; square/small-radius device windows.


#### Buttons & CTAs
Square or compact terminal controls; neon text or outline; no glossy effects.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.


#### Imagery & Illustration
Pixel planets, maps, machines, symbols, analytics graphics; low-res art over crisp UI.


#### Iconography
Bitmap utility icons and tiny monochrome status marks.


#### Texture & Material
- technical grid
- subtle scanline/noise

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.


#### Borders, Radius & Shadows

- **Borders:** 1px charcoal/green-gray rules.
- **Shadows:** Mostly none; optional very subtle green atmospheric glow.
- Do not default every component to `border-radius: 24px`.


#### Section Transitions
Grid continuity, hard dark-to-lime field, device overlays, pixel-stair edges.


#### Motion & Interaction
Step reveals, cursor blink, small terminal loading states, grid fade, pixel wipe.


Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.


#### Responsive / Mobile Adaptation
Use one main pixel visual; collapse dense modular panels to stacked blocks; increase mono text size and remove nonessential metadata.


#### Accessibility Risks
- Neon-on-black must meet contrast.
- Do not use tiny terminal text for primary copy.
- Avoid rapid flicker/scanline animation.
- Preserve clear focus outlines.


#### Recognizable Signature Elements
- near-black grid
- giant pixel Earth/object
- acid lime
- bitmap headline
- dense mono microcopy
- modular dark panels

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.


#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 5/10 |
| Nostalgia | 8/10 |
| Technical | 10/10 |
| Organic | 1/10 |
| Editorial | 7/10 |
| Pixel | 10/10 |
| Illustration | 7/10 |
| Texture | 6/10 |
| Boldness | 9/10 |
| Commerce fit | 5/10 |
| Content density | 8/10 |


#### Complexity
**High** — Dense panels, responsive terminal layout, pixel assets, and grid systems raise implementation cost.


#### Compatible Secondary Styles

- **Pixel Humanist Agency** — use only as a supporting influence.

- **Pixel Pastoral** — use only as a supporting influence.

- **Macintosh Editorial Archive** — use only as a supporting influence.


#### Do
- Use one big pixel hero.
- Keep grid subtle.
- Reserve neon for hierarchy.
- Make panels modular and functional.


#### Don't
- Do not use fake neon cyberpunk gradients.
- Do not fill every line with green.
- Do not make panels glossy.
- Do not bury content in unreadable terminal microtext.


#### Implementation Recipe

1. Create a near-black technical grid.
2. Place one giant pixel object.
3. Use bitmap display + mono body.
4. Build modular 1px-bordered panels.
5. Reserve lime for action/status hierarchy.
6. Simplify metadata aggressively on mobile.


---

### 4.7 Macintosh Editorial Archive

**Reference family:** Susan Kare / classic Macintosh-inspired editorial story page with nested windows, bitmap icons, serif title, and line-art background


**Aliases:** retro Mac editorial, classic desktop archive, bitmap museum, early-computing editorial


**One-line summary:** An archival editorial system that juxtaposes elegant serif typography with classic desktop windows, bitmap icons, pale blue surfaces, monochrome line art, and nested interface metaphors.



#### AI Selection Snapshot

**Choose this style when:** storytelling/history/archive is central; retro computing is conceptually relevant; nested windows can support content; editorial reading matters.

**Reject or heavily reduce it when:** fast conversion/checkout is primary; real-time operations dominate; retro OS metaphor would be arbitrary.

**Natural content density:** **medium-high** — Can carry substantial narrative/detail when retro windows are used selectively.

**Media dependency:** 7/10. Ideal assets: archival images, bitmap icons, line art. Can be built with original retro UI windows and text.

**Interaction fit:** 7/10 — Good for exploratory archives, portfolios, case studies; less ideal for transactional flows.

**Accessibility fit:** 7/10 — Requires semantic equivalents for decorative desktop metaphors and readable non-pixel body copy.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Use early-computing UI as a narrative frame, not a costume applied to every control. The page should feel like a digital exhibition where modern editorial hierarchy and retro interface artifacts support each other.

**Brand personality:** curious, intellectual, archival, playful, design-literate, nostalgic.

#### Reference Visual Breakdown

Editorial page about classic computer icon design: pale paper background with line drawing, large mixed serif/sans title, pill metadata, a blue retro desktop window, bitmap icons, nested paint/dialog windows, and archival text sections.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** archival images, bitmap icons, line art.

**Interaction strategy:** Good for exploratory archives, portfolios, case studies; less ideal for transactional flows.

**Form treatment:** modern accessible form shell; retro framing can surround but not obscure fields

#### Recognition Heuristics

- The retro OS metaphor should support the story rather than dominate every section.
- Modern editorial hierarchy must remain visible outside window simulations.
- Bitmap icons and 1px frames should be consistent.

#### Incompatible Secondary Styles

- cartoon-campaign at high strength
- organic-garden-commerce at high strength
- glossy futuristic styling

#### Fallback Behavior

If authentic-looking bitmap assets are unavailable, create original monochrome pixel icons and simple window frames inspired by early desktop conventions without reproducing proprietary icons or exact OS screens.

#### Common AI Failure Modes

- exactly copying an old OS
- shrinking a desktop scene until unreadable
- turning every section into a window
- using bitmap type for long narrative copy

#### Description

An archival editorial system that juxtaposes elegant serif typography with classic desktop windows, bitmap icons, pale blue surfaces, monochrome line art, and nested interface metaphors. The primary tension is between elegant editorial storytelling and primitive desktop UI. The page can behave like an archive or exhibition where windows, bitmap icons, and nested interfaces become storytelling devices.


#### Emotional Tone

- archival
- curious
- intellectual
- nostalgic
- playful
- museum-like


#### Best-Fit Websites

- design history
- museums
- creative portfolios
- case studies
- archives
- educational storytelling
- digital exhibitions


#### Poor-Fit Websites

- fast checkout flows
- dense operational dashboards
- serious medical tooling
- real-time trading


#### Typical Audience

- designers
- students
- history enthusiasts
- creative professionals
- retro-computing audiences


#### Visual Keywords

- serif editorial title
- classic desktop frame
- bitmap icons
- pale blue workspace
- nested windows
- background line drawing


#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|

| `background` | `#F4F4F0` | Main page or major section field |

| `surface` | `#9ECBE7` | Secondary surface / paper / panel |

| `text` | `#111111` | Primary readable text |

| `muted_text` | `#5A5A56` | Secondary copy and metadata |

| `secondary` | `#F0C53A` | Supporting brand color |

| `accent` | `#6F9BC6` | High-energy accent / CTA / marker |

| `dark` | `#191919` | Dark anchor / border / inverse section |

| `line` | `#222222` | Rules, borders, grids |


##### Color rules

- Use the background/surface pair for roughly 55–75% of the page.

- Keep the accent to roughly 5–15% unless the style explicitly uses a full accent-color section.

- Never introduce a random purple/blue gradient because a component generator got bored.

- Maintain WCAG AA contrast for essential copy and controls.


#### Typography

- **Display:** Editorial serif for page title; bold sans for large section statements.

- **Body:** Neutral sans or mono for archival copy.

- **Annotation / utility:** Bitmap/mono labels inside classic windows.

- Contrast refined editorial typography with primitive UI.

- Use bitmap type only within the computer metaphor or as labels.

- Keep long narrative copy readable.


##### Type hierarchy

```css
--display-xl: clamp(4.5rem, 12vw, 11rem);
--display-lg: clamp(3rem, 7vw, 6.5rem);
--h1: clamp(2.6rem, 5vw, 5rem);
--h2: clamp(2rem, 3.8vw, 3.75rem);
--body-lg: 1.125rem;
--body: 1rem;
--label: 0.78rem;
--micro: 0.6875rem;
```

The exact family changes by style, but the scale contrast should remain obvious.


#### Layout & Composition

Layered storytelling: page-level editorial frame, then classic desktop/window section, then smaller nested windows or icons.

Use a 12-column desktop grid underneath the composition. The visible result does not need to look like a conventional grid, but alignment must remain deliberate.


#### Hero Pattern
Large mixed serif/sans title + tag pills + low-opacity contour drawing + embedded retro desktop window.


#### Navigation Pattern
Minimal editorial header or classic menu-bar treatment within retro sections.


#### Cards / Content Containers
Classic 1px framed windows, archival text blocks, nested panels.


#### Buttons & CTAs
Classic bordered controls, small square/rectangular buttons, simple inverted states.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.


#### Imagery & Illustration
Historical photos, bitmap art, archival scans, classic desktop screenshots recreated as original compositions.


#### Iconography
Black-and-white bitmap desktop icons, cursors, folders, paint/tool symbols.


#### Texture & Material
- paper grain
- low-opacity contour line art

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.


#### Borders, Radius & Shadows

- **Borders:** 1px black classic UI frames.
- **Shadows:** Hard 1–2px window offset only when needed.
- Do not default every component to `border-radius: 24px`.


#### Section Transitions
Window bars, desktop frames, paper whitespace, line-art continuation.


#### Motion & Interaction
Window open/close, cursor movement, bitmap hover inversion, tiny mechanical transitions.


Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.


#### Responsive / Mobile Adaptation
Treat retro desktop as a horizontal scroll or simplified stacked window system; avoid unreadably shrinking the desktop metaphor.


#### Accessibility Risks
- Do not make tiny retro UI labels the only way to navigate.
- Provide semantic equivalents for decorative windows.
- Keep narrative text outside dense bitmap scenes when possible.


#### Recognizable Signature Elements
- serif editorial title
- classic desktop frame
- bitmap icons
- pale blue workspace
- nested windows
- background line drawing

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.


#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 6/10 |
| Nostalgia | 10/10 |
| Technical | 6/10 |
| Organic | 2/10 |
| Editorial | 10/10 |
| Pixel | 8/10 |
| Illustration | 7/10 |
| Texture | 5/10 |
| Boldness | 7/10 |
| Commerce fit | 3/10 |
| Content density | 7/10 |


#### Complexity
**High** — Nested window metaphors, bitmap assets, and responsive archival storytelling require custom work.


#### Compatible Secondary Styles

- **Paper-Cut Editorial** — use only as a supporting influence.

- **Neo-Terminal Community** — use only as a supporting influence.

- **Glitch Fashion Editorial** — use only as a supporting influence.


#### Do
- Contrast refined editorial type with primitive UI.
- Use windows for storytelling.
- Keep line art quiet.
- Make the archive navigable.


#### Don't
- Do not shrink an entire desktop UI onto mobile.
- Do not fake copyrighted logos or exact OS screens.
- Do not use every section as a window.
- Do not sacrifice narrative readability.


#### Implementation Recipe

1. Start with a white/gray paper field and faint line art.
2. Use serif title + bold sans section heading.
3. Create a classic window frame with original content.
4. Use bitmap iconography.
5. Layer one or two nested windows.
6. Recompose windows on mobile rather than shrinking them.


---

### 4.8 Playful Risograph Packaging

**Reference family:** Colorful food packaging page with mustard background, mascots, hand lettering, stipple/halftone, and product cutouts


**Aliases:** playful FMCG, screen-print brand, mascot packaging, risograph commerce


**One-line summary:** A joyful consumer-brand style using bold flat color, custom chunky lettering, mascot illustration, hand-drawn copy, halftone/stipple shading, and product packaging as the hero graphic.



#### AI Selection Snapshot

**Choose this style when:** product packaging is visually strong; mascot/illustration is central; food/FMCG/consumer brand needs personality; playfulness supports conversion.

**Reject or heavily reduce it when:** serious B2B/institutional context; no illustration/packaging assets exist; minimal luxury is required.

**Natural content density:** **medium** — Works for product benefits and story sections, not dense admin information.

**Media dependency:** 10/10. Ideal assets: packaging cutouts, custom mascots, hand-lettered campaign graphics. Needs strong original product or illustration assets.

**Interaction fit:** 8/10 — Good for ecommerce and subscriptions when controls remain compact.

**Accessibility fit:** 7/10 — Functional/legal information must use clean sans rather than hand lettering.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Treat the website like moving packaging and campaign print. Personality should come from original illustration, lettering, and print texture while commerce remains simple enough to disappear behind the brand.

**Brand personality:** joyful, ethical, youthful, irreverent, friendly, bold.

#### Reference Visual Breakdown

Bright food-brand page dominated by mustard yellow, cream, turquoise, orange, pink, and black; large product packs, smiling cartoon mascots, chunky hand lettering, stipple/halftone shading, badges, and vertical campaign statements.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** packaging cutouts, custom mascots, hand-lettered campaign graphics.

**Interaction strategy:** Good for ecommerce and subscriptions when controls remain compact.

**Form treatment:** simple rectangular newsletter/checkout fields

#### Recognition Heuristics

- The site should feel like packaging came alive, not like ecommerce cards with stickers.
- Print texture belongs primarily to illustrations and display art.
- Product facts should remain visually quieter than brand statements.

#### Incompatible Secondary Styles

- terminal-community
- glitch-fashion at high strength
- minimal luxury systems

#### Fallback Behavior

If mascot assets are unavailable, rely on strong packaging cutouts, bold flat color, original hand-drawn badges, and stipple graphics; do not substitute generic 3D blobs.

#### Common AI Failure Modes

- mixing too many display fonts
- making legal/product facts hand-lettered
- glossy 3D product world
- removing print texture until identity disappears

#### Description

A joyful consumer-brand style using bold flat color, custom chunky lettering, mascot illustration, hand-drawn copy, halftone/stipple shading, and product packaging as the hero graphic. It is brand-first and packaging-first. Product packs, mascots, hand lettering, and print texture carry the identity while commerce controls stay tiny and clear.


#### Emotional Tone

- joyful
- bold
- ethical
- youthful
- friendly
- irreverent


#### Best-Fit Websites

- food and beverage
- snacks
- coffee
- sustainable consumer goods
- kids/young adult brands
- merch
- playful subscriptions


#### Poor-Fit Websites

- serious B2B
- legal
- finance
- clinical products
- minimal luxury


#### Typical Audience

- younger shoppers
- families
- design-aware consumers
- ethical/sustainable shoppers


#### Visual Keywords

- mustard field
- turquoise/orange palette
- mascots
- custom hand lettering
- halftone/stipple
- floating packaging


#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|

| `background` | `#F5B418` | Main page or major section field |

| `surface` | `#FFE9BF` | Secondary surface / paper / panel |

| `text` | `#10100E` | Primary readable text |

| `muted_text` | `#4D402A` | Secondary copy and metadata |

| `secondary` | `#55C5B2` | Supporting brand color |

| `accent` | `#F4773E` | High-energy accent / CTA / marker |

| `accent_alt` | `#E777A1` | Optional second accent |

| `dark` | `#080807` | Dark anchor / border / inverse section |


##### Color rules

- Use the background/surface pair for roughly 55–75% of the page.

- Keep the accent to roughly 5–15% unless the style explicitly uses a full accent-color section.

- Never introduce a random purple/blue gradient because a component generator got bored.

- Maintain WCAG AA contrast for essential copy and controls.


#### Typography

- **Display:** Chunky custom display with irregular hand-made rhythm.

- **Body:** Compact utilitarian sans.

- **Annotation / utility:** Hand-lettered marker/brush style.

- Use at most two expressive type voices plus body.

- Let display type behave like packaging art.

- Keep factual product copy calmer.


##### Type hierarchy

```css
--display-xl: clamp(4.5rem, 12vw, 11rem);
--display-lg: clamp(3rem, 7vw, 6.5rem);
--h1: clamp(2.6rem, 5vw, 5rem);
--h2: clamp(2rem, 3.8vw, 3.75rem);
--body-lg: 1.125rem;
--body: 1rem;
--label: 0.78rem;
--micro: 0.6875rem;
```

The exact family changes by style, but the scale contrast should remain obvious.


#### Layout & Composition

Bold flat-color bands, product packs floating at large scale, playful illustration clusters, compact factual text islands, strong vertical storytelling.

Use a 12-column desktop grid underneath the composition. The visible result does not need to look like a conventional grid, but alignment must remain deliberate.


#### Hero Pattern
Cream/mustard base + oversized packaging cutout + short punchy claim + mascot/detail marks.


#### Navigation Pattern
Simple compact text; brand mark central or left; optional thin announcement strip.


#### Cards / Content Containers
Mostly open canvas. Use badges, ingredient seals, hand-drawn labels, and product groupings instead of cards.


#### Buttons & CTAs
Tiny high-contrast black/cream labels with thick or simple outline.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.


#### Imagery & Illustration
Product packaging photography/cutouts combined with cartoon mascots and flat graphic fields.


#### Iconography
Round certification badges, hand-drawn symbols, chunky simple pictograms.


#### Texture & Material
- stipple
- halftone
- screen-print grain

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.


#### Borders, Radius & Shadows

- **Borders:** Black hand-drawn or print-like outlines.
- **Shadows:** Flat painted shadows or hard black ovals under products; no soft UI elevation.
- Do not default every component to `border-radius: 24px`.


#### Section Transitions
Wavy flat-color bands, illustration clusters, product piles.


#### Motion & Interaction
Small wiggles, bounce of 2–4px, packaging tilt, doodle stroke animations.


Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.


#### Responsive / Mobile Adaptation
Keep one mascot/product group per section, reduce decorative clusters, maintain large expressive headlines.


#### Accessibility Risks
- Hand-lettered text should not carry essential legal/product details.
- Keep ingredient and commerce info in readable sans.
- Avoid color-only badges.


#### Recognizable Signature Elements
- mustard field
- turquoise/orange palette
- mascots
- custom hand lettering
- halftone/stipple
- floating packaging

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.


#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 10/10 |
| Nostalgia | 7/10 |
| Technical | 1/10 |
| Organic | 6/10 |
| Editorial | 7/10 |
| Pixel | 1/10 |
| Illustration | 10/10 |
| Texture | 9/10 |
| Boldness | 10/10 |
| Commerce fit | 10/10 |
| Content density | 5/10 |


#### Complexity
**High** — Quality depends heavily on custom illustration, packaging art, and print texture.


#### Compatible Secondary Styles

- **Organic Garden Commerce** — use only as a supporting influence.

- **Cartoon Survival Campaign** — use only as a supporting influence.

- **Paper-Cut Editorial** — use only as a supporting influence.


#### Do
- Let packaging and mascots dominate.
- Use halftone as material texture.
- Keep factual copy clean.
- Build vertical campaign rhythm.


#### Don't
- Do not add photorealistic chrome 3D blobs.
- Do not mix five display fonts.
- Do not make compliance/product details hand-lettered.
- Do not polish away print texture.


#### Implementation Recipe

1. Choose a mustard/cream field.
2. Place packaging cutouts at large scale.
3. Add one mascot family.
4. Use chunky display + hand lettering.
5. Apply stipple/halftone shading.
6. Use compact factual commerce controls.


---

### 4.9 Cartoon Survival Campaign

**Reference family:** Zombie survival ecommerce page with lime/black/teal/yellow/pink bands, thick comic outlines, giant headlines, and irregular section boundaries


**Aliases:** comic commerce, cartoon campaign, illustrated landing page, bold character ecommerce


**One-line summary:** A high-impact campaign style built from giant blunt headlines, flat color bands, thick outlined cartoon illustrations, simple CTAs, and playful irregular section transitions.



#### AI Selection Snapshot

**Choose this style when:** campaign/story sections can be simplified to one message each; custom cartoon illustration is available; game/entertainment/merch context fits; brand wants immediate playful impact.

**Reject or heavily reduce it when:** dense SaaS/admin UI dominates; minimal premium tone is required; no illustration pipeline exists.

**Natural content density:** **low** — Best for concise statements and conversion paths, not dense information.

**Media dependency:** 10/10. Ideal assets: custom cartoon characters, product illustrations, themed objects. Needs at least one coherent thick-outline illustration system.

**Interaction fit:** 7/10 — Good for landing/ecommerce flows; keep complex interaction in calmer bands.

**Accessibility fit:** 8/10 — Strong contrast and large text are natural; avoid hiding controls in drawings.

**Implementation budget:** medium-high.

#### Design Philosophy & Brand Personality

Reduce each section to one unmistakable idea. Thick outlines, flat color, blunt type, and simple controls create instant comprehension while characters carry narrative personality.

**Brand personality:** energetic, fun, direct, comic, irreverent, fan-oriented.

#### Reference Visual Breakdown

Zombie-themed campaign/ecommerce page with pale lime hero, giant black uppercase headline, pink hard-shadow CTA, thick outlined cartoon characters, black/teal/yellow section bands, irregular silhouettes, and simple product-focused copy.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** custom cartoon characters, product illustrations, themed objects.

**Interaction strategy:** Good for landing/ecommerce flows; keep complex interaction in calmer bands.

**Form treatment:** plain light fields with thick outline; keep away from illustration edges

#### Recognition Heuristics

- Every major section should have one dominant message and one dominant illustration.
- Section boundaries should contribute to the cartoon world.
- Controls remain obvious despite the illustration-heavy surface.

#### Incompatible Secondary Styles

- glitch-fashion
- terminal-community at high strength
- minimal luxury systems

#### Fallback Behavior

If custom character art is limited, use a smaller coherent set of original objects/mascots repeatedly rather than mixing stock illustration styles.

#### Common AI Failure Modes

- generic flat illustration with no outline system
- too many messages per section
- soft glass cards
- controls hidden inside characters

#### Description

A high-impact campaign style built from giant blunt headlines, flat color bands, thick outlined cartoon illustrations, simple CTAs, and playful irregular section transitions. It turns each section into a bold illustrated campaign panel. Flat colors and thick outlines create immediate readability, while one character or object anchors each message.


#### Emotional Tone

- energetic
- comic
- direct
- fun
- slightly chaotic
- campaign-driven


#### Best-Fit Websites

- games
- entertainment
- themed ecommerce
- youth campaigns
- events
- merch
- novelty products
- comic brands


#### Poor-Fit Websites

- professional services
- banking
- luxury
- minimal wellness
- high-density SaaS


#### Typical Audience

- gamers
- younger audiences
- fans/communities
- entertainment shoppers


#### Visual Keywords

- flat lime/black/teal/yellow bands
- thick comic outlines
- giant uppercase campaign type
- one hero cartoon per section
- hard-shadow buttons
- irregular section silhouettes


#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|

| `background` | `#C8EE8E` | Main page or major section field |

| `surface` | `#5BC3AF` | Secondary surface / paper / panel |

| `text` | `#090A08` | Primary readable text |

| `muted_text` | `#383C31` | Secondary copy and metadata |

| `secondary` | `#F6BB18` | Supporting brand color |

| `accent` | `#E57391` | High-energy accent / CTA / marker |

| `accent_alt` | `#F9F1A0` | Optional second accent |

| `dark` | `#080907` | Dark anchor / border / inverse section |


##### Color rules

- Use the background/surface pair for roughly 55–75% of the page.

- Keep the accent to roughly 5–15% unless the style explicitly uses a full accent-color section.

- Never introduce a random purple/blue gradient because a component generator got bored.

- Maintain WCAG AA contrast for essential copy and controls.


#### Typography

- **Display:** Heavy wide uppercase sans, blunt and campaign-like.

- **Body:** Simple readable sans.

- **Annotation / utility:** Small utility sans or hand-drawn label.

- Keep headlines extremely large and short.

- Body copy stays compact.

- Use custom display only for the campaign voice.


##### Type hierarchy

```css
--display-xl: clamp(4.5rem, 12vw, 11rem);
--display-lg: clamp(3rem, 7vw, 6.5rem);
--h1: clamp(2.6rem, 5vw, 5rem);
--h2: clamp(2rem, 3.8vw, 3.75rem);
--body-lg: 1.125rem;
--body: 1rem;
--label: 0.78rem;
--micro: 0.6875rem;
```

The exact family changes by style, but the scale contrast should remain obvious.


#### Layout & Composition

Stacked full-width color sections; each section gets one dominant illustration, one large headline, one CTA, and short copy.

Use a 12-column desktop grid underneath the composition. The visible result does not need to look like a conventional grid, but alignment must remain deliberate.


#### Hero Pattern
Pale lime field + giant uppercase claim + thick outlined character scene rising from an irregular black silhouette.


#### Navigation Pattern
Simple black text with one outlined/colored CTA; no visual container required.


#### Cards / Content Containers
Mostly open section fields; cards are rare.


#### Buttons & CTAs
Thick black border, flat colored fill, hard offset shadow, strong pressed state.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.


#### Imagery & Illustration
Flat cartoons with thick black outlines, deliberately wonky geometry, little or no realistic shading.


#### Iconography
Cartoon objects, hands, clothing, gravestones, tools, simple outlined pictograms.


#### Texture & Material
- optional subtle grain
- flat fills

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.


#### Borders, Radius & Shadows

- **Borders:** 4–6px black comic outlines.
- **Shadows:** Hard black offset shadows only.
- Do not default every component to `border-radius: 24px`.


#### Section Transitions
Wavy, jagged, hill-like, grass/silhouette section edges.


#### Motion & Interaction
Tiny bounce, squash, pop-in, button shadow shift; avoid complex 3D motion.


Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.


#### Responsive / Mobile Adaptation
Keep one illustration per viewport, stack CTA below copy, simplify irregular edges, preserve giant campaign headlines.


#### Accessibility Risks
- Keep body copy off complex illustration areas.
- Use large clear CTAs.
- Decorative monsters/characters must not hide focus or controls.


#### Recognizable Signature Elements
- flat lime/black/teal/yellow bands
- thick comic outlines
- giant uppercase campaign type
- one hero cartoon per section
- hard-shadow buttons
- irregular section silhouettes

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.


#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 10/10 |
| Nostalgia | 5/10 |
| Technical | 1/10 |
| Organic | 4/10 |
| Editorial | 6/10 |
| Pixel | 1/10 |
| Illustration | 10/10 |
| Texture | 3/10 |
| Boldness | 10/10 |
| Commerce fit | 9/10 |
| Content density | 3/10 |


#### Complexity
**Medium–High** — The layout is structurally simple but needs strong custom illustration and section silhouettes.


#### Compatible Secondary Styles

- **Playful Risograph Packaging** — use only as a supporting influence.

- **Organic Garden Commerce** — use only as a supporting influence.

- **Pixel Humanist Agency** — use only as a supporting influence.


#### Do
- Give each section one message and one illustration.
- Use strong flat color fields.
- Keep comic outlines consistent.
- Make CTA states tactile.


#### Don't
- Do not use subtle low-contrast colors.
- Do not hide controls in illustrations.
- Do not repeat identical section compositions endlessly.
- Do not add soft glass cards.


#### Implementation Recipe

1. Choose 3–4 strong flat section colors.
2. Assign one illustration to each section.
3. Use giant uppercase headings.
4. Create thick-outline CTA buttons.
5. Use irregular silhouettes between sections.
6. Keep each section's message extremely simple.


---

## 5. Shared Visual Foundations
The catalog above explains each style as a complete art direction. The rules below are the shared execution layer that keeps those styles coherent when translated into real interfaces.
### 5.1 Color Usage

Use confident flat fields or photography for large areas. Preferred dominant surfaces are warm cream, acidic yellow, pale lime, mustard, charcoal, near-black, washed sky blue, or natural green photography.

Use orange, electric lime, pink, or bright yellow primarily for CTAs, badges, active states, markers, small decorative type, or one illustration detail. High-energy colors should remain accents rather than becoming visual static.

For terminal layouts, near-black and charcoal form the base. Off-white handles most readable text, while electric lime is reserved for hierarchy and electronic emphasis.

### 5.2 Typography

Large typography may overlap imagery, extend beyond a container, sit behind illustrations, crop against edges, or become a decorative silhouette. Body text may not.

Use `displayCut` for handmade poster moments. Use `displayHeavy` for campaign statements and fashion/editorial headlines. Use `displayRounded` for friendly lifestyle and organic commerce. Use `pixel` for nostalgic bitmap branding and large retro labels. Use `serifEditorial` for cultural, historical, or high-contrast storytelling. Use `sans` or `mono` for readable copy.

Pixel fonts are forbidden for long essential paragraphs.

Microcopy may be uppercase mono, handwritten, bitmap, or narrow sans, but should remain secondary.

### 5.3 Layout and Composition

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

### 5.4 Photography

Photography should feel editorial rather than stock-like.

Prefer nature, interiors, fabric, landscapes, packaging, tactile objects, closeups, and documentary-style people.

Use slightly warm color, muted saturation, subtle grain, and decisive cropping. Avoid over-HDR treatment.

When placing display text on photography, use high contrast through intelligent crop selection before reaching for generic dark overlays.

### 5.5 Pixel and Low-Resolution Graphics

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

### 5.6 Papercut and Handmade Graphics

Use rough polygons, irregular stars, hand-drawn capsules, asymmetric blobs, cut-paper labels, imperfect circles, small sparkles, doodle arrows, and hand-drawn underlines.

Edges should feel cut rather than randomly distressed. Avoid excessive torn-paper filters.

Annotations can include small circles, notes, stars, arrows, and labels, but they must not compete with primary content.

### 5.7 Organic Commerce

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

### 5.8 Terminal-Tech

Use near-black surfaces, charcoal modular panels, technical grids, off-white text, and controlled electric lime accents.

Technical grids should stay subtle. A typical grid cell is around 32px with 8–18% opacity.

Panels should feel tool-like: small or zero radius, 1px borders, mono labels, dense metadata, and clear modular divisions.

Use one large pixel object as the hero motif rather than a generic glowing 3D tech sphere.

### 5.9 Retro Mac / Early Computing

Use classic desktop and window motifs selectively: thin title bars, 1px black frames, pale surfaces, bitmap controls, and compact iconography.

Nested windows are allowed when they support storytelling.

A strong typography recipe is editorial serif page title + heavy sans section title + mono or bitmap interface labels.

Background line art may appear at low opacity, like sketches, diagrams, or archival drawings.

### 5.10 Glitch-Fashion

Use blocky image corruption on one focal image. Affect roughly 10–35% of the image with rectangular blocks while preserving recognizability.

Typography may be oversized, cropped, rotated, mixed in scale, and allowed to cross image boundaries.

Fine grid overlays and tiny Swiss-style microcopy create order around the chaos.

### 5.11 Playful Packaging

Mascots should have simple silhouettes, expressive faces, thick outlines, flat fills, and light stipple or halftone texture.

Mix chunky branded display type, hand-lettered statements, and condensed utility copy. Do not use a pile of unrelated display fonts.

Treat packaging itself as hero art. Allow floating packs, rotated boxes, cropped product clusters, and hand-drawn marks.

### 5.12 Cartoon Campaign

The strongest default structure is:

1. bold flat section color;
2. giant headline;
3. one dominant cartoon illustration;
4. one CTA;
5. short supporting copy;
6. irregular section boundary.

Use thick black outlines for major cartoon assets.

Section transitions can use hills, spikes, blobs, silhouettes, grass, or irregular drawn edges.

## 6. Components, Controls, and Content Surfaces
Component styling follows the selected style, but interaction clarity remains consistent. The quick guidance is followed by the expanded system rules.
### 6.1 Quick global component guidance

#### Buttons

Buttons inherit the selected style instead of using one universal skin.

- Paper-cut: irregular label / hand-drawn border.
- Pixel pastoral: tiny flat utility button.
- Glitch fashion: understated editorial label.
- Organic commerce: compact dark/cream pill.
- Pixel humanist: outlined rectangle.
- Terminal: square/compact mono control.
- Retro Mac: classic framed control.
- Risograph packaging: tiny high-contrast printed label.
- Cartoon campaign: thick border + hard shadow.

Only one primary CTA should visually dominate a section.

#### Cards

Cards are **not** the default design primitive.

Prefer:

- editorial groups;
- product cutouts;
- windows;
- blobs;
- text islands;
- icon clusters;
- full-width bands;
- illustrations.

Use a card only when the content is genuinely a discrete object.

#### Forms

Forms stay readable regardless of style:

```css
input,
select,
textarea,
button {
  min-height: 44px;
}

:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}
```

Express the style in surrounding composition, labels, borders, and color, not by making inputs strange to operate.

#### Icons

Use one icon language per section. Never mix bitmap icons, standard outline icons, thick cartoons, and classic-desktop bitmap symbols in the same feature group.

#### Texture

Maximum: **two texture systems per section**.

Allowed texture families:

- paper grain;
- film grain;
- halftone;
- stipple;
- technical grid;
- line art;
- subtle scanline.

Texture must disappear gracefully when it harms readability.

### 6.2 Navigation

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

### 6.3 Buttons and Calls to Action

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

### 6.4 Cards

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

### 6.5 Forms and Inputs

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

### 6.6 Decorative Elements

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

### 6.7 Dividers and Section Boundaries

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

### 6.8 Icons

Choose one icon language per section.

Do not mix pixel icons, Lucide-style line icons, retro Mac bitmap icons, and thick cartoons inside the same component group.

Preferred systems:

- bitmap icons for pixel/terminal modes;
- classic desktop glyphs for retro-mac;
- custom loose outlines for papercut/editorial;
- bold outlined flat drawings for cartoon/packaging;
- restrained monochrome utility icons for organic-commerce.

If a stock icon library is used, adjust presentation, weight, container, and scale so it belongs to the selected mode.

### 6.9 Texture Rules

#### Paper grain

Use for `papercut-editorial`, `retro-mac`, `playful-packaging`, and `glitch-fashion`.

Target opacity: `0.02–0.05`.

#### Film grain

Use on landscape and lifestyle photography when a nostalgic editorial effect is desired.

Target opacity: `0.02–0.05`.

#### Halftone / stipple

Use for `playful-packaging`, `cartoon-campaign`, and selective `glitch-fashion` illustration.

Target opacity: `0.10–0.20`.

#### Technical grid

Use for `terminal-tech`, `pixel-retro`, or experimental fashion layouts.

Target opacity: `0.08–0.18`.

#### Line art

Use behind retro-mac or editorial compositions.

Target opacity: `0.08–0.15`.

Never stack paper grain + halftone + grid + scanlines + chromatic aberration simply because they exist. Two simultaneous texture systems is the hard maximum.

## 7. Motion, Responsive Behavior, Accessibility, and Density
These rules apply regardless of art direction. Style-specific motion and responsive notes refine this baseline rather than replacing it.
### 7.1 Condensed responsive baseline

Desktop and mobile are separate compositions.

#### Desktop

Use full asymmetry, overlap, strong negative space, giant typography, and lateral composition.

#### Tablet

Reduce overlap by roughly 30–40%. Keep the dominant motif and style-specific typography.

#### Mobile

Recompose into vertical poster panels.

Rules:

- one dominant visual idea per viewport;
- keep display typography large;
- move annotations into safe margins;
- reduce decorative clutter;
- turn side-by-side editorial groups into sequential blocks;
- simplify dense terminal or retro-window scenes;
- never scale a complete desktop composition down until text becomes microscopic.

Recommended mobile display scale:

```css
font-size: clamp(3rem, 16vw, 6rem);
```

### 7.2 Condensed accessibility baseline

Every style must obey:

- WCAG AA contrast for essential text;
- `16px` minimum body text;
- `44px` minimum interaction targets;
- visible keyboard focus;
- semantic heading structure;
- meaningful alt text;
- reduced-motion support;
- no information conveyed through color alone;
- decorative type cannot carry critical instructions;
- no rapid flashing or continuous glitching;
- do not place essential controls inside visually corrupted, grain-heavy, or highly illustrated areas.

If the aesthetic conflicts with usability, usability wins. People do occasionally need to use the website.

### 7.3 Motion

Motion should correspond to the visual material.

#### Physical modes

For papercut, organic, packaging, and cartoon modes, prefer:

- paper sliding;
- slight rotation;
- reveal from behind another layer;
- a few pixels of bounce;
- illustration pieces entering independently;
- hand-drawn underline animation.

#### Digital modes

For pixel, terminal, and retro-mac modes, prefer:

- stepped reveal;
- cursor blink;
- window opening;
- pixel wipe;
- grid fade;
- short terminal type-on sequences;
- low-frame-rate decorative motion.

#### Glitch mode

Use short, occasional glitch bursts. Do not shake the interface continuously.

Never animate long body copy character-by-character.

Always respect `prefers-reduced-motion`.

### 7.4 Responsive Design

Responsive behavior must preserve personality rather than merely shrink the desktop composition.

#### Desktop

Use the full editorial system:

- large overlaps;
- extreme display scale;
- floating annotations;
- offset grids;
- wide image crops;
- strong negative space.

#### Tablet

Reduce overlap by roughly 30–40% while preserving asymmetry and one dominant decorative motif.

#### Mobile

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

### 7.5 Accessibility

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

### 7.6 Content Density

Use two alternating density bands.

#### Editorial band

Characteristics:

- large type;
- few words;
- large visual element;
- generous negative space;
- stronger color or photography.

Use for heroes, campaign statements, product launches, quotes, and key story moments.

#### Information band

Characteristics:

- smaller text;
- structured columns;
- simpler surfaces;
- restrained decoration;
- higher information density.

Use for product details, FAQs, forms, documentation, specifications, and technical explanations.

Alternating these bands creates rhythm and prevents visual exhaustion.

## 8. Composition Recipes and AI Decision Process
### 8.1 Composition Recipes

#### 28.1 Papercut editorial hero

Use:

- dark olive, brown, or photographic background;
- giant cream cut-paper headline;
- one green supporting color;
- one orange starburst or accent badge;
- tiny handwritten annotations;
- a small irregular underline or sparkle;
- tactile grain.

Do not use a centered dashboard mockup.

#### 28.2 Pixel landscape poster

Use:

- full-bleed landscape photography;
- giant yellow or blue pixel-script/bitmap display word;
- tiny clean sans labels in distant corners;
- film grain;
- one strong flat-color follow-up panel.

Preserve large empty areas around the main word.

#### 28.3 Glitch editorial portrait

Use:

- full-height portrait or fashion image;
- oversized cropped headline crossing the image;
- fine technical grid;
- selective rectangular pixel corruption;
- tiny editorial microcopy;
- muted four-to-five-color palette.

Keep the subject recognizable.

#### 28.4 Organic shop hero

Use:

- lush natural photography;
- huge rounded lowercase wordmark;
- minimal floating navigation;
- thin announcement/marquee strip;
- cream product area immediately afterward;
- spacious product specimens rather than boxed cards.

#### 28.5 Lime pixel editorial section

Use:

- pale lime background;
- giant black/white pixel illustration;
- mono body copy;
- sparse icon groups;
- oversized quotation mark, arrow, or symbol;
- unusual empty regions;
- minimal outlined buttons.

#### 28.6 Terminal community hero

Use:

- near-black technical grid;
- giant pixel planet/object;
- acid-lime field as a major section break;
- device/interface panels;
- bitmap heading;
- dense mono metadata;
- small lime call-to-action labels.

#### 28.7 Retro Mac story page

Use:

- white or light gray paper surface;
- low-opacity line-art background;
- serif + sans headline pairing;
- classic desktop window;
- bitmap desktop icons;
- pale blue accent field;
- small yellow accent graphic;
- narrative text blocks below the simulated desktop.

#### 28.8 Playful packaging campaign

Use:

- mustard or cream base;
- product packaging as oversized cutout art;
- hand-lettered statements;
- cartoon mascots;
- halftone/stipple shading;
- tiny utility copy;
- strong black lettering.

#### 28.9 Cartoon landing page

Use:

- large flat color bands;
- giant uppercase heading;
- one character/product illustration per section;
- thick black outlines;
- one simple CTA;
- irregular section silhouette;
- restrained body copy.

### 8.2 AI Decision Rules

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

### 8.3 Final AI output contract

When generating a website from this file, the agent should internally produce this short plan before coding:

```yaml
selectedStyle: "<style id>"
styleConfidence: 0.00
styleStrength: 0.00
secondaryStyle: "<optional style id or null>"
selectionReason:
  productFit: "..."
  audienceFit: "..."
  moodFit: "..."
  mediaFit: "..."
palette:
  background: "#..."
  surface: "#..."
  text: "#..."
  accent: "#..."
typography:
  displayDirection: "..."
  bodyDirection: "..."
heroConcept: "..."
sectionBoundaryLanguage: "..."
imageTreatment: "..."
textureTreatment: "..."
motionLanguage: "..."
antiPatternsToAvoid:
  - "..."
```

This plan is for **decision quality**. It does not need to be shown to the end user unless requested.

The website itself should then behave as if a designer deliberately chose an art direction rather than as if a component generator discovered `border-radius`.
## 9. Anti-Generic Rules and Quality Tests
### 9.1 Condensed anti-generic checklist

A generated page fails this system if it defaults to:

- centered eyebrow badge;
- generic heading;
- paragraph;
- two pill CTAs;
- floating dashboard mockup;
- six identical rounded cards;
- purple-blue gradient;
- frosted glass navigation;
- oversized blur blobs;
- glossy 3D AI illustration;
- identical spacing and component treatment in every section.

Before shipping, verify:

- [ ] One dominant style is clearly identifiable.
- [ ] The selected style fits the website's category and audience.
- [ ] At least three signature elements of that style are present.
- [ ] Typography has one strong expressive moment.
- [ ] The palette is limited and deliberate.
- [ ] The page uses composition, not just cards.
- [ ] Texture is subtle and appropriate.
- [ ] Controls remain simple and usable.
- [ ] Mobile has been recomposed.
- [ ] Accessibility requirements are intact.
- [ ] No reference brand, logo, copy, or proprietary artwork has been copied.

### 9.2 Anti-Generic Rules

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

### 9.3 Quality Tests

#### Thumbnail test

At 20% zoom, the page should still show a clear focal point, recognizable section rhythm, deliberate color blocking, and strong hierarchy.

#### Squint test

When visually blurred, the composition should retain a dominant mass, supporting mass, accent, and negative space.

#### Typography test

The page must contain one expressive display treatment, readable body text, and a clear metadata hierarchy.

#### Texture test

Turning texture off should not destroy the composition. Texture is enhancement, not structure.

#### Mode test

A reviewer should be able to identify the dominant visual mode without reading this document.

#### Genericity test

If replacing the colors and logo would make the page indistinguishable from a common SaaS template, redesign it.

## 10. Implementation Architecture and Advanced Rules
Once the style and composition are settled, use this section to translate the art direction into maintainable production code without flattening it into generic component-library defaults.
### 10.1 Implementation Notes

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

### 10.2 Component Architecture Guidance

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

### 10.3 Mode-Specific Component Guidance

#### Papercut editorial

**Buttons:** rough label shape, 1–2px ink border, little or no shadow.

**Cards:** paper clipping or magazine panel rather than generic rounded surface.

**Badges:** hand-drawn capsule, starburst, or irregular circle.

**Icons:** doodle or rough outline.

**Hero:** giant cut-paper lettering over tactile photography.

#### Pixel retro

**Buttons:** compact bitmap or mono label, square or lightly rounded.

**Cards:** rare; use flat panels or pixel windows.

**Badges:** tiny bitmap labels.

**Icons:** true bitmap language.

**Hero:** enormous pixel word or icon against photo/color field.

#### Organic commerce

**Buttons:** compact dark or cream pill, used selectively.

**Cards:** avoid frames; let products float on warm paper.

**Badges:** soft compact labels.

**Icons:** simple dark outline.

**Hero:** nature photography with huge rounded branding.

#### Terminal tech

**Buttons:** square, 1px border, mono label.

**Panels:** charcoal modular blocks.

**Badges:** tiny lime terminal labels.

**Icons:** pixel or technical mono symbols.

**Hero:** large pixel artifact on dark grid.

#### Retro Mac

**Buttons:** classic simple rectangle with strong black edge.

**Panels:** window metaphor is acceptable.

**Badges:** small system labels or black pills outside the simulated OS area.

**Icons:** bitmap desktop icons.

**Hero:** editorial heading above or around a vintage-computing scene.

#### Playful packaging

**Buttons:** small bold labels with black outline.

**Cards:** replace with illustrated feature statements where possible.

**Badges:** circular certification-style marks, doodles, or stamped shapes.

**Icons:** custom cartoon marks.

**Hero:** physical product + mascot + large brand typography.

#### Cartoon campaign

**Buttons:** thick black outline + hard shadow.

**Cards:** avoid; use full-width color sections.

**Badges:** comic labels and stickers.

**Icons:** thick outlined cartoons.

**Hero:** massive message + one narrative illustration.

#### Glitch fashion

**Buttons:** restrained; usually simple black/white editorial controls.

**Cards:** avoid unless intentionally framed like magazine modules.

**Badges:** tiny technical labels.

**Icons:** minimal monochrome.

**Hero:** oversized typography crossing a selectively corrupted portrait.

### 10.4 Hero Rules

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

### 10.5 Product and Commerce Rules

For commerce-oriented pages, let product imagery carry more visual weight than UI chrome.

Prefer:

- physical packs isolated on paper;
- tilted product clusters;
- compact quantity/price controls;
- editorial product photography;
- brief benefit statements;
- visual certifications or attributes.

Avoid building an entire store out of oversized generic cards with stock drop shadows.

### 10.6 Illustration Rules

Illustration should use one coherent rendering system per page.

Choose one:

- flat thick-outline cartoon;
- pixel art;
- hand-cut paper;
- loose doodle;
- retro desktop iconography;
- halftone mascot system.

Do not mix multiple unrelated illustration styles simply to make sections feel different.

### 10.7 Wordmarks and Brand Typography

When a custom brand font is unavailable, imitate **structural qualities**, not exact proprietary letterforms.

For example:

- chunky irregular geometry;
- rounded lowercase mass;
- blunt uppercase width;
- pixel stair-stepping;
- hand-painted unevenness.

Never redraw a reference logo exactly.

### 10.8 White Space

White space is active composition.

Large empty areas are encouraged when they create tension around a strong visual element.

Do not fill empty regions with extra cards, badges, gradients, or decorative copy merely because they appear unused.

Pixel-editorial and retro layouts especially benefit from strange but deliberate emptiness.

### 10.9 Section Rhythm

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

### 10.10 Footer

The footer should feel like the final panel of the visual story.

Possible treatments:

- dark olive or brown field with huge cream wordmark;
- simple lime terminal strip;
- classic desktop footer/menu-bar motif;
- mustard field with mascot cluster;
- pale lime field with pixel icon and compact navigation.

Keep legal and utility text readable even when the footer is expressive.

### 10.11 Copy Presentation

Keep campaign headlines concise.

Large decorative type works best with short phrases, usually 2–8 words.

Long paragraphs belong in information bands and should use the readable body family.

Do not use all caps for multi-paragraph copy.

Microcopy can be quirky, but key instructions must remain direct.

### 10.12 Controlled Randomness

Use curated irregularity only.

Recommended bounds:

- ordinary rotation: `-3deg` to `3deg`;
- large badge rotation: up to `±7deg`;
- local position offsets: `4–24px`;
- glitch block coverage: max `35%` of focal imagery;
- section overlap: max `18%` desktop and `8%` mobile.

Never randomize these values on every render. Art direction must remain stable.

### 10.13 Accessibility in Expressive Typography

Decorative display text should remain real HTML text whenever possible.

If a headline must be rendered as artwork for a special shape, provide an equivalent semantic heading in the DOM without duplicating it for screen readers.

Do not communicate navigation or actions through stylized lettering alone.

### 10.14 Performance Guidance

Texture and art direction should not produce a bloated page.

Prefer:

- one compressed texture reused through CSS;
- SVG for line art;
- WebP/AVIF for photography when supported;
- small nearest-neighbor pixel assets;
- CSS for simple blobs and hard shadows.

Avoid multiple autoplaying background videos, enormous PNG textures, or dozens of decorative canvases.

## 11. Reference Safety, Anti-Patterns, and Delivery Contexts
### 11.1 Source and Copyright Rule

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

### 11.2 Anti-Patterns

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

### 11.3 If the Project Is a Website

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

### 11.4 If the Project Is a Poster or Campaign Graphic

If applying this style to a poster, emphasize:
- oversized expressive headline
- heavier texture
- more dramatic overlap
- stronger pixel or papercut treatment
- less emphasis on strict UI usability
- sharper hierarchy by scale and texture

### 11.5 Style-selection validation

Before the page is considered complete, validate the **choice of style**, not only the execution.

- **Category test:** does the selected style make sense for the product and primary goal?
- **Audience test:** would the intended audience understand the visual language without needing design-context knowledge?
- **Asset test:** does the page use assets the style actually depends on, or is it faking the style with superficial CSS?
- **Density test:** is the information density compatible with the style strength?
- **Recognition test:** at least three signature traits are visible at balanced strength, four at strong strength.
- **Secondary-style test:** can you clearly state the one or two channels influenced by the secondary style? If not, remove it.
- **Fallback test:** if a signature asset fails to load, does the page still retain the selected grammar through typography, color, layout, and surfaces?
- **Genericity test:** if the logo and colors are replaced, does the composition still look authored? If not, redesign the structure.

The selected style is wrong if the AI must constantly violate its profile to make the product usable. Choose another style or lower the style strength instead of forcing it.

## 12. Final Verification and Creative Brief
### 12.1 Final checklist
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
### 12.2 Final creative brief
**Build interfaces like expressive digital posters and physical brand artifacts: use oversized personality-rich typography, intentional asymmetry, limited high-confidence palettes, tactile grain, pixel or hand-drawn graphics, strong color blocking, editorial photography, and simple usable controls. Select one coherent visual mode at a time, borrow only the shared visual grammar of the references, and reject generic SaaS composition whenever a more authored solution can communicate the same content clearly.**
