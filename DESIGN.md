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