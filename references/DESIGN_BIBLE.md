---
version: 2.1.0
last_updated: 2026-06-09
related:
  - RESPONSIVE_DESIGN.md (viewport and device categories)
  - FRONTEND_PROMPTS.md (cross-skill injection from Design Bible)
  - horizontal-craft/anti-ai-slop.md (slop avoidance rules)
  - horizontal-craft/typography.md (typography craft)
  - horizontal-craft/color.md (color craft)
  - design-system.md (design system selection)
---

# Design Bible — Classical & Professional Composition

## Zero Tolerance for AI Slop

AI slop is visual noise generated without intention. The following are strictly forbidden:
- Neon gradients on dark backgrounds without functional purpose
- Generic 3D glassmorphism with no material logic or context
- Purple-blue-pink gradient blobs used as meaningless decoration
- Excessive rounded corners applied universally (not everything is a pill)
- Random floating geometric shapes with no compositional reason
- Futuristic sans-serif fonts used for every text element regardless of tone
- Unnecessary motion and parallax that reduces usability or causes motion sickness
- Generic isometric illustrations that communicate nothing
- Overuse of emojis and icons as substitutes for actual content
- Center-aligned text blocks wider than sixty characters

## Foundational Layout Systems

### 1. Rule of Thirds
Divide the canvas into a three-by-three grid. Place focal points at the four intersection points or along the grid lines.
- Hero sections: position the primary headline at the left-top intersection and the call-to-action at the right-bottom intersection.
- Dashboards: place primary data visualizations at intersections, secondary metrics along edges.
- Photography and imagery: align horizons along the top or bottom horizontal line, never the center.
- Mobile adaptation: the grid collapses to a single column, but focal points still align to the upper or lower third of the viewport height.

### 2. Golden Ratio (Phi, approximately 1.618)
Apply to spacing scales, typography hierarchies, container proportions, and image cropping.
- Base unit: eight pixels. Scale sequence: eight, thirteen, twenty-one, thirty-four, fifty-five, eighty-nine, one hundred forty-four.
- Two-column layouts: sixty-one point eight percent content area, thirty-eight point two percent sidebar.
- Typography: if body text is sixteen pixels, heading one equals sixteen multiplied by phi cubed (approximately sixty-seven pixels), heading two equals sixteen multiplied by phi squared (approximately forty-two pixels).
- Image aspect ratios: prefer sixteen-by-ten (close to phi), eight-by-five, or custom crops using the golden spiral.
- Mobile adaptation: maintain phi proportions in stacked layouts by using the ratio for section spacing rather than side-by-side columns.

### 3. F-Pattern
Users scan content in an F-shaped path: full width across the top, then down the left side with shorter horizontal scans.
- Navigation and primary calls-to-action belong in the top horizontal bar.
- Critical information and section headers belong along the left vertical axis.
- Supporting details fill the right side where attention is weakest.
- Ideal for: text-heavy pages, search results, news feeds, documentation.
- Mobile adaptation: the F-pattern becomes a single vertical stack, but the top horizontal scan remains critical for the header and primary action.

### 4. Z-Pattern
The eye moves from top-left to top-right, diagonally down to bottom-left, then across to bottom-right, forming a Z.
- Top-left: brand logo or back navigation.
- Top-right: primary call-to-action or user account.
- Center: large hero image or value proposition that bridges the diagonal.
- Bottom-left: secondary information or trust signals.
- Bottom-right: final conversion action.
- Ideal for: landing pages with minimal text, splash screens, simple marketing pages.
- Mobile adaptation: the Z collapses vertically but maintains the sequence: brand, then hero, then primary action, then secondary action.

### 5. Visual Hierarchy & Scale
Contrast creates hierarchy through size, weight, color, density, and whitespace. Without hierarchy, everything competes for attention and nothing wins.
- Establish exactly ONE dominant element per viewport or screen. Everything else must support it.
- The squint test: squint at the design. The hierarchy should remain visible even when details blur.
- Minimum scale jump ratio between adjacent levels is one point five times.
- Use scale to indicate importance, not just to fill space.
- Mobile adaptation: reduce the number of hierarchy levels to three (primary, secondary, tertiary) to prevent clutter on small screens.

### 6. Grid Systems
- Baseline grid: four or eight pixel vertical rhythm. All vertical spacing must be exact multiples of the base unit. Text line heights must align to the grid.
- Column grid: twelve columns for desktop web, six columns for tablet, four columns for mobile. Gutter equals twenty-four pixels on desktop, sixteen on tablet, twelve on mobile.
- Modular grid: combine column grid with baseline grid for strict alignment of both horizontal and vertical elements. Used in editorial and data-dense interfaces.
- Compound grid: overlay two grids with different rhythms (for example, a four-column grid over a twelve-column grid) to create more complex but still harmonious layouts.
- Mobile adaptation: switch from multi-column to single-column stacking, but maintain baseline grid alignment for visual consistency.

### 7. Symmetry & Balance
- Symmetry: mirror layouts around a central axis. Creates formality, trust, and stability. Best for banking, legal, medical, and institutional contexts.
- Asymmetry: balance visual weight rather than mirroring elements. Creates dynamism, energy, and visual interest. Best for creative portfolios, entertainment, and youth brands.
- Radial balance: elements radiate from a central point. Creates focus and convergence. Best for dashboards with a central metric, loading states, and hero sections with a single focal product.
- Crystallographic balance: uniform distribution of similar-sized elements across the canvas. Creates pattern and texture. Best for galleries, product grids, and icon sets.
- Mobile adaptation: radial and crystallographic grids often require two-column or scrollable horizontal layouts on mobile to prevent excessive vertical length.

### 8. White Space (Ma)
Empty space is active, not wasted. It defines relationships, creates breathing room, and guides attention.
- Minimum forty percent whitespace in content-heavy pages.
- Proximity principle: elements close together are perceived as related. Use whitespace to group or separate information.
- Macro whitespace: the space between major sections. Creates structure and rhythm.
- Micro whitespace: the space between letters, lines, and small components. Affects readability and perceived quality.
- Mobile adaptation: reduce macro whitespace by twenty to thirty percent on mobile to prevent excessive scrolling, but maintain micro whitespace for touch target separation.

### 9. Framing & Containment
Use containers, cards, borders, or negative space to isolate focal points and create visual boundaries.
- Cards group related information and create scannable units.
- Borders define territory without adding visual weight if kept to one pixel.
- Negative space framing: surround a focal element with emptiness to draw the eye.
- Overlapping elements: break the grid intentionally to create depth and visual interest, but only once per composition.
- Mobile adaptation: full-bleed cards (edge to edge) work better on mobile than floating cards with margins, as they maximize limited screen real estate.

### 10. Leading Lines
Use subtle visual paths to guide the eye from one element to the next.
- Explicit lines: borders, dividers, or connector graphics.
- Implicit lines: alignment of text baselines, edges of images, or directional gaze in photography.
- Curved lines: create flow and movement, guiding the eye gently through a narrative.
- Diagonal lines: create energy and dynamism. Use sparingly.
- Mobile adaptation: leading lines should guide vertically on mobile, supporting the natural scroll direction.

### 11. Layering & Depth
Create spatial relationships through overlapping, shadow, scale variation, and atmospheric perspective.
- Overlap: the element in front is perceived as closer. Use to establish priority.
- Shadow: subtle elevation shadows indicate interactivity (cards, buttons) or separation (modals, dropdowns).
- Scale: larger elements appear closer. Use scale to create depth in hero sections.
- Blur and opacity: reduce detail and contrast on background layers to push them back.
- Mobile adaptation: minimize layered complexity on mobile. Flat designs with subtle shadows perform better on small screens and reduce rendering overhead.

### 12. Repetition & Rhythm
Repeating visual elements creates predictability, unity, and a sense of professional polish.
- Repetition: use the same spacing, sizing, color, and shape language across all similar components.
- Rhythm: variation within repetition creates visual interest. Alternate large and small elements, or light and dark sections.
- Pattern: systematic repetition creates texture. Use for backgrounds, dividers, or data visualization.
- Mobile adaptation: maintain repetition for component consistency, but simplify rhythms to prevent visual fatigue on small screens.

## Typography

### Scale (Golden Ratio Based)
| Level | Desktop Size | Mobile Size | Weight | Line Height | Letter Spacing | Use Case |
|-------|-------------|-------------|--------|-------------|----------------|----------|
| Display | 89 pixels | 42 pixels | 700 | 1.05 | minus 0.02 em | Hero headlines |
| H1 | 55 pixels | 32 pixels | 700 | 1.1 | minus 0.01 em | Page titles |
| H2 | 34 pixels | 24 pixels | 600 | 1.2 | normal | Section headers |
| H3 | 21 pixels | 18 pixels | 600 | 1.3 | normal | Subsections |
| Body Large | 18 pixels | 16 pixels | 400 | 1.6 | normal | Lead paragraphs |
| Body | 16 pixels | 15 pixels | 400 | 1.6 | normal | Paragraphs |
| Caption | 13 pixels | 12 pixels | 400 | 1.5 | plus 0.01 em | Labels, metadata |
| Micro | 11 pixels | 10 pixels | 500 | 1.4 | plus 0.02 em | Tags, badges, legal |

### Pairing Rules
- Maximum two font families per project.
- Pair for contrast: a serif with a sans-serif, or a geometric sans with a humanist sans.
- Never pair two fonts from the same category (for example, two geometric sans-serifs).
- Recommended pairings:
  - Editorial and long-form: Source Serif 4 paired with Inter
  - Technical and developer tools: JetBrains Mono paired with IBM Plex Sans
  - Premium and luxury: Playfair Display paired with Sora
  - Friendly and approachable: Nunito paired with Merriweather
  - Brutalist and utilitarian: Space Mono paired with Helvetica Now

### Readability
- Line length: forty-five to seventy-five characters per line is optimal. Never exceed ninety characters.
- Paragraph spacing: one times the line height of the body text.
- Justified text is forbidden on the web. It creates rivers of whitespace between words.
- All caps: use only for short labels (three words maximum) with increased letter spacing.
- Mobile adaptation: reduce line length naturally through narrower containers. Increase line height slightly (by 0.05 to 0.1) for better readability on small screens.

## Color Theory

### Palette Construction
- Sixty-thirty-ten rule: sixty percent dominant color (backgrounds and large surfaces), thirty percent secondary color (containers and sections), ten percent accent color (calls-to-action, highlights, and critical indicators).
- Build palettes in HSL (Hue, Saturation, Lightness) rather than HEX for systematic adjustments.
- Minimum contrast ratios: four point five to one for body text against background, three to one for large text and user interface components.
- Test palettes under color blindness: protanopia, deuteranopia, and tritanopia simulations.

### Semantic Color
- Error: red family, high saturation, medium lightness. Must be distinguishable from the accent color for colorblind users.
- Warning: amber or orange family. Must not be confused with the primary brand color.
- Success: emerald or green family. Should feel calm and confirming, not celebratory.
- Information: blue family. Should feel neutral and trustworthy.
- Neutral: slate or gray scale. Used for text, borders, dividers, and inactive states.

### Dark Mode
- Backgrounds: lightness between five and fifteen percent. Pure black causes eye strain and display blooming on OLED screens.
- Surfaces: elevate by increasing lightness two to five percent above the background, not by adding white overlays.
- Accents: reduce saturation by ten to fifteen percent in dark mode to prevent glowing artifacts.
- Text: pure white is too harsh. Use ninety to ninety-five percent lightness instead.
- Mobile adaptation: respect system dark mode preferences. Transition between modes should be smooth and respect reduced-motion preferences.

## Spacing & Layout Tokens

Strict token system. Arbitrary values are forbidden.

| Token | Value | Usage |
|-------|-------|-------|
| space-0 | 0 pixels | Reset |
| space-1 | 4 pixels | Tight internal padding, icon gaps |
| space-2 | 8 pixels | Component internal padding, tight gaps |
| space-3 | 16 pixels | Standard component padding, list gaps |
| space-4 | 24 pixels | Card padding, section internal spacing |
| space-5 | 32 pixels | Component group spacing |
| space-6 | 48 pixels | Section internal spacing |
| space-7 | 64 pixels | Between related sections |
| space-8 | 96 pixels | Between major sections |
| space-9 | 128 pixels | Page-level section breaks |
| space-10 | 192 pixels | Hero section margins |

- Component internal padding: space-3 to space-4
- Between components: space-4 to space-6
- Between sections: space-8 to space-9
- Page margins: space-6 on mobile, space-8 on desktop
- Mobile adaptation: reduce page margins and section spacing by one to two token levels. Never reduce component internal padding below space-3 to maintain touch target separation.

## Component Design

### Cards
- Elevation: either a one-pixel border in a neutral color OR a subtle shadow (zero offset, one pixel blur, three pixel spread, ten percent opacity). Never both simultaneously.
- Border radius: eight pixels for content cards, four pixels for data tables, sixteen pixels for modals and dialogs.
- Internal padding: space-4 (twenty-four pixels).
- Mobile adaptation: use full-bleed cards on mobile (zero side margins) with space-3 internal padding to maximize content area.

### Buttons
- Primary: filled with the accent color, high contrast text.
- Secondary: outlined with a one-pixel border, transparent background.
- Tertiary: text-only with an underline on hover or focus.
- Minimum touch target: forty-four by forty-four pixels. On desktop, the visual button can be smaller if the hit area extends to forty-four pixels.
- Border radius: six pixels for standard buttons, four pixels for dense data interfaces, fully rounded only for pills and tags.
- Mobile adaptation: increase button height to forty-eight pixels on mobile for easier thumb reach. Stack buttons vertically with space-3 between them rather than horizontal grouping.

### Forms
- Labels positioned above the input field, left-aligned. Floating labels are acceptable only if the implementation preserves accessibility and does not reduce click target size.
- Error states: red border plus descriptive text below the field. Never rely on color alone to indicate errors.
- Focus ring: two-pixel offset, primary color, solid outline. No box-shadow glow that bleeds into adjacent elements.
- Input height: forty-four pixels minimum on mobile.
- Mobile adaptation: increase tap targets, use native input types (tel, email, number) to trigger appropriate keyboards, and ensure dropdowns open native pickers on touch devices.

### Tables & Data Grids
- Header row: distinct background or bottom border, semibold text.
- Row dividers: one-pixel lines, not zebra striping (which reduces scannability).
- Row height: minimum forty-eight pixels for touch compatibility.
- Horizontal scroll: acceptable on mobile if the first column is pinned and a scroll indicator is visible.
- Mobile adaptation: consider card-based layouts for tabular data on mobile, or horizontal scroll with pinned first column.

## Motion & Animation

### Principles
- Purposeful: every animation must guide attention, provide feedback, or reveal spatial relationships.
- Subtle: two hundred to three hundred milliseconds duration for most transitions. Ease-out curves for entrances, ease-in-out for continuous motion.
- Respectful: all animations must have a reduced-motion fallback using the prefers-reduced-motion media query. In reduced mode, use instant state changes or opacity fades only.

### Patterns
- Entrance: opacity transition from zero to one combined with a small vertical translation (eight to sixteen pixels). Duration two hundred fifty milliseconds.
- Loading: skeleton screens that mimic the final layout structure, not generic spinners. Skeletons reduce perceived wait time.
- Feedback: subtle scale reduction (ninety-eight percent) on button press. Immediate response, under one hundred milliseconds.
- Page transitions: opacity crossfade only. Horizontal sliding is disorienting and can trigger vestibular disorders.
- Stagger: when multiple elements enter, stagger by fifty to one hundred milliseconds per item. Maximum stagger delay of four hundred milliseconds total.
- Mobile adaptation: reduce motion distances by fifty percent on mobile. Shorter travel distances feel more natural on small screens. Disable parallax entirely on mobile for performance and accessibility.

## Responsive Design Strategy

### Breakpoints
| Name | Width Range | Layout Strategy |
|------|-------------|----------------|
| Mobile Portrait | under 640 pixels | Single column, stacked, full-bleed sections, thumb-friendly targets |
| Mobile Landscape | 640 to 768 pixels | Two-column where appropriate, increased margins |
| Tablet | 768 to 1024 pixels | Two to three columns, sidebar possible, hover states active |
| Desktop | 1024 to 1440 pixels | Full multi-column layout, max-width containers, hover interactions |
| Wide Desktop | over 1440 pixels | Centered content with increased whitespace, possibly side panels |

### Fluid Typography
Use clamp functions to scale typography smoothly between breakpoints rather than jumping at arbitrary widths. Minimum size ensures readability, maximum size prevents absurd scaling.

### Touch vs. Pointer
- Touch devices: minimum forty-four pixel targets, no hover-dependent interactions, swipe gestures where appropriate.
- Pointer devices: hover states, right-click context menus, drag-and-drop, precise selection.
- Hybrid devices (tablets with keyboards, laptops with touchscreens): support both paradigms simultaneously.

### Image Handling
- Art direction: serve different image crops for mobile versus desktop using the picture element. A wide hero image becomes a square or portrait crop on mobile.
- Resolution: serve higher resolution images for high-density displays (two times or three times pixel density).
- Format: WebP with JPEG fallback. AVIF for next-generation support.
- Lazy loading: load images only when they approach the viewport. Exclude above-the-fold hero images from lazy loading.

### Navigation Patterns
- Desktop: horizontal top bar, dropdown menus, mega-menus for complex hierarchies.
- Mobile: hamburger menu with slide-out drawer, bottom tab bar for primary actions, accordion submenus.
- Tablet: hybrid approach. Consider a collapsible sidebar or a top bar with a condensed menu.

## Asset Guidelines
- Icons: monochrome, one point five pixel stroke weight, twenty-four by twenty-four pixel viewbox. Consistent corner radius across the icon set.
- Images: provide descriptive alternative text for all informative images. Decorative images must have empty alt attributes.
- Video: autoplay only if muted. Provide captions and transcripts. Never autoplay with sound.
- Audio: provide visual alternatives or transcripts.
