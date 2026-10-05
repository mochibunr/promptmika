# ReactBits Design Source Bridge

Source of truth: https://github.com/mochibunr/Skills/tree/main/reactbits-design

PromptMika treats ReactBits as an optional, on-demand frontend reference library. It supplements the project's own design language; it does not replace it.

## Priority

Apply references in this order:

1. The user's current brief and explicit constraints.
2. The existing project's `design://DESIGN.md`, component patterns, and architecture.
3. Official design systems or platform guidance when the brief targets one.
4. ReactBits as a curated implementation/reference library.

ReactBits is never a reason to override the existing product's visual identity, accessibility requirements, performance budget, or established component behavior.

## Selection workflow

- Load this bridge, `SKILL.md`, and `TEMPLATES.md` before selecting ReactBits templates.
- Use `TEMPLATES.md` for discovery. Never infer a template's API or behavior from its filename.
- Shortlist the smallest useful set: MULTIPLE, SINGLE, or NONE per category.
- Before deciding, fetch and read the complete upstream template:
  `https://raw.githubusercontent.com/mochibunr/Skills/main/reactbits-design/references/<Category>/<Template>.md`
- Verify the full source, props, dependencies, React compatibility, integration instructions, responsive behavior, accessibility, reduced-motion behavior, and performance implications.
- Customize a selected template to fit the project instead of dropping it in unchanged.
- Use one coherent motion language. Do not stack unrelated effects merely because the library contains them.
- If a template conflicts with the project design language or technical constraints, select another one or use a custom implementation.
- Use Decision Trace for any non-obvious choice or deliberate exception.

## Retrieval

Prefer PromptMika's `web_fetch` for raw GitHub text. Use `browser_scrape` only when ordinary fetching is insufficient.

Do not vendor or clone the full upstream ReactBits repository at runtime. The local PromptMika copy intentionally contains the operating contract and catalog; selected implementation templates are fetched on demand so the MCP reference footprint stays small and the source remains current.

If upstream retrieval fails, say so and use the closest suitable local PromptMika reference or a custom implementation rather than guessing the template contents.

## Quality gate

Every ReactBits-powered frontend must still pass PromptMika's normal checks:

- 44px minimum touch targets for interactive controls.
- Keyboard/focus-visible states and WCAG AA contrast.
- `prefers-reduced-motion` handling for non-trivial motion.
- Mobile-first layout with no horizontal overflow.
- No unnecessary client-side re-renders for continuous pointer/scroll motion.
- No generic effect soup, fake screenshots, decorative motion without a clear purpose, or copied visual identity that conflicts with the project.

## Upstream synchronization

The local `SKILL.md` and `TEMPLATES.md` are a snapshot of the upstream ReactBits reference used to teach PromptMika the workflow and catalog. Re-fetch the upstream source when materially updating the integration rather than silently assuming the snapshot is current.
