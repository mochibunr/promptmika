---
version: 2.1.0
last_updated: 2026-06-09
related:
  - DESIGN_BIBLE.md (classical composition)
  - RESPONSIVE_DESIGN.md (breakpoints, touch targets)
  - horizontal-craft/anti-ai-slop.md (slop avoidance)
  - horizontal-craft/typography.md (typography craft)
  - iteration-workflow.md (Build-Test-Loop)
  - STATE_MANAGEMENT.md (frontend state patterns)
  - TESTING_PATTERNS.md (frontend testing)
---

# Frontend Prompts — Web, Interface, and Visual Design

## Domain-Specific Context to Inject
When refining a frontend or web design prompt, automatically include context that users forget to mention.

### Responsive Behavior
- Specify breakpoint behavior: what changes at mobile portrait, mobile landscape, tablet, and desktop.
- Specify touch versus pointer interactions and how hover states degrade on touch devices.
- Specify font scaling strategy: fixed breakpoints, fluid clamp values, or container queries.
- Specify image behavior: art direction crops, resolution switching, lazy loading thresholds.

### Accessibility Requirements
- Target compliance level: Web Content Accessibility Guidelines two point one level A, double A, or triple A.
- Keyboard navigation requirements: all interactive elements must be reachable and operable without a mouse.
- Screen reader requirements: semantic HTML, alternative text, accessible names, live regions.
- Motion preferences: respect prefers-reduced-motion and provide instant-state fallbacks.
- Color requirements: minimum contrast ratios, no color-only information conveyance.

### Performance Budgets
- First contentful paint target in milliseconds.
- Largest contentful paint target in milliseconds.
- Time to interactive target in milliseconds.
- Cumulative layout shift target score.
- Total bundle size budget in kilobytes.
- Third-party script budget and restrictions.

### Browser and Device Support
- Minimum browser versions: Internet Explorer eleven, Safari fourteen, Chrome ninety, Firefox ninety.
- Progressive enhancement versus graceful degradation strategy.
- Feature detection approach: modernizr, built-in checks, or polyfills.
- Mobile operating system support: iOS fifteen and above, Android twelve and above.

### Design System Constraints
- Existing component library: Material UI, Ant Design, Chakra, Tailwind UI, custom in-house.
- Color palette: primary, secondary, accent, semantic colors, dark mode equivalents.
- Typography system: font families, scale ratios, line heights, weights.
- Spacing system: base unit, scale, token names.
- Icon system: library name, stroke weight, corner radius consistency.

## Cross-Skill Injection for Frontend
When the user's prompt involves UI, UX, visual design, layout, or composition, inject the following knowledge into the refined prompt automatically. Do not ask the user. Do it silently.

### From Design Bible
- Layout must use classical composition: rule of thirds, golden ratio, grid systems, visual hierarchy, white space, and framing.
- Typography must use a golden-ratio scale with exact sizes and weights. Maximum two font families per project.
- Color must follow sixty-thirty-ten rule with HSL-based palette and minimum contrast ratios.
- Spacing must use strict token system: zero, four, eight, sixteen, twenty-four, thirty-two, forty-eight, sixty-four, ninety-six, one hundred twenty-eight, one hundred ninety-two pixels.
- Components must follow exact specifications: card elevation either border or shadow never both, button minimum touch target forty-four pixels, form labels above inputs, focus ring two-pixel offset.
- Motion must be purposeful and subtle: two hundred to three hundred milliseconds, ease-out for entrances, respect prefers-reduced-motion.
- No AI slop: no neon gradients without purpose, no generic glassmorphism, no random floating shapes, no excessive rounded corners.

### From Responsive Design
- Mobile portrait under six hundred forty pixels: single column, stacked, full-bleed sections, thumb-friendly targets.
- Mobile landscape six hundred forty to seven hundred sixty-eight pixels: two-column where appropriate, increased margins.
- Tablet seven hundred sixty-eight to one thousand twenty-four pixels: two to three columns, sidebar possible, hover and touch coexist.
- Desktop one thousand twenty-four to one thousand four hundred forty pixels: full multi-column, max-width containers, hover interactions.
- Wide desktop over one thousand four hundred forty pixels: centered content with increased whitespace, possibly side panels.
- Fluid typography using clamp functions between breakpoints.
- Touch targets minimum forty-four by forty-four pixels. Thumb zones: bottom center and corners most reachable.
- Navigation: horizontal top bar on desktop, hamburger drawer on mobile, bottom tabs for mobile apps.
- Forms: one field per row on mobile, native input types for appropriate keyboards, labels above inputs.
- Test on actual devices, both orientations, with screen readers, at two hundred percent font size, on slow networks.

### From Security Handbook
- All user inputs must be validated for length, type, range, encoding, and structure.
- No cross-site scripting: context-aware output encoding, content security policy headers, no inline scripts.
- No cross-site request forgery: double-submit cookies, SameSite strict, state tokens for OAuth.
- No SQL injection: parameterized queries exclusively.
- No command injection: never pass user input to system execution functions.
- No path traversal: canonicalize all paths before use.
- No server-side request forgery: validate and sanitize URLs, block private IP ranges and metadata endpoints.
- No insecure deserialization: never deserialize untrusted data with native formats.
- Transport layer security minimum version one point three.
- Session tokens cryptographically random with two hundred fifty-six bits, HttpOnly Secure SameSite Strict cookies.
- Content security policy: script-src self, no unsafe-inline, no unsafe-eval.

### From Context Engine
- Track all design decisions, component names, color tokens, and spacing values across the conversation.
- Never forget constraints or decisions made earlier. Quote exact identifiers from previous messages.
- If user corrects a design choice, encode permanently. Never revert to previous error.
- Maintain mental state map: file names, architecture decisions, open issues, design tokens.
- Before answering, scan last ten exchanges. Search full history for references to earlier work.
- If uncertain about previous decision, ask clarification rather than guessing.

## Frontend Prompt Enhancement Patterns

### Pattern One: From Vague to Specific
User input: make a cool dashboard.
Refinement additions:
- Define the data domain: e-commerce analytics, server monitoring, financial trading.
- Define the user persona: executive summary viewer, operator on call, analyst drilling down.
- Define the primary action: identify anomalies, compare time periods, export reports.
- Define the visual hierarchy: what metric is most important and how secondary metrics relate.
- Define interactivity: real-time WebSocket updates, manual refresh, scheduled snapshots.
- Inject design system constraints and responsive behavior automatically.

### Pattern Two: From Feature List to Experience Flow
User input: I need a login page, a signup page, and a profile page.
Refinement additions:
- Map the user journey across all three pages as a continuous flow.
- Define error states and recovery paths for each step.
- Define empty states and loading states for each page.
- Define transitions between pages: animation, data persistence, state management.
- Define security considerations: password requirements, session handling, logout behavior.
- Inject accessibility requirements and responsive breakpoints automatically.

### Pattern Three: From Visual Request to Design System Contract
User input: make it look modern and clean.
Refinement additions:
- Translate subjective adjectives into objective design tokens.
- Modern means: minimal chrome, generous whitespace, subtle shadows, eight-pixel grid, classical composition.
- Clean means: high contrast text, consistent alignment, no decorative noise, purposeful animation only.
- Specify the exact hex codes or HSL values for the palette rather than leaving it to interpretation.
- Specify the exact font files and weights rather than generic sans-serif.
- Inject golden-ratio typography scale and spacing token system automatically.

### Pattern Four: From Component Request to Interaction Specification
User input: add a dropdown menu.
Refinement additions:
- Trigger behavior: click, hover, or focus.
- Keyboard interaction: arrow keys, escape, enter, tab order.
- Mobile behavior: bottom sheet, full-screen overlay, or native select.
- Multi-select or single-select. Searchable or static. Grouped or flat.
- Async loading: skeleton state, error state, retry behavior.
- Accessibility: aria-expanded, aria-activedescendant, focus trap, focus return.
- Security: sanitize selected values before submission, validate against allowlist.

## Anti-Patterns to Forbid in Frontend Prompts
- Do not use subjective adjectives without translation: modern, sleek, beautiful, intuitive, user-friendly.
- Do not omit responsive behavior. Desktop-only is not acceptable unless explicitly stated.
- Do not omit accessibility. It is not an optional add-on.
- Do not request animations without specifying purpose and reduced-motion fallback.
- Do not request third-party integrations without specifying fallback behavior if the service is down.
- Do not omit security considerations for any form, input, or data transmission.
