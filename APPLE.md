# APPLE.md

> Project-specific design system inspired by the iOS 26–27 visual direction, with a strong focus on Liquid Glass, clarity, consistency, restraint, and performance.

---

## 1. Purpose

This document defines the visual language, interaction rules, layout behavior, and implementation principles for interfaces that aim to feel clean, modern, premium, and consistent.

The original direction emphasizes that Liquid Glass should not be treated as decoration alone. It should support a minimal interface, preserve readability, and remain performant across the entire product.

This guide turns those ideas into practical rules that can be followed by both humans and AI agents when building or reviewing UI.

---

## 2. Design Philosophy

### Core idea

The interface should feel:

- minimal without feeling empty;
- rich without becoming visually noisy;
- modern without depending on excessive effects;
- consistent across every screen;
- responsive and performant;
- visually layered, but still easy to understand.

The design should avoid adding text, images, controls, effects, or containers unless they improve understanding, navigation, hierarchy, or interaction.

### Primary principles

1. **Clarity before decoration**
2. **Consistency before novelty**
3. **Performance before visual complexity**
4. **Hierarchy before density**
5. **Depth with restraint**
6. **Content remains the focus**
7. **Motion should explain interaction**
8. **Glass should support structure, not replace it**

---

## 3. Design Tokens

```yaml
designSystem:
  name: "iOS 26-27 Inspired Liquid Glass"
  status: "project-guideline"
  version: "1.0"

agentInstruction:
  primaryGoal: "Create a clean, restrained, high-quality interface with consistent Liquid Glass behavior."
  avoid:
    - "excessive blur"
    - "low-contrast text"
    - "too many glass surfaces"
    - "random gradients"
    - "decorative effects without purpose"
    - "inconsistent corner radii"
    - "overly dense layouts"
    - "unnecessary labels"
    - "duplicated actions"
    - "expensive visual effects that hurt performance"

selectionRules:
  dominantStylesPerPage: 1
  secondaryStylesPerPageMax: 1
  secondaryVisualShareMax: "30%"
  minimumStyleConfidenceToAutoselect: 0.65

styleWeights:
  productCategoryFit: 0.25
  brandPersonalityFit: 0.20
  contentDensityFit: 0.15
  audienceFit: 0.15
  mediaAssetFit: 0.10
  interactionFit: 0.10
  accessibilityFit: 0.05

referencePolicy:
  copyReferenceBrands: false
  copyReferenceLogos: false
  copyReferenceText: false
  copyReferenceArtwork: false
  reuseVisualLanguageOnly: true

color:
  background:
    primary: "system-adaptive"
    secondary: "subtle-elevated"
  foreground:
    primary: "high-contrast"
    secondary: "medium-contrast"
    tertiary: "low-emphasis"
  accent:
    usage: "focused"
    maxSimultaneousAccentFamilies: 1

glass:
  transparency: "context-dependent"
  blur: "moderate"
  saturation: "subtle"
  border: "soft-highlight"
  shadow: "low-intensity"
  layering: "limited"
  performancePriority: "high"

radius:
  small: "10-12px"
  medium: "16-20px"
  large: "24-32px"
  pill: "999px"

spacing:
  baseUnit: "4px"
  compact: "8px"
  normal: "12-16px"
  section: "24-32px"
  largeSection: "48-64px"

motion:
  durationFast: "120-180ms"
  durationNormal: "200-320ms"
  durationLarge: "320-500ms"
  easing: "smooth, natural, non-linear"
  purpose: "communicate state, hierarchy, and continuity"

typography:
  hierarchy:
    display: "large, confident, sparse"
    title: "prominent but compact"
    body: "highly readable"
    caption: "secondary information only"
  alignment: "contextual"
  lineLength: "comfortable"
  decorativeFonts: "avoid unless strongly justified"
```

---

## 4. Liquid Glass

### 4.1 What Liquid Glass should do

Liquid Glass is a structural visual material.

Use it to:

- separate layers;
- communicate hierarchy;
- hold controls;
- create temporary or floating surfaces;
- preserve context behind an overlay;
- provide depth without heavy borders;
- make controls feel integrated with surrounding content.

Do not use it simply because an area feels visually empty.

### 4.2 Core appearance

A successful glass surface usually combines:

- background transparency;
- blur;
- slight color adaptation;
- subtle highlight or border;
- soft depth;
- strong foreground contrast.

The result should remain readable even when content behind the glass is visually complex.

### 4.3 Glass intensity

Use three practical levels.

#### Subtle Glass

Best for:

- navigation bars;
- toolbars;
- compact controls;
- secondary floating surfaces.

Characteristics:

- low transparency;
- restrained blur;
- almost invisible border;
- minimal shadow.

#### Standard Glass

Best for:

- cards;
- panels;
- sheets;
- modal surfaces;
- media controls.

Characteristics:

- moderate blur;
- visible material separation;
- soft highlight;
- controlled shadow.

#### Strong Glass

Best for:

- temporary focus surfaces;
- important overlays;
- hero controls over imagery.

Characteristics:

- stronger blur;
- slightly stronger material tint;
- higher separation from the background.

Strong Glass should be uncommon.

---

## 5. Glass Usage Rules

### Do

- maintain readable contrast;
- use similar glass treatment for similar components;
- keep blur values consistent;
- reuse a small number of material variants;
- test glass over both bright and dark content;
- simplify the background behind important text;
- reduce visual effects on low-performance devices if necessary.

### Do not

- stack several translucent panels without reason;
- place long paragraphs directly on highly transparent glass;
- use a different glass style for every component;
- combine heavy blur, strong glow, large shadows, gradients, and noise at the same time;
- use glass on every container;
- allow decorative effects to reduce responsiveness.

---

## 6. Hierarchy

Every screen should communicate three levels clearly:

### Primary

The thing the user is currently meant to see or do.

Examples:

- current media;
- page title;
- active workspace;
- main action;
- focused content.

### Secondary

Supporting actions and information.

Examples:

- navigation;
- filters;
- playback controls;
- metadata;
- secondary buttons.

### Tertiary

Optional or low-priority information.

Examples:

- helper text;
- timestamps;
- passive status indicators;
- less-used actions.

Do not give tertiary information the same visual weight as primary content.

---

## 7. Layout

### General rules

Prefer:

- generous spacing;
- clear grouping;
- strong alignment;
- predictable margins;
- simple content flow;
- fewer containers.

Avoid:

- nested cards inside cards;
- arbitrary spacing;
- excessive separators;
- unnecessary vertical height;
- controls floating without alignment.

### Density

The interface should feel compact enough to be efficient, but never cramped.

Dense layouts are acceptable for dashboards or professional tools, but hierarchy must remain obvious.

---

## 8. Typography

Typography carries most of the hierarchy.

### Rules

- Use size, weight, spacing, and contrast before adding decoration.
- Use bold text selectively.
- Avoid excessively large headings unless the page genuinely needs a hero moment.
- Keep body text easy to scan.
- Keep labels short.
- Avoid unnecessary uppercase text.
- Avoid repeating information already communicated visually.

### Text hierarchy

A typical hierarchy:

```text
Display
Page Title
Section Title
Primary Body
Secondary Body
Caption
Metadata
```

Do not create many near-identical text styles.

---

## 9. Color

Color should support meaning.

Use color for:

- selection;
- focus;
- status;
- identity;
- important actions;
- contextual adaptation.

Avoid using many accent colors simultaneously.

### Dynamic color

When colors are derived from artwork, media, or surrounding content:

- preserve text contrast;
- reduce excessive saturation;
- avoid muddy mixtures;
- prefer one dominant family;
- use extracted colors as accents rather than applying every sampled color everywhere.

---

## 10. Buttons and Controls

### Primary actions

A primary action should be immediately visible without overwhelming the layout.

Use:

- filled material;
- strong contrast;
- clear label or universally understood icon.

### Secondary actions

Use:

- lower-emphasis fill;
- glass material;
- outline;
- icon-only controls when obvious.

### Pills

Pill shapes work well for:

- filters;
- tabs;
- toggles;
- compact navigation;
- small contextual actions.

Do not make every button a pill.

---

## 11. Navigation

Navigation should feel persistent but visually quiet.

Recommended behavior:

- highlight only the active destination;
- avoid large permanent navigation blocks where a compact structure works;
- reduce labels when icons are universally understandable;
- keep important navigation reachable;
- preserve location awareness.

Glass navigation bars should remain readable over changing backgrounds.

---

## 12. Cards and Containers

Use containers only when grouping is necessary.

Before adding a card, ask:

> Does this information need visual separation?

If not, use spacing instead.

Recommended card properties:

- consistent radius;
- subtle elevation;
- limited border;
- calm background;
- clear internal padding.

Avoid stacking multiple visually heavy cards.

---

## 13. Images and Media

Media should usually remain visually dominant.

Use overlays carefully.

For text over imagery:

- use local contrast enhancement;
- add a subtle gradient or material layer when necessary;
- avoid placing critical text over highly detailed areas;
- ensure controls remain visible regardless of artwork color.

Do not obscure important media with large decorative UI.

---

## 14. Motion

Motion should communicate:

- where something came from;
- where something went;
- what changed;
- which element is active;
- how two states are connected.

Good motion feels responsive and continuous.

Avoid:

- slow transitions for common actions;
- animation on every element;
- bouncing or spring effects without interaction meaning;
- long entrance animations that block use;
- motion that causes layout instability.

---

## 15. Interaction Feedback

Every interactive element should communicate state.

Support:

- hover;
- pressed;
- focused;
- selected;
- disabled;
- loading;
- error;
- success.

Feedback should be subtle but immediate.

Avoid state changes that rely only on color.

---

## 16. Accessibility

A premium interface still needs to be usable.

Requirements:

- sufficient text contrast;
- visible keyboard focus;
- readable type sizes;
- comfortable hit targets;
- meaningful labels for icons;
- reduced-motion support;
- reduced-transparency fallback where practical;
- no critical information communicated through color alone.

Liquid Glass must never reduce accessibility.

---

## 17. Performance

Performance is part of the visual design.

Glass, blur, backdrop filters, shadows, layered transparency, and animation can become expensive when used excessively.

### Rules

- limit simultaneously blurred surfaces;
- avoid full-screen blur where a smaller region works;
- minimize nested transparency;
- animate transform and opacity when possible;
- avoid continuously animating large blurred elements;
- reduce visual complexity on weaker devices;
- profile expensive effects rather than assuming they are cheap.

A visually impressive interface that feels slow is not considered successful.

---

## 18. Responsive Behavior

The design language should remain recognizable across screen sizes.

### Small screens

Prioritize:

- main content;
- touch targets;
- clear hierarchy;
- compact navigation;
- reduced simultaneous controls.

### Large screens

Use additional space for:

- context;
- side panels;
- larger media;
- secondary information.

Do not simply scale every mobile element upward.

---

## 19. Component Consistency

Components with the same role should look and behave the same.

Standardize:

- radius;
- spacing;
- blur;
- typography;
- icon size;
- control height;
- shadows;
- transitions;
- hover states;
- active states.

If two controls perform the same type of action, they should not appear unrelated.

---

## 20. Visual Restraint

A strong interface does not need every effect available.

Before adding an effect, ask:

1. Does it improve hierarchy?
2. Does it improve interaction feedback?
3. Does it improve readability?
4. Does it reinforce the design language?
5. Is the performance cost justified?

If the answer is no, remove it.

---

## 21. Anti-Patterns

Avoid:

- glass everywhere;
- giant blurry blobs used only as decoration;
- excessive gradients;
- excessive glow;
- very low opacity text;
- multiple competing accent colors;
- inconsistent corner radii;
- oversized navigation;
- deeply nested cards;
- floating controls without alignment;
- unclear icon-only actions;
- unnecessary labels;
- excessive motion;
- long animations before content becomes usable;
- copying another product literally.

---

## 22. Reference Implementations

The original source provided the following Liquid Glass libraries.

### Android

1. **AndroidLiquidGlassView**  
   https://github.com/QmDeve/AndroidLiquidGlassView  
   The original notes mark this as the preferred option.

2. **AndroidLiquidGlass**  
   https://github.com/Kyant0/AndroidLiquidGlass

### React

1. **liquid-glass-react**  
   https://github.com/rdev/liquid-glass-react

These projects should be treated as implementation references rather than strict visual specifications.

---

## 23. Implementation Guidance

When translating this design language into a product:

```text
1. Build the layout without glass.
2. Confirm hierarchy and spacing.
3. Confirm typography and contrast.
4. Add interaction states.
5. Add glass only to surfaces that benefit from depth.
6. Add motion after the interaction model is stable.
7. Test against bright and dark backgrounds.
8. Test reduced transparency and reduced motion.
9. Profile performance.
10. Remove any effect that does not improve the experience.
```

This prevents the design from depending on visual effects to hide weak structure.

---

## 24. AI Agent Rules

When an AI agent creates UI using this design system, it should:

- study the existing page before modifying it;
- preserve working hierarchy unless there is a reason to change it;
- avoid inventing unnecessary sections;
- reuse existing components before creating variants;
- maintain one dominant visual language per page;
- keep secondary style influence below roughly 30%;
- prioritize content and interaction over decoration;
- preserve accessibility;
- preserve performance;
- avoid literal copying of reference products;
- use references to understand visual language, not to duplicate branded assets.

### Decision order

When uncertain, prefer:

```text
Usability
→ Hierarchy
→ Consistency
→ Accessibility
→ Performance
→ Visual polish
→ Decoration
```

---

## 25. Review Checklist

Before considering a screen complete, verify:

- [ ] The primary action or content is obvious.
- [ ] Text remains readable over every background.
- [ ] Glass is used only where it has a purpose.
- [ ] Similar components share the same visual treatment.
- [ ] Spacing follows a consistent rhythm.
- [ ] Corner radii are consistent.
- [ ] Accent color usage is restrained.
- [ ] Navigation clearly communicates the current location.
- [ ] Motion improves understanding.
- [ ] Reduced-motion behavior is acceptable.
- [ ] No unnecessary container or card can be replaced with spacing.
- [ ] The screen remains usable without decorative effects.
- [ ] Expensive blur and transparency are limited.
- [ ] The interface works at small and large viewport sizes.
- [ ] The result is inspired by references rather than copied from them.

---

## 26. Final Principle

The interface should feel simple before it feels impressive.

Liquid Glass, animation, gradients, adaptive color, shadows, and depth are supporting tools. The foundation is still hierarchy, spacing, typography, consistency, accessibility, and performance.

When visual polish and usability conflict, usability wins.