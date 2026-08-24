---
version: 2.1.0
last_updated: 2026-06-09
related:
  - DESIGN_BIBLE.md (layout systems)
  - FRONTEND_PROMPTS.md (responsive behavior injection)
  - horizontal-craft/accessibility.md (touch targets, screen readers)
---

# Responsive Design — Desktop & Mobile Compatibility

## Philosophy
Responsive design is not about making a desktop site fit on a phone. It is about designing a single system that serves the user's context, device capabilities, and environment. Every layout decision must answer: how does this work on a four-inch screen held in one hand, and on a thirty-two-inch monitor viewed from two feet away?

## Viewport & Device Categories

### Mobile Portrait (under 640 pixels)
- Primary input: thumb, one-handed.
- Reading distance: twelve to eighteen inches.
- Connection: often cellular, potentially metered or slow.
- Context: on-the-go, interrupted, partial attention.
- Design response: single column, full-bleed sections, large touch targets, minimal text, progressive disclosure.

### Mobile Landscape (640 to 768 pixels)
- Primary input: two thumbs, potentially resting on a surface.
- Reading distance: fourteen to twenty inches.
- Context: brief tasks, media consumption, gaming.
- Design response: two-column layouts possible, increased margins, side-by-side comparisons.

### Tablet (768 to 1024 pixels)
- Primary input: fingers, potentially with stylus or keyboard.
- Reading distance: sixteen to twenty-four inches.
- Context: couch browsing, light productivity, reading.
- Design response: two to three columns, collapsible sidebars, hover and touch coexist.

### Desktop (1024 to 1440 pixels)
- Primary input: mouse and keyboard, precise pointing.
- Reading distance: twenty to thirty inches.
- Context: focused work, multitasking, productivity.
- Design response: full multi-column, hover interactions, dense data, keyboard shortcuts.

### Wide Desktop (over 1440 pixels)
- Primary input: mouse and keyboard, potentially multiple monitors.
- Context: professional work, development, design, trading.
- Design response: centered content with generous whitespace, side panels, multi-pane layouts, data density.

## Layout Adaptation Strategies

### Reflow
Elements that sit side-by-side on desktop stack vertically on mobile. The order of stacking must match the visual and logical priority.
- Primary content reflows first.
- Secondary content (sidebars, related links) follows.
- Tertiary content (footer, legal, metadata) comes last.
- Never hide critical functionality behind a breakpoint. If it exists on desktop, it must be accessible on mobile, even if the interaction pattern changes.

### Resize
Images, videos, and containers scale proportionally within their containers. Maximum widths prevent excessive scaling on large screens.
- Images: max-width one hundred percent of container, height auto.
- Videos: maintain sixteen-by-nine or custom aspect ratio using padding-bottom percentage technique.
- Containers: max-width for readability (typically sixty to seventy-five characters for text blocks).

### Recompose
The layout structure changes between breakpoints. A three-column grid becomes a two-column grid, then a single column.
- Grid columns: twelve on desktop, six on tablet, four on mobile.
- Sidebar: collapses to a top bar or hamburger menu on mobile.
- Card grids: three columns to two columns to one column.
- Tables: transform to card-based layouts or horizontal scroll with pinned first column.

### Replace
Different assets or components are served for different contexts.
- Hero images: wide landscape crop on desktop, square or portrait crop on mobile.
- Navigation: horizontal menu on desktop, hamburger drawer on mobile, bottom tabs on mobile apps.
- Input methods: date picker dropdown on desktop, native date spinner on mobile.
- Video: high bitrate for desktop WiFi, lower bitrate for mobile cellular.

## Touch Target Guidelines

### Minimum Sizes
- Recommended touch target: forty-eight by forty-eight pixels.
- Absolute minimum: forty-four by forty-four pixels (iOS standard).
- Spacing between targets: minimum eight pixels to prevent accidental activation.
- Visual size can be smaller than the hit area if the touch target extends beyond the visual bounds.

### Thumb Zones
- One-handed mobile use: the bottom center and bottom corners are most reachable.
- Primary actions should sit in the bottom third of the screen.
- Destructive or infrequent actions can sit in the top corners (harder to reach, preventing accidental taps).
- Two-handed use: the center and sides are reachable, but the top center remains difficult.

## Typography Scaling

### Fluid Type
Use viewport-relative units combined with minimum and maximum constraints so text scales smoothly rather than jumping at breakpoints.
- Body text: scales from fifteen pixels on small screens to eighteen pixels on large screens.
- Headings: scale more aggressively. A heading one might range from thirty-two pixels to eighty-nine pixels.
- Line height: slightly increase on mobile (1.6 to 1.7) for readability, slightly decrease on desktop (1.5 to 1.6) for density.

### Legibility at Distance
- Mobile: text must be readable at twelve inches. Minimum body size: fifteen pixels.
- Desktop: text must be readable at twenty-four inches. Body size can be sixteen to eighteen pixels.
- Wide desktop: consider slightly larger body text (eighteen to twenty pixels) to match the increased viewing distance.

## Navigation Patterns by Device

### Desktop Navigation
- Horizontal top bar with dropdown menus for shallow hierarchies.
- Mega-menus for deep catalogs with images and descriptions.
- Sticky header that remains visible during scroll.
- Breadcrumbs for deep page hierarchies.
- Keyboard shortcuts for power users.

### Mobile Navigation
- Hamburger menu (three horizontal lines) or bottom sheet for primary navigation.
- Bottom tab bar for three to five primary destinations. More than five items reduces usability.
- Floating action button for the single most important action.
- Swipe gestures for back navigation, dismissing modals, or switching tabs.
- Pull-to-refresh for list and feed content.

### Tablet Navigation
- Collapsible sidebar that can be pinned open in landscape.
- Split-view for master-detail patterns (email list on left, message on right).
- Contextual menus that appear on long-press or right-click.
- Hybrid top bar with condensed icons and a hamburger for overflow.

## Form Adaptation

### Mobile Forms
- One field per row. Never side-by-side fields on mobile.
- Use native input types to trigger appropriate keyboards: tel for phone numbers, email for email addresses, number for numeric values, date for dates.
- Place labels above inputs, not to the left.
- Error messages appear below the field, not in a separate summary at the top.
- Step-by-step wizards for long forms. Show progress indicator.
- Autofill and autocomplete attributes for faster completion.

### Desktop Forms
- Side-by-side fields acceptable for related data (first name and last name, city and state).
- Inline validation with immediate feedback.
- Tooltips or helper text beside fields.
- Tab order must follow visual order logically.
- Keyboard navigation: Enter to advance, Escape to cancel, Tab and Shift-Tab to move.

## Performance by Context

### Mobile Performance
- Reduce image resolution and quality for cellular connections.
- Defer non-critical JavaScript.
- Minimize layout shifts by reserving space for dynamic content.
- Avoid heavy animations that drain battery.
- Respect data saver modes: load lower-resolution images, disable autoplay video.

### Desktop Performance
- Higher-resolution images and videos acceptable.
- More complex animations and transitions.
- Background processes and real-time updates.
- Larger data payloads for richer experiences.

## Testing Strategy
- Test on actual devices, not just browser emulation. Touch behavior, scroll physics, and performance differ.
- Test in both portrait and landscape orientations.
- Test with keyboard navigation on desktop.
- Test with screen readers on all breakpoints.
- Test with slow network throttling to ensure graceful degradation.
- Test with increased font sizes (two hundred percent) to ensure layouts do not break.
