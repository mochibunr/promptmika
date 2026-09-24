---
name: Expressive Editorial Web Design System & Reference Style Selector
version: 8.0.0
status: normative
purpose: Help AI website-generation agents classify a project, select the most appropriate visual language from fifty-eight
  analyzed reference families, and execute that style consistently without copying reference brands or collapsing into generic
  SaaS design.
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
  - experimental-pet-editorial
  - dreamy-indie-software
  - neo-future-aigc
  - maximal-collage-report
  - y2k-portfolio-collage
  - retro-marketplace-pop
  - neo-brutal-education
  - cosmic-event-story
  - genz-influencer-editorial
  - retro-cartoon-type-specimen
  - retro-browser-type-specimen
  - summer-accessory-editorial
  - retro-supermarket-sticker
  - cat-product-collage
  - kawaii-recruitment-poster
  - valentine-kawaii-campaign
  - illustration-zine-adventure
  - dreamy-art-magazine
  - handdrawn-travel-zine
  - nostalgic-summer-magazine
  - manga-food-editorial
  - post-digital-type-collage
  - scrapbook-portfolio
  - european-color-matching
  - pixel-flower-editorial
  - botanical-papercut-typography
  - psychedelic-floral-wordmark
  - folk-fish-poster
  - magical-girl-browser
  - cinematic-floral-research
  - monochrome-storybook-brand
  - retro-game-manual-mascot
  - cinematic-anime-portfolio
  - bold-foodtruck-editorial
  - kinetic-product-landing
  - spatial-saas-workbench
  - gallery-index-portfolio
  - typographic-studio-agency
  - editorial-mercantile-commerce
  - cinematic-product-stage
  - signal-startup-launch
  - confident-business-editorial
  - signature-personal-brand
  - information-dense-command-dashboard
  - adaptive-workspace-webapp
  - tactile-menu-restaurant
  - creator-scrapbook-channel
  - campaign-narrative-marketing
  - immersive-app-showcase
  legacyModeAliases:
    papercut-editorial: paper-cut-editorial
    pixel-retro: pixel-pastoral
    organic-commerce: organic-garden-commerce
    terminal-tech: terminal-community
    retro-mac: retro-mac-editorial
    playful-packaging: playful-risograph
    cartoon-campaign: cartoon-campaign
    glitch-fashion: glitch-fashion
    experimental-pet-editorial: experimental-pet-editorial
    dreamy-indie-software: dreamy-indie-software
    neo-future-aigc: neo-future-aigc
    maximal-collage-report: maximal-collage-report
    y2k-portfolio-collage: y2k-portfolio-collage
    retro-marketplace-pop: retro-marketplace-pop
    neo-brutal-education: neo-brutal-education
    cosmic-event-story: cosmic-event-story
    genz-influencer-editorial: genz-influencer-editorial
    retro-cartoon-type-specimen: retro-cartoon-type-specimen
    retro-browser-type-specimen: retro-browser-type-specimen
    summer-accessory-editorial: summer-accessory-editorial
    retro-supermarket-sticker: retro-supermarket-sticker
    cat-product-collage: cat-product-collage
    kawaii-recruitment-poster: kawaii-recruitment-poster
    valentine-kawaii-campaign: valentine-kawaii-campaign
    illustration-zine-adventure: illustration-zine-adventure
    dreamy-art-magazine: dreamy-art-magazine
    handdrawn-travel-zine: handdrawn-travel-zine
    nostalgic-summer-magazine: nostalgic-summer-magazine
    manga-food-editorial: manga-food-editorial
    post-digital-type-collage: post-digital-type-collage
    scrapbook-portfolio: scrapbook-portfolio
    european-color-matching: european-color-matching
    pixel-flower-editorial: pixel-flower-editorial
    botanical-papercut-typography: botanical-papercut-typography
    psychedelic-floral-wordmark: psychedelic-floral-wordmark
    folk-fish-poster: folk-fish-poster
    magical-girl-browser: magical-girl-browser
    cinematic-floral-research: cinematic-floral-research
    monochrome-storybook-brand: monochrome-storybook-brand
    retro-game-manual-mascot: retro-game-manual-mascot
    cinematic-anime-portfolio: cinematic-anime-portfolio
    bold-foodtruck-editorial: bold-foodtruck-editorial
    kinetic-product-landing: kinetic-product-landing
    spatial-saas-workbench: spatial-saas-workbench
    gallery-index-portfolio: gallery-index-portfolio
    typographic-studio-agency: typographic-studio-agency
    editorial-mercantile-commerce: editorial-mercantile-commerce
    cinematic-product-stage: cinematic-product-stage
    signal-startup-launch: signal-startup-launch
    confident-business-editorial: confident-business-editorial
    signature-personal-brand: signature-personal-brand
    information-dense-command-dashboard: information-dense-command-dashboard
    adaptive-workspace-webapp: adaptive-workspace-webapp
    tactile-menu-restaurant: tactile-menu-restaurant
    creator-scrapbook-channel: creator-scrapbook-channel
    campaign-narrative-marketing: campaign-narrative-marketing
    immersive-app-showcase: immersive-app-showcase
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
    experimental-pet-editorial:
      background: '#9B302C'
      surface: '#AEE66B'
      text: '#F6E9CF'
      secondary: '#6F1F23'
      accent: '#B9F06D'
      dark: '#241A18'
    dreamy-indie-software:
      background: '#0E1021'
      surface: '#171828'
      text: '#F5F2FF'
      secondary: '#8176E8'
      accent: '#F178A6'
      dark: '#080912'
    neo-future-aigc:
      background: '#050505'
      surface: '#FFFFFF'
      text: '#F7F7F7'
      secondary: '#35D6FF'
      accent: '#B8FF4A'
      dark: '#000000'
    maximal-collage-report:
      background: '#0A0A0B'
      surface: '#202020'
      text: '#F7F4EC'
      secondary: '#2452E8'
      accent: '#DDF02A'
      dark: '#050505'
    y2k-portfolio-collage:
      background: '#111111'
      surface: '#F6F0E7'
      text: '#FFFFFF'
      secondary: '#FF42B5'
      accent: '#5BE6DD'
      dark: '#050505'
    retro-marketplace-pop:
      background: '#1677E8'
      surface: '#F3E6D5'
      text: '#0B0B0B'
      secondary: '#FF3344'
      accent: '#FFF200'
      dark: '#111111'
    neo-brutal-education:
      background: '#20211F'
      surface: '#FFF8E8'
      text: '#FFFFFF'
      secondary: '#6672FF'
      accent: '#FFD852'
      dark: '#151515'
    cosmic-event-story:
      background: '#1C184D'
      surface: '#5F37D3'
      text: '#FFFFFF'
      secondary: '#43E6C5'
      accent: '#F4DF42'
      dark: '#050505'
    genz-influencer-editorial:
      background: '#2059C8'
      surface: '#C6FF69'
      text: '#F6F7F1'
      secondary: '#BFFF5B'
      accent: '#F0F3E6'
      dark: '#101313'
    retro-cartoon-type-specimen:
      background: '#6862D3'
      surface: '#F7F0DE'
      text: '#151515'
      secondary: '#F1B8C6'
      accent: '#F3C62A'
      dark: '#1B1B1B'
    retro-browser-type-specimen:
      background: '#0AA45E'
      surface: '#F5EEDB'
      text: '#111111'
      secondary: '#4AA5D8'
      accent: '#FFE70B'
      dark: '#121212'
    summer-accessory-editorial:
      background: '#D2D2D2'
      surface: '#F8F8F5'
      text: '#080808'
      secondary: '#F3A5CB'
      accent: '#FFF267'
      dark: '#111111'
    retro-supermarket-sticker:
      background: '#F3F2EC'
      surface: '#2378D7'
      text: '#111111'
      secondary: '#E82F24'
      accent: '#FFEF19'
      dark: '#111111'
    cat-product-collage:
      background: '#F6F0DF'
      surface: '#FFFFFF'
      text: '#6E3A1D'
      secondary: '#F2A8D2'
      accent: '#A8D570'
      dark: '#58311F'
    kawaii-recruitment-poster:
      background: '#BFDDE9'
      surface: '#FFF58A'
      text: '#2E5D91'
      secondary: '#F3A8C5'
      accent: '#63CFA0'
      dark: '#254F7F'
    valentine-kawaii-campaign:
      background: '#F58AB8'
      surface: '#43BDE5'
      text: '#FFFFFF'
      secondary: '#F7A7C7'
      accent: '#E73D62'
      dark: '#2A2025'
    illustration-zine-adventure:
      background: '#6591D4'
      surface: '#F6F1DA'
      text: '#F8F2E4'
      secondary: '#F0A139'
      accent: '#A8E57B'
      dark: '#3E4136'
    dreamy-art-magazine:
      background: '#6E877D'
      surface: '#D8D6BA'
      text: '#2D89C7'
      secondary: '#B3C5B5'
      accent: '#F6F0DE'
      dark: '#273535'
    handdrawn-travel-zine:
      background: '#FFFDF5'
      surface: '#F4F3E9'
      text: '#A63A26'
      secondary: '#244B91'
      accent: '#E7A23E'
      dark: '#28384B'
    nostalgic-summer-magazine:
      background: '#B7D2DD'
      surface: '#ECE8D8'
      text: '#F1E9D9'
      secondary: '#758B9C'
      accent: '#D9A9A0'
      dark: '#4B5A62'
    manga-food-editorial:
      background: '#F3E9D0'
      surface: '#D7A64B'
      text: '#4A2B1F'
      secondary: '#879B42'
      accent: '#E56D3B'
      dark: '#28363B'
    post-digital-type-collage:
      background: '#F8F8F6'
      surface: '#FFFFFF'
      text: '#050505'
      secondary: '#2E69E8'
      accent: '#111111'
      dark: '#050505'
    scrapbook-portfolio:
      background: '#F6F4B7'
      surface: '#1D95CF'
      text: '#2E6CA5'
      secondary: '#F37E63'
      accent: '#A8D96B'
      dark: '#31526D'
    european-color-matching:
      background: '#055254'
      surface: '#5FA09D'
      text: '#E8E3B5'
      secondary: '#F4EDC4'
      accent: '#5FA09D'
      dark: '#033F40'
    pixel-flower-editorial:
      background: '#1740C0'
      surface: '#1740C0'
      text: '#F5F0DE'
      secondary: '#F2D12B'
      accent: '#D92C2E'
      dark: '#132E87'
    botanical-papercut-typography:
      background: '#F5F0C9'
      surface: '#F9F3D4'
      text: '#4A5A2B'
      secondary: '#6E7937'
      accent: '#E65B32'
      dark: '#4C3B24'
    psychedelic-floral-wordmark:
      background: '#000000'
      surface: '#000000'
      text: '#FFE31A'
      secondary: '#FFE31A'
      accent: '#FFE31A'
      dark: '#000000'
    folk-fish-poster:
      background: '#204C99'
      surface: '#204C99'
      text: '#F2E8D2'
      secondary: '#E97832'
      accent: '#F0C44E'
      dark: '#1B2742'
    magical-girl-browser:
      background: '#3159D8'
      surface: '#F2F0B8'
      text: '#FFFFFF'
      secondary: '#6DA0E8'
      accent: '#D6F35B'
      dark: '#2746A8'
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
agentInstruction: Before generating layout, components, or styling, evaluate the project against the selection criteria, choose
  exactly one dominant canonical style, optionally choose one subordinate secondary style, lock the visual strategy, then
  implement and validate against that style profile.
sourceDocuments:
- name: Expressive Editorial Web Design System
  version: 1.0.0
  purpose: A production-ready visual system for AI-generated interfaces inspired by handmade editorial, pixel-retro, organic
    commerce, terminal-tech, retro-computing, playful packaging, and cartoon campaign design.
  role: shared design foundations, tokens, modes, components, recipes, implementation, and quality rules
- name: Expressive Editorial Style Catalog
  version: 2.0.0
  purpose: Help AI website-generation agents select and execute the most appropriate visual style from forty-three analyzed reference families and fifteen original frontend archetypes.
  role: style-selection workflow and forty-three reference-derived profiles plus fifteen model-authored frontend archetypes
selection:
  dominantStylesPerPage: 1
  secondaryStylesPerPageMax: 1
  secondaryVisualShareMax: 30%
  minimumStyleConfidenceToAutoselect: 0.65
  scoringScale: 0-10 per criterion before weighted normalization to 0.00-1.00
  websiteTypeGateEnabled: true
  websiteTypeGateRule: Filter or boost candidates using website type before applying the existing weighted style rubric; never let website type override accessibility, asset, density, or interaction hard gates.
  requiredInputs:
  - websiteType
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
  - The secondary style must not replace the dominant style layout, palette, typography, imagery, and component language simultaneously.
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
  - Lock palette, type roles, hero motif, media treatment, texture, icon language, and section-boundary language before coding.
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
websiteTypeIntelligence:
  purpose: Map the structural demands of a frontend website type to styles that can express personality without sabotaging usability.
  rule: Website type is a structural constraint, not a paint preset. First understand what the site must do, then choose a style whose composition and interaction grammar can support that job.
  types:
    landing-page:
      primaryAuthoredStyle: kinetic-product-landing
      strongExistingAlternates:
      - paper-cut-editorial
      - neo-future-aigc
      - bold-foodtruck-editorial
      structuralNeeds:
      - immediate value proposition
      - one dominant conversion path
      - fast visual comprehension
      - clear proof and CTA rhythm
    saas-website:
      primaryAuthoredStyle: spatial-saas-workbench
      strongExistingAlternates:
      - dreamy-indie-software
      - pixel-humanist-agency
      - neo-future-aigc
      structuralNeeds:
      - product explanation
      - trust and proof
      - feature depth
      - product UI previews that remain subordinate to the message
    portfolio:
      primaryAuthoredStyle: gallery-index-portfolio
      strongExistingAlternates:
      - cinematic-anime-portfolio
      - retro-mac-editorial
      - y2k-portfolio-collage
      - dreamy-art-magazine
      structuralNeeds:
      - work-first hierarchy
      - project differentiation
      - authorship
      - case-study navigation
    agency-website:
      primaryAuthoredStyle: typographic-studio-agency
      strongExistingAlternates:
      - pixel-humanist-agency
      - paper-cut-editorial
      - maximal-collage-report
      structuralNeeds:
      - positioning
      - capabilities
      - selected work
      - credibility without corporate blandness
    ecommerce-store:
      primaryAuthoredStyle: editorial-mercantile-commerce
      strongExistingAlternates:
      - organic-garden-commerce
      - playful-risograph
      - cat-product-collage
      - bold-foodtruck-editorial
      structuralNeeds:
      - product discovery
      - filtering
      - clear price and variant information
      - frictionless cart and checkout
    product-website:
      primaryAuthoredStyle: cinematic-product-stage
      strongExistingAlternates:
      - neo-future-aigc
      - dreamy-indie-software
      - retro-marketplace-pop
      structuralNeeds:
      - product desirability
      - feature storytelling
      - demonstrations
      - clear purchase or trial action
    startup-website:
      primaryAuthoredStyle: signal-startup-launch
      strongExistingAlternates:
      - neo-future-aigc
      - pixel-humanist-agency
      - post-digital-type-collage
      structuralNeeds:
      - category definition
      - speed and confidence
      - proof
      - recruiting or conversion flexibility
    business-website:
      primaryAuthoredStyle: confident-business-editorial
      strongExistingAlternates:
      - european-color-matching
      - paper-cut-editorial at restrained strength
      structuralNeeds:
      - trust
      - service clarity
      - contact paths
      - credibility and local/contextual information
    personal-brand-website:
      primaryAuthoredStyle: signature-personal-brand
      strongExistingAlternates:
      - gallery-index-portfolio
      - scrapbook-portfolio
      - handdrawn-travel-zine
      structuralNeeds:
      - recognizable voice
      - biography
      - proof of work
      - audience relationship
    dashboard:
      primaryAuthoredStyle: information-dense-command-dashboard
      strongExistingAlternates:
      - terminal-community at restrained strength
      - retro-mac-editorial at restrained strength
      structuralNeeds:
      - scan speed
      - stable information hierarchy
      - dense data
      - predictable controls
    web-app:
      primaryAuthoredStyle: adaptive-workspace-webapp
      strongExistingAlternates:
      - spatial-saas-workbench
      - pixel-humanist-agency at restrained strength
      structuralNeeds:
      - task completion
      - navigation memory
      - responsive workspace behavior
      - accessible state feedback
    restaurant-website:
      primaryAuthoredStyle: tactile-menu-restaurant
      strongExistingAlternates:
      - bold-foodtruck-editorial
      - playful-risograph
      - manga-food-editorial
      structuralNeeds:
      - appetite appeal
      - menu readability
      - hours/location/reservations
      - strong atmosphere
    creator-website:
      primaryAuthoredStyle: creator-scrapbook-channel
      strongExistingAlternates:
      - genz-influencer-editorial
      - y2k-portfolio-collage
      - magical-girl-browser
      structuralNeeds:
      - latest content
      - channels and community
      - personality
      - sponsorship/product links without clutter
    marketing-website:
      primaryAuthoredStyle: campaign-narrative-marketing
      strongExistingAlternates:
      - maximal-collage-report
      - retro-marketplace-pop
      - cartoon-campaign
      structuralNeeds:
      - message sequencing
      - evidence
      - campaign rhythm
      - repeated conversion opportunities without repetition
    app-showcase:
      primaryAuthoredStyle: immersive-app-showcase
      strongExistingAlternates:
      - dreamy-indie-software
      - neo-future-aigc
      - magical-girl-browser
      structuralNeeds:
      - product-in-use visualization
      - device or interface choreography
      - feature focus
      - store/download CTA clarity
  authoredStylePolicy:
    count: 15
    origin: model-authored from accumulated frontend and reference-style intelligence in this conversation
    copyReferenceComposition: false
    useAsCanonicalStyles: true
    rule: These archetypes are not generic templates. Each one defines composition, hierarchy, motion, component grammar, and failure modes for a specific frontend job.

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
  description: A tactile handmade editorial language where typography is treated like cut material. Warm paper surfaces, earthy
    color, irregular silhouettes, handwritten annotation, and poster-scale type create a physical, human feeling without sacrificing
    digital usability.
  designPhilosophy: Make the interface feel assembled rather than rendered. Precision exists underneath the composition, but
    visible surfaces should carry controlled imperfection and evidence of a hand-made process.
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
  fallbackBehavior: If pixel-script type is unavailable, use a legible bitmap display or convert a short decorative word to
    an original pixel SVG while preserving semantic text accessibly.
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
  summary: A clean but expressive ecommerce style pairing lush nature photography, cream paper-like surfaces, oversized rounded
    branding, soft organic shapes, and sparse product presentation.
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
  referenceVisual: Pale lime agency page with giant monochrome pixel heart and arrow, bitmap tool/brain/team icons, mono copy,
    bold sans headings, huge quote marks, and wide empty areas.
  summary: A surprisingly warm agency/portfolio system that uses huge monochrome pixel graphics, pale lime fields, mono copy,
    blunt sans headings, and lots of intentional empty space.
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
  referenceVisual: Dark technical community page with a huge pixel-art Earth, fine grid, black/charcoal modular panels, bitmap
    COMMUNITY headline, tiny mono metadata, and a large acid-lime lower field.
  summary: A dark retro-futurist technical style combining bitmap display type, pixel art, neon-lime accents, dense mono metadata,
    technical grids, and modular terminal-like panels.
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
  fallbackBehavior: If no pixel hero asset exists, create an original low-resolution emblem/map/data object and preserve grid
    + mono + modular-panel grammar.
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
  designPhilosophy: Use early-computing UI as a narrative frame, not a costume applied to every control. The page should feel
    like a digital exhibition where modern editorial hierarchy and retro interface artifacts support each other.
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
  referenceVisual: Bright food-brand page dominated by mustard yellow, cream, turquoise, orange, pink, and black; large product
    packs, smiling cartoon mascots, chunky hand lettering, stipple/halftone shading, badges, and vertical campaign statements.
  summary: A joyful consumer-brand style using bold flat color, custom chunky lettering, mascot illustration, hand-drawn copy,
    halftone/stipple shading, and product packaging as the hero graphic.
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
- id: experimental-pet-editorial
  referenceOrder: 10
  name: Experimental Pet Editorial Commerce
  aliases:
  - pet editorial
  - scalloped pet commerce
  - experimental animal brand
  - retro pet boutique
  referenceVisual: Deep brick-red pet-brand composition with an oversized circular dog portrait, acid-lime checkout UI, tennis-ball
    typography, dotted construction grid, scalloped/bone-like borders, and ornate display lettering.
  summary: An eccentric pet and lifestyle commerce language that combines deep brick red, acid lime, circular portraiture,
    typographic orbit effects, scalloped pattern systems, and surprisingly clean transactional UI.
  description: A brand-first editorial commerce system where pet photography and eccentric typography carry emotion while
    clean product and checkout modules preserve usability. Decorative borders behave like living patterns rather than ordinary
    containers.
  designPhilosophy: Treat the brand world as a playful printed universe surrounding a competent shop. Typography may bend
    around objects and borders may become motifs, but buying, forms, and navigation remain obvious.
  brandPersonality:
  - eccentric
  - affectionate
  - fashion-aware
  - art-directed
  - playful
  - boutique
  - slightly surreal
  emotionalTone:
  - warm
  - quirky
  - stylish
  - tactile
  - friendly
  - unexpected
  bestFor:
  - pet brands
  - pet apparel
  - boutique ecommerce
  - fashionable lifestyle goods
  - creative DTC
  - editorial commerce
  - animal-care campaigns
  avoidFor:
  - enterprise dashboards
  - banking
  - medical records
  - legal portals
  - dense developer documentation
  audience:
  - pet owners
  - design-aware shoppers
  - younger lifestyle audiences
  - boutique ecommerce customers
  selectionProfile:
    pickWhen:
    - pet or lifestyle photography is central
    - brand can support unusual typography
    - commerce needs personality without sacrificing checkout clarity
    - ornamental pattern language fits the identity
    rejectWhen:
    - the interface is mostly tables/forms
    - formal institutional trust dominates
    - no strong hero photography or custom graphic assets exist
    contentDensityFit:
      level: medium
      score: 5
      note: Works for product storytelling and moderate catalog content; dense utility flows should move into calmer panels.
    mediaAssetFit:
      score: 9
      ideal:
      - strong pet portrait photography
      - product screenshots or ecommerce UI
      - original motif/pattern SVGs
      minimum: Needs one charismatic focal image or a very strong mascot/illustration substitute.
    interactionFit:
      score: 8
      note: Excellent for branded ecommerce if transaction controls stay simple and high-contrast.
    accessibilityFit:
      score: 7
      note: Curved/orbiting type must remain decorative; essential labels stay horizontal and conventional.
    implementationBudget: medium-high
  palette:
    background: '#9B302C'
    surface: '#AEE66B'
    text: '#F6E9CF'
    muted_text: '#D7C3A8'
    secondary: '#6F1F23'
    accent: '#B9F06D'
    dark: '#241A18'
    line: '#D9A797'
  typography:
    display:
      direction: ornamental condensed serif/script mix with oversized bespoke letterforms
      weight: 600-900
      lineHeight: 0.82-0.98
      use: brand statements and editorial moments only
    body:
      direction: clean modern grotesk
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: narrow clean sans
      use: checkout labels, metadata, pricing, utility controls
    familyLimit: 3
  layout:
    grid: 12-column editorial/commerce grid with visible dotted construction lines as decoration
    alignment: central portrait anchors with asymmetric supporting UI
    whitespace: moderate
    overlap: high around decorative graphics; low around controls
    sectionRhythm: portrait/product showcase -> typographic manifesto -> patterned transition -> clean commerce/footer scene
  hero:
    visualPriority: portrait-first
    formula: oversized circular pet portrait + branded mobile/desktop UI mockups + deep red field + small decorative type
      and stitched/dotted guides
    ctaCount: 0-1 dominant
  components:
    navigation: minimal header or thin editorial utility row
    cards: clean lime/red transactional modules framed by decorative surroundings
    buttons: compact high-contrast flat controls
    forms: clean rectangular fields; ornament may frame but never replace field boundaries
    badges: tiny shopping-bag labels, bone/paw motifs, circular stamps
  media:
    photography: characterful studio pet photography with warm neutral styling
    illustration: ornamental bones, scallops, paw/bubble motifs, circular type paths
    icons: small line icons or bespoke pet motifs
    texture:
    - subtle grain
    - dotted grid
    - soft pattern repetition
    textureStrength: 2-8% depending on layer
  surfaces:
    borders: thin dotted guides plus large scalloped organic frames
    radius: 'mixed: precise UI 4-12px, decorative frames custom scallops'
    shadows: little or none; let color and pattern separate layers
  motion:
  - slow portrait drift
  - curved text orbit only if subtle
  - scallop mask reveal
  - small cart-control shift
  responsive:
  - keep portrait dominant
  - re-stack commerce screenshots
  - simplify orbiting copy
  - convert giant scalloped frames into top/bottom edge motifs
  - keep forms conventional
  accessibilityRisks:
  - curved essential text
  - low lime-on-red contrast
  - decorative pattern overwhelming controls
  - oversized portrait hiding navigation
  signatureElements:
  - brick-red field
  - acid-lime commerce UI
  - oversized circular pet portrait
  - typography wrapping around an object
  - scalloped/bone-like border system
  - dotted editorial grid
  recognitionHeuristics:
  - The page should feel like an art-directed pet magazine that happens to sell things.
  - The ornamental frame system must be visible in at least one major transition.
  - Functional UI must look calmer than the surrounding brand world.
  scores:
    playful: 9
    nostalgic: 6
    technical: 2
    organic: 7
    editorial: 9
    pixel: 1
    illustrative: 7
    texture: 7
    bold: 9
    commerce: 9
    density: 5
  implementationComplexity: medium-high
  compatibleSecondaryStyles:
  - organic-garden-commerce
  - playful-risograph
  - paper-cut-editorial
  incompatibleSecondaryStyles:
  - terminal-community at high strength
  - glitch-fashion at high strength
  - cold corporate minimalism
  fallbackBehavior: If custom scalloped/pet motifs are unavailable, preserve the brick-red + acid-lime palette, circular hero
    portrait, curved decorative typography, and clean commerce UI instead of replacing the page with generic pet-store cards.
  failureModes:
  - turning every panel into a scalloped blob
  - wrapping critical copy on curves
  - generic pet-store ecommerce cards
  - using random paw-print clipart
- id: dreamy-indie-software
  referenceOrder: 11
  name: Dreamy Indie Software
  aliases:
  - dreamy dark portfolio
  - soft game UI
  - indie software toy
  - pastel sci-fi web
  referenceVisual: Deep navy star field with tiny clouds, a glossy pink 3D bubble wordmark, rounded lavender/blue product
    panels, game-like thumbnails, tiny pills, and floating miniature objects.
  summary: A soft dark-mode product language pairing atmospheric starry space, puffy 3D branding, pastel modular cards, game-world
    imagery, and disciplined software content structure.
  description: An emotional software and portfolio system that lets the hero feel like a small dream world while the product
    sections below remain modular and legible. Cute 3D branding is concentrated in a few memorable moments rather than applied
    to every control.
  designPhilosophy: Create atmosphere first, then prove the product is real. The shell can feel dreamy, toy-like, and celestial,
    but cards and controls should remain organized enough to support actual software content.
  brandPersonality:
  - imaginative
  - indie
  - friendly
  - curious
  - playful
  - craft-led
  - digital-native
  emotionalTone:
  - dreamy
  - cozy
  - nighttime
  - whimsical
  - soft
  - optimistic
  bestFor:
  - indie software
  - game-adjacent products
  - creative tools
  - small studios
  - interactive portfolios
  - community apps
  - digital toys
  avoidFor:
  - government portals
  - banking
  - legal tools
  - serious enterprise admin
  - high-density analytics
  audience:
  - creative technologists
  - gamers
  - designers
  - younger software users
  - indie communities
  selectionProfile:
    pickWhen:
    - brand should feel emotional and playful
    - dark mode is appropriate
    - colorful product imagery exists
    - software content can be organized into modular showcases
    rejectWhen:
    - institutional trust or dense task efficiency dominates
    - 3D/illustration assets cannot be produced
    - the product requires extremely austere professional tone
    contentDensityFit:
      level: medium
      score: 5
      note: Supports moderate feature and log content when cards remain disciplined and the atmospheric layer stays sparse.
    mediaAssetFit:
      score: 9
      ideal:
      - original soft 3D wordmark/object
      - game-like screenshots
      - colorful thumbnail art
      - small floating decorative assets
      minimum: Needs either one convincing soft-3D hero or a strong illustrated replacement.
    interactionFit:
      score: 8
      note: Works well for product marketing and moderately interactive showcases; keep task flows calmer.
    accessibilityFit:
      score: 8
      note: Dark-mode contrast is straightforward if tiny labels are kept non-critical and pastel-on-dark contrast is checked.
    implementationBudget: high
  palette:
    background: '#0E1021'
    surface: '#171828'
    text: '#F5F2FF'
    muted_text: '#AAA7C4'
    secondary: '#8176E8'
    accent: '#F178A6'
    dark: '#080912'
    line: '#4A4D82'
  typography:
    display:
      direction: inflated rounded 3D/bubble display or heavy rounded sans
      weight: 700-900
      lineHeight: 0.85-1.0
      use: hero wordmark and one or two emotional statements
    body:
      direction: clean modern sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: tiny rounded sans/mono
      use: pills, labels, navigation, metadata
    familyLimit: 2
  layout:
    grid: 12-column dark editorial grid with modular showcase clusters
    alignment: centered atmospheric hero, asymmetric card groups below
    whitespace: high
    overlap: selective floating-object overlap
    sectionRhythm: dreamy hero -> rounded product showcase -> quiet manifesto -> log/book cards -> atmospheric footer
  hero:
    visualPriority: 3D wordmark-first
    formula: starry navy field + small clouds + puffy 3D brand word + tiny intro copy + one subtle CTA
    ctaCount: 0-1 dominant
  components:
    navigation: tiny edge-aligned pills
    cards: rounded dark/lavender panels with colorful screenshot content
    buttons: small pastel or white pill/rounded rectangle
    forms: dark simple controls with bright focus ring
    badges: tiny pastel capsule labels
  media:
    photography: rare; use stylized screenshots or game imagery
    illustration: soft 3D objects, clouds, small isometric/pixel-world elements
    icons: small friendly glyphs, consistent rounded style
    texture:
    - very subtle star noise
    - soft vignette
    textureStrength: 1-4%
  surfaces:
    borders: 1px lavender/blue or low-contrast light border
    radius: 16-28px on content modules
    shadows: soft floating-toy shadow only for hero objects
  motion:
  - slow cloud drift
  - soft hero float
  - card rise/fade
  - tiny orbit or bob on decorative objects
  responsive:
  - simplify star field
  - keep one puffy hero word at readable scale
  - stack modular cards
  - reduce floating side objects
  - preserve dark-to-pastel contrast
  accessibilityRisks:
  - too-small pastel labels
  - glossy 3D applied to controls
  - low contrast within dark cards
  - excessive floating loops
  signatureElements:
  - deep navy star field
  - puffy 3D hero wordmark
  - soft cartoon clouds
  - rounded lavender/blue showcase cards
  - game-like thumbnails
  - tiny floating decorative objects
  recognitionHeuristics:
  - The hero should feel like an indie game title screen, but the content below should feel like a real product site.
  - Only a few objects should be glossy/3D.
  - Dark space should remain spacious rather than cyberpunk-dense.
  scores:
    playful: 9
    nostalgic: 5
    technical: 4
    organic: 3
    editorial: 7
    pixel: 4
    illustrative: 9
    texture: 4
    bold: 7
    commerce: 5
    density: 5
  implementationComplexity: high
  compatibleSecondaryStyles:
  - pixel-humanist-agency
  - pixel-pastoral
  - neo-future-aigc
  incompatibleSecondaryStyles:
  - glitch-fashion at maximal strength
  - retro-marketplace-pop at high strength
  - formal institutional minimalism
  fallbackBehavior: If custom 3D assets are unavailable, use an original rounded display face with layered soft shadows, simple
    cloud SVGs, and colorful product imagery while preserving the deep navy atmospheric shell.
  failureModes:
  - turning into generic purple dark-mode SaaS
  - using glossy blobs everywhere
  - too many floating objects
  - making all cards identical
- id: neo-future-aigc
  referenceOrder: 12
  name: Neo-Future AIGC Creative
  aliases:
  - AIGC creative portfolio
  - gel device futurism
  - post-digital creative tech
  - candy-tech editorial
  referenceVisual: Black-and-white creative portfolio with neon cyan/lime/pink accents, asymmetrical grotesk typography, tiny
    capsule labels, modular black cards, and a phone wrapped in a glossy cyan gel-like 3D frame.
  summary: A crisp post-digital creative-tech style that uses a brutal black/white base, fluorescent candy accents, experimental
    micro-labels, modular editorial cards, and one glossy gel-like hero object.
  description: A contemporary creative-tech system that feels futuristic without becoming generic cyberpunk. High-contrast
    black and white provide discipline; neon accents and one surreal glossy device/object provide the spectacle.
  designPhilosophy: Keep the system graphic and typographic first. Futurism should come from one impossible object, precise
    asymmetry, and candy-color details, not from an ocean of gradients and glowing glass.
  brandPersonality:
  - experimental
  - tech-forward
  - design-led
  - confident
  - playful
  - sharp
  - future-facing
  emotionalTone:
  - electric
  - clean
  - curious
  - inventive
  - premium-playful
  bestFor:
  - AIGC tools
  - creative technology
  - design studios
  - experimental portfolios
  - new-media agencies
  - creative coding products
  - innovation campaigns
  avoidFor:
  - traditional banking
  - legal services
  - medical portals
  - heritage luxury unless intentionally contrasted
  audience:
  - designers
  - creative technologists
  - AI creators
  - digital artists
  - innovation teams
  selectionProfile:
    pickWhen:
    - creative technology is central
    - a strong hero render can be produced
    - brand accepts neon accent colors
    - editorial asymmetry fits the content
    rejectWhen:
    - the project requires conservative institutional trust
    - the page is mostly forms/tables
    - 3D hero production is impossible and no strong alternative exists
    contentDensityFit:
      level: medium
      score: 6
      note: Works with moderate portfolio/product density if modules stay simple and contrast remains strong.
    mediaAssetFit:
      score: 9
      ideal:
      - one high-quality glossy 3D render
      - original motion/graphic assets
      - creative project thumbnails
      minimum: Can fall back to strong vector geometry and typography if the hero render is unavailable.
    interactionFit:
      score: 8
      note: Good for creative tools and portfolio interactions; maintain conventional form behavior.
    accessibilityFit:
      score: 8
      note: High contrast base is strong; neon-on-white combinations must be checked.
    implementationBudget: high
  palette:
    background: '#050505'
    surface: '#FFFFFF'
    text: '#F7F7F7'
    muted_text: '#B7B7B7'
    secondary: '#35D6FF'
    accent: '#B8FF4A'
    dark: '#000000'
    line: '#D8D8D8'
  typography:
    display:
      direction: large contemporary grotesk with abrupt line breaks and optional serif contrast accent
      weight: 500-800
      lineHeight: 0.86-1.0
      use: hero and section titles
    body:
      direction: clean neutral grotesk
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: tiny neo-grotesk
      use: capsules, metadata, corner labels
    familyLimit: 3
  layout:
    grid: 12-column black/white editorial grid with nested asymmetric modules
    alignment: strong asymmetry balanced by generous white space
    whitespace: high
    overlap: hero object may break black/white section boundary
    sectionRhythm: black hero + gel object -> white breathing strip -> black modular portfolio cards -> minimal footer
  hero:
    visualPriority: object + type
    formula: black field + large broken-line title + tiny capsule metadata + glossy cyan gel-framed device crossing into white
      section
    ctaCount: 0-1 dominant
  components:
    navigation: tiny top labels with one or two playful capsules
    cards: black modular editorial panels with sharp internal composition; rounded corners only when intentional
    buttons: small bright capsule or simple arrow control
    forms: minimal high-contrast rectangular controls
    badges: fluorescent candy capsules
  media:
    photography: creative project imagery; often screen/graphic-led
    illustration: 3D gel frame, candy rods, starburst vectors, small surreal objects
    icons: simple minimal glyphs with occasional playful custom mark
    texture:
    - none or ultra-subtle grain
    textureStrength: 0-2%
  surfaces:
    borders: mostly none or 1px high-contrast rules
    radius: 0-24px, selective; hero gel object organic
    shadows: 3D object may cast realistic soft shadow; UI otherwise flat
  motion:
  - gel-object slow float
  - graphic line burst
  - card mask reveal
  - small capsule slide
  responsive:
  - keep black/white split clear
  - scale hero object down but preserve overlap
  - stack modular cards with unequal heights
  - reduce tiny metadata density
  accessibilityRisks:
  - neon text contrast on white
  - overly decorative 3D
  - tiny labels becoming controls
  - generic AI-gradient drift
  signatureElements:
  - black/white hard split
  - cyan gel-like hero device
  - neon lime/pink/cyan micro-accents
  - asymmetric large grotesk title
  - tiny capsule metadata
  - modular black creative cards
  recognitionHeuristics:
  - The page should feel contemporary and experimental even with all gradients removed.
  - One glossy hero object is enough.
  - Neon colors behave like candy punctuation, not background wallpaper.
  scores:
    playful: 8
    nostalgic: 3
    technical: 7
    organic: 2
    editorial: 9
    pixel: 2
    illustrative: 8
    texture: 2
    bold: 9
    commerce: 5
    density: 6
  implementationComplexity: high
  compatibleSecondaryStyles:
  - dreamy-indie-software
  - glitch-fashion
  - y2k-portfolio-collage
  incompatibleSecondaryStyles:
  - paper-cut-editorial at high strength
  - organic-garden-commerce at high strength
  - retro-cartoon-type-specimen at maximal strength
  fallbackBehavior: Without a custom 3D gel render, use one original fluid vector frame around a real device screenshot, keep
    the black/white split, and preserve fluorescent micro-labels plus asymmetric typography.
  failureModes:
  - generic black AI landing page with cyan gradient
  - too many glossy 3D objects
  - neon on every component
  - rounding every module
- id: maximal-collage-report
  referenceOrder: 13
  name: Maximal Collage Report
  aliases:
  - surreal trend report
  - dinner party editorial
  - maximal report deck
  - collage publication
  referenceVisual: Electric cobalt cover with a giant white/yellow-green stacked title, surreal floating cutout objects, warped
    black-white patterns, followed by black editorial report pages with pink/blue collage panels, pull quotes, contents bars,
    and large statistics.
  summary: A high-impact report and publication language combining surreal collage, oversized condensed typography, cobalt
    and toxic-yellow accents, black editorial grids, modular chapters, and dense-but-disciplined storytelling.
  description: A maximal publication system that turns research, trends, or cultural commentary into a visual event. The cover
    can be chaotic, but interior sections use clear report logic, chapter labels, statistics, and disciplined text columns.
  designPhilosophy: Let the cover seduce and the inside explain. Maximal collage should create curiosity while the report
    grid protects comprehension. Distortion belongs to imagery and display type, not long-form information.
  brandPersonality:
  - cultural
  - provocative
  - research-driven
  - energetic
  - experimental
  - editorial
  - confident
  emotionalTone:
  - surreal
  - bold
  - busy
  - intelligent
  - playful
  - urgent
  bestFor:
  - trend reports
  - research microsites
  - culture decks
  - strategy presentations
  - creative reports
  - festival publications
  - campaign storytelling
  avoidFor:
  - checkout flows
  - banking apps
  - medical portals
  - dense operational dashboards
  audience:
  - creative strategists
  - marketers
  - culture researchers
  - design audiences
  - presentation viewers
  selectionProfile:
    pickWhen:
    - the project has research/story chapters
    - cover impact matters
    - strong collage assets can be created
    - the content benefits from stats, quotes, and chapter modules
    rejectWhen:
    - the main goal is repeated task completion
    - there is no content hierarchy to organize
    - the audience requires quiet institutional presentation
    contentDensityFit:
      level: medium-high
      score: 7
      note: Can carry substantial content if dense text sits inside calm black/white editorial modules rather than the collage
        cover.
    mediaAssetFit:
      score: 9
      ideal:
      - surreal cutout image library
      - original collage assets
      - strong charts/stats
      - portrait or object photography
      minimum: Needs enough visual material for one compelling collage cover; interior can be more typographic.
    interactionFit:
      score: 5
      note: Best for reading, browsing, chapter navigation, and light data interaction.
    accessibilityFit:
      score: 6
      note: Keep long-form text outside collage zones; tab labels and contents bars need clear contrast.
    implementationBudget: high
  palette:
    background: '#0A0A0B'
    surface: '#202020'
    text: '#F7F4EC'
    muted_text: '#C9C6BE'
    secondary: '#2452E8'
    accent: '#DDF02A'
    dark: '#050505'
    line: '#414141'
  typography:
    display:
      direction: heavy condensed/block sans with stacked extrusion or gradient emphasis
      weight: 800-950
      lineHeight: 0.72-0.9
      use: cover and chapter statements
    body:
      direction: neutral editorial sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: condensed sans/mono
      use: table of contents, page numbers, captions
    familyLimit: 3
  layout:
    grid: 12-column report grid with full-bleed cover and modular interior spreads
    alignment: 'cover: radial/asymmetric collage; interior: disciplined editorial grid'
    whitespace: 'variable: dense cover, calmer interior'
    overlap: high on cover; low around long text
    sectionRhythm: maximal cover -> contents -> stat spread -> collage chapter -> pull quote -> analytical text band
  hero:
    visualPriority: cover-title + collage
    formula: electric cobalt field + giant stacked title + surreal floating cutout orbit + warped pattern corners + tiny subtitle
    ctaCount: 0-1 dominant
  components:
    navigation: chapter/page index or compact editorial header
    cards: report modules, stat blocks, quote panels; avoid app-like cards
    buttons: small flat chapter controls
    forms: rare; use plain clean controls if needed
    badges: chapter numbers and toxic-yellow list bars
  media:
    photography: cutout objects, portraits, product/culture imagery
    illustration: surreal collage layers, warped patterns, sticker arrows, floating objects
    icons: minimal except for collage-specific symbolic objects
    texture:
    - subtle paper/grain
    - selective halftone
    textureStrength: 2-8%
  surfaces:
    borders: hard crop edges, 1px rules inside report modules
    radius: 0-8px
    shadows: rare; cutouts may use subtle separation shadow
  motion:
  - collage object drift on hero
  - chapter mask reveal
  - stat count-in
  - contents bar slide
  responsive:
  - turn collage orbit into fewer large objects
  - stack report spreads
  - keep title bold but readable
  - turn contents into vertical list
  - reduce decorative cutouts around long text
  accessibilityRisks:
  - visual overload
  - small long-form text
  - decorations masking chart meaning
  - motion sickness from too much drift
  signatureElements:
  - electric cobalt hero
  - toxic yellow-green title accent
  - surreal cutout orbit
  - warped black-white patterns
  - black report interiors
  - bold contents bars and stat modules
  recognitionHeuristics:
  - The cover may feel like a poster explosion, but interior pages must feel like a real publication.
  - At least one chapter system or contents structure should be visible.
  - Collage objects should relate to the report theme rather than be random internet debris.
  scores:
    playful: 8
    nostalgic: 6
    technical: 4
    organic: 2
    editorial: 10
    pixel: 3
    illustrative: 9
    texture: 7
    bold: 10
    commerce: 3
    density: 7
  implementationComplexity: high
  compatibleSecondaryStyles:
  - glitch-fashion
  - neo-future-aigc
  - y2k-portfolio-collage
  incompatibleSecondaryStyles:
  - organic-garden-commerce at high strength
  - cartoon-campaign at high strength
  - quiet corporate minimalism
  fallbackBehavior: If bespoke collage assets are limited, use fewer but larger cutout objects, warped vector patterns, strong
    chapter typography, and stat/quote modules instead of filling space with generic stock graphics.
  failureModes:
  - making every interior page as chaotic as the cover
  - random cutout objects with no theme
  - tiny unreadable report body copy
  - turning contents into generic cards
- id: y2k-portfolio-collage
  referenceOrder: 14
  name: Y2K Portfolio Collage
  aliases:
  - Gen-Z visual portfolio
  - sticker portfolio
  - anime Y2K collage
  - creative catalog web
  referenceVisual: Black gridded portfolio with hot-pink notebook frame, red checkerboard, cyan/lime sticker accents, anime/cartoon
    imagery, giant bilingual typography, repeated Visual Design microtext, and a numbered project catalog.
  summary: A youthful maximal portfolio language combining Y2K stickers, black technical grids, hot-pink framing, checkerboards,
    anime/cartoon imagery, bilingual display type, and numbered project catalog modules.
  description: A dense but organized showcase system for visual designers and youth culture. It behaves like a scrapbook laid
    over a strict black grid, with stickers and project thumbnails creating energy while numbering and catalog structure keep
    navigation understandable.
  designPhilosophy: Let the portfolio look collected, not templated. Use sticker culture and loud display typography as identity,
    but keep projects indexed, numbered, and aligned to an underlying grid.
  brandPersonality:
  - youthful
  - internet-native
  - maximal
  - graphic
  - playful
  - self-expressive
  - trend-aware
  emotionalTone:
  - loud
  - fun
  - nostalgic
  - kinetic
  - rebellious
  - cute
  bestFor:
  - visual design portfolios
  - student portfolios
  - creative agencies
  - streetwear campaigns
  - anime/pop culture projects
  - social content studios
  - youth brands
  avoidFor:
  - banking
  - law firms
  - enterprise admin
  - healthcare portals
  - quiet luxury
  audience:
  - Gen-Z creatives
  - design recruiters
  - visual culture audiences
  - students
  - social-media-native users
  selectionProfile:
    pickWhen:
    - the portfolio has diverse visual work
    - the creator wants a loud identity
    - sticker/anime/pop assets are appropriate
    - a catalog or project index is useful
    rejectWhen:
    - the work itself is already extremely dense and needs neutral framing
    - formal trust is essential
    - accessibility sensitivity prohibits tiny decorative text
    contentDensityFit:
      level: medium-high
      score: 7
      note: Can show many projects because the underlying grid and numbering system organize visual noise.
    mediaAssetFit:
      score: 10
      ideal:
      - project thumbnails
      - original sticker assets
      - illustrations/anime-style originals
      - graphic patterns
      minimum: Needs at least 4-6 strong project images or graphic assets.
    interactionFit:
      score: 6
      note: Good for browsing portfolios; keep project navigation explicit.
    accessibilityFit:
      score: 5
      note: High risk from tiny repeated microtext and busy backgrounds; essential labels must be enlarged and simplified.
    implementationBudget: medium-high
  palette:
    background: '#111111'
    surface: '#F6F0E7'
    text: '#FFFFFF'
    muted_text: '#A9A9A9'
    secondary: '#FF42B5'
    accent: '#5BE6DD'
    dark: '#050505'
    line: '#2E2E2E'
  typography:
    display:
      direction: bold grotesk plus expressive bilingual display forms and sticker labels
      weight: 700-950
      lineHeight: 0.78-0.95
      use: portfolio title, category labels, project numbering
    body:
      direction: clean neutral sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: micro grotesk/mono
      use: repeating bands, captions, metadata
    familyLimit: 3
  layout:
    grid: visible dark grid + modular catalog columns
    alignment: dense asymmetric collage over disciplined grid
    whitespace: low-moderate
    overlap: high in hero; controlled in catalog
    sectionRhythm: maximal cover -> catalog index -> project thumbnails -> loud category breaks -> calmer case-study detail
  hero:
    visualPriority: type + notebook/sticker object
    formula: black grid + hot-pink oversized frame/notebook + giant portfolio title + sticker micro-labels + one main illustration/photo
    ctaCount: 0-1 dominant
  components:
    navigation: compact graphic labels or top band
    cards: project thumbnails with colored corner markers and large numbering
    buttons: graphic sticker-like controls; clear text labels
    forms: keep plain and low-density
    badges: starbursts, labels, checkers, speech bubbles, category stickers
  media:
    photography: project screenshots and visual work; often framed as stickers or pages
    illustration: anime/cartoon originals, browser frames, stars/arrows, pixel decorations
    icons: small playful custom marks; consistent family
    texture:
    - grid
    - subtle grain
    textureStrength: grid 8-14%; grain 1-3%
  surfaces:
    borders: thin neon/pink markers or black sticker outlines
    radius: 0-12px
    shadows: hard sticker shadow selectively
  motion:
  - sticker pop-in
  - catalog card stagger
  - microtext marquee
  - page/cover peel reveal
  responsive:
  - reduce repeated microtext
  - stack catalog cards
  - keep large project numbers
  - simplify hero stickers to 3-5
  - preserve black grid identity
  accessibilityRisks:
  - tiny essential text
  - overcrowding
  - animated marquee distraction
  - decorations hiding project titles
  signatureElements:
  - black grid background
  - hot-pink oversized frame
  - checkerboard accents
  - giant portfolio/bilingual type
  - sticker/anime imagery
  - numbered project catalog
  recognitionHeuristics:
  - At thumbnail size it should look like a designer scrapbook pinned to a grid.
  - Project indexing must remain obvious despite stickers.
  - The visual noise should decrease when entering detailed project content.
  scores:
    playful: 10
    nostalgic: 9
    technical: 4
    organic: 1
    editorial: 9
    pixel: 6
    illustrative: 9
    texture: 7
    bold: 10
    commerce: 3
    density: 7
  implementationComplexity: medium-high
  compatibleSecondaryStyles:
  - neo-future-aigc
  - glitch-fashion
  - retro-browser-type-specimen
  incompatibleSecondaryStyles:
  - organic-garden-commerce at high strength
  - formal luxury
  - terminal-community at high strength
  fallbackBehavior: If custom sticker/anime assets are limited, rely on a black grid, strong hot-pink frames, numbered catalog
    structure, checkerboard accents, and original geometric stickers rather than copying existing characters.
  failureModes:
  - using copyrighted anime characters
  - making every section a sticker pile
  - tiny unreadable microtext
  - losing project hierarchy
- id: retro-marketplace-pop
  referenceOrder: 15
  name: Retro Marketplace Pop
  aliases:
  - supermarket pop
  - retro commercial vector
  - Y2K retail poster
  - marketplace maximalism
  referenceVisual: Hyper-saturated event poster filled with oversized detergent-like bottles, orange slices, retail labels,
    retro supermarket logos, red/yellow/blue packaging graphics, thick black outlines, and layered marketplace badges.
  summary: A hyper-commercial pop system inspired by retro supermarket packaging, primary-color vector illustration, huge
    product objects, sticker labels, and Y2K retail typography.
  description: A retail and event art direction that intentionally feels like an aisle of loud packaging scaled into a poster.
    Large vector objects and retro logos create spectacle while central information is locked into a clear badge-like message
    block.
  designPhilosophy: Use the visual language of mass-market packaging as high-energy art direction. The chaos must orbit a
    central message, not compete with it. Every object should feel like part of the same illustrated retail universe.
  brandPersonality:
  - loud
  - commercial
  - fun
  - urban
  - pop
  - energetic
  - collectible
  emotionalTone:
  - excited
  - nostalgic
  - saturated
  - fast
  - festive
  bestFor:
  - retail events
  - marketplace campaigns
  - pop-up stores
  - streetwear drops
  - youth festivals
  - shopping promotions
  - brand activations
  avoidFor:
  - enterprise software
  - professional services
  - healthcare
  - calm wellness
  - documentation
  audience:
  - younger shoppers
  - festival audiences
  - streetwear communities
  - pop-culture consumers
  selectionProfile:
    pickWhen:
    - the goal is high-impact promotion
    - product/retail objects can become hero illustrations
    - event details are concise
    - brand embraces primary-color maximalism
    rejectWhen:
    - content is long-form or utility-heavy
    - audience needs calm trust
    - the brand palette must remain muted
    contentDensityFit:
      level: low-medium
      score: 4
      note: Visually dense but informationally sparse. Keep the actual message short.
    mediaAssetFit:
      score: 9
      ideal:
      - original vector product objects
      - retro label graphics
      - event marks
      - bold type treatments
      minimum: Can be built with original geometric retail objects and type, but needs a strong illustration system.
    interactionFit:
      score: 3
      note: Best as campaign/landing/poster experience; functional flows should move to calmer pages.
    accessibilityFit:
      score: 6
      note: Keep event details in a high-contrast central block and do not rely on decorative logos for information.
    implementationBudget: high
  palette:
    background: '#1677E8'
    surface: '#F3E6D5'
    text: '#0B0B0B'
    muted_text: '#484848'
    secondary: '#FF3344'
    accent: '#FFF200'
    dark: '#111111'
    line: '#111111'
  typography:
    display:
      direction: 'retro supermarket display mix: italic script, chunky serif, condensed block, outlined label type'
      weight: 700-950
      lineHeight: 0.75-0.95
      use: event title and brand-like labels only
    body:
      direction: compact clean sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: condensed sans
      use: dates, venue, small callouts
    familyLimit: 3
  layout:
    grid: central badge/info anchor with radial oversized-object composition
    alignment: controlled radial/maximal
    whitespace: low
    overlap: very high around edge objects; central message protected
    sectionRhythm: single poster-like hero or repeated campaign panels rather than conventional sections
  hero:
    visualPriority: central event lockup
    formula: blue/cream field + giant illustrated retail objects entering from edges + central yellow/blue/red title badge
      + concise event details
    ctaCount: 0-1 dominant
  components:
    navigation: minimal or absent on campaign splash; if website, tiny top utility bar
    cards: avoid in hero; use flat campaign panels below
    buttons: bold rectangular/label CTA with black outline
    forms: not in main poster field; use calm dedicated panel
    badges: starbursts, retail ovals, price-label shapes, arrows
  media:
    photography: rare; vector objects preferred
    illustration: flat vector commercial packaging, thick outlines, simple shaded planes
    icons: retail symbols integrated into label system
    texture:
    - none or subtle print grain
    textureStrength: 0-3%
  surfaces:
    borders: 2-4px dark outlines on objects and badges
    radius: object-specific, not a UI radius system
    shadows: hard graphic shadows or flat extrusion
  motion:
  - object parallax from edges
  - label snap-in
  - small sticker bounce
  responsive:
  - reduce edge objects
  - protect central title and dates
  - turn some objects into background crops
  - move event details into dedicated mobile panel
  accessibilityRisks:
  - essential details lost in clutter
  - color overload
  - copyright-like fake packaging
  - motion overload
  signatureElements:
  - primary blue/red/yellow palette
  - oversized retail product objects
  - thick black vector outlines
  - retro supermarket lettering
  - central event badge
  - edge-to-edge maximal composition
  recognitionHeuristics:
  - The actual event information must remain readable in under five seconds.
  - Objects should crop aggressively at edges.
  - The page should feel like an original fictional supermarket campaign, not copied packaging.
  scores:
    playful: 10
    nostalgic: 9
    technical: 1
    organic: 1
    editorial: 8
    pixel: 1
    illustrative: 10
    texture: 3
    bold: 10
    commerce: 10
    density: 4
  implementationComplexity: high
  compatibleSecondaryStyles:
  - playful-risograph
  - retro-cartoon-type-specimen
  - y2k-portfolio-collage
  incompatibleSecondaryStyles:
  - dreamy-indie-software at high strength
  - organic-garden-commerce at high strength
  - terminal-community
  fallbackBehavior: If many custom objects cannot be produced, use 4-6 large original retail silhouettes, one strong central
    lockup, primary colors, and a retro label system rather than filling space with stock product PNGs.
  failureModes:
  - copying real packaging too closely
  - central information unreadable
  - every object same size
  - generic vector clipart
- id: neo-brutal-education
  referenceOrder: 16
  name: Neo-Brutal Education
  aliases:
  - playful edtech brutalism
  - sticker education
  - cartoon learning landing page
  - bold educational poster
  referenceVisual: Charcoal learning website with huge condensed white/yellow/blue headlines, colorful program cards, cartoon/3D
    pencils, planets, books and rockets, sticker badges, hard outlines, and a white gridded closing section.
  summary: A youth-focused education system combining dark neo-brutal foundations, giant condensed campaign type, colorful
    sticker badges, playful 3D/cartoon educational objects, and simple high-contrast program modules.
  description: An educational marketing language that feels energetic and approachable without sacrificing program clarity.
    Big type creates momentum; bright object illustrations make concepts memorable; program and class information stays in
    obvious structured blocks.
  designPhilosophy: Make learning feel like a campaign, not an LMS dashboard. Use poster-scale type and collectible-object
    illustration around a conventional information core.
  brandPersonality:
  - energetic
  - encouraging
  - youthful
  - clear
  - playful
  - ambitious
  - modern
  emotionalTone:
  - motivating
  - bright
  - confident
  - friendly
  - active
  bestFor:
  - education programs
  - edtech landing pages
  - courses
  - scholarship campaigns
  - student services
  - youth workshops
  - learning communities
  avoidFor:
  - serious finance
  - luxury hospitality
  - legal services
  - medical portals
  - dense research databases
  audience:
  - students
  - parents
  - teachers
  - young learners
  - course shoppers
  selectionProfile:
    pickWhen:
    - the site markets programs or classes
    - youthful energy is desirable
    - custom educational objects can be illustrated
    - clear CTAs and benefit sections are important
    rejectWhen:
    - academic publication density dominates
    - formal institutional tone must remain conservative
    - illustration budget is extremely low
    contentDensityFit:
      level: medium
      score: 6
      note: Supports multiple programs and features if they are grouped into bold sections.
    mediaAssetFit:
      score: 8
      ideal:
      - original educational object illustrations
      - course mockups
      - friendly avatars
      minimum: Can use a smaller coherent set of custom object illustrations reused across sections.
    interactionFit:
      score: 8
      note: Compatible with course navigation and light enrollment flows; actual learning dashboards should use restrained
        strength.
    accessibilityFit:
      score: 9
      note: High contrast and large typography are naturally accessible if colorful cards maintain text contrast.
    implementationBudget: medium-high
  palette:
    background: '#20211F'
    surface: '#FFF8E8'
    text: '#FFFFFF'
    muted_text: '#C8C7C2'
    secondary: '#6672FF'
    accent: '#FFD852'
    dark: '#151515'
    line: '#3A3A38'
  typography:
    display:
      direction: very tall condensed uppercase campaign display
      weight: 800-950
      lineHeight: 0.76-0.9
      use: hero, section headlines, sticker callouts
    body:
      direction: friendly geometric/grotesk sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: compact sans
      use: nav, program labels, tabs, metadata
    familyLimit: 2
  layout:
    grid: 12-column dark campaign grid with large rounded/rectangular content stages
    alignment: bold left-aligned type with floating illustration anchors
    whitespace: medium
    overlap: illustrations may overlap section edges, not control groups
    sectionRhythm: dark poster hero -> program cards -> giant statement -> colorful tabbed feature -> white grid closing billboard
  hero:
    visualPriority: type-first with object orbit
    formula: charcoal field + giant condensed multicolor headline + 3-5 educational object stickers around it + tiny nav
    ctaCount: 0-1 dominant
  components:
    navigation: minimal thin top bar
    cards: 3 large colorful program panels with distinct hues and one hero object each
    buttons: high-contrast block/sticker buttons with dark border
    forms: simple rectangular inputs on calm surface
    badges: tilted oval stickers, stamps, arrows
  media:
    photography: optional; illustrations preferred
    illustration: bright 3D/cartoon objects with strong contour and simple shading
    icons: bold illustrated icons; utility icons remain simple
    texture:
    - subtle grid
    - very light paper/noise
    textureStrength: 1-8%
  surfaces:
    borders: 2-4px dark outlines for sticker/UI elements
    radius: 12-24px on program cards; hard poster shapes elsewhere
    shadows: hard offset or subtle object shadow
  motion:
  - object float
  - sticker pop
  - card tab slide
  - headline mask reveal
  responsive:
  - reduce hero object count
  - stack program cards
  - preserve condensed headline scale
  - convert tabs to scrollable/stacked controls
  - simplify closing grid
  accessibilityRisks:
  - too many decorative objects
  - multicolor headline contrast
  - illustrations entering focus order
  - overly playful tone for serious content
  signatureElements:
  - charcoal base
  - giant condensed white/yellow/blue type
  - colorful education object illustrations
  - sticker badges
  - bright program cards
  - white grid closing section
  recognitionHeuristics:
  - The page should feel like a school campaign poster, not a childish worksheet.
  - Program cards must remain scannable.
  - One illustration system should cover all subjects.
  scores:
    playful: 9
    nostalgic: 4
    technical: 3
    organic: 2
    editorial: 8
    pixel: 1
    illustrative: 10
    texture: 4
    bold: 10
    commerce: 7
    density: 6
  implementationComplexity: medium-high
  compatibleSecondaryStyles:
  - genz-influencer-editorial
  - cartoon-campaign
  - retro-cartoon-type-specimen
  incompatibleSecondaryStyles:
  - glitch-fashion at high strength
  - formal serif luxury
  - terminal-community at high strength
  fallbackBehavior: If 3D object art is limited, use flat thick-outline educational icons with the same palette, condensed
    type, sticker badges, and strong section blocks.
  failureModes:
  - generic school template with colorful cards
  - too many unrelated illustration styles
  - buttons hidden among stickers
  - every section using the exact same three-card layout
- id: cosmic-event-story
  referenceOrder: 17
  name: Cosmic Event Story
  aliases:
  - space event microsite
  - gamified celebration
  - K-event storytelling
  - cosmic community journey
  referenceVisual: Long purple/navy event page with scalloped purple canopy, tiny astronaut and planets, neon turquoise/pink/yellow
    objects, floating story planets, rainbow wave divider, black celebration section, tilted message cards, white cloud transition,
    and reward/prize modules.
  summary: A gamified event microsite language that turns scrolling into a journey through a playful illustrated universe
    using cosmic scenes, scallops, waves, clouds, cards, and reward moments.
  description: 'A long-form campaign system where each section feels like a new scene in one continuous illustrated world.
    Section boundaries are narrative devices: scallops become sky, rainbow waves become stages, clouds reveal rewards, and
    cards behave like collectible memories.'
  designPhilosophy: Design the scroll as a story map. Instead of stacking rectangles, let each section transform into the
    next through a shared illustrated world and clear milestone sequence.
  brandPersonality:
  - celebratory
  - community-driven
  - playful
  - optimistic
  - gamified
  - youthful
  - story-rich
  emotionalTone:
  - festive
  - cosmic
  - cute
  - curious
  - rewarding
  - communal
  bestFor:
  - event microsites
  - anniversary campaigns
  - community celebrations
  - fandom pages
  - onboarding journeys
  - year-in-review experiences
  - reward campaigns
  avoidFor:
  - banking
  - admin dashboards
  - documentation
  - checkout-heavy shops
  - high-frequency task tools
  audience:
  - community members
  - fans
  - younger event audiences
  - campaign participants
  - students
  selectionProfile:
    pickWhen:
    - the page has a clear sequence or milestones
    - celebration/rewards matter
    - illustrated scene transitions can be produced
    - scroll storytelling is desirable
    rejectWhen:
    - the experience is primarily a utility app
    - content must be scanned nonlinearly
    - custom illustration/motion budget is unavailable
    contentDensityFit:
      level: low-medium
      score: 4
      note: Best with short narrative blocks, milestones, cards, and reward modules rather than dense prose.
    mediaAssetFit:
      score: 9
      ideal:
      - custom planets/astronauts
      - small mascots
      - reward/product cutouts
      - card artwork
      minimum: Needs a coherent cosmic illustration kit; can be simple flat vectors.
    interactionFit:
      score: 6
      note: Great for scrolling, reveals, voting/reward moments; complex tools should live outside the scenic shell.
    accessibilityFit:
      score: 7
      note: Ensure cards and buttons are normal controls and section transitions do not create motion dependence.
    implementationBudget: high
  palette:
    background: '#1C184D'
    surface: '#5F37D3'
    text: '#FFFFFF'
    muted_text: '#BDB7E7'
    secondary: '#43E6C5'
    accent: '#F4DF42'
    dark: '#050505'
    line: '#8A72E7'
  typography:
    display:
      direction: rounded bold sans with playful Korean/Latin-friendly weights
      weight: 700-900
      lineHeight: 0.9-1.05
      use: milestone titles and celebration statements
    body:
      direction: clean rounded sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: compact rounded sans
      use: tabs, labels, reward metadata
    familyLimit: 2
  layout:
    grid: centered narrative column inside full-width illustrated scenes
    alignment: mostly centered with floating orbiting objects
    whitespace: high between milestones
    overlap: illustrative overlaps at section boundaries
    sectionRhythm: purple canopy -> space exploration -> rainbow stage -> black celebration -> cloud reveal -> white reward
      section
  hero:
    visualPriority: scene-first
    formula: deep space field + one central milestone planet + small orbiting illustrations + compact tab/label + short title
    ctaCount: 0-1 dominant
  components:
    navigation: compact sticky or top pill tabs only if needed
    cards: tilted collectible message/story cards and reward modules
    buttons: bold rounded black/white or purple controls
    forms: clean light panels separated from illustrated backgrounds
    badges: milestone pills, numbered markers, event tags
  media:
    photography: rare; use product/reward cutouts if needed
    illustration: flat colorful planets, astronauts, stars, clouds, monsters, disco-ball/wave motifs
    icons: small cosmic symbols from one family
    texture:
    - star speckles
    - soft glow only on decorative stars
    textureStrength: 1-5%
  surfaces:
    borders: minimal; use scene shapes instead of boxes
    radius: cards 12-18px; section boundaries custom scallop/wave/cloud
    shadows: small card shadow; otherwise flat
  motion:
  - orbit drift
  - planet bob
  - card fan-in
  - wave/cloud reveal
  - star twinkle with low frequency
  responsive:
  - reduce orbiting object count
  - keep journey order obvious
  - stack card fans into horizontal/vertical carousels
  - simplify wave/cloud geometry
  - disable parallax under reduced motion
  accessibilityRisks:
  - excessive animation
  - tiny labels in space
  - low contrast neon on purple
  - section boundaries masking content
  signatureElements:
  - deep purple/navy cosmic field
  - floating illustrated planets
  - scalloped canopy
  - rainbow wave divider
  - tilted message cards
  - white cloud transition into rewards
  recognitionHeuristics:
  - The page must feel like one continuous world rather than disconnected colorful sections.
  - At least two section transitions should be narrative shapes rather than straight lines.
  - Rewards and CTAs stay conventional and obvious.
  scores:
    playful: 10
    nostalgic: 4
    technical: 2
    organic: 3
    editorial: 7
    pixel: 2
    illustrative: 10
    texture: 4
    bold: 8
    commerce: 5
    density: 4
  implementationComplexity: high
  compatibleSecondaryStyles:
  - dreamy-indie-software
  - neo-brutal-education
  - cartoon-campaign
  incompatibleSecondaryStyles:
  - glitch-fashion at high strength
  - terminal-community at high strength
  - formal corporate minimalism
  fallbackBehavior: If a full illustration pipeline is unavailable, create a small original kit of 6-10 cosmic SVGs and focus
    effort on scallop/wave/cloud section transitions plus card choreography.
  failureModes:
  - stacking ordinary rectangles between illustrations
  - constant distracting parallax
  - too many tiny cosmic doodles
  - rewards hidden in scenery
- id: genz-influencer-editorial
  referenceOrder: 18
  name: Gen-Z Influencer Editorial
  aliases:
  - creator education editorial
  - blue-lime social poster
  - flat character editorial
  - pixel-number campaign
  referenceVisual: Saturated cobalt poster with acid-lime framed character scenes, giant pale-lime/white Influencer and Social
    Media typography, pixel-outline numerals 01-04, flat black-outlined cartoon characters, and compact explanatory copy.
  summary: A clean youth editorial system using cobalt and acid-lime color blocking, flat character illustration, huge modern
    sans typography, pixel-number markers, and modular educational scenes.
  description: A highly legible bridge between editorial poster design and youth-facing education. Flat cartoon scenes create
    warmth, pixel numerals add retro internet personality, and giant clean typography keeps the page modern and direct.
  designPhilosophy: Use a strict two-color poster foundation and let characters explain the topic. Retro pixel details should
    behave as indexing devices, not turn the whole site into a game.
  brandPersonality:
  - young
  - social
  - aspirational
  - clear
  - creative
  - digital-native
  - friendly
  emotionalTone:
  - energetic
  - direct
  - optimistic
  - approachable
  - modern-retro
  bestFor:
  - creator economy courses
  - social-media education
  - career programs
  - youth workshops
  - marketing bootcamps
  - personal-branding products
  - student campaigns
  avoidFor:
  - luxury finance
  - legal portals
  - medical dashboards
  - dark cybersecurity products
  audience:
  - students
  - young creators
  - aspiring influencers
  - social media learners
  - Gen-Z consumers
  selectionProfile:
    pickWhen:
    - the subject is creator/social/skills oriented
    - flat character art is available
    - big typography can carry the hierarchy
    - content breaks into 3-6 skill modules
    rejectWhen:
    - brand must feel formal or premium-luxury
    - content is data-heavy
    - character illustration would feel inappropriate
    contentDensityFit:
      level: medium
      score: 6
      note: Supports several instructional modules as long as body copy stays brief.
    mediaAssetFit:
      score: 8
      ideal:
      - original flat character scenes
      - simple object illustrations
      - pixel numeral assets
      minimum: Can work with 3-4 original flat character scenes and strong typography.
    interactionFit:
      score: 7
      note: Good for course and marketing flows; keep enrollment controls conventional.
    accessibilityFit:
      score: 9
      note: Large type and strong color contrast are excellent; body copy needs enough size against cobalt.
    implementationBudget: medium
  palette:
    background: '#2059C8'
    surface: '#C6FF69'
    text: '#F6F7F1'
    muted_text: '#D5DDF3'
    secondary: '#BFFF5B'
    accent: '#F0F3E6'
    dark: '#101313'
    line: '#F6F7F1'
  typography:
    display:
      direction: very large clean grotesk/sans with tight spacing
      weight: 600-850
      lineHeight: 0.82-0.98
      use: hero and module labels
    body:
      direction: clean grotesk
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: pixel display for numerals only
      use: 01-04 indexing and tiny section markers
    familyLimit: 2
  layout:
    grid: modular poster grid with large lime image frames and offset typography
    alignment: strong left/right alternation
    whitespace: medium
    overlap: central hero character may overlap modules
    sectionRhythm: title metadata -> framed skill scene -> giant subject word -> alternate scene -> large central character
  hero:
    visualPriority: type + character
    formula: cobalt field + giant pale-lime title + one large flat character + lime framed side scenes + pixel numeral index
    ctaCount: 0-1 dominant
  components:
    navigation: minimal top metadata row
    cards: avoid generic cards; use lime rectangular scene frames
    buttons: simple high-contrast rectangular or pill CTA
    forms: plain white/lime controls on solid cobalt or white
    badges: pixel numerals and compact labels
  media:
    photography: rare
    illustration: flat vector/webtoon-like characters with black outlines and limited shading
    icons: pixel numerals + simple flat utility icons
    texture:
    - none or faint print grain
    textureStrength: 0-2%
  surfaces:
    borders: 1-3px dark/white frame lines
    radius: 0-6px mostly
    shadows: none
  motion:
  - character/scene slide-in
  - pixel number step reveal
  - headline wipe
  responsive:
  - stack scene frames
  - keep one large character per viewport
  - preserve pixel numbers at readable size
  - break giant phrases intentionally
  - avoid shrinking body copy
  accessibilityRisks:
  - oversized text collisions
  - pixel numerals interpreted as controls
  - too-small explanatory copy
  - character art becoming culturally narrow
  signatureElements:
  - saturated cobalt field
  - acid-lime rectangular frames
  - huge pale-lime/white sans type
  - pixel-outline 01-04 numerals
  - flat black-outline characters
  - modular skill scenes
  recognitionHeuristics:
  - The page should read like a social-media course poster, not a game menu.
  - Pixel styling stays concentrated in numbering.
  - Character scenes and giant type share equal responsibility for hierarchy.
  scores:
    playful: 8
    nostalgic: 6
    technical: 3
    organic: 2
    editorial: 9
    pixel: 6
    illustrative: 9
    texture: 2
    bold: 9
    commerce: 6
    density: 6
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - neo-brutal-education
  - pixel-humanist-agency
  - retro-cartoon-type-specimen
  incompatibleSecondaryStyles:
  - terminal-community at high strength
  - glitch-fashion at maximal strength
  - organic-garden-commerce at high strength
  fallbackBehavior: Without extensive character art, use fewer original character scenes, retain cobalt/lime color blocking,
    giant sans type, and pixel numeral indexing.
  failureModes:
  - turning into generic school cards
  - pixelating all typography
  - using stock corporate illustrations
  - making every module identical
- id: retro-cartoon-type-specimen
  referenceOrder: 19
  name: Retro Cartoon Type Specimen
  aliases:
  - Nisshin-style specimen
  - 70s cartoon type
  - mascot type showcase
  - checkerboard retro branding
  referenceVisual: Periwinkle/purple type specimen with huge cream dimensional NISSHIN lettering, stacked red/orange/teal
    extrusion, cartoon sun/flower/hand mascots, white clouds, pink checkerboard floor, browser-window panels, badges, sparkles,
    and multilingual samples.
  summary: A retro cartoon branding system that combines giant dimensional display typography, checkerboards, cloud-and-mascot
    illustration, stacked color shadows, browser-window specimen modules, and 70s/90s cheerful graphics.
  description: A highly expressive type-led system where letterforms, mascots, and repeated specimen panels form a coherent
    visual universe. It feels like vintage cereal advertising, streetwear graphics, and a modern type foundry page at once.
  designPhilosophy: Treat typography as a character. The font demonstration, mascot system, and graphic environment should
    reinforce each other. Repetition is welcome when it demonstrates variation, not when it creates generic cards.
  brandPersonality:
  - cheerful
  - retro
  - friendly
  - graphic
  - collectible
  - mascot-led
  - bold
  emotionalTone:
  - sunny
  - nostalgic
  - fun
  - optimistic
  - bouncy
  bestFor:
  - type foundries
  - font launches
  - mascot brands
  - streetwear
  - creative studios
  - youth lifestyle brands
  - merch campaigns
  avoidFor:
  - serious enterprise
  - banking
  - medical portals
  - legal services
  - dense productivity tools
  audience:
  - designers
  - typography fans
  - streetwear audiences
  - younger creatives
  - brand collectors
  selectionProfile:
    pickWhen:
    - typography itself is a product or central identity
    - mascots can be created
    - retro 70s/90s tone fits
    - repeated specimen modules are useful
    rejectWhen:
    - the interface is utility-dense
    - formal trust dominates
    - custom display type/mascots are unavailable
    contentDensityFit:
      level: medium
      score: 5
      note: Can carry many specimen examples because each module is visual; long prose should stay minimal.
    mediaAssetFit:
      score: 9
      ideal:
      - custom display font
      - original cartoon mascots
      - checkerboard/cloud vector kit
      minimum: Needs either a distinctive display face or a strong original mascot system; ideally both.
    interactionFit:
      score: 5
      note: Best for showcasing, browsing, downloading, or light commerce.
    accessibilityFit:
      score: 7
      note: Specimen text can be decorative, but purchase/download controls and descriptions must use clean text.
    implementationBudget: high
  palette:
    background: '#6862D3'
    surface: '#F7F0DE'
    text: '#151515'
    muted_text: '#5A557D'
    secondary: '#F1B8C6'
    accent: '#F3C62A'
    dark: '#1B1B1B'
    line: '#1B1B1B'
  typography:
    display:
      direction: massive retro chunky display with layered 3D/extruded color shadows
      weight: 800-950
      lineHeight: 0.75-0.9
      use: hero specimen, slogans, alphabet/weight demonstrations
    body:
      direction: small clean grotesk
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: compact grotesk/mono
      use: font labels, weight names, specimen metadata
    familyLimit: 3
  layout:
    grid: poster/specimen grid with repeated panels and checkerboard stage
    alignment: mostly centered hero with modular lower grid
    whitespace: medium
    overlap: mascots and clouds may overlap typography/stage
    sectionRhythm: giant type hero -> weight/style list -> mascot slogans -> browser specimen windows -> multilingual sample
      -> thank-you panel
  hero:
    visualPriority: type-first
    formula: periwinkle field + giant cream extruded word + clouds + 2-3 mascots + tiny specimen metadata + checkerboard floor
    ctaCount: 0-1 dominant
  components:
    navigation: tiny brand/specimen labels only
    cards: browser-window specimen modules and poster panels
    buttons: small outlined download/purchase labels
    forms: plain, optional font tester controls in calm strip
    badges: speech bubbles, free-badge circles, star/sparkle stickers
  media:
    photography: none required
    illustration: thick-outline cartoon mascots with flat color and minimal texture
    icons: cartoon marks and small utility glyphs
    texture:
    - subtle print grain
    textureStrength: 1-4%
  surfaces:
    borders: 2-3px dark cartoon outlines
    radius: 12-24px on window/browser modules
    shadows: stacked colored extrusion on type; hard shadows on stickers
  motion:
  - mascot bob
  - type extrusion reveal
  - browser window stack
  - sparkle pop
  responsive:
  - reduce mascot count
  - keep 3D type readable
  - stack specimen panels
  - allow horizontal weight scroller only if labels remain clear
  - preserve checkerboard stage in simplified form
  accessibilityRisks:
  - font sample illegibility
  - too many mascots
  - color extrusion hurting word recognition
  - animations making specimen hard to inspect
  signatureElements:
  - periwinkle/purple field
  - giant cream extruded type
  - pink checkerboard floor
  - white cartoon clouds
  - friendly mascot trio
  - browser-window specimen panels
  recognitionHeuristics:
  - At thumbnail size the display word must dominate.
  - Mascots should share one drawing system.
  - The checkerboard is a stage, not a universal page background.
  scores:
    playful: 10
    nostalgic: 9
    technical: 2
    organic: 3
    editorial: 9
    pixel: 3
    illustrative: 10
    texture: 5
    bold: 10
    commerce: 6
    density: 5
  implementationComplexity: high
  compatibleSecondaryStyles:
  - retro-browser-type-specimen
  - playful-risograph
  - retro-marketplace-pop
  incompatibleSecondaryStyles:
  - terminal-community at high strength
  - glitch-fashion at high strength
  - quiet luxury
  fallbackBehavior: If the exact font/mascot art is unavailable, use an original chunky display with CSS/SVG stacked shadows
    plus a small original mascot set and checkerboard/cloud stage.
  failureModes:
  - copying mascot poses
  - using a generic bubble font without dimensional treatment
  - checkerboard everywhere
  - too many type effects on body text
- id: retro-browser-type-specimen
  referenceOrder: 20
  name: Retro Browser Type Specimen
  aliases:
  - Nyonyo-style browser type
  - toy browser UI
  - modular type showcase
  - cartoon neo-brutal specimen
  referenceVisual: Saturated green/yellow/sky-blue/pink type specimen made of rounded browser-like modules with thick black
    outlines, quirky distorted letters, cloud mascots, small X/star marks, checkerboard floor, browser chrome, and giant OPEN/SESAME
    words.
  summary: A modular retro-browser specimen system using saturated green, yellow, blue and pink, thick black outlines, toy-like
    browser windows, distorted display type, cloud mascots, and checkerboard staging.
  description: A playful interface language that borrows early browser chrome and cartoon neo-brutalism to present type, products,
    or creative content in modular blocks. Unlike generic card UI, each panel behaves like a toy window with a distinct purpose
    and graphic identity.
  designPhilosophy: Use browser/window geometry as a visual toy, not as skeuomorphic simulation. Modules should feel collectible
    and distinct, while typography remains the primary content.
  brandPersonality:
  - playful
  - graphic
  - internet-native
  - retro
  - bold
  - friendly
  - modular
  emotionalTone:
  - bright
  - fun
  - toy-like
  - nostalgic
  - optimistic
  bestFor:
  - typeface launches
  - creative portfolios
  - kids/youth brands
  - design studios
  - experimental landing pages
  - brand systems
  - playful product showcases
  avoidFor:
  - banking
  - healthcare
  - enterprise dashboards
  - luxury legal/professional services
  audience:
  - designers
  - creative students
  - younger audiences
  - typography fans
  - internet-culture communities
  selectionProfile:
    pickWhen:
    - modular content can be expressed as specimen windows
    - bold custom type is central
    - brand can use saturated flat colors
    - retro browser references fit
    rejectWhen:
    - content is mostly long prose
    - formal trust is essential
    - many complex form controls are needed
    contentDensityFit:
      level: medium
      score: 6
      note: The window system can organize many samples, but each panel should remain visually simple.
    mediaAssetFit:
      score: 7
      ideal:
      - custom type specimen text
      - original cloud/flower/globe mascots
      - browser-window SVG chrome
      minimum: Can be built primarily from typography, vector modules, and a few original mascots.
    interactionFit:
      score: 7
      note: Good for interactive font testers, showcases, and playful navigation if controls remain explicit.
    accessibilityFit:
      score: 8
      note: Strong flat contrast helps; distorted display letters must not carry long or critical instructions.
    implementationBudget: medium-high
  palette:
    background: '#0AA45E'
    surface: '#F5EEDB'
    text: '#111111'
    muted_text: '#4E4E43'
    secondary: '#4AA5D8'
    accent: '#FFE70B'
    dark: '#121212'
    line: '#121212'
  typography:
    display:
      direction: quirky distorted chunky display with irregular counters and widths
      weight: 700-950
      lineHeight: 0.78-0.95
      use: giant specimen words and short labels
    body:
      direction: clean condensed/grotesk sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: small mono/grotesk browser label
      use: window chrome, timestamps, metadata
    familyLimit: 3
  layout:
    grid: modular rounded-rectangle window grid with strong section bands
    alignment: tight but playful module composition
    whitespace: medium-low inside poster sections; clear gutters between modules
    overlap: small mascot/sticker overlap only
    sectionRhythm: greeting module grid -> yellow browser specimen -> checkerboard stage -> green stacked OPEN/SESAME windows
  hero:
    visualPriority: type-module-first
    formula: green field + stacked rounded windows containing giant distorted words + small cloud/flower/globe mascots + X-shaped
      sparkle marks
    ctaCount: 0-1 dominant
  components:
    navigation: browser-like compact tabs or simple label strip
    cards: rounded thick-outline toy windows with visible chrome; each card has unique content role
    buttons: thick-outline compact controls, optionally yellow/blue/pink
    forms: font tester may use simple browser input with clear label
    badges: X sparkles, burst count badges, tiny status pills
  media:
    photography: rare
    illustration: simple thick-outline cloud, globe, flower, sunglasses, symbol mascots
    icons: black-outline cartoon system
    texture:
    - optional faint paper grain
    - checkerboard stage
    textureStrength: 0-4%
  surfaces:
    borders: 2-4px black outlines
    radius: 14-28px on window modules
    shadows: hard small offset only
  motion:
  - window pop
  - tab slide
  - mascot bounce
  - letter swap for font tester
  responsive:
  - stack windows while preserving different sizes
  - keep checkerboard as short separator
  - reduce mascot count
  - preserve large specimen words
  - avoid shrinking browser chrome text below 12-14px
  accessibilityRisks:
  - everything looking like a generic rounded card grid
  - distorted type used for body copy
  - too many accent colors per window
  - window chrome too small
  signatureElements:
  - saturated green/yellow/blue/pink palette
  - thick black outlines
  - rounded browser-window modules
  - quirky distorted display letters
  - small cloud mascots
  - checkerboard stage
  recognitionHeuristics:
  - Modules must read as playful browser/toy windows, not generic SaaS cards.
  - At least one giant specimen word should dominate each major band.
  - A limited mascot vocabulary should repeat for cohesion.
  scores:
    playful: 10
    nostalgic: 9
    technical: 3
    organic: 2
    editorial: 8
    pixel: 4
    illustrative: 8
    texture: 4
    bold: 10
    commerce: 6
    density: 6
  implementationComplexity: medium-high
  compatibleSecondaryStyles:
  - retro-cartoon-type-specimen
  - y2k-portfolio-collage
  - pixel-humanist-agency
  incompatibleSecondaryStyles:
  - glitch-fashion at high strength
  - organic-garden-commerce at high strength
  - formal corporate minimalism
  fallbackBehavior: If custom mascot art is unavailable, retain the thick-outline browser modules, distorted display typography,
    checkerboard staging, X-shaped marks, and saturated palette using original simple SVG symbols.
  failureModes:
  - identical rounded cards
  - using six saturated colors in every module
  - fake browser chrome with unreadable labels
  - generic neo-brutalism with no type-specimen behavior
- id: summer-accessory-editorial
  referenceOrder: 21
  name: Summer Accessory Editorial
  aliases:
  - bag collage editorial
  - Y2K accessory guide
  - seasonal shopping lookbook
  - fashion-guide collage
  referenceVisual: Light gray field with a giant white shopping-bag silhouette, colorful flat accessory illustrations spilling
    from the opening, expressive black East-Asian headline typography, yellow sparkles, and tiny seasonal date labels.
  summary: A fashion/lifestyle editorial system where one oversized physical container becomes the page frame and colorful
    accessories form a controlled spill around bold typography.
  description: A seasonal lookbook language combining a giant-object frame, flat sticker-like accessory illustration, high-contrast
    editorial type, and large peripheral negative space.
  designPhilosophy: Use one physical object as the compositional architecture. Let colorful products cluster densely near
    the focal opening while gray, white, and black preserve editorial calm around the edges.
  brandPersonality:
  - fashion-aware
  - playful
  - seasonal
  - graphic
  - youthful
  - editorial
  emotionalTone:
  - bright
  - stylish
  - fresh
  - collectible
  - lighthearted
  bestFor:
  - fashion campaigns
  - accessory ecommerce
  - beauty launches
  - seasonal lookbooks
  - lifestyle brands
  - youth marketplaces
  avoidFor:
  - enterprise dashboards
  - developer documentation
  - banking
  - healthcare portals
  - dense productivity tools
  audience:
  - Gen-Z shoppers
  - fashion/lifestyle audiences
  - design-aware consumers
  - beauty/accessory buyers
  selectionProfile:
    pickWhen:
    - a seasonal product collection needs editorial personality
    - flat accessory/product art is available
    - one strong object metaphor can organize the hero
    - fashion or lifestyle storytelling matters
    rejectWhen:
    - dense workflows dominate
    - formal institutional trust is primary
    - the project has no meaningful products or objects to stage
    contentDensityFit:
      level: medium
      score: 5
      note: Works best with a dense focal cluster and low-density peripheral space.
    mediaAssetFit:
      score: 8
      ideal:
      - flat product/accessory illustrations
      - cutout product photography
      - original sticker symbols
      minimum: Needs at least 3-5 coherent product/accessory objects.
    interactionFit:
      score: 6
      note: Strong for browsing and campaign commerce; transactional controls should remain calm.
    accessibilityFit:
      score: 8
      note: High contrast works well if tiny metadata is non-critical.
    implementationBudget: medium
  palette:
    background: '#D2D2D2'
    surface: '#F8F8F5'
    text: '#080808'
    muted_text: '#555555'
    secondary: '#F3A5CB'
    accent: '#FFF267'
    dark: '#111111'
    line: '#111111'
  typography:
    display:
      direction: narrow expressive editorial display, optionally calligraphic or condensed
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean neutral grotesk sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: tiny editorial sans/mono for dates and season labels
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: 12-column editorial grid organized around one giant container silhouette
    alignment: asymmetric centered object with offset metadata
    whitespace: high outside the focal cluster
    overlap: controlled product spill and 2-7deg object rotations
    sectionRhythm: giant object frame -> accessory cluster -> typographic statement -> sparse product/story bands
  hero:
    visualPriority: object-frame-first
    formula: gray field + giant white bag/container + colorful accessory cluster + oversized black editorial title + tiny
      date labels
    ctaCount: 1
  components:
    navigation: quiet edge-aligned text or small tabs
    cards: avoid generic cards; use cutouts, annotated specimens, or magazine modules
    buttons: small flat tag/label controls
    forms: clean conventional fields outside collage zones
    badges: starbursts, price tags, date labels, small colored tabs
  media:
    photography: clean product cutouts or restrained fashion photography
    illustration: flat vector accessories with thin black outlines and almost no shading
    icons: thin black outline utility icons
    texture: subtle paper grain
    textureStrength: 0-3%
  surfaces:
    borders: 1-2px black outlines on illustrated objects and utility controls
    radius: 0-14px; giant object uses custom silhouette
    shadows: none or subtle paper shadow
  motion:
  - object drop-in
  - tiny tag slide
  - 1-2deg hover tilt
  - soft sparkle pop
  responsive:
  - recompose the accessory cluster vertically
  - retain one giant object silhouette
  - reduce tiny decorations
  - keep large title readable and move dates into safe margins
  accessibilityRisks:
  - tiny seasonal labels carrying essential information
  - collage objects covering controls
  - too many accent colors outside the focal cluster
  signatureElements:
  - giant white bag/object frame
  - pink/yellow/cyan/green accessory cluster
  - expressive black editorial title
  - tiny seasonal metadata
  - yellow starbursts
  - large gray negative space
  recognitionHeuristics:
  - The physical container must organize the composition, not merely decorate it.
  - Color should be concentrated in the product cluster while the rest stays neutral.
  - The result should read as a seasonal fashion guide rather than generic cartoon ecommerce.
  scores:
    playful: 9
    nostalgic: 6
    technical: 1
    organic: 3
    editorial: 10
    pixel: 0
    illustrative: 9
    texture: 2
    bold: 8
    commerce: 8
    density: 5
  implementationComplexity: medium-high
  compatibleSecondaryStyles:
  - playful-risograph
  - genz-influencer-editorial
  - paper-cut-editorial
  incompatibleSecondaryStyles:
  - terminal-community at high strength
  - glitch-fashion at high strength
  - formal corporate minimalism
  fallbackBehavior: If custom accessory illustration is limited, use coherent product cutouts with flat-color stickers while
    retaining the giant container silhouette, neutral field, and strong editorial type.
  failureModes:
  - turning the bag into a normal rounded card
  - filling every empty area
  - using thick comic outlines
  - making every product equally large
- id: retro-supermarket-sticker
  referenceOrder: 22
  name: Retro Supermarket Sticker Editorial
  aliases:
  - supermarket Y2K collage
  - grocery sticker poster
  - retail receipt editorial
  - pop supermarket graphic
  referenceVisual: White tiled field framing a blue shopping basket, giant red Chinese display typography, banana and tomato
    cutouts with thick white sticker borders, yellow label blocks, receipts, barcodes, checker marks, and small black metadata.
  summary: A loud retail-poster system combining supermarket objects, sticker cutouts, receipts, barcodes, and oversized red
    typography on a blue/white/yellow base.
  description: An energetic grocery/retail language where typography and products collide like printed shelf labels, promotional
    stickers, and market receipts.
  designPhilosophy: Make the page feel merchandised rather than card-based. Use one dominant retail container, one huge headline,
    and secondary transactional ephemera as visual texture.
  brandPersonality:
  - commercial
  - loud
  - graphic
  - street-retail
  - youthful
  - playful
  emotionalTone:
  - energetic
  - urgent
  - pop
  - collectible
  - promotional
  bestFor:
  - retail events
  - grocery campaigns
  - food launches
  - pop-up markets
  - streetwear merch
  - marketplace promos
  avoidFor:
  - luxury finance
  - healthcare
  - enterprise software
  - calm wellness
  - formal legal
  audience:
  - young shoppers
  - food/culture audiences
  - retail event visitors
  - design-conscious consumers
  selectionProfile:
    pickWhen:
    - the campaign needs loud retail energy
    - products can be staged as cutouts
    - receipt/label metaphors fit
    - a short promotional message dominates
    rejectWhen:
    - long-form reading dominates
    - brand must feel quiet/luxury
    - product imagery is unavailable
    contentDensityFit:
      level: low-medium
      score: 4
      note: Best with one large poster message and supporting labels rather than dense prose.
    mediaAssetFit:
      score: 9
      ideal:
      - product cutouts
      - basket/cart/container image
      - original receipts/barcodes/price labels
      minimum: Needs strong product or retail-object imagery.
    interactionFit:
      score: 5
      note: Best for campaign browsing and product discovery, not complex workflows.
    accessibilityFit:
      score: 7
      note: Strong contrast is easy; keep receipt microcopy non-essential.
    implementationBudget: medium-high
  palette:
    background: '#F3F2EC'
    surface: '#2378D7'
    text: '#111111'
    muted_text: '#444444'
    secondary: '#E82F24'
    accent: '#FFEF19'
    dark: '#111111'
    line: '#111111'
  typography:
    display:
      direction: oversized condensed/heavy display with sticker shadow or outline
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean grotesk sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: receipt mono / condensed labels
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: poster grid with central retail object and scattered edge ephemera
    alignment: central collision with diagonal labels
    whitespace: medium
    overlap: high around headline/product but disciplined
    sectionRhythm: tiled field -> basket hero -> receipt/label strip -> promotional product sections
  hero:
    visualPriority: headline + retail-object-first
    formula: white tile background + blue basket + giant red headline + 2-4 product cutouts + yellow promo labels + receipt
      ephemera
    ctaCount: 1
  components:
    navigation: small utility row or label strip
    cards: use merchandise stages and receipt modules rather than generic cards
    buttons: yellow/red flat retail labels with hard borders
    forms: plain white fields with dark borders
    badges: price bursts, checker tabs, receipt labels, barcode tags
  media:
    photography: product photography/cutouts with high clarity
    illustration: flat sticker objects and printed ephemera
    icons: simple utility icons or label symbols
    texture:
    - subtle print grain
    - tile/grid lines
    textureStrength: 2-5%
  surfaces:
    borders: 1-3px black lines; white sticker outlines around cutouts
    radius: 0-10px
    shadows: hard sticker shadow only
  motion:
  - label snap-in
  - receipt slide
  - small sticker pop
  - short headline mask reveal
  responsive:
  - retain basket/headline hierarchy
  - reduce receipt clutter
  - stack ephemera around edges
  - keep large type and one hero product/container
  accessibilityRisks:
  - microcopy too small
  - barcodes used as real controls
  - sticker clutter covering CTAs
  signatureElements:
  - giant red headline
  - blue basket/container
  - thick white sticker outlines
  - yellow promo labels
  - receipt/barcode ephemera
  - white tile field
  recognitionHeuristics:
  - The page should resemble a designed supermarket promotion at thumbnail size.
  - Receipts and labels are supporting texture, not the main information architecture.
  - One dominant red/blue/yellow hierarchy must remain obvious.
  scores:
    playful: 9
    nostalgic: 8
    technical: 2
    organic: 2
    editorial: 9
    pixel: 2
    illustrative: 7
    texture: 5
    bold: 10
    commerce: 9
    density: 5
  implementationComplexity: medium-high
  compatibleSecondaryStyles:
  - retro-marketplace-pop
  - playful-risograph
  - y2k-portfolio-collage
  incompatibleSecondaryStyles:
  - dreamy-indie-software at high strength
  - organic-garden-commerce at high strength
  - quiet luxury
  fallbackBehavior: If photography is limited, create original flat grocery cutouts and receipt SVGs while preserving the
    basket/container, oversized red type, and yellow label system.
  failureModes:
  - turning labels into generic pills
  - using every receipt as readable content
  - too many products with equal priority
  - adding glossy 3D retail objects
- id: cat-product-collage
  referenceOrder: 23
  name: Cute Cat Product Collage
  aliases:
  - cat FMCG editorial
  - cute product basket poster
  - pet lifestyle collage
  - soft packaging advertisement
  referenceVisual: Warm cream poster with a tilted white shopping basket filled with pastel cat-food packages, a large pink
    cat-shaped bag, scattered illustrated cats, plaid fabric/fish props, and a huge warped brown ROTA wordmark.
  summary: A soft playful consumer-brand language combining tilted product baskets, cute animal mascots, pastel packaging,
    warped display type, and spacious cream editorial framing.
  description: A cute FMCG/product-collage system where packaging and mascots build a believable little brand world without
    becoming childish clutter.
  designPhilosophy: Balance one physically dramatic product arrangement with quiet cream space. Cute characters support the
    product hierarchy rather than replacing it.
  brandPersonality:
  - cute
  - friendly
  - consumer
  - warm
  - playful
  - brand-led
  emotionalTone:
  - cozy
  - cheerful
  - soft
  - collectible
  - whimsical
  bestFor:
  - pet products
  - food packaging
  - kids goods
  - cute lifestyle brands
  - boutique ecommerce
  - gift brands
  avoidFor:
  - cybersecurity
  - finance
  - formal B2B
  - dense dashboards
  - luxury minimal brands
  audience:
  - pet owners
  - younger shoppers
  - gift/lifestyle buyers
  - cute-brand audiences
  selectionProfile:
    pickWhen:
    - mascot illustration is central
    - packaging imagery can be staged
    - brand should feel cute but editorial
    - commerce needs personality
    rejectWhen:
    - formal trust dominates
    - there are no product/packaging assets
    - the audience rejects character branding
    contentDensityFit:
      level: medium
      score: 5
      note: Can support a modest product catalog if the hero stays spacious.
    mediaAssetFit:
      score: 9
      ideal:
      - packaging mockups
      - original animal mascots
      - basket/bag/product cutouts
      minimum: Needs coherent packaging or mascot assets.
    interactionFit:
      score: 7
      note: Strong for commerce and brand storytelling; keep purchasing controls conventional.
    accessibilityFit:
      score: 9
      note: Cream background and dark text provide strong accessibility if playful type stays decorative.
    implementationBudget: medium-high
  palette:
    background: '#F6F0DF'
    surface: '#FFFFFF'
    text: '#6E3A1D'
    muted_text: '#6E6258'
    secondary: '#F2A8D2'
    accent: '#A8D570'
    dark: '#58311F'
    line: '#694229'
  typography:
    display:
      direction: warped chunky display with soft irregular geometry
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: friendly grotesk sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: small editorial sans and compact labels
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: editorial product grid centered on a tilted container composition
    alignment: asymmetric diagonal product staging
    whitespace: high
    overlap: moderate product/mascot overlap
    sectionRhythm: wordmark poster -> product basket -> benefit/story section -> sparse catalog
  hero:
    visualPriority: product-collage-first
    formula: cream field + huge warped brown wordmark + tilted basket full of pastel packages + scattered cat mascots
    ctaCount: 1
  components:
    navigation: quiet top-edge nav
    cards: packaging specimens, floating cutouts, or framed product strips
    buttons: small dark/cream compact controls
    forms: clean cream/white commerce fields
    badges: mini cat stickers, flavor tabs, soft star labels
  media:
    photography: clean packaging/product photography
    illustration: flat cute cat mascots with simple outlines and pastel fills
    icons: friendly simple outline symbols
    texture:
    - subtle paper grain
    - plaid/fabric accents
    textureStrength: 1-4%
  surfaces:
    borders: 1-2px brown/black outlines
    radius: 6-18px
    shadows: soft paper shadow or none
  motion:
  - basket settle
  - mascot peek
  - small product tilt
  - sticker pop
  responsive:
  - stack basket and wordmark
  - reduce scattered mascots
  - keep products large enough to inspect
  - preserve cream breathing room
  accessibilityRisks:
  - cute display type used for instructions
  - mascots obscuring buy controls
  - pastel-on-pastel low contrast
  signatureElements:
  - cream poster field
  - warped brown wordmark
  - tilted shopping basket
  - pastel cat packaging
  - cute cat mascots
  - soft plaid accessory texture
  recognitionHeuristics:
  - The product basket must remain the dominant physical composition.
  - Cute characters should repeat in one coherent drawing style.
  - The overall page should feel like a designed consumer-brand campaign, not a generic pet shop.
  scores:
    playful: 10
    nostalgic: 6
    technical: 1
    organic: 5
    editorial: 9
    pixel: 0
    illustrative: 9
    texture: 4
    bold: 8
    commerce: 10
    density: 5
  implementationComplexity: medium-high
  compatibleSecondaryStyles:
  - playful-risograph
  - organic-garden-commerce
  - summer-accessory-editorial
  incompatibleSecondaryStyles:
  - terminal-community
  - glitch-fashion at high strength
  - formal corporate minimalism
  fallbackBehavior: If 3D packaging mockups are unavailable, use flat packaging illustrations in a tilted basket while retaining
    the cream/brown/pastel hierarchy and mascot system.
  failureModes:
  - making every section pink
  - using generic pet stock photos
  - too many mascot poses
  - placing products inside identical cards
- id: kawaii-recruitment-poster
  referenceOrder: 24
  name: Kawaii Recruitment Poster
  aliases:
  - cute team poster
  - stationery recruitment graphic
  - kawaii sticker campaign
  - youth mascot recruitment
  referenceVisual: Pale yellow paper sheet over a soft blue field, chunky hand-drawn navy TEAM 01 headline, central lion-like
    mascot with colorful mini teammates, comic starbursts, pastel stars, handwritten labels, stickers, and a curled paper
    corner.
  summary: A cheerful recruitment/campaign style built from stationery-paper framing, hand-drawn display type, cute mascots,
    comic bursts, and handwritten annotations.
  description: A youth-facing poster language that feels like a decorated school-club notice, but with deliberate hierarchy
    and a coherent mascot family.
  designPhilosophy: 'Keep the page tactile and approachable: one poster sheet, one dominant mascot, one big hand-drawn headline,
    and a small set of repeating sticker motifs.'
  brandPersonality:
  - friendly
  - youthful
  - collaborative
  - cute
  - informal
  - optimistic
  emotionalTone:
  - welcoming
  - energetic
  - sweet
  - team-oriented
  - casual
  bestFor:
  - recruitment pages
  - student clubs
  - youth communities
  - creative teams
  - kids products
  - event signups
  avoidFor:
  - banking
  - formal hiring portals
  - enterprise procurement
  - legal services
  - medical workflows
  audience:
  - students
  - younger creatives
  - community members
  - kids/parents
  - casual applicants
  selectionProfile:
    pickWhen:
    - the message is recruitment/community oriented
    - cute mascots fit the brand
    - a poster-like campaign is desired
    - content is short
    rejectWhen:
    - long application workflows dominate
    - formal executive hiring tone is required
    - mascot illustration is unavailable
    contentDensityFit:
      level: low
      score: 3
      note: Best for concise campaign messaging with a separate calm application flow.
    mediaAssetFit:
      score: 8
      ideal:
      - original mascots
      - paper/sticker SVGs
      - hand-drawn starbursts
      minimum: Needs at least one coherent hero mascot.
    interactionFit:
      score: 5
      note: Good for landing/signup campaigns; forms should move into simple utility surfaces.
    accessibilityFit:
      score: 8
      note: Strong if handwritten labels remain decorative and application controls stay conventional.
    implementationBudget: medium
  palette:
    background: '#BFDDE9'
    surface: '#FFF58A'
    text: '#2E5D91'
    muted_text: '#4F5E66'
    secondary: '#F3A8C5'
    accent: '#63CFA0'
    dark: '#254F7F'
    line: '#315C9A'
  typography:
    display:
      direction: chunky hand-drawn uppercase display
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: friendly rounded/humanist sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: handwritten note style for non-critical annotations
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: single poster-sheet composition with internal burst shapes
    alignment: centered mascot with playful asymmetry
    whitespace: medium-high around outer field
    overlap: sticker/burst overlaps inside poster only
    sectionRhythm: poster hero -> role/team cards -> simple signup band
  hero:
    visualPriority: mascot-first
    formula: soft blue field + pale yellow paper poster + TEAM headline + central mascot trio + starburst sticker layers
    ctaCount: 1
  components:
    navigation: small top-edge labels or tab strip
    cards: poster sub-panels, role stickers, or simple team rows
    buttons: sticker-like outlined buttons
    forms: simple rectangular/rounded fields outside dense poster art
    badges: stars, bursts, handwritten arrows, sticker dots
  media:
    photography: rare; optional candid team photos in a calm secondary band
    illustration: cute hand-drawn mascots with soft pastel fills and dark blue outlines
    icons: simple doodle icons
    texture:
    - paper texture
    - light print grain
    textureStrength: 1-4%
  surfaces:
    borders: 2-3px navy outlines on major illustrations
    radius: 8-18px
    shadows: small paper shadow
  motion:
  - poster peel
  - sticker pop
  - mascot bounce
  - handwritten arrow draw
  responsive:
  - keep one mascot cluster per viewport
  - simplify burst count
  - maintain large headline
  - move application controls into a clean follow-up section
  accessibilityRisks:
  - handwriting too small
  - mascot art used as only label
  - poster texture reducing contrast
  signatureElements:
  - pale yellow paper sheet
  - soft blue background
  - chunky navy hand lettering
  - cute central mascot
  - comic starbursts
  - handwritten labels and stickers
  recognitionHeuristics:
  - The result should look like a designed recruitment poster before it looks like a web form.
  - One mascot must clearly dominate.
  - The application flow must remain visually calmer than the campaign art.
  scores:
    playful: 10
    nostalgic: 6
    technical: 1
    organic: 5
    editorial: 8
    pixel: 0
    illustrative: 10
    texture: 5
    bold: 7
    commerce: 4
    density: 3
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - playful-risograph
  - retro-cartoon-type-specimen
  - scrapbook-portfolio
  incompatibleSecondaryStyles:
  - glitch-fashion
  - terminal-community at high strength
  - luxury minimalism
  fallbackBehavior: If custom mascot art is limited, use one original simple character plus stars/bursts and preserve the
    stationery poster composition rather than mixing stock illustration styles.
  failureModes:
  - turning the poster into a card grid
  - using too many mascot species/styles
  - tiny handwritten copy
  - generic corporate recruitment copy inside cute art
- id: valentine-kawaii-campaign
  referenceOrder: 25
  name: Valentine Kawaii Campaign
  aliases:
  - pink mascot romance campaign
  - cute Valentine poster
  - Chinese youth love campaign
  - kawaii romantic advertising
  referenceVisual: Candy-pink perspective room framing a cyan LOVE poster, oversized white Chinese headline type, chibi characters,
    hearts, roses, paw-print symbols, floating petals, and layered paper/photo props.
  summary: A saturated romantic campaign language using pink environmental framing, cyan contrast panels, cute chibi mascots,
    bold white headline type, and layered Valentine symbols.
  description: A high-energy love/relationship campaign system that uses spatial illustration and mascots to turn the page
    into a celebratory scene.
  designPhilosophy: Use one dominant pink world, one cyan visual window, one central character relationship, and a small vocabulary
    of hearts/flowers/paws.
  brandPersonality:
  - romantic
  - cute
  - youthful
  - campaign-led
  - celebratory
  - characterful
  emotionalTone:
  - sweet
  - excited
  - warm
  - playful
  - affectionate
  bestFor:
  - Valentine campaigns
  - pet/lifestyle collaborations
  - romantic events
  - youth promotions
  - gift brands
  - community campaigns
  avoidFor:
  - enterprise tools
  - legal/finance
  - serious healthcare
  - B2B documentation
  - calm luxury
  audience:
  - young couples
  - gift shoppers
  - fandom/community audiences
  - cute-brand consumers
  selectionProfile:
    pickWhen:
    - romance/affection is central
    - custom character art is available
    - campaign impact matters
    - pink/cyan palette fits
    rejectWhen:
    - the product requires sober trust
    - long reading dominates
    - characters cannot be produced consistently
    contentDensityFit:
      level: low-medium
      score: 4
      note: Best for a strong hero and short campaign modules.
    mediaAssetFit:
      score: 9
      ideal:
      - chibi character illustration
      - hearts/flowers props
      - original poster/photo layers
      minimum: Needs coherent character illustration.
    interactionFit:
      score: 5
      note: Best for campaign exploration and CTA flows.
    accessibilityFit:
      score: 7
      note: Keep white type high-contrast and avoid placing critical text over busy character scenes.
    implementationBudget: high
  palette:
    background: '#F58AB8'
    surface: '#43BDE5'
    text: '#FFFFFF'
    muted_text: '#F9D7E5'
    secondary: '#F7A7C7'
    accent: '#E73D62'
    dark: '#2A2025'
    line: '#FFFFFF'
  typography:
    display:
      direction: oversized blunt white display, optionally East-Asian poster lettering
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean rounded/grotesk sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: small date/brand labels
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 2
  layout:
    grid: perspective poster/room composition with central cyan panel
    alignment: centered scene with diagonal frame edges
    whitespace: medium
    overlap: character and prop overlap high inside hero
    sectionRhythm: pink title field -> cyan love scene -> gift/product modules -> romantic CTA
  hero:
    visualPriority: character-scene-first
    formula: pink perspective frame + giant white headline + cyan LOVE panel + central chibi character + hearts/roses/paw
      symbols
    ctaCount: 1
  components:
    navigation: minimal edge nav
    cards: campaign panels, gift specimens, photo/postcard modules
    buttons: bold white/pink or red compact CTA
    forms: clean white/pink form sections outside dense scene
    badges: hearts, paw prints, petals, photo slips, date tags
  media:
    photography: optional couple/product photography in calm sections
    illustration: chibi mascot/character art with flat warm shading
    icons: simple cute filled icons
    texture:
    - soft paper grain
    - subtle vignette
    textureStrength: 1-4%
  surfaces:
    borders: 1-2px scene outlines or none
    radius: 8-22px
    shadows: soft illustrated depth, not UI glass shadow
  motion:
  - heart float
  - petal drift
  - poster slide
  - character peek
  responsive:
  - crop perspective aggressively
  - keep central character readable
  - reduce floating props
  - move CTA and form into clean lower panel
  accessibilityRisks:
  - pink/white contrast failures
  - critical copy over faces
  - looping heart motion distracting users
  signatureElements:
  - candy pink field
  - giant white headline
  - cyan contrast panel
  - chibi characters
  - heart/rose/paw motifs
  - layered romantic props
  recognitionHeuristics:
  - The page must immediately read as a romantic youth campaign.
  - Pink should dominate, cyan should act as a single strong contrast field.
  - Characters and typography must remain the two primary focal layers.
  scores:
    playful: 10
    nostalgic: 4
    technical: 0
    organic: 4
    editorial: 8
    pixel: 0
    illustrative: 10
    texture: 3
    bold: 9
    commerce: 7
    density: 3
  implementationComplexity: high
  compatibleSecondaryStyles:
  - kawaii-recruitment-poster
  - playful-risograph
  - cartoon-campaign
  incompatibleSecondaryStyles:
  - terminal-community
  - glitch-fashion at high strength
  - formal luxury
  fallbackBehavior: If complex perspective character art is unavailable, use a simpler flat pink/cyan poster system with one
    original mascot pair and strong white headline typography.
  failureModes:
  - generic pink gradient landing page
  - stock Valentine icons
  - too many hearts with no hierarchy
  - hiding CTA inside the illustration
- id: illustration-zine-adventure
  referenceOrder: 26
  name: Illustration Zine Adventure
  aliases:
  - indie illustration zine
  - whimsical adventure poster
  - animation zine cover
  - hand-painted character editorial
  referenceVisual: Bright sky-blue zine cover with oversized rough white title lettering, a large orange-hat character leaning
    into frame, layered smaller characters, tropical foliage, chunky props, and loose hand-painted captions.
  summary: A whimsical illustrated-zine system using exaggerated perspective, hand-painted character art, rough display lettering,
    and layered foreground objects.
  description: An indie illustration language that makes the page feel like a printed adventure-zine cover or animation concept-art
    spread.
  designPhilosophy: Let character perspective and scene staging create energy. Typography should feel drawn into the same
    world rather than pasted over it.
  brandPersonality:
  - adventurous
  - artistic
  - youthful
  - whimsical
  - indie
  - expressive
  emotionalTone:
  - curious
  - fun
  - sunny
  - imaginative
  - casual
  bestFor:
  - illustration portfolios
  - animation projects
  - indie games
  - zines
  - creative events
  - youth campaigns
  avoidFor:
  - finance
  - enterprise dashboards
  - legal
  - medical portals
  - dense utility apps
  audience:
  - illustration fans
  - artists
  - gamers
  - students
  - creative communities
  selectionProfile:
    pickWhen:
    - character art is a primary asset
    - the project can be scene-led
    - adventure/creativity matters
    - display typography may be hand-drawn
    rejectWhen:
    - no original illustration exists
    - content is primarily forms/data
    - formal trust dominates
    contentDensityFit:
      level: low
      score: 3
      note: Best for scene-based covers, showcases, and short narrative sections.
    mediaAssetFit:
      score: 10
      ideal:
      - original character illustration
      - environment props
      - hand-lettered title art
      minimum: Requires strong custom illustration.
    interactionFit:
      score: 4
      note: Best for browsing, galleries, and light interaction.
    accessibilityFit:
      score: 7
      note: Keep essential copy outside complex scene areas.
    implementationBudget: high
  palette:
    background: '#6591D4'
    surface: '#F6F1DA'
    text: '#F8F2E4'
    muted_text: '#D8E3F2'
    secondary: '#F0A139'
    accent: '#A8E57B'
    dark: '#3E4136'
    line: '#F8F2E4'
  typography:
    display:
      direction: rough hand-painted display lettering
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean friendly sans or hand-lettered short copy
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: small handwritten captions
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: full-bleed scene with poster-like type anchors
    alignment: highly asymmetric perspective composition
    whitespace: medium
    overlap: high foreground overlap
    sectionRhythm: illustrated cover -> character/world panels -> project/zine chapters -> quiet credits
  hero:
    visualPriority: character-scene-first
    formula: sky-blue field + large hand-drawn title + one giant foreground character + 2-3 smaller scene characters + tropical/prop
      layers
    ctaCount: 0
  components:
    navigation: nearly invisible or edge labels
    cards: illustrated chapter panels rather than standard cards
    buttons: small hand-drawn/flat CTA
    forms: simple clean form panel separated from illustration
    badges: stars, arrows, hand notes, zine labels
  media:
    photography: rare; optional textured scans
    illustration: soft hand-painted/anime-inspired character illustration
    icons: hand-drawn symbol set
    texture:
    - paper grain
    - brush texture
    textureStrength: 2-6%
  surfaces:
    borders: hand-drawn 1-3px edges
    radius: 0-12px
    shadows: none
  motion:
  - character parallax
  - title draw-in
  - small prop drift
  - page-turn reveal
  responsive:
  - keep one dominant character per viewport
  - reduce background props
  - move copy to calmer sky/solid areas
  - preserve hand-drawn title scale
  accessibilityRisks:
  - essential text over faces
  - excessive parallax causing motion sickness
  - scene crop making characters unreadable
  signatureElements:
  - sky-blue field
  - rough white hand lettering
  - large perspective character
  - layered supporting characters
  - tropical/prop collage
  - zine-like captions
  recognitionHeuristics:
  - The first viewport should feel like an illustration zine cover.
  - Perspective should be deliberately exaggerated.
  - UI chrome must remain subordinate to the artwork.
  scores:
    playful: 9
    nostalgic: 6
    technical: 0
    organic: 6
    editorial: 9
    pixel: 0
    illustrative: 10
    texture: 6
    bold: 8
    commerce: 3
    density: 3
  implementationComplexity: high
  compatibleSecondaryStyles:
  - dreamy-art-magazine
  - handdrawn-travel-zine
  - kawaii-recruitment-poster
  incompatibleSecondaryStyles:
  - terminal-community
  - neo-future-aigc at high strength
  - formal corporate minimalism
  fallbackBehavior: If full scene art is unavailable, use one original character, a flat color field, rough hand-lettered
    type, and a few hand-drawn props instead of stock illustration.
  failureModes:
  - mixing multiple illustration styles
  - adding generic card UI over the art
  - shrinking title to normal heading size
  - using glossy 3D props
- id: dreamy-art-magazine
  referenceOrder: 27
  name: Dreamy Art Magazine Editorial
  aliases:
  - indie art magazine
  - fisheye illustration editorial
  - anime art cover
  - dreamy studio magazine
  referenceVisual: Fisheye/top-down illustrated studio scene in muted olive and blue, a huge blue serif Falett masthead, black-and-white
    checkerboard floor, painterly palette prop, and clean white collaboration metadata.
  summary: A nostalgic art-magazine system pairing sophisticated oversized serif typography with dreamy illustrated environments,
    fisheye perspective, and restrained editorial metadata.
  description: An art-school magazine language where a cinematic illustrated scene carries mood while the masthead provides
    high-fashion editorial authority.
  designPhilosophy: 'Treat the illustration like a photographed magazine cover: preserve one strong perspective, one oversized
    serif masthead, and very sparse supporting copy.'
  brandPersonality:
  - artistic
  - cultured
  - dreamy
  - indie
  - editorial
  - cinematic
  emotionalTone:
  - nostalgic
  - quiet
  - creative
  - intimate
  - observational
  bestFor:
  - artist portfolios
  - magazines
  - creative collaborations
  - illustration showcases
  - fashion-art campaigns
  - studio journals
  avoidFor:
  - dense dashboards
  - mass-market ecommerce
  - legal/finance
  - technical documentation
  audience:
  - artists
  - designers
  - illustration audiences
  - culture readers
  - creative students
  selectionProfile:
    pickWhen:
    - a strong illustrated scene exists
    - editorial storytelling matters
    - the brand can carry a serif masthead
    - content density is low-medium
    rejectWhen:
    - no focal artwork is available
    - transactional UI dominates
    - serif editorial tone conflicts with brand
    contentDensityFit:
      level: low-medium
      score: 4
      note: Supports cover-led narratives with calm information bands.
    mediaAssetFit:
      score: 10
      ideal:
      - full-scene illustration
      - painterly props
      - editorial masthead typography
      minimum: Requires one compelling scene or artwork.
    interactionFit:
      score: 4
      note: Best for reading/galleries; functional controls should remain minimal.
    accessibilityFit:
      score: 8
      note: Strong if white metadata is kept over calm dark areas and body text stays conventional.
    implementationBudget: high
  palette:
    background: '#6E877D'
    surface: '#D8D6BA'
    text: '#2D89C7'
    muted_text: '#F1F2ED'
    secondary: '#B3C5B5'
    accent: '#F6F0DE'
    dark: '#273535'
    line: '#F6F0DE'
  typography:
    display:
      direction: oversized high-contrast editorial serif masthead
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean grotesk or readable serif/sans mix
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: small white editorial sans
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: full-bleed magazine cover grid over one cinematic illustration
    alignment: masthead-led with off-center subject
    whitespace: medium-high
    overlap: masthead may overlap scene subject carefully
    sectionRhythm: cover scene -> collaboration note -> artwork spreads -> quiet editorial footer
  hero:
    visualPriority: masthead + scene-first
    formula: full-bleed illustrated room + giant blue serif masthead + central character + one checker/palette accent + sparse
      white metadata
    ctaCount: 0
  components:
    navigation: minimal top/edge labels
    cards: full-bleed spreads and framed artwork, not cards
    buttons: small understated editorial controls
    forms: clean light/dark reading bands
    badges: issue numbers, collaboration labels, tiny captions
  media:
    photography: optional art scans or studio photos
    illustration: cinematic hand-drawn illustration with muted painterly shading
    icons: minimal editorial symbols
    texture:
    - paper/film grain
    - subtle vignette
    textureStrength: 2-5%
  surfaces:
    borders: none or 1px editorial rules
    radius: 0-8px
    shadows: none
  motion:
  - slow scene drift
  - masthead reveal
  - page/spread fade
  - small caption slide
  responsive:
  - crop scene intentionally
  - keep masthead large but avoid covering faces
  - move metadata into calm corners
  - stack editorial spreads
  accessibilityRisks:
  - white text over busy illustration
  - masthead obscuring subject
  - serif used too small for utility UI
  signatureElements:
  - giant blue serif masthead
  - fisheye/top-down illustrated studio
  - muted olive-blue palette
  - checkerboard accent
  - painterly art prop
  - sparse white metadata
  recognitionHeuristics:
  - The page must read as an art magazine cover at thumbnail size.
  - The masthead and scene are co-equal focal layers.
  - UI should remain almost invisible.
  scores:
    playful: 6
    nostalgic: 8
    technical: 1
    organic: 5
    editorial: 10
    pixel: 0
    illustrative: 10
    texture: 6
    bold: 8
    commerce: 2
    density: 4
  implementationComplexity: high
  compatibleSecondaryStyles:
  - illustration-zine-adventure
  - retro-mac-editorial
  - handdrawn-travel-zine
  incompatibleSecondaryStyles:
  - cartoon-campaign at high strength
  - terminal-community
  - neo-future-aigc at high strength
  fallbackBehavior: If a full illustrated room is unavailable, use one original art scene or artwork crop with a strong serif
    masthead and restrained editorial metadata.
  failureModes:
  - turning it into a normal blog header
  - using too many checkerboards
  - adding loud CTAs over the scene
  - mixing cute stickers into the editorial masthead
- id: handdrawn-travel-zine
  referenceOrder: 28
  name: Hand-Drawn Travel Zine
  aliases:
  - travel illustration editorial
  - indie journey poster
  - sketch travel magazine
  - expressive travel journal
  referenceVisual: White poster with sculptural red hand-drawn title lettering, elegant blue script overlay, loose orange
    brushstroke, illustrated traveler on a bicycle/travel structure, pale green botanical line art, stars, arrows, and tiny
    notes.
  summary: A spacious travel-journal system combining hand-built display lettering, script overlays, loose brush marks, illustrated
    travelers, botanical line art, and handwritten metadata.
  description: An expressive indie travel editorial language where drawing, lettering, and white space feel like pages from
    a personal journey notebook.
  designPhilosophy: Keep the canvas mostly white. Use one sculptural headline, one illustrated journey scene, and one loose
    brush gesture to connect typography and image.
  brandPersonality:
  - adventurous
  - artistic
  - personal
  - indie
  - warm
  - poetic
  emotionalTone:
  - curious
  - light
  - free
  - observational
  - handmade
  bestFor:
  - travel campaigns
  - tourism editorials
  - artist journals
  - outdoor brands
  - culture magazines
  - creative portfolios
  avoidFor:
  - enterprise tools
  - banking
  - dense ecommerce
  - developer dashboards
  - formal institutions
  audience:
  - travelers
  - artists
  - culture audiences
  - students
  - outdoor/lifestyle consumers
  selectionProfile:
    pickWhen:
    - travel/storytelling is central
    - illustration or hand lettering is available
    - white-space-heavy editorial composition fits
    - the page can be low density
    rejectWhen:
    - content is data-heavy
    - formal booking UI must dominate
    - no meaningful travel imagery/illustration exists
    contentDensityFit:
      level: low
      score: 3
      note: Best for poetic storytelling and campaign pages with wide breathing room.
    mediaAssetFit:
      score: 9
      ideal:
      - travel illustration
      - botanical line art
      - hand lettering/brush marks
      minimum: Needs one strong illustrated or photographic journey motif.
    interactionFit:
      score: 4
      note: Good for editorial browsing; booking controls should live in separate clean bands.
    accessibilityFit:
      score: 8
      note: White field supports readability; decorative script must not carry essential copy.
    implementationBudget: medium-high
  palette:
    background: '#FFFDF5'
    surface: '#F4F3E9'
    text: '#A63A26'
    muted_text: '#34446C'
    secondary: '#244B91'
    accent: '#E7A23E'
    dark: '#28384B'
    line: '#34446C'
  typography:
    display:
      direction: sculptural hand-drawn display with ribbon-like or brush-built forms
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean humanist sans or restrained serif
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: elegant script/handwritten annotations for decorative labels
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: sparse 12-column poster grid with large central illustration
    alignment: asymmetric top-heavy typography with scene below
    whitespace: very high
    overlap: selective type/brush/illustration overlap
    sectionRhythm: sculptural title -> illustrated journey -> notes/route story -> quiet practical band
  hero:
    visualPriority: type + illustration-first
    formula: white field + red sculptural title + blue script accent + one orange brush gesture + illustrated traveler/bicycle
      scene
    ctaCount: 0
  components:
    navigation: near-invisible edge links
    cards: story spreads, route notes, image/illustration bands
    buttons: small outlined or handwritten label CTA
    forms: booking/form UI isolated in plain white/cream module
    badges: stars, arrows, notes, route stamps
  media:
    photography: editorial travel photography may alternate with drawings
    illustration: loose hand-drawn traveler and botanical line art
    icons: hand-drawn travel symbols
    texture:
    - paper grain
    - pencil/ink texture
    textureStrength: 2-5%
  surfaces:
    borders: 1px ink/editorial rules
    radius: 0-8px
    shadows: none
  motion:
  - brush draw
  - route-line reveal
  - page drift
  - small note pop
  responsive:
  - preserve large white areas
  - stack title and scene
  - reduce decorative notes
  - move booking UI into conventional modules
  accessibilityRisks:
  - script used for body copy
  - thin pale line art reducing contrast
  - booking controls hidden in illustration
  signatureElements:
  - white field
  - red sculptural lettering
  - blue script overlay
  - orange brushstroke
  - traveler illustration
  - pale green botanical line art
  recognitionHeuristics:
  - White space should occupy a large portion of every viewport.
  - The headline must feel drawn, not neutrally typeset.
  - One journey illustration or route motif must anchor the page.
  scores:
    playful: 7
    nostalgic: 7
    technical: 1
    organic: 7
    editorial: 10
    pixel: 0
    illustrative: 9
    texture: 6
    bold: 7
    commerce: 3
    density: 3
  implementationComplexity: medium-high
  compatibleSecondaryStyles:
  - paper-cut-editorial
  - illustration-zine-adventure
  - dreamy-art-magazine
  incompatibleSecondaryStyles:
  - terminal-community at high strength
  - retro-marketplace-pop at high strength
  - dense neo-brutal UI
  fallbackBehavior: If hand lettering is unavailable, use a custom-looking expressive display paired with original brush SVGs
    and one travel illustration while preserving white-space discipline.
  failureModes:
  - filling white space with cards
  - using stock travel icons
  - too many scripts
  - turning the brushstroke into a gradient swoosh
- id: nostalgic-summer-magazine
  referenceOrder: 29
  name: Nostalgic Summer Magazine
  aliases:
  - soft youth magazine
  - watercolor summer cover
  - anime puddle editorial
  - minor heat magazine
  referenceVisual: Pale blue and cream illustrated city scene with two school-age characters reflected in a large puddle,
    huge translucent rounded masthead, pencil/watercolor texture, small issue metadata, and spacious seasonal typography.
  summary: A soft nostalgic youth-editorial system built from watercolor/pencil illustration, pale seasonal color, reflective
    compositions, translucent mastheads, and sparse magazine metadata.
  description: A quiet summer-diary language that treats atmosphere, reflection, and negative space as primary design materials.
  designPhilosophy: Keep contrast gentle but readable. Let one environmental illustration and its reflection do most of the
    storytelling while typography remains airy and restrained.
  brandPersonality:
  - nostalgic
  - gentle
  - youthful
  - literary
  - illustrative
  - seasonal
  emotionalTone:
  - wistful
  - warm
  - quiet
  - dreamy
  - reflective
  bestFor:
  - youth magazines
  - summer campaigns
  - coming-of-age stories
  - illustration portfolios
  - music/film microsites
  - cultural editorials
  avoidFor:
  - high-energy commerce
  - enterprise dashboards
  - cybersecurity
  - finance
  - dense documentation
  audience:
  - young culture audiences
  - illustration fans
  - music/film audiences
  - students
  - editorial readers
  selectionProfile:
    pickWhen:
    - mood and season matter more than utility density
    - soft illustration is available
    - long atmospheric hero is appropriate
    - the project values nostalgia
    rejectWhen:
    - strong transactional UI dominates
    - brand requires extreme contrast/aggression
    - no focal scene exists
    contentDensityFit:
      level: low-medium
      score: 4
      note: Can support short editorial stories and issue navigation.
    mediaAssetFit:
      score: 10
      ideal:
      - watercolor/pencil scene illustration
      - urban environment art
      - reflection/rain/puddle motif
      minimum: Requires one atmospheric focal scene.
    interactionFit:
      score: 3
      note: Best for reading and discovery, not complex interactions.
    accessibilityFit:
      score: 7
      note: Soft colors require careful contrast; keep essential text dark enough.
    implementationBudget: high
  palette:
    background: '#B7D2DD'
    surface: '#ECE8D8'
    text: '#F1E9D9'
    muted_text: '#657578'
    secondary: '#758B9C'
    accent: '#D9A9A0'
    dark: '#4B5A62'
    line: '#8A999A'
  typography:
    display:
      direction: huge soft rounded masthead or light grotesk display
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: readable humanist sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: small magazine issue labels
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 2
  layout:
    grid: full-bleed vertical magazine cover with central reflection axis
    alignment: centered scene with subtle asymmetric metadata
    whitespace: high
    overlap: low-medium
    sectionRhythm: misty masthead -> illustrated scene/reflection -> issue notes -> quiet article bands
  hero:
    visualPriority: scene-first
    formula: pale blue urban scene + two illustrated characters + large puddle reflection + translucent rounded masthead +
      sparse issue labels
    ctaCount: 0
  components:
    navigation: minimal issue nav
    cards: full-bleed scene bands and simple article strips
    buttons: quiet text links or thin outlined controls
    forms: plain light reading/form bands
    badges: issue number seals, tiny hashtags, season labels
  media:
    photography: optional soft analog photography
    illustration: pencil/watercolor anime-style scene art
    icons: minimal line symbols
    texture:
    - paper grain
    - watercolor wash
    textureStrength: 3-7%
  surfaces:
    borders: none or 1px soft rules
    radius: 0-8px
    shadows: none
  motion:
  - slow reflection ripple
  - masthead fade
  - gentle scene drift
  - page dissolve
  responsive:
  - crop scene while preserving reflection relationship
  - increase text contrast on mobile
  - move metadata out of detailed illustration
  - keep one atmospheric visual per viewport
  accessibilityRisks:
  - pale text failing contrast
  - reflection animation too strong
  - tiny magazine metadata used for navigation
  signatureElements:
  - pale blue/cream field
  - watercolor youth characters
  - large puddle reflection
  - translucent rounded masthead
  - soft urban background
  - tiny issue metadata
  recognitionHeuristics:
  - The page should feel like a summer magazine cover, not a generic anime landing page.
  - Reflection or mirrored composition should be a major visual idea.
  - Color and texture remain soft, never neon.
  scores:
    playful: 5
    nostalgic: 10
    technical: 0
    organic: 6
    editorial: 10
    pixel: 0
    illustrative: 10
    texture: 8
    bold: 5
    commerce: 1
    density: 4
  implementationComplexity: high
  compatibleSecondaryStyles:
  - dreamy-art-magazine
  - pixel-pastoral
  - handdrawn-travel-zine
  incompatibleSecondaryStyles:
  - retro-marketplace-pop
  - terminal-community
  - cartoon-campaign at high strength
  fallbackBehavior: If full watercolor art is unavailable, use soft editorial photography with a reflection motif, pale palette,
    and translucent masthead rather than stock anime graphics.
  failureModes:
  - oversaturating the scene
  - adding bright sticker UI
  - using tiny low-contrast body text
  - making every section reflective
- id: manga-food-editorial
  referenceOrder: 30
  name: Manga Food Editorial
  aliases:
  - anime food campaign
  - illustrated bento poster
  - manga packaging ad
  - cute culinary editorial
  referenceVisual: Close-up anime-style kitchen scene with a large character holding a canned drink, bento box in foreground,
    warm cream/olive/orange palette, chibi chef and cat mascots, speech bubbles, handwritten Chinese display lettering, and
    halftone grain.
  summary: A lively food-campaign system using manga-style character illustration, dramatic close-up perspective, a hero meal/product,
    cute mini mascots, and warm print texture.
  description: A culinary editorial language where the food remains tangible and appetizing while character art supplies emotion
    and narrative.
  designPhilosophy: Use one main character, one hero meal/product, and one or two mini mascots. Food must remain the commercial
    focal point even when illustration is energetic.
  brandPersonality:
  - appetizing
  - cute
  - energetic
  - illustrative
  - consumer
  - warm
  emotionalTone:
  - fun
  - cozy
  - hungry
  - friendly
  - animated
  bestFor:
  - food campaigns
  - restaurants
  - packaged foods
  - beverage launches
  - bento brands
  - culinary events
  avoidFor:
  - finance
  - enterprise software
  - legal
  - developer tools
  - minimal luxury
  audience:
  - food lovers
  - younger consumers
  - anime/manga audiences
  - families
  - casual diners
  selectionProfile:
    pickWhen:
    - food imagery can be illustrated strongly
    - character storytelling fits the brand
    - the campaign can use dramatic perspective
    - warm print texture is desired
    rejectWhen:
    - formal fine-dining luxury is required
    - dense ordering/admin workflow dominates
    - illustration pipeline is unavailable
    contentDensityFit:
      level: low-medium
      score: 4
      note: Best for menu highlights, campaign sections, and storytelling; not dense ordering systems.
    mediaAssetFit:
      score: 10
      ideal:
      - hero food illustration
      - main character art
      - mini mascot set
      - packaging/can design
      minimum: Requires coherent food and character art.
    interactionFit:
      score: 7
      note: Works well for menu discovery and ordering if controls remain outside artwork.
    accessibilityFit:
      score: 7
      note: Keep menu/prices readable and separate from decorative lettering.
    implementationBudget: high
  palette:
    background: '#F3E9D0'
    surface: '#D7A64B'
    text: '#4A2B1F'
    muted_text: '#667783'
    secondary: '#879B42'
    accent: '#E56D3B'
    dark: '#28363B'
    line: '#3A2A22'
  typography:
    display:
      direction: handwritten chunky East-Asian food display or brush lettering
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: friendly rounded/humanist sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: small package/ingredient labels
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: dramatic foreground-food illustration with character behind
    alignment: center-weighted but perspective-driven
    whitespace: medium
    overlap: high in hero art
    sectionRhythm: character food hero -> menu/product specimens -> ingredient story -> order CTA
  hero:
    visualPriority: food + character-first
    formula: warm illustrated kitchen + large character + hero bento/food foreground + canned drink + mini chef/cat mascots
      + handwritten headline
    ctaCount: 1
  components:
    navigation: simple top strip or floating text
    cards: menu specimens, illustrated plates, packaging panels
    buttons: warm flat high-contrast CTA
    forms: clean cream order controls
    badges: speech bubbles, ingredient stickers, sparkles, mini mascots
  media:
    photography: optional food/product photos in calm menu band
    illustration: manga/anime illustration with thick sketch lines and halftone
    icons: cute culinary symbols
    texture:
    - halftone
    - paper grain
    textureStrength: 3-8%
  surfaces:
    borders: 2-4px sketchy outlines
    radius: 6-16px
    shadows: none or small hard print shadow
  motion:
  - steam drift
  - food pop-in
  - speech bubble appear
  - mascot peek
  responsive:
  - crop hero around food first
  - reduce mini mascots
  - move menu details into clean stacks
  - keep CTA away from hands/faces
  accessibilityRisks:
  - food hidden by character art
  - menu/prices in decorative type
  - too many animated mascots
  signatureElements:
  - warm cream/olive/orange palette
  - anime main character
  - large bento/meal foreground
  - mini chef/cat mascots
  - speech bubbles
  - halftone print texture
  recognitionHeuristics:
  - The meal or packaged food must be as visually important as the character.
  - The scene should feel like an illustrated food advertisement, not generic anime fan art.
  - Ordering controls remain obvious and conventional.
  scores:
    playful: 10
    nostalgic: 7
    technical: 0
    organic: 6
    editorial: 8
    pixel: 0
    illustrative: 10
    texture: 8
    bold: 8
    commerce: 9
    density: 4
  implementationComplexity: high
  compatibleSecondaryStyles:
  - playful-risograph
  - cat-product-collage
  - cartoon-campaign
  incompatibleSecondaryStyles:
  - terminal-community
  - glitch-fashion at high strength
  - quiet luxury minimalism
  fallbackBehavior: If full manga illustration is unavailable, use original flat food illustration plus one simple mascot
    and preserve the warm palette, perspective, and handwritten headline system.
  failureModes:
  - character-only hero with food as prop
  - generic anime stock art
  - menus hidden in speech bubbles
  - soft glass order cards
- id: post-digital-type-collage
  referenceOrder: 31
  name: Post-Digital Type Collage
  aliases:
  - experimental typography poster
  - Swiss pixel editorial
  - mixed bitmap grotesk poster
  - conceptual object collage
  referenceVisual: White field with huge mixed clean sans and pixelated black typography, selective blue text highlight blocks,
    black stars, thin diagram lines, circled numbers, and scattered photoreal object cutouts such as duck, tomato, ladybug,
    bananas, camera, cherry, cone, and fish.
  summary: A conceptual typography-first editorial system combining Swiss white-space discipline, bitmap wordforms, clean
    grotesk type, diagram annotations, and absurd everyday-object cutouts.
  description: A post-digital poster language where type-scale, pixelation, and object juxtaposition create the idea. Decoration
    is sparse but intentionally strange.
  designPhilosophy: Use typography as the main architecture. Introduce a limited number of ordinary-object cutouts as conceptual
    punctuation, not as product cards or stock decoration.
  brandPersonality:
  - conceptual
  - graphic
  - experimental
  - smart
  - internet-native
  - editorial
  emotionalTone:
  - dry
  - playful
  - unexpected
  - clean
  - provocative
  bestFor:
  - design portfolios
  - creative studios
  - type showcases
  - cultural campaigns
  - art schools
  - editorial microsites
  avoidFor:
  - conservative enterprise
  - healthcare
  - transaction-heavy commerce
  - long documentation
  audience:
  - designers
  - creative students
  - culture audiences
  - typography enthusiasts
  - art directors
  selectionProfile:
    pickWhen:
    - type is the primary content
    - the brand can tolerate conceptual weirdness
    - white space is acceptable
    - original object cutouts can support the concept
    rejectWhen:
    - dense controls dominate
    - formal institutional tone is required
    - random object collage would confuse the audience
    contentDensityFit:
      level: medium
      score: 5
      note: Can support structured project lists if large type and quiet space alternate.
    mediaAssetFit:
      score: 7
      ideal:
      - original object cutouts
      - bitmap type treatments
      - diagram symbols
      minimum: Can work with typography alone if object cutouts are unavailable.
    interactionFit:
      score: 5
      note: Good for portfolios and light interactions; task UI should be calmer.
    accessibilityFit:
      score: 9
      note: White field and black type are accessible; pixel display must remain short.
    implementationBudget: medium
  palette:
    background: '#F8F8F6'
    surface: '#FFFFFF'
    text: '#050505'
    muted_text: '#525252'
    secondary: '#2E69E8'
    accent: '#111111'
    dark: '#050505'
    line: '#111111'
  typography:
    display:
      direction: mix of clean grotesk and intentionally pixelated bitmap display
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean grotesk sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: tiny diagram labels and circled numbers
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 2
  layout:
    grid: large typographic poster grid with scattered object anchors
    alignment: asymmetric but baseline-disciplined
    whitespace: very high
    overlap: type/object overlap selective
    sectionRhythm: giant mixed-type statement -> conceptual object field -> project/index modules -> sparse footer
  hero:
    visualPriority: type-first
    formula: white field + giant mixed pixel/clean typography + one blue highlight block + 4-8 small object cutouts + black
      stars/number annotations
    ctaCount: 0
  components:
    navigation: minimal top edge
    cards: avoid cards; use project rows, poster bands, index labels
    buttons: simple black/blue text controls
    forms: plain white fields with black rules
    badges: circled numbers, stars, arrows, blue selection boxes
  media:
    photography: object cutouts only, isolated and crisp
    illustration: rare; mostly typographic
    icons: thin diagram icons
    texture:
    - subtle paper texture
    textureStrength: 0-2%
  surfaces:
    borders: 1px black rules
    radius: 0-4px
    shadows: none
  motion:
  - pixel word assemble
  - blue selection drag
  - object nudge
  - short cursor-like reveal
  responsive:
  - keep giant type
  - reduce object count
  - stack statement lines
  - preserve large white margins
  accessibilityRisks:
  - pixelating body text
  - object cutouts obscuring controls
  - using too many unrelated objects
  signatureElements:
  - huge mixed pixel/clean type
  - white field
  - blue selection highlight
  - small everyday object cutouts
  - black stars
  - diagram lines and circled numbers
  recognitionHeuristics:
  - Typography must remain the dominant visual mass.
  - Objects should feel conceptually placed, not like product photography.
  - The page should stay mostly white and black with very limited blue.
  scores:
    playful: 7
    nostalgic: 8
    technical: 4
    organic: 1
    editorial: 10
    pixel: 8
    illustrative: 3
    texture: 1
    bold: 9
    commerce: 2
    density: 5
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - pixel-pastoral
  - glitch-fashion
  - retro-mac-editorial
  incompatibleSecondaryStyles:
  - playful-risograph at high strength
  - organic-garden-commerce at high strength
  - cartoon-campaign
  fallbackBehavior: If object cutouts are unavailable, rely on typographic scale, pixel/clean contrast, blue selection marks,
    stars, and numbered annotations rather than adding generic illustrations.
  failureModes:
  - pixelating everything
  - random meme-object spam
  - blue gradient instead of flat selection blocks
  - turning each phrase into a card
- id: scrapbook-portfolio
  referenceOrder: 32
  name: Scrapbook Portfolio Editorial
  aliases:
  - student design portfolio
  - graph-paper resume
  - stationery portfolio
  - playful designer CV
  referenceVisual: Pale cream graph-paper background with a cobalt-blue textured banner, chunky hand-drawn cream/coral type,
    cat sticker, binder clip, bunting flags, outlined skill icons, profile photo framed like a stamp, progress bars, and project-category
    stickers.
  summary: A cheerful portfolio/resume system combining graph paper, textured paint panels, stationery props, sticker labels,
    hand-drawn display type, and structured information modules.
  description: A scrapbook-meets-design-school portfolio language where personality lives in stationery and illustration while
    resume information stays neatly gridded.
  designPhilosophy: Use a playful material shell around a highly organized information core. Decorative props should frame
    sections without disrupting CV/portfolio readability.
  brandPersonality:
  - creative
  - friendly
  - student-like
  - organized
  - playful
  - crafty
  emotionalTone:
  - cheerful
  - approachable
  - personal
  - energetic
  - optimistic
  bestFor:
  - student portfolios
  - designer resumes
  - illustrator sites
  - creative CVs
  - school showcases
  - personal brands
  avoidFor:
  - executive corporate sites
  - banking
  - medical systems
  - dense enterprise tools
  audience:
  - recruiters for creative roles
  - design students
  - portfolio viewers
  - creative agencies
  selectionProfile:
    pickWhen:
    - portfolio/resume content needs personality
    - graph/stationery motifs fit
    - skills/projects require structured scanning
    - custom icons/labels can be created
    rejectWhen:
    - formal executive tone is mandatory
    - highly complex product interaction dominates
    - the visual identity must be ultra-minimal
    contentDensityFit:
      level: medium-high
      score: 7
      note: Naturally supports profile, skills, timeline, software bars, and project taxonomy.
    mediaAssetFit:
      score: 7
      ideal:
      - profile photo
      - original doodle icons
      - paper/stationery props
      minimum: Can work with typography/icons and one portrait.
    interactionFit:
      score: 7
      note: Good for navigation, filters, and project browsing.
    accessibilityFit:
      score: 9
      note: Structured information can remain highly readable.
    implementationBudget: medium
  palette:
    background: '#F6F4B7'
    surface: '#1D95CF'
    text: '#2E6CA5'
    muted_text: '#6F6B4F'
    secondary: '#F37E63'
    accent: '#A8D96B'
    dark: '#31526D'
    line: '#AFC0A6'
  typography:
    display:
      direction: chunky hand-drawn rounded display
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean humanist sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: typewriter/mono labels and handwritten notes
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: 12-column resume grid over graph paper
    alignment: organized modules with playful offsets
    whitespace: medium-high
    overlap: small sticker overlaps only
    sectionRhythm: hero banner -> about/profile grid -> skills/resume data -> project category field -> portfolio work
  hero:
    visualPriority: portfolio-identity-first
    formula: graph paper + painted cobalt banner + chunky display name/mark + small sticker/clip props + compact profile module
    ctaCount: 1
  components:
    navigation: compact category tabs/labels
    cards: resume sections, project strips, icon groups, progress bars
    buttons: sticker-tab controls with clear labels
    forms: plain cream/white inputs on grid
    badges: binder clips, labels, stamp frames, bunting, paper clips
  media:
    photography: portrait/profile photo and project imagery
    illustration: small cheerful doodles and line icons
    icons: outlined coral/blue skill icons
    texture:
    - graph paper
    - paint/print grain
    textureStrength: 2-5%
  surfaces:
    borders: 1-2px colored rules
    radius: 6-14px
    shadows: small paper shadow only
  motion:
  - sticker slide
  - clip wiggle
  - project label pop
  - progress bar fill
  responsive:
  - stack resume columns
  - preserve graph-paper rhythm
  - reduce props
  - keep skill labels at readable size
  accessibilityRisks:
  - tiny resume text
  - decorations covering contact info
  - progress bars without text labels
  signatureElements:
  - pale graph paper
  - cobalt textured banner
  - chunky playful display
  - stationery props
  - outlined skill icons
  - structured resume modules
  recognitionHeuristics:
  - The page should look like a designer assembled a portfolio notebook, not a dashboard theme.
  - Resume information must remain easy to scan.
  - Graph paper should be subtle, not a noisy full-opacity grid.
  scores:
    playful: 9
    nostalgic: 7
    technical: 3
    organic: 5
    editorial: 8
    pixel: 1
    illustrative: 7
    texture: 7
    bold: 7
    commerce: 2
    density: 7
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - paper-cut-editorial
  - retro-browser-type-specimen
  - kawaii-recruitment-poster
  incompatibleSecondaryStyles:
  - glitch-fashion at high strength
  - terminal-community at high strength
  - luxury minimalism
  fallbackBehavior: If stationery assets are limited, retain graph paper, painted color panels, hand-drawn type, and a structured
    resume grid with a small original icon set.
  failureModes:
  - turning every resume field into a card
  - using childish stickers around important contact info
  - graph grid too dark
  - overdecorating project thumbnails
- id: european-color-matching
  referenceOrder: 33
  name: European Retro Color Matching
  aliases:
  - European color poster
  - teal modular editorial
  - retro color-theory graphic
  - restrained neo-brutalist palette
  referenceVisual: Deep teal rounded poster panels with muted aqua and pale cream blocks, huge geometric sans Chinese/Latin
    typography, a large cream circle, oversized numeral 06, sparse symbols, and almost no texture.
  summary: A restrained modular editorial system built from deep teal, muted aqua, pale cream, oversized geometric type, simple
    circles, large numerals, and clean rounded fields.
  description: A color-theory-led graphic language that feels retro-European and contemporary at once, using very few shapes
    and extremely confident palette proportions.
  designPhilosophy: Let color blocking and typography do almost everything. Avoid decorative illustration unless it is reduced
    to a single symbol.
  brandPersonality:
  - graphic
  - mature
  - modern-retro
  - restrained
  - systematic
  - editorial
  emotionalTone:
  - calm
  - confident
  - cultured
  - clean
  - balanced
  bestFor:
  - brand systems
  - design studios
  - color guides
  - editorial portfolios
  - architecture/culture sites
  - minimal campaigns
  avoidFor:
  - mascot-heavy kids brands
  - highly illustrative storytelling
  - dense commerce catalogs
  - gaming communities
  audience:
  - design professionals
  - culture audiences
  - brand clients
  - mature creative consumers
  selectionProfile:
    pickWhen:
    - color system is central
    - the brand wants expressive minimalism
    - large typography and simple shapes are enough
    - content is low-medium density
    rejectWhen:
    - illustration is required to communicate
    - audience expects playful characters
    - very dense task UI dominates
    contentDensityFit:
      level: medium
      score: 5
      note: Can carry structured brand/case-study information if section rhythm stays simple.
    mediaAssetFit:
      score: 4
      ideal:
      - typography
      - simple geometric SVG shapes
      minimum: Does not require photography or custom illustration.
    interactionFit:
      score: 7
      note: Strong for portfolios and brand systems; controls can remain simple.
    accessibilityFit:
      score: 10
      note: Excellent contrast and clean geometry support accessibility.
    implementationBudget: low-medium
  palette:
    background: '#055254'
    surface: '#5FA09D'
    text: '#E8E3B5'
    muted_text: '#6FA6A3'
    secondary: '#F4EDC4'
    accent: '#5FA09D'
    dark: '#033F40'
    line: '#0B5A59'
  typography:
    display:
      direction: oversized geometric sans with multilingual composition
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean grotesk sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: small technical labels and numerals
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 2
  layout:
    grid: large rounded modular color fields over a simple grid
    alignment: asymmetric typographic blocks
    whitespace: high
    overlap: minimal
    sectionRhythm: dark color block -> large type/circle -> split aqua/cream information panels -> quiet footer
  hero:
    visualPriority: color + type-first
    formula: deep teal field + giant multilingual type + one large cream circle + small top labels + oversized numeral
    ctaCount: 0
  components:
    navigation: minimal text links
    cards: large flat color modules, not cards
    buttons: flat text or outlined controls
    forms: simple cream/aqua inputs
    badges: minimal copyright/globe/line symbols
  media:
    photography: rare; monochrome or duotone if used
    illustration: almost none
    icons: simple geometric symbols
    texture:
    - none or extremely subtle paper grain
    textureStrength: 0-2%
  surfaces:
    borders: none or 1px same-palette rules
    radius: 22-48px on large sections, not every component
    shadows: none
  motion:
  - color panel slide
  - type mask reveal
  - number count
  - line draw
  responsive:
  - stack large color fields
  - keep typography oversized
  - preserve palette ratio
  - avoid shrinking circle/symbols into clutter
  accessibilityRisks:
  - muted text too close in tone
  - rounded modules mistaken for SaaS cards
  - oversized type hiding semantic meaning
  signatureElements:
  - deep teal field
  - muted aqua panel
  - pale cream circle/panel
  - giant geometric typography
  - oversized numeral
  - minimal symbols
  recognitionHeuristics:
  - The design should remain recognizable with only three main colors.
  - There should be almost no decorative illustration.
  - Rounded geometry must feel like poster composition, not card UI.
  scores:
    playful: 3
    nostalgic: 7
    technical: 4
    organic: 2
    editorial: 9
    pixel: 0
    illustrative: 1
    texture: 1
    bold: 7
    commerce: 3
    density: 5
  implementationComplexity: low-medium
  compatibleSecondaryStyles:
  - retro-mac-editorial
  - paper-cut-editorial
  - post-digital-type-collage
  incompatibleSecondaryStyles:
  - cartoon-campaign at high strength
  - playful-risograph at high strength
  - y2k-portfolio-collage at high strength
  fallbackBehavior: If the exact display face is unavailable, preserve the giant geometric scale, teal/aqua/cream palette,
    large circular form, and sparse symbol system.
  failureModes:
  - adding gradients
  - filling modules with cards
  - too many accent colors
  - using decorative icons everywhere
- id: pixel-flower-editorial
  referenceOrder: 34
  name: Pixel Flower Editorial
  aliases:
  - romantic pixel poster
  - minimal bitmap floral editorial
  - blue serif pixel collage
  - digital flower poster
  referenceVisual: Saturated royal-blue field with a huge elegant cream serif word outside, tiny uppercase sans labels around
    it, scattered low-resolution red/yellow flowers, and one oversized pixel flower interrupting the typography.
  summary: A minimalist romantic editorial style that contrasts elegant serif typography with crude pixel flowers on a single
    saturated color field.
  description: A low-resolution poetic system where only a few pixel objects interrupt an otherwise refined fashion-editorial
    composition.
  designPhilosophy: 'Keep the page extremely simple: one saturated field, one huge serif word, a handful of pixel flowers,
    and tiny supporting labels.'
  brandPersonality:
  - romantic
  - minimal
  - nostalgic
  - digital
  - editorial
  - poetic
  emotionalTone:
  - dreamy
  - hopeful
  - quiet
  - strange
  - refined
  bestFor:
  - music microsites
  - fashion campaigns
  - poetry projects
  - event posters
  - creative portfolios
  - romantic digital experiences
  avoidFor:
  - dense commerce
  - enterprise tools
  - documentation
  - formal government/finance
  audience:
  - culture audiences
  - music/fashion fans
  - designers
  - younger creative users
  selectionProfile:
    pickWhen:
    - one short emotional phrase can dominate
    - pixel art fits the concept
    - low-density layout is acceptable
    - a saturated single-color field works
    rejectWhen:
    - long copy is necessary
    - many controls must be visible
    - pixel imagery would undermine trust
    contentDensityFit:
      level: low
      score: 2
      note: Designed for sparse poster-like pages with huge pauses.
    mediaAssetFit:
      score: 5
      ideal:
      - small pixel flowers
      - original bitmap symbols
      minimum: Can be built with a tiny custom pixel asset set.
    interactionFit:
      score: 2
      note: Best for passive browsing and storytelling.
    accessibilityFit:
      score: 8
      note: Simple high contrast is strong; avoid using tiny labels as required navigation.
    implementationBudget: low
  palette:
    background: '#1740C0'
    surface: '#1740C0'
    text: '#F5F0DE'
    muted_text: '#E8E2D6'
    secondary: '#F2D12B'
    accent: '#D92C2E'
    dark: '#132E87'
    line: '#F5F0DE'
  typography:
    display:
      direction: huge elegant high-contrast serif
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean narrow sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: tiny uppercase sans labels
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 2
  layout:
    grid: sparse poster grid with distant text anchors
    alignment: center-left giant word with scattered bitmap flora
    whitespace: extreme
    overlap: one pixel flower may overlap display word
    sectionRhythm: single blue hero -> quiet copy field -> optional minimal project/song list -> closing phrase
  hero:
    visualPriority: type-first
    formula: royal-blue field + giant cream serif word + one oversized yellow pixel flower + several tiny red/yellow pixel
      flowers + small uppercase labels
    ctaCount: 0
  components:
    navigation: almost invisible text links
    cards: avoid cards
    buttons: tiny flat text controls
    forms: plain solid-color forms if unavoidable
    badges: pixel flowers only
  media:
    photography: rare; could use grainy lifestyle photo only in separate section
    illustration: pixel flowers/symbols only
    icons: minimal tiny bitmap icons
    texture:
    - optional film grain
    textureStrength: 0-3%
  surfaces:
    borders: none
    radius: 0-4px
    shadows: none
  motion:
  - pixel flower step-in
  - serif word reveal
  - slow tiny flower drift
  responsive:
  - preserve oversized word
  - reduce flower count
  - move tiny labels to safe margins
  - keep single-color field dominant
  accessibilityRisks:
  - tiny labels essential to navigation
  - serif word too thin on low-quality displays
  - overusing pixel art until it becomes game UI
  signatureElements:
  - royal-blue field
  - huge cream serif word
  - oversized pixel flower
  - scattered tiny pixel flowers
  - tiny uppercase labels
  - extreme negative space
  recognitionHeuristics:
  - At thumbnail size the page should read as serif editorial first, pixel art second.
  - Pixel flowers must remain sparse.
  - The design should not resemble a game interface.
  scores:
    playful: 6
    nostalgic: 9
    technical: 2
    organic: 5
    editorial: 10
    pixel: 9
    illustrative: 4
    texture: 2
    bold: 8
    commerce: 1
    density: 1
  implementationComplexity: low
  compatibleSecondaryStyles:
  - pixel-pastoral
  - paper-cut-editorial
  - post-digital-type-collage
  incompatibleSecondaryStyles:
  - cartoon-campaign at high strength
  - terminal-community at high strength
  - playful-risograph at high strength
  fallbackBehavior: If a pixel-flower font/asset is unavailable, create a few original nearest-neighbor floral SVG/canvas
    sprites and keep typography clean and elegant.
  failureModes:
  - making all typography pixelated
  - adding many pixel icons
  - using multiple background colors
  - turning the page into retro game UI
- id: botanical-papercut-typography
  referenceOrder: 35
  name: Botanical Papercut Typography
  aliases:
  - plant-letter collage
  - garden cut-paper type
  - botanical word art
  - handmade eco typography
  referenceVisual: Warm cream poster with irregular green/brown/orange letters built from leaves, pots, trees, cactus, books,
    flowers, and a bicycle integrated into the word composition, framed by a thin border and tiny mono captions.
  summary: A handcrafted botanical type system where letters themselves are assembled from plants, objects, and cut-paper
    forms on warm cream stock.
  description: 'An organic evolution of paper-cut editorial: instead of placing botanical graphics around type, botanical
    objects become the type.'
  designPhilosophy: Build one hero word as an original object-letter composition. Keep everything else sparse so the crafted
    typography remains legible.
  brandPersonality:
  - organic
  - craft-led
  - playful
  - eco-minded
  - editorial
  - artistic
  emotionalTone:
  - warm
  - whimsical
  - earthy
  - human
  - hopeful
  bestFor:
  - eco brands
  - gardening projects
  - creative studios
  - sustainable campaigns
  - bike/outdoor brands
  - editorial posters
  avoidFor:
  - dense enterprise tools
  - banking
  - medical portals
  - high-frequency ecommerce
  audience:
  - eco-conscious consumers
  - design audiences
  - garden/outdoor communities
  - creative viewers
  selectionProfile:
    pickWhen:
    - the brand can use custom illustrative lettering
    - nature/objects are conceptually relevant
    - one short word or phrase can dominate
    - handmade materiality is desired
    rejectWhen:
    - long textual headings are required repeatedly
    - no illustration budget exists
    - formal institutional trust dominates
    contentDensityFit:
      level: low
      score: 2
      note: Best for one or two large crafted typographic moments.
    mediaAssetFit:
      score: 8
      ideal:
      - custom object-letter illustration
      - plant/flower shapes
      - paper texture
      minimum: Can work with a smaller original object alphabet or one hero word.
    interactionFit:
      score: 3
      note: Best for campaigns and storytelling; controls stay outside the crafted type.
    accessibilityFit:
      score: 8
      note: Ensure semantic text equivalent exists and body copy remains conventional.
    implementationBudget: high
  palette:
    background: '#F5F0C9'
    surface: '#F9F3D4'
    text: '#4A5A2B'
    muted_text: '#3E4034'
    secondary: '#6E7937'
    accent: '#E65B32'
    dark: '#4C3B24'
    line: '#5E5A42'
  typography:
    display:
      direction: custom cut-paper/object-built display lettering
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: warm humanist sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: tiny mono/editorial captions
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: sparse framed poster grid
    alignment: centered crafted word with small caption block
    whitespace: extreme
    overlap: object forms overlap within letters only
    sectionRhythm: crafted word hero -> clean story band -> object/plant feature -> quiet footer
  hero:
    visualPriority: letterform-first
    formula: cream paper + one giant botanical/object-built word + integrated bicycle/plant forms + tiny mono caption + thin
      frame
    ctaCount: 0
  components:
    navigation: quiet text only
    cards: paper strips and image/illustration bands
    buttons: small flat labels
    forms: clean rectangular fields
    badges: small flowers, leaves, handmade arrows
  media:
    photography: optional warm tactile photography
    illustration: cut-paper botanical/object illustration
    icons: rough outline botanical symbols
    texture:
    - paper grain
    - ink irregularity
    textureStrength: 2-5%
  surfaces:
    borders: 1px warm ink border
    radius: 0-10px
    shadows: subtle paper shadow only
  motion:
  - leaf/letter assemble
  - paper slide
  - tiny flower pop
  - 1deg hover shift
  responsive:
  - keep one crafted word per viewport
  - reduce object complexity
  - use semantic text behind visual word art
  - preserve cream/earth palette
  accessibilityRisks:
  - crafted letters carrying long essential text
  - complex object shapes hurting legibility
  - too many plant decorations outside the word
  signatureElements:
  - cream paper
  - object-built green/brown letters
  - flowers/leaves integrated into type
  - bicycle/object forms as glyphs
  - thin poster frame
  - tiny mono captions
  recognitionHeuristics:
  - The typography itself must visibly contain botanical/object forms.
  - The result should feel handmade, not like a normal font with plant stickers.
  - Supporting layout must stay sparse.
  scores:
    playful: 8
    nostalgic: 6
    technical: 1
    organic: 10
    editorial: 10
    pixel: 0
    illustrative: 10
    texture: 8
    bold: 8
    commerce: 4
    density: 2
  implementationComplexity: high
  compatibleSecondaryStyles:
  - paper-cut-editorial
  - organic-garden-commerce
  - handdrawn-travel-zine
  incompatibleSecondaryStyles:
  - terminal-community at high strength
  - neo-future-aigc
  - glitch-fashion at high strength
  fallbackBehavior: If a full object alphabet is too expensive, create one original hero word as SVG artwork and use standard
    readable typography elsewhere.
  failureModes:
  - adding generic leaf icons around normal text
  - building every heading as artwork
  - too many colors
  - losing letter readability
- id: psychedelic-floral-wordmark
  referenceOrder: 36
  name: Psychedelic Floral Wordmark
  aliases:
  - flower-power lettering
  - 70s botanical wordmark
  - organic yellow-on-black type
  - psychedelic floral logo
  referenceVisual: Pure black field with a saturated yellow hand-drawn SUN FLOWER wordmark, soft irregular 60s/70s letterforms,
    and flowers/vines physically growing through and replacing parts of the letters.
  summary: A bold minimal wordmark system using only black, yellow, organic psychedelic lettering, and integrated floral forms.
  description: A retro flower-power language where the identity is almost entirely one custom typographic object.
  designPhilosophy: Do less. One black field and one sculptural yellow floral wordmark should carry most of the page. Supporting
    UI stays extremely quiet.
  brandPersonality:
  - retro
  - organic
  - bold
  - artistic
  - musical
  - free-spirited
  emotionalTone:
  - warm
  - psychedelic
  - sunny
  - confident
  - handmade
  bestFor:
  - music projects
  - festival campaigns
  - flower brands
  - creative studios
  - fashion capsules
  - poster microsites
  avoidFor:
  - dense apps
  - enterprise software
  - formal finance
  - healthcare portals
  audience:
  - music/festival audiences
  - creative communities
  - fashion/culture consumers
  - botanical brand audiences
  selectionProfile:
    pickWhen:
    - a short brand word can dominate
    - custom lettering is possible
    - two-color identity fits
    - retro botanical mood is desired
    rejectWhen:
    - long functional copy dominates
    - brand cannot use psychedelic associations
    - high information density is needed
    contentDensityFit:
      level: low
      score: 1
      note: Best for identity-led pages with very little copy.
    mediaAssetFit:
      score: 7
      ideal:
      - custom wordmark lettering
      - floral vector shapes
      minimum: Can be built from one original SVG wordmark and standard body text.
    interactionFit:
      score: 2
      note: Interaction should be minimal and almost invisible.
    accessibilityFit:
      score: 9
      note: Excellent contrast; ensure the logo has semantic text alternative.
    implementationBudget: medium
  palette:
    background: '#000000'
    surface: '#000000'
    text: '#FFE31A'
    muted_text: '#F7E9A6'
    secondary: '#FFE31A'
    accent: '#FFE31A'
    dark: '#000000'
    line: '#FFE31A'
  typography:
    display:
      direction: organic wavy 60s/70s hand-drawn display
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: simple neutral sans
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: tiny understated sans
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 2
  layout:
    grid: single-object poster composition
    alignment: centered or slightly asymmetric wordmark
    whitespace: extreme
    overlap: flowers/vines overlap letters by design
    sectionRhythm: wordmark hero -> quiet story/merch band -> black/yellow CTA/footer
  hero:
    visualPriority: wordmark-first
    formula: pure black field + giant yellow organic floral wordmark with flowers/vines integrated into letters
    ctaCount: 0
  components:
    navigation: nearly invisible
    cards: avoid cards; use bands and merch specimens
    buttons: simple yellow/black controls
    forms: plain high-contrast fields
    badges: floral marks only
  media:
    photography: rare, duotone if used
    illustration: flat yellow floral/leaf shapes integrated into type
    icons: minimal botanical symbols
    texture:
    - none or faint print grain
    textureStrength: 0-2%
  surfaces:
    borders: none
    radius: 0-4px
    shadows: none
  motion:
  - vine grow
  - flower bloom
  - wordmark mask reveal
  responsive:
  - keep wordmark large
  - avoid shrinking decorative counters too far
  - stack supporting content below
  - maintain black/yellow dominance
  accessibilityRisks:
  - animated bloom too distracting
  - flower shapes reducing word recognition
  - yellow used on too much small text if contrast/legibility suffers
  signatureElements:
  - black field
  - yellow psychedelic lettering
  - integrated flowers
  - wavy organic glyphs
  - almost no secondary content
  recognitionHeuristics:
  - The page should be recognizable from the wordmark alone.
  - No third major color should be introduced without a project-specific reason.
  - Floral forms must be part of the letter construction.
  scores:
    playful: 7
    nostalgic: 10
    technical: 0
    organic: 10
    editorial: 8
    pixel: 0
    illustrative: 7
    texture: 2
    bold: 9
    commerce: 3
    density: 1
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - botanical-papercut-typography
  - paper-cut-editorial
  - pixel-flower-editorial
  incompatibleSecondaryStyles:
  - terminal-community at high strength
  - neo-future-aigc at high strength
  - y2k-portfolio-collage
  fallbackBehavior: If custom lettering cannot be produced, use a bold organic display face plus original yellow vine/flower
    SVGs that physically weave through the word rather than sitting beside it.
  failureModes:
  - adding rainbow psychedelic gradients
  - using many floral illustrations
  - generic 70s font with no integration
  - turning every section into a logo lockup
- id: folk-fish-poster
  referenceOrder: 37
  name: Hand-Painted Folk Poster
  aliases:
  - naive fish poster
  - folk illustration editorial
  - hand-painted print graphic
  - childlike indie poster
  referenceVisual: Deep cobalt-blue square poster with rough cream hand-painted words SOMETHING FISHY IS GOING ON, a large
    flat orange fish, yellow/teal line details, and small wavy doodle marks.
  summary: A naïve folk-graphic system using a single deep color field, rough hand-painted lettering, one oversized flat illustration,
    and intentionally imperfect brush edges.
  description: A simple indie-print language where charming imperfection and bold flat color matter more than polish or UI
    sophistication.
  designPhilosophy: Use one phrase, one illustrated object/animal, and two or three flat colors. Preserve rough edges and
    leave the composition blunt and direct.
  brandPersonality:
  - naive
  - friendly
  - handmade
  - playful
  - indie
  - direct
  emotionalTone:
  - funny
  - warm
  - casual
  - bold
  - childlike
  bestFor:
  - food brands
  - indie posters
  - kids publishing
  - small events
  - creative merchandise
  - restaurant specials
  avoidFor:
  - enterprise tools
  - luxury legal
  - finance
  - complex productivity apps
  audience:
  - families
  - creative audiences
  - indie shoppers
  - food/culture visitors
  selectionProfile:
    pickWhen:
    - the message can be short and witty
    - one simple illustrated object can carry the concept
    - handmade print feeling is desired
    - low content density is acceptable
    rejectWhen:
    - complex workflows dominate
    - premium luxury precision is required
    - high-density copy is unavoidable
    contentDensityFit:
      level: low
      score: 2
      note: Best for short messages and campaign panels.
    mediaAssetFit:
      score: 6
      ideal:
      - one simple hand-painted illustration
      - rough lettering
      minimum: Can be produced from basic original vector/brush shapes.
    interactionFit:
      score: 4
      note: Good for simple CTA pages; not complex interaction.
    accessibilityFit:
      score: 9
      note: Strong contrast and simple forms are accessible.
    implementationBudget: low
  palette:
    background: '#204C99'
    surface: '#204C99'
    text: '#F2E8D2'
    muted_text: '#F2E8D2'
    secondary: '#E97832'
    accent: '#F0C44E'
    dark: '#1B2742'
    line: '#F2E8D2'
  typography:
    display:
      direction: rough hand-painted uppercase display
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: simple friendly sans or same rough lettering for short labels
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: tiny doodle captions
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 2
  layout:
    grid: simple poster field
    alignment: left/top text with large object entering from side
    whitespace: medium
    overlap: minimal
    sectionRhythm: bold phrase -> object illustration -> short CTA/info band
  hero:
    visualPriority: phrase + object-first
    formula: cobalt field + rough cream headline + one oversized orange fish/object + 2-4 tiny doodle marks
    ctaCount: 1
  components:
    navigation: small text only
    cards: avoid cards; use flat color panels
    buttons: flat cream/orange control
    forms: plain high-contrast field
    badges: wavy marks, hand-drawn dots, tiny strokes
  media:
    photography: rare
    illustration: flat folk/naive illustration with rough painted edges
    icons: simple hand-painted symbols
    texture:
    - paper/paint grain
    textureStrength: 2-5%
  surfaces:
    borders: none or rough 1-2px edge
    radius: 0-6px
    shadows: none
  motion:
  - object bob
  - hand-letter reveal
  - tiny doodle wiggle
  responsive:
  - keep headline large
  - crop object boldly
  - reduce doodles
  - stack any utility content in a plain follow-up panel
  accessibilityRisks:
  - rough lettering used for long copy
  - illustration mistaken for interactive control
  - too many colors
  signatureElements:
  - deep cobalt field
  - rough cream lettering
  - large orange fish/object
  - flat folk shapes
  - tiny wavy doodles
  - imperfect painted edges
  recognitionHeuristics:
  - The design should feel hand-painted in one sitting, not digitally overworked.
  - One object must dominate the illustration layer.
  - Color count should remain extremely small.
  scores:
    playful: 9
    nostalgic: 7
    technical: 0
    organic: 6
    editorial: 7
    pixel: 0
    illustrative: 8
    texture: 7
    bold: 8
    commerce: 5
    density: 2
  implementationComplexity: low
  compatibleSecondaryStyles:
  - paper-cut-editorial
  - playful-risograph
  - botanical-papercut-typography
  incompatibleSecondaryStyles:
  - neo-future-aigc
  - terminal-community
  - glitch-fashion
  fallbackBehavior: If brush lettering is unavailable, use custom rough vector letters and a single flat original illustration
    while keeping the palette to blue/cream/orange plus one minor accent.
  failureModes:
  - smoothing every edge
  - adding realistic fish photography
  - using gradient shadows
  - placing content into rounded cards
- id: magical-girl-browser
  referenceOrder: 38
  name: Magical-Girl Retro Browser
  aliases:
  - kawaii desktop UI
  - Y2K magical-girl interface
  - cute OS editorial
  - bunny browser graphic
  referenceVisual: Cobalt-blue framed browser window with pale yellow grid workspace, bubbly Japanese white/blue display lettering,
    bunny/star mascots, folders and document icons, overlapping retro windows, danger popups, halftone blue blobs, and a game-like
    LIFE meter.
  summary: A dense playful Y2K desktop system combining early-browser/OS chrome, magical-girl mascots, bubbly display lettering,
    halftone textures, folders, popups, and small game HUD details.
  description: A kawaii retro-computing language where the interface itself becomes an illustrated magical-girl world while
    still preserving clear window hierarchy.
  designPhilosophy: Use one framed desktop scene, one giant bubbly wordmark, and one coherent bunny/star icon family. The
    OS metaphor should organize content rather than becoming random window clutter.
  brandPersonality:
  - kawaii
  - internet-native
  - nostalgic
  - playful
  - collectible
  - youthful
  emotionalTone:
  - cute
  - busy
  - energetic
  - magical
  - retro
  bestFor:
  - creative portfolios
  - game/community pages
  - type showcases
  - youth campaigns
  - digital collectibles
  - indie software marketing
  avoidFor:
  - formal enterprise
  - banking
  - healthcare
  - legal portals
  - dense productivity systems
  audience:
  - Y2K culture audiences
  - gamers
  - designers
  - anime/magical-girl fans
  - younger creative users
  selectionProfile:
    pickWhen:
    - retro browser/desktop metaphor fits
    - custom cute icons/mascots can be produced
    - content can be modular
    - the brand wants overt Y2K nostalgia
    rejectWhen:
    - serious trust conventions dominate
    - long forms/tables are primary
    - there is no coherent mascot/icon system
    contentDensityFit:
      level: medium
      score: 6
      note: Window modules can organize projects/features, but each viewport needs a clear primary window.
    mediaAssetFit:
      score: 9
      ideal:
      - bunny/star mascot SVGs
      - browser/window chrome
      - folder/document icons
      - halftone shapes
      minimum: Can be built from original UI chrome and a small mascot/icon set.
    interactionFit:
      score: 7
      note: Good for portfolios and playful software marketing if window controls stay understandable.
    accessibilityFit:
      score: 7
      note: High contrast helps, but small faux-OS labels must not carry critical information.
    implementationBudget: high
  palette:
    background: '#3159D8'
    surface: '#F2F0B8'
    text: '#FFFFFF'
    muted_text: '#3159D8'
    secondary: '#6DA0E8'
    accent: '#D6F35B'
    dark: '#2746A8'
    line: '#3159D8'
  typography:
    display:
      direction: bubbly rounded Japanese/Y2K display with blue outline
      weight: 700-950
      lineHeight: 0.78-1.0
      use: hero and short section statements only
    body:
      direction: clean rounded sans or compact mono
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: small retro-OS mono labels
      use: metadata, annotations, labels, and small supporting UI
    familyLimit: 3
  layout:
    grid: framed desktop/browser canvas with nested windows
    alignment: centered giant wordmark over modular OS scene
    whitespace: medium-low inside frame, high outside
    overlap: window and mascot overlap controlled
    sectionRhythm: browser hero -> project folders/windows -> warning/game HUD microsections -> clean footer
  hero:
    visualPriority: wordmark + desktop-scene-first
    formula: cobalt outer frame + pale yellow gridded browser workspace + huge bubbly white/blue wordmark + bunny/star mascots
      + folders/documents + one warning popup + LIFE meter
    ctaCount: 1
  components:
    navigation: browser tab/toolbar or small window-menu labels
    cards: retro window modules, folder groups, and project popups
    buttons: compact outlined OS-style controls
    forms: modern accessible fields placed inside a clean primary window
    badges: warning popups, star badges, bunny labels, LIFE hearts
  media:
    photography: rare; optional small project thumbnails inside windows
    illustration: bunny/star magical-girl mascots with flat blue/white/lime treatment
    icons: retro folder/document/window icons
    texture:
    - halftone
    - faint grid
    textureStrength: 4-10%
  surfaces:
    borders: 2-3px cobalt outlines
    radius: 8-20px on outer windows; 0-8px on small classic panes
    shadows: small hard window offset
  motion:
  - window pop
  - folder open
  - star twinkle
  - heart meter fill
  - short step reveal
  responsive:
  - simplify nested windows
  - keep one main window per viewport
  - reduce icon count
  - maintain large bubbly wordmark
  - move real navigation outside tiny faux-OS text
  accessibilityRisks:
  - fake popup labels too small
  - too many windows obscuring hierarchy
  - mascot animation distracting from content
  - retro chrome used as only navigation
  signatureElements:
  - cobalt browser frame
  - pale yellow grid workspace
  - bubbly Japanese wordmark
  - bunny/star mascots
  - folder/document icons
  - warning popup and LIFE meter
  recognitionHeuristics:
  - The page must read as a magical-girl desktop/browser world, not generic Y2K stickers.
  - One primary window or wordmark must dominate each viewport.
  - Retro UI chrome should be consistent and original, not copied from a real OS.
  scores:
    playful: 10
    nostalgic: 10
    technical: 5
    organic: 2
    editorial: 8
    pixel: 5
    illustrative: 10
    texture: 6
    bold: 9
    commerce: 4
    density: 6
  implementationComplexity: high
  compatibleSecondaryStyles:
  - retro-browser-type-specimen
  - retro-cartoon-type-specimen
  - dreamy-indie-software
  incompatibleSecondaryStyles:
  - glitch-fashion at high strength
  - organic-garden-commerce at high strength
  - formal corporate minimalism
  fallbackBehavior: If detailed magical-girl art is unavailable, use one original bunny/star mascot family, cobalt/yellow
    browser chrome, halftone blobs, folders, and a large bubbly wordmark.
  failureModes:
  - copying proprietary OS icons
  - mixing many unrelated kawaii assets
  - turning every section into a popup
  - making real controls tiny to match the retro UI
- id: cinematic-floral-research
  referenceOrder: 39
  name: Cinematic Floral Research
  aliases:
  - dreamy research meadow
  - floral tech editorial
  - nature intelligence landing page
  referenceVisual: Deep blue sky over a shallow-focus flower meadow, handwritten white hero lettering, tiny sans-serif utility UI, translucent dark navigation, and a minimal white CTA.
  summary: A premium nature-tech landing style that pairs cinematic shallow-focus photography with handwritten editorial type and an unusually restrained interface shell.
  description: The visual field does most of the emotional work. Product language sits lightly over an immersive photographic environment, using tiny precise navigation and one clear CTA so the experience feels calm, credible, and atmospheric rather than decorative.
  designPhilosophy: Let one cinematic environment become the interface. Use human handwriting for emotional positioning, clean sans-serif for facts and navigation, and extremely little chrome.
  brandPersonality:
  - intelligent
  - calm
  - premium
  - curious
  - natural
  - humane
  emotionalTone:
  - effortless
  - optimistic
  - spacious
  - cinematic
  - trustworthy
  bestFor:
  - research platforms
  - AI research tools
  - market intelligence landing pages
  - climate or nature technology
  - premium B2B marketing
  - thoughtful software launches
  avoidFor:
  - dense dashboards
  - utility-first admin tools
  - bargain retail
  - high-content news portals
  audience:
  - researchers
  - strategy teams
  - founders
  - analysts
  - design-aware B2B buyers
  selectionProfile:
    pickWhen:
    - one emotional photograph can explain the brand world
    - the page needs calm premium positioning rather than feature overload
    - the product can be described in one short promise above the fold
    rejectWhen:
    - critical information must appear immediately in dense tables
    - suitable cinematic photography is unavailable
    - the brand requires aggressive conversion tactics
    contentDensityFit:
      level: low-medium
      score: 4
      note: Best when the first viewport is sparse and later sections carry proof in calmer information bands.
    mediaAssetFit:
      score: 10
      ideal:
      - cinematic shallow-depth photography
      - floral or environmental imagery
      - subtle atmospheric video optional
      minimum: Requires one excellent hero image; mediocre stock photography destroys the style.
    interactionFit:
      score: 6
      note: Excellent for marketing and research discovery; complex tasks should transition into a calmer app shell.
    accessibilityFit:
      score: 8
      note: Strong if handwritten display text is large, semantic, and never used for instructions.
    implementationBudget: medium
  palette:
    background: '#07547C'
    surface: '#F5F5F1'
    text: '#FFFFFF'
    muted_text: '#D7E3E8'
    secondary: '#0A3145'
    accent: '#FFFFFF'
    dark: '#072536'
    line: 'rgba(255,255,255,0.24)'
  typography:
    display:
      direction: loose handwritten editorial script with imperfect rhythm
      weight: 500-700
      lineHeight: 0.95-1.08
      use: short emotional hero phrases only
    body:
      direction: precise modern grotesk
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: compact clean sans
      use: navigation, metadata, labels, evidence
    familyLimit: 2
  layout:
    grid: full-bleed cinematic canvas with a restrained centered content axis
    alignment: centered hero, utility navigation distributed horizontally
    whitespace: very high
    overlap: type may float over sky; never over visually noisy flower clusters
    sectionRhythm: immersive hero -> clean proof strip -> image-led evidence -> quiet CTA
  hero:
    visualPriority: environment-first
    formula: blue sky + flower meadow foreground + handwritten promise + tiny explanatory line + one compact white CTA
    ctaCount: 1
  components:
    navigation: translucent dark rounded bar with sparse links; avoid glass-heavy spectacle
    cards: rarely used; prefer flat editorial bands and image/text pairings
    buttons: small white capsule or quiet dark outline with strong contrast
    forms: clean light fields on solid surface, never placed directly over busy photography
    badges: tiny neutral labels only
  media:
    photography: cinematic, low-angle, shallow depth of field, saturated but natural
    illustration: none by default
    icons: tiny monochrome utility icons
    texture:
    - photographic bloom
    - subtle grain
    textureStrength: 1-3%
  surfaces:
    borders: nearly invisible
    radius: 18-28px on navigation and utility surfaces
    shadows: atmospheric image depth, almost no UI shadow
  motion:
  - slow focus drift
  - subtle meadow parallax
  - gentle text fade
  - restrained nav reveal
  responsive:
  - preserve the full-screen environmental read
  - keep the handwritten headline large but shorten line length
  - collapse nav into one compact control
  - move CTA above dense flower foreground if contrast drops
  accessibilityRisks:
  - text disappearing into bright clouds
  - handwritten heading becoming too thin
  - overusing blur on text-bearing surfaces
  signatureElements:
  - cinematic flower meadow
  - deep blue sky
  - handwritten white hero line
  - tiny precise sans UI
  - one minimal white CTA
  recognitionHeuristics:
  - At thumbnail size the page should read as a cinematic photograph with almost no visible interface clutter.
  - The hero phrase must feel human and handwritten, not like a generic script logo.
  - The interface chrome must remain secondary to the environment.
  scores:
    playful: 4
    nostalgic: 3
    technical: 5
    organic: 10
    editorial: 8
    pixel: 0
    illustrative: 1
    texture: 4
    bold: 6
    commerce: 4
    density: 2
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - dreamy-indie-software
  - organic-garden-commerce
  - handdrawn-travel-zine
  incompatibleSecondaryStyles:
  - terminal-community at high strength
  - retro-marketplace-pop
  - y2k-portfolio-collage
  fallbackBehavior: If cinematic media is limited, use one carefully art-directed botanical still with strong sky/negative space and preserve the handwritten-versus-grotesk type contrast.
  failureModes:
  - generic stock flowers
  - too many cards over the hero
  - frosted-glass overload
  - tiny low-contrast handwritten text

- id: monochrome-storybook-brand
  referenceOrder: 40
  name: Monochrome Storybook Brand
  aliases:
  - black-white illustrated homepage
  - storybook mascot landing
  - indie character brand
  referenceVisual: A white rounded browser-like stage on black, giant textured black wordmark, hand-drawn fantasy characters, tiny orange flame/snack stickers, compact navigation, and two simple CTAs.
  summary: A character-first monochrome brand world where hand-drawn mascots and giant textured lettering carry nearly all of the personality while the interface stays extremely simple.
  description: The style behaves like an illustrated book cover placed inside a website frame. Black-and-white line art creates continuity between logo, characters, and navigation, while one tiny warm accent keeps the page from feeling sterile.
  designPhilosophy: Build one coherent illustrated universe, then keep the web interface quiet enough to let that universe breathe. Personality comes from drawing style and scale, not decorative UI effects.
  brandPersonality:
  - whimsical
  - story-driven
  - independent
  - mischievous
  - collectible
  - warm
  emotionalTone:
  - playful
  - nostalgic
  - curious
  - handmade
  bestFor:
  - indie games
  - toy brands
  - comics
  - character IP
  - collectible communities
  - children or family entertainment
  avoidFor:
  - analytics products
  - formal B2B
  - medical portals
  - serious financial services
  audience:
  - gamers
  - collectors
  - families
  - illustration fans
  - character-brand communities
  selectionProfile:
    pickWhen:
    - original character art is a core asset
    - the brand story matters more than feature density
    - monochrome can feel intentional rather than underdesigned
    rejectWhen:
    - there is no original illustration pipeline
    - the product requires dense transactional UI above the fold
    - brand trust depends on conventional corporate signals
    contentDensityFit:
      level: low-medium
      score: 4
      note: Works best with one story or campaign per section and short descriptive copy.
    mediaAssetFit:
      score: 10
      ideal:
      - original line-art characters
      - hand-inked wordmark
      - tiny accent stickers
      minimum: Requires a consistent character or object drawing system.
    interactionFit:
      score: 5
      note: Good for browsing and light conversion; complex product flows should use a separate conventional shell.
    accessibilityFit:
      score: 9
      note: Monochrome contrast is naturally strong if illustration never obscures controls.
    implementationBudget: medium-high
  palette:
    background: '#000000'
    surface: '#F7F6F2'
    text: '#111111'
    muted_text: '#5B5B58'
    secondary: '#FFFFFF'
    accent: '#FF7A23'
    dark: '#000000'
    line: '#111111'
  typography:
    display:
      direction: giant heavy hand-inked block display with rough fill texture
      weight: 900
      lineHeight: 0.75-0.90
      use: brand wordmark and hero only
    body:
      direction: readable bookish serif or neutral sans
      size: 16-18px
      lineHeight: 1.55-1.7
    utility:
      direction: tiny compact sans
      use: navigation and controls
    familyLimit: 3
  layout:
    grid: one framed stage inside a black viewport
    alignment: centered illustrated tableau with tiny utility header
    whitespace: high around character cluster
    overlap: characters may overlap wordmark; controls must remain clear
    sectionRhythm: framed hero -> illustrated chapter bands -> product/story cards -> simple black footer
  hero:
    visualPriority: character-world-first
    formula: giant monochrome wordmark + hand-drawn ensemble + one short brand sentence + two tiny CTAs
    ctaCount: 1-2
  components:
    navigation: thin text row with one compact black action button
    cards: illustrated chapter panels, book-page blocks, or merchandise tiles
    buttons: black/white rounded controls with tiny accent icon
    forms: plain white fields with black border
    badges: small flame, snack, star, or object stickers
  media:
    photography: none by default
    illustration: black ink line art with rough fill and expressive faces
    icons: hand-drawn monochrome icons
    texture:
    - ink grain
    - subtle paper fiber
    textureStrength: 3-7%
  surfaces:
    borders: 1-2px black
    radius: 18-28px on major frame, smaller on controls
    shadows: none or 1-2px hard ink shadow
  motion:
  - character blink
  - tiny sticker pop
  - page/scene slide
  - hand-drawn underline reveal
  responsive:
  - crop the cast intelligently instead of shrinking every character
  - keep one or two heroes visible per viewport
  - stack wordmark and character group when needed
  - preserve large white breathing room
  accessibilityRisks:
  - character art covering controls
  - tiny nav links
  - relying on orange stickers for state meaning
  signatureElements:
  - monochrome illustrated ensemble
  - giant rough black wordmark
  - rounded white stage on black
  - one tiny warm accent color
  - minimal utility UI
  recognitionHeuristics:
  - The page should feel like a storybook or comic cover before it feels like a website.
  - Black-and-white art must carry the brand identity; orange is punctuation only.
  - Navigation should be almost boring compared with the illustration.
  scores:
    playful: 9
    nostalgic: 7
    technical: 1
    organic: 6
    editorial: 8
    pixel: 0
    illustrative: 10
    texture: 6
    bold: 8
    commerce: 5
    density: 3
  implementationComplexity: medium-high
  compatibleSecondaryStyles:
  - paper-cut-editorial
  - illustration-zine-adventure
  - folk-fish-poster
  incompatibleSecondaryStyles:
  - neo-future-aigc at high strength
  - terminal-community
  - european-color-matching
  fallbackBehavior: If a full cast is unavailable, use one hero mascot plus three small supporting character/object vignettes in the same ink style.
  failureModes:
  - mixing unrelated illustration styles
  - adding color gradients everywhere
  - turning the stage into generic cards
  - using default icon libraries beside hand-drawn characters

- id: retro-game-manual-mascot
  referenceOrder: 41
  name: Retro Game Manual Mascot
  aliases:
  - chunky game-guide poster
  - mascot manual cover
  - retro gaming editorial
  referenceVisual: Warm cream field with giant black block lettering, lime-green secondary type, chunky 3D/cartoon mascot, red comic sticker accents, halftone grain, utility labels, and a black footer strip.
  summary: A game-guide editorial system that mixes heavy retro display typography, one chunky mascot render, comic labels, utility metadata, and low-fi print texture.
  description: The page should feel like a manual cover, collectible guide, or promotional insert rather than a polished game launcher. Typography and mascot share equal weight while metadata and labels create believable artifact detail.
  designPhilosophy: Use one dominant mascot, one blunt typographic block, and a small set of signal colors. Let print texture and label systems create nostalgia without reducing readability.
  brandPersonality:
  - energetic
  - collectible
  - cheeky
  - game-native
  - bold
  emotionalTone:
  - punchy
  - retro
  - playful
  - tactical
  bestFor:
  - game guides
  - gaming communities
  - character drops
  - game feature campaigns
  - merchandise launches
  - fan microsites
  avoidFor:
  - banking
  - healthcare
  - luxury professional services
  - data-heavy dashboards
  audience:
  - gamers
  - collectors
  - fandom communities
  - younger audiences
  selectionProfile:
    pickWhen:
    - a mascot or game object can dominate the composition
    - the campaign benefits from manual/guidebook nostalgia
    - blunt typography and print grain suit the brand
    rejectWhen:
    - visual seriousness is required
    - no mascot or original object render exists
    - long prose is the primary content
    contentDensityFit:
      level: low-medium
      score: 4
      note: Metadata can be dense, but the core message must remain extremely simple.
    mediaAssetFit:
      score: 9
      ideal:
      - original mascot render
      - bold display lettering
      - comic labels
      - grain/halftone overlay
      minimum: One strong mascot or object plus typography is required.
    interactionFit:
      score: 5
      note: Good for campaign browsing and promotional actions, not dense workflow tools.
    accessibilityFit:
      score: 7
      note: Keep high-contrast labels readable and never bury CTAs in sticker clutter.
    implementationBudget: medium
  palette:
    background: '#F0E7C7'
    surface: '#D8D2A8'
    text: '#191716'
    muted_text: '#5A574D'
    secondary: '#9CCB49'
    accent: '#E93A40'
    dark: '#111111'
    line: '#1B1A18'
  typography:
    display:
      direction: ultra-heavy geometric/industrial block display
      weight: 900
      lineHeight: 0.74-0.9
      use: giant headline and brand shorthand
    body:
      direction: compact condensed sans
      size: 16-18px
      lineHeight: 1.45-1.6
    utility:
      direction: narrow technical mono or condensed label font
      use: version numbers, manual notes, tags
    familyLimit: 3
  layout:
    grid: poster-like two-zone composition with headline left and mascot right
    alignment: asymmetrical but rectangular
    whitespace: medium
    overlap: stickers and mascot may overlap headline edges
    sectionRhythm: manual-cover hero -> feature labels -> stat/guide panels -> black utility footer
  hero:
    visualPriority: type + mascot co-dominant
    formula: cream poster + giant black/lime heading + one mascot + one red comic callout + tiny manual metadata
    ctaCount: 1
  components:
    navigation: compact black strip or tiny top utility labels
    cards: manual pages, dossier panels, sticker-labeled feature blocks
    buttons: blunt rectangles with black outline and hard offset
    forms: clean neutral controls outside high-noise poster zones
    badges: comic speech labels, stamped rectangles, hazard/issue markers
  media:
    photography: rare
    illustration: chunky 3D/cartoon mascot with simplified materials
    icons: blocky monochrome or game-manual pictograms
    texture:
    - halftone
    - paper grain
    textureStrength: 5-12%
  surfaces:
    borders: 2-4px black
    radius: 0-12px
    shadows: hard offset only
  motion:
  - mascot bob
  - sticker snap
  - issue-number count
  - manual page slide
  responsive:
  - stack type above mascot
  - preserve huge headline
  - reduce metadata before reducing the mascot
  - move footer utilities into a separate band
  accessibilityRisks:
  - low-contrast green type on cream
  - tiny issue metadata
  - CTA lost among stickers
  signatureElements:
  - cream paper field
  - giant black block type
  - lime secondary lettering
  - chunky mascot
  - red comic label
  - grainy manual texture
  recognitionHeuristics:
  - The composition should read as a collectible game manual cover at thumbnail size.
  - One mascot and one headline must dominate; everything else is evidence and flavor.
  - Print texture should be visible but never dirty enough to reduce text clarity.
  scores:
    playful: 9
    nostalgic: 8
    technical: 4
    organic: 1
    editorial: 8
    pixel: 2
    illustrative: 9
    texture: 8
    bold: 10
    commerce: 6
    density: 4
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - retro-cartoon-type-specimen
  - cartoon-campaign
  - terminal-community at subtle strength
  incompatibleSecondaryStyles:
  - cinematic-floral-research
  - organic-garden-commerce
  - dreamy-art-magazine
  fallbackBehavior: If 3D mascot art is unavailable, use a flat original mascot with the same chunky silhouette and keep manual typography/texture intact.
  failureModes:
  - generic esports neon
  - glossy sci-fi UI
  - too many mascots
  - weak display typography

- id: cinematic-anime-portfolio
  referenceOrder: 42
  name: Cinematic Anime Portfolio
  aliases:
  - painterly anime portfolio
  - illustrated film-cover portfolio
  - character-art portfolio hero
  referenceVisual: Painterly anime characters at a beach, muted cinematic palette, strong foreground composition, and oversized white brush-lettering reading like a portfolio cover.
  summary: A cinematic character-art portfolio style that treats the first viewport like an animated-film poster, with painterly illustration carrying the emotional narrative and brush lettering acting as a title card.
  description: The page begins as artwork rather than interface. UI is sparse and secondary. Projects then transition into gallery and case-study structures that preserve the painterly atmosphere without hiding navigation.
  designPhilosophy: Let the artist's visual world lead. The portfolio framework must disappear behind excellent illustration, then reappear as disciplined indexing and project detail when users need orientation.
  brandPersonality:
  - artistic
  - cinematic
  - personal
  - expressive
  - youthful
  emotionalTone:
  - intimate
  - summery
  - reflective
  - energetic
  bestFor:
  - illustrators
  - concept artists
  - animation artists
  - character designers
  - visual-development portfolios
  - indie game artists
  avoidFor:
  - enterprise products
  - formal agencies without strong visual work
  - finance
  - utility dashboards
  audience:
  - art directors
  - studios
  - recruiters
  - fans
  - creative collaborators
  selectionProfile:
    pickWhen:
    - the artist has strong character/environment work
    - portfolio emotion should precede metadata
    - project imagery can fill large viewports
    rejectWhen:
    - work samples are weak or inconsistent
    - case-study text is more important than visual work
    - fast utilitarian scanning is the only goal
    contentDensityFit:
      level: low-medium
      score: 4
      note: Hero and gallery should remain image-led; detailed project text belongs on dedicated case-study pages.
    mediaAssetFit:
      score: 10
      ideal:
      - large original illustrations
      - process sketches
      - cinematic crops
      minimum: Requires several strong original images at web resolution.
    interactionFit:
      score: 6
      note: Good for galleries, project navigation, and light filtering.
    accessibilityFit:
      score: 8
      note: Keep navigation and project metadata outside visually complex focal areas.
    implementationBudget: medium
  palette:
    background: '#2E3947'
    surface: '#EDE6DA'
    text: '#FFFFFF'
    muted_text: '#D7D4D0'
    secondary: '#7A8EA6'
    accent: '#F2C8C4'
    dark: '#1E242E'
    line: 'rgba(255,255,255,0.3)'
  typography:
    display:
      direction: expressive white brush lettering
      weight: 700-900
      lineHeight: 0.8-1.0
      use: cover titles and project chapter openers
    body:
      direction: quiet modern sans or restrained serif
      size: 16-19px
      lineHeight: 1.55-1.7
    utility:
      direction: tiny all-caps sans
      use: year, role, project type, navigation
    familyLimit: 3
  layout:
    grid: cinematic full-bleed hero followed by gallery index
    alignment: image-driven asymmetry
    whitespace: medium-high between projects
    overlap: brush title may cross image but never faces or key artwork
    sectionRhythm: film-cover hero -> gallery index -> project chapter -> process strip -> contact endcard
  hero:
    visualPriority: artwork-first
    formula: full-bleed character illustration + oversized brush title + tiny year/credit metadata
    ctaCount: 0-1
  components:
    navigation: tiny unobtrusive overlay or edge-aligned index
    cards: large image tiles with minimal metadata
    buttons: plain text or small outlined controls
    forms: simple contact form on quiet solid background
    badges: tiny role/year labels only
  media:
    photography: optional studio/process photos
    illustration: painterly anime/animation concept art
    icons: minimal monochrome line icons
    texture:
    - painted grain
    - subtle film grain
    textureStrength: 2-5%
  surfaces:
    borders: none or hairline
    radius: 0-10px
    shadows: none
  motion:
  - slow image drift
  - project title reveal
  - gallery crossfade
  - subtle cursor-follow crop shift
  responsive:
  - use alternate art crops for mobile
  - keep faces unobstructed
  - stack project metadata below images
  - preserve the brush-title scale without covering artwork
  accessibilityRisks:
  - text over complex illustration
  - too-small project labels
  - motion-sensitive image drift
  signatureElements:
  - cinematic anime artwork
  - white brush portfolio title
  - full-bleed cover composition
  - tiny disciplined metadata
  - gallery-first case-study structure
  recognitionHeuristics:
  - The first viewport must feel like an animation poster, not a portfolio template.
  - Project UI should become more structured only after the artwork establishes authorship.
  - Brush lettering should be used sparingly and at large scale.
  scores:
    playful: 6
    nostalgic: 4
    technical: 1
    organic: 5
    editorial: 9
    pixel: 0
    illustrative: 10
    texture: 5
    bold: 7
    commerce: 2
    density: 3
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - dreamy-art-magazine
  - illustration-zine-adventure
  - gallery-index-portfolio
  incompatibleSecondaryStyles:
  - terminal-community at high strength
  - retro-supermarket-sticker
  - european-color-matching at high strength
  fallbackBehavior: If only a few strong pieces exist, use one cinematic hero, a compact three-project gallery, and process sketches rather than padding with weak work.
  failureModes:
  - generic masonry gallery
  - too much UI chrome
  - brush type everywhere
  - cropping faces or focal art badly

- id: bold-foodtruck-editorial
  referenceOrder: 43
  name: Bold Food-Truck Editorial
  aliases:
  - retro catering campaign
  - food club editorial
  - hospitality neo-brutal
  referenceVisual: Warm off-white paper background, massive condensed black typography, candid pizza/beer photography, rounded image frames, lime and pink sticker accents, hand-sign icon, thin navigation, and simple cookie/CTA controls.
  summary: A loud hospitality website style that combines condensed campaign typography, candid food photography, paper texture, sticker accents, and straightforward high-contrast controls.
  description: The design feels like a food festival poster translated into a usable restaurant/catering site. Photography is messy and appetite-driven, typography is enormous, and transactional controls remain blunt and obvious.
  designPhilosophy: Make appetite and personality immediate. Let type and real food photography be loud; keep booking, menu, contact, consent, and navigation brutally clear.
  brandPersonality:
  - social
  - energetic
  - local
  - cheeky
  - confident
  - appetizing
  emotionalTone:
  - lively
  - casual
  - communal
  - warm
  bestFor:
  - food trucks
  - catering
  - pizza shops
  - street-food collectives
  - casual restaurants
  - event food vendors
  avoidFor:
  - fine-dining luxury at formal tone
  - finance
  - healthcare
  - enterprise tools
  audience:
  - event planners
  - local diners
  - festival visitors
  - casual hospitality customers
  selectionProfile:
    pickWhen:
    - candid food photography is strong
    - the brand can support giant condensed type
    - booking/contact is a primary conversion
    rejectWhen:
    - only polished stock food imagery is available
    - the brand needs quiet luxury
    - menu complexity cannot be organized cleanly
    contentDensityFit:
      level: medium
      score: 6
      note: Menus and services can be detailed if separated into clear editorial bands.
    mediaAssetFit:
      score: 10
      ideal:
      - candid close-up food photography
      - people/hands at tables
      - branded stickers or hand icons
      minimum: Needs original food photography with texture and personality.
    interactionFit:
      score: 8
      note: Excellent for booking, menus, location, and inquiry flows if controls stay simple.
    accessibilityFit:
      score: 9
      note: Giant type and strong contrast help; sticker accents must remain non-essential.
    implementationBudget: medium
  palette:
    background: '#F3F0E9'
    surface: '#FFFFFF'
    text: '#121212'
    muted_text: '#5B5650'
    secondary: '#B7F567'
    accent: '#F4A6D2'
    dark: '#171717'
    line: '#171717'
  typography:
    display:
      direction: giant ultra-condensed grotesk
      weight: 900
      lineHeight: 0.76-0.88
      use: service, section, and campaign headings
    body:
      direction: neutral grotesk
      size: 16-19px
      lineHeight: 1.5-1.65
    utility:
      direction: condensed bold sans
      use: navigation, menu labels, buttons
    familyLimit: 2
  layout:
    grid: wide editorial grid with type and photography sharing the same visual mass
    alignment: left-led, asymmetrical
    whitespace: medium
    overlap: badge/sticker overlap allowed on image corners
    sectionRhythm: giant type hero -> candid image -> menu/service block -> proof/community -> booking CTA
  hero:
    visualPriority: type + food-photo co-dominant
    formula: giant condensed statement + rounded candid food image + one lime or pink sticker + compact booking CTA
    ctaCount: 1-2
  components:
    navigation: thin utilitarian top strip with one obvious booking button
    cards: menu/category panels or image-led service blocks; avoid soft SaaS cards
    buttons: high-contrast black/white or pink/lime controls with black outline
    forms: large simple fields with clear labels
    badges: starbursts, hand signs, local/award labels
  media:
    photography: candid flash or daylight food photography, hands, tables, texture
    illustration: small graphic hand/sticker marks
    icons: simple heavy black icons
    texture:
    - paper grain
    - subtle photo grain
    textureStrength: 2-5%
  surfaces:
    borders: 1-2px black
    radius: 18-36px on photos and major panels
    shadows: little to none
  motion:
  - image crop reveal
  - sticker pop
  - underline slide
  - menu item hover nudge
  responsive:
  - preserve giant condensed headings
  - stack photo below message
  - keep booking CTA persistent but unobtrusive
  - move starbursts away from essential copy
  accessibilityRisks:
  - condensed headings becoming unreadable at small sizes
  - text over busy food images
  - decorative badges mistaken for controls
  signatureElements:
  - giant black condensed type
  - warm paper field
  - candid food photography
  - lime and pink sticker accents
  - straightforward booking UI
  recognitionHeuristics:
  - The page should feel like a food poster before it feels like a corporate catering brochure.
  - Real food photography must look tactile and social.
  - Booking and navigation must remain much calmer than the campaign typography.
  scores:
    playful: 8
    nostalgic: 5
    technical: 0
    organic: 6
    editorial: 9
    pixel: 0
    illustrative: 3
    texture: 5
    bold: 10
    commerce: 9
    density: 5
  implementationComplexity: medium
  compatibleSecondaryStyles:
  - playful-risograph
  - manga-food-editorial
  - editorial-mercantile-commerce
  incompatibleSecondaryStyles:
  - terminal-community
  - cinematic-floral-research at high strength
  - neo-future-aigc
  fallbackBehavior: If candid photography is limited, use one hero food shot repeatedly through tighter crops and pair it with strong typographic/menu structure rather than generic stock galleries.
  failureModes:
  - polished corporate catering stock photos
  - tiny timid headings
  - pill UI everywhere
  - hiding booking/contact behind visual tricks
- id: kinetic-product-landing
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Landing page
  name: Kinetic Product Landing
  referenceVisual: Model-authored landing-page archetype focused on conversion rhythm, poster-scale type, one product motif, and purposeful motion.
  aliases:
  - kinetic conversion editorial
  - launch poster landing
  - motion-led product hero
  summary: A conversion-focused landing style that uses poster-scale typography, one physical product/object motif, sharp section rhythm, and restrained kinetic transitions instead of generic centered hero formulas.
  description: Built for a single clear objective. The page alternates loud product statements with quiet proof bands, using scale, crop, and motion to keep attention moving toward one primary action.
  designPhilosophy: Every viewport should advance the argument. Use motion to reveal hierarchy, not to decorate emptiness.
  brandPersonality: [confident, modern, expressive, focused, fast]
  emotionalTone: [energetic, decisive, premium]
  bestFor: [launches, waitlists, single-product campaigns, lead generation, feature announcements]
  avoidFor: [dense dashboards, documentation portals, marketplaces with hundreds of SKUs]
  audience: [new prospects, campaign traffic, product evaluators]
  selectionProfile:
    pickWhen: [one conversion goal dominates, one hero object or concept can carry the story, the message can be sequenced into 5-8 sections]
    rejectWhen: [multiple unrelated goals compete, the site is primarily utility, conversion requires long-form comparison tables above the fold]
    contentDensityFit: {level: low-medium, score: 4, note: Keep each section single-minded; move dense evidence into dedicated proof bands.}
    mediaAssetFit: {score: 8, ideal: [product renders, editorial photography, short motion clips], minimum: Strong typography plus one original visual motif can carry the system.}
    interactionFit: {score: 7, note: Best for scroll, CTA, lightweight demos, and lead capture.}
    accessibilityFit: {score: 9, note: Motion must never be required to understand the sequence.}
    implementationBudget: medium-high
  palette: {background: '#F4F0E8', surface: '#FFFFFF', text: '#111111', muted_text: '#5F5A52', secondary: '#151515', accent: '#E8FF4A', dark: '#0A0A0A', line: '#111111'}
  typography:
    display: {direction: oversized condensed or grotesk display with one expressive alternate, weight: 800-950, lineHeight: 0.78-0.92, use: hero and section thesis}
    body: {direction: neutral grotesk, size: 16-20px, lineHeight: 1.5-1.65}
    utility: {direction: compact mono or grotesk, use: proof labels, step numbers, metadata}
    familyLimit: 3
  layout: {grid: 12-column campaign grid, alignment: asymmetric, whitespace: alternating high and medium, overlap: selective product/type overlap, sectionRhythm: loud hero -> proof -> demonstration -> objection handling -> CTA}
  hero: {visualPriority: product-concept-first, formula: giant headline + one product/object stage + one proof line + one primary CTA, ctaCount: 1}
  components:
    navigation: compact top rail with one primary action
    cards: evidence slabs, comparison strips, or staggered modules; never default three-up cards
    buttons: blunt high-contrast rectangles or compact capsules chosen once
    forms: short conversion form with visible labels
    badges: numbered proof markers or tiny launch labels
  media: {photography: high-contrast editorial crop, illustration: optional single motif, icons: simple custom glyphs, texture: [subtle grain], textureStrength: '1-3%'}
  surfaces: {borders: '1-2px', radius: '0-18px', shadows: minimal hard or none}
  motion: [headline line reveal, product crop shift, section pin for one beat, proof count-up, CTA micro-lift]
  responsive: [replace lateral choreography with vertical sequence, keep one dominant idea per screen, shorten pinned interactions, preserve headline scale]
  accessibilityRisks: [scroll-jacking, motion-dependent proof, oversized type clipping]
  signatureFingerprint: {name: Kinetic Hinge, structural: oversized type and product object lock together at one tension point, typographic: poster-scale condensed type with one highlighted word, motif: a recurring accent bar or directional marker, motion: the product and type separate then re-lock during scroll, exclusivity: Do not use the Workflow Spine, Living Index, Menu Fold, or State Ribbon as primary motifs.}
  signatureElements: [Kinetic Hinge hero, poster-scale type, one product protagonist, recurring accent marker, alternating impact and proof bands, one CTA path]
  recognitionHeuristics: [The hero must contain the Kinetic Hinge where type and product physically share one composition., The recurring accent marker must appear beyond the hero so the style remains recognizable after scrolling., No adjacent section may reuse the same composition., Removing animation must not break the conversion story.]
  scores: {playful: 5, nostalgic: 2, technical: 5, organic: 3, editorial: 9, pixel: 0, illustrative: 4, texture: 3, bold: 9, commerce: 8, density: 4}
  implementationComplexity: medium-high
  compatibleSecondaryStyles: [paper-cut-editorial, neo-future-aigc, bold-foodtruck-editorial]
  incompatibleSecondaryStyles: [maximal-collage-report at high strength, magical-girl-browser at high strength]
  fallbackBehavior: If premium media is unavailable, use disciplined typography, product diagrams, and one strong color block rather than synthetic stock visuals.
  failureModes: [centered SaaS hero, two equal CTAs, generic dashboard mockup, identical feature cards, motion without narrative purpose]

- id: spatial-saas-workbench
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: SaaS website
  name: Spatial SaaS Workbench
  referenceVisual: Model-authored SaaS archetype using real product scenes, anchored annotations, workflow connectors, and calm technical composition.
  aliases: [product-workbench SaaS, spatial software marketing, interface-led SaaS]
  summary: A SaaS marketing system that presents the product as a working spatial environment, using anchored interface fragments, disciplined grids, clear proof, and calm editorial copy instead of floating mockup clichés.
  description: The product UI is shown doing real work. Interface fragments attach to explanatory copy, workflow steps, and outcomes so visitors understand cause and effect rather than staring at a decorative dashboard screenshot.
  designPhilosophy: Demonstrate software behavior, not software-shaped decoration. Marketing shell expressive; product evidence precise.
  brandPersonality: [capable, intelligent, calm, progressive, useful]
  emotionalTone: [clear, confident, focused, sophisticated]
  bestFor: [B2B SaaS, AI tools, productivity software, collaboration platforms, developer-adjacent products]
  avoidFor: [character brands, entertainment campaigns, pure editorial magazines]
  audience: [operators, teams, managers, technical buyers, founders]
  selectionProfile:
    pickWhen: [workflow clarity matters, screenshots or interactive prototypes exist, the product has multiple connected capabilities]
    rejectWhen: [there is no real product UI, the site is a single campaign message, the brand needs overt character illustration]
    contentDensityFit: {level: medium-high, score: 8, note: Supports substantial explanation if each workflow is chunked into a focused scene.}
    mediaAssetFit: {score: 9, ideal: [real product captures, short interaction recordings, diagrams], minimum: Use accurate simplified product diagrams rather than fake dashboards.}
    interactionFit: {score: 9, note: Excellent for guided demos, tabs, workflow explorers, and comparison modules.}
    accessibilityFit: {score: 9, note: Product captures need text alternatives and must not contain the only explanation.}
    implementationBudget: high
  palette: {background: '#F5F6F2', surface: '#FFFFFF', text: '#101417', muted_text: '#687077', secondary: '#DCE5E1', accent: '#3C6DFF', dark: '#111820', line: '#D5D9D6'}
  typography:
    display: {direction: modern grotesk with compact technical rhythm, weight: 650-800, lineHeight: 0.95-1.05, use: product thesis and workflow titles}
    body: {direction: highly readable sans, size: 16-19px, lineHeight: 1.55-1.7}
    utility: {direction: mono or tabular sans, use: metrics, UI labels, technical notes}
    familyLimit: 2
  layout: {grid: 12-column workbench grid, alignment: content left with product scene anchored right or full width, whitespace: medium-high, overlap: interface fragments may layer only when hierarchy remains obvious, sectionRhythm: thesis -> workflow -> proof -> integrations -> security/trust -> conversion}
  hero: {visualPriority: workflow-first, formula: concise promise + one live-feeling product scene + contextual annotations + one primary CTA, ctaCount: 1-2}
  components:
    navigation: compact product nav with clear pricing/login/get-started split
    cards: workflow canvases, evidence panels, integration strips
    buttons: restrained solid primary plus quiet text secondary
    forms: conventional accessible controls
    badges: trust, integration, or release labels only
  media: {photography: optional team/customer evidence, illustration: system diagrams, icons: consistent line or filled product glyphs, texture: [], textureStrength: '0%'}
  surfaces: {borders: '1px neutral', radius: '10-18px', shadows: soft only when separating layered product panes}
  motion: [cursor demonstration, panel transition, workflow connector draw, state change highlight, metric count]
  responsive: [replace wide workbench with step-by-step product scenes, keep screenshots legible, never shrink full desktop app into unreadable phone-sized preview]
  accessibilityRisks: [tiny screenshot text, autoplay demos, low-contrast inactive states]
  signatureFingerprint: {name: Workflow Spine, structural: one continuous connector organizes real product scenes and annotations, typographic: compact technical grotesk plus mono evidence labels, motif: anchored nodes on a visible workflow line, motion: connector draws forward only when the related product state changes, exclusivity: Do not use scrapbook tape, cinematic product orbiting, or campaign chapter tabs as primary structure.}
  signatureElements: [Workflow Spine, real product scenes, anchored annotation nodes, causal connectors, calm proof blocks, restrained accent]
  recognitionHeuristics: [At least two product scenes must visibly attach to the Workflow Spine., Every node on the spine must map to a claim, state change, or outcome., The hero must explain the workflow without relying on screenshot microtext., Controls remain conventional even when the marketing shell is expressive.]
  scores: {playful: 3, nostalgic: 0, technical: 9, organic: 1, editorial: 7, pixel: 0, illustrative: 3, texture: 0, bold: 6, commerce: 7, density: 8}
  implementationComplexity: high
  compatibleSecondaryStyles: [dreamy-indie-software, pixel-humanist-agency, neo-future-aigc]
  incompatibleSecondaryStyles: [cartoon-campaign at high strength, psychedelic-floral-wordmark]
  fallbackBehavior: If interactive product media is unavailable, build static annotated workflow scenes from accurate UI captures and concise outcome copy.
  failureModes: [floating dashboard mockup with no explanation, six feature cards, meaningless gradient blobs, faux product UI, screenshot text too small to read]

- id: gallery-index-portfolio
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Portfolio
  name: Gallery Index Portfolio
  referenceVisual: Model-authored portfolio archetype linking a typographic project index to large responsive media and direct case-study navigation.
  aliases: [indexed portfolio, editorial work archive, project-led portfolio]
  summary: A portfolio system where a typographic project index and large responsive media continuously reference each other, making browsing feel like navigating an exhibition rather than scrolling a card gallery.
  description: Project names, roles, years, and media form one interactive index. Hover, focus, or scroll can change the featured image, but every project remains directly accessible and readable without interaction tricks.
  designPhilosophy: Work first, author second, interface third. Build an index that reveals taste through sequencing and scale.
  brandPersonality: [authored, cultured, precise, visual, self-assured]
  emotionalTone: [editorial, curious, calm, memorable]
  bestFor: [designers, photographers, directors, studios, illustrators, architects]
  avoidFor: [ecommerce catalogs, SaaS pricing sites, dashboards]
  audience: [clients, recruiters, collaborators, peers]
  selectionProfile:
    pickWhen: [project work is visually strong, chronology/category matters, case studies exist]
    rejectWhen: [there are fewer than three credible projects, the primary goal is product conversion, media assets are inconsistent]
    contentDensityFit: {level: medium, score: 7, note: Index can hold many projects if metadata stays concise.}
    mediaAssetFit: {score: 10, ideal: [large project imagery, video loops, detail crops], minimum: Strong stills for every listed project.}
    interactionFit: {score: 8, note: Supports hover/focus preview, filters, and case-study navigation.}
    accessibilityFit: {score: 9, note: Hover previews must have equivalent focus/touch behavior.}
    implementationBudget: medium-high
  palette: {background: '#F2F0EA', surface: '#FFFFFF', text: '#111111', muted_text: '#7B766D', secondary: '#D7D2C8', accent: '#FF5B3D', dark: '#111111', line: '#BEB8AC'}
  typography:
    display: {direction: editorial grotesk or serif/sans pairing, weight: 500-800, lineHeight: 0.9-1.05, use: project titles and nameplate}
    body: {direction: neutral sans, size: 16-18px, lineHeight: 1.5-1.65}
    utility: {direction: mono or narrow sans, use: year, discipline, client, index numbering}
    familyLimit: 3
  layout: {grid: split index/media grid, alignment: left-led with edge metadata, whitespace: high, overlap: media may crop behind index only at strong contrast, sectionRhythm: intro index -> work sequence -> selected case study -> about -> contact}
  hero: {visualPriority: work-index-first, formula: name/role + live project index + one large media field, ctaCount: 0-1}
  components:
    navigation: tiny persistent project/about/contact rail
    cards: avoid cards; use rows, strips, and full-bleed media
    buttons: text links with decisive hover/focus treatment
    forms: compact contact form or mail link
    badges: project numbers and role labels
  media: {photography: project-dependent, illustration: project-dependent, icons: minimal, texture: [optional film grain], textureStrength: '0-3%'}
  surfaces: {borders: hairlines, radius: '0-8px', shadows: none}
  motion: [preview swap, image reveal, index highlight, case-study crossfade]
  responsive: [turn hover preview into inline media, keep project rows tappable, move metadata below title, preserve large images]
  accessibilityRisks: [hover-only navigation, media flashing too rapidly, insufficient focus indication]
  signatureFingerprint: {name: Living Index, structural: project navigation is a visible editorial index rather than a hidden menu, typographic: oversized project numerals paired with restrained titles, motif: index rail and active project marker, motion: active index entry expands or hands off to the matching media field, exclusivity: Do not turn the portfolio into cards, device scenes, or campaign chapters.}
  signatureElements: [Living Index, oversized project numbers, responsive media field, active index marker, minimal UI, case-study chapter rhythm]
  recognitionHeuristics: [The Living Index must be visible in the first major viewport and remain usable without hover., The active index item must have a clear relationship to the currently featured work., Projects must use differentiated editorial frames rather than identical cards., Removing the logo should not erase authorship.]
  scores: {playful: 4, nostalgic: 2, technical: 3, organic: 2, editorial: 10, pixel: 0, illustrative: 5, texture: 2, bold: 7, commerce: 2, density: 6}
  implementationComplexity: medium-high
  compatibleSecondaryStyles: [cinematic-anime-portfolio, retro-mac-editorial, dreamy-art-magazine]
  incompatibleSecondaryStyles: [retro-marketplace-pop at high strength, cartoon-campaign at high strength]
  fallbackBehavior: If motion previews are unavailable, use a fixed large featured image that updates on selection or stack large project media inline.
  failureModes: [masonry thumbnail wall, identical rounded cards, biography before work, hover-only project access, weak tiny thumbnails]

- id: typographic-studio-agency
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Agency website
  name: Typographic Studio Agency
  referenceVisual: Model-authored agency archetype built from giant positioning type, project strips, process metadata, and editorial asymmetry.
  aliases: [studio manifesto agency, editorial agency site, type-led creative agency]
  summary: A studio website driven by giant typographic positioning, project strips, process annotations, and deliberate asymmetry, balancing expressive identity with clear capabilities and contact paths.
  description: The agency does not introduce itself with a generic services grid. It opens with a point of view, proves it through selected work, then explains services and process using editorial structures.
  designPhilosophy: Sell taste by showing decisions. Typography should demonstrate confidence; case studies should demonstrate competence.
  brandPersonality: [opinionated, creative, precise, collaborative, cultured]
  emotionalTone: [confident, editorial, energetic]
  bestFor: [creative agencies, brand studios, digital studios, production companies, design practices]
  avoidFor: [formal regulated services, utility portals]
  audience: [prospective clients, creative leaders, partners, talent]
  selectionProfile:
    pickWhen: [strong work exists, positioning can be stated sharply, the studio wants authored identity]
    rejectWhen: [services are highly commoditized, trust requires conventional institutional presentation, work cannot be shown]
    contentDensityFit: {level: medium, score: 7, note: Capabilities and case studies can be substantial if separated by visual rhythm.}
    mediaAssetFit: {score: 9, ideal: [case-study images, motion reels, process artifacts], minimum: Strong project stills and typographic system.}
    interactionFit: {score: 7, note: Good for work exploration, services, and inquiry.}
    accessibilityFit: {score: 9, note: Decorative type must not replace service labels or navigation.}
    implementationBudget: medium-high
  palette: {background: '#F1EEE6', surface: '#FFFFFF', text: '#101010', muted_text: '#6B665E', secondary: '#202020', accent: '#FF4F38', dark: '#101010', line: '#B9B3A8'}
  typography:
    display: {direction: massive grotesk with optional contrasting editorial serif, weight: 650-900, lineHeight: 0.78-0.95, use: manifesto and project names}
    body: {direction: restrained grotesk, size: 16-20px, lineHeight: 1.55-1.7}
    utility: {direction: mono/narrow sans, use: disciplines, dates, project metadata}
    familyLimit: 3
  layout: {grid: editorial 12-column, alignment: asymmetric, whitespace: generous, overlap: type/project image overlap allowed selectively, sectionRhythm: manifesto -> selected work -> capabilities -> process -> clients/proof -> contact billboard}
  hero: {visualPriority: positioning-first, formula: one giant point-of-view sentence + small studio facts + one project/media interruption, ctaCount: 0-1}
  components:
    navigation: minimal text rail with work/services/about/contact
    cards: case-study strips, not generic cards
    buttons: text or blunt outlined action
    forms: direct inquiry form with visible labels
    badges: discipline tags used sparingly
  media: {photography: project-led, illustration: project-led, icons: custom minimal marks, texture: [paper or film grain optional], textureStrength: '0-3%'}
  surfaces: {borders: hairlines or bold rules, radius: '0-12px', shadows: none}
  motion: [project strip reveal, type crop animation, underline draw, reel scrub]
  responsive: [stack manifesto and project media, preserve type scale, convert lateral strips into vertical chapters]
  accessibilityRisks: [oversized text clipping, video without controls, hidden nav under experimental layout]
  signatureFingerprint: {name: Manifesto Margin, structural: a persistent editorial margin carries point-of-view statements and process notes, typographic: giant manifesto type contrasted with small discipline metadata, motif: margin annotations and rule lines, motion: annotations slide or pin briefly as work strips pass, exclusivity: Do not use the personal Autograph Thread or creator Channel Tape as the main annotation device.}
  signatureElements: [Manifesto Margin, giant studio thesis, selected work strips, discipline metadata, process annotations, strong contact endcard]
  recognitionHeuristics: [The Manifesto Margin must appear before a generic capabilities list., At least one process annotation must visibly connect to a piece of work., Selected work must precede broad service claims., The composition must remain authored with motion disabled.]
  scores: {playful: 5, nostalgic: 2, technical: 4, organic: 2, editorial: 10, pixel: 0, illustrative: 4, texture: 3, bold: 9, commerce: 5, density: 6}
  implementationComplexity: medium-high
  compatibleSecondaryStyles: [pixel-humanist-agency, paper-cut-editorial, maximal-collage-report]
  incompatibleSecondaryStyles: [cartoon-campaign at high strength, tactile-menu-restaurant]
  fallbackBehavior: If case-study media is limited, use fewer projects with deeper detail and process artifacts rather than a padded services grid.
  failureModes: [three service cards, stock office photography, centered generic hero, vague manifesto with no proof, excessive animation]

- id: editorial-mercantile-commerce
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: E-commerce store
  name: Editorial Mercantile Commerce
  referenceVisual: Model-authored ecommerce archetype combining editorial merchandising with predictable product, filter, price, variant, cart, and checkout behavior.
  aliases: [editorial shop system, magazine commerce, mercantile storefront]
  summary: An ecommerce style that combines magazine-like storytelling with rigorous product discovery, using varied product scales, editorial inserts, and clear transactional controls.
  description: Product browsing should feel curated without making price, variants, availability, filtering, or cart behavior mysterious. Editorial modules interrupt the grid to add context and desire.
  designPhilosophy: Expression lives around commerce, not in the way of commerce. Make products desirable, then make buying boringly easy.
  brandPersonality: [curated, tactile, confident, contemporary, human]
  emotionalTone: [desirable, editorial, warm]
  bestFor: [fashion, accessories, home goods, beauty, design objects, food products]
  avoidFor: [complex B2B procurement, dense software marketplaces]
  audience: [shoppers, collectors, brand fans]
  selectionProfile:
    pickWhen: [product photography is strong, curation matters, storytelling can increase desire]
    rejectWhen: [SKU volume requires extremely dense utilitarian cataloging, product imagery is inconsistent, checkout rules are complex B2B]
    contentDensityFit: {level: medium-high, score: 8, note: Product grids can be dense as long as transactional data remains consistent.}
    mediaAssetFit: {score: 10, ideal: [consistent packshots, lifestyle photography, detail crops], minimum: Clean product photos and a coherent crop system.}
    interactionFit: {score: 10, note: Filtering, sorting, variants, cart, and checkout are core and must remain conventional.}
    accessibilityFit: {score: 10, note: Product details, prices, availability, and controls must be explicit.}
    implementationBudget: high
  palette: {background: '#F5F0E6', surface: '#FFFFFF', text: '#151515', muted_text: '#6D675D', secondary: '#D9D0C0', accent: '#E84B37', dark: '#181818', line: '#CBC2B3'}
  typography:
    display: {direction: editorial serif or expressive grotesk, weight: 550-800, lineHeight: 0.9-1.05, use: campaign and category statements}
    body: {direction: neutral sans, size: 16-18px, lineHeight: 1.5-1.65}
    utility: {direction: tabular sans/mono, use: price, size, inventory, filters}
    familyLimit: 3
  layout: {grid: flexible 4-6 column commerce grid with editorial interruptions, alignment: mostly left, whitespace: medium, overlap: only in campaign modules, sectionRhythm: campaign hero -> category/product grid -> editorial story -> product grid -> social proof -> footer}
  hero: {visualPriority: product/category-first, formula: editorial campaign image or object cluster + concise category statement + shop action, ctaCount: 1}
  components:
    navigation: category-first header with search/cart always obvious
    cards: product tiles with fixed information anatomy but varied image scale
    buttons: clear add-to-cart and variant controls
    forms: standard checkout/search/filter controls
    badges: sale/new/limited labels only when truthful
  media: {photography: consistent product/lifestyle mix, illustration: optional campaign accents, icons: restrained utility glyphs, texture: [subtle paper grain optional], textureStrength: '0-2%'}
  surfaces: {borders: '1px neutral', radius: '0-12px', shadows: none or tiny product lift}
  motion: [image swap, quick add feedback, filter transition, cart count update]
  responsive: [2-column mobile product grid when viable, sticky cart/filter controls, editorial inserts become full-width, preserve price and variant clarity]
  accessibilityRisks: [hover-only alternate images, low-contrast sale text, hidden size/variant state]
  signatureFingerprint: {name: Merchandise Ledger, structural: a functional catalog is interrupted by editorial ledger spreads that explain provenance, collection, or use, typographic: clear commerce sans paired with ledger-like captions, motif: aligned SKU price and variant metadata lines, motion: product imagery may shift scale while price and action anchors stay fixed, exclusivity: Do not use magazine inserts to obscure transaction anatomy or imitate a portfolio index.}
  signatureElements: [Merchandise Ledger, editorial collection spreads, varied product image scale, fixed price and variant anatomy, ledger captions, restrained transactional surfaces]
  recognitionHeuristics: [The Merchandise Ledger must visibly align price, variant, and action information across varied product presentations., At least one editorial spread should explain collection context without interrupting shopping flow., Product imagery may vary dramatically but transaction anatomy must remain predictable., Checkout surfaces stay calmer than merchandising surfaces.]
  scores: {playful: 5, nostalgic: 2, technical: 3, organic: 4, editorial: 9, pixel: 0, illustrative: 3, texture: 2, bold: 7, commerce: 10, density: 8}
  implementationComplexity: high
  compatibleSecondaryStyles: [organic-garden-commerce, playful-risograph, cat-product-collage, bold-foodtruck-editorial]
  incompatibleSecondaryStyles: [terminal-community at high strength, maximal-collage-report at high strength]
  fallbackBehavior: If lifestyle media is limited, lean into clean packshots, typographic category modules, and strong merchandising hierarchy.
  failureModes: [beautiful but unusable product grid, hidden cart, inconsistent card anatomy, decorative prices, too many editorial interruptions]

- id: cinematic-product-stage
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Product website
  name: Cinematic Product Stage
  referenceVisual: Model-authored product-site archetype staging one product as the visual protagonist across cinematic feature chapters.
  aliases: [product theater, cinematic launch site, object-stage product website]
  summary: A product website that treats one physical or digital product as the protagonist, using macro media, controlled lighting, chapter transitions, and sparse explanatory UI.
  description: "Each section reveals a different product truth: form, mechanism, benefit, proof, ecosystem, ownership. The visual stage changes with the story while controls remain simple."
  designPhilosophy: Give the product cinematic attention, but make every beautiful shot explain something.
  brandPersonality: [premium, focused, confident, crafted, modern]
  emotionalTone: [dramatic, desirable, precise]
  bestFor: [hardware, devices, apps with strong visual identity, premium consumer products, design objects]
  avoidFor: [large marketplaces, dashboards, documentation]
  audience: [buyers, enthusiasts, press, early adopters]
  selectionProfile:
    pickWhen: [one product dominates, high-quality renders or photography exist, features can be sequenced into chapters]
    rejectWhen: [many unrelated products share equal priority, media quality is weak, dense comparison is the primary task]
    contentDensityFit: {level: low-medium, score: 4, note: Keep one product truth per chapter.}
    mediaAssetFit: {score: 10, ideal: [macro renders, exploded views, short videos, interface recordings], minimum: One strong product render and detail crops.}
    interactionFit: {score: 7, note: Good for chapter scroll, comparison, gallery, purchase CTA.}
    accessibilityFit: {score: 8, note: Video and 3D must have static alternatives and controls.}
    implementationBudget: high
  palette: {background: '#0C0D0F', surface: '#17191D', text: '#F4F4F2', muted_text: '#A4A7AD', secondary: '#2A2D33', accent: '#BDFB5E', dark: '#060708', line: '#30343A'}
  typography:
    display: {direction: clean high-impact grotesk or elegant technical serif, weight: 550-800, lineHeight: 0.9-1.03, use: product chapters}
    body: {direction: clean sans, size: 16-20px, lineHeight: 1.55-1.7}
    utility: {direction: compact technical sans, use: specifications, measurements, labels}
    familyLimit: 3
  layout: {grid: full-bleed cinematic stage plus narrow information rails, alignment: product-driven, whitespace: very high, overlap: text may orbit product but never cover critical detail, sectionRhythm: reveal -> detail -> mechanism -> proof -> ecosystem -> ownership}
  hero: {visualPriority: product-first, formula: single product floating/staged in space + short name/value line + one action, ctaCount: 1}
  components:
    navigation: minimal product chapters plus buy/try
    cards: specification slabs and comparison strips only
    buttons: concise high-contrast action
    forms: conventional purchase/lead controls on solid surfaces
    badges: awards/spec labels sparingly
  media: {photography: macro and controlled studio, illustration: exploded diagrams, icons: technical glyphs, texture: [subtle film grain], textureStrength: '0-2%'}
  surfaces: {borders: hairline, radius: '0-20px', shadows: product lighting rather than UI shadow}
  motion: [slow product rotation, detail zoom, chapter crossfade, exploded-part reveal]
  responsive: [use alternate crops instead of shrinking scenes, disable heavy 3D on constrained devices, keep CTA reachable]
  accessibilityRisks: [scroll-driven storytelling trapping users, autoplay video, low-contrast spec text]
  signatureFingerprint: {name: Orbit Stage, structural: one product remains the visual center while camera distance, crop, and lighting change by chapter, typographic: sparse cinematic titles with technical detail captions, motif: halo or orbit framing around macro features, motion: controlled rotation, parallax, or light sweep tied to feature chapters, exclusivity: Do not introduce multiple equal product protagonists or dashboard-like panes.}
  signatureElements: [Orbit Stage, single product protagonist, cinematic chapter lighting, macro-detail halo, sparse UI, persistent purchase or trial path]
  recognitionHeuristics: [The Orbit Stage must keep one product visually dominant from hero through feature chapters., Every camera or lighting change must reveal a product quality rather than decorate the page., At least one macro-detail halo must connect a close-up to a concrete feature., The purchase or trial path stays obvious throughout.]
  scores: {playful: 3, nostalgic: 0, technical: 7, organic: 2, editorial: 8, pixel: 0, illustrative: 4, texture: 2, bold: 8, commerce: 9, density: 3}
  implementationComplexity: high
  compatibleSecondaryStyles: [neo-future-aigc, dreamy-indie-software, kinetic-product-landing]
  incompatibleSecondaryStyles: [kawaii-recruitment-poster, folk-fish-poster]
  fallbackBehavior: Replace expensive 3D with pre-rendered product sequences and static detail photography while preserving chapter logic.
  failureModes: [cinematic shots with no information, endless scroll pinning, illegible spec overlays, generic glossy gradient stage]

- id: signal-startup-launch
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Startup website
  name: Signal Startup Launch
  referenceVisual: Model-authored startup archetype using a sharp category thesis, momentum signals, product evidence, and direct conversion paths.
  aliases: [startup signal system, launch newsroom startup, high-signal startup site]
  summary: A startup site built around fast category definition, evidence, momentum, and direct action, using bold signal blocks, sharp typography, product fragments, and compact proof rather than aspirational filler.
  description: The visual language should feel like a company moving quickly but thinking clearly. Small labels, metrics, product evidence, and team/recruiting signals build momentum around one crisp thesis.
  designPhilosophy: "Replace startup vagueness with visible signals: what it is, why now, proof, product, people, action."
  brandPersonality: [ambitious, fast, sharp, credible, inventive]
  emotionalTone: [urgent, confident, optimistic]
  bestFor: [early-stage startups, venture-backed launches, new categories, technical startups]
  avoidFor: [quiet luxury, heritage institutions, children brands]
  audience: [customers, investors, recruits, press]
  selectionProfile:
    pickWhen: [category definition is important, momentum metrics exist, multiple audiences need one coherent story]
    rejectWhen: [brand depends on heritage or softness, there is no evidence to support bold claims]
    contentDensityFit: {level: medium, score: 7, note: Supports metrics, product proof, team, and CTA without becoming dashboard-like.}
    mediaAssetFit: {score: 7, ideal: [product fragments, founder/team images, diagrams, metrics], minimum: Strong typography plus product evidence.}
    interactionFit: {score: 7, note: Good for waitlists, demos, recruiting, and product exploration.}
    accessibilityFit: {score: 9, note: Signal colors should never be the only state indicator.}
    implementationBudget: medium
  palette: {background: '#F3F2EC', surface: '#FFFFFF', text: '#111111', muted_text: '#65625B', secondary: '#1247FF', accent: '#FF4D29', dark: '#101010', line: '#CFCAC0'}
  typography:
    display: {direction: sharp grotesk with compressed headline option, weight: 700-900, lineHeight: 0.84-0.98, use: thesis and momentum statements}
    body: {direction: clean sans, size: 16-19px, lineHeight: 1.5-1.65}
    utility: {direction: mono, use: metrics, release labels, dates, hiring tags}
    familyLimit: 2
  layout: {grid: asymmetric launch grid, alignment: left-led, whitespace: medium-high, overlap: product fragments may interrupt typography, sectionRhythm: thesis -> why now -> product -> proof -> team -> action}
  hero: {visualPriority: category-definition-first, formula: one-line category claim + short proof + product fragment + one CTA + small momentum signal, ctaCount: 1}
  components:
    navigation: minimal with product/company/careers and one action
    cards: signal blocks, metric strips, product fragments
    buttons: direct solid action
    forms: short waitlist/demo form
    badges: release, funding, hiring, metric labels used factually
  media: {photography: candid team/customer optional, illustration: diagrams, icons: geometric glyphs, texture: [], textureStrength: '0%'}
  surfaces: {borders: '1-2px', radius: '0-14px', shadows: none}
  motion: [signal tick, metric count, product fragment slide, hiring tag reveal]
  responsive: [stack signals in narrative order, keep thesis short, move product proof directly under claim]
  accessibilityRisks: [too-small metric labels, overly fast counters, jargon-heavy copy]
  signatureFingerprint: {name: Signal Stack, structural: category thesis, live proof, and momentum indicators stack vertically like a launch instrument, typographic: blunt startup headline plus compact status labels, motif: signal dots, status ticks, or evidence stamps, motion: indicators activate as proof enters view, exclusivity: Do not borrow cinematic product staging or dense dashboard chrome as the main language.}
  signatureElements: [Signal Stack, category thesis, momentum indicators, evidence stamps, product proof, direct action]
  recognitionHeuristics: [The first viewport must establish the category and show at least one active Signal Stack marker., Every bold claim must pair with evidence or momentum proof., Signal markers must repeat consistently rather than becoming random decoration., The page should feel fast without looking temporary.]
  scores: {playful: 4, nostalgic: 0, technical: 7, organic: 1, editorial: 7, pixel: 0, illustrative: 2, texture: 0, bold: 9, commerce: 7, density: 6}
  implementationComplexity: medium
  compatibleSecondaryStyles: [neo-future-aigc, pixel-humanist-agency, post-digital-type-collage]
  incompatibleSecondaryStyles: [nostalgic-summer-magazine, psychedelic-floral-wordmark]
  fallbackBehavior: If metrics are limited, use customer proof, product capability evidence, and founder context rather than inventing momentum signals.
  failureModes: [meaningless gradient blobs, inflated claims without proof, generic founder-photo strip, two competing primary CTAs]

- id: confident-business-editorial
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Business website
  name: Confident Business Editorial
  referenceVisual: Model-authored business-site archetype using trust-first editorial hierarchy, contextual photography, visible proof, and clear service/contact paths.
  aliases: [modern business editorial, service-led business site, trust-first editorial]
  summary: A trust-first business website that uses strong editorial hierarchy, real local/contextual photography, disciplined typography, and clear service pathways without collapsing into bland corporate templates.
  description: Services, proof, locations, people, and contact information are organized with newspaper-like confidence and modern spacing. Personality comes from art direction, not novelty controls.
  designPhilosophy: Trust is clarity plus specificity. Use expressive hierarchy where it helps orientation, and keep all business-critical information obvious.
  brandPersonality: [credible, established, human, direct, competent]
  emotionalTone: [reassuring, confident, grounded]
  bestFor: [professional services, local businesses, consultancies, contractors, B2B services]
  avoidFor: [games, youth campaigns, experimental art sites]
  audience: [clients, partners, local customers, procurement teams]
  selectionProfile:
    pickWhen: [trust and clarity dominate, real people/places can be shown, services require explanation]
    rejectWhen: [brand explicitly wants highly playful or subcultural expression]
    contentDensityFit: {level: medium-high, score: 8, note: Supports service detail, testimonials, locations, FAQs, and credentials.}
    mediaAssetFit: {score: 7, ideal: [real team/location/work photography, diagrams, proof documents], minimum: Good portraits plus contextual images.}
    interactionFit: {score: 9, note: Excellent for contact, booking, quote, FAQ, and service navigation.}
    accessibilityFit: {score: 10, note: Conventional control grammar and strong hierarchy make accessibility straightforward.}
    implementationBudget: medium
  palette: {background: '#F4F1E9', surface: '#FFFFFF', text: '#17201C', muted_text: '#646A65', secondary: '#D8DED7', accent: '#2B6651', dark: '#15231D', line: '#B8BEB9'}
  typography:
    display: {direction: sturdy grotesk or restrained editorial serif, weight: 600-800, lineHeight: 0.95-1.08, use: service and proof headings}
    body: {direction: highly readable sans/serif, size: 17-20px, lineHeight: 1.55-1.75}
    utility: {direction: compact sans, use: addresses, hours, credentials, labels}
    familyLimit: 2
  layout: {grid: 12-column editorial service grid, alignment: mostly left, whitespace: high, overlap: minimal, sectionRhythm: positioning -> services -> proof -> people/process -> location/contact -> FAQ}
  hero: {visualPriority: trust-and-service-first, formula: precise service promise + contextual image + one contact action + one trust marker, ctaCount: 1}
  components:
    navigation: clear service hierarchy with contact action
    cards: service rows, testimonial pull-quotes, credential panels
    buttons: straightforward solid/outline
    forms: large labeled fields with clear expectations
    badges: certifications and facts, never decorative clutter
  media: {photography: real people, place, work, texture, illustration: restrained diagrams, icons: simple monochrome, texture: [subtle paper grain optional], textureStrength: '0-2%'}
  surfaces: {borders: hairline, radius: '0-10px', shadows: minimal}
  motion: [subtle image reveal, underline movement, accordion open]
  responsive: [stack service and proof groups, keep contact action visible, prioritize hours/location/phone when relevant]
  accessibilityRisks: [tiny credential text, decorative serif used too small, contact details hidden in footer]
  signatureFingerprint: {name: Proof Ledger, structural: every major service claim is paired with a nearby proof row, case fact, credential, location, or real-world context, typographic: authoritative editorial sans with numeric proof emphasis, motif: ruled proof rows and contextual labels, motion: subtle reveal only, exclusivity: Do not use playful sticker systems or cinematic scene choreography as primary identity.}
  signatureElements: [Proof Ledger, precise service promise, contextual photography, ruled evidence rows, numeric proof, clear contact path]
  recognitionHeuristics: [A Proof Ledger row must appear near the first major service claim., Every broad promise should be supported by a concrete case, credential, number, place, or person., Photography must feel contextual to the real business rather than generic stock., Contact information must never require hunting.]
  scores: {playful: 2, nostalgic: 2, technical: 4, organic: 4, editorial: 7, pixel: 0, illustrative: 1, texture: 1, bold: 6, commerce: 7, density: 7}
  implementationComplexity: medium
  compatibleSecondaryStyles: [european-color-matching, paper-cut-editorial at subtle strength]
  incompatibleSecondaryStyles: [y2k-portfolio-collage, magical-girl-browser, cartoon-campaign]
  fallbackBehavior: If photography is limited, rely on strong service typography, real credentials, maps/locations, and process diagrams rather than generic stock portraits.
  failureModes: [generic smiling-office stock, vague mission copy, hidden contact information, equal-weight service cards, excessive decorative motion]

- id: signature-personal-brand
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Personal brand website
  name: Signature Personal Brand
  referenceVisual: Model-authored personal-brand archetype centered on one memorable name treatment, portrait or artifact, selected work, notes, and timeline.
  aliases: [author-led personal site, signature identity web, personal editorial home]
  summary: A personal website built around one recognizable typographic signature, a strong portrait or artifact, selective proof, and a living timeline of work, ideas, and appearances.
  description: The page should feel like a person, not a startup. It combines a distinctive name treatment with editorial notes, selected work, talks/writing, and compact credibility signals.
  designPhilosophy: Build memory around one person-specific visual signature. Keep the system flexible enough to grow with new work and writing.
  brandPersonality: [individual, articulate, warm, confident, curious]
  emotionalTone: [personal, editorial, approachable]
  bestFor: [founders, designers, writers, speakers, consultants, creators]
  avoidFor: [anonymous corporate products, large ecommerce catalogs]
  audience: [clients, peers, readers, recruiters, followers]
  selectionProfile:
    pickWhen: [the person's voice matters, multiple work streams need one home, portrait/writing assets exist]
    rejectWhen: [the site should hide the individual behind a company brand]
    contentDensityFit: {level: medium, score: 7, note: Supports biography, work, writing, talks, links, and contact with careful prioritization.}
    mediaAssetFit: {score: 7, ideal: [portrait, work images, handwriting/signature artifact, publication covers], minimum: Strong typography and one portrait.}
    interactionFit: {score: 7, note: Good for reading, project browsing, newsletter, contact.}
    accessibilityFit: {score: 9, note: Signature typography should remain decorative, not the only readable name.}
    implementationBudget: medium
  palette: {background: '#F3EEE5', surface: '#FFFFFF', text: '#161616', muted_text: '#6D685F', secondary: '#D6CFC2', accent: '#3E6AF2', dark: '#111111', line: '#C6BFB3'}
  typography:
    display: {direction: distinctive signature/handwritten or custom display paired with sober editorial type, weight: 500-800, lineHeight: 0.9-1.05, use: name and selective statements}
    body: {direction: editorial serif or clean sans, size: 17-20px, lineHeight: 1.6-1.75}
    utility: {direction: mono or compact sans, use: dates, roles, links, appearances}
    familyLimit: 3
  layout: {grid: editorial personal archive, alignment: asymmetric, whitespace: generous, overlap: portrait/signature overlap optional, sectionRhythm: identity -> selected work -> notes/writing -> timeline/proof -> contact}
  hero: {visualPriority: identity-first, formula: name/signature + one-line self-definition + portrait/artifact + selected current focus, ctaCount: 0-1}
  components:
    navigation: work/writing/about/contact
    cards: notes, appearances, project excerpts; vary format
    buttons: understated text or solid accent
    forms: newsletter/contact conventional
    badges: dates, role tags, currently-working-on labels
  media: {photography: portrait and work-context, illustration: personal marks optional, icons: minimal, texture: [paper grain optional], textureStrength: '0-2%'}
  surfaces: {borders: hairline, radius: '0-12px', shadows: none}
  motion: [signature draw, portrait crop shift, timeline reveal, note expand]
  responsive: [keep name prominent, stack portrait under identity, turn timeline into chronological list]
  accessibilityRisks: [handwritten text too small, biography hidden behind interactions, low-contrast metadata]
  signatureFingerprint: {name: Autograph Thread, structural: one personal visual gesture threads through biography, work, notes, and timeline, typographic: distinctive name treatment paired with an editorial reading face, motif: handwritten line, signature stroke, or personal mark used as connective tissue, motion: thread draws or reappears between sections, exclusivity: Do not use agency Manifesto Margin or creator Channel Tape as the primary identity device.}
  signatureElements: [Autograph Thread, recognizable name treatment, personal portrait or artifact, selected work, living notes, timeline]
  recognitionHeuristics: [The Autograph Thread must appear in at least two different content types so it feels like identity rather than decoration., The site should remain recognizable if all logos are removed., The person and their point of view must be clear in one viewport., Work and ideas should feel connected by one voice.]
  scores: {playful: 5, nostalgic: 3, technical: 2, organic: 4, editorial: 9, pixel: 0, illustrative: 4, texture: 2, bold: 6, commerce: 3, density: 6}
  implementationComplexity: medium
  compatibleSecondaryStyles: [gallery-index-portfolio, scrapbook-portfolio, handdrawn-travel-zine]
  incompatibleSecondaryStyles: [information-dense-command-dashboard at high strength, retro-marketplace-pop]
  fallbackBehavior: If portrait assets are unavailable, use a signature typographic hero plus work artifacts and writing excerpts.
  failureModes: [startup-style mission statement, generic avatar card, social-link wall, equal emphasis on every activity, decorative handwriting used for body copy]

- id: information-dense-command-dashboard
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Dashboard
  name: Information-Dense Command Dashboard
  referenceVisual: Model-authored dashboard archetype optimized for stable spatial memory, dense tables, tabular metrics, explicit state, and fast repeated use.
  aliases: [command dashboard, dense operations UI, high-signal dashboard]
  summary: A high-density operational dashboard optimized for scan speed, stable spatial memory, tabular clarity, and strong state communication, with expression limited to typography, accent, and one restrained visual motif.
  description: The interface assumes repeated daily use. Navigation, filters, tables, charts, alerts, and detail panes keep fixed anatomy. Decoration is aggressively subordinated to information.
  designPhilosophy: Density is not clutter when hierarchy is predictable. Optimize for recognition, comparison, and fast action.
  brandPersonality: [precise, serious, fast, dependable, technical]
  emotionalTone: [focused, controlled, efficient]
  bestFor: [analytics, admin, operations, finance tools, monitoring, internal systems]
  avoidFor: [campaign microsites, art portfolios, mascot brands]
  audience: [operators, analysts, admins, managers, technical teams]
  selectionProfile:
    pickWhen: [users return frequently, tables/charts dominate, actions depend on live state]
    rejectWhen: [the primary job is emotional storytelling or brand discovery]
    contentDensityFit: {level: high, score: 10, note: Designed specifically for dense repeated information.}
    mediaAssetFit: {score: 3, ideal: [charts, tables, maps, status data], minimum: Does not depend on photography.}
    interactionFit: {score: 10, note: Built for filtering, selection, batch actions, drill-down, keyboard use.}
    accessibilityFit: {score: 10, note: Requires explicit state, focus, labels, semantic tables, and contrast.}
    implementationBudget: high
  palette: {background: '#111418', surface: '#171B20', text: '#F2F4F5', muted_text: '#939BA3', secondary: '#232A31', accent: '#64D48A', dark: '#0B0D10', line: '#303840'}
  typography:
    display: {direction: compact UI grotesk, weight: 600-750, lineHeight: 1.0-1.15, use: page and major panel headings only}
    body: {direction: highly legible UI sans, size: 14-17px, lineHeight: 1.4-1.55}
    utility: {direction: tabular mono, use: metrics, IDs, timestamps, numerical data}
    familyLimit: 2
  layout: {grid: persistent app shell with resizable content grid, alignment: strict, whitespace: low-medium, overlap: none, sectionRhythm: stable shell rather than campaign sections}
  hero: {visualPriority: none, formula: dashboard landing state with key status, current filters, and immediate work queue, ctaCount: contextual}
  components:
    navigation: persistent rail/top bar with clear current location
    cards: functional metric/panel containers only when grouping is needed
    buttons: compact, conventional, stateful
    forms: dense but accessible with labels and keyboard support
    badges: status chips with icon/text, not color alone
  media: {photography: none, illustration: rare onboarding only, icons: consistent monochrome glyph set, texture: [], textureStrength: '0%'}
  surfaces: {borders: '1px high-information separators', radius: '4-10px', shadows: none}
  motion: [state highlight, panel expand, row update pulse, toast enter]
  responsive: [prioritize primary task views, turn wide tables into horizontal regions or summary/detail flows, never hide critical actions solely behind hover]
  accessibilityRisks: [tiny text, color-only status, keyboard traps, dense chart legends]
  signatureFingerprint: {name: Status Rail, structural: a persistent status rail exposes scope, time, filters, health, or current mode without stealing canvas space, typographic: tabular numerals and compact utility labels, motif: state markers and keyboard hints, motion: state changes update in place rather than moving the shell, exclusivity: Do not use poster-scale campaign composition or scrapbook decoration in primary task zones.}
  signatureElements: [Status Rail, stable shell, compact tables, tabular metrics, explicit state markers, keyboard-ready controls]
  recognitionHeuristics: [The Status Rail must remain spatially stable across primary dashboard views., Users should build spatial memory after one session., Density must increase scan speed rather than visual noise., Decorative motifs must disappear before controls do.]
  scores: {playful: 1, nostalgic: 0, technical: 10, organic: 0, editorial: 4, pixel: 0, illustrative: 0, texture: 0, bold: 5, commerce: 3, density: 10}
  implementationComplexity: high
  compatibleSecondaryStyles: [terminal-community at subtle strength, retro-mac-editorial at subtle strength]
  incompatibleSecondaryStyles: [playful-risograph, valentine-kawaii-campaign, maximal-collage-report]
  fallbackBehavior: Default to a neutral high-contrast system with one semantic accent and preserve all interaction patterns.
  failureModes: [dashboard made of giant cards, decorative gradients, hidden filters, low information density, inconsistent table behavior]

- id: adaptive-workspace-webapp
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Web app
  name: Adaptive Workspace Web App
  referenceVisual: Model-authored web-app archetype using a stable shell with task-adaptive panes, command access, progressive disclosure, and contextual actions.
  aliases: [adaptive app shell, progressive workspace UI, task-centered webapp]
  summary: A task-first web application style built around an adaptive workspace, progressive disclosure, command access, and panels that reconfigure according to the current job rather than preserving a static dashboard layout.
  description: The shell establishes stable navigation and global actions; the content area adapts between canvas, list, editor, inspector, or split view. Personality lives in one accent, typography, icon rhythm, and empty states.
  designPhilosophy: Preserve user orientation while letting the workspace shape-shift around the task.
  brandPersonality: [capable, flexible, modern, calm, efficient]
  emotionalTone: [focused, responsive, empowering]
  bestFor: [editors, productivity tools, creative apps, project tools, AI workspaces, collaboration apps]
  avoidFor: [single-message campaigns, simple brochure sites]
  audience: [repeat users, professionals, creators, teams]
  selectionProfile:
    pickWhen: [multiple task modes exist, users need repeated workflows, keyboard and power-user actions matter]
    rejectWhen: [the product is mostly static content or a simple funnel]
    contentDensityFit: {level: high, score: 9, note: Density adapts by task; not every view should show everything.}
    mediaAssetFit: {score: 4, ideal: [product content, user-generated media, task artifacts], minimum: No branded photography required.}
    interactionFit: {score: 10, note: Designed for commands, selection, editing, drag/drop, collaboration, and stateful workflows.}
    accessibilityFit: {score: 10, note: Requires robust focus order, shortcuts, labels, and reduced motion.}
    implementationBudget: high
  palette: {background: '#ECEFEF', surface: '#FFFFFF', text: '#151819', muted_text: '#6B7375', secondary: '#DDE3E3', accent: '#6B5CFF', dark: '#121516', line: '#D0D6D6'}
  typography:
    display: {direction: compact app grotesk, weight: 600-750, lineHeight: 1.0-1.15, use: workspace/page titles}
    body: {direction: UI sans, size: 15-18px, lineHeight: 1.45-1.6}
    utility: {direction: mono/tabular sans, use: shortcuts, states, metadata, timestamps}
    familyLimit: 2
  layout: {grid: stable shell plus adaptive content panes, alignment: task-dependent, whitespace: medium, overlap: floating command/inspector surfaces only, sectionRhythm: stateful views rather than scroll chapters}
  hero: {visualPriority: none, formula: first-use workspace or meaningful empty state, ctaCount: contextual}
  components:
    navigation: persistent rail plus command palette
    cards: use only for objects that are genuinely card-like
    buttons: conventional, size hierarchy based on task importance
    forms: robust labels, validation, undo, autosave states
    badges: status, collaborator, and state markers
  media: {photography: user-content dependent, illustration: empty states only, icons: consistent app glyph set, texture: [], textureStrength: '0%'}
  surfaces: {borders: '1px separators', radius: '6-12px', shadows: overlays only}
  motion: [pane transition, selection highlight, command palette reveal, drag feedback]
  responsive: [collapse inspectors into sheets, preserve current object context, prioritize one workspace mode per phone screen]
  accessibilityRisks: [keyboard traps, inaccessible drag/drop, hidden state changes, focus loss during pane transitions]
  signatureFingerprint: {name: Context Dock, structural: a stable dock owns contextual actions while the main workspace changes mode, typographic: interface sans with compact action labels, motif: dock slots that appear only when relevant, motion: panes morph while the dock preserves location and task memory, exclusivity: Do not use dashboard Status Rail as the same component or marketing-style chapter transitions inside active workflows.}
  signatureElements: [Context Dock, adaptive panes, command palette, stable navigation memory, contextual action slots, meaningful empty states]
  recognitionHeuristics: [The Context Dock must preserve its location while the central workspace changes modes., Contextual actions must appear because of task state, not as permanent clutter., Users should never wonder where a task went after changing view., Cards are optional rather than the default container.]
  scores: {playful: 2, nostalgic: 0, technical: 9, organic: 0, editorial: 4, pixel: 0, illustrative: 1, texture: 0, bold: 4, commerce: 2, density: 9}
  implementationComplexity: very-high
  compatibleSecondaryStyles: [spatial-saas-workbench, pixel-humanist-agency at subtle strength]
  incompatibleSecondaryStyles: [maximal-collage-report, cartoon-campaign, psychedelic-floral-wordmark]
  fallbackBehavior: Reduce layout adaptation to list/detail and editor/inspector patterns while preserving keyboard and state clarity.
  failureModes: [dashboard cards everywhere, unstable navigation, modal overload, hidden autosave state, mobile layout that simply shrinks desktop panes]

- id: tactile-menu-restaurant
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Restaurant website
  name: Tactile Menu Restaurant
  referenceVisual: Model-authored restaurant archetype combining tactile menu surfaces, appetite-driven media, expressive category type, and obvious visit/reservation utilities.
  aliases: [menu-led restaurant, tactile hospitality site, table-paper restaurant]
  summary: A restaurant style that feels like handling a menu, placemat, receipt, and food photography together, combining tactile paper surfaces, large dish imagery, expressive menu typography, and direct reservation/location utilities.
  description: Appetite and atmosphere lead; practical information follows immediately. Menu categories behave like editorial chapters, while reservation, hours, map, dietary notes, and phone remain persistent and obvious.
  designPhilosophy: Make the visitor hungry, then make the next action effortless.
  brandPersonality: [warm, social, tactile, appetizing, local]
  emotionalTone: [welcoming, sensory, relaxed]
  bestFor: [restaurants, cafes, bakeries, bars, pop-ups, food halls]
  avoidFor: [enterprise software, formal institutional sites]
  audience: [diners, tourists, local regulars, event planners]
  selectionProfile:
    pickWhen: [food photography is strong, atmosphere matters, menu/hours/location are primary]
    rejectWhen: [food media is weak, operational ordering system must dominate every screen]
    contentDensityFit: {level: medium, score: 7, note: Menu can be dense if category, price, and dietary information remain structured.}
    mediaAssetFit: {score: 10, ideal: [dish photography, interior shots, menu artifacts, staff moments], minimum: Several strong dish images plus menu typography.}
    interactionFit: {score: 9, note: Reservation, menu, map, call, and order actions must be direct.}
    accessibilityFit: {score: 10, note: Menu content must be real text, not only images/PDFs.}
    implementationBudget: medium
  palette: {background: '#F2E8D8', surface: '#FFF9EE', text: '#211A16', muted_text: '#6E6258', secondary: '#C8D49C', accent: '#D94F32', dark: '#1D1815', line: '#B8A99A'}
  typography:
    display: {direction: expressive hospitality serif or condensed poster face, weight: 600-900, lineHeight: 0.88-1.02, use: dish/category/venue statements}
    body: {direction: readable serif or sans, size: 17-20px, lineHeight: 1.5-1.7}
    utility: {direction: condensed sans/mono, use: price, hours, dietary labels, address}
    familyLimit: 3
  layout: {grid: menu/editorial hybrid, alignment: left-led, whitespace: medium, overlap: stamps/receipts may overlap photo edges, sectionRhythm: appetite hero -> menu chapters -> story/interior -> reviews -> location/reservation}
  hero: {visualPriority: food-and-venue-first, formula: large dish or table scene + venue statement + open-now/hours context + reservation action, ctaCount: 1-2}
  components:
    navigation: menu/reserve/location/about with phone/address context
    cards: menu rows and dish features; avoid SaaS cards
    buttons: reservation/order actions high contrast
    forms: booking fields simple and touch-friendly
    badges: dietary, seasonal, sold-out labels only when useful
  media: {photography: tactile close-ups and real interior/staff, illustration: stamps/doodles optional, icons: simple food/location symbols, texture: [paper grain, receipt ink optional], textureStrength: '1-4%'}
  surfaces: {borders: ink rules, radius: '0-18px', shadows: paper lift only}
  motion: [menu underline, dish image reveal, reservation drawer, subtle receipt slide]
  responsive: [hours/reserve/location become immediate mobile actions, menu remains searchable/readable, avoid image-heavy delays]
  accessibilityRisks: [menu only as PDF, price text too small, dietary information communicated only by color]
  signatureFingerprint: {name: Menu Fold, structural: menu chapters behave like folds, sheets, or placemats that reveal food and information in sequence, typographic: expressive menu display paired with extremely readable item typography, motif: fold edges, price rules, stamps, or table marks, motion: fold or slide reveals kept subtle, exclusivity: Do not use generic ecommerce cards or creator scrapbook tape as the primary menu system.}
  signatureElements: [Menu Fold, tactile paper surface, food photography crossing fold boundaries, menu chapter typography, visible hours and location, reservation action]
  recognitionHeuristics: [At least one Menu Fold must combine food imagery and menu information in the same composition., The site should communicate what the food feels like before explaining the brand story., Menu and hours must be reachable in one tap., Transactional actions stay calmer than decorative menu typography.]
  scores: {playful: 6, nostalgic: 5, technical: 1, organic: 8, editorial: 8, pixel: 0, illustrative: 3, texture: 6, bold: 7, commerce: 9, density: 6}
  implementationComplexity: medium
  compatibleSecondaryStyles: [bold-foodtruck-editorial, playful-risograph, manga-food-editorial]
  incompatibleSecondaryStyles: [terminal-community, neo-future-aigc]
  fallbackBehavior: If photography is limited, use menu typography, ingredient illustration, and venue artifacts rather than generic stock dishes.
  failureModes: [hidden hours, menu PDF as primary experience, stock food photography, booking CTA buried in footer, too many decorative stickers]

- id: creator-scrapbook-channel
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Creator website
  name: Creator Scrapbook Channel
  referenceVisual: Model-authored creator archetype organizing latest content, archive, mixed media, annotations, community links, and monetization in a controlled scrapbook system.
  aliases: [creator channel collage, personal media scrapbook, channel-first creator site]
  summary: A creator website that organizes videos, posts, projects, merch, and community links like a living scrapbook/channel wall, using varied media modules, handwritten annotations, and one stable content index.
  description: The site embraces personality and mixed media without becoming a random feed. Latest content, evergreen highlights, and monetization links each get distinct visual roles.
  designPhilosophy: Let the creator's output feel alive and informal, but preserve a clear hierarchy between latest, best, about, and support/buy actions.
  brandPersonality: [personal, energetic, playful, prolific, community-led]
  emotionalTone: [casual, lively, intimate]
  bestFor: [YouTubers, streamers, illustrators, musicians, newsletter creators, social creators]
  avoidFor: [formal B2B, regulated services]
  audience: [fans, subscribers, sponsors, collaborators]
  selectionProfile:
    pickWhen: [multiple content formats exist, creator personality is central, community and latest work matter]
    rejectWhen: [site content is mostly static corporate information]
    contentDensityFit: {level: medium-high, score: 8, note: Many items can coexist if latest and featured content are visually separated.}
    mediaAssetFit: {score: 9, ideal: [thumbnails, clips, posters, photos, doodles], minimum: A consistent thumbnail/crop system.}
    interactionFit: {score: 8, note: Good for filters, embeds, newsletter, merch, support links.}
    accessibilityFit: {score: 8, note: Embedded media needs controls/captions; annotations cannot carry critical labels.}
    implementationBudget: medium
  palette: {background: '#F6F0E5', surface: '#FFFFFF', text: '#151515', muted_text: '#716B62', secondary: '#7FB7FF', accent: '#FF6CA8', dark: '#161616', line: '#C9C0B4'}
  typography:
    display: {direction: creator-specific chunky or handwritten display, weight: 700-900, lineHeight: 0.85-1.0, use: channel identity and big chapter labels}
    body: {direction: friendly sans, size: 16-19px, lineHeight: 1.5-1.65}
    utility: {direction: mono/narrow sans, use: dates, platform tags, episode numbers}
    familyLimit: 3
  layout: {grid: scrapbook grid anchored by stable latest/featured columns, alignment: intentionally mixed, whitespace: medium, overlap: stickers/notes may overlap media edges, sectionRhythm: latest -> featured archive -> projects/merch -> about -> community}
  hero: {visualPriority: latest-content-first, formula: creator identity + current/latest feature + short note + subscribe/follow action, ctaCount: 1-2}
  components:
    navigation: latest/archive/about/shop/community
    cards: intentionally varied media posters with consistent metadata anatomy
    buttons: platform-aware but visually unified
    forms: newsletter/support conventional
    badges: episode, platform, new, live labels
  media: {photography: creator-specific, illustration: doodles/stickers optional, icons: simple social glyphs normalized, texture: [paper grain, tape/sticker texture optional], textureStrength: '1-4%'}
  surfaces: {borders: mixed hairline and sticker outline, radius: '4-18px', shadows: paper/sticker offset}
  motion: [thumbnail hover preview, tape peel micro-motion, latest badge pop, marquee only if slow and non-essential]
  responsive: [featured content first, collapse scrapbook overlap, preserve latest/featured distinction, keep subscription action obvious]
  accessibilityRisks: [autoplay media, inconsistent heading order, decorative labels too small]
  signatureFingerprint: {name: Channel Tape, structural: content streams are visually grouped by taped, pinned, or labeled channel strips while archive navigation stays stable, typographic: creator-specific display face plus compact platform metadata, motif: channel tape labels, date stamps, doodle notes, or small badges, motion: tape or labels snap into place while media remains calm, exclusivity: Do not use personal Autograph Thread or agency Manifesto Margin as the main connective device.}
  signatureElements: [Channel Tape, latest feature, varied media modules, creator annotations, stable archive index, community and support path]
  recognitionHeuristics: [Channel Tape must visibly distinguish at least two content streams without becoming a navigation gimmick., The latest content must be obvious immediately., Every media item needs predictable title, date, and platform anatomy., The page should feel personal without feeling disorganized.]
  scores: {playful: 8, nostalgic: 4, technical: 2, organic: 4, editorial: 8, pixel: 2, illustrative: 6, texture: 5, bold: 7, commerce: 6, density: 7}
  implementationComplexity: medium
  compatibleSecondaryStyles: [genz-influencer-editorial, y2k-portfolio-collage, magical-girl-browser]
  incompatibleSecondaryStyles: [confident-business-editorial at high strength, information-dense-command-dashboard]
  fallbackBehavior: If mixed-media assets are sparse, use a cleaner index with one creator-specific type treatment and handwritten annotation layer.
  failureModes: [random masonry feed, social icons everywhere, no distinction between latest and old, sponsor links overpowering content]

- id: campaign-narrative-marketing
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: Marketing website
  name: Campaign Narrative Marketing
  referenceVisual: Model-authored marketing archetype sequencing message, mechanism, evidence, objections, social proof, and conversion through varied campaign chapters.
  aliases: [narrative campaign site, message-sequence marketing, chaptered marketing site]
  summary: A marketing system that treats the page as a sequence of campaign chapters, varying composition, proof format, media, and CTA placement while preserving one dominant message and visual language.
  description: Instead of repeating feature cards, the page moves through problem, tension, product, proof, objections, social evidence, and action with deliberate visual rhythm.
  designPhilosophy: Marketing is sequencing. Each section should answer the next question a skeptical visitor would naturally ask.
  brandPersonality: [persuasive, authored, energetic, strategic, expressive]
  emotionalTone: [progressive, confident, engaging]
  bestFor: [campaigns, demand generation, launches, brand marketing, event promotion]
  avoidFor: [dashboards, documentation, transactional app shells]
  audience: [prospects, campaign traffic, decision makers, communities]
  selectionProfile:
    pickWhen: [message sequencing matters, multiple forms of proof exist, page can support varied section composition]
    rejectWhen: [site is primarily utility, content is mostly reference documentation]
    contentDensityFit: {level: medium, score: 7, note: Dense proof belongs in dedicated chapters, not everywhere.}
    mediaAssetFit: {score: 8, ideal: [campaign photography, product evidence, customer proof, diagrams], minimum: Strong typographic art direction and proof data.}
    interactionFit: {score: 7, note: Good for calculators, demos, testimonials, forms, and CTA repetition.}
    accessibilityFit: {score: 9, note: Narrative order must remain logical without animation.}
    implementationBudget: medium-high
  palette: {background: '#F5F2E9', surface: '#FFFFFF', text: '#121212', muted_text: '#69645B', secondary: '#222222', accent: '#FF5C35', dark: '#101010', line: '#C9C2B7'}
  typography:
    display: {direction: high-impact campaign grotesk with optional editorial contrast face, weight: 700-950, lineHeight: 0.8-0.98, use: chapter headlines}
    body: {direction: readable sans, size: 16-20px, lineHeight: 1.5-1.7}
    utility: {direction: mono/compact sans, use: evidence labels, steps, stats}
    familyLimit: 3
  layout: {grid: section-specific editorial grids under one global alignment system, alignment: varied but intentional, whitespace: alternating, overlap: campaign media only, sectionRhythm: problem -> promise -> mechanism -> proof -> objection -> social proof -> action}
  hero: {visualPriority: message-first, formula: campaign thesis + one visual proof motif + one CTA + one credibility signal, ctaCount: 1}
  components:
    navigation: campaign-relevant anchors and one action
    cards: use different proof formats rather than repeating one card template
    buttons: one consistent primary action repeated strategically
    forms: short lead capture on calm surface
    badges: chapter, proof, customer, or event labels
  media: {photography: campaign-specific, illustration: concept diagrams or original campaign art, icons: one consistent family, texture: [optional style-specific texture], textureStrength: '0-4%'}
  surfaces: {borders: style-dependent but consistent, radius: '0-18px', shadows: minimal}
  motion: [chapter reveal, proof count, testimonial transition, media crop shift]
  responsive: [preserve story order, reduce overlap, keep one question/answer per viewport, maintain CTA rhythm without sticky spam]
  accessibilityRisks: [motion changing reading order, repeated CTA labels with unclear destination, testimonial carousels without controls]
  signatureFingerprint: {name: Argument Ladder, structural: numbered or named chapters escalate from tension to mechanism to increasingly specific proof, typographic: high-impact chapter headlines with compact evidence labels, motif: chapter tabs or rung markers, motion: the active rung advances as the argument deepens, exclusivity: Do not use Living Index project navigation or SaaS Workflow Spine as the primary sequence metaphor.}
  signatureElements: [Argument Ladder, chaptered argument, escalating proof specificity, varied evidence formats, one conversion path, strong closing action]
  recognitionHeuristics: [The Argument Ladder must visibly progress rather than merely number sections., No two adjacent chapters may solve the same communication problem., Proof must become more specific as the user scrolls., CTA repetition must feel earned rather than mechanical.]
  scores: {playful: 5, nostalgic: 1, technical: 4, organic: 3, editorial: 9, pixel: 0, illustrative: 5, texture: 3, bold: 9, commerce: 9, density: 6}
  implementationComplexity: medium-high
  compatibleSecondaryStyles: [maximal-collage-report, retro-marketplace-pop, cartoon-campaign]
  incompatibleSecondaryStyles: [information-dense-command-dashboard as dominant, retro-mac-editorial at high strength for fast conversion]
  fallbackBehavior: If campaign media is weak, use strong chapter typography, diagrams, customer proof, and data rather than generic illustrations.
  failureModes: [feature-card repetition, identical section layouts, CTA every 200 pixels, proof too vague, no narrative escalation]

- id: immersive-app-showcase
  referenceOrder: null
  sourceType: model-authored-frontend-archetype
  websiteType: App showcase
  name: Immersive App Showcase
  referenceVisual: Model-authored app-showcase archetype demonstrating real product states through synchronized interface scenes, annotations, motion, and download actions.
  aliases: [app choreography site, interface showcase, device-scene app landing]
  summary: An app showcase style that demonstrates the product through choreographed interface scenes, device frames only when useful, contextual annotations, and clear download/trial actions.
  description: The visitor sees what the app feels like in use. Screens transition through real tasks, features, and outcomes, with the marketing copy synchronized to each interface state.
  designPhilosophy: Show the app behaving. Device frames are optional context, never the entire design idea.
  brandPersonality: [polished, lively, product-led, clear, modern]
  emotionalTone: [immersive, intuitive, optimistic]
  bestFor: [mobile apps, desktop apps, creative tools, consumer software, productivity apps]
  avoidFor: [static brochure sites, products with no mature UI]
  audience: [prospective users, press, app-store traffic, investors]
  selectionProfile:
    pickWhen: [real app screens exist, core flows can be shown visually, conversion is download/try]
    rejectWhen: [the app UI is unfinished or misleading screenshots would be required]
    contentDensityFit: {level: medium, score: 7, note: Each scene should demonstrate one feature or outcome.}
    mediaAssetFit: {score: 10, ideal: [screen recordings, UI captures, device renders, microinteraction demos], minimum: Accurate screen captures and a coherent stage system.}
    interactionFit: {score: 9, note: Supports tabs, guided demos, device toggles, videos, download actions.}
    accessibilityFit: {score: 9, note: All motion demos require captions/controls/static explanation.}
    implementationBudget: high
  palette: {background: '#10131B', surface: '#191E29', text: '#F7F8FA', muted_text: '#AEB5C0', secondary: '#242A37', accent: '#7CFFB2', dark: '#080A0F', line: '#303746'}
  typography:
    display: {direction: modern product grotesk with expressive rounded option, weight: 650-850, lineHeight: 0.9-1.04, use: app promise and feature chapters}
    body: {direction: clean UI sans, size: 16-19px, lineHeight: 1.5-1.65}
    utility: {direction: compact mono/sans, use: platform labels, version, feature metadata}
    familyLimit: 2
  layout: {grid: cinematic app stage plus annotation rails, alignment: scene-dependent, whitespace: high, overlap: screen/device layers controlled, sectionRhythm: app promise -> core flow -> feature scenes -> proof -> ecosystem -> download}
  hero: {visualPriority: app-in-use-first, formula: concise promise + one active interface scene + platform/download action + one proof signal, ctaCount: 1-2}
  components:
    navigation: product/features/pricing/download plus one action
    cards: feature scenes and customer proof; avoid generic feature grid
    buttons: platform-aware download/try actions
    forms: signup/lead conventional
    badges: platform/version/award labels
  media: {photography: optional lifestyle context, illustration: motion diagrams optional, icons: product-native glyphs, texture: [subtle glow or grain optional], textureStrength: '0-2%'}
  surfaces: {borders: hairline, radius: '12-28px', shadows: restrained device/app depth}
  motion: [screen transition, device pivot, feature highlight, pointer gesture, state morph]
  responsive: [use native mobile aspect scenes, remove unnecessary device frames, keep text and app scene in logical sequence]
  accessibilityRisks: [autoplay screen recordings, small in-app text, motion sickness from device rotation]
  signatureFingerprint: {name: State Ribbon, structural: a continuous sequence of real app states behaves like a filmstrip or ribbon through the page, typographic: product headline plus state labels synchronized to each scene, motif: state markers, gesture cues, or progress ticks, motion: transitions happen between real states rather than decorative device spins, exclusivity: Do not use a single cinematic product protagonist or workbench connector as the main sequence.}
  signatureElements: [State Ribbon, real app scenes, synchronized feature copy, state markers, optional device context, platform CTA]
  recognitionHeuristics: [The State Ribbon must connect multiple real app states across the page., The app UI must be visible and meaningful in the first viewport., Device frames provide context rather than decoration., Every scene must correspond to a real user task and the motion must represent a real state change.]
  scores: {playful: 5, nostalgic: 0, technical: 7, organic: 1, editorial: 7, pixel: 0, illustrative: 3, texture: 1, bold: 7, commerce: 8, density: 6}
  implementationComplexity: high
  compatibleSecondaryStyles: [dreamy-indie-software, neo-future-aigc, magical-girl-browser at restrained strength]
  incompatibleSecondaryStyles: [folk-fish-poster at high strength, botanical-papercut-typography at high strength]
  fallbackBehavior: Use accurate static UI scenes with stepped annotations and no faux device physics if motion assets are unavailable.
  failureModes: [giant phone mockup with no explanation, fake UI, endless device rotation, feature cards detached from screens, download CTA hidden]

authoredFrontendSignaturePolicy:
  appliesToSourceType: model-authored-frontend-archetype
  purpose: Make the fifteen authored frontend styles visually distinguishable even when brand name, copy, logo, and imagery are removed.
  signatureRequired: true
  signatureFingerprintRequired: true
  heroSignatureRequired: true
  repeatSignatureBeyondHero: true
  minimumSignatureChannelsPerPage: 3
  signatureChannels:
  - composition
  - typography
  - recurring motif
  - interaction or motion
  - information anatomy
  exclusivityRule: The exclusive signature of another authored frontend style must not become the dominant motif unless that style is explicitly selected as secondary.
  nonInterchangeabilityTest: If two authored frontend styles could swap names without materially changing the composition, component anatomy, motif, and motion language, both generations fail.
  repetitionRule: Repeat the signature as a system, not as copy-pasted decoration. The hero and at least one later section must express the same fingerprint through different compositions.
  restraintRule: A signature is not permission to decorate every component. Functional clarity still outranks ornament.
  responsiveRule: The signature must survive mobile recomposition; it may simplify, but it must not disappear.
  accessibilityRule: Signature motifs may never carry the only instance of critical content or interaction state.
  authoredStyleSignatures:
    kinetic-product-landing:
      signatureName: Kinetic Hinge
      coreMove: Lock one product protagonist against poster-scale type at a visible tension point, then separate and re-lock the relationship through the page.
      ownableMotifs: [accent hinge bar, directional crop, impact/proof alternation]
      mustAppear: [hero type-object lock, recurring accent marker, later section echo]
    spatial-saas-workbench:
      signatureName: Workflow Spine
      coreMove: Connect real product scenes with one causal spine whose nodes map to actions, states, and outcomes.
      ownableMotifs: [connector spine, anchored annotation node, state-to-outcome link]
      mustAppear: [hero workflow scene, at least two spine nodes, later workflow continuation]
    gallery-index-portfolio:
      signatureName: Living Index
      coreMove: Make project navigation itself an editorial composition using oversized numbering and an active work index tied directly to the media field.
      ownableMotifs: [index rail, oversized project numeral, active work marker]
      mustAppear: [visible index in first major viewport, active item-media relationship, index re-entry in case-study flow]
    typographic-studio-agency:
      signatureName: Manifesto Margin
      coreMove: Reserve an editorial margin for point-of-view statements, discipline metadata, and process notes that annotate selected work.
      ownableMotifs: [manifesto margin, rule line, process annotation]
      mustAppear: [agency thesis in margin, work annotation, contact-end margin echo]
    editorial-mercantile-commerce:
      signatureName: Merchandise Ledger
      coreMove: Merge expressive merchandising with rigidly predictable commerce metadata using aligned price, variant, and action ledgers.
      ownableMotifs: [ledger caption, SKU-price rule, editorial collection spread]
      mustAppear: [predictable transaction anatomy, one editorial spread, ledger alignment across products]
    cinematic-product-stage:
      signatureName: Orbit Stage
      coreMove: Keep one product protagonist centered while lighting, crop, distance, and macro-detail framing change by chapter.
      ownableMotifs: [orbit halo, macro-detail callout, cinematic light chapter]
      mustAppear: [single protagonist in hero, macro chapter, persistent purchase or trial path]
    signal-startup-launch:
      signatureName: Signal Stack
      coreMove: Stack category definition, momentum, and evidence like a live launch instrument using repeated status markers.
      ownableMotifs: [signal dot, momentum tick, evidence stamp]
      mustAppear: [category thesis, live-looking proof marker, repeated signal language]
    confident-business-editorial:
      signatureName: Proof Ledger
      coreMove: Pair each important service promise with a nearby concrete proof row such as a credential, result, location, person, or number.
      ownableMotifs: [proof rule, evidence row, numeric fact]
      mustAppear: [early proof row, contextual photography or case fact, direct contact path]
    signature-personal-brand:
      signatureName: Autograph Thread
      coreMove: Carry one personal visual gesture through biography, work, notes, and timeline so authorship survives even without a logo.
      ownableMotifs: [signature stroke, personal mark, connective handwritten line]
      mustAppear: [name treatment, thread in two content types, personal artifact or portrait]
    information-dense-command-dashboard:
      signatureName: Status Rail
      coreMove: Keep a persistent rail for scope, health, mode, time, filters, and keyboard hints while dense task content changes around it.
      ownableMotifs: [status marker, tabular metric, keyboard hint]
      mustAppear: [stable status rail, compact metrics, explicit state language]
    adaptive-workspace-webapp:
      signatureName: Context Dock
      coreMove: Keep contextual actions in a stable dock that changes content with task state while the main workspace can reconfigure freely.
      ownableMotifs: [context slot, task-state action, adaptive pane edge]
      mustAppear: [stable dock location, state-dependent actions, meaningful empty or transition state]
    tactile-menu-restaurant:
      signatureName: Menu Fold
      coreMove: Structure menu chapters like tactile folds, placemats, or sheets where food photography and menu information share one physical composition.
      ownableMotifs: [fold edge, price rule, table stamp]
      mustAppear: [food-image/menu overlap, reachable hours and location, calm reservation action]
    creator-scrapbook-channel:
      signatureName: Channel Tape
      coreMove: Group content streams with creator-specific tape, pin, or label strips while maintaining a stable archive index beneath the playfulness.
      ownableMotifs: [channel tape, date stamp, creator annotation]
      mustAppear: [latest-content feature, two visibly distinct channels, stable archive metadata]
    campaign-narrative-marketing:
      signatureName: Argument Ladder
      coreMove: Make each chapter visibly advance the argument from tension to mechanism to increasingly specific evidence and action.
      ownableMotifs: [chapter rung, proof escalation marker, campaign step label]
      mustAppear: [visible progression, increasing proof specificity, earned CTA recurrence]
    immersive-app-showcase:
      signatureName: State Ribbon
      coreMove: Connect real interface states into a continuous scene sequence synchronized with feature copy and user-task progression.
      ownableMotifs: [state marker, gesture cue, interface filmstrip]
      mustAppear: [meaningful app state in hero, multiple real state transitions, platform action]
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
  experimental-pet-editorial:
  - experimental-pet-editorial
  dreamy-indie-software:
  - dreamy-indie-software
  neo-future-aigc:
  - neo-future-aigc
  maximal-collage-report:
  - maximal-collage-report
  y2k-portfolio-collage:
  - y2k-portfolio-collage
  retro-marketplace-pop:
  - retro-marketplace-pop
  neo-brutal-education:
  - neo-brutal-education
  cosmic-event-story:
  - cosmic-event-story
  genz-influencer-editorial:
  - genz-influencer-editorial
  retro-cartoon-type-specimen:
  - retro-cartoon-type-specimen
  retro-browser-type-specimen:
  - retro-browser-type-specimen
  summer-accessory-editorial:
  - summer-accessory-editorial
  retro-supermarket-sticker:
  - retro-supermarket-sticker
  cat-product-collage:
  - cat-product-collage
  kawaii-recruitment-poster:
  - kawaii-recruitment-poster
  valentine-kawaii-campaign:
  - valentine-kawaii-campaign
  illustration-zine-adventure:
  - illustration-zine-adventure
  dreamy-art-magazine:
  - dreamy-art-magazine
  handdrawn-travel-zine:
  - handdrawn-travel-zine
  nostalgic-summer-magazine:
  - nostalgic-summer-magazine
  manga-food-editorial:
  - manga-food-editorial
  post-digital-type-collage:
  - post-digital-type-collage
  scrapbook-portfolio:
  - scrapbook-portfolio
  european-color-matching:
  - european-color-matching
  pixel-flower-editorial:
  - pixel-flower-editorial
  botanical-papercut-typography:
  - botanical-papercut-typography
  psychedelic-floral-wordmark:
  - psychedelic-floral-wordmark
  folk-fish-poster:
  - folk-fish-poster
  magical-girl-browser:
  - magical-girl-browser
  cinematic-floral-research:
  - cinematic-floral-research
  monochrome-storybook-brand:
  - monochrome-storybook-brand
  retro-game-manual-mascot:
  - retro-game-manual-mascot
  cinematic-anime-portfolio:
  - cinematic-anime-portfolio
  bold-foodtruck-editorial:
  - bold-foodtruck-editorial
  kinetic-product-landing:
  - kinetic-product-landing
  spatial-saas-workbench:
  - spatial-saas-workbench
  gallery-index-portfolio:
  - gallery-index-portfolio
  typographic-studio-agency:
  - typographic-studio-agency
  editorial-mercantile-commerce:
  - editorial-mercantile-commerce
  cinematic-product-stage:
  - cinematic-product-stage
  signal-startup-launch:
  - signal-startup-launch
  confident-business-editorial:
  - confident-business-editorial
  signature-personal-brand:
  - signature-personal-brand
  information-dense-command-dashboard:
  - information-dense-command-dashboard
  adaptive-workspace-webapp:
  - adaptive-workspace-webapp
  tactile-menu-restaurant:
  - tactile-menu-restaurant
  creator-scrapbook-channel:
  - creator-scrapbook-channel
  campaign-narrative-marketing:
  - campaign-narrative-marketing
  immersive-app-showcase:
  - immersive-app-showcase
styleSelectionNotes:
  legacyModesRemainValid: true
  canonicalCatalogStylesArePreferred: true
  rule: Choose a canonical catalog style whenever project evidence is specific enough; use a legacy umbrella name only for
    broad discussion or backwards compatibility.
  doNotBlendByDefault: true
  referenceDerivedStylesAreNotBrandCopies: true
  modelAuthoredFrontendStylesAreOriginal: true
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
referenceCoverage:
  uniqueReferenceFamilies: 38
  duplicateReferenceImages:
  - reference: Things / dreamy dark software
    duplicateOf: dreamy-indie-software
  orderedReferences:
  - 1: paper-cut-editorial
  - 2: pixel-pastoral
  - 3: glitch-fashion
  - 4: organic-garden-commerce
  - 5: pixel-humanist-agency
  - 6: terminal-community
  - 7: retro-mac-editorial
  - 8: playful-risograph
  - 9: cartoon-campaign
  - 10: experimental-pet-editorial
  - 11: dreamy-indie-software
  - 12: neo-future-aigc
  - 13: maximal-collage-report
  - 14: y2k-portfolio-collage
  - 15: retro-marketplace-pop
  - 16: neo-brutal-education
  - 17: cosmic-event-story
  - 18: genz-influencer-editorial
  - 19: retro-cartoon-type-specimen
  - 20: retro-browser-type-specimen
  - 21: summer-accessory-editorial
  - 22: retro-supermarket-sticker
  - 23: cat-product-collage
  - 24: kawaii-recruitment-poster
  - 25: valentine-kawaii-campaign
  - 26: illustration-zine-adventure
  - 27: dreamy-art-magazine
  - 28: handdrawn-travel-zine
  - 29: nostalgic-summer-magazine
  - 30: manga-food-editorial
  - 31: post-digital-type-collage
  - 32: scrapbook-portfolio
  - 33: european-color-matching
  - 34: pixel-flower-editorial
  - 35: botanical-papercut-typography
  - 36: psychedelic-floral-wordmark
  - 37: folk-fish-poster
  - 38: magical-girl-browser
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
2. score the thirty-eight styles using the rubric below;
3. select **one dominant style**;
4. optionally choose **one compatible secondary style**;
5. generate the page using the dominant style's composition, typography, imagery, controls, and motion rules;
6. keep the secondary style below roughly **30%** of the visual language;
7. verify that the result is recognizable as the chosen style even at thumbnail size.

Do **not** blend all thirty-eight reference families into one page. That produces design soup, which is technically food but nobody asked for it.

The point is to make a deliberate art-direction choice instead of defaulting to another centered SaaS hero with six rounded cards.
## 1. System Overview and Shared Design DNA
The system-level philosophy and the reference-level observations reinforce each other. The following rules define the common ground every style must preserve.
### 1.1 System overview
This system defines a **highly art-directed, expressive editorial web language** synthesized from all supplied references: handmade papercut typography, retro pixel script over landscape photography, glitch-fashion collage, organic nature-led ecommerce, lime pixel-editorial agency design, dark terminal/Web3 UI, classic Macintosh-inspired storytelling, playful packaging illustration, bold cartoon campaign pages, experimental pet commerce, dreamy dark indie software, post-digital AIGC portfolios, surreal trend-report collage, Y2K sticker portfolios, retro marketplace pop, neo-brutal education, cosmic event storytelling, creator-economy character editorial, retro cartoon type specimens, and modular retro-browser type specimens.

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
- **Pet / boutique lifestyle / eccentric commerce** → **Experimental Pet Editorial Commerce**
- **Indie software / playful creative app / game-adjacent product** → **Dreamy Indie Software**
- **AIGC / creative technology / experimental digital studio** → **Neo-Future AIGC Creative**
- **Trend report / research publication / cultural deck** → **Maximal Collage Report**
- **Visual-design portfolio / Gen-Z scrapbook / sticker culture** → **Y2K Portfolio Collage**
- **Retail activation / pop-up market / streetwear event** → **Retro Marketplace Pop**
- **Course / edtech / scholarship / student campaign** → **Neo-Brutal Education**
- **Celebration / anniversary / gamified community event** → **Cosmic Event Story**
- **Creator economy / social-media skills / youth career campaign** → **Gen-Z Influencer Editorial**
- **Font launch / mascot-led type showcase / retro brand specimen** → **Retro Cartoon Type Specimen**
- **Typeface tester / modular creative showcase / toy browser UI** → **Retro Browser Type Specimen**

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


#### Expanded thirty-eight-style scenario matrix

| Scenario | First candidate | Strong alternate |
|---|---|---|
| Handmade/art/culture | `paper-cut-editorial` | `retro-mac-editorial` |
| Dreamy image-led culture | `pixel-pastoral` | `dreamy-indie-software` |
| Fashion/music portrait campaign | `glitch-fashion` | `y2k-portfolio-collage` |
| Nature/wellness ecommerce | `organic-garden-commerce` | `experimental-pet-editorial` when brand is more eccentric |
| Friendly agency/open source | `pixel-humanist-agency` | `retro-browser-type-specimen` |
| Developer/Web3 community | `terminal-community` | `pixel-humanist-agency` |
| Archive/history/case study | `retro-mac-editorial` | `paper-cut-editorial` |
| Food/FMCG mascot commerce | `playful-risograph` | `retro-marketplace-pop` |
| Game/entertainment campaign | `cartoon-campaign` | `retro-cartoon-type-specimen` |
| Pet/lifestyle boutique | `experimental-pet-editorial` | `organic-garden-commerce` |
| Indie software/game-like product | `dreamy-indie-software` | `neo-future-aigc` |
| Creative AI/new-media studio | `neo-future-aigc` | `glitch-fashion` |
| Trend/report/publication | `maximal-collage-report` | `retro-mac-editorial` |
| Visual-design portfolio | `y2k-portfolio-collage` | `neo-future-aigc` |
| Retail event/pop-up activation | `retro-marketplace-pop` | `playful-risograph` |
| Edtech/course/student marketing | `neo-brutal-education` | `genz-influencer-editorial` |
| Celebration/community event | `cosmic-event-story` | `dreamy-indie-software` |
| Creator/social-skills campaign | `genz-influencer-editorial` | `neo-brutal-education` |
| Font launch/mascot specimen | `retro-cartoon-type-specimen` | `retro-browser-type-specimen` |
| Interactive type tester/modular creative showcase | `retro-browser-type-specimen` | `pixel-humanist-agency` |

### 2.8 Hard gates before scoring

Scoring is not enough by itself. An AI should first eliminate or penalize styles that cannot be executed responsibly with the actual project.

**Asset gate:** illustration-heavy styles need an illustration pipeline; photo-led styles need strong photography; glitch-fashion needs a focal editorial image; retro-computing styles need original bitmap/window assets. If those assets do not exist and cannot be created within the implementation budget, reduce that candidate before scoring.

**Density gate:** visually aggressive poster styles can still wrap a real product, but dense task areas must become calmer. For dashboards, tables, documentation, forms, and repeated workflows, prefer `terminal-community`, `retro-mac-editorial`, or a restrained `pixel-humanist-agency`. Use campaign styles primarily in the marketing shell.

**Accessibility gate:** reject any treatment that requires critical information to become tiny, decorative, corrupted, low-contrast, or motion-dependent. First reduce style strength and move expression into typography, color, illustration, framing, and section composition. If usability still conflicts with the style, usability wins.

**Interaction gate:** the more complex the workflow, the more conventional the control layer should become. A page can look radically editorial while its inputs, menus, focus states, tables, and dialogs remain boringly competent. Humanity survives another checkbox.

### 2.9 Canonical style IDs and legacy aliases

Use the fifty-eight canonical IDs when generating a website:

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

| **Paper-Cut Editorial** | creative studios, artist portfolios | dense enterprise dashboards, banking | oversized irregular display lettering, warm cream paper, earthy green |
| **Pixel Pastoral** | music microsites, fashion drops | formal enterprise software, dense documentation | giant pixel-script word, grainy pastoral photo, acidic yellow |
| **Glitch Fashion Editorial** | fashion, music | healthcare, banking | oversized distorted headline, recognizable corrupted portrait, fine grid overlay |
| **Organic Garden Commerce** | gardening, plants | cybersecurity, developer consoles | lush full-bleed nature photo, huge rounded lowercase wordmark, cream commerce surface |
| **Pixel Humanist Agency** | creative agencies, developer studios | luxury brands, formal institutions | pale lime field, huge black/white pixel symbol, mono copy |
| **Neo-Terminal Community** | developer communities, blockchain | wellness, weddings | near-black grid, giant pixel Earth/object, acid lime |
| **Macintosh Editorial Archive** | design history, museums | fast checkout flows, dense operational dashboards | serif editorial title, classic desktop frame, bitmap icons |
| **Playful Risograph Packaging** | food and beverage, snacks | serious B2B, legal | mustard field, turquoise/orange palette, mascots |
| **Cartoon Survival Campaign** | games, entertainment | professional services, banking | flat lime/black/teal/yellow bands, thick comic outlines, giant uppercase campaign type |
| **Experimental Pet Editorial Commerce** | pet brands, pet apparel | enterprise dashboards, banking | brick-red field, acid-lime commerce UI, oversized circular pet portrait |
| **Dreamy Indie Software** | indie software, game-adjacent products | government portals, banking | deep navy star field, puffy 3D hero wordmark, soft cartoon clouds |
| **Neo-Future AIGC Creative** | AIGC tools, creative technology | traditional banking, legal services | black/white hard split, cyan gel-like hero device, neon lime/pink/cyan micro-accents |
| **Maximal Collage Report** | trend reports, research microsites | checkout flows, banking apps | electric cobalt hero, toxic yellow-green title accent, surreal cutout orbit |
| **Y2K Portfolio Collage** | visual design portfolios, student portfolios | banking, law firms | black grid background, hot-pink oversized frame, checkerboard accents |
| **Retro Marketplace Pop** | retail events, marketplace campaigns | enterprise software, professional services | primary blue/red/yellow palette, oversized retail product objects, thick black vector outlines |
| **Neo-Brutal Education** | education programs, edtech landing pages | serious finance, luxury hospitality | charcoal base, giant condensed white/yellow/blue type, colorful education object illustrations |
| **Cosmic Event Story** | event microsites, anniversary campaigns | banking, admin dashboards | deep purple/navy cosmic field, floating illustrated planets, scalloped canopy |
| **Gen-Z Influencer Editorial** | creator economy courses, social-media education | luxury finance, legal portals | saturated cobalt field, acid-lime rectangular frames, huge pale-lime/white sans type |
| **Retro Cartoon Type Specimen** | type foundries, font launches | serious enterprise, banking | periwinkle/purple field, giant cream extruded type, pink checkerboard floor |
| **Retro Browser Type Specimen** | typeface launches, creative portfolios | banking, healthcare | saturated green/yellow/blue/pink palette, thick black outlines, rounded browser-window modules |
| **Summer Accessory Editorial** | fashion campaigns, accessory ecommerce | enterprise dashboards, developer documentation | giant white bag/object frame, pink/yellow/cyan/green accessory cluster, expressive black editorial title |
| **Retro Supermarket Sticker Editorial** | retail events, grocery campaigns | luxury finance, healthcare | giant red headline, blue basket/container, thick white sticker outlines |
| **Cute Cat Product Collage** | pet products, food packaging | cybersecurity, finance | cream poster field, warped brown wordmark, tilted shopping basket |
| **Kawaii Recruitment Poster** | recruitment pages, student clubs | banking, formal hiring portals | pale yellow paper sheet, soft blue background, chunky navy hand lettering |
| **Valentine Kawaii Campaign** | Valentine campaigns, pet/lifestyle collaborations | enterprise tools, legal/finance | candy pink field, giant white headline, cyan contrast panel |
| **Illustration Zine Adventure** | illustration portfolios, animation projects | finance, enterprise dashboards | sky-blue field, rough white hand lettering, large perspective character |
| **Dreamy Art Magazine Editorial** | artist portfolios, magazines | dense dashboards, mass-market ecommerce | giant blue serif masthead, fisheye/top-down illustrated studio, muted olive-blue palette |
| **Hand-Drawn Travel Zine** | travel campaigns, tourism editorials | enterprise tools, banking | white field, red sculptural lettering, blue script overlay |
| **Nostalgic Summer Magazine** | youth magazines, summer campaigns | high-energy commerce, enterprise dashboards | pale blue/cream field, watercolor youth characters, large puddle reflection |
| **Manga Food Editorial** | food campaigns, restaurants | finance, enterprise software | warm cream/olive/orange palette, anime main character, large bento/meal foreground |
| **Post-Digital Type Collage** | design portfolios, creative studios | conservative enterprise, healthcare | huge mixed pixel/clean type, white field, blue selection highlight |
| **Scrapbook Portfolio Editorial** | student portfolios, designer resumes | executive corporate sites, banking | pale graph paper, cobalt textured banner, chunky playful display |
| **European Retro Color Matching** | brand systems, design studios | mascot-heavy kids brands, highly illustrative storytelling | deep teal field, muted aqua panel, pale cream circle/panel |
| **Pixel Flower Editorial** | music microsites, fashion campaigns | dense commerce, enterprise tools | royal-blue field, huge cream serif word, oversized pixel flower |
| **Botanical Papercut Typography** | eco brands, gardening projects | dense enterprise tools, banking | cream paper, object-built green/brown letters, flowers/leaves integrated into type |
| **Psychedelic Floral Wordmark** | music projects, festival campaigns | dense apps, enterprise software | black field, yellow psychedelic lettering, integrated flowers |
| **Hand-Painted Folk Poster** | food brands, indie posters | enterprise tools, luxury legal | deep cobalt field, rough cream lettering, large orange fish/object |
| **Magical-Girl Retro Browser** | creative portfolios, game/community pages | formal enterprise, banking | cobalt browser frame, pale yellow grid workspace, bubbly Japanese wordmark |
| **Cinematic Floral Research** | research tools, premium nature-tech landing pages | dense dashboards, bargain retail | deep blue sky, shallow-focus meadow, handwritten white hero line, tiny restrained UI |
| **Monochrome Storybook Brand** | indie games, character IP, collectibles | formal enterprise, finance | giant black textured wordmark, monochrome character ensemble, one warm sticker accent |
| **Retro Game Manual Mascot** | game campaigns, character drops, fan microsites | formal services, healthcare | cream manual field, black/lime block type, chunky mascot, red comic label |
| **Cinematic Anime Portfolio** | illustrators, concept artists, animation portfolios | utility products, finance | painterly character artwork, film-cover composition, oversized white brush title |
| **Bold Food-Truck Editorial** | catering, street food, casual restaurants | enterprise tools, quiet luxury | giant condensed black type, candid food photo, cream paper, lime/pink stickers |
| **Kinetic Product Landing** | single-goal landing pages, launches, waitlists | dashboards, marketplaces | poster-scale type, one product motif, alternating loud/quiet conversion rhythm |
| **Spatial SaaS Workbench** | SaaS, AI tools, productivity platforms | character campaigns | real product scenes, anchored annotations, calm technical grid, workflow proof |
| **Gallery Index Portfolio** | design, photography, creative portfolios | ecommerce catalogs | typographic work index tied to large changing media, minimal interface |
| **Typographic Studio Agency** | creative agencies, studios | regulated services | giant positioning statement, project strips, process metadata, strong editorial asymmetry |
| **Editorial Mercantile Commerce** | fashion, beauty, design-object stores | B2B procurement | editorial campaign inserts inside rigorous product discovery and transactional UI |
| **Cinematic Product Stage** | premium devices, hardware, app products | large catalogs | single product protagonist, cinematic chapters, macro detail, sparse utility UI |
| **Signal Startup Launch** | startup launches, new categories | heritage/luxury institutions | category thesis, signal labels, momentum proof, product fragments, direct action |
| **Confident Business Editorial** | services, consultancies, local businesses | games, experimental campaigns | trust-first editorial hierarchy, contextual photography, visible proof and contact paths |
| **Signature Personal Brand** | founders, writers, designers, speakers | anonymous corporate products | recognizable name treatment, portrait/artifact, selected work, living notes/timeline |
| **Information-Dense Command Dashboard** | analytics, admin, operations | campaigns, portfolios | stable app shell, compact tables, tabular metrics, explicit state, almost no decoration |
| **Adaptive Workspace Web App** | editors, productivity tools, AI workspaces | brochure sites | stable shell plus task-adaptive panes, command access, contextual actions |
| **Tactile Menu Restaurant** | restaurants, cafes, bakeries, bars | enterprise software | tactile menu surfaces, large dish media, expressive category type, obvious reserve/hours/location |
| **Creator Scrapbook Channel** | creators, streamers, musicians | formal B2B | latest-first mixed-media scrapbook, stable archive metadata, community/support path |
| **Campaign Narrative Marketing** | campaigns, demand gen, launches | dashboards, documentation | chaptered argument, varied proof formats, escalating evidence, repeated but earned CTA |
| **Immersive App Showcase** | mobile/desktop app launches | products with no mature UI | real app-in-use scenes, synchronized copy, device context only when useful, clear download action |

---
The next section provides the full breakdown for each reference family. Use it as the primary source when deciding how a specific website should look and behave.
### 3.1 Complete Reference Coverage

Every unique visual reference supplied from the first Papercuto image through the latest food-truck editorial reference is represented by a canonical style profile. Fifteen additional model-authored frontend archetypes are listed separately in Section 3.2 and Profiles 4.44-4.58. Repeated uploads of the same Things reference map to the same `dreamy-indie-software` profile rather than creating a duplicate style.

| Reference order | Canonical style | Visual shorthand |
|---:|---|---|
| 1 | `paper-cut-editorial` | A tactile, handmade editorial system built from oversized irregular lettering, warm paper tones, earthy accents, hand-drawn annotations, and intentionally imperfect geometry |
| 2 | `pixel-pastoral` | A nostalgic low-resolution editorial style that contrasts grainy organic photography with giant bitmap or pixel-script typography and a tiny clean UI layer |
| 3 | `glitch-fashion` | A raw fashion-editorial system that combines oversized distorted typography, image fragmentation, visible grids, muted photography, and tiny disciplined microcopy |
| 4 | `organic-garden-commerce` | A clean but expressive ecommerce style pairing lush nature photography, cream paper-like surfaces, oversized rounded branding, soft organic shapes, and sparse product presentation |
| 5 | `pixel-humanist-agency` | A surprisingly warm agency/portfolio system that uses huge monochrome pixel graphics, pale lime fields, mono copy, blunt sans headings, and lots of intentional empty space |
| 6 | `terminal-community` | A dark retro-futurist technical style combining bitmap display type, pixel art, neon-lime accents, dense mono metadata, technical grids, and modular terminal-like panels |
| 7 | `retro-mac-editorial` | An archival editorial system that juxtaposes elegant serif typography with classic desktop windows, bitmap icons, pale blue surfaces, monochrome line art, and nested interface metaphors |
| 8 | `playful-risograph` | A joyful consumer-brand style using bold flat color, custom chunky lettering, mascot illustration, hand-drawn copy, halftone/stipple shading, and product packaging as the hero graphic |
| 9 | `cartoon-campaign` | A high-impact campaign style built from giant blunt headlines, flat color bands, thick outlined cartoon illustrations, simple CTAs, and playful irregular section transitions |
| 10 | `experimental-pet-editorial` | An eccentric pet and lifestyle commerce language that combines deep brick red, acid lime, circular portraiture, typographic orbit effects, scalloped pattern systems, and surprisingly clean transactional UI |
| 11 | `dreamy-indie-software` | A soft dark-mode product language pairing atmospheric starry space, puffy 3D branding, pastel modular cards, game-world imagery, and disciplined software content structure |
| 12 | `neo-future-aigc` | A crisp post-digital creative-tech style that uses a brutal black/white base, fluorescent candy accents, experimental micro-labels, modular editorial cards, and one glossy gel-like hero object |
| 13 | `maximal-collage-report` | A high-impact report and publication language combining surreal collage, oversized condensed typography, cobalt and toxic-yellow accents, black editorial grids, modular chapters, and dense-but-disciplined storytelling |
| 14 | `y2k-portfolio-collage` | A youthful maximal portfolio language combining Y2K stickers, black technical grids, hot-pink framing, checkerboards, anime/cartoon imagery, bilingual display type, and numbered project catalog modules |
| 15 | `retro-marketplace-pop` | A hyper-commercial pop system inspired by retro supermarket packaging, primary-color vector illustration, huge product objects, sticker labels, and Y2K retail typography |
| 16 | `neo-brutal-education` | A youth-focused education system combining dark neo-brutal foundations, giant condensed campaign type, colorful sticker badges, playful 3D/cartoon educational objects, and simple high-contrast program modules |
| 17 | `cosmic-event-story` | A gamified event microsite language that turns scrolling into a journey through a playful illustrated universe using cosmic scenes, scallops, waves, clouds, cards, and reward moments |
| 18 | `genz-influencer-editorial` | A clean youth editorial system using cobalt and acid-lime color blocking, flat character illustration, huge modern sans typography, pixel-number markers, and modular educational scenes |
| 19 | `retro-cartoon-type-specimen` | A retro cartoon branding system that combines giant dimensional display typography, checkerboards, cloud-and-mascot illustration, stacked color shadows, browser-window specimen modules, and 70s/90s cheerful graphics |
| 20 | `retro-browser-type-specimen` | A modular retro-browser specimen system using saturated green, yellow, blue and pink, thick black outlines, toy-like browser windows, distorted display type, cloud mascots, and checkerboard staging |
| 21 | `summer-accessory-editorial` | A fashion/lifestyle editorial system where one oversized physical container becomes the page frame and colorful accessories form a controlled spill around bold typography |
| 22 | `retro-supermarket-sticker` | A loud retail-poster system combining supermarket objects, sticker cutouts, receipts, barcodes, and oversized red typography on a blue/white/yellow base |
| 23 | `cat-product-collage` | A soft playful consumer-brand language combining tilted product baskets, cute animal mascots, pastel packaging, warped display type, and spacious cream editorial framing |
| 24 | `kawaii-recruitment-poster` | A cheerful recruitment/campaign style built from stationery-paper framing, hand-drawn display type, cute mascots, comic bursts, and handwritten annotations |
| 25 | `valentine-kawaii-campaign` | A saturated romantic campaign language using pink environmental framing, cyan contrast panels, cute chibi mascots, bold white headline type, and layered Valentine symbols |
| 26 | `illustration-zine-adventure` | A whimsical illustrated-zine system using exaggerated perspective, hand-painted character art, rough display lettering, and layered foreground objects |
| 27 | `dreamy-art-magazine` | A nostalgic art-magazine system pairing sophisticated oversized serif typography with dreamy illustrated environments, fisheye perspective, and restrained editorial metadata |
| 28 | `handdrawn-travel-zine` | A spacious travel-journal system combining hand-built display lettering, script overlays, loose brush marks, illustrated travelers, botanical line art, and handwritten metadata |
| 29 | `nostalgic-summer-magazine` | A soft nostalgic youth-editorial system built from watercolor/pencil illustration, pale seasonal color, reflective compositions, translucent mastheads, and sparse magazine metadata |
| 30 | `manga-food-editorial` | A lively food-campaign system using manga-style character illustration, dramatic close-up perspective, a hero meal/product, cute mini mascots, and warm print texture |
| 31 | `post-digital-type-collage` | A conceptual typography-first editorial system combining Swiss white-space discipline, bitmap wordforms, clean grotesk type, diagram annotations, and absurd everyday-object cutouts |
| 32 | `scrapbook-portfolio` | A cheerful portfolio/resume system combining graph paper, textured paint panels, stationery props, sticker labels, hand-drawn display type, and structured information modules |
| 33 | `european-color-matching` | A restrained modular editorial system built from deep teal, muted aqua, pale cream, oversized geometric type, simple circles, large numerals, and clean rounded fields |
| 34 | `pixel-flower-editorial` | A minimalist romantic editorial style that contrasts elegant serif typography with crude pixel flowers on a single saturated color field |
| 35 | `botanical-papercut-typography` | A handcrafted botanical type system where letters themselves are assembled from plants, objects, and cut-paper forms on warm cream stock |
| 36 | `psychedelic-floral-wordmark` | A bold minimal wordmark system using only black, yellow, organic psychedelic lettering, and integrated floral forms |
| 37 | `folk-fish-poster` | A naïve folk-graphic system using a single deep color field, rough hand-painted lettering, one oversized flat illustration, and intentionally imperfect brush edges |
| 38 | `magical-girl-browser` | A dense playful Y2K desktop system combining early-browser/OS chrome, magical-girl mascots, bubbly display lettering, halftone textures, folders, popups, and small game HUD details |
| 39 | `cinematic-floral-research` | A premium nature-tech landing system pairing cinematic shallow-focus flower photography, handwritten white hero typography, tiny precise navigation, and a restrained CTA |
| 40 | `monochrome-storybook-brand` | A character-first black-and-white storybook web language built from giant textured lettering, hand-drawn fantasy mascots, sparse UI, and one tiny warm accent |
| 41 | `retro-game-manual-mascot` | A collectible game-guide poster system combining cream paper, giant black/lime block type, one chunky mascot, comic labels, and halftone grain |
| 42 | `cinematic-anime-portfolio` | A painterly character-art portfolio language that treats the hero like an animated-film cover with white brush lettering and sparse project metadata |
| 43 | `bold-foodtruck-editorial` | A hospitality campaign language combining giant condensed typography, candid food photography, warm paper, rounded crops, and lime/pink sticker accents |

### 3.2 Frontend Website-Type Intelligence

The fifteen profiles below are **model-authored frontend archetypes**, not additional image references. They were written from the accumulated frontend and visual-style intelligence represented across this document. Their job is structural: each one begins from what a particular website type must accomplish, then defines an art direction that can carry personality without damaging that job.

A website type and a visual style are not the same thing. A `Dashboard` requires stable spatial memory and dense state communication; a `Landing page` requires fast comprehension and one conversion path; a `Portfolio` requires project differentiation and authorship. The AI must respect those structural differences before choosing colors, type, illustration, or motion.

| Website type | Primary authored style | Core frontend intelligence |
|---|---|---|
| Landing page | `kinetic-product-landing` | One promise, one product/concept motif, one dominant conversion path, escalating proof |
| SaaS website | `spatial-saas-workbench` | Demonstrate real workflows, connect claims to product states, separate marketing expression from product-control clarity |
| Portfolio | `gallery-index-portfolio` | Work first, index and media linked, direct case-study access, no generic masonry wall |
| Agency website | `typographic-studio-agency` | Point of view first, work as evidence, capabilities/process later, strong inquiry path |
| E-commerce store | `editorial-mercantile-commerce` | Editorial desire around predictable price/variant/cart/filter behavior |
| Product website | `cinematic-product-stage` | One protagonist product, feature chapters, macro/detail evidence, obvious ownership action |
| Startup website | `signal-startup-launch` | Define category fast, show why now, show product, show momentum, recruit/convert clearly |
| Business website | `confident-business-editorial` | Trust, service clarity, proof, people/location context, contact without hunting |
| Personal brand website | `signature-personal-brand` | One memorable identity signature, selected work, voice, timeline, relationship paths |
| Dashboard | `information-dense-command-dashboard` | Stable shell, scan speed, explicit state, dense data, keyboard/operational efficiency |
| Web app | `adaptive-workspace-webapp` | Stable orientation with task-adaptive workspace, progressive disclosure, contextual actions |
| Restaurant website | `tactile-menu-restaurant` | Appetite first, menu as real text, hours/location/reservation immediately available |
| Creator website | `creator-scrapbook-channel` | Latest content, evergreen archive, creator personality, community and monetization without clutter |
| Marketing website | `campaign-narrative-marketing` | Sequence the argument, vary proof formats, escalate specificity, repeat CTA only when earned |
| App showcase | `immersive-app-showcase` | Show the app behaving, synchronize copy with real interface scenes, keep download/try action obvious |

#### 3.2.1 Website type is a hard structural input

Before style scoring, the AI must identify the website type. If the user gives one of the fifteen supported types explicitly, treat it as a hard structural constraint. If the project spans types, choose the type that describes the **primary user job** and use the second type only as a supporting constraint.

Examples:

- A SaaS homepage with login is still primarily a **SaaS website**, not a web app, until the user enters the actual product.
- A creator selling merchandise is still primarily a **Creator website** if content and audience relationship are the main reason to visit; commerce becomes a secondary system.
- A restaurant with online ordering remains a **Restaurant website** in the marketing shell; the ordering flow itself should use utility-first commerce rules.
- A startup homepage may use `signal-startup-launch`, while the authenticated product uses `adaptive-workspace-webapp` or `information-dense-command-dashboard`.

#### 3.2.2 Marketing shell versus task shell

For products that include both marketing and application surfaces, do not force one expressive grammar across both at equal strength.

- Marketing shell: style strength may reach `0.70-0.90`.
- Logged-in task shell: normally reduce expressive strength to `0.35-0.60`.
- Checkout, forms, tables, editors, dashboards, and repeated operational workflows must preserve conventional control anatomy even if the surrounding brand is highly stylized.

#### 3.2.3 Frontend quality gates

Every generated frontend must pass these gates in addition to the global style rubric:

1. **Purpose gate:** the first viewport communicates what the site is for.
2. **Action gate:** the primary action is visually and semantically obvious.
3. **Information architecture gate:** navigation reflects user goals, not component-library categories.
4. **Responsive gate:** mobile is recomposed around the task, never just scaled down.
5. **State gate:** interactive components expose hover, focus, active, disabled, loading, empty, error, and success states where relevant.
6. **Content gate:** real content hierarchy determines layout; placeholder card counts do not determine layout.
7. **Performance gate:** expensive media and motion must have budget and fallback behavior.
8. **Accessibility gate:** expression cannot depend on inaccessible type, color-only states, tiny text, or motion.
9. **Authenticity gate:** product screenshots, metrics, reviews, claims, and business facts must not be fabricated.
10. **Anti-template gate:** if swapping logo and accent color would make the site indistinguishable from a generic template, the art direction is insufficient.

#### 3.2.4 Frontend composition rule

Do not begin by selecting components such as `Hero`, `Features`, `Bento`, `Testimonials`, and `Pricing`. Begin with the communication or task sequence. Components are consequences of that sequence.

For example, a SaaS site may need:

`category definition -> real workflow -> outcome proof -> integration context -> trust/security -> conversion`

A restaurant may need:

`appetite/atmosphere -> menu -> practical visit information -> social proof -> reservation`

A portfolio may need:

`identity -> project index -> selected work -> deeper case studies -> about -> contact`

Those sequences should produce different page structures even if they share the same component library underneath.

#### 3.2.5 Original archetype selection rule

The fifteen authored styles are canonical peers of the reference-derived styles. Do not auto-select an authored style merely because the website type matches its name. Use it as the **first structural candidate**, then compare it against compatible reference-derived styles using the existing weighted rubric and hard gates.

A visually specific user request always outranks the default archetype when it remains suitable for the website job.

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

### 4.10 Experimental Pet Editorial Commerce

**Reference family:** Reference image #10 / Experimental Pet Editorial Commerce

**Aliases:** pet editorial, scalloped pet commerce, experimental animal brand, retro pet boutique

**One-line summary:** An eccentric pet and lifestyle commerce language that combines deep brick red, acid lime, circular portraiture, typographic orbit effects, scalloped pattern systems, and surprisingly clean transactional UI.

#### AI Selection Snapshot

**Choose this style when:** pet or lifestyle photography is central; brand can support unusual typography; commerce needs personality without sacrificing checkout clarity; ornamental pattern language fits the identity.

**Reject or heavily reduce it when:** the interface is mostly tables/forms; formal institutional trust dominates; no strong hero photography or custom graphic assets exist.

**Natural content density:** **medium** — Works for product storytelling and moderate catalog content; dense utility flows should move into calmer panels.

**Media dependency:** 9/10. Ideal assets: strong pet portrait photography, product screenshots or ecommerce UI, original motif/pattern SVGs. Needs one charismatic focal image or a very strong mascot/illustration substitute.

**Interaction fit:** 8/10 — Excellent for branded ecommerce if transaction controls stay simple and high-contrast.

**Accessibility fit:** 7/10 — Curved/orbiting type must remain decorative; essential labels stay horizontal and conventional.

**Implementation budget:** medium-high.

#### Design Philosophy & Brand Personality

Treat the brand world as a playful printed universe surrounding a competent shop. Typography may bend around objects and borders may become motifs, but buying, forms, and navigation remain obvious.

**Brand personality:** eccentric, affectionate, fashion-aware, art-directed, playful, boutique, slightly surreal.

#### Reference Visual Breakdown

Deep brick-red pet-brand composition with an oversized circular dog portrait, acid-lime checkout UI, tennis-ball typography, dotted construction grid, scalloped/bone-like borders, and ornate display lettering.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** strong pet portrait photography, product screenshots or ecommerce UI, original motif/pattern SVGs.

**Interaction strategy:** Excellent for branded ecommerce if transaction controls stay simple and high-contrast.

**Form treatment:** clean rectangular fields; ornament may frame but never replace field boundaries

#### Recognition Heuristics

- The page should feel like an art-directed pet magazine that happens to sell things.
- The ornamental frame system must be visible in at least one major transition.
- Functional UI must look calmer than the surrounding brand world.

#### Incompatible Secondary Styles

- terminal-community at high strength
- glitch-fashion at high strength
- cold corporate minimalism

#### Fallback Behavior

If custom scalloped/pet motifs are unavailable, preserve the brick-red + acid-lime palette, circular hero portrait, curved decorative typography, and clean commerce UI instead of replacing the page with generic pet-store cards.

#### Common AI Failure Modes

- turning every panel into a scalloped blob
- wrapping critical copy on curves
- generic pet-store ecommerce cards
- using random paw-print clipart

#### Description

A brand-first editorial commerce system where pet photography and eccentric typography carry emotion while clean product and checkout modules preserve usability. Decorative borders behave like living patterns rather than ordinary containers.

#### Emotional Tone

- warm
- quirky
- stylish
- tactile
- friendly
- unexpected

#### Best-Fit Websites

- pet brands
- pet apparel
- boutique ecommerce
- fashionable lifestyle goods
- creative DTC
- editorial commerce
- animal-care campaigns

#### Poor-Fit Websites

- enterprise dashboards
- banking
- medical records
- legal portals
- dense developer documentation

#### Typical Audience

- pet owners
- design-aware shoppers
- younger lifestyle audiences
- boutique ecommerce customers

#### Visual Keywords

- brick red
- acid lime
- circular pet portrait
- curved typography
- scalloped borders
- boutique ecommerce
- editorial pet brand

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#9B302C` | Main page or major section field |
| `surface` | `#AEE66B` | Secondary surface / panel |
| `text` | `#F6E9CF` | Primary readable text |
| `muted_text` | `#D7C3A8` | Secondary copy and metadata |
| `secondary` | `#6F1F23` | Supporting brand color |
| `accent` | `#B9F06D` | High-energy accent / CTA / marker |
| `dark` | `#241A18` | Dark anchor / inverse section |
| `line` | `#D9A797` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** ornamental condensed serif/script mix with oversized bespoke letterforms.
- **Body:** clean modern grotesk.
- **Annotation / utility:** narrow clean sans.
- Display weight: `600-900`; line-height: `0.82-0.98`.
- Display use: brand statements and editorial moments only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** 12-column editorial/commerce grid with visible dotted construction lines as decoration.

**Alignment:** central portrait anchors with asymmetric supporting UI.

**Whitespace:** moderate.

**Overlap:** high around decorative graphics; low around controls.

**Section rhythm:** portrait/product showcase -> typographic manifesto -> patterned transition -> clean commerce/footer scene.

#### Hero Pattern

oversized circular pet portrait + branded mobile/desktop UI mockups + deep red field + small decorative type and stitched/dotted guides

**Visual priority:** portrait-first.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

minimal header or thin editorial utility row.

#### Cards / Content Containers

clean lime/red transactional modules framed by decorative surroundings.

#### Buttons & CTAs

compact high-contrast flat controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** characterful studio pet photography with warm neutral styling.

**Illustration:** ornamental bones, scallops, paw/bubble motifs, circular type paths.

#### Iconography

small line icons or bespoke pet motifs.

#### Texture & Material

- subtle grain
- dotted grid
- soft pattern repetition

**Target strength:** 2-8% depending on layer.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** thin dotted guides plus large scalloped organic frames.
- **Radius:** mixed: precise UI 4-12px, decorative frames custom scallops.
- **Shadows:** little or none; let color and pattern separate layers.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `portrait/product showcase -> typographic manifesto -> patterned transition -> clean commerce/footer scene` rather than a generic gray divider.

#### Motion & Interaction

- slow portrait drift
- curved text orbit only if subtle
- scallop mask reveal
- small cart-control shift

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- keep portrait dominant
- re-stack commerce screenshots
- simplify orbiting copy
- convert giant scalloped frames into top/bottom edge motifs
- keep forms conventional

#### Accessibility Risks

- curved essential text
- low lime-on-red contrast
- decorative pattern overwhelming controls
- oversized portrait hiding navigation

#### Recognizable Signature Elements

- brick-red field
- acid-lime commerce UI
- oversized circular pet portrait
- typography wrapping around an object
- scalloped/bone-like border system
- dotted editorial grid

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 9/10 |
| Nostalgia | 6/10 |
| Technical | 2/10 |
| Organic | 7/10 |
| Editorial | 9/10 |
| Pixel | 1/10 |
| Illustration | 7/10 |
| Texture | 7/10 |
| Boldness | 9/10 |
| Commerce fit | 9/10 |
| Content density | 5/10 |

#### Complexity

**Medium-High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`organic-garden-commerce`** — use only as a supporting influence.

- **`playful-risograph`** — use only as a supporting influence.

- **`paper-cut-editorial`** — use only as a supporting influence.

#### Do

- Let one portrait own the composition.
- Keep transactional controls quiet and precise.
- Use ornamental borders as section architecture.
- Let typography interact with one object at a time.

#### Don't

- Do not make checkout decorative to the point of confusion.
- Do not use every pet motif simultaneously.
- Do not use tiny curved text for essential information.
- Do not soften the palette into generic pastel pet branding.

#### Implementation Recipe

1. Lock brick red + acid lime + cream.
2. Choose one strong portrait.
3. Create one scalloped/bone motif system.
4. Add one curved-type interaction around an object.
5. Keep shop/checkout controls rectangular and accessible.
6. Use decorative grid/pattern layers only after hierarchy is clear.

---

### 4.11 Dreamy Indie Software

**Reference family:** Reference image #11 / Dreamy Indie Software

**Aliases:** dreamy dark portfolio, soft game UI, indie software toy, pastel sci-fi web

**One-line summary:** A soft dark-mode product language pairing atmospheric starry space, puffy 3D branding, pastel modular cards, game-world imagery, and disciplined software content structure.

#### AI Selection Snapshot

**Choose this style when:** brand should feel emotional and playful; dark mode is appropriate; colorful product imagery exists; software content can be organized into modular showcases.

**Reject or heavily reduce it when:** institutional trust or dense task efficiency dominates; 3D/illustration assets cannot be produced; the product requires extremely austere professional tone.

**Natural content density:** **medium** — Supports moderate feature and log content when cards remain disciplined and the atmospheric layer stays sparse.

**Media dependency:** 9/10. Ideal assets: original soft 3D wordmark/object, game-like screenshots, colorful thumbnail art, small floating decorative assets. Needs either one convincing soft-3D hero or a strong illustrated replacement.

**Interaction fit:** 8/10 — Works well for product marketing and moderately interactive showcases; keep task flows calmer.

**Accessibility fit:** 8/10 — Dark-mode contrast is straightforward if tiny labels are kept non-critical and pastel-on-dark contrast is checked.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Create atmosphere first, then prove the product is real. The shell can feel dreamy, toy-like, and celestial, but cards and controls should remain organized enough to support actual software content.

**Brand personality:** imaginative, indie, friendly, curious, playful, craft-led, digital-native.

#### Reference Visual Breakdown

Deep navy star field with tiny clouds, a glossy pink 3D bubble wordmark, rounded lavender/blue product panels, game-like thumbnails, tiny pills, and floating miniature objects.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** original soft 3D wordmark/object, game-like screenshots, colorful thumbnail art, small floating decorative assets.

**Interaction strategy:** Works well for product marketing and moderately interactive showcases; keep task flows calmer.

**Form treatment:** dark simple controls with bright focus ring

#### Recognition Heuristics

- The hero should feel like an indie game title screen, but the content below should feel like a real product site.
- Only a few objects should be glossy/3D.
- Dark space should remain spacious rather than cyberpunk-dense.

#### Incompatible Secondary Styles

- glitch-fashion at maximal strength
- retro-marketplace-pop at high strength
- formal institutional minimalism

#### Fallback Behavior

If custom 3D assets are unavailable, use an original rounded display face with layered soft shadows, simple cloud SVGs, and colorful product imagery while preserving the deep navy atmospheric shell.

#### Common AI Failure Modes

- turning into generic purple dark-mode SaaS
- using glossy blobs everywhere
- too many floating objects
- making all cards identical

#### Description

An emotional software and portfolio system that lets the hero feel like a small dream world while the product sections below remain modular and legible. Cute 3D branding is concentrated in a few memorable moments rather than applied to every control.

#### Emotional Tone

- dreamy
- cozy
- nighttime
- whimsical
- soft
- optimistic

#### Best-Fit Websites

- indie software
- game-adjacent products
- creative tools
- small studios
- interactive portfolios
- community apps
- digital toys

#### Poor-Fit Websites

- government portals
- banking
- legal tools
- serious enterprise admin
- high-density analytics

#### Typical Audience

- creative technologists
- gamers
- designers
- younger software users
- indie communities

#### Visual Keywords

- dreamy dark
- soft 3D
- pastel sci-fi
- indie game UI
- rounded showcase
- star field

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#0E1021` | Main page or major section field |
| `surface` | `#171828` | Secondary surface / panel |
| `text` | `#F5F2FF` | Primary readable text |
| `muted_text` | `#AAA7C4` | Secondary copy and metadata |
| `secondary` | `#8176E8` | Supporting brand color |
| `accent` | `#F178A6` | High-energy accent / CTA / marker |
| `dark` | `#080912` | Dark anchor / inverse section |
| `line` | `#4A4D82` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** inflated rounded 3D/bubble display or heavy rounded sans.
- **Body:** clean modern sans.
- **Annotation / utility:** tiny rounded sans/mono.
- Display weight: `700-900`; line-height: `0.85-1.0`.
- Display use: hero wordmark and one or two emotional statements.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** 12-column dark editorial grid with modular showcase clusters.

**Alignment:** centered atmospheric hero, asymmetric card groups below.

**Whitespace:** high.

**Overlap:** selective floating-object overlap.

**Section rhythm:** dreamy hero -> rounded product showcase -> quiet manifesto -> log/book cards -> atmospheric footer.

#### Hero Pattern

starry navy field + small clouds + puffy 3D brand word + tiny intro copy + one subtle CTA

**Visual priority:** 3D wordmark-first.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

tiny edge-aligned pills.

#### Cards / Content Containers

rounded dark/lavender panels with colorful screenshot content.

#### Buttons & CTAs

small pastel or white pill/rounded rectangle.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare; use stylized screenshots or game imagery.

**Illustration:** soft 3D objects, clouds, small isometric/pixel-world elements.

#### Iconography

small friendly glyphs, consistent rounded style.

#### Texture & Material

- very subtle star noise
- soft vignette

**Target strength:** 1-4%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 1px lavender/blue or low-contrast light border.
- **Radius:** 16-28px on content modules.
- **Shadows:** soft floating-toy shadow only for hero objects.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `dreamy hero -> rounded product showcase -> quiet manifesto -> log/book cards -> atmospheric footer` rather than a generic gray divider.

#### Motion & Interaction

- slow cloud drift
- soft hero float
- card rise/fade
- tiny orbit or bob on decorative objects

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- simplify star field
- keep one puffy hero word at readable scale
- stack modular cards
- reduce floating side objects
- preserve dark-to-pastel contrast

#### Accessibility Risks

- too-small pastel labels
- glossy 3D applied to controls
- low contrast within dark cards
- excessive floating loops

#### Recognizable Signature Elements

- deep navy star field
- puffy 3D hero wordmark
- soft cartoon clouds
- rounded lavender/blue showcase cards
- game-like thumbnails
- tiny floating decorative objects

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 9/10 |
| Nostalgia | 5/10 |
| Technical | 4/10 |
| Organic | 3/10 |
| Editorial | 7/10 |
| Pixel | 4/10 |
| Illustration | 9/10 |
| Texture | 4/10 |
| Boldness | 7/10 |
| Commerce fit | 5/10 |
| Content density | 5/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`pixel-humanist-agency`** — use only as a supporting influence.

- **`pixel-pastoral`** — use only as a supporting influence.

- **`neo-future-aigc`** — use only as a supporting influence.

#### Do

- Concentrate delight in the hero.
- Keep cards readable and modular.
- Use pastel accents against near-black.
- Let screenshots carry product proof.

#### Don't

- Do not add neon cyberpunk grids by default.
- Do not apply 3D gloss to buttons and form fields.
- Do not fill every empty area with stars.
- Do not make the entire page a rounded-card wall.

#### Implementation Recipe

1. Start with near-black/navy.
2. Design one soft 3D or rounded hero word.
3. Add sparse clouds/stars.
4. Build a disciplined showcase grid.
5. Use 2-3 pastel accents only.
6. Animate large decorative objects slowly and controls quickly.

---

### 4.12 Neo-Future AIGC Creative

**Reference family:** Reference image #12 / Neo-Future AIGC Creative

**Aliases:** AIGC creative portfolio, gel device futurism, post-digital creative tech, candy-tech editorial

**One-line summary:** A crisp post-digital creative-tech style that uses a brutal black/white base, fluorescent candy accents, experimental micro-labels, modular editorial cards, and one glossy gel-like hero object.

#### AI Selection Snapshot

**Choose this style when:** creative technology is central; a strong hero render can be produced; brand accepts neon accent colors; editorial asymmetry fits the content.

**Reject or heavily reduce it when:** the project requires conservative institutional trust; the page is mostly forms/tables; 3D hero production is impossible and no strong alternative exists.

**Natural content density:** **medium** — Works with moderate portfolio/product density if modules stay simple and contrast remains strong.

**Media dependency:** 9/10. Ideal assets: one high-quality glossy 3D render, original motion/graphic assets, creative project thumbnails. Can fall back to strong vector geometry and typography if the hero render is unavailable.

**Interaction fit:** 8/10 — Good for creative tools and portfolio interactions; maintain conventional form behavior.

**Accessibility fit:** 8/10 — High contrast base is strong; neon-on-white combinations must be checked.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Keep the system graphic and typographic first. Futurism should come from one impossible object, precise asymmetry, and candy-color details, not from an ocean of gradients and glowing glass.

**Brand personality:** experimental, tech-forward, design-led, confident, playful, sharp, future-facing.

#### Reference Visual Breakdown

Black-and-white creative portfolio with neon cyan/lime/pink accents, asymmetrical grotesk typography, tiny capsule labels, modular black cards, and a phone wrapped in a glossy cyan gel-like 3D frame.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** one high-quality glossy 3D render, original motion/graphic assets, creative project thumbnails.

**Interaction strategy:** Good for creative tools and portfolio interactions; maintain conventional form behavior.

**Form treatment:** minimal high-contrast rectangular controls

#### Recognition Heuristics

- The page should feel contemporary and experimental even with all gradients removed.
- One glossy hero object is enough.
- Neon colors behave like candy punctuation, not background wallpaper.

#### Incompatible Secondary Styles

- paper-cut-editorial at high strength
- organic-garden-commerce at high strength
- retro-cartoon-type-specimen at maximal strength

#### Fallback Behavior

Without a custom 3D gel render, use one original fluid vector frame around a real device screenshot, keep the black/white split, and preserve fluorescent micro-labels plus asymmetric typography.

#### Common AI Failure Modes

- generic black AI landing page with cyan gradient
- too many glossy 3D objects
- neon on every component
- rounding every module

#### Description

A contemporary creative-tech system that feels futuristic without becoming generic cyberpunk. High-contrast black and white provide discipline; neon accents and one surreal glossy device/object provide the spectacle.

#### Emotional Tone

- electric
- clean
- curious
- inventive
- premium-playful

#### Best-Fit Websites

- AIGC tools
- creative technology
- design studios
- experimental portfolios
- new-media agencies
- creative coding products
- innovation campaigns

#### Poor-Fit Websites

- traditional banking
- legal services
- medical portals
- heritage luxury unless intentionally contrasted

#### Typical Audience

- designers
- creative technologists
- AI creators
- digital artists
- innovation teams

#### Visual Keywords

- post-digital
- AIGC
- gel 3D
- candy neon
- black white
- creative tech

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#050505` | Main page or major section field |
| `surface` | `#FFFFFF` | Secondary surface / panel |
| `text` | `#F7F7F7` | Primary readable text |
| `muted_text` | `#B7B7B7` | Secondary copy and metadata |
| `secondary` | `#35D6FF` | Supporting brand color |
| `accent` | `#B8FF4A` | High-energy accent / CTA / marker |
| `dark` | `#000000` | Dark anchor / inverse section |
| `line` | `#D8D8D8` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** large contemporary grotesk with abrupt line breaks and optional serif contrast accent.
- **Body:** clean neutral grotesk.
- **Annotation / utility:** tiny neo-grotesk.
- Display weight: `500-800`; line-height: `0.86-1.0`.
- Display use: hero and section titles.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** 12-column black/white editorial grid with nested asymmetric modules.

**Alignment:** strong asymmetry balanced by generous white space.

**Whitespace:** high.

**Overlap:** hero object may break black/white section boundary.

**Section rhythm:** black hero + gel object -> white breathing strip -> black modular portfolio cards -> minimal footer.

#### Hero Pattern

black field + large broken-line title + tiny capsule metadata + glossy cyan gel-framed device crossing into white section

**Visual priority:** object + type.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

tiny top labels with one or two playful capsules.

#### Cards / Content Containers

black modular editorial panels with sharp internal composition; rounded corners only when intentional.

#### Buttons & CTAs

small bright capsule or simple arrow control.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** creative project imagery; often screen/graphic-led.

**Illustration:** 3D gel frame, candy rods, starburst vectors, small surreal objects.

#### Iconography

simple minimal glyphs with occasional playful custom mark.

#### Texture & Material

- none or ultra-subtle grain

**Target strength:** 0-2%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** mostly none or 1px high-contrast rules.
- **Radius:** 0-24px, selective; hero gel object organic.
- **Shadows:** 3D object may cast realistic soft shadow; UI otherwise flat.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `black hero + gel object -> white breathing strip -> black modular portfolio cards -> minimal footer` rather than a generic gray divider.

#### Motion & Interaction

- gel-object slow float
- graphic line burst
- card mask reveal
- small capsule slide

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- keep black/white split clear
- scale hero object down but preserve overlap
- stack modular cards with unequal heights
- reduce tiny metadata density

#### Accessibility Risks

- neon text contrast on white
- overly decorative 3D
- tiny labels becoming controls
- generic AI-gradient drift

#### Recognizable Signature Elements

- black/white hard split
- cyan gel-like hero device
- neon lime/pink/cyan micro-accents
- asymmetric large grotesk title
- tiny capsule metadata
- modular black creative cards

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 8/10 |
| Nostalgia | 3/10 |
| Technical | 7/10 |
| Organic | 2/10 |
| Editorial | 9/10 |
| Pixel | 2/10 |
| Illustration | 8/10 |
| Texture | 2/10 |
| Boldness | 9/10 |
| Commerce fit | 5/10 |
| Content density | 6/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`dreamy-indie-software`** — use only as a supporting influence.

- **`glitch-fashion`** — use only as a supporting influence.

- **`y2k-portfolio-collage`** — use only as a supporting influence.

#### Do

- Use black/white as the discipline layer.
- Spend visual budget on one surreal hero object.
- Use neon accents in tiny decisive doses.
- Keep project modules varied.

#### Don't

- Do not add generic glowing orbs.
- Do not make every surface glass.
- Do not use candy colors for body text.
- Do not replace asymmetry with a centered app screenshot.

#### Implementation Recipe

1. Lock black + white.
2. Pick 2-3 fluorescent accents.
3. Create one gel/object hero.
4. Use large broken-line grotesk type.
5. Build asymmetric black modules below.
6. Keep utility controls calm and accessible.

---

### 4.13 Maximal Collage Report

**Reference family:** Reference image #13 / Maximal Collage Report

**Aliases:** surreal trend report, dinner party editorial, maximal report deck, collage publication

**One-line summary:** A high-impact report and publication language combining surreal collage, oversized condensed typography, cobalt and toxic-yellow accents, black editorial grids, modular chapters, and dense-but-disciplined storytelling.

#### AI Selection Snapshot

**Choose this style when:** the project has research/story chapters; cover impact matters; strong collage assets can be created; the content benefits from stats, quotes, and chapter modules.

**Reject or heavily reduce it when:** the main goal is repeated task completion; there is no content hierarchy to organize; the audience requires quiet institutional presentation.

**Natural content density:** **medium-high** — Can carry substantial content if dense text sits inside calm black/white editorial modules rather than the collage cover.

**Media dependency:** 9/10. Ideal assets: surreal cutout image library, original collage assets, strong charts/stats, portrait or object photography. Needs enough visual material for one compelling collage cover; interior can be more typographic.

**Interaction fit:** 5/10 — Best for reading, browsing, chapter navigation, and light data interaction.

**Accessibility fit:** 6/10 — Keep long-form text outside collage zones; tab labels and contents bars need clear contrast.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Let the cover seduce and the inside explain. Maximal collage should create curiosity while the report grid protects comprehension. Distortion belongs to imagery and display type, not long-form information.

**Brand personality:** cultural, provocative, research-driven, energetic, experimental, editorial, confident.

#### Reference Visual Breakdown

Electric cobalt cover with a giant white/yellow-green stacked title, surreal floating cutout objects, warped black-white patterns, followed by black editorial report pages with pink/blue collage panels, pull quotes, contents bars, and large statistics.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** surreal cutout image library, original collage assets, strong charts/stats, portrait or object photography.

**Interaction strategy:** Best for reading, browsing, chapter navigation, and light data interaction.

**Form treatment:** rare; use plain clean controls if needed

#### Recognition Heuristics

- The cover may feel like a poster explosion, but interior pages must feel like a real publication.
- At least one chapter system or contents structure should be visible.
- Collage objects should relate to the report theme rather than be random internet debris.

#### Incompatible Secondary Styles

- organic-garden-commerce at high strength
- cartoon-campaign at high strength
- quiet corporate minimalism

#### Fallback Behavior

If bespoke collage assets are limited, use fewer but larger cutout objects, warped vector patterns, strong chapter typography, and stat/quote modules instead of filling space with generic stock graphics.

#### Common AI Failure Modes

- making every interior page as chaotic as the cover
- random cutout objects with no theme
- tiny unreadable report body copy
- turning contents into generic cards

#### Description

A maximal publication system that turns research, trends, or cultural commentary into a visual event. The cover can be chaotic, but interior sections use clear report logic, chapter labels, statistics, and disciplined text columns.

#### Emotional Tone

- surreal
- bold
- busy
- intelligent
- playful
- urgent

#### Best-Fit Websites

- trend reports
- research microsites
- culture decks
- strategy presentations
- creative reports
- festival publications
- campaign storytelling

#### Poor-Fit Websites

- checkout flows
- banking apps
- medical portals
- dense operational dashboards

#### Typical Audience

- creative strategists
- marketers
- culture researchers
- design audiences
- presentation viewers

#### Visual Keywords

- maximal collage
- trend report
- surreal editorial
- cobalt
- toxic yellow
- contents bars

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#0A0A0B` | Main page or major section field |
| `surface` | `#202020` | Secondary surface / panel |
| `text` | `#F7F4EC` | Primary readable text |
| `muted_text` | `#C9C6BE` | Secondary copy and metadata |
| `secondary` | `#2452E8` | Supporting brand color |
| `accent` | `#DDF02A` | High-energy accent / CTA / marker |
| `dark` | `#050505` | Dark anchor / inverse section |
| `line` | `#414141` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** heavy condensed/block sans with stacked extrusion or gradient emphasis.
- **Body:** neutral editorial sans.
- **Annotation / utility:** condensed sans/mono.
- Display weight: `800-950`; line-height: `0.72-0.9`.
- Display use: cover and chapter statements.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** 12-column report grid with full-bleed cover and modular interior spreads.

**Alignment:** cover: radial/asymmetric collage; interior: disciplined editorial grid.

**Whitespace:** variable: dense cover, calmer interior.

**Overlap:** high on cover; low around long text.

**Section rhythm:** maximal cover -> contents -> stat spread -> collage chapter -> pull quote -> analytical text band.

#### Hero Pattern

electric cobalt field + giant stacked title + surreal floating cutout orbit + warped pattern corners + tiny subtitle

**Visual priority:** cover-title + collage.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

chapter/page index or compact editorial header.

#### Cards / Content Containers

report modules, stat blocks, quote panels; avoid app-like cards.

#### Buttons & CTAs

small flat chapter controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** cutout objects, portraits, product/culture imagery.

**Illustration:** surreal collage layers, warped patterns, sticker arrows, floating objects.

#### Iconography

minimal except for collage-specific symbolic objects.

#### Texture & Material

- subtle paper/grain
- selective halftone

**Target strength:** 2-8%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** hard crop edges, 1px rules inside report modules.
- **Radius:** 0-8px.
- **Shadows:** rare; cutouts may use subtle separation shadow.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `maximal cover -> contents -> stat spread -> collage chapter -> pull quote -> analytical text band` rather than a generic gray divider.

#### Motion & Interaction

- collage object drift on hero
- chapter mask reveal
- stat count-in
- contents bar slide

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- turn collage orbit into fewer large objects
- stack report spreads
- keep title bold but readable
- turn contents into vertical list
- reduce decorative cutouts around long text

#### Accessibility Risks

- visual overload
- small long-form text
- decorations masking chart meaning
- motion sickness from too much drift

#### Recognizable Signature Elements

- electric cobalt hero
- toxic yellow-green title accent
- surreal cutout orbit
- warped black-white patterns
- black report interiors
- bold contents bars and stat modules

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 8/10 |
| Nostalgia | 6/10 |
| Technical | 4/10 |
| Organic | 2/10 |
| Editorial | 10/10 |
| Pixel | 3/10 |
| Illustration | 9/10 |
| Texture | 7/10 |
| Boldness | 10/10 |
| Commerce fit | 3/10 |
| Content density | 7/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`glitch-fashion`** — use only as a supporting influence.

- **`neo-future-aigc`** — use only as a supporting influence.

- **`y2k-portfolio-collage`** — use only as a supporting influence.

#### Do

- Separate cover intensity from interior readability.
- Use chapter logic.
- Make stats and quotes visually distinct.
- Keep collage conceptually related to content.

#### Don't

- Do not scatter objects evenly.
- Do not use app-dashboard cards.
- Do not place long copy over warped patterns.
- Do not use ten accent colors at equal strength.

#### Implementation Recipe

1. Choose a cobalt/black/acid accent system.
2. Build one maximal cover composition.
3. Design a strict chapter grid.
4. Create reusable stat/quote/content modules.
5. Use surreal collage only where it helps storytelling.
6. End with a strong publication-like closing spread.

---

### 4.14 Y2K Portfolio Collage

**Reference family:** Reference image #14 / Y2K Portfolio Collage

**Aliases:** Gen-Z visual portfolio, sticker portfolio, anime Y2K collage, creative catalog web

**One-line summary:** A youthful maximal portfolio language combining Y2K stickers, black technical grids, hot-pink framing, checkerboards, anime/cartoon imagery, bilingual display type, and numbered project catalog modules.

#### AI Selection Snapshot

**Choose this style when:** the portfolio has diverse visual work; the creator wants a loud identity; sticker/anime/pop assets are appropriate; a catalog or project index is useful.

**Reject or heavily reduce it when:** the work itself is already extremely dense and needs neutral framing; formal trust is essential; accessibility sensitivity prohibits tiny decorative text.

**Natural content density:** **medium-high** — Can show many projects because the underlying grid and numbering system organize visual noise.

**Media dependency:** 10/10. Ideal assets: project thumbnails, original sticker assets, illustrations/anime-style originals, graphic patterns. Needs at least 4-6 strong project images or graphic assets.

**Interaction fit:** 6/10 — Good for browsing portfolios; keep project navigation explicit.

**Accessibility fit:** 5/10 — High risk from tiny repeated microtext and busy backgrounds; essential labels must be enlarged and simplified.

**Implementation budget:** medium-high.

#### Design Philosophy & Brand Personality

Let the portfolio look collected, not templated. Use sticker culture and loud display typography as identity, but keep projects indexed, numbered, and aligned to an underlying grid.

**Brand personality:** youthful, internet-native, maximal, graphic, playful, self-expressive, trend-aware.

#### Reference Visual Breakdown

Black gridded portfolio with hot-pink notebook frame, red checkerboard, cyan/lime sticker accents, anime/cartoon imagery, giant bilingual typography, repeated Visual Design microtext, and a numbered project catalog.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** project thumbnails, original sticker assets, illustrations/anime-style originals, graphic patterns.

**Interaction strategy:** Good for browsing portfolios; keep project navigation explicit.

**Form treatment:** keep plain and low-density

#### Recognition Heuristics

- At thumbnail size it should look like a designer scrapbook pinned to a grid.
- Project indexing must remain obvious despite stickers.
- The visual noise should decrease when entering detailed project content.

#### Incompatible Secondary Styles

- organic-garden-commerce at high strength
- formal luxury
- terminal-community at high strength

#### Fallback Behavior

If custom sticker/anime assets are limited, rely on a black grid, strong hot-pink frames, numbered catalog structure, checkerboard accents, and original geometric stickers rather than copying existing characters.

#### Common AI Failure Modes

- using copyrighted anime characters
- making every section a sticker pile
- tiny unreadable microtext
- losing project hierarchy

#### Description

A dense but organized showcase system for visual designers and youth culture. It behaves like a scrapbook laid over a strict black grid, with stickers and project thumbnails creating energy while numbering and catalog structure keep navigation understandable.

#### Emotional Tone

- loud
- fun
- nostalgic
- kinetic
- rebellious
- cute

#### Best-Fit Websites

- visual design portfolios
- student portfolios
- creative agencies
- streetwear campaigns
- anime/pop culture projects
- social content studios
- youth brands

#### Poor-Fit Websites

- banking
- law firms
- enterprise admin
- healthcare portals
- quiet luxury

#### Typical Audience

- Gen-Z creatives
- design recruiters
- visual culture audiences
- students
- social-media-native users

#### Visual Keywords

- Y2K
- sticker collage
- hot pink
- black grid
- anime-inspired
- portfolio catalog

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#111111` | Main page or major section field |
| `surface` | `#F6F0E7` | Secondary surface / panel |
| `text` | `#FFFFFF` | Primary readable text |
| `muted_text` | `#A9A9A9` | Secondary copy and metadata |
| `secondary` | `#FF42B5` | Supporting brand color |
| `accent` | `#5BE6DD` | High-energy accent / CTA / marker |
| `dark` | `#050505` | Dark anchor / inverse section |
| `line` | `#2E2E2E` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** bold grotesk plus expressive bilingual display forms and sticker labels.
- **Body:** clean neutral sans.
- **Annotation / utility:** micro grotesk/mono.
- Display weight: `700-950`; line-height: `0.78-0.95`.
- Display use: portfolio title, category labels, project numbering.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** visible dark grid + modular catalog columns.

**Alignment:** dense asymmetric collage over disciplined grid.

**Whitespace:** low-moderate.

**Overlap:** high in hero; controlled in catalog.

**Section rhythm:** maximal cover -> catalog index -> project thumbnails -> loud category breaks -> calmer case-study detail.

#### Hero Pattern

black grid + hot-pink oversized frame/notebook + giant portfolio title + sticker micro-labels + one main illustration/photo

**Visual priority:** type + notebook/sticker object.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

compact graphic labels or top band.

#### Cards / Content Containers

project thumbnails with colored corner markers and large numbering.

#### Buttons & CTAs

graphic sticker-like controls; clear text labels.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** project screenshots and visual work; often framed as stickers or pages.

**Illustration:** anime/cartoon originals, browser frames, stars/arrows, pixel decorations.

#### Iconography

small playful custom marks; consistent family.

#### Texture & Material

- grid
- subtle grain

**Target strength:** grid 8-14%; grain 1-3%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** thin neon/pink markers or black sticker outlines.
- **Radius:** 0-12px.
- **Shadows:** hard sticker shadow selectively.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `maximal cover -> catalog index -> project thumbnails -> loud category breaks -> calmer case-study detail` rather than a generic gray divider.

#### Motion & Interaction

- sticker pop-in
- catalog card stagger
- microtext marquee
- page/cover peel reveal

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- reduce repeated microtext
- stack catalog cards
- keep large project numbers
- simplify hero stickers to 3-5
- preserve black grid identity

#### Accessibility Risks

- tiny essential text
- overcrowding
- animated marquee distraction
- decorations hiding project titles

#### Recognizable Signature Elements

- black grid background
- hot-pink oversized frame
- checkerboard accents
- giant portfolio/bilingual type
- sticker/anime imagery
- numbered project catalog

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 10/10 |
| Nostalgia | 9/10 |
| Technical | 4/10 |
| Organic | 1/10 |
| Editorial | 9/10 |
| Pixel | 6/10 |
| Illustration | 9/10 |
| Texture | 7/10 |
| Boldness | 10/10 |
| Commerce fit | 3/10 |
| Content density | 7/10 |

#### Complexity

**Medium-High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`neo-future-aigc`** — use only as a supporting influence.

- **`glitch-fashion`** — use only as a supporting influence.

- **`retro-browser-type-specimen`** — use only as a supporting influence.

#### Do

- Number projects clearly.
- Use a strict grid under the collage.
- Reduce noise in detail views.
- Keep sticker assets original.

#### Don't

- Do not copy reference characters or logos.
- Do not use every checker/pink/cyan motif on every module.
- Do not hide navigation in decoration.
- Do not turn catalog entries into identical SaaS cards.

#### Implementation Recipe

1. Set black grid foundation.
2. Choose hot pink + 2 small accents.
3. Build a maximal cover with one hero frame.
4. Design a numbered catalog.
5. Create a small original sticker vocabulary.
6. Use calmer case-study detail sections.

---

### 4.15 Retro Marketplace Pop

**Reference family:** Reference image #15 / Retro Marketplace Pop

**Aliases:** supermarket pop, retro commercial vector, Y2K retail poster, marketplace maximalism

**One-line summary:** A hyper-commercial pop system inspired by retro supermarket packaging, primary-color vector illustration, huge product objects, sticker labels, and Y2K retail typography.

#### AI Selection Snapshot

**Choose this style when:** the goal is high-impact promotion; product/retail objects can become hero illustrations; event details are concise; brand embraces primary-color maximalism.

**Reject or heavily reduce it when:** content is long-form or utility-heavy; audience needs calm trust; the brand palette must remain muted.

**Natural content density:** **low-medium** — Visually dense but informationally sparse. Keep the actual message short.

**Media dependency:** 9/10. Ideal assets: original vector product objects, retro label graphics, event marks, bold type treatments. Can be built with original geometric retail objects and type, but needs a strong illustration system.

**Interaction fit:** 3/10 — Best as campaign/landing/poster experience; functional flows should move to calmer pages.

**Accessibility fit:** 6/10 — Keep event details in a high-contrast central block and do not rely on decorative logos for information.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Use the visual language of mass-market packaging as high-energy art direction. The chaos must orbit a central message, not compete with it. Every object should feel like part of the same illustrated retail universe.

**Brand personality:** loud, commercial, fun, urban, pop, energetic, collectible.

#### Reference Visual Breakdown

Hyper-saturated event poster filled with oversized detergent-like bottles, orange slices, retail labels, retro supermarket logos, red/yellow/blue packaging graphics, thick black outlines, and layered marketplace badges.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** original vector product objects, retro label graphics, event marks, bold type treatments.

**Interaction strategy:** Best as campaign/landing/poster experience; functional flows should move to calmer pages.

**Form treatment:** not in main poster field; use calm dedicated panel

#### Recognition Heuristics

- The actual event information must remain readable in under five seconds.
- Objects should crop aggressively at edges.
- The page should feel like an original fictional supermarket campaign, not copied packaging.

#### Incompatible Secondary Styles

- dreamy-indie-software at high strength
- organic-garden-commerce at high strength
- terminal-community

#### Fallback Behavior

If many custom objects cannot be produced, use 4-6 large original retail silhouettes, one strong central lockup, primary colors, and a retro label system rather than filling space with stock product PNGs.

#### Common AI Failure Modes

- copying real packaging too closely
- central information unreadable
- every object same size
- generic vector clipart

#### Description

A retail and event art direction that intentionally feels like an aisle of loud packaging scaled into a poster. Large vector objects and retro logos create spectacle while central information is locked into a clear badge-like message block.

#### Emotional Tone

- excited
- nostalgic
- saturated
- fast
- festive

#### Best-Fit Websites

- retail events
- marketplace campaigns
- pop-up stores
- streetwear drops
- youth festivals
- shopping promotions
- brand activations

#### Poor-Fit Websites

- enterprise software
- professional services
- healthcare
- calm wellness
- documentation

#### Typical Audience

- younger shoppers
- festival audiences
- streetwear communities
- pop-culture consumers

#### Visual Keywords

- retro supermarket
- primary colors
- retail pop
- packaging illustration
- maximal poster
- Y2K commercial

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#1677E8` | Main page or major section field |
| `surface` | `#F3E6D5` | Secondary surface / panel |
| `text` | `#0B0B0B` | Primary readable text |
| `muted_text` | `#484848` | Secondary copy and metadata |
| `secondary` | `#FF3344` | Supporting brand color |
| `accent` | `#FFF200` | High-energy accent / CTA / marker |
| `dark` | `#111111` | Dark anchor / inverse section |
| `line` | `#111111` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** retro supermarket display mix: italic script, chunky serif, condensed block, outlined label type.
- **Body:** compact clean sans.
- **Annotation / utility:** condensed sans.
- Display weight: `700-950`; line-height: `0.75-0.95`.
- Display use: event title and brand-like labels only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** central badge/info anchor with radial oversized-object composition.

**Alignment:** controlled radial/maximal.

**Whitespace:** low.

**Overlap:** very high around edge objects; central message protected.

**Section rhythm:** single poster-like hero or repeated campaign panels rather than conventional sections.

#### Hero Pattern

blue/cream field + giant illustrated retail objects entering from edges + central yellow/blue/red title badge + concise event details

**Visual priority:** central event lockup.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

minimal or absent on campaign splash; if website, tiny top utility bar.

#### Cards / Content Containers

avoid in hero; use flat campaign panels below.

#### Buttons & CTAs

bold rectangular/label CTA with black outline.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare; vector objects preferred.

**Illustration:** flat vector commercial packaging, thick outlines, simple shaded planes.

#### Iconography

retail symbols integrated into label system.

#### Texture & Material

- none or subtle print grain

**Target strength:** 0-3%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 2-4px dark outlines on objects and badges.
- **Radius:** object-specific, not a UI radius system.
- **Shadows:** hard graphic shadows or flat extrusion.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `single poster-like hero or repeated campaign panels rather than conventional sections` rather than a generic gray divider.

#### Motion & Interaction

- object parallax from edges
- label snap-in
- small sticker bounce

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- reduce edge objects
- protect central title and dates
- turn some objects into background crops
- move event details into dedicated mobile panel

#### Accessibility Risks

- essential details lost in clutter
- color overload
- copyright-like fake packaging
- motion overload

#### Recognizable Signature Elements

- primary blue/red/yellow palette
- oversized retail product objects
- thick black vector outlines
- retro supermarket lettering
- central event badge
- edge-to-edge maximal composition

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 10/10 |
| Nostalgia | 9/10 |
| Technical | 1/10 |
| Organic | 1/10 |
| Editorial | 8/10 |
| Pixel | 1/10 |
| Illustration | 10/10 |
| Texture | 3/10 |
| Boldness | 10/10 |
| Commerce fit | 10/10 |
| Content density | 4/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`playful-risograph`** — use only as a supporting influence.

- **`retro-cartoon-type-specimen`** — use only as a supporting influence.

- **`y2k-portfolio-collage`** — use only as a supporting influence.

#### Do

- Keep message center protected.
- Crop objects aggressively at edges.
- Use original fictional packaging language.
- Limit textual content.

#### Don't

- Do not use long paragraphs in the poster field.
- Do not make everything equally saturated and equally important.
- Do not use tiny event dates.
- Do not scatter generic icons as filler.

#### Implementation Recipe

1. Choose 3 primary colors + cream/black.
2. Create central message lockup.
3. Illustrate 4-8 oversized retail objects.
4. Place objects radially around center.
5. Add 2-3 badge families.
6. Move utility content below or outside the poster zone.

---

### 4.16 Neo-Brutal Education

**Reference family:** Reference image #16 / Neo-Brutal Education

**Aliases:** playful edtech brutalism, sticker education, cartoon learning landing page, bold educational poster

**One-line summary:** A youth-focused education system combining dark neo-brutal foundations, giant condensed campaign type, colorful sticker badges, playful 3D/cartoon educational objects, and simple high-contrast program modules.

#### AI Selection Snapshot

**Choose this style when:** the site markets programs or classes; youthful energy is desirable; custom educational objects can be illustrated; clear CTAs and benefit sections are important.

**Reject or heavily reduce it when:** academic publication density dominates; formal institutional tone must remain conservative; illustration budget is extremely low.

**Natural content density:** **medium** — Supports multiple programs and features if they are grouped into bold sections.

**Media dependency:** 8/10. Ideal assets: original educational object illustrations, course mockups, friendly avatars. Can use a smaller coherent set of custom object illustrations reused across sections.

**Interaction fit:** 8/10 — Compatible with course navigation and light enrollment flows; actual learning dashboards should use restrained strength.

**Accessibility fit:** 9/10 — High contrast and large typography are naturally accessible if colorful cards maintain text contrast.

**Implementation budget:** medium-high.

#### Design Philosophy & Brand Personality

Make learning feel like a campaign, not an LMS dashboard. Use poster-scale type and collectible-object illustration around a conventional information core.

**Brand personality:** energetic, encouraging, youthful, clear, playful, ambitious, modern.

#### Reference Visual Breakdown

Charcoal learning website with huge condensed white/yellow/blue headlines, colorful program cards, cartoon/3D pencils, planets, books and rockets, sticker badges, hard outlines, and a white gridded closing section.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** original educational object illustrations, course mockups, friendly avatars.

**Interaction strategy:** Compatible with course navigation and light enrollment flows; actual learning dashboards should use restrained strength.

**Form treatment:** simple rectangular inputs on calm surface

#### Recognition Heuristics

- The page should feel like a school campaign poster, not a childish worksheet.
- Program cards must remain scannable.
- One illustration system should cover all subjects.

#### Incompatible Secondary Styles

- glitch-fashion at high strength
- formal serif luxury
- terminal-community at high strength

#### Fallback Behavior

If 3D object art is limited, use flat thick-outline educational icons with the same palette, condensed type, sticker badges, and strong section blocks.

#### Common AI Failure Modes

- generic school template with colorful cards
- too many unrelated illustration styles
- buttons hidden among stickers
- every section using the exact same three-card layout

#### Description

An educational marketing language that feels energetic and approachable without sacrificing program clarity. Big type creates momentum; bright object illustrations make concepts memorable; program and class information stays in obvious structured blocks.

#### Emotional Tone

- motivating
- bright
- confident
- friendly
- active

#### Best-Fit Websites

- education programs
- edtech landing pages
- courses
- scholarship campaigns
- student services
- youth workshops
- learning communities

#### Poor-Fit Websites

- serious finance
- luxury hospitality
- legal services
- medical portals
- dense research databases

#### Typical Audience

- students
- parents
- teachers
- young learners
- course shoppers

#### Visual Keywords

- edtech
- neo-brutal
- condensed type
- sticker objects
- charcoal
- bright learning

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#20211F` | Main page or major section field |
| `surface` | `#FFF8E8` | Secondary surface / panel |
| `text` | `#FFFFFF` | Primary readable text |
| `muted_text` | `#C8C7C2` | Secondary copy and metadata |
| `secondary` | `#6672FF` | Supporting brand color |
| `accent` | `#FFD852` | High-energy accent / CTA / marker |
| `dark` | `#151515` | Dark anchor / inverse section |
| `line` | `#3A3A38` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** very tall condensed uppercase campaign display.
- **Body:** friendly geometric/grotesk sans.
- **Annotation / utility:** compact sans.
- Display weight: `800-950`; line-height: `0.76-0.9`.
- Display use: hero, section headlines, sticker callouts.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** 12-column dark campaign grid with large rounded/rectangular content stages.

**Alignment:** bold left-aligned type with floating illustration anchors.

**Whitespace:** medium.

**Overlap:** illustrations may overlap section edges, not control groups.

**Section rhythm:** dark poster hero -> program cards -> giant statement -> colorful tabbed feature -> white grid closing billboard.

#### Hero Pattern

charcoal field + giant condensed multicolor headline + 3-5 educational object stickers around it + tiny nav

**Visual priority:** type-first with object orbit.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

minimal thin top bar.

#### Cards / Content Containers

3 large colorful program panels with distinct hues and one hero object each.

#### Buttons & CTAs

high-contrast block/sticker buttons with dark border.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** optional; illustrations preferred.

**Illustration:** bright 3D/cartoon objects with strong contour and simple shading.

#### Iconography

bold illustrated icons; utility icons remain simple.

#### Texture & Material

- subtle grid
- very light paper/noise

**Target strength:** 1-8%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 2-4px dark outlines for sticker/UI elements.
- **Radius:** 12-24px on program cards; hard poster shapes elsewhere.
- **Shadows:** hard offset or subtle object shadow.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `dark poster hero -> program cards -> giant statement -> colorful tabbed feature -> white grid closing billboard` rather than a generic gray divider.

#### Motion & Interaction

- object float
- sticker pop
- card tab slide
- headline mask reveal

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- reduce hero object count
- stack program cards
- preserve condensed headline scale
- convert tabs to scrollable/stacked controls
- simplify closing grid

#### Accessibility Risks

- too many decorative objects
- multicolor headline contrast
- illustrations entering focus order
- overly playful tone for serious content

#### Recognizable Signature Elements

- charcoal base
- giant condensed white/yellow/blue type
- colorful education object illustrations
- sticker badges
- bright program cards
- white grid closing section

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 9/10 |
| Nostalgia | 4/10 |
| Technical | 3/10 |
| Organic | 2/10 |
| Editorial | 8/10 |
| Pixel | 1/10 |
| Illustration | 10/10 |
| Texture | 4/10 |
| Boldness | 10/10 |
| Commerce fit | 7/10 |
| Content density | 6/10 |

#### Complexity

**Medium-High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`genz-influencer-editorial`** — use only as a supporting influence.

- **`cartoon-campaign`** — use only as a supporting influence.

- **`retro-cartoon-type-specimen`** — use only as a supporting influence.

#### Do

- Keep one message per section.
- Use illustration as mnemonic.
- Make CTAs obvious.
- Vary section composition.

#### Don't

- Do not make all education content childish.
- Do not over-round every container.
- Do not put body text inside decorative stickers.
- Do not use generic stock 3D icons with mismatched rendering.

#### Implementation Recipe

1. Start charcoal + white.
2. Choose 3 bright accents.
3. Select condensed display.
4. Create a coherent education-object set.
5. Build one poster hero and varied program modules.
6. Finish with a contrasting grid billboard.

---

### 4.17 Cosmic Event Story

**Reference family:** Reference image #17 / Cosmic Event Story

**Aliases:** space event microsite, gamified celebration, K-event storytelling, cosmic community journey

**One-line summary:** A gamified event microsite language that turns scrolling into a journey through a playful illustrated universe using cosmic scenes, scallops, waves, clouds, cards, and reward moments.

#### AI Selection Snapshot

**Choose this style when:** the page has a clear sequence or milestones; celebration/rewards matter; illustrated scene transitions can be produced; scroll storytelling is desirable.

**Reject or heavily reduce it when:** the experience is primarily a utility app; content must be scanned nonlinearly; custom illustration/motion budget is unavailable.

**Natural content density:** **low-medium** — Best with short narrative blocks, milestones, cards, and reward modules rather than dense prose.

**Media dependency:** 9/10. Ideal assets: custom planets/astronauts, small mascots, reward/product cutouts, card artwork. Needs a coherent cosmic illustration kit; can be simple flat vectors.

**Interaction fit:** 6/10 — Great for scrolling, reveals, voting/reward moments; complex tools should live outside the scenic shell.

**Accessibility fit:** 7/10 — Ensure cards and buttons are normal controls and section transitions do not create motion dependence.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Design the scroll as a story map. Instead of stacking rectangles, let each section transform into the next through a shared illustrated world and clear milestone sequence.

**Brand personality:** celebratory, community-driven, playful, optimistic, gamified, youthful, story-rich.

#### Reference Visual Breakdown

Long purple/navy event page with scalloped purple canopy, tiny astronaut and planets, neon turquoise/pink/yellow objects, floating story planets, rainbow wave divider, black celebration section, tilted message cards, white cloud transition, and reward/prize modules.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** custom planets/astronauts, small mascots, reward/product cutouts, card artwork.

**Interaction strategy:** Great for scrolling, reveals, voting/reward moments; complex tools should live outside the scenic shell.

**Form treatment:** clean light panels separated from illustrated backgrounds

#### Recognition Heuristics

- The page must feel like one continuous world rather than disconnected colorful sections.
- At least two section transitions should be narrative shapes rather than straight lines.
- Rewards and CTAs stay conventional and obvious.

#### Incompatible Secondary Styles

- glitch-fashion at high strength
- terminal-community at high strength
- formal corporate minimalism

#### Fallback Behavior

If a full illustration pipeline is unavailable, create a small original kit of 6-10 cosmic SVGs and focus effort on scallop/wave/cloud section transitions plus card choreography.

#### Common AI Failure Modes

- stacking ordinary rectangles between illustrations
- constant distracting parallax
- too many tiny cosmic doodles
- rewards hidden in scenery

#### Description

A long-form campaign system where each section feels like a new scene in one continuous illustrated world. Section boundaries are narrative devices: scallops become sky, rainbow waves become stages, clouds reveal rewards, and cards behave like collectible memories.

#### Emotional Tone

- festive
- cosmic
- cute
- curious
- rewarding
- communal

#### Best-Fit Websites

- event microsites
- anniversary campaigns
- community celebrations
- fandom pages
- onboarding journeys
- year-in-review experiences
- reward campaigns

#### Poor-Fit Websites

- banking
- admin dashboards
- documentation
- checkout-heavy shops
- high-frequency task tools

#### Typical Audience

- community members
- fans
- younger event audiences
- campaign participants
- students

#### Visual Keywords

- cosmic event
- gamified scroll
- purple space
- rainbow wave
- cloud transition
- reward journey

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#1C184D` | Main page or major section field |
| `surface` | `#5F37D3` | Secondary surface / panel |
| `text` | `#FFFFFF` | Primary readable text |
| `muted_text` | `#BDB7E7` | Secondary copy and metadata |
| `secondary` | `#43E6C5` | Supporting brand color |
| `accent` | `#F4DF42` | High-energy accent / CTA / marker |
| `dark` | `#050505` | Dark anchor / inverse section |
| `line` | `#8A72E7` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** rounded bold sans with playful Korean/Latin-friendly weights.
- **Body:** clean rounded sans.
- **Annotation / utility:** compact rounded sans.
- Display weight: `700-900`; line-height: `0.9-1.05`.
- Display use: milestone titles and celebration statements.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** centered narrative column inside full-width illustrated scenes.

**Alignment:** mostly centered with floating orbiting objects.

**Whitespace:** high between milestones.

**Overlap:** illustrative overlaps at section boundaries.

**Section rhythm:** purple canopy -> space exploration -> rainbow stage -> black celebration -> cloud reveal -> white reward section.

#### Hero Pattern

deep space field + one central milestone planet + small orbiting illustrations + compact tab/label + short title

**Visual priority:** scene-first.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

compact sticky or top pill tabs only if needed.

#### Cards / Content Containers

tilted collectible message/story cards and reward modules.

#### Buttons & CTAs

bold rounded black/white or purple controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare; use product/reward cutouts if needed.

**Illustration:** flat colorful planets, astronauts, stars, clouds, monsters, disco-ball/wave motifs.

#### Iconography

small cosmic symbols from one family.

#### Texture & Material

- star speckles
- soft glow only on decorative stars

**Target strength:** 1-5%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** minimal; use scene shapes instead of boxes.
- **Radius:** cards 12-18px; section boundaries custom scallop/wave/cloud.
- **Shadows:** small card shadow; otherwise flat.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `purple canopy -> space exploration -> rainbow stage -> black celebration -> cloud reveal -> white reward section` rather than a generic gray divider.

#### Motion & Interaction

- orbit drift
- planet bob
- card fan-in
- wave/cloud reveal
- star twinkle with low frequency

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- reduce orbiting object count
- keep journey order obvious
- stack card fans into horizontal/vertical carousels
- simplify wave/cloud geometry
- disable parallax under reduced motion

#### Accessibility Risks

- excessive animation
- tiny labels in space
- low contrast neon on purple
- section boundaries masking content

#### Recognizable Signature Elements

- deep purple/navy cosmic field
- floating illustrated planets
- scalloped canopy
- rainbow wave divider
- tilted message cards
- white cloud transition into rewards

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 10/10 |
| Nostalgia | 4/10 |
| Technical | 2/10 |
| Organic | 3/10 |
| Editorial | 7/10 |
| Pixel | 2/10 |
| Illustration | 10/10 |
| Texture | 4/10 |
| Boldness | 8/10 |
| Commerce fit | 5/10 |
| Content density | 4/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`dreamy-indie-software`** — use only as a supporting influence.

- **`neo-brutal-education`** — use only as a supporting influence.

- **`cartoon-campaign`** — use only as a supporting influence.

#### Do

- Design transitions as part of the story.
- Use one coherent cosmic asset kit.
- Keep milestones short.
- Reserve animation for scene changes.

#### Don't

- Do not make every star twinkle constantly.
- Do not use scenic shapes as form fields.
- Do not hide CTA contrast.
- Do not turn it into generic purple gaming UI.

#### Implementation Recipe

1. Define journey milestones.
2. Lock purple/navy + 3 bright accents.
3. Build coherent cosmic SVG kit.
4. Design at least 3 distinct scene boundaries.
5. Add collectible/reward modules.
6. Test the full scroll narrative on mobile.

---

### 4.18 Gen-Z Influencer Editorial

**Reference family:** Reference image #18 / Gen-Z Influencer Editorial

**Aliases:** creator education editorial, blue-lime social poster, flat character editorial, pixel-number campaign

**One-line summary:** A clean youth editorial system using cobalt and acid-lime color blocking, flat character illustration, huge modern sans typography, pixel-number markers, and modular educational scenes.

#### AI Selection Snapshot

**Choose this style when:** the subject is creator/social/skills oriented; flat character art is available; big typography can carry the hierarchy; content breaks into 3-6 skill modules.

**Reject or heavily reduce it when:** brand must feel formal or premium-luxury; content is data-heavy; character illustration would feel inappropriate.

**Natural content density:** **medium** — Supports several instructional modules as long as body copy stays brief.

**Media dependency:** 8/10. Ideal assets: original flat character scenes, simple object illustrations, pixel numeral assets. Can work with 3-4 original flat character scenes and strong typography.

**Interaction fit:** 7/10 — Good for course and marketing flows; keep enrollment controls conventional.

**Accessibility fit:** 9/10 — Large type and strong color contrast are excellent; body copy needs enough size against cobalt.

**Implementation budget:** medium.

#### Design Philosophy & Brand Personality

Use a strict two-color poster foundation and let characters explain the topic. Retro pixel details should behave as indexing devices, not turn the whole site into a game.

**Brand personality:** young, social, aspirational, clear, creative, digital-native, friendly.

#### Reference Visual Breakdown

Saturated cobalt poster with acid-lime framed character scenes, giant pale-lime/white Influencer and Social Media typography, pixel-outline numerals 01-04, flat black-outlined cartoon characters, and compact explanatory copy.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** original flat character scenes, simple object illustrations, pixel numeral assets.

**Interaction strategy:** Good for course and marketing flows; keep enrollment controls conventional.

**Form treatment:** plain white/lime controls on solid cobalt or white

#### Recognition Heuristics

- The page should read like a social-media course poster, not a game menu.
- Pixel styling stays concentrated in numbering.
- Character scenes and giant type share equal responsibility for hierarchy.

#### Incompatible Secondary Styles

- terminal-community at high strength
- glitch-fashion at maximal strength
- organic-garden-commerce at high strength

#### Fallback Behavior

Without extensive character art, use fewer original character scenes, retain cobalt/lime color blocking, giant sans type, and pixel numeral indexing.

#### Common AI Failure Modes

- turning into generic school cards
- pixelating all typography
- using stock corporate illustrations
- making every module identical

#### Description

A highly legible bridge between editorial poster design and youth-facing education. Flat cartoon scenes create warmth, pixel numerals add retro internet personality, and giant clean typography keeps the page modern and direct.

#### Emotional Tone

- energetic
- direct
- optimistic
- approachable
- modern-retro

#### Best-Fit Websites

- creator economy courses
- social-media education
- career programs
- youth workshops
- marketing bootcamps
- personal-branding products
- student campaigns

#### Poor-Fit Websites

- luxury finance
- legal portals
- medical dashboards
- dark cybersecurity products

#### Typical Audience

- students
- young creators
- aspiring influencers
- social media learners
- Gen-Z consumers

#### Visual Keywords

- cobalt
- acid lime
- creator economy
- flat characters
- pixel numerals
- Gen-Z editorial

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#2059C8` | Main page or major section field |
| `surface` | `#C6FF69` | Secondary surface / panel |
| `text` | `#F6F7F1` | Primary readable text |
| `muted_text` | `#D5DDF3` | Secondary copy and metadata |
| `secondary` | `#BFFF5B` | Supporting brand color |
| `accent` | `#F0F3E6` | High-energy accent / CTA / marker |
| `dark` | `#101313` | Dark anchor / inverse section |
| `line` | `#F6F7F1` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** very large clean grotesk/sans with tight spacing.
- **Body:** clean grotesk.
- **Annotation / utility:** pixel display for numerals only.
- Display weight: `600-850`; line-height: `0.82-0.98`.
- Display use: hero and module labels.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** modular poster grid with large lime image frames and offset typography.

**Alignment:** strong left/right alternation.

**Whitespace:** medium.

**Overlap:** central hero character may overlap modules.

**Section rhythm:** title metadata -> framed skill scene -> giant subject word -> alternate scene -> large central character.

#### Hero Pattern

cobalt field + giant pale-lime title + one large flat character + lime framed side scenes + pixel numeral index

**Visual priority:** type + character.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

minimal top metadata row.

#### Cards / Content Containers

avoid generic cards; use lime rectangular scene frames.

#### Buttons & CTAs

simple high-contrast rectangular or pill CTA.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare.

**Illustration:** flat vector/webtoon-like characters with black outlines and limited shading.

#### Iconography

pixel numerals + simple flat utility icons.

#### Texture & Material

- none or faint print grain

**Target strength:** 0-2%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 1-3px dark/white frame lines.
- **Radius:** 0-6px mostly.
- **Shadows:** none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `title metadata -> framed skill scene -> giant subject word -> alternate scene -> large central character` rather than a generic gray divider.

#### Motion & Interaction

- character/scene slide-in
- pixel number step reveal
- headline wipe

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- stack scene frames
- keep one large character per viewport
- preserve pixel numbers at readable size
- break giant phrases intentionally
- avoid shrinking body copy

#### Accessibility Risks

- oversized text collisions
- pixel numerals interpreted as controls
- too-small explanatory copy
- character art becoming culturally narrow

#### Recognizable Signature Elements

- saturated cobalt field
- acid-lime rectangular frames
- huge pale-lime/white sans type
- pixel-outline 01-04 numerals
- flat black-outline characters
- modular skill scenes

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 8/10 |
| Nostalgia | 6/10 |
| Technical | 3/10 |
| Organic | 2/10 |
| Editorial | 9/10 |
| Pixel | 6/10 |
| Illustration | 9/10 |
| Texture | 2/10 |
| Boldness | 9/10 |
| Commerce fit | 6/10 |
| Content density | 6/10 |

#### Complexity

**Medium** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`neo-brutal-education`** — use only as a supporting influence.

- **`pixel-humanist-agency`** — use only as a supporting influence.

- **`retro-cartoon-type-specimen`** — use only as a supporting influence.

#### Do

- Keep palette brutally simple.
- Use pixel details for indexing only.
- Alternate type-led and character-led modules.
- Keep explanations concise.

#### Don't

- Do not add many unrelated colors.
- Do not use game UI chrome.
- Do not shrink display hierarchy on mobile.
- Do not use stock corporate people vectors.

#### Implementation Recipe

1. Lock cobalt + acid lime + white.
2. Choose clean oversized sans.
3. Create 3-5 flat character scenes.
4. Assign pixel numerals to modules.
5. Alternate scene and typography placement.
6. Keep CTA layer simple.

---

### 4.19 Retro Cartoon Type Specimen

**Reference family:** Reference image #19 / Retro Cartoon Type Specimen

**Aliases:** Nisshin-style specimen, 70s cartoon type, mascot type showcase, checkerboard retro branding

**One-line summary:** A retro cartoon branding system that combines giant dimensional display typography, checkerboards, cloud-and-mascot illustration, stacked color shadows, browser-window specimen modules, and 70s/90s cheerful graphics.

#### AI Selection Snapshot

**Choose this style when:** typography itself is a product or central identity; mascots can be created; retro 70s/90s tone fits; repeated specimen modules are useful.

**Reject or heavily reduce it when:** the interface is utility-dense; formal trust dominates; custom display type/mascots are unavailable.

**Natural content density:** **medium** — Can carry many specimen examples because each module is visual; long prose should stay minimal.

**Media dependency:** 9/10. Ideal assets: custom display font, original cartoon mascots, checkerboard/cloud vector kit. Needs either a distinctive display face or a strong original mascot system; ideally both.

**Interaction fit:** 5/10 — Best for showcasing, browsing, downloading, or light commerce.

**Accessibility fit:** 7/10 — Specimen text can be decorative, but purchase/download controls and descriptions must use clean text.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Treat typography as a character. The font demonstration, mascot system, and graphic environment should reinforce each other. Repetition is welcome when it demonstrates variation, not when it creates generic cards.

**Brand personality:** cheerful, retro, friendly, graphic, collectible, mascot-led, bold.

#### Reference Visual Breakdown

Periwinkle/purple type specimen with huge cream dimensional NISSHIN lettering, stacked red/orange/teal extrusion, cartoon sun/flower/hand mascots, white clouds, pink checkerboard floor, browser-window panels, badges, sparkles, and multilingual samples.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** custom display font, original cartoon mascots, checkerboard/cloud vector kit.

**Interaction strategy:** Best for showcasing, browsing, downloading, or light commerce.

**Form treatment:** plain, optional font tester controls in calm strip

#### Recognition Heuristics

- At thumbnail size the display word must dominate.
- Mascots should share one drawing system.
- The checkerboard is a stage, not a universal page background.

#### Incompatible Secondary Styles

- terminal-community at high strength
- glitch-fashion at high strength
- quiet luxury

#### Fallback Behavior

If the exact font/mascot art is unavailable, use an original chunky display with CSS/SVG stacked shadows plus a small original mascot set and checkerboard/cloud stage.

#### Common AI Failure Modes

- copying mascot poses
- using a generic bubble font without dimensional treatment
- checkerboard everywhere
- too many type effects on body text

#### Description

A highly expressive type-led system where letterforms, mascots, and repeated specimen panels form a coherent visual universe. It feels like vintage cereal advertising, streetwear graphics, and a modern type foundry page at once.

#### Emotional Tone

- sunny
- nostalgic
- fun
- optimistic
- bouncy

#### Best-Fit Websites

- type foundries
- font launches
- mascot brands
- streetwear
- creative studios
- youth lifestyle brands
- merch campaigns

#### Poor-Fit Websites

- serious enterprise
- banking
- medical portals
- legal services
- dense productivity tools

#### Typical Audience

- designers
- typography fans
- streetwear audiences
- younger creatives
- brand collectors

#### Visual Keywords

- retro cartoon
- type specimen
- checkerboard
- mascot branding
- extruded typography
- periwinkle

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#6862D3` | Main page or major section field |
| `surface` | `#F7F0DE` | Secondary surface / panel |
| `text` | `#151515` | Primary readable text |
| `muted_text` | `#5A557D` | Secondary copy and metadata |
| `secondary` | `#F1B8C6` | Supporting brand color |
| `accent` | `#F3C62A` | High-energy accent / CTA / marker |
| `dark` | `#1B1B1B` | Dark anchor / inverse section |
| `line` | `#1B1B1B` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** massive retro chunky display with layered 3D/extruded color shadows.
- **Body:** small clean grotesk.
- **Annotation / utility:** compact grotesk/mono.
- Display weight: `800-950`; line-height: `0.75-0.9`.
- Display use: hero specimen, slogans, alphabet/weight demonstrations.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** poster/specimen grid with repeated panels and checkerboard stage.

**Alignment:** mostly centered hero with modular lower grid.

**Whitespace:** medium.

**Overlap:** mascots and clouds may overlap typography/stage.

**Section rhythm:** giant type hero -> weight/style list -> mascot slogans -> browser specimen windows -> multilingual sample -> thank-you panel.

#### Hero Pattern

periwinkle field + giant cream extruded word + clouds + 2-3 mascots + tiny specimen metadata + checkerboard floor

**Visual priority:** type-first.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

tiny brand/specimen labels only.

#### Cards / Content Containers

browser-window specimen modules and poster panels.

#### Buttons & CTAs

small outlined download/purchase labels.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** none required.

**Illustration:** thick-outline cartoon mascots with flat color and minimal texture.

#### Iconography

cartoon marks and small utility glyphs.

#### Texture & Material

- subtle print grain

**Target strength:** 1-4%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 2-3px dark cartoon outlines.
- **Radius:** 12-24px on window/browser modules.
- **Shadows:** stacked colored extrusion on type; hard shadows on stickers.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `giant type hero -> weight/style list -> mascot slogans -> browser specimen windows -> multilingual sample -> thank-you panel` rather than a generic gray divider.

#### Motion & Interaction

- mascot bob
- type extrusion reveal
- browser window stack
- sparkle pop

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- reduce mascot count
- keep 3D type readable
- stack specimen panels
- allow horizontal weight scroller only if labels remain clear
- preserve checkerboard stage in simplified form

#### Accessibility Risks

- font sample illegibility
- too many mascots
- color extrusion hurting word recognition
- animations making specimen hard to inspect

#### Recognizable Signature Elements

- periwinkle/purple field
- giant cream extruded type
- pink checkerboard floor
- white cartoon clouds
- friendly mascot trio
- browser-window specimen panels

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 10/10 |
| Nostalgia | 9/10 |
| Technical | 2/10 |
| Organic | 3/10 |
| Editorial | 9/10 |
| Pixel | 3/10 |
| Illustration | 10/10 |
| Texture | 5/10 |
| Boldness | 10/10 |
| Commerce fit | 6/10 |
| Content density | 5/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`retro-browser-type-specimen`** — use only as a supporting influence.

- **`playful-risograph`** — use only as a supporting influence.

- **`retro-marketplace-pop`** — use only as a supporting influence.

#### Do

- Let typography be the product.
- Use repeated modules to demonstrate variation.
- Keep mascot style consistent.
- Use dimensional shadows only on display text.

#### Don't

- Do not use extruded type for paragraphs.
- Do not add unrelated 3D assets.
- Do not use checkerboard behind dense copy.
- Do not copy the reference wordmark.

#### Implementation Recipe

1. Choose periwinkle + cream + pink + yellow.
2. Build one giant extruded display treatment.
3. Create 2-4 original mascots.
4. Add cloud/checkerboard stage.
5. Create browser-style specimen modules.
6. Finish with multilingual or varied sample panels.

---

### 4.20 Retro Browser Type Specimen

**Reference family:** Reference image #20 / Retro Browser Type Specimen

**Aliases:** Nyonyo-style browser type, toy browser UI, modular type showcase, cartoon neo-brutal specimen

**One-line summary:** A modular retro-browser specimen system using saturated green, yellow, blue and pink, thick black outlines, toy-like browser windows, distorted display type, cloud mascots, and checkerboard staging.

#### AI Selection Snapshot

**Choose this style when:** modular content can be expressed as specimen windows; bold custom type is central; brand can use saturated flat colors; retro browser references fit.

**Reject or heavily reduce it when:** content is mostly long prose; formal trust is essential; many complex form controls are needed.

**Natural content density:** **medium** — The window system can organize many samples, but each panel should remain visually simple.

**Media dependency:** 7/10. Ideal assets: custom type specimen text, original cloud/flower/globe mascots, browser-window SVG chrome. Can be built primarily from typography, vector modules, and a few original mascots.

**Interaction fit:** 7/10 — Good for interactive font testers, showcases, and playful navigation if controls remain explicit.

**Accessibility fit:** 8/10 — Strong flat contrast helps; distorted display letters must not carry long or critical instructions.

**Implementation budget:** medium-high.

#### Design Philosophy & Brand Personality

Use browser/window geometry as a visual toy, not as skeuomorphic simulation. Modules should feel collectible and distinct, while typography remains the primary content.

**Brand personality:** playful, graphic, internet-native, retro, bold, friendly, modular.

#### Reference Visual Breakdown

Saturated green/yellow/sky-blue/pink type specimen made of rounded browser-like modules with thick black outlines, quirky distorted letters, cloud mascots, small X/star marks, checkerboard floor, browser chrome, and giant OPEN/SESAME words.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** custom type specimen text, original cloud/flower/globe mascots, browser-window SVG chrome.

**Interaction strategy:** Good for interactive font testers, showcases, and playful navigation if controls remain explicit.

**Form treatment:** font tester may use simple browser input with clear label

#### Recognition Heuristics

- Modules must read as playful browser/toy windows, not generic SaaS cards.
- At least one giant specimen word should dominate each major band.
- A limited mascot vocabulary should repeat for cohesion.

#### Incompatible Secondary Styles

- glitch-fashion at high strength
- organic-garden-commerce at high strength
- formal corporate minimalism

#### Fallback Behavior

If custom mascot art is unavailable, retain the thick-outline browser modules, distorted display typography, checkerboard staging, X-shaped marks, and saturated palette using original simple SVG symbols.

#### Common AI Failure Modes

- identical rounded cards
- using six saturated colors in every module
- fake browser chrome with unreadable labels
- generic neo-brutalism with no type-specimen behavior

#### Description

A playful interface language that borrows early browser chrome and cartoon neo-brutalism to present type, products, or creative content in modular blocks. Unlike generic card UI, each panel behaves like a toy window with a distinct purpose and graphic identity.

#### Emotional Tone

- bright
- fun
- toy-like
- nostalgic
- optimistic

#### Best-Fit Websites

- typeface launches
- creative portfolios
- kids/youth brands
- design studios
- experimental landing pages
- brand systems
- playful product showcases

#### Poor-Fit Websites

- banking
- healthcare
- enterprise dashboards
- luxury legal/professional services

#### Typical Audience

- designers
- creative students
- younger audiences
- typography fans
- internet-culture communities

#### Visual Keywords

- retro browser
- type specimen
- toy UI
- green yellow blue pink
- cloud mascot
- checkerboard

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#0AA45E` | Main page or major section field |
| `surface` | `#F5EEDB` | Secondary surface / panel |
| `text` | `#111111` | Primary readable text |
| `muted_text` | `#4E4E43` | Secondary copy and metadata |
| `secondary` | `#4AA5D8` | Supporting brand color |
| `accent` | `#FFE70B` | High-energy accent / CTA / marker |
| `dark` | `#121212` | Dark anchor / inverse section |
| `line` | `#121212` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** quirky distorted chunky display with irregular counters and widths.
- **Body:** clean condensed/grotesk sans.
- **Annotation / utility:** small mono/grotesk browser label.
- Display weight: `700-950`; line-height: `0.78-0.95`.
- Display use: giant specimen words and short labels.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** modular rounded-rectangle window grid with strong section bands.

**Alignment:** tight but playful module composition.

**Whitespace:** medium-low inside poster sections; clear gutters between modules.

**Overlap:** small mascot/sticker overlap only.

**Section rhythm:** greeting module grid -> yellow browser specimen -> checkerboard stage -> green stacked OPEN/SESAME windows.

#### Hero Pattern

green field + stacked rounded windows containing giant distorted words + small cloud/flower/globe mascots + X-shaped sparkle marks

**Visual priority:** type-module-first.

**CTA count:** 0-1 dominant.

#### Navigation Pattern

browser-like compact tabs or simple label strip.

#### Cards / Content Containers

rounded thick-outline toy windows with visible chrome; each card has unique content role.

#### Buttons & CTAs

thick-outline compact controls, optionally yellow/blue/pink.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare.

**Illustration:** simple thick-outline cloud, globe, flower, sunglasses, symbol mascots.

#### Iconography

black-outline cartoon system.

#### Texture & Material

- optional faint paper grain
- checkerboard stage

**Target strength:** 0-4%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 2-4px black outlines.
- **Radius:** 14-28px on window modules.
- **Shadows:** hard small offset only.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `greeting module grid -> yellow browser specimen -> checkerboard stage -> green stacked OPEN/SESAME windows` rather than a generic gray divider.

#### Motion & Interaction

- window pop
- tab slide
- mascot bounce
- letter swap for font tester

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- stack windows while preserving different sizes
- keep checkerboard as short separator
- reduce mascot count
- preserve large specimen words
- avoid shrinking browser chrome text below 12-14px

#### Accessibility Risks

- everything looking like a generic rounded card grid
- distorted type used for body copy
- too many accent colors per window
- window chrome too small

#### Recognizable Signature Elements

- saturated green/yellow/blue/pink palette
- thick black outlines
- rounded browser-window modules
- quirky distorted display letters
- small cloud mascots
- checkerboard stage

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playfulness | 10/10 |
| Nostalgia | 9/10 |
| Technical | 3/10 |
| Organic | 2/10 |
| Editorial | 8/10 |
| Pixel | 4/10 |
| Illustration | 8/10 |
| Texture | 4/10 |
| Boldness | 10/10 |
| Commerce fit | 6/10 |
| Content density | 6/10 |

#### Complexity

**Medium-High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`retro-cartoon-type-specimen`** — use only as a supporting influence.

- **`y2k-portfolio-collage`** — use only as a supporting influence.

- **`pixel-humanist-agency`** — use only as a supporting influence.

#### Do

- Make each module serve a distinct specimen role.
- Keep outlines consistent.
- Use giant words.
- Repeat a tiny mascot vocabulary.

#### Don't

- Do not use the same card layout everywhere.
- Do not use distorted display for paragraphs.
- Do not overuse checkerboards.
- Do not copy the exact reference typeface/mascots.

#### Implementation Recipe

1. Lock green/yellow/blue/pink + cream/black.
2. Create thick-outline rounded window system.
3. Choose an original distorted display face.
4. Design 3-5 simple mascot symbols.
5. Use checkerboard as one stage separator.
6. Build interactive specimen/tester modules with accessible controls.

---


### 4.21 Summer Accessory Editorial

**Reference family:** Reference image #21 / Summer Accessory Editorial

**Aliases:** bag collage editorial, Y2K accessory guide, seasonal shopping lookbook, fashion-guide collage

**One-line summary:** A fashion/lifestyle editorial system where one oversized physical container becomes the page frame and colorful accessories form a controlled spill around bold typography.

#### AI Selection Snapshot

**Choose this style when:** a seasonal product collection needs editorial personality; flat accessory/product art is available; one strong object metaphor can organize the hero; fashion or lifestyle storytelling matters.

**Reject or heavily reduce it when:** dense workflows dominate; formal institutional trust is primary; the project has no meaningful products or objects to stage.

**Natural content density:** **medium** — Works best with a dense focal cluster and low-density peripheral space.

**Media dependency:** 8/10. Ideal assets: flat product/accessory illustrations, cutout product photography, original sticker symbols. Needs at least 3-5 coherent product/accessory objects.

**Interaction fit:** 6/10 — Strong for browsing and campaign commerce; transactional controls should remain calm.

**Accessibility fit:** 8/10 — High contrast works well if tiny metadata is non-critical.

**Implementation budget:** medium.

#### Design Philosophy & Brand Personality

Use one physical object as the compositional architecture. Let colorful products cluster densely near the focal opening while gray, white, and black preserve editorial calm around the edges.

**Brand personality:** fashion-aware, playful, seasonal, graphic, youthful, editorial.

#### Reference Visual Breakdown

Light gray field with a giant white shopping-bag silhouette, colorful flat accessory illustrations spilling from the opening, expressive black East-Asian headline typography, yellow sparkles, and tiny seasonal date labels.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** flat product/accessory illustrations, cutout product photography, original sticker symbols.

**Interaction strategy:** Strong for browsing and campaign commerce; transactional controls should remain calm.

**Form treatment:** clean conventional fields outside collage zones

#### Recognition Heuristics

- The physical container must organize the composition, not merely decorate it.
- Color should be concentrated in the product cluster while the rest stays neutral.
- The result should read as a seasonal fashion guide rather than generic cartoon ecommerce.

#### Incompatible Secondary Styles

- terminal-community at high strength
- glitch-fashion at high strength
- formal corporate minimalism

#### Fallback Behavior

If custom accessory illustration is limited, use coherent product cutouts with flat-color stickers while retaining the giant container silhouette, neutral field, and strong editorial type.

#### Common AI Failure Modes

- turning the bag into a normal rounded card
- filling every empty area
- using thick comic outlines
- making every product equally large

#### Description

A seasonal lookbook language combining a giant-object frame, flat sticker-like accessory illustration, high-contrast editorial type, and large peripheral negative space.

#### Emotional Tone

- bright
- stylish
- fresh
- collectible
- lighthearted

#### Best-Fit Websites

- fashion campaigns
- accessory ecommerce
- beauty launches
- seasonal lookbooks
- lifestyle brands
- youth marketplaces

#### Poor-Fit Websites

- enterprise dashboards
- developer documentation
- banking
- healthcare portals
- dense productivity tools

#### Typical Audience

- Gen-Z shoppers
- fashion/lifestyle audiences
- design-aware consumers
- beauty/accessory buyers

#### Visual Keywords

- bag collage editorial
- Y2K accessory guide
- seasonal shopping lookbook
- giant white bag/object frame
- pink/yellow/cyan/green accessory cluster
- expressive black editorial title

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#D2D2D2` | Main page or major section field |
| `surface` | `#F8F8F5` | Secondary surface / panel |
| `text` | `#080808` | Primary readable text |
| `muted_text` | `#555555` | Secondary copy and metadata |
| `secondary` | `#F3A5CB` | Supporting brand color |
| `accent` | `#FFF267` | High-energy accent / CTA / marker |
| `dark` | `#111111` | Dark anchor / inverse section |
| `line` | `#111111` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** narrow expressive editorial display, optionally calligraphic or condensed.
- **Body:** clean neutral grotesk sans.
- **Annotation / utility:** tiny editorial sans/mono for dates and season labels.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** 12-column editorial grid organized around one giant container silhouette.

**Alignment:** asymmetric centered object with offset metadata.

**Whitespace:** high outside the focal cluster.

**Overlap:** controlled product spill and 2-7deg object rotations.

**Section rhythm:** giant object frame -> accessory cluster -> typographic statement -> sparse product/story bands.

#### Hero Pattern

gray field + giant white bag/container + colorful accessory cluster + oversized black editorial title + tiny date labels

**Visual priority:** object-frame-first.

**CTA count:** 1.

#### Navigation Pattern

quiet edge-aligned text or small tabs.

#### Cards / Content Containers

avoid generic cards; use cutouts, annotated specimens, or magazine modules.

#### Buttons & CTAs

small flat tag/label controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** clean product cutouts or restrained fashion photography.

**Illustration:** flat vector accessories with thin black outlines and almost no shading.

#### Iconography

thin black outline utility icons.

#### Texture & Material

- s
- u
- b
- t
- l
- e
-  
- p
- a
- p
- e
- r
-  
- g
- r
- a
- i
- n

**Target strength:** 0-3%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 1-2px black outlines on illustrated objects and utility controls.
- **Radius:** 0-14px; giant object uses custom silhouette.
- **Shadows:** none or subtle paper shadow.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `giant object frame -> accessory cluster -> typographic statement -> sparse product/story bands` rather than a generic gray divider.

#### Motion & Interaction

- object drop-in
- tiny tag slide
- 1-2deg hover tilt
- soft sparkle pop

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- recompose the accessory cluster vertically
- retain one giant object silhouette
- reduce tiny decorations
- keep large title readable and move dates into safe margins

#### Accessibility Risks

- tiny seasonal labels carrying essential information
- collage objects covering controls
- too many accent colors outside the focal cluster

#### Recognizable Signature Elements

- giant white bag/object frame
- pink/yellow/cyan/green accessory cluster
- expressive black editorial title
- tiny seasonal metadata
- yellow starbursts
- large gray negative space

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 9/10 |
| Nostalgic | 6/10 |
| Technical | 1/10 |
| Organic | 3/10 |
| Editorial | 10/10 |
| Pixel | 0/10 |
| Illustrative | 9/10 |
| Texture | 2/10 |
| Bold | 8/10 |
| Commerce | 8/10 |
| Density | 5/10 |

#### Complexity

**Medium-High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`playful-risograph`** — use only as a supporting influence.
- **`genz-influencer-editorial`** — use only as a supporting influence.
- **`paper-cut-editorial`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.22 Retro Supermarket Sticker Editorial

**Reference family:** Reference image #22 / Retro Supermarket Sticker Editorial

**Aliases:** supermarket Y2K collage, grocery sticker poster, retail receipt editorial, pop supermarket graphic

**One-line summary:** A loud retail-poster system combining supermarket objects, sticker cutouts, receipts, barcodes, and oversized red typography on a blue/white/yellow base.

#### AI Selection Snapshot

**Choose this style when:** the campaign needs loud retail energy; products can be staged as cutouts; receipt/label metaphors fit; a short promotional message dominates.

**Reject or heavily reduce it when:** long-form reading dominates; brand must feel quiet/luxury; product imagery is unavailable.

**Natural content density:** **low-medium** — Best with one large poster message and supporting labels rather than dense prose.

**Media dependency:** 9/10. Ideal assets: product cutouts, basket/cart/container image, original receipts/barcodes/price labels. Needs strong product or retail-object imagery.

**Interaction fit:** 5/10 — Best for campaign browsing and product discovery, not complex workflows.

**Accessibility fit:** 7/10 — Strong contrast is easy; keep receipt microcopy non-essential.

**Implementation budget:** medium-high.

#### Design Philosophy & Brand Personality

Make the page feel merchandised rather than card-based. Use one dominant retail container, one huge headline, and secondary transactional ephemera as visual texture.

**Brand personality:** commercial, loud, graphic, street-retail, youthful, playful.

#### Reference Visual Breakdown

White tiled field framing a blue shopping basket, giant red Chinese display typography, banana and tomato cutouts with thick white sticker borders, yellow label blocks, receipts, barcodes, checker marks, and small black metadata.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** product cutouts, basket/cart/container image, original receipts/barcodes/price labels.

**Interaction strategy:** Best for campaign browsing and product discovery, not complex workflows.

**Form treatment:** plain white fields with dark borders

#### Recognition Heuristics

- The page should resemble a designed supermarket promotion at thumbnail size.
- Receipts and labels are supporting texture, not the main information architecture.
- One dominant red/blue/yellow hierarchy must remain obvious.

#### Incompatible Secondary Styles

- dreamy-indie-software at high strength
- organic-garden-commerce at high strength
- quiet luxury

#### Fallback Behavior

If photography is limited, create original flat grocery cutouts and receipt SVGs while preserving the basket/container, oversized red type, and yellow label system.

#### Common AI Failure Modes

- turning labels into generic pills
- using every receipt as readable content
- too many products with equal priority
- adding glossy 3D retail objects

#### Description

An energetic grocery/retail language where typography and products collide like printed shelf labels, promotional stickers, and market receipts.

#### Emotional Tone

- energetic
- urgent
- pop
- collectible
- promotional

#### Best-Fit Websites

- retail events
- grocery campaigns
- food launches
- pop-up markets
- streetwear merch
- marketplace promos

#### Poor-Fit Websites

- luxury finance
- healthcare
- enterprise software
- calm wellness
- formal legal

#### Typical Audience

- young shoppers
- food/culture audiences
- retail event visitors
- design-conscious consumers

#### Visual Keywords

- supermarket Y2K collage
- grocery sticker poster
- retail receipt editorial
- giant red headline
- blue basket/container
- thick white sticker outlines

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#F3F2EC` | Main page or major section field |
| `surface` | `#2378D7` | Secondary surface / panel |
| `text` | `#111111` | Primary readable text |
| `muted_text` | `#444444` | Secondary copy and metadata |
| `secondary` | `#E82F24` | Supporting brand color |
| `accent` | `#FFEF19` | High-energy accent / CTA / marker |
| `dark` | `#111111` | Dark anchor / inverse section |
| `line` | `#111111` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** oversized condensed/heavy display with sticker shadow or outline.
- **Body:** clean grotesk sans.
- **Annotation / utility:** receipt mono / condensed labels.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** poster grid with central retail object and scattered edge ephemera.

**Alignment:** central collision with diagonal labels.

**Whitespace:** medium.

**Overlap:** high around headline/product but disciplined.

**Section rhythm:** tiled field -> basket hero -> receipt/label strip -> promotional product sections.

#### Hero Pattern

white tile background + blue basket + giant red headline + 2-4 product cutouts + yellow promo labels + receipt ephemera

**Visual priority:** headline + retail-object-first.

**CTA count:** 1.

#### Navigation Pattern

small utility row or label strip.

#### Cards / Content Containers

use merchandise stages and receipt modules rather than generic cards.

#### Buttons & CTAs

yellow/red flat retail labels with hard borders.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** product photography/cutouts with high clarity.

**Illustration:** flat sticker objects and printed ephemera.

#### Iconography

simple utility icons or label symbols.

#### Texture & Material

- subtle print grain
- tile/grid lines

**Target strength:** 2-5%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 1-3px black lines; white sticker outlines around cutouts.
- **Radius:** 0-10px.
- **Shadows:** hard sticker shadow only.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `tiled field -> basket hero -> receipt/label strip -> promotional product sections` rather than a generic gray divider.

#### Motion & Interaction

- label snap-in
- receipt slide
- small sticker pop
- short headline mask reveal

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- retain basket/headline hierarchy
- reduce receipt clutter
- stack ephemera around edges
- keep large type and one hero product/container

#### Accessibility Risks

- microcopy too small
- barcodes used as real controls
- sticker clutter covering CTAs

#### Recognizable Signature Elements

- giant red headline
- blue basket/container
- thick white sticker outlines
- yellow promo labels
- receipt/barcode ephemera
- white tile field

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 9/10 |
| Nostalgic | 8/10 |
| Technical | 2/10 |
| Organic | 2/10 |
| Editorial | 9/10 |
| Pixel | 2/10 |
| Illustrative | 7/10 |
| Texture | 5/10 |
| Bold | 10/10 |
| Commerce | 9/10 |
| Density | 5/10 |

#### Complexity

**Medium-High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`retro-marketplace-pop`** — use only as a supporting influence.
- **`playful-risograph`** — use only as a supporting influence.
- **`y2k-portfolio-collage`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.23 Cute Cat Product Collage

**Reference family:** Reference image #23 / Cute Cat Product Collage

**Aliases:** cat FMCG editorial, cute product basket poster, pet lifestyle collage, soft packaging advertisement

**One-line summary:** A soft playful consumer-brand language combining tilted product baskets, cute animal mascots, pastel packaging, warped display type, and spacious cream editorial framing.

#### AI Selection Snapshot

**Choose this style when:** mascot illustration is central; packaging imagery can be staged; brand should feel cute but editorial; commerce needs personality.

**Reject or heavily reduce it when:** formal trust dominates; there are no product/packaging assets; the audience rejects character branding.

**Natural content density:** **medium** — Can support a modest product catalog if the hero stays spacious.

**Media dependency:** 9/10. Ideal assets: packaging mockups, original animal mascots, basket/bag/product cutouts. Needs coherent packaging or mascot assets.

**Interaction fit:** 7/10 — Strong for commerce and brand storytelling; keep purchasing controls conventional.

**Accessibility fit:** 9/10 — Cream background and dark text provide strong accessibility if playful type stays decorative.

**Implementation budget:** medium-high.

#### Design Philosophy & Brand Personality

Balance one physically dramatic product arrangement with quiet cream space. Cute characters support the product hierarchy rather than replacing it.

**Brand personality:** cute, friendly, consumer, warm, playful, brand-led.

#### Reference Visual Breakdown

Warm cream poster with a tilted white shopping basket filled with pastel cat-food packages, a large pink cat-shaped bag, scattered illustrated cats, plaid fabric/fish props, and a huge warped brown ROTA wordmark.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** packaging mockups, original animal mascots, basket/bag/product cutouts.

**Interaction strategy:** Strong for commerce and brand storytelling; keep purchasing controls conventional.

**Form treatment:** clean cream/white commerce fields

#### Recognition Heuristics

- The product basket must remain the dominant physical composition.
- Cute characters should repeat in one coherent drawing style.
- The overall page should feel like a designed consumer-brand campaign, not a generic pet shop.

#### Incompatible Secondary Styles

- terminal-community
- glitch-fashion at high strength
- formal corporate minimalism

#### Fallback Behavior

If 3D packaging mockups are unavailable, use flat packaging illustrations in a tilted basket while retaining the cream/brown/pastel hierarchy and mascot system.

#### Common AI Failure Modes

- making every section pink
- using generic pet stock photos
- too many mascot poses
- placing products inside identical cards

#### Description

A cute FMCG/product-collage system where packaging and mascots build a believable little brand world without becoming childish clutter.

#### Emotional Tone

- cozy
- cheerful
- soft
- collectible
- whimsical

#### Best-Fit Websites

- pet products
- food packaging
- kids goods
- cute lifestyle brands
- boutique ecommerce
- gift brands

#### Poor-Fit Websites

- cybersecurity
- finance
- formal B2B
- dense dashboards
- luxury minimal brands

#### Typical Audience

- pet owners
- younger shoppers
- gift/lifestyle buyers
- cute-brand audiences

#### Visual Keywords

- cat FMCG editorial
- cute product basket poster
- pet lifestyle collage
- cream poster field
- warped brown wordmark
- tilted shopping basket

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#F6F0DF` | Main page or major section field |
| `surface` | `#FFFFFF` | Secondary surface / panel |
| `text` | `#6E3A1D` | Primary readable text |
| `muted_text` | `#6E6258` | Secondary copy and metadata |
| `secondary` | `#F2A8D2` | Supporting brand color |
| `accent` | `#A8D570` | High-energy accent / CTA / marker |
| `dark` | `#58311F` | Dark anchor / inverse section |
| `line` | `#694229` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** warped chunky display with soft irregular geometry.
- **Body:** friendly grotesk sans.
- **Annotation / utility:** small editorial sans and compact labels.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** editorial product grid centered on a tilted container composition.

**Alignment:** asymmetric diagonal product staging.

**Whitespace:** high.

**Overlap:** moderate product/mascot overlap.

**Section rhythm:** wordmark poster -> product basket -> benefit/story section -> sparse catalog.

#### Hero Pattern

cream field + huge warped brown wordmark + tilted basket full of pastel packages + scattered cat mascots

**Visual priority:** product-collage-first.

**CTA count:** 1.

#### Navigation Pattern

quiet top-edge nav.

#### Cards / Content Containers

packaging specimens, floating cutouts, or framed product strips.

#### Buttons & CTAs

small dark/cream compact controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** clean packaging/product photography.

**Illustration:** flat cute cat mascots with simple outlines and pastel fills.

#### Iconography

friendly simple outline symbols.

#### Texture & Material

- subtle paper grain
- plaid/fabric accents

**Target strength:** 1-4%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 1-2px brown/black outlines.
- **Radius:** 6-18px.
- **Shadows:** soft paper shadow or none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `wordmark poster -> product basket -> benefit/story section -> sparse catalog` rather than a generic gray divider.

#### Motion & Interaction

- basket settle
- mascot peek
- small product tilt
- sticker pop

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- stack basket and wordmark
- reduce scattered mascots
- keep products large enough to inspect
- preserve cream breathing room

#### Accessibility Risks

- cute display type used for instructions
- mascots obscuring buy controls
- pastel-on-pastel low contrast

#### Recognizable Signature Elements

- cream poster field
- warped brown wordmark
- tilted shopping basket
- pastel cat packaging
- cute cat mascots
- soft plaid accessory texture

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 10/10 |
| Nostalgic | 6/10 |
| Technical | 1/10 |
| Organic | 5/10 |
| Editorial | 9/10 |
| Pixel | 0/10 |
| Illustrative | 9/10 |
| Texture | 4/10 |
| Bold | 8/10 |
| Commerce | 10/10 |
| Density | 5/10 |

#### Complexity

**Medium-High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`playful-risograph`** — use only as a supporting influence.
- **`organic-garden-commerce`** — use only as a supporting influence.
- **`summer-accessory-editorial`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.24 Kawaii Recruitment Poster

**Reference family:** Reference image #24 / Kawaii Recruitment Poster

**Aliases:** cute team poster, stationery recruitment graphic, kawaii sticker campaign, youth mascot recruitment

**One-line summary:** A cheerful recruitment/campaign style built from stationery-paper framing, hand-drawn display type, cute mascots, comic bursts, and handwritten annotations.

#### AI Selection Snapshot

**Choose this style when:** the message is recruitment/community oriented; cute mascots fit the brand; a poster-like campaign is desired; content is short.

**Reject or heavily reduce it when:** long application workflows dominate; formal executive hiring tone is required; mascot illustration is unavailable.

**Natural content density:** **low** — Best for concise campaign messaging with a separate calm application flow.

**Media dependency:** 8/10. Ideal assets: original mascots, paper/sticker SVGs, hand-drawn starbursts. Needs at least one coherent hero mascot.

**Interaction fit:** 5/10 — Good for landing/signup campaigns; forms should move into simple utility surfaces.

**Accessibility fit:** 8/10 — Strong if handwritten labels remain decorative and application controls stay conventional.

**Implementation budget:** medium.

#### Design Philosophy & Brand Personality

Keep the page tactile and approachable: one poster sheet, one dominant mascot, one big hand-drawn headline, and a small set of repeating sticker motifs.

**Brand personality:** friendly, youthful, collaborative, cute, informal, optimistic.

#### Reference Visual Breakdown

Pale yellow paper sheet over a soft blue field, chunky hand-drawn navy TEAM 01 headline, central lion-like mascot with colorful mini teammates, comic starbursts, pastel stars, handwritten labels, stickers, and a curled paper corner.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** original mascots, paper/sticker SVGs, hand-drawn starbursts.

**Interaction strategy:** Good for landing/signup campaigns; forms should move into simple utility surfaces.

**Form treatment:** simple rectangular/rounded fields outside dense poster art

#### Recognition Heuristics

- The result should look like a designed recruitment poster before it looks like a web form.
- One mascot must clearly dominate.
- The application flow must remain visually calmer than the campaign art.

#### Incompatible Secondary Styles

- glitch-fashion
- terminal-community at high strength
- luxury minimalism

#### Fallback Behavior

If custom mascot art is limited, use one original simple character plus stars/bursts and preserve the stationery poster composition rather than mixing stock illustration styles.

#### Common AI Failure Modes

- turning the poster into a card grid
- using too many mascot species/styles
- tiny handwritten copy
- generic corporate recruitment copy inside cute art

#### Description

A youth-facing poster language that feels like a decorated school-club notice, but with deliberate hierarchy and a coherent mascot family.

#### Emotional Tone

- welcoming
- energetic
- sweet
- team-oriented
- casual

#### Best-Fit Websites

- recruitment pages
- student clubs
- youth communities
- creative teams
- kids products
- event signups

#### Poor-Fit Websites

- banking
- formal hiring portals
- enterprise procurement
- legal services
- medical workflows

#### Typical Audience

- students
- younger creatives
- community members
- kids/parents
- casual applicants

#### Visual Keywords

- cute team poster
- stationery recruitment graphic
- kawaii sticker campaign
- pale yellow paper sheet
- soft blue background
- chunky navy hand lettering

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#BFDDE9` | Main page or major section field |
| `surface` | `#FFF58A` | Secondary surface / panel |
| `text` | `#2E5D91` | Primary readable text |
| `muted_text` | `#4F5E66` | Secondary copy and metadata |
| `secondary` | `#F3A8C5` | Supporting brand color |
| `accent` | `#63CFA0` | High-energy accent / CTA / marker |
| `dark` | `#254F7F` | Dark anchor / inverse section |
| `line` | `#315C9A` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** chunky hand-drawn uppercase display.
- **Body:** friendly rounded/humanist sans.
- **Annotation / utility:** handwritten note style for non-critical annotations.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** single poster-sheet composition with internal burst shapes.

**Alignment:** centered mascot with playful asymmetry.

**Whitespace:** medium-high around outer field.

**Overlap:** sticker/burst overlaps inside poster only.

**Section rhythm:** poster hero -> role/team cards -> simple signup band.

#### Hero Pattern

soft blue field + pale yellow paper poster + TEAM headline + central mascot trio + starburst sticker layers

**Visual priority:** mascot-first.

**CTA count:** 1.

#### Navigation Pattern

small top-edge labels or tab strip.

#### Cards / Content Containers

poster sub-panels, role stickers, or simple team rows.

#### Buttons & CTAs

sticker-like outlined buttons.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare; optional candid team photos in a calm secondary band.

**Illustration:** cute hand-drawn mascots with soft pastel fills and dark blue outlines.

#### Iconography

simple doodle icons.

#### Texture & Material

- paper texture
- light print grain

**Target strength:** 1-4%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 2-3px navy outlines on major illustrations.
- **Radius:** 8-18px.
- **Shadows:** small paper shadow.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `poster hero -> role/team cards -> simple signup band` rather than a generic gray divider.

#### Motion & Interaction

- poster peel
- sticker pop
- mascot bounce
- handwritten arrow draw

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- keep one mascot cluster per viewport
- simplify burst count
- maintain large headline
- move application controls into a clean follow-up section

#### Accessibility Risks

- handwriting too small
- mascot art used as only label
- poster texture reducing contrast

#### Recognizable Signature Elements

- pale yellow paper sheet
- soft blue background
- chunky navy hand lettering
- cute central mascot
- comic starbursts
- handwritten labels and stickers

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 10/10 |
| Nostalgic | 6/10 |
| Technical | 1/10 |
| Organic | 5/10 |
| Editorial | 8/10 |
| Pixel | 0/10 |
| Illustrative | 10/10 |
| Texture | 5/10 |
| Bold | 7/10 |
| Commerce | 4/10 |
| Density | 3/10 |

#### Complexity

**Medium** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`playful-risograph`** — use only as a supporting influence.
- **`retro-cartoon-type-specimen`** — use only as a supporting influence.
- **`scrapbook-portfolio`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.25 Valentine Kawaii Campaign

**Reference family:** Reference image #25 / Valentine Kawaii Campaign

**Aliases:** pink mascot romance campaign, cute Valentine poster, Chinese youth love campaign, kawaii romantic advertising

**One-line summary:** A saturated romantic campaign language using pink environmental framing, cyan contrast panels, cute chibi mascots, bold white headline type, and layered Valentine symbols.

#### AI Selection Snapshot

**Choose this style when:** romance/affection is central; custom character art is available; campaign impact matters; pink/cyan palette fits.

**Reject or heavily reduce it when:** the product requires sober trust; long reading dominates; characters cannot be produced consistently.

**Natural content density:** **low-medium** — Best for a strong hero and short campaign modules.

**Media dependency:** 9/10. Ideal assets: chibi character illustration, hearts/flowers props, original poster/photo layers. Needs coherent character illustration.

**Interaction fit:** 5/10 — Best for campaign exploration and CTA flows.

**Accessibility fit:** 7/10 — Keep white type high-contrast and avoid placing critical text over busy character scenes.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Use one dominant pink world, one cyan visual window, one central character relationship, and a small vocabulary of hearts/flowers/paws.

**Brand personality:** romantic, cute, youthful, campaign-led, celebratory, characterful.

#### Reference Visual Breakdown

Candy-pink perspective room framing a cyan LOVE poster, oversized white Chinese headline type, chibi characters, hearts, roses, paw-print symbols, floating petals, and layered paper/photo props.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** chibi character illustration, hearts/flowers props, original poster/photo layers.

**Interaction strategy:** Best for campaign exploration and CTA flows.

**Form treatment:** clean white/pink form sections outside dense scene

#### Recognition Heuristics

- The page must immediately read as a romantic youth campaign.
- Pink should dominate, cyan should act as a single strong contrast field.
- Characters and typography must remain the two primary focal layers.

#### Incompatible Secondary Styles

- terminal-community
- glitch-fashion at high strength
- formal luxury

#### Fallback Behavior

If complex perspective character art is unavailable, use a simpler flat pink/cyan poster system with one original mascot pair and strong white headline typography.

#### Common AI Failure Modes

- generic pink gradient landing page
- stock Valentine icons
- too many hearts with no hierarchy
- hiding CTA inside the illustration

#### Description

A high-energy love/relationship campaign system that uses spatial illustration and mascots to turn the page into a celebratory scene.

#### Emotional Tone

- sweet
- excited
- warm
- playful
- affectionate

#### Best-Fit Websites

- Valentine campaigns
- pet/lifestyle collaborations
- romantic events
- youth promotions
- gift brands
- community campaigns

#### Poor-Fit Websites

- enterprise tools
- legal/finance
- serious healthcare
- B2B documentation
- calm luxury

#### Typical Audience

- young couples
- gift shoppers
- fandom/community audiences
- cute-brand consumers

#### Visual Keywords

- pink mascot romance campaign
- cute Valentine poster
- Chinese youth love campaign
- candy pink field
- giant white headline
- cyan contrast panel

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#F58AB8` | Main page or major section field |
| `surface` | `#43BDE5` | Secondary surface / panel |
| `text` | `#FFFFFF` | Primary readable text |
| `muted_text` | `#F9D7E5` | Secondary copy and metadata |
| `secondary` | `#F7A7C7` | Supporting brand color |
| `accent` | `#E73D62` | High-energy accent / CTA / marker |
| `dark` | `#2A2025` | Dark anchor / inverse section |
| `line` | `#FFFFFF` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** oversized blunt white display, optionally East-Asian poster lettering.
- **Body:** clean rounded/grotesk sans.
- **Annotation / utility:** small date/brand labels.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** perspective poster/room composition with central cyan panel.

**Alignment:** centered scene with diagonal frame edges.

**Whitespace:** medium.

**Overlap:** character and prop overlap high inside hero.

**Section rhythm:** pink title field -> cyan love scene -> gift/product modules -> romantic CTA.

#### Hero Pattern

pink perspective frame + giant white headline + cyan LOVE panel + central chibi character + hearts/roses/paw symbols

**Visual priority:** character-scene-first.

**CTA count:** 1.

#### Navigation Pattern

minimal edge nav.

#### Cards / Content Containers

campaign panels, gift specimens, photo/postcard modules.

#### Buttons & CTAs

bold white/pink or red compact CTA.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** optional couple/product photography in calm sections.

**Illustration:** chibi mascot/character art with flat warm shading.

#### Iconography

simple cute filled icons.

#### Texture & Material

- soft paper grain
- subtle vignette

**Target strength:** 1-4%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 1-2px scene outlines or none.
- **Radius:** 8-22px.
- **Shadows:** soft illustrated depth, not UI glass shadow.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `pink title field -> cyan love scene -> gift/product modules -> romantic CTA` rather than a generic gray divider.

#### Motion & Interaction

- heart float
- petal drift
- poster slide
- character peek

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- crop perspective aggressively
- keep central character readable
- reduce floating props
- move CTA and form into clean lower panel

#### Accessibility Risks

- pink/white contrast failures
- critical copy over faces
- looping heart motion distracting users

#### Recognizable Signature Elements

- candy pink field
- giant white headline
- cyan contrast panel
- chibi characters
- heart/rose/paw motifs
- layered romantic props

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 10/10 |
| Nostalgic | 4/10 |
| Technical | 0/10 |
| Organic | 4/10 |
| Editorial | 8/10 |
| Pixel | 0/10 |
| Illustrative | 10/10 |
| Texture | 3/10 |
| Bold | 9/10 |
| Commerce | 7/10 |
| Density | 3/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`kawaii-recruitment-poster`** — use only as a supporting influence.
- **`playful-risograph`** — use only as a supporting influence.
- **`cartoon-campaign`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.26 Illustration Zine Adventure

**Reference family:** Reference image #26 / Illustration Zine Adventure

**Aliases:** indie illustration zine, whimsical adventure poster, animation zine cover, hand-painted character editorial

**One-line summary:** A whimsical illustrated-zine system using exaggerated perspective, hand-painted character art, rough display lettering, and layered foreground objects.

#### AI Selection Snapshot

**Choose this style when:** character art is a primary asset; the project can be scene-led; adventure/creativity matters; display typography may be hand-drawn.

**Reject or heavily reduce it when:** no original illustration exists; content is primarily forms/data; formal trust dominates.

**Natural content density:** **low** — Best for scene-based covers, showcases, and short narrative sections.

**Media dependency:** 10/10. Ideal assets: original character illustration, environment props, hand-lettered title art. Requires strong custom illustration.

**Interaction fit:** 4/10 — Best for browsing, galleries, and light interaction.

**Accessibility fit:** 7/10 — Keep essential copy outside complex scene areas.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Let character perspective and scene staging create energy. Typography should feel drawn into the same world rather than pasted over it.

**Brand personality:** adventurous, artistic, youthful, whimsical, indie, expressive.

#### Reference Visual Breakdown

Bright sky-blue zine cover with oversized rough white title lettering, a large orange-hat character leaning into frame, layered smaller characters, tropical foliage, chunky props, and loose hand-painted captions.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** original character illustration, environment props, hand-lettered title art.

**Interaction strategy:** Best for browsing, galleries, and light interaction.

**Form treatment:** simple clean form panel separated from illustration

#### Recognition Heuristics

- The first viewport should feel like an illustration zine cover.
- Perspective should be deliberately exaggerated.
- UI chrome must remain subordinate to the artwork.

#### Incompatible Secondary Styles

- terminal-community
- neo-future-aigc at high strength
- formal corporate minimalism

#### Fallback Behavior

If full scene art is unavailable, use one original character, a flat color field, rough hand-lettered type, and a few hand-drawn props instead of stock illustration.

#### Common AI Failure Modes

- mixing multiple illustration styles
- adding generic card UI over the art
- shrinking title to normal heading size
- using glossy 3D props

#### Description

An indie illustration language that makes the page feel like a printed adventure-zine cover or animation concept-art spread.

#### Emotional Tone

- curious
- fun
- sunny
- imaginative
- casual

#### Best-Fit Websites

- illustration portfolios
- animation projects
- indie games
- zines
- creative events
- youth campaigns

#### Poor-Fit Websites

- finance
- enterprise dashboards
- legal
- medical portals
- dense utility apps

#### Typical Audience

- illustration fans
- artists
- gamers
- students
- creative communities

#### Visual Keywords

- indie illustration zine
- whimsical adventure poster
- animation zine cover
- sky-blue field
- rough white hand lettering
- large perspective character

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#6591D4` | Main page or major section field |
| `surface` | `#F6F1DA` | Secondary surface / panel |
| `text` | `#F8F2E4` | Primary readable text |
| `muted_text` | `#D8E3F2` | Secondary copy and metadata |
| `secondary` | `#F0A139` | Supporting brand color |
| `accent` | `#A8E57B` | High-energy accent / CTA / marker |
| `dark` | `#3E4136` | Dark anchor / inverse section |
| `line` | `#F8F2E4` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** rough hand-painted display lettering.
- **Body:** clean friendly sans or hand-lettered short copy.
- **Annotation / utility:** small handwritten captions.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** full-bleed scene with poster-like type anchors.

**Alignment:** highly asymmetric perspective composition.

**Whitespace:** medium.

**Overlap:** high foreground overlap.

**Section rhythm:** illustrated cover -> character/world panels -> project/zine chapters -> quiet credits.

#### Hero Pattern

sky-blue field + large hand-drawn title + one giant foreground character + 2-3 smaller scene characters + tropical/prop layers

**Visual priority:** character-scene-first.

**CTA count:** 0.

#### Navigation Pattern

nearly invisible or edge labels.

#### Cards / Content Containers

illustrated chapter panels rather than standard cards.

#### Buttons & CTAs

small hand-drawn/flat CTA.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare; optional textured scans.

**Illustration:** soft hand-painted/anime-inspired character illustration.

#### Iconography

hand-drawn symbol set.

#### Texture & Material

- paper grain
- brush texture

**Target strength:** 2-6%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** hand-drawn 1-3px edges.
- **Radius:** 0-12px.
- **Shadows:** none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `illustrated cover -> character/world panels -> project/zine chapters -> quiet credits` rather than a generic gray divider.

#### Motion & Interaction

- character parallax
- title draw-in
- small prop drift
- page-turn reveal

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- keep one dominant character per viewport
- reduce background props
- move copy to calmer sky/solid areas
- preserve hand-drawn title scale

#### Accessibility Risks

- essential text over faces
- excessive parallax causing motion sickness
- scene crop making characters unreadable

#### Recognizable Signature Elements

- sky-blue field
- rough white hand lettering
- large perspective character
- layered supporting characters
- tropical/prop collage
- zine-like captions

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 9/10 |
| Nostalgic | 6/10 |
| Technical | 0/10 |
| Organic | 6/10 |
| Editorial | 9/10 |
| Pixel | 0/10 |
| Illustrative | 10/10 |
| Texture | 6/10 |
| Bold | 8/10 |
| Commerce | 3/10 |
| Density | 3/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`dreamy-art-magazine`** — use only as a supporting influence.
- **`handdrawn-travel-zine`** — use only as a supporting influence.
- **`kawaii-recruitment-poster`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.27 Dreamy Art Magazine Editorial

**Reference family:** Reference image #27 / Dreamy Art Magazine Editorial

**Aliases:** indie art magazine, fisheye illustration editorial, anime art cover, dreamy studio magazine

**One-line summary:** A nostalgic art-magazine system pairing sophisticated oversized serif typography with dreamy illustrated environments, fisheye perspective, and restrained editorial metadata.

#### AI Selection Snapshot

**Choose this style when:** a strong illustrated scene exists; editorial storytelling matters; the brand can carry a serif masthead; content density is low-medium.

**Reject or heavily reduce it when:** no focal artwork is available; transactional UI dominates; serif editorial tone conflicts with brand.

**Natural content density:** **low-medium** — Supports cover-led narratives with calm information bands.

**Media dependency:** 10/10. Ideal assets: full-scene illustration, painterly props, editorial masthead typography. Requires one compelling scene or artwork.

**Interaction fit:** 4/10 — Best for reading/galleries; functional controls should remain minimal.

**Accessibility fit:** 8/10 — Strong if white metadata is kept over calm dark areas and body text stays conventional.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Treat the illustration like a photographed magazine cover: preserve one strong perspective, one oversized serif masthead, and very sparse supporting copy.

**Brand personality:** artistic, cultured, dreamy, indie, editorial, cinematic.

#### Reference Visual Breakdown

Fisheye/top-down illustrated studio scene in muted olive and blue, a huge blue serif Falett masthead, black-and-white checkerboard floor, painterly palette prop, and clean white collaboration metadata.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** full-scene illustration, painterly props, editorial masthead typography.

**Interaction strategy:** Best for reading/galleries; functional controls should remain minimal.

**Form treatment:** clean light/dark reading bands

#### Recognition Heuristics

- The page must read as an art magazine cover at thumbnail size.
- The masthead and scene are co-equal focal layers.
- UI should remain almost invisible.

#### Incompatible Secondary Styles

- cartoon-campaign at high strength
- terminal-community
- neo-future-aigc at high strength

#### Fallback Behavior

If a full illustrated room is unavailable, use one original art scene or artwork crop with a strong serif masthead and restrained editorial metadata.

#### Common AI Failure Modes

- turning it into a normal blog header
- using too many checkerboards
- adding loud CTAs over the scene
- mixing cute stickers into the editorial masthead

#### Description

An art-school magazine language where a cinematic illustrated scene carries mood while the masthead provides high-fashion editorial authority.

#### Emotional Tone

- nostalgic
- quiet
- creative
- intimate
- observational

#### Best-Fit Websites

- artist portfolios
- magazines
- creative collaborations
- illustration showcases
- fashion-art campaigns
- studio journals

#### Poor-Fit Websites

- dense dashboards
- mass-market ecommerce
- legal/finance
- technical documentation

#### Typical Audience

- artists
- designers
- illustration audiences
- culture readers
- creative students

#### Visual Keywords

- indie art magazine
- fisheye illustration editorial
- anime art cover
- giant blue serif masthead
- fisheye/top-down illustrated studio
- muted olive-blue palette

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#6E877D` | Main page or major section field |
| `surface` | `#D8D6BA` | Secondary surface / panel |
| `text` | `#2D89C7` | Primary readable text |
| `muted_text` | `#F1F2ED` | Secondary copy and metadata |
| `secondary` | `#B3C5B5` | Supporting brand color |
| `accent` | `#F6F0DE` | High-energy accent / CTA / marker |
| `dark` | `#273535` | Dark anchor / inverse section |
| `line` | `#F6F0DE` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** oversized high-contrast editorial serif masthead.
- **Body:** clean grotesk or readable serif/sans mix.
- **Annotation / utility:** small white editorial sans.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** full-bleed magazine cover grid over one cinematic illustration.

**Alignment:** masthead-led with off-center subject.

**Whitespace:** medium-high.

**Overlap:** masthead may overlap scene subject carefully.

**Section rhythm:** cover scene -> collaboration note -> artwork spreads -> quiet editorial footer.

#### Hero Pattern

full-bleed illustrated room + giant blue serif masthead + central character + one checker/palette accent + sparse white metadata

**Visual priority:** masthead + scene-first.

**CTA count:** 0.

#### Navigation Pattern

minimal top/edge labels.

#### Cards / Content Containers

full-bleed spreads and framed artwork, not cards.

#### Buttons & CTAs

small understated editorial controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** optional art scans or studio photos.

**Illustration:** cinematic hand-drawn illustration with muted painterly shading.

#### Iconography

minimal editorial symbols.

#### Texture & Material

- paper/film grain
- subtle vignette

**Target strength:** 2-5%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** none or 1px editorial rules.
- **Radius:** 0-8px.
- **Shadows:** none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `cover scene -> collaboration note -> artwork spreads -> quiet editorial footer` rather than a generic gray divider.

#### Motion & Interaction

- slow scene drift
- masthead reveal
- page/spread fade
- small caption slide

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- crop scene intentionally
- keep masthead large but avoid covering faces
- move metadata into calm corners
- stack editorial spreads

#### Accessibility Risks

- white text over busy illustration
- masthead obscuring subject
- serif used too small for utility UI

#### Recognizable Signature Elements

- giant blue serif masthead
- fisheye/top-down illustrated studio
- muted olive-blue palette
- checkerboard accent
- painterly art prop
- sparse white metadata

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 6/10 |
| Nostalgic | 8/10 |
| Technical | 1/10 |
| Organic | 5/10 |
| Editorial | 10/10 |
| Pixel | 0/10 |
| Illustrative | 10/10 |
| Texture | 6/10 |
| Bold | 8/10 |
| Commerce | 2/10 |
| Density | 4/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`illustration-zine-adventure`** — use only as a supporting influence.
- **`retro-mac-editorial`** — use only as a supporting influence.
- **`handdrawn-travel-zine`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.28 Hand-Drawn Travel Zine

**Reference family:** Reference image #28 / Hand-Drawn Travel Zine

**Aliases:** travel illustration editorial, indie journey poster, sketch travel magazine, expressive travel journal

**One-line summary:** A spacious travel-journal system combining hand-built display lettering, script overlays, loose brush marks, illustrated travelers, botanical line art, and handwritten metadata.

#### AI Selection Snapshot

**Choose this style when:** travel/storytelling is central; illustration or hand lettering is available; white-space-heavy editorial composition fits; the page can be low density.

**Reject or heavily reduce it when:** content is data-heavy; formal booking UI must dominate; no meaningful travel imagery/illustration exists.

**Natural content density:** **low** — Best for poetic storytelling and campaign pages with wide breathing room.

**Media dependency:** 9/10. Ideal assets: travel illustration, botanical line art, hand lettering/brush marks. Needs one strong illustrated or photographic journey motif.

**Interaction fit:** 4/10 — Good for editorial browsing; booking controls should live in separate clean bands.

**Accessibility fit:** 8/10 — White field supports readability; decorative script must not carry essential copy.

**Implementation budget:** medium-high.

#### Design Philosophy & Brand Personality

Keep the canvas mostly white. Use one sculptural headline, one illustrated journey scene, and one loose brush gesture to connect typography and image.

**Brand personality:** adventurous, artistic, personal, indie, warm, poetic.

#### Reference Visual Breakdown

White poster with sculptural red hand-drawn title lettering, elegant blue script overlay, loose orange brushstroke, illustrated traveler on a bicycle/travel structure, pale green botanical line art, stars, arrows, and tiny notes.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** travel illustration, botanical line art, hand lettering/brush marks.

**Interaction strategy:** Good for editorial browsing; booking controls should live in separate clean bands.

**Form treatment:** booking/form UI isolated in plain white/cream module

#### Recognition Heuristics

- White space should occupy a large portion of every viewport.
- The headline must feel drawn, not neutrally typeset.
- One journey illustration or route motif must anchor the page.

#### Incompatible Secondary Styles

- terminal-community at high strength
- retro-marketplace-pop at high strength
- dense neo-brutal UI

#### Fallback Behavior

If hand lettering is unavailable, use a custom-looking expressive display paired with original brush SVGs and one travel illustration while preserving white-space discipline.

#### Common AI Failure Modes

- filling white space with cards
- using stock travel icons
- too many scripts
- turning the brushstroke into a gradient swoosh

#### Description

An expressive indie travel editorial language where drawing, lettering, and white space feel like pages from a personal journey notebook.

#### Emotional Tone

- curious
- light
- free
- observational
- handmade

#### Best-Fit Websites

- travel campaigns
- tourism editorials
- artist journals
- outdoor brands
- culture magazines
- creative portfolios

#### Poor-Fit Websites

- enterprise tools
- banking
- dense ecommerce
- developer dashboards
- formal institutions

#### Typical Audience

- travelers
- artists
- culture audiences
- students
- outdoor/lifestyle consumers

#### Visual Keywords

- travel illustration editorial
- indie journey poster
- sketch travel magazine
- white field
- red sculptural lettering
- blue script overlay

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#FFFDF5` | Main page or major section field |
| `surface` | `#F4F3E9` | Secondary surface / panel |
| `text` | `#A63A26` | Primary readable text |
| `muted_text` | `#34446C` | Secondary copy and metadata |
| `secondary` | `#244B91` | Supporting brand color |
| `accent` | `#E7A23E` | High-energy accent / CTA / marker |
| `dark` | `#28384B` | Dark anchor / inverse section |
| `line` | `#34446C` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** sculptural hand-drawn display with ribbon-like or brush-built forms.
- **Body:** clean humanist sans or restrained serif.
- **Annotation / utility:** elegant script/handwritten annotations for decorative labels.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** sparse 12-column poster grid with large central illustration.

**Alignment:** asymmetric top-heavy typography with scene below.

**Whitespace:** very high.

**Overlap:** selective type/brush/illustration overlap.

**Section rhythm:** sculptural title -> illustrated journey -> notes/route story -> quiet practical band.

#### Hero Pattern

white field + red sculptural title + blue script accent + one orange brush gesture + illustrated traveler/bicycle scene

**Visual priority:** type + illustration-first.

**CTA count:** 0.

#### Navigation Pattern

near-invisible edge links.

#### Cards / Content Containers

story spreads, route notes, image/illustration bands.

#### Buttons & CTAs

small outlined or handwritten label CTA.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** editorial travel photography may alternate with drawings.

**Illustration:** loose hand-drawn traveler and botanical line art.

#### Iconography

hand-drawn travel symbols.

#### Texture & Material

- paper grain
- pencil/ink texture

**Target strength:** 2-5%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 1px ink/editorial rules.
- **Radius:** 0-8px.
- **Shadows:** none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `sculptural title -> illustrated journey -> notes/route story -> quiet practical band` rather than a generic gray divider.

#### Motion & Interaction

- brush draw
- route-line reveal
- page drift
- small note pop

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- preserve large white areas
- stack title and scene
- reduce decorative notes
- move booking UI into conventional modules

#### Accessibility Risks

- script used for body copy
- thin pale line art reducing contrast
- booking controls hidden in illustration

#### Recognizable Signature Elements

- white field
- red sculptural lettering
- blue script overlay
- orange brushstroke
- traveler illustration
- pale green botanical line art

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 7/10 |
| Nostalgic | 7/10 |
| Technical | 1/10 |
| Organic | 7/10 |
| Editorial | 10/10 |
| Pixel | 0/10 |
| Illustrative | 9/10 |
| Texture | 6/10 |
| Bold | 7/10 |
| Commerce | 3/10 |
| Density | 3/10 |

#### Complexity

**Medium-High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`paper-cut-editorial`** — use only as a supporting influence.
- **`illustration-zine-adventure`** — use only as a supporting influence.
- **`dreamy-art-magazine`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.29 Nostalgic Summer Magazine

**Reference family:** Reference image #29 / Nostalgic Summer Magazine

**Aliases:** soft youth magazine, watercolor summer cover, anime puddle editorial, minor heat magazine

**One-line summary:** A soft nostalgic youth-editorial system built from watercolor/pencil illustration, pale seasonal color, reflective compositions, translucent mastheads, and sparse magazine metadata.

#### AI Selection Snapshot

**Choose this style when:** mood and season matter more than utility density; soft illustration is available; long atmospheric hero is appropriate; the project values nostalgia.

**Reject or heavily reduce it when:** strong transactional UI dominates; brand requires extreme contrast/aggression; no focal scene exists.

**Natural content density:** **low-medium** — Can support short editorial stories and issue navigation.

**Media dependency:** 10/10. Ideal assets: watercolor/pencil scene illustration, urban environment art, reflection/rain/puddle motif. Requires one atmospheric focal scene.

**Interaction fit:** 3/10 — Best for reading and discovery, not complex interactions.

**Accessibility fit:** 7/10 — Soft colors require careful contrast; keep essential text dark enough.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Keep contrast gentle but readable. Let one environmental illustration and its reflection do most of the storytelling while typography remains airy and restrained.

**Brand personality:** nostalgic, gentle, youthful, literary, illustrative, seasonal.

#### Reference Visual Breakdown

Pale blue and cream illustrated city scene with two school-age characters reflected in a large puddle, huge translucent rounded masthead, pencil/watercolor texture, small issue metadata, and spacious seasonal typography.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** watercolor/pencil scene illustration, urban environment art, reflection/rain/puddle motif.

**Interaction strategy:** Best for reading and discovery, not complex interactions.

**Form treatment:** plain light reading/form bands

#### Recognition Heuristics

- The page should feel like a summer magazine cover, not a generic anime landing page.
- Reflection or mirrored composition should be a major visual idea.
- Color and texture remain soft, never neon.

#### Incompatible Secondary Styles

- retro-marketplace-pop
- terminal-community
- cartoon-campaign at high strength

#### Fallback Behavior

If full watercolor art is unavailable, use soft editorial photography with a reflection motif, pale palette, and translucent masthead rather than stock anime graphics.

#### Common AI Failure Modes

- oversaturating the scene
- adding bright sticker UI
- using tiny low-contrast body text
- making every section reflective

#### Description

A quiet summer-diary language that treats atmosphere, reflection, and negative space as primary design materials.

#### Emotional Tone

- wistful
- warm
- quiet
- dreamy
- reflective

#### Best-Fit Websites

- youth magazines
- summer campaigns
- coming-of-age stories
- illustration portfolios
- music/film microsites
- cultural editorials

#### Poor-Fit Websites

- high-energy commerce
- enterprise dashboards
- cybersecurity
- finance
- dense documentation

#### Typical Audience

- young culture audiences
- illustration fans
- music/film audiences
- students
- editorial readers

#### Visual Keywords

- soft youth magazine
- watercolor summer cover
- anime puddle editorial
- pale blue/cream field
- watercolor youth characters
- large puddle reflection

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#B7D2DD` | Main page or major section field |
| `surface` | `#ECE8D8` | Secondary surface / panel |
| `text` | `#F1E9D9` | Primary readable text |
| `muted_text` | `#657578` | Secondary copy and metadata |
| `secondary` | `#758B9C` | Supporting brand color |
| `accent` | `#D9A9A0` | High-energy accent / CTA / marker |
| `dark` | `#4B5A62` | Dark anchor / inverse section |
| `line` | `#8A999A` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** huge soft rounded masthead or light grotesk display.
- **Body:** readable humanist sans.
- **Annotation / utility:** small magazine issue labels.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** full-bleed vertical magazine cover with central reflection axis.

**Alignment:** centered scene with subtle asymmetric metadata.

**Whitespace:** high.

**Overlap:** low-medium.

**Section rhythm:** misty masthead -> illustrated scene/reflection -> issue notes -> quiet article bands.

#### Hero Pattern

pale blue urban scene + two illustrated characters + large puddle reflection + translucent rounded masthead + sparse issue labels

**Visual priority:** scene-first.

**CTA count:** 0.

#### Navigation Pattern

minimal issue nav.

#### Cards / Content Containers

full-bleed scene bands and simple article strips.

#### Buttons & CTAs

quiet text links or thin outlined controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** optional soft analog photography.

**Illustration:** pencil/watercolor anime-style scene art.

#### Iconography

minimal line symbols.

#### Texture & Material

- paper grain
- watercolor wash

**Target strength:** 3-7%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** none or 1px soft rules.
- **Radius:** 0-8px.
- **Shadows:** none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `misty masthead -> illustrated scene/reflection -> issue notes -> quiet article bands` rather than a generic gray divider.

#### Motion & Interaction

- slow reflection ripple
- masthead fade
- gentle scene drift
- page dissolve

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- crop scene while preserving reflection relationship
- increase text contrast on mobile
- move metadata out of detailed illustration
- keep one atmospheric visual per viewport

#### Accessibility Risks

- pale text failing contrast
- reflection animation too strong
- tiny magazine metadata used for navigation

#### Recognizable Signature Elements

- pale blue/cream field
- watercolor youth characters
- large puddle reflection
- translucent rounded masthead
- soft urban background
- tiny issue metadata

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 5/10 |
| Nostalgic | 10/10 |
| Technical | 0/10 |
| Organic | 6/10 |
| Editorial | 10/10 |
| Pixel | 0/10 |
| Illustrative | 10/10 |
| Texture | 8/10 |
| Bold | 5/10 |
| Commerce | 1/10 |
| Density | 4/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`dreamy-art-magazine`** — use only as a supporting influence.
- **`pixel-pastoral`** — use only as a supporting influence.
- **`handdrawn-travel-zine`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.30 Manga Food Editorial

**Reference family:** Reference image #30 / Manga Food Editorial

**Aliases:** anime food campaign, illustrated bento poster, manga packaging ad, cute culinary editorial

**One-line summary:** A lively food-campaign system using manga-style character illustration, dramatic close-up perspective, a hero meal/product, cute mini mascots, and warm print texture.

#### AI Selection Snapshot

**Choose this style when:** food imagery can be illustrated strongly; character storytelling fits the brand; the campaign can use dramatic perspective; warm print texture is desired.

**Reject or heavily reduce it when:** formal fine-dining luxury is required; dense ordering/admin workflow dominates; illustration pipeline is unavailable.

**Natural content density:** **low-medium** — Best for menu highlights, campaign sections, and storytelling; not dense ordering systems.

**Media dependency:** 10/10. Ideal assets: hero food illustration, main character art, mini mascot set, packaging/can design. Requires coherent food and character art.

**Interaction fit:** 7/10 — Works well for menu discovery and ordering if controls remain outside artwork.

**Accessibility fit:** 7/10 — Keep menu/prices readable and separate from decorative lettering.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Use one main character, one hero meal/product, and one or two mini mascots. Food must remain the commercial focal point even when illustration is energetic.

**Brand personality:** appetizing, cute, energetic, illustrative, consumer, warm.

#### Reference Visual Breakdown

Close-up anime-style kitchen scene with a large character holding a canned drink, bento box in foreground, warm cream/olive/orange palette, chibi chef and cat mascots, speech bubbles, handwritten Chinese display lettering, and halftone grain.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** hero food illustration, main character art, mini mascot set, packaging/can design.

**Interaction strategy:** Works well for menu discovery and ordering if controls remain outside artwork.

**Form treatment:** clean cream order controls

#### Recognition Heuristics

- The meal or packaged food must be as visually important as the character.
- The scene should feel like an illustrated food advertisement, not generic anime fan art.
- Ordering controls remain obvious and conventional.

#### Incompatible Secondary Styles

- terminal-community
- glitch-fashion at high strength
- quiet luxury minimalism

#### Fallback Behavior

If full manga illustration is unavailable, use original flat food illustration plus one simple mascot and preserve the warm palette, perspective, and handwritten headline system.

#### Common AI Failure Modes

- character-only hero with food as prop
- generic anime stock art
- menus hidden in speech bubbles
- soft glass order cards

#### Description

A culinary editorial language where the food remains tangible and appetizing while character art supplies emotion and narrative.

#### Emotional Tone

- fun
- cozy
- hungry
- friendly
- animated

#### Best-Fit Websites

- food campaigns
- restaurants
- packaged foods
- beverage launches
- bento brands
- culinary events

#### Poor-Fit Websites

- finance
- enterprise software
- legal
- developer tools
- minimal luxury

#### Typical Audience

- food lovers
- younger consumers
- anime/manga audiences
- families
- casual diners

#### Visual Keywords

- anime food campaign
- illustrated bento poster
- manga packaging ad
- warm cream/olive/orange palette
- anime main character
- large bento/meal foreground

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#F3E9D0` | Main page or major section field |
| `surface` | `#D7A64B` | Secondary surface / panel |
| `text` | `#4A2B1F` | Primary readable text |
| `muted_text` | `#667783` | Secondary copy and metadata |
| `secondary` | `#879B42` | Supporting brand color |
| `accent` | `#E56D3B` | High-energy accent / CTA / marker |
| `dark` | `#28363B` | Dark anchor / inverse section |
| `line` | `#3A2A22` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** handwritten chunky East-Asian food display or brush lettering.
- **Body:** friendly rounded/humanist sans.
- **Annotation / utility:** small package/ingredient labels.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** dramatic foreground-food illustration with character behind.

**Alignment:** center-weighted but perspective-driven.

**Whitespace:** medium.

**Overlap:** high in hero art.

**Section rhythm:** character food hero -> menu/product specimens -> ingredient story -> order CTA.

#### Hero Pattern

warm illustrated kitchen + large character + hero bento/food foreground + canned drink + mini chef/cat mascots + handwritten headline

**Visual priority:** food + character-first.

**CTA count:** 1.

#### Navigation Pattern

simple top strip or floating text.

#### Cards / Content Containers

menu specimens, illustrated plates, packaging panels.

#### Buttons & CTAs

warm flat high-contrast CTA.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** optional food/product photos in calm menu band.

**Illustration:** manga/anime illustration with thick sketch lines and halftone.

#### Iconography

cute culinary symbols.

#### Texture & Material

- halftone
- paper grain

**Target strength:** 3-8%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 2-4px sketchy outlines.
- **Radius:** 6-16px.
- **Shadows:** none or small hard print shadow.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `character food hero -> menu/product specimens -> ingredient story -> order CTA` rather than a generic gray divider.

#### Motion & Interaction

- steam drift
- food pop-in
- speech bubble appear
- mascot peek

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- crop hero around food first
- reduce mini mascots
- move menu details into clean stacks
- keep CTA away from hands/faces

#### Accessibility Risks

- food hidden by character art
- menu/prices in decorative type
- too many animated mascots

#### Recognizable Signature Elements

- warm cream/olive/orange palette
- anime main character
- large bento/meal foreground
- mini chef/cat mascots
- speech bubbles
- halftone print texture

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 10/10 |
| Nostalgic | 7/10 |
| Technical | 0/10 |
| Organic | 6/10 |
| Editorial | 8/10 |
| Pixel | 0/10 |
| Illustrative | 10/10 |
| Texture | 8/10 |
| Bold | 8/10 |
| Commerce | 9/10 |
| Density | 4/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`playful-risograph`** — use only as a supporting influence.
- **`cat-product-collage`** — use only as a supporting influence.
- **`cartoon-campaign`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.31 Post-Digital Type Collage

**Reference family:** Reference image #31 / Post-Digital Type Collage

**Aliases:** experimental typography poster, Swiss pixel editorial, mixed bitmap grotesk poster, conceptual object collage

**One-line summary:** A conceptual typography-first editorial system combining Swiss white-space discipline, bitmap wordforms, clean grotesk type, diagram annotations, and absurd everyday-object cutouts.

#### AI Selection Snapshot

**Choose this style when:** type is the primary content; the brand can tolerate conceptual weirdness; white space is acceptable; original object cutouts can support the concept.

**Reject or heavily reduce it when:** dense controls dominate; formal institutional tone is required; random object collage would confuse the audience.

**Natural content density:** **medium** — Can support structured project lists if large type and quiet space alternate.

**Media dependency:** 7/10. Ideal assets: original object cutouts, bitmap type treatments, diagram symbols. Can work with typography alone if object cutouts are unavailable.

**Interaction fit:** 5/10 — Good for portfolios and light interactions; task UI should be calmer.

**Accessibility fit:** 9/10 — White field and black type are accessible; pixel display must remain short.

**Implementation budget:** medium.

#### Design Philosophy & Brand Personality

Use typography as the main architecture. Introduce a limited number of ordinary-object cutouts as conceptual punctuation, not as product cards or stock decoration.

**Brand personality:** conceptual, graphic, experimental, smart, internet-native, editorial.

#### Reference Visual Breakdown

White field with huge mixed clean sans and pixelated black typography, selective blue text highlight blocks, black stars, thin diagram lines, circled numbers, and scattered photoreal object cutouts such as duck, tomato, ladybug, bananas, camera, cherry, cone, and fish.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** original object cutouts, bitmap type treatments, diagram symbols.

**Interaction strategy:** Good for portfolios and light interactions; task UI should be calmer.

**Form treatment:** plain white fields with black rules

#### Recognition Heuristics

- Typography must remain the dominant visual mass.
- Objects should feel conceptually placed, not like product photography.
- The page should stay mostly white and black with very limited blue.

#### Incompatible Secondary Styles

- playful-risograph at high strength
- organic-garden-commerce at high strength
- cartoon-campaign

#### Fallback Behavior

If object cutouts are unavailable, rely on typographic scale, pixel/clean contrast, blue selection marks, stars, and numbered annotations rather than adding generic illustrations.

#### Common AI Failure Modes

- pixelating everything
- random meme-object spam
- blue gradient instead of flat selection blocks
- turning each phrase into a card

#### Description

A post-digital poster language where type-scale, pixelation, and object juxtaposition create the idea. Decoration is sparse but intentionally strange.

#### Emotional Tone

- dry
- playful
- unexpected
- clean
- provocative

#### Best-Fit Websites

- design portfolios
- creative studios
- type showcases
- cultural campaigns
- art schools
- editorial microsites

#### Poor-Fit Websites

- conservative enterprise
- healthcare
- transaction-heavy commerce
- long documentation

#### Typical Audience

- designers
- creative students
- culture audiences
- typography enthusiasts
- art directors

#### Visual Keywords

- experimental typography poster
- Swiss pixel editorial
- mixed bitmap grotesk poster
- huge mixed pixel/clean type
- white field
- blue selection highlight

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#F8F8F6` | Main page or major section field |
| `surface` | `#FFFFFF` | Secondary surface / panel |
| `text` | `#050505` | Primary readable text |
| `muted_text` | `#525252` | Secondary copy and metadata |
| `secondary` | `#2E69E8` | Supporting brand color |
| `accent` | `#111111` | High-energy accent / CTA / marker |
| `dark` | `#050505` | Dark anchor / inverse section |
| `line` | `#111111` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** mix of clean grotesk and intentionally pixelated bitmap display.
- **Body:** clean grotesk sans.
- **Annotation / utility:** tiny diagram labels and circled numbers.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** large typographic poster grid with scattered object anchors.

**Alignment:** asymmetric but baseline-disciplined.

**Whitespace:** very high.

**Overlap:** type/object overlap selective.

**Section rhythm:** giant mixed-type statement -> conceptual object field -> project/index modules -> sparse footer.

#### Hero Pattern

white field + giant mixed pixel/clean typography + one blue highlight block + 4-8 small object cutouts + black stars/number annotations

**Visual priority:** type-first.

**CTA count:** 0.

#### Navigation Pattern

minimal top edge.

#### Cards / Content Containers

avoid cards; use project rows, poster bands, index labels.

#### Buttons & CTAs

simple black/blue text controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** object cutouts only, isolated and crisp.

**Illustration:** rare; mostly typographic.

#### Iconography

thin diagram icons.

#### Texture & Material

- subtle paper texture

**Target strength:** 0-2%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 1px black rules.
- **Radius:** 0-4px.
- **Shadows:** none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `giant mixed-type statement -> conceptual object field -> project/index modules -> sparse footer` rather than a generic gray divider.

#### Motion & Interaction

- pixel word assemble
- blue selection drag
- object nudge
- short cursor-like reveal

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- keep giant type
- reduce object count
- stack statement lines
- preserve large white margins

#### Accessibility Risks

- pixelating body text
- object cutouts obscuring controls
- using too many unrelated objects

#### Recognizable Signature Elements

- huge mixed pixel/clean type
- white field
- blue selection highlight
- small everyday object cutouts
- black stars
- diagram lines and circled numbers

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 7/10 |
| Nostalgic | 8/10 |
| Technical | 4/10 |
| Organic | 1/10 |
| Editorial | 10/10 |
| Pixel | 8/10 |
| Illustrative | 3/10 |
| Texture | 1/10 |
| Bold | 9/10 |
| Commerce | 2/10 |
| Density | 5/10 |

#### Complexity

**Medium** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`pixel-pastoral`** — use only as a supporting influence.
- **`glitch-fashion`** — use only as a supporting influence.
- **`retro-mac-editorial`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.32 Scrapbook Portfolio Editorial

**Reference family:** Reference image #32 / Scrapbook Portfolio Editorial

**Aliases:** student design portfolio, graph-paper resume, stationery portfolio, playful designer CV

**One-line summary:** A cheerful portfolio/resume system combining graph paper, textured paint panels, stationery props, sticker labels, hand-drawn display type, and structured information modules.

#### AI Selection Snapshot

**Choose this style when:** portfolio/resume content needs personality; graph/stationery motifs fit; skills/projects require structured scanning; custom icons/labels can be created.

**Reject or heavily reduce it when:** formal executive tone is mandatory; highly complex product interaction dominates; the visual identity must be ultra-minimal.

**Natural content density:** **medium-high** — Naturally supports profile, skills, timeline, software bars, and project taxonomy.

**Media dependency:** 7/10. Ideal assets: profile photo, original doodle icons, paper/stationery props. Can work with typography/icons and one portrait.

**Interaction fit:** 7/10 — Good for navigation, filters, and project browsing.

**Accessibility fit:** 9/10 — Structured information can remain highly readable.

**Implementation budget:** medium.

#### Design Philosophy & Brand Personality

Use a playful material shell around a highly organized information core. Decorative props should frame sections without disrupting CV/portfolio readability.

**Brand personality:** creative, friendly, student-like, organized, playful, crafty.

#### Reference Visual Breakdown

Pale cream graph-paper background with a cobalt-blue textured banner, chunky hand-drawn cream/coral type, cat sticker, binder clip, bunting flags, outlined skill icons, profile photo framed like a stamp, progress bars, and project-category stickers.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** profile photo, original doodle icons, paper/stationery props.

**Interaction strategy:** Good for navigation, filters, and project browsing.

**Form treatment:** plain cream/white inputs on grid

#### Recognition Heuristics

- The page should look like a designer assembled a portfolio notebook, not a dashboard theme.
- Resume information must remain easy to scan.
- Graph paper should be subtle, not a noisy full-opacity grid.

#### Incompatible Secondary Styles

- glitch-fashion at high strength
- terminal-community at high strength
- luxury minimalism

#### Fallback Behavior

If stationery assets are limited, retain graph paper, painted color panels, hand-drawn type, and a structured resume grid with a small original icon set.

#### Common AI Failure Modes

- turning every resume field into a card
- using childish stickers around important contact info
- graph grid too dark
- overdecorating project thumbnails

#### Description

A scrapbook-meets-design-school portfolio language where personality lives in stationery and illustration while resume information stays neatly gridded.

#### Emotional Tone

- cheerful
- approachable
- personal
- energetic
- optimistic

#### Best-Fit Websites

- student portfolios
- designer resumes
- illustrator sites
- creative CVs
- school showcases
- personal brands

#### Poor-Fit Websites

- executive corporate sites
- banking
- medical systems
- dense enterprise tools

#### Typical Audience

- recruiters for creative roles
- design students
- portfolio viewers
- creative agencies

#### Visual Keywords

- student design portfolio
- graph-paper resume
- stationery portfolio
- pale graph paper
- cobalt textured banner
- chunky playful display

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#F6F4B7` | Main page or major section field |
| `surface` | `#1D95CF` | Secondary surface / panel |
| `text` | `#2E6CA5` | Primary readable text |
| `muted_text` | `#6F6B4F` | Secondary copy and metadata |
| `secondary` | `#F37E63` | Supporting brand color |
| `accent` | `#A8D96B` | High-energy accent / CTA / marker |
| `dark` | `#31526D` | Dark anchor / inverse section |
| `line` | `#AFC0A6` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** chunky hand-drawn rounded display.
- **Body:** clean humanist sans.
- **Annotation / utility:** typewriter/mono labels and handwritten notes.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** 12-column resume grid over graph paper.

**Alignment:** organized modules with playful offsets.

**Whitespace:** medium-high.

**Overlap:** small sticker overlaps only.

**Section rhythm:** hero banner -> about/profile grid -> skills/resume data -> project category field -> portfolio work.

#### Hero Pattern

graph paper + painted cobalt banner + chunky display name/mark + small sticker/clip props + compact profile module

**Visual priority:** portfolio-identity-first.

**CTA count:** 1.

#### Navigation Pattern

compact category tabs/labels.

#### Cards / Content Containers

resume sections, project strips, icon groups, progress bars.

#### Buttons & CTAs

sticker-tab controls with clear labels.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** portrait/profile photo and project imagery.

**Illustration:** small cheerful doodles and line icons.

#### Iconography

outlined coral/blue skill icons.

#### Texture & Material

- graph paper
- paint/print grain

**Target strength:** 2-5%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 1-2px colored rules.
- **Radius:** 6-14px.
- **Shadows:** small paper shadow only.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `hero banner -> about/profile grid -> skills/resume data -> project category field -> portfolio work` rather than a generic gray divider.

#### Motion & Interaction

- sticker slide
- clip wiggle
- project label pop
- progress bar fill

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- stack resume columns
- preserve graph-paper rhythm
- reduce props
- keep skill labels at readable size

#### Accessibility Risks

- tiny resume text
- decorations covering contact info
- progress bars without text labels

#### Recognizable Signature Elements

- pale graph paper
- cobalt textured banner
- chunky playful display
- stationery props
- outlined skill icons
- structured resume modules

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 9/10 |
| Nostalgic | 7/10 |
| Technical | 3/10 |
| Organic | 5/10 |
| Editorial | 8/10 |
| Pixel | 1/10 |
| Illustrative | 7/10 |
| Texture | 7/10 |
| Bold | 7/10 |
| Commerce | 2/10 |
| Density | 7/10 |

#### Complexity

**Medium** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`paper-cut-editorial`** — use only as a supporting influence.
- **`retro-browser-type-specimen`** — use only as a supporting influence.
- **`kawaii-recruitment-poster`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.33 European Retro Color Matching

**Reference family:** Reference image #33 / European Retro Color Matching

**Aliases:** European color poster, teal modular editorial, retro color-theory graphic, restrained neo-brutalist palette

**One-line summary:** A restrained modular editorial system built from deep teal, muted aqua, pale cream, oversized geometric type, simple circles, large numerals, and clean rounded fields.

#### AI Selection Snapshot

**Choose this style when:** color system is central; the brand wants expressive minimalism; large typography and simple shapes are enough; content is low-medium density.

**Reject or heavily reduce it when:** illustration is required to communicate; audience expects playful characters; very dense task UI dominates.

**Natural content density:** **medium** — Can carry structured brand/case-study information if section rhythm stays simple.

**Media dependency:** 4/10. Ideal assets: typography, simple geometric SVG shapes. Does not require photography or custom illustration.

**Interaction fit:** 7/10 — Strong for portfolios and brand systems; controls can remain simple.

**Accessibility fit:** 10/10 — Excellent contrast and clean geometry support accessibility.

**Implementation budget:** low-medium.

#### Design Philosophy & Brand Personality

Let color blocking and typography do almost everything. Avoid decorative illustration unless it is reduced to a single symbol.

**Brand personality:** graphic, mature, modern-retro, restrained, systematic, editorial.

#### Reference Visual Breakdown

Deep teal rounded poster panels with muted aqua and pale cream blocks, huge geometric sans Chinese/Latin typography, a large cream circle, oversized numeral 06, sparse symbols, and almost no texture.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** typography, simple geometric SVG shapes.

**Interaction strategy:** Strong for portfolios and brand systems; controls can remain simple.

**Form treatment:** simple cream/aqua inputs

#### Recognition Heuristics

- The design should remain recognizable with only three main colors.
- There should be almost no decorative illustration.
- Rounded geometry must feel like poster composition, not card UI.

#### Incompatible Secondary Styles

- cartoon-campaign at high strength
- playful-risograph at high strength
- y2k-portfolio-collage at high strength

#### Fallback Behavior

If the exact display face is unavailable, preserve the giant geometric scale, teal/aqua/cream palette, large circular form, and sparse symbol system.

#### Common AI Failure Modes

- adding gradients
- filling modules with cards
- too many accent colors
- using decorative icons everywhere

#### Description

A color-theory-led graphic language that feels retro-European and contemporary at once, using very few shapes and extremely confident palette proportions.

#### Emotional Tone

- calm
- confident
- cultured
- clean
- balanced

#### Best-Fit Websites

- brand systems
- design studios
- color guides
- editorial portfolios
- architecture/culture sites
- minimal campaigns

#### Poor-Fit Websites

- mascot-heavy kids brands
- highly illustrative storytelling
- dense commerce catalogs
- gaming communities

#### Typical Audience

- design professionals
- culture audiences
- brand clients
- mature creative consumers

#### Visual Keywords

- European color poster
- teal modular editorial
- retro color-theory graphic
- deep teal field
- muted aqua panel
- pale cream circle/panel

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#055254` | Main page or major section field |
| `surface` | `#5FA09D` | Secondary surface / panel |
| `text` | `#E8E3B5` | Primary readable text |
| `muted_text` | `#6FA6A3` | Secondary copy and metadata |
| `secondary` | `#F4EDC4` | Supporting brand color |
| `accent` | `#5FA09D` | High-energy accent / CTA / marker |
| `dark` | `#033F40` | Dark anchor / inverse section |
| `line` | `#0B5A59` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** oversized geometric sans with multilingual composition.
- **Body:** clean grotesk sans.
- **Annotation / utility:** small technical labels and numerals.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** large rounded modular color fields over a simple grid.

**Alignment:** asymmetric typographic blocks.

**Whitespace:** high.

**Overlap:** minimal.

**Section rhythm:** dark color block -> large type/circle -> split aqua/cream information panels -> quiet footer.

#### Hero Pattern

deep teal field + giant multilingual type + one large cream circle + small top labels + oversized numeral

**Visual priority:** color + type-first.

**CTA count:** 0.

#### Navigation Pattern

minimal text links.

#### Cards / Content Containers

large flat color modules, not cards.

#### Buttons & CTAs

flat text or outlined controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare; monochrome or duotone if used.

**Illustration:** almost none.

#### Iconography

simple geometric symbols.

#### Texture & Material

- none or extremely subtle paper grain

**Target strength:** 0-2%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** none or 1px same-palette rules.
- **Radius:** 22-48px on large sections, not every component.
- **Shadows:** none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `dark color block -> large type/circle -> split aqua/cream information panels -> quiet footer` rather than a generic gray divider.

#### Motion & Interaction

- color panel slide
- type mask reveal
- number count
- line draw

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- stack large color fields
- keep typography oversized
- preserve palette ratio
- avoid shrinking circle/symbols into clutter

#### Accessibility Risks

- muted text too close in tone
- rounded modules mistaken for SaaS cards
- oversized type hiding semantic meaning

#### Recognizable Signature Elements

- deep teal field
- muted aqua panel
- pale cream circle/panel
- giant geometric typography
- oversized numeral
- minimal symbols

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 3/10 |
| Nostalgic | 7/10 |
| Technical | 4/10 |
| Organic | 2/10 |
| Editorial | 9/10 |
| Pixel | 0/10 |
| Illustrative | 1/10 |
| Texture | 1/10 |
| Bold | 7/10 |
| Commerce | 3/10 |
| Density | 5/10 |

#### Complexity

**Low-Medium** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`retro-mac-editorial`** — use only as a supporting influence.
- **`paper-cut-editorial`** — use only as a supporting influence.
- **`post-digital-type-collage`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.34 Pixel Flower Editorial

**Reference family:** Reference image #34 / Pixel Flower Editorial

**Aliases:** romantic pixel poster, minimal bitmap floral editorial, blue serif pixel collage, digital flower poster

**One-line summary:** A minimalist romantic editorial style that contrasts elegant serif typography with crude pixel flowers on a single saturated color field.

#### AI Selection Snapshot

**Choose this style when:** one short emotional phrase can dominate; pixel art fits the concept; low-density layout is acceptable; a saturated single-color field works.

**Reject or heavily reduce it when:** long copy is necessary; many controls must be visible; pixel imagery would undermine trust.

**Natural content density:** **low** — Designed for sparse poster-like pages with huge pauses.

**Media dependency:** 5/10. Ideal assets: small pixel flowers, original bitmap symbols. Can be built with a tiny custom pixel asset set.

**Interaction fit:** 2/10 — Best for passive browsing and storytelling.

**Accessibility fit:** 8/10 — Simple high contrast is strong; avoid using tiny labels as required navigation.

**Implementation budget:** low.

#### Design Philosophy & Brand Personality

Keep the page extremely simple: one saturated field, one huge serif word, a handful of pixel flowers, and tiny supporting labels.

**Brand personality:** romantic, minimal, nostalgic, digital, editorial, poetic.

#### Reference Visual Breakdown

Saturated royal-blue field with a huge elegant cream serif word outside, tiny uppercase sans labels around it, scattered low-resolution red/yellow flowers, and one oversized pixel flower interrupting the typography.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** small pixel flowers, original bitmap symbols.

**Interaction strategy:** Best for passive browsing and storytelling.

**Form treatment:** plain solid-color forms if unavoidable

#### Recognition Heuristics

- At thumbnail size the page should read as serif editorial first, pixel art second.
- Pixel flowers must remain sparse.
- The design should not resemble a game interface.

#### Incompatible Secondary Styles

- cartoon-campaign at high strength
- terminal-community at high strength
- playful-risograph at high strength

#### Fallback Behavior

If a pixel-flower font/asset is unavailable, create a few original nearest-neighbor floral SVG/canvas sprites and keep typography clean and elegant.

#### Common AI Failure Modes

- making all typography pixelated
- adding many pixel icons
- using multiple background colors
- turning the page into retro game UI

#### Description

A low-resolution poetic system where only a few pixel objects interrupt an otherwise refined fashion-editorial composition.

#### Emotional Tone

- dreamy
- hopeful
- quiet
- strange
- refined

#### Best-Fit Websites

- music microsites
- fashion campaigns
- poetry projects
- event posters
- creative portfolios
- romantic digital experiences

#### Poor-Fit Websites

- dense commerce
- enterprise tools
- documentation
- formal government/finance

#### Typical Audience

- culture audiences
- music/fashion fans
- designers
- younger creative users

#### Visual Keywords

- romantic pixel poster
- minimal bitmap floral editorial
- blue serif pixel collage
- royal-blue field
- huge cream serif word
- oversized pixel flower

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#1740C0` | Main page or major section field |
| `surface` | `#1740C0` | Secondary surface / panel |
| `text` | `#F5F0DE` | Primary readable text |
| `muted_text` | `#E8E2D6` | Secondary copy and metadata |
| `secondary` | `#F2D12B` | Supporting brand color |
| `accent` | `#D92C2E` | High-energy accent / CTA / marker |
| `dark` | `#132E87` | Dark anchor / inverse section |
| `line` | `#F5F0DE` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** huge elegant high-contrast serif.
- **Body:** clean narrow sans.
- **Annotation / utility:** tiny uppercase sans labels.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** sparse poster grid with distant text anchors.

**Alignment:** center-left giant word with scattered bitmap flora.

**Whitespace:** extreme.

**Overlap:** one pixel flower may overlap display word.

**Section rhythm:** single blue hero -> quiet copy field -> optional minimal project/song list -> closing phrase.

#### Hero Pattern

royal-blue field + giant cream serif word + one oversized yellow pixel flower + several tiny red/yellow pixel flowers + small uppercase labels

**Visual priority:** type-first.

**CTA count:** 0.

#### Navigation Pattern

almost invisible text links.

#### Cards / Content Containers

avoid cards.

#### Buttons & CTAs

tiny flat text controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare; could use grainy lifestyle photo only in separate section.

**Illustration:** pixel flowers/symbols only.

#### Iconography

minimal tiny bitmap icons.

#### Texture & Material

- optional film grain

**Target strength:** 0-3%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** none.
- **Radius:** 0-4px.
- **Shadows:** none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `single blue hero -> quiet copy field -> optional minimal project/song list -> closing phrase` rather than a generic gray divider.

#### Motion & Interaction

- pixel flower step-in
- serif word reveal
- slow tiny flower drift

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- preserve oversized word
- reduce flower count
- move tiny labels to safe margins
- keep single-color field dominant

#### Accessibility Risks

- tiny labels essential to navigation
- serif word too thin on low-quality displays
- overusing pixel art until it becomes game UI

#### Recognizable Signature Elements

- royal-blue field
- huge cream serif word
- oversized pixel flower
- scattered tiny pixel flowers
- tiny uppercase labels
- extreme negative space

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 6/10 |
| Nostalgic | 9/10 |
| Technical | 2/10 |
| Organic | 5/10 |
| Editorial | 10/10 |
| Pixel | 9/10 |
| Illustrative | 4/10 |
| Texture | 2/10 |
| Bold | 8/10 |
| Commerce | 1/10 |
| Density | 1/10 |

#### Complexity

**Low** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`pixel-pastoral`** — use only as a supporting influence.
- **`paper-cut-editorial`** — use only as a supporting influence.
- **`post-digital-type-collage`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.35 Botanical Papercut Typography

**Reference family:** Reference image #35 / Botanical Papercut Typography

**Aliases:** plant-letter collage, garden cut-paper type, botanical word art, handmade eco typography

**One-line summary:** A handcrafted botanical type system where letters themselves are assembled from plants, objects, and cut-paper forms on warm cream stock.

#### AI Selection Snapshot

**Choose this style when:** the brand can use custom illustrative lettering; nature/objects are conceptually relevant; one short word or phrase can dominate; handmade materiality is desired.

**Reject or heavily reduce it when:** long textual headings are required repeatedly; no illustration budget exists; formal institutional trust dominates.

**Natural content density:** **low** — Best for one or two large crafted typographic moments.

**Media dependency:** 8/10. Ideal assets: custom object-letter illustration, plant/flower shapes, paper texture. Can work with a smaller original object alphabet or one hero word.

**Interaction fit:** 3/10 — Best for campaigns and storytelling; controls stay outside the crafted type.

**Accessibility fit:** 8/10 — Ensure semantic text equivalent exists and body copy remains conventional.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Build one hero word as an original object-letter composition. Keep everything else sparse so the crafted typography remains legible.

**Brand personality:** organic, craft-led, playful, eco-minded, editorial, artistic.

#### Reference Visual Breakdown

Warm cream poster with irregular green/brown/orange letters built from leaves, pots, trees, cactus, books, flowers, and a bicycle integrated into the word composition, framed by a thin border and tiny mono captions.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** custom object-letter illustration, plant/flower shapes, paper texture.

**Interaction strategy:** Best for campaigns and storytelling; controls stay outside the crafted type.

**Form treatment:** clean rectangular fields

#### Recognition Heuristics

- The typography itself must visibly contain botanical/object forms.
- The result should feel handmade, not like a normal font with plant stickers.
- Supporting layout must stay sparse.

#### Incompatible Secondary Styles

- terminal-community at high strength
- neo-future-aigc
- glitch-fashion at high strength

#### Fallback Behavior

If a full object alphabet is too expensive, create one original hero word as SVG artwork and use standard readable typography elsewhere.

#### Common AI Failure Modes

- adding generic leaf icons around normal text
- building every heading as artwork
- too many colors
- losing letter readability

#### Description

An organic evolution of paper-cut editorial: instead of placing botanical graphics around type, botanical objects become the type.

#### Emotional Tone

- warm
- whimsical
- earthy
- human
- hopeful

#### Best-Fit Websites

- eco brands
- gardening projects
- creative studios
- sustainable campaigns
- bike/outdoor brands
- editorial posters

#### Poor-Fit Websites

- dense enterprise tools
- banking
- medical portals
- high-frequency ecommerce

#### Typical Audience

- eco-conscious consumers
- design audiences
- garden/outdoor communities
- creative viewers

#### Visual Keywords

- plant-letter collage
- garden cut-paper type
- botanical word art
- cream paper
- object-built green/brown letters
- flowers/leaves integrated into type

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#F5F0C9` | Main page or major section field |
| `surface` | `#F9F3D4` | Secondary surface / panel |
| `text` | `#4A5A2B` | Primary readable text |
| `muted_text` | `#3E4034` | Secondary copy and metadata |
| `secondary` | `#6E7937` | Supporting brand color |
| `accent` | `#E65B32` | High-energy accent / CTA / marker |
| `dark` | `#4C3B24` | Dark anchor / inverse section |
| `line` | `#5E5A42` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** custom cut-paper/object-built display lettering.
- **Body:** warm humanist sans.
- **Annotation / utility:** tiny mono/editorial captions.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** sparse framed poster grid.

**Alignment:** centered crafted word with small caption block.

**Whitespace:** extreme.

**Overlap:** object forms overlap within letters only.

**Section rhythm:** crafted word hero -> clean story band -> object/plant feature -> quiet footer.

#### Hero Pattern

cream paper + one giant botanical/object-built word + integrated bicycle/plant forms + tiny mono caption + thin frame

**Visual priority:** letterform-first.

**CTA count:** 0.

#### Navigation Pattern

quiet text only.

#### Cards / Content Containers

paper strips and image/illustration bands.

#### Buttons & CTAs

small flat labels.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** optional warm tactile photography.

**Illustration:** cut-paper botanical/object illustration.

#### Iconography

rough outline botanical symbols.

#### Texture & Material

- paper grain
- ink irregularity

**Target strength:** 2-5%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 1px warm ink border.
- **Radius:** 0-10px.
- **Shadows:** subtle paper shadow only.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `crafted word hero -> clean story band -> object/plant feature -> quiet footer` rather than a generic gray divider.

#### Motion & Interaction

- leaf/letter assemble
- paper slide
- tiny flower pop
- 1deg hover shift

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- keep one crafted word per viewport
- reduce object complexity
- use semantic text behind visual word art
- preserve cream/earth palette

#### Accessibility Risks

- crafted letters carrying long essential text
- complex object shapes hurting legibility
- too many plant decorations outside the word

#### Recognizable Signature Elements

- cream paper
- object-built green/brown letters
- flowers/leaves integrated into type
- bicycle/object forms as glyphs
- thin poster frame
- tiny mono captions

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 8/10 |
| Nostalgic | 6/10 |
| Technical | 1/10 |
| Organic | 10/10 |
| Editorial | 10/10 |
| Pixel | 0/10 |
| Illustrative | 10/10 |
| Texture | 8/10 |
| Bold | 8/10 |
| Commerce | 4/10 |
| Density | 2/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`paper-cut-editorial`** — use only as a supporting influence.
- **`organic-garden-commerce`** — use only as a supporting influence.
- **`handdrawn-travel-zine`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.36 Psychedelic Floral Wordmark

**Reference family:** Reference image #36 / Psychedelic Floral Wordmark

**Aliases:** flower-power lettering, 70s botanical wordmark, organic yellow-on-black type, psychedelic floral logo

**One-line summary:** A bold minimal wordmark system using only black, yellow, organic psychedelic lettering, and integrated floral forms.

#### AI Selection Snapshot

**Choose this style when:** a short brand word can dominate; custom lettering is possible; two-color identity fits; retro botanical mood is desired.

**Reject or heavily reduce it when:** long functional copy dominates; brand cannot use psychedelic associations; high information density is needed.

**Natural content density:** **low** — Best for identity-led pages with very little copy.

**Media dependency:** 7/10. Ideal assets: custom wordmark lettering, floral vector shapes. Can be built from one original SVG wordmark and standard body text.

**Interaction fit:** 2/10 — Interaction should be minimal and almost invisible.

**Accessibility fit:** 9/10 — Excellent contrast; ensure the logo has semantic text alternative.

**Implementation budget:** medium.

#### Design Philosophy & Brand Personality

Do less. One black field and one sculptural yellow floral wordmark should carry most of the page. Supporting UI stays extremely quiet.

**Brand personality:** retro, organic, bold, artistic, musical, free-spirited.

#### Reference Visual Breakdown

Pure black field with a saturated yellow hand-drawn SUN FLOWER wordmark, soft irregular 60s/70s letterforms, and flowers/vines physically growing through and replacing parts of the letters.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** custom wordmark lettering, floral vector shapes.

**Interaction strategy:** Interaction should be minimal and almost invisible.

**Form treatment:** plain high-contrast fields

#### Recognition Heuristics

- The page should be recognizable from the wordmark alone.
- No third major color should be introduced without a project-specific reason.
- Floral forms must be part of the letter construction.

#### Incompatible Secondary Styles

- terminal-community at high strength
- neo-future-aigc at high strength
- y2k-portfolio-collage

#### Fallback Behavior

If custom lettering cannot be produced, use a bold organic display face plus original yellow vine/flower SVGs that physically weave through the word rather than sitting beside it.

#### Common AI Failure Modes

- adding rainbow psychedelic gradients
- using many floral illustrations
- generic 70s font with no integration
- turning every section into a logo lockup

#### Description

A retro flower-power language where the identity is almost entirely one custom typographic object.

#### Emotional Tone

- warm
- psychedelic
- sunny
- confident
- handmade

#### Best-Fit Websites

- music projects
- festival campaigns
- flower brands
- creative studios
- fashion capsules
- poster microsites

#### Poor-Fit Websites

- dense apps
- enterprise software
- formal finance
- healthcare portals

#### Typical Audience

- music/festival audiences
- creative communities
- fashion/culture consumers
- botanical brand audiences

#### Visual Keywords

- flower-power lettering
- 70s botanical wordmark
- organic yellow-on-black type
- black field
- yellow psychedelic lettering
- integrated flowers

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#000000` | Main page or major section field |
| `surface` | `#000000` | Secondary surface / panel |
| `text` | `#FFE31A` | Primary readable text |
| `muted_text` | `#F7E9A6` | Secondary copy and metadata |
| `secondary` | `#FFE31A` | Supporting brand color |
| `accent` | `#FFE31A` | High-energy accent / CTA / marker |
| `dark` | `#000000` | Dark anchor / inverse section |
| `line` | `#FFE31A` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** organic wavy 60s/70s hand-drawn display.
- **Body:** simple neutral sans.
- **Annotation / utility:** tiny understated sans.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** single-object poster composition.

**Alignment:** centered or slightly asymmetric wordmark.

**Whitespace:** extreme.

**Overlap:** flowers/vines overlap letters by design.

**Section rhythm:** wordmark hero -> quiet story/merch band -> black/yellow CTA/footer.

#### Hero Pattern

pure black field + giant yellow organic floral wordmark with flowers/vines integrated into letters

**Visual priority:** wordmark-first.

**CTA count:** 0.

#### Navigation Pattern

nearly invisible.

#### Cards / Content Containers

avoid cards; use bands and merch specimens.

#### Buttons & CTAs

simple yellow/black controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare, duotone if used.

**Illustration:** flat yellow floral/leaf shapes integrated into type.

#### Iconography

minimal botanical symbols.

#### Texture & Material

- none or faint print grain

**Target strength:** 0-2%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** none.
- **Radius:** 0-4px.
- **Shadows:** none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `wordmark hero -> quiet story/merch band -> black/yellow CTA/footer` rather than a generic gray divider.

#### Motion & Interaction

- vine grow
- flower bloom
- wordmark mask reveal

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- keep wordmark large
- avoid shrinking decorative counters too far
- stack supporting content below
- maintain black/yellow dominance

#### Accessibility Risks

- animated bloom too distracting
- flower shapes reducing word recognition
- yellow used on too much small text if contrast/legibility suffers

#### Recognizable Signature Elements

- black field
- yellow psychedelic lettering
- integrated flowers
- wavy organic glyphs
- almost no secondary content

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 7/10 |
| Nostalgic | 10/10 |
| Technical | 0/10 |
| Organic | 10/10 |
| Editorial | 8/10 |
| Pixel | 0/10 |
| Illustrative | 7/10 |
| Texture | 2/10 |
| Bold | 9/10 |
| Commerce | 3/10 |
| Density | 1/10 |

#### Complexity

**Medium** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`botanical-papercut-typography`** — use only as a supporting influence.
- **`paper-cut-editorial`** — use only as a supporting influence.
- **`pixel-flower-editorial`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.37 Hand-Painted Folk Poster

**Reference family:** Reference image #37 / Hand-Painted Folk Poster

**Aliases:** naive fish poster, folk illustration editorial, hand-painted print graphic, childlike indie poster

**One-line summary:** A naïve folk-graphic system using a single deep color field, rough hand-painted lettering, one oversized flat illustration, and intentionally imperfect brush edges.

#### AI Selection Snapshot

**Choose this style when:** the message can be short and witty; one simple illustrated object can carry the concept; handmade print feeling is desired; low content density is acceptable.

**Reject or heavily reduce it when:** complex workflows dominate; premium luxury precision is required; high-density copy is unavoidable.

**Natural content density:** **low** — Best for short messages and campaign panels.

**Media dependency:** 6/10. Ideal assets: one simple hand-painted illustration, rough lettering. Can be produced from basic original vector/brush shapes.

**Interaction fit:** 4/10 — Good for simple CTA pages; not complex interaction.

**Accessibility fit:** 9/10 — Strong contrast and simple forms are accessible.

**Implementation budget:** low.

#### Design Philosophy & Brand Personality

Use one phrase, one illustrated object/animal, and two or three flat colors. Preserve rough edges and leave the composition blunt and direct.

**Brand personality:** naive, friendly, handmade, playful, indie, direct.

#### Reference Visual Breakdown

Deep cobalt-blue square poster with rough cream hand-painted words SOMETHING FISHY IS GOING ON, a large flat orange fish, yellow/teal line details, and small wavy doodle marks.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** one simple hand-painted illustration, rough lettering.

**Interaction strategy:** Good for simple CTA pages; not complex interaction.

**Form treatment:** plain high-contrast field

#### Recognition Heuristics

- The design should feel hand-painted in one sitting, not digitally overworked.
- One object must dominate the illustration layer.
- Color count should remain extremely small.

#### Incompatible Secondary Styles

- neo-future-aigc
- terminal-community
- glitch-fashion

#### Fallback Behavior

If brush lettering is unavailable, use custom rough vector letters and a single flat original illustration while keeping the palette to blue/cream/orange plus one minor accent.

#### Common AI Failure Modes

- smoothing every edge
- adding realistic fish photography
- using gradient shadows
- placing content into rounded cards

#### Description

A simple indie-print language where charming imperfection and bold flat color matter more than polish or UI sophistication.

#### Emotional Tone

- funny
- warm
- casual
- bold
- childlike

#### Best-Fit Websites

- food brands
- indie posters
- kids publishing
- small events
- creative merchandise
- restaurant specials

#### Poor-Fit Websites

- enterprise tools
- luxury legal
- finance
- complex productivity apps

#### Typical Audience

- families
- creative audiences
- indie shoppers
- food/culture visitors

#### Visual Keywords

- naive fish poster
- folk illustration editorial
- hand-painted print graphic
- deep cobalt field
- rough cream lettering
- large orange fish/object

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#204C99` | Main page or major section field |
| `surface` | `#204C99` | Secondary surface / panel |
| `text` | `#F2E8D2` | Primary readable text |
| `muted_text` | `#F2E8D2` | Secondary copy and metadata |
| `secondary` | `#E97832` | Supporting brand color |
| `accent` | `#F0C44E` | High-energy accent / CTA / marker |
| `dark` | `#1B2742` | Dark anchor / inverse section |
| `line` | `#F2E8D2` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** rough hand-painted uppercase display.
- **Body:** simple friendly sans or same rough lettering for short labels.
- **Annotation / utility:** tiny doodle captions.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `2`.

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

**Grid:** simple poster field.

**Alignment:** left/top text with large object entering from side.

**Whitespace:** medium.

**Overlap:** minimal.

**Section rhythm:** bold phrase -> object illustration -> short CTA/info band.

#### Hero Pattern

cobalt field + rough cream headline + one oversized orange fish/object + 2-4 tiny doodle marks

**Visual priority:** phrase + object-first.

**CTA count:** 1.

#### Navigation Pattern

small text only.

#### Cards / Content Containers

avoid cards; use flat color panels.

#### Buttons & CTAs

flat cream/orange control.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare.

**Illustration:** flat folk/naive illustration with rough painted edges.

#### Iconography

simple hand-painted symbols.

#### Texture & Material

- paper/paint grain

**Target strength:** 2-5%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** none or rough 1-2px edge.
- **Radius:** 0-6px.
- **Shadows:** none.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `bold phrase -> object illustration -> short CTA/info band` rather than a generic gray divider.

#### Motion & Interaction

- object bob
- hand-letter reveal
- tiny doodle wiggle

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- keep headline large
- crop object boldly
- reduce doodles
- stack any utility content in a plain follow-up panel

#### Accessibility Risks

- rough lettering used for long copy
- illustration mistaken for interactive control
- too many colors

#### Recognizable Signature Elements

- deep cobalt field
- rough cream lettering
- large orange fish/object
- flat folk shapes
- tiny wavy doodles
- imperfect painted edges

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 9/10 |
| Nostalgic | 7/10 |
| Technical | 0/10 |
| Organic | 6/10 |
| Editorial | 7/10 |
| Pixel | 0/10 |
| Illustrative | 8/10 |
| Texture | 7/10 |
| Bold | 8/10 |
| Commerce | 5/10 |
| Density | 2/10 |

#### Complexity

**Low** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`paper-cut-editorial`** — use only as a supporting influence.
- **`playful-risograph`** — use only as a supporting influence.
- **`botanical-papercut-typography`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.38 Magical-Girl Retro Browser

**Reference family:** Reference image #38 / Magical-Girl Retro Browser

**Aliases:** kawaii desktop UI, Y2K magical-girl interface, cute OS editorial, bunny browser graphic

**One-line summary:** A dense playful Y2K desktop system combining early-browser/OS chrome, magical-girl mascots, bubbly display lettering, halftone textures, folders, popups, and small game HUD details.

#### AI Selection Snapshot

**Choose this style when:** retro browser/desktop metaphor fits; custom cute icons/mascots can be produced; content can be modular; the brand wants overt Y2K nostalgia.

**Reject or heavily reduce it when:** serious trust conventions dominate; long forms/tables are primary; there is no coherent mascot/icon system.

**Natural content density:** **medium** — Window modules can organize projects/features, but each viewport needs a clear primary window.

**Media dependency:** 9/10. Ideal assets: bunny/star mascot SVGs, browser/window chrome, folder/document icons, halftone shapes. Can be built from original UI chrome and a small mascot/icon set.

**Interaction fit:** 7/10 — Good for portfolios and playful software marketing if window controls stay understandable.

**Accessibility fit:** 7/10 — High contrast helps, but small faux-OS labels must not carry critical information.

**Implementation budget:** high.

#### Design Philosophy & Brand Personality

Use one framed desktop scene, one giant bubbly wordmark, and one coherent bunny/star icon family. The OS metaphor should organize content rather than becoming random window clutter.

**Brand personality:** kawaii, internet-native, nostalgic, playful, collectible, youthful.

#### Reference Visual Breakdown

Cobalt-blue framed browser window with pale yellow grid workspace, bubbly Japanese white/blue display lettering, bunny/star mascots, folders and document icons, overlapping retro windows, danger popups, halftone blue blobs, and a game-like LIFE meter.

This reference is interpreted as a **design grammar**, not a composition to reproduce literally. Preserve the hierarchy, material cues, scale relationships, and rendering logic while creating original brand content and arrangements.

#### Asset & Interaction Requirements

**Ideal media:** bunny/star mascot SVGs, browser/window chrome, folder/document icons, halftone shapes.

**Interaction strategy:** Good for portfolios and playful software marketing if window controls stay understandable.

**Form treatment:** modern accessible fields placed inside a clean primary window

#### Recognition Heuristics

- The page must read as a magical-girl desktop/browser world, not generic Y2K stickers.
- One primary window or wordmark must dominate each viewport.
- Retro UI chrome should be consistent and original, not copied from a real OS.

#### Incompatible Secondary Styles

- glitch-fashion at high strength
- organic-garden-commerce at high strength
- formal corporate minimalism

#### Fallback Behavior

If detailed magical-girl art is unavailable, use one original bunny/star mascot family, cobalt/yellow browser chrome, halftone blobs, folders, and a large bubbly wordmark.

#### Common AI Failure Modes

- copying proprietary OS icons
- mixing many unrelated kawaii assets
- turning every section into a popup
- making real controls tiny to match the retro UI

#### Description

A kawaii retro-computing language where the interface itself becomes an illustrated magical-girl world while still preserving clear window hierarchy.

#### Emotional Tone

- cute
- busy
- energetic
- magical
- retro

#### Best-Fit Websites

- creative portfolios
- game/community pages
- type showcases
- youth campaigns
- digital collectibles
- indie software marketing

#### Poor-Fit Websites

- formal enterprise
- banking
- healthcare
- legal portals
- dense productivity systems

#### Typical Audience

- Y2K culture audiences
- gamers
- designers
- anime/magical-girl fans
- younger creative users

#### Visual Keywords

- kawaii desktop UI
- Y2K magical-girl interface
- cute OS editorial
- cobalt browser frame
- pale yellow grid workspace
- bubbly Japanese wordmark

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#3159D8` | Main page or major section field |
| `surface` | `#F2F0B8` | Secondary surface / panel |
| `text` | `#FFFFFF` | Primary readable text |
| `muted_text` | `#3159D8` | Secondary copy and metadata |
| `secondary` | `#6DA0E8` | Supporting brand color |
| `accent` | `#D6F35B` | High-energy accent / CTA / marker |
| `dark` | `#2746A8` | Dark anchor / inverse section |
| `line` | `#3159D8` | Rules, borders, grids |

##### Color rules

- Use the background/surface pair for roughly 55–75% of the page unless the style explicitly calls for a dark or image-led field.
- Keep the accent to roughly 5–15% unless a campaign section intentionally uses a full accent field.
- Limit the active palette per viewport. The catalog contains many colors; the page should not.
- Maintain WCAG AA contrast for essential copy and controls.

#### Typography

- **Display:** bubbly rounded Japanese/Y2K display with blue outline.
- **Body:** clean rounded sans or compact mono.
- **Annotation / utility:** small retro-OS mono labels.
- Display weight: `700-950`; line-height: `0.78-1.0`.
- Display use: hero and short section statements only.
- Body copy must remain conventional and readable.
- Maximum family count: `3`.

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

**Grid:** framed desktop/browser canvas with nested windows.

**Alignment:** centered giant wordmark over modular OS scene.

**Whitespace:** medium-low inside frame, high outside.

**Overlap:** window and mascot overlap controlled.

**Section rhythm:** browser hero -> project folders/windows -> warning/game HUD microsections -> clean footer.

#### Hero Pattern

cobalt outer frame + pale yellow gridded browser workspace + huge bubbly white/blue wordmark + bunny/star mascots + folders/documents + one warning popup + LIFE meter

**Visual priority:** wordmark + desktop-scene-first.

**CTA count:** 1.

#### Navigation Pattern

browser tab/toolbar or small window-menu labels.

#### Cards / Content Containers

retro window modules, folder groups, and project popups.

#### Buttons & CTAs

compact outlined OS-style controls.

All interactive targets must be at least `44px` in one dimension and have a visible `:focus-visible` state.

#### Imagery & Illustration

**Photography:** rare; optional small project thumbnails inside windows.

**Illustration:** bunny/star magical-girl mascots with flat blue/white/lime treatment.

#### Iconography

retro folder/document/window icons.

#### Texture & Material

- halftone
- faint grid

**Target strength:** 4-10%.

Use no more than two simultaneous texture systems in a section. Texture must never reduce body-text legibility.

#### Borders, Radius & Shadows

- **Borders:** 2-3px cobalt outlines.
- **Radius:** 8-20px on outer windows; 0-8px on small classic panes.
- **Shadows:** small hard window offset.
- Do not default every component to the same radius.

#### Section Transitions

Use the style's own boundary language. Prefer transitions implied by `browser hero -> project folders/windows -> warning/game HUD microsections -> clean footer` rather than a generic gray divider.

#### Motion & Interaction

- window pop
- folder open
- star twinkle
- heart meter fill
- short step reveal

Default timing:
```css
--motion-fast: 160ms;
--motion-normal: 280ms;
--motion-slow: 520ms;
--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1);
```

Respect `prefers-reduced-motion`.

#### Responsive / Mobile Adaptation

- simplify nested windows
- keep one main window per viewport
- reduce icon count
- maintain large bubbly wordmark
- move real navigation outside tiny faux-OS text

#### Accessibility Risks

- fake popup labels too small
- too many windows obscuring hierarchy
- mascot animation distracting from content
- retro chrome used as only navigation

#### Recognizable Signature Elements

- cobalt browser frame
- pale yellow grid workspace
- bubbly Japanese wordmark
- bunny/star mascots
- folder/document icons
- warning popup and LIFE meter

A generated page should contain at least **three** of these signatures at medium style strength and at least **four** at high style strength.

#### Style Strength Profile

| Dimension | Score |
|---|---:|
| Playful | 10/10 |
| Nostalgic | 10/10 |
| Technical | 5/10 |
| Organic | 2/10 |
| Editorial | 8/10 |
| Pixel | 5/10 |
| Illustrative | 10/10 |
| Texture | 6/10 |
| Bold | 9/10 |
| Commerce | 4/10 |
| Density | 6/10 |

#### Complexity

**High** — Implementation cost follows the asset, typography, and composition demands described above.

#### Compatible Secondary Styles

- **`retro-browser-type-specimen`** — use only as a supporting influence.
- **`retro-cartoon-type-specimen`** — use only as a supporting influence.
- **`dreamy-indie-software`** — use only as a supporting influence.

#### Do

- Preserve the style's strongest signature hierarchy.
- Keep utility controls simpler than the expressive art direction.
- Use original visual assets or structurally similar substitutes.
- Recompose deliberately for mobile.

#### Don't

- Do not copy the reference brand, exact artwork, character, or composition.
- Do not use decorative display type for long body copy.
- Do not add generic glassmorphism or default SaaS cards.
- Do not mix unrelated illustration languages.

#### Implementation Recipe

1. Lock the palette and display/body type roles.
2. Build the hero around the style's primary visual motif.
3. Add only the required signature objects or textures.
4. Keep forms and controls accessible and conventional where needed.
5. Recompose the section rhythm for tablet and mobile.
6. Run recognition, genericity, and accessibility checks.

---


### 4.39 Cinematic Floral Research

**Reference family:** Reference image #39 / cinematic flower-meadow research landing page

**Aliases:** dreamy research meadow, floral tech editorial, nature intelligence landing page

**One-line summary:** A premium nature-tech landing style pairing cinematic shallow-focus photography, handwritten white hero lettering, tiny precise UI, and extremely restrained conversion chrome.

#### AI Selection Snapshot

**Choose this style when:** the product needs calm premium positioning; one excellent environmental image can establish the brand world; the value proposition can stay concise; a research, intelligence, climate, or thoughtful software context benefits from human warmth.

**Reject or heavily reduce it when:** the first screen must carry dense tables or workflows; suitable photography is unavailable; the brand requires loud retail urgency.

**Natural content density:** **low-medium**. Keep the opening cinematic and sparse. Move proof, methodology, features, or case studies into calmer bands after the hero.

**Media dependency:** **10/10**. The style is only convincing with genuinely good hero media.

**Interaction fit:** **6/10**. Strong for marketing and discovery, not for complex application workflows.

**Accessibility fit:** **8/10**. Large handwritten display text is fine when semantic and high contrast; all factual copy stays in a conventional sans.

**Implementation budget:** medium.

#### Design Philosophy & Brand Personality

The environment is the interface. Do not place a card system over the meadow. Let the sky create negative space, let the flowers create depth, and let the UI remain deliberately quieter than the image.

**Brand personality:** intelligent, calm, curious, humane, premium, nature-aware.

#### Reference Visual Breakdown

The reference uses a deep blue sky, bright shallow-focus flower field, soft bloom, a handwritten white headline, tiny centered body copy, a compact white CTA, and a translucent dark navigation pill. The emotional read is cinematic and effortless rather than technical or corporate.

#### Recognition Heuristics

- At thumbnail size, the page should read as an atmospheric photograph with almost no UI clutter.
- The handwritten headline must feel personal and editorial, not like a decorative wedding-script font.
- The flower field should occupy the lower visual mass while the sky protects headline readability.
- Navigation should be tiny and precise.

#### Best-Fit Websites

- research platforms
- market intelligence landing pages
- nature/climate technology
- premium B2B product launches
- AI research tools
- editorial software homepages

#### Poor-Fit Websites

- operational dashboards
- dense marketplaces
- bargain retail
- documentation portals

#### Semantic Color Palette

| Token | Hex | Use |
|---|---:|---|
| `background` | `#07547C` | sky / major environmental field |
| `surface` | `#F5F5F1` | clean proof sections |
| `text` | `#FFFFFF` | hero display text |
| `muted_text` | `#D7E3E8` | hero support copy |
| `secondary` | `#0A3145` | dark utility layer |
| `accent` | `#FFFFFF` | CTA and focal UI |
| `dark` | `#072536` | navigation / footer |

#### Typography

- **Display:** loose handwritten editorial script, short phrases only.
- **Body:** precise modern grotesk.
- **Utility:** compact clean sans.
- Keep the family count to two unless a third utility face is genuinely necessary.

#### Layout & Composition

Use a full-bleed hero, centered message axis, high negative space, and a low foreground horizon of flowers. Later sections should alternate clean light proof bands with occasional full-bleed environmental media.

#### Motion

Use slow focus drift, low-amplitude parallax, and gentle fades. No fast zooms, giant blur transitions, or heavy glass effects.

#### Common AI Failure Modes

- generic stock flowers
- frosted-glass overload
- adding feature cards inside the hero
- low-contrast script text over bright clouds
- turning the calm composition into a generic “AI gradient” landing page

---

### 4.40 Monochrome Storybook Brand

**Reference family:** Reference image #40 / black-and-white illustrated Humankind-style character homepage

**One-line summary:** A monochrome storybook brand world built from giant inked lettering, an ensemble of hand-drawn characters, one tiny warm accent, and a deliberately quiet interface frame.

#### AI Selection Snapshot

Choose when original characters or narrative IP are central. Reduce or reject it when the product needs dense operational UI, formal trust conventions, or there is no coherent illustration pipeline.

**Natural content density:** low-medium.

**Media dependency:** 10/10. The drawing language is the brand system.

**Interaction fit:** 5/10. Excellent for storytelling, browsing, merch, and light conversion.

**Accessibility fit:** 9/10. Monochrome contrast is strong; controls must stay outside the visual noise.

#### Design Philosophy

Make the first screen feel like a book cover or comic spread before it feels like a website. The web layer should be almost boring compared with the characters.

#### Visual Grammar

- black outer canvas
- large rounded white stage
- giant rough black wordmark
- black-and-white character ensemble
- tiny orange sticker/fire/snack accents
- minimal nav
- two small CTAs maximum

#### Best-Fit Websites

indie games, comics, toy brands, character IP, collectibles, family entertainment, fandom communities.

#### Typography

Display is heavy hand-inked block lettering with visible texture. Body can be bookish serif or neutral sans. Utility labels remain tiny and clean.

#### Components

Use illustrated chapter panels, merchandise tiles, story excerpts, and simple black/white buttons. Avoid colorful card systems and generic icon libraries.

#### Motion

Character blink, sticker pop, page-slide, hand-drawn underline. Keep loops rare.

#### Recognition Heuristics

- One visual universe, one line-art language.
- Orange is punctuation, not a secondary palette.
- Characters may overlap the wordmark, but never navigation or CTA labels.

#### Common AI Failure Modes

- mixing unrelated character styles
- adding rainbow color because the page feels “too monochrome”
- defaulting to soft SaaS cards
- turning every section into a comic panel

---

### 4.41 Retro Game Manual Mascot

**Reference family:** Reference image #41 / Bangboo manual poster

**One-line summary:** A collectible game-manual visual system using warm cream paper, giant black/lime block typography, one chunky mascot, red comic labels, and visible halftone/grain.

#### AI Selection Snapshot

Choose for game campaigns, fan pages, character drops, and merch launches. Avoid for serious finance, healthcare, and information-dense tools.

**Natural content density:** low-medium. Metadata can be dense; the core message cannot.

**Media dependency:** 9/10. One strong original mascot or game object is required.

**Interaction fit:** 5/10.

**Accessibility fit:** 7/10.

#### Design Philosophy

Treat the page like a collectible guide cover. One headline and one mascot dominate. Utility metadata creates artifact credibility but never competes with the main message.

#### Core Signature

- cream paper
- black industrial headline
- lime supporting type
- red comic callout
- chunky mascot
- halftone grain
- dark utility strip

#### Typography

Use ultra-heavy geometric or industrial block display with condensed utility labels. Avoid esports-neon typography and sci-fi chrome.

#### Motion

Mascot bob, sticker snap, issue-number reveal, page-slide.

#### Common AI Failure Modes

- generic esports neon
- too many characters
- weak display scale
- glossy futuristic UI
- stickers hiding the CTA

---

### 4.42 Cinematic Anime Portfolio

**Reference family:** Reference image #42 / painterly anime beach portfolio cover

**One-line summary:** A cinematic character-art portfolio system where original illustration acts as the hero, white brush lettering behaves like a film title, and project UI remains nearly invisible until browsing begins.

#### AI Selection Snapshot

Choose for illustrators, concept artists, animation artists, visual-development portfolios, and indie game art. Reject if the media is weak or the site must function primarily as a text-heavy resume.

**Media dependency:** 10/10.

**Natural density:** low-medium.

**Interaction fit:** 6/10.

**Accessibility fit:** 8/10.

#### Design Philosophy

Work first, framework second. The opening should feel like a poster from the artist’s own world, then transition into a disciplined gallery and case-study index.

#### Core Signature

- painterly character/environment artwork
- full-bleed cinematic crop
- oversized white brush title
- tiny year/role metadata
- minimal navigation
- quiet case-study structure

#### Responsive Behavior

Never shrink desktop artwork blindly. Use alternate crops for mobile, protect faces, and move metadata below focal imagery.

#### Common AI Failure Modes

- generic masonry gallery
- covering faces with text
- brush type used for body copy
- too much portfolio chrome
- weak work padded with generic mockups

---

### 4.43 Bold Food-Truck Editorial

**Reference family:** Reference image #43 / food-truck catering campaign website

**One-line summary:** A hospitality campaign style pairing giant condensed black typography with candid food photography, warm paper, rounded crops, lime/pink stickers, and blunt booking controls.

#### AI Selection Snapshot

Choose for food trucks, catering, pizza, casual restaurants, street-food collectives, and event vendors. Reject for quiet luxury, regulated services, and enterprise software.

**Natural content density:** medium.

**Media dependency:** 10/10. Real appetite-driven photography is the style’s engine.

**Interaction fit:** 8/10.

**Accessibility fit:** 9/10.

#### Design Philosophy

Make appetite immediate. Let typography and food photography be loud; keep menu, booking, hours, location, contact, and consent controls extremely clear.

#### Core Signature

- warm off-white paper field
- massive condensed black type
- candid close-up food photography
- lime and pink sticker accents
- rounded image frames
- simple booking button

#### Best-Fit Websites

food trucks, catering, pizza shops, casual hospitality, festivals, pop-ups.

#### Motion

Image crop reveals, sticker pops, menu underline slides. No cinematic 3D food rotations.

#### Common AI Failure Modes

- polished corporate catering stock photography
- timid headings
- hiding menu or booking
- excessive rounded pills
- copying one giant image with no actual restaurant information

---

## Model-Authored Frontend Archetypes

The following fifteen styles are intentionally authored for frontend structure rather than copied from a visual reference. They should still feel as art-directed as the reference-derived styles. Their advantage is that each begins with a website job and defines a visual grammar around it.

### 4.44 Kinetic Product Landing

**Website type:** Landing page

**One-line summary:** A single-goal conversion page using poster-scale typography, one product/concept motif, sharp section rhythm, and purposeful kinetic transitions instead of a centered hero-plus-card-grid template.

#### Structural Objective

Communicate value immediately, focus attention on one primary action, answer objections in sequence, and escalate proof as the user scrolls.

#### Composition Grammar

1. giant product thesis;
2. one visual/product motif;
3. immediate proof or specificity;
4. mechanism/demonstration;
5. objection handling;
6. social or quantitative proof;
7. decisive final CTA.

Alternate loud and quiet sections. Do not make every section a “feature section.”

#### Hero Pattern

Large asymmetric headline, one product object or visual concept, one proof line, one CTA. Avoid two equally prominent buttons.

#### Visual Language

Warm neutral or stark monochrome foundation with one acid/signal accent. Condensed or bold grotesk display. Compact mono labels. Hard rules or selective crop overlaps rather than glass.

#### Motion Philosophy

Use headline line reveals, product crop shifts, one short pinning interaction, proof counters, and micro-lift. The narrative must remain intact with motion disabled.

#### Best For

launches, waitlists, product announcements, lead-gen campaigns, conversion pages.

#### Failure Modes

- centered generic hero
- dashboard mockup for no reason
- identical three-card features
- animation with no narrative job
- multiple competing primary CTAs

---

### 4.45 Spatial SaaS Workbench

**Website type:** SaaS website

**One-line summary:** A product-led SaaS site where real interface scenes behave like a spatial workbench connected to explanatory copy, workflow steps, and measurable outcomes.

#### Structural Objective

Explain what the software does, how workflows connect, why the result matters, and why the buyer should trust it.

#### Composition Grammar

Use annotated product scenes instead of decorative dashboard mockups. Each screenshot, pane, or interface fragment must correspond to a claim.

Recommended sequence:

`category promise -> real workflow -> result -> secondary workflows -> integrations/security -> proof -> conversion`

#### Visual Language

Neutral workbench canvas, precise grid, one strong product accent, compact technical labels, restrained radius, minimal shadows.

#### Product UI Rule

Never shrink a full desktop screenshot until its content becomes decorative noise. Crop to the state being explained or rebuild a simplified accurate scene.

#### Motion

Cursor demonstrations, connector drawing, state changes, panel transitions, small metric updates.

#### Best For

B2B SaaS, productivity tools, AI products, collaboration software, developer-adjacent products.

#### Failure Modes

- fake dashboard screenshot
- floating browser frame with no explanation
- generic gradient blobs
- six feature cards
- screenshot text used as the only product explanation

---

### 4.46 Gallery Index Portfolio

**Website type:** Portfolio

**One-line summary:** An exhibition-like portfolio built from a project index and large responsive media field rather than a card wall.

#### Structural Objective

Make work visible immediately, help visitors understand range and chronology, and move into case studies with almost no friction.

#### Composition Grammar

Project names live in a strong typographic index. Hover/focus/tap can change the adjacent media field, but the index remains useful without that behavior. Featured work can interrupt the index at larger scale.

#### Visual Language

High negative space, large project imagery, sharp numbering, hairline rules, restrained color, editorial type pairing.

#### Navigation

Work, about, contact. Avoid nested portfolio taxonomy unless the body of work genuinely needs it.

#### Mobile

Replace hover previews with inline project media. Keep project title, role, and year directly attached to each item.

#### Failure Modes

- masonry wall
- tiny thumbnails
- biography before work
- hover-only access
- every project presented with identical card anatomy

---

### 4.47 Typographic Studio Agency

**Website type:** Agency website

**One-line summary:** A studio site where a giant point-of-view statement, selected project strips, and process metadata sell taste before a conventional services list appears.

#### Structural Objective

Position the agency, prove capability through work, explain what it does and how it works, then make inquiry obvious.

#### Composition Grammar

`manifesto -> selected work -> capabilities -> process -> client/proof -> contact billboard`

The hero should state a point of view, not “We are a creative agency that helps brands grow.”

#### Visual Language

Massive grotesk or serif/grotesk contrast, asymmetrical editorial grid, project-image interruptions, discipline tags, rules, and big negative space.

#### Service Rule

Services are not three equal cards. Use a capability index, annotated project evidence, or structured text bands.

#### Failure Modes

- generic services cards
- stock-office photos
- vague manifesto
- case studies hidden below self-description
- motion reel doing all the credibility work

---

### 4.48 Editorial Mercantile Commerce

**Website type:** E-commerce store

**One-line summary:** A magazine-like storefront where product discovery stays rigorously predictable while editorial inserts create desire and context.

#### Structural Objective

Support discovery, comparison, variants, price, availability, cart, and checkout while preserving a strong brand world.

#### Composition Grammar

Use a functional product grid interrupted by editorial stories, category statements, campaign images, or material guides. Product tiles may vary in media scale, but price/variant/action anatomy stays predictable.

#### Transaction Rule

Expression lives around commerce, never inside critical transaction behavior. Search, filters, cart, checkout, variant selection, inventory, and price must be conventional.

#### Visual Language

Warm mercantile surfaces, editorial type, varied product crops, restrained badges, minimal shadow.

#### Failure Modes

- beautiful but unusable catalog
- hidden cart
- editorial inserts every other row
- inconsistent price placement
- hover-only variants

---

### 4.49 Cinematic Product Stage

**Website type:** Product website

**One-line summary:** A chaptered product site where one device, object, or app becomes the protagonist and every cinematic scene explains a real product truth.

#### Structural Objective

Build desire while explaining form, mechanism, benefit, proof, ecosystem, and ownership.

#### Composition Grammar

`reveal -> form/detail -> mechanism -> outcome -> proof -> ecosystem -> buy/try`

One product dominates the entire site. Do not introduce unrelated visual metaphors in every chapter.

#### Visual Language

Dark or high-contrast stage, macro media, technical microcopy, narrow information rails, sparse UI.

#### Motion

Slow product rotation, exploded-part reveal, chapter crossfade, macro zoom. Provide static alternatives.

#### Failure Modes

- cinematic media with no information
- endless scroll pinning
- generic black gradient stage
- unreadable specifications
- purchase action hidden until the footer

---

### 4.50 Signal Startup Launch

**Website type:** Startup website

**One-line summary:** A high-signal startup site built around category definition, why-now momentum, product evidence, proof, team/recruiting signals, and one direct action.

#### Structural Objective

Let customers, investors, recruits, and press understand the company quickly without turning the homepage into a pitch-deck collage.

#### Composition Grammar

`what this is -> why now -> product proof -> traction/evidence -> team/context -> action`

Use small signal labels, release notes, hiring tags, metrics, diagrams, and product fragments as evidence.

#### Visual Language

Sharp grotesk, compact mono, off-white/black base with one signal blue/orange accent, hard rules, little shadow.

#### Failure Modes

- vague “future of X” headline
- metrics without context
- meaningless gradient blobs
- generic founder-photo row
- two primary conversion paths fighting above the fold

---

### 4.51 Confident Business Editorial

**Website type:** Business website

**One-line summary:** A trust-first service site using editorial hierarchy, contextual real photography, proof, people/location information, and strong contact pathways without sterile corporate template behavior.

#### Structural Objective

Answer: what do you do, who is it for, why should I trust you, where/how do I engage, and what happens next?

#### Composition Grammar

`precise service promise -> services -> proof -> people/process -> location/contact -> FAQ`

#### Visual Language

Warm neutral foundation, sturdy grotesk or restrained serif, real contextual imagery, editorial rules, minimal decorative motion.

#### Proof Rule

Credentials, testimonials, case results, service areas, hours, people, and contact details are specific and early. Do not replace proof with vague values language.

#### Failure Modes

- stock office smiles
- hidden phone/address
- vague mission copy
- equal-weight service cards
- decorative motion on utility content

---

### 4.52 Signature Personal Brand

**Website type:** Personal brand website

**One-line summary:** A person-first editorial home built around one memorable name/signature treatment, a portrait or artifact, selected work, a living notes stream, and a timeline of proof.

#### Structural Objective

Make one person memorable while connecting work, writing, appearances, current focus, and contact in one coherent identity.

#### Composition Grammar

`identity -> selected work -> writing/notes -> appearances/timeline -> contact`

#### Visual Language

Distinctive signature or custom display paired with a sober reading face, generous editorial spacing, one portrait or personal artifact, compact date/role metadata.

#### Identity Rule

The site must still feel like the same person if all social icons disappear. Do not let platform branding become the visual identity.

#### Failure Modes

- startup-style mission statement
- generic avatar card
- social-link wall
- every activity given equal weight
- signature lettering used for paragraphs

---

### 4.53 Information-Dense Command Dashboard

**Website type:** Dashboard

**One-line summary:** A high-density operational interface optimized for scan speed, stable spatial memory, tabular clarity, explicit state, and repeated daily use.

#### Structural Objective

Help users compare, filter, monitor, drill down, and act quickly without relearning the layout every session.

#### Composition Grammar

Persistent navigation and controls. Stable panel positions. Strong alignment. Dense tables and charts. Contextual detail panes. Minimal decorative content.

#### Density Rule

Density is allowed because anatomy is predictable. Do not make everything a giant card with excessive padding.

#### Typography

Compact UI grotesk plus tabular mono. Body may reach 14–17px only when readability, zoom, and platform conventions support it; otherwise preserve the global 16px baseline.

#### Motion

State highlight, row-update pulse, pane expansion, toast entry. Avoid ambient animation.

#### Failure Modes

- oversized card dashboard
- gradients and decoration stealing attention
- hidden filters
- color-only status
- inconsistent table behavior

---

### 4.54 Adaptive Workspace Web App

**Website type:** Web app

**One-line summary:** A task-centered application shell that preserves navigation memory while the main workspace adapts between list, editor, canvas, inspector, and split modes.

#### Structural Objective

Support repeated tasks, stateful work, keyboard usage, editing, collaboration, and progressive disclosure.

#### Composition Grammar

Stable global shell + adaptive task area. Panels appear because the task needs them, not because the design system contains panels.

#### Interaction Language

Command palette, shortcuts, selection states, undo/autosave feedback, drag/drop alternatives, contextual actions, robust focus order.

#### Mobile

Collapse inspectors into sheets, preserve the selected object/context, and expose one primary workspace mode at a time.

#### Failure Modes

- dashboard cards everywhere
- unstable navigation
- modal overload
- hidden autosave state
- desktop panes simply squeezed onto mobile

---

### 4.55 Tactile Menu Restaurant

**Website type:** Restaurant website

**One-line summary:** A hospitality site that feels like touching a menu, receipt, placemat, and food photograph together while keeping menu, hours, location, and reservations brutally easy to access.

#### Structural Objective

Create appetite, communicate atmosphere, present menu clearly, then remove friction from visiting, calling, ordering, or reserving.

#### Composition Grammar

`food/venue hero -> menu chapters -> story/interior -> reviews/proof -> location/reservation`

#### Media Language

Tactile dish close-ups, real interior/staff photography, ingredient illustration or receipt/stamp artifacts. Avoid glossy stock food photography.

#### Menu Rule

Menu content must exist as real HTML text. A PDF may be downloadable, never the only menu experience.

#### Failure Modes

- hours hidden in footer
- menu only as PDF
- tiny prices
- dietary info communicated only by color
- booking action obscured by decorative graphics

---

### 4.56 Creator Scrapbook Channel

**Website type:** Creator website

**One-line summary:** A latest-first mixed-media creator site that feels like a living scrapbook while preserving a stable archive, predictable metadata, and clear community/support actions.

#### Structural Objective

Show what is new, what is best, who the creator is, where to follow, and how to support or buy without turning the page into a social-link dump.

#### Composition Grammar

`latest feature -> featured archive -> projects/merch -> about -> community/support`

#### Visual Language

Creator-specific display type, mixed posters/thumbnails, handwritten annotations, date/platform labels, optional sticker/tape texture.

#### Content Rule

Every media block uses predictable title/date/platform anatomy even if the visual shape changes.

#### Failure Modes

- random masonry feed
- no difference between old and new content
- platform logos dominating the brand
- autoplay everywhere
- sponsor links becoming the first thing users see

---

### 4.57 Campaign Narrative Marketing

**Website type:** Marketing website

**One-line summary:** A chaptered marketing system that sequences problem, promise, mechanism, proof, objections, social evidence, and action through varied compositions instead of repeating one component pattern.

#### Structural Objective

Answer the visitor’s next question before they ask it. Increase specificity and proof strength as the page progresses.

#### Composition Grammar

`problem -> promise -> mechanism -> evidence -> objection -> social proof -> action`

No two adjacent sections should solve the same communication problem.

#### CTA Rule

Use one primary action consistently. Repeat it only at moments where the preceding section has earned another decision opportunity.

#### Visual Language

Style-specific. This archetype controls sequence and composition, not a fixed palette. It can inherit a reference-derived visual language as long as the narrative structure stays intact.

#### Failure Modes

- feature-card repetition
- identical sections
- CTA every few hundred pixels
- weak or generic proof
- no escalation in specificity

---

### 4.58 Immersive App Showcase

**Website type:** App showcase

**One-line summary:** An interface-first showcase that demonstrates the app through real choreographed states, synchronized copy, contextual annotations, and clear platform/download actions.

#### Structural Objective

Show what using the app feels like and why specific interactions matter.

#### Composition Grammar

`app promise -> core flow -> feature scenes -> proof -> ecosystem -> download/try`

#### Device Rule

A phone, tablet, or laptop frame is optional context, not the design concept. Remove the device frame whenever it wastes space or makes the actual UI too small.

#### Media Rule

Use real captures, accurate UI reconstructions, and short controlled recordings. Never fabricate app states or features.

#### Motion

Screen transition, pointer gesture, state morph, device pivot only when useful. Always provide static explanation and reduced-motion behavior.

#### Failure Modes

- giant phone mockup with no explanation
- fake product screens
- endless 3D rotation
- feature cards detached from the interface
- download action hidden below spectacle

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
- experimental-pet-editorial: scalloped/bone-pattern frame or dotted editorial seam.
- dreamy-indie-software: cloud edge, soft star-field fade, or rounded dark scene cut.
- neo-future-aigc: hard black/white split, gel-object overlap, or crisp modular crop.
- maximal-collage-report: torn/cropped collage splice, chapter bar, or warped-pattern break.
- y2k-portfolio-collage: checker band, sticker seam, notebook/page edge, or grid jump.
- retro-marketplace-pop: oversized product crop, retail badge edge, or hard vector panel.
- neo-brutal-education: rounded stage cut, grid shift, or sticker-object overlap.
- cosmic-event-story: scallop, rainbow wave, cloud bank, or illustrated horizon.
- genz-influencer-editorial: hard cobalt/lime frame shift or pixel-index break.
- retro-cartoon-type-specimen: checkerboard floor, cloud bank, or poster-panel seam.
- retro-browser-type-specimen: thick-outline browser window edge or checkerboard stage.

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
- tiny soft glyphs and toy-like symbols for dreamy-indie-software;
- fluorescent micro-icons plus one surreal 3D object family for neo-future-aigc;
- cutout-object symbolism for maximal-collage-report;
- original stickers and pixel accents for y2k-portfolio-collage;
- thick retail-vector symbols for retro-marketplace-pop;
- coherent educational object illustration for neo-brutal-education;
- flat cosmic SVGs for cosmic-event-story;
- flat character + pixel numeral language for genz-influencer-editorial;
- mascot cartoon glyphs for retro-cartoon-type-specimen;
- thick-outline browser/cartoon glyphs for retro-browser-type-specimen.

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
- soft 3D / gel hero-object system;
- surreal cutout collage;
- flat editorial character illustration;
- retro retail vector-object system;
- cosmic scene illustration;
- toy-browser mascot system.
- sticker-product collage system;
- soft watercolor/anime editorial system;
- hand-painted folk illustration;
- kawaii retro-browser mascot system.

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
- deep navy star field with a puffy closing wordmark;
- black/white creative-tech billboard with fluorescent capsules;
- cobalt collage report closing spread;
- hot-pink sticker/catalog sign-off;
- primary-color retail label wall;
- charcoal education stage with sticker object;
- purple cosmic cloud/reward scene;
- cobalt/lime creator poster;
- periwinkle mascot/type-specimen thank-you panel;
- green toy-browser closing window.
- gray/white seasonal accessory collage;
- supermarket receipt/sticker wall;
- soft cream cat-product basket;
- graph-paper portfolio sign-off;
- teal/cream color-theory panel;
- royal-blue pixel-flower phrase;
- black/yellow floral wordmark;
- cobalt folk-poster field;
- cobalt/yellow magical-girl desktop window.

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
- at least three recognizable signatures from the selected dominant style at balanced strength
- style-specific section boundaries, imagery, and typography rather than mandatory cross-style motifs
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
- [ ] The website type and its primary user job are explicit before component generation.
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
**Build interfaces like expressive digital posters and physical brand artifacts, while respecting the structural demands of the selected website type: use oversized personality-rich typography, intentional asymmetry, limited high-confidence palettes, tactile grain, pixel or hand-drawn graphics, strong color blocking, editorial photography, and simple usable controls. Select one coherent visual mode at a time, borrow only the shared visual grammar of the references, and reject generic SaaS composition whenever a more authored solution can communicate the same content clearly.**

# Appendix: Authored Frontend Signature Lock

The fifteen model-authored frontend archetypes are **not** interchangeable website-type presets. Each owns a visual fingerprint that must remain recognizable after brand names, logos, copy, and supplied imagery are removed.

A generated page fails this system if its authored style can be renamed to another authored style without changing the composition, typography behavior, recurring motif, component anatomy, and interaction language.

## Signature enforcement

For any of the fifteen authored frontend styles:

1. Use the style's named signature in the hero or first major viewport.
2. Re-express the same signature at least once later in the page through a different composition.
3. Express the fingerprint through at least three channels: composition, typography, motif, motion/interaction, or information anatomy.
4. Do not copy another authored style's exclusive signature as the dominant device unless that style is explicitly selected as the secondary style.
5. On mobile, simplify the signature instead of deleting it.
6. Do not use the signature as decorative wallpaper. It must support the job of the website type.
7. Critical content and state must remain understandable without motion or decorative motifs.

## The fifteen owned signatures

### Kinetic Product Landing — `Kinetic Hinge`

The product and the headline behave like two physical masses meeting at one tension point. The hero should feel as if the type is holding, framing, cutting through, or being displaced by the product protagonist. Later sections echo that tension using a recurring accent hinge, directional crop, or impact/proof transition.

It should never collapse into a centered headline floating above a screenshot.

### Spatial SaaS Workbench — `Workflow Spine`

Real product states are organized along one visible causal spine. Annotation nodes explain what changed, why it matters, and what outcome follows. The spine is functional storytelling, not a decorative line.

The SaaS page should remain identifiable even if all screenshots are replaced with wireframes because the workflow relationships still define the composition.

### Gallery Index Portfolio — `Living Index`

The project index is part of the artwork. Oversized project numbers, active markers, and a live relationship between index and media field make browsing work feel editorial rather than card-based.

The index must remain usable without hover and should visibly hand off into case-study navigation.

### Typographic Studio Agency — `Manifesto Margin`

A dedicated editorial margin carries the studio's point of view, discipline metadata, and process annotations. Selected work occupies the main field while the margin explains how the studio thinks.

This is not a sidebar menu. It is the agency's authored voice embedded into the composition.

### Editorial Mercantile Commerce — `Merchandise Ledger`

Expressive merchandising is allowed to vary wildly, but price, variants, quantity, availability, and action remain aligned like a ledger. Editorial collection spreads may interrupt the catalog, yet transaction anatomy stays predictable.

The visual signature is the tension between magazine-like merchandising and disciplined commerce metadata.

### Cinematic Product Stage — `Orbit Stage`

One product remains the protagonist. Chapters change crop, distance, lighting, material detail, or viewing angle around that same object. Macro-detail halos or orbit framing connect close-up features back to the whole product.

Do not introduce multiple equal protagonists. The page is a stage, not a catalog.

### Signal Startup Launch — `Signal Stack`

Category definition, product momentum, evidence, and action stack like a live launch instrument. Repeated signal dots, status ticks, stamps, or proof markers create the feeling that the company is moving now rather than describing a future someday.

Signals must always correspond to real meaning or evidence. Random blinking decorations fail the style.

### Confident Business Editorial — `Proof Ledger`

Every important service promise receives nearby proof: a number, credential, customer, place, result, person, or concrete case fact. Editorial restraint makes those facts feel authoritative instead of promotional.

The signature is specificity. Decorative prestige without proof does not qualify.

### Signature Personal Brand — `Autograph Thread`

One personal gesture connects biography, work, notes, and timeline. It can be a handwritten stroke, distinctive line, personal mark, recurring annotation, or another original visual gesture tied to the person.

The site should remain recognizable when the logo is removed because the author's visual handwriting still connects everything.

### Information-Dense Command Dashboard — `Status Rail`

A persistent rail exposes scope, mode, time, health, filters, or keyboard hints while the data canvas changes. It creates spatial memory and lets the user understand system state without scanning every panel.

The rail must stay stable. If it moves or morphs constantly, it stops functioning as the dashboard's signature anchor.

### Adaptive Workspace Web App — `Context Dock`

The central workspace may transform between documents, editors, canvases, lists, or other task modes, but contextual actions live in a stable dock. Dock content changes because the task state changed, not because the layout needs decoration.

The signature is stable task memory inside an adaptive workspace.

### Tactile Menu Restaurant — `Menu Fold`

Menu chapters behave like physical folds, sheets, placemats, receipts, or layered menu papers. Food imagery can cross these boundaries while price, item name, dietary information, hours, location, and reservation actions stay readable.

The style should feel touchable before it feels fashionable.

### Creator Scrapbook Channel — `Channel Tape`

Different content streams are identified by creator-specific tape, pins, labels, stamps, or annotations. Beneath that playfulness, archive metadata remains systematic so visitors can distinguish latest content, older work, platform, date, and format.

The tape system is a channel language, not random scrapbook decoration.

### Campaign Narrative Marketing — `Argument Ladder`

The page visibly climbs from problem or tension toward mechanism, evidence, objection handling, social proof, and action. Each rung changes the type of proof and increases specificity.

Numbering sections without argumentative progression does not count. The ladder must change what the visitor knows.

### Immersive App Showcase — `State Ribbon`

Real interface states connect into a continuous product-use sequence. Copy, annotations, gestures, and motion synchronize with those states so visitors see a task progressing rather than a device floating for spectacle.

Every transition must represent a real product state change. Decorative device spins are not the signature.

## Cross-style uniqueness test

Before accepting a generated frontend, compare it against the other fourteen authored archetypes.

The style passes only when all of the following are true:

- its named signature is visible without reading the style name;
- at least three signature channels are present;
- the hero cannot be swapped with another archetype's hero without redesign;
- the main component anatomy matches the website's job;
- its recurring motif has a functional relationship to content;
- mobile still preserves the fingerprint;
- the result remains recognizable with the logo and brand name hidden.

If those conditions are not met, strengthen the selected style rather than adding random decoration.