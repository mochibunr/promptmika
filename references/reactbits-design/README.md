# ReactBits Design Skill

A universal AI skill that provides 135+ production-ready React component templates across 4 categories. Works with any AI agent tool including Claude Code, MiMoCode, OpenCode, Codex, Antigravity, Cursor, and Windsurf.

## What's Inside

| Category | Templates | Description |
|----------|-----------|-------------|
| Animations | 30 | Hover effects, cursor tracking, click interactions, scroll reveals |
| Backgrounds | 45 | Hero sections, ambient visuals, page backgrounds, loading screens |
| Components | 37 | Navigation, cards, galleries, sliders, menus, widgets |
| Text-Animations | 23 | Headlines, hero text, feature callouts, dynamic typography |

**Total: 135 templates**

## Installation

### MiMoCode
```bash
# Copy to your project's skills directory
cp -r reactbits-design .mimocode/skills/
```

### Claude Code
```bash
# Copy to your project's skills directory
cp -r reactbits-design .claude/skills/
```

### OpenCode
```bash
# Copy to your project's skills directory
cp -r reactbits-design .opencode/skills/
```

### Codex
```bash
# Copy to your project's skills directory
cp -r reactbits-design .codex/skills/
```

### Other Tools
Check your AI tool's documentation for the skills directory location, then copy the `reactbits-design` folder there.

## How It Works

When you ask your AI to add UI components, animations, or visual effects, the skill:

1. **Reads ALL templates** in each category (you can watch it work)
2. **Understands what each template does** — not just filenames
3. **Selects the best fit** for your project context
4. **Confirms with you** before integrating anything
5. **Integrates only after approval**

### Selection Options

For each category, the AI can choose:
- **MULTIPLE** — 2+ templates that enhance the project
- **SINGLE** — exactly one best-fit template  
- **NONE** — no templates match (e.g., decorative animations don't fit a data dashboard)

### Example Interaction

```
You: "Add some visual effects to my landing page"

AI: ## Template Selection for Landing Page

### Animations: SINGLE
- **Magnet**: Interactive hover effect for CTA buttons
  - Dependencies: none
  - Used in: Hero section CTA

### Backgrounds: SINGLE  
- **Aurora**: Animated gradient background
  - Dependencies: ogl
  - Used in: Hero section background

### Components: NONE
- No components needed — existing navigation works well

### Text-Animations: SINGLE
- **SplitText**: Animated headline reveal
  - Dependencies: gsap, @gsap/react
  - Used in: Hero headline

Approve these selections?
```

## Template Structure

Each template includes:
- Component name and description
- Dependencies (if any)
- Usage example with code
- Props table with all options
- Full component source code
- CSS styles (if needed)
- Integration instructions

## Validating Installation

Run the list-templates script to verify all templates are available:

```bash
python scripts/list-templates.py .mimocode/skills/reactbits-design
```

Expected output: 135 templates across 4 categories.

## License

MIT License - use freely in any project.
