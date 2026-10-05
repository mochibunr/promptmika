# ReactBits Template Summary

Quick reference for all 135 templates. Read this first, then dive into specific templates.

## Brand Style Reference

For real-world design inspiration, see `Styles/` folder with 52 brand design systems:

| Theme | Brands |
|-------|--------|
| **Light** | Airbnb, Apple, Calendly, Cal.com, ChatGPT, Mercury, Notion, Resend, Superhuman |
| **Dark** | Anthropic, ElevenLabs, Linear, Raycast, zkPass, Dimension, Factory |
| **Creative** | Active-Theory, Vivid+Co, Superr, Monopo-Saigon |

**How to use brand styles:**
1. Find a brand that matches the project's tone
2. Read `Styles/[Brand]/DESIGN.md` for tokens and patterns
3. Use as taste layer for DESIGN.md (Move 0)
4. Reference in Decision Trace for design choices

---

## Design Blueprint

See SKILL.md PART-1.

## CRITICAL RULE: BLUEPRINT → RESEARCH → READ → SELECT

---

## Animations (30)

Interactive effects, cursor behaviors, hover states, and motion design.

| Template | What It Does | Dependencies | Best For |
|----------|--------------|--------------|----------|
| Animated-Contect | Content reveal animation on scroll/interaction | gsap | Section reveals, content loading |
| Antigravity | Floating elements that defy gravity | three, @react-three/fiber | Hero sections, creative displays |
| Blob-Cursor | Cursor trails a morphing blob shape | gsap | Creative portfolios, playful UIs |
| Click-Spark | Spark/particle burst on click | none | Interactive buttons, gamification |
| Crosshair | Custom crosshair cursor跟随鼠标 | gsap | Gaming sites, precision tools |
| Cubes | 3D cube rotation/transition effect | gsap | Product showcases, galleries |
| Electric-Border | Electric/lightning border animation | none | Tech brands, gaming, edgy UIs |
| Fade-Content | Smooth fade-in/out content transitions | none | Page transitions, lazy loading |
| Ghost-Cursor | Cursor leaves a ghost trail | three | Creative sites, interactive demos |
| Glare-Hover | Glare/light sweep on hover | none | Product cards, premium feel |
| Gradual-Blur | Progressive blur effect on scroll | mathjs | Hero sections, content focus |
| Image-Trail | Cursor drags images in a trail | gsap | Portfolios, creative galleries |
| Laser-Flow | Flowing laser/line animation | three | Tech brands, futuristic UIs |
| Logo-Loop | Infinite logo carousel | none | Partner sections, brand displays |
| Magic-Rings | Concentric rings that pulse/react | none | Loading states, decorative |
| Magnet-Lines | Lines that attract to cursor | none | Interactive backgrounds |
| Magnet | Elements pull toward cursor | none | CTAs, interactive buttons |
| Meta-Balls | Metaball/blob merging effect | ogl | Creative backgrounds, organic feel |
| Metallic-Paint | Metallic paint stroke reveal | none | Luxury brands, artistic reveals |
| Noise | Animated noise/grain texture | none | Texture overlays, retro feel |
| Orbit-Images | Images orbit around a center | motion | Team sections, galleries |
| Pixel-Trail | Cursor leaves pixelated trail | three, @react-three/fiber, @react-three/drei | Retro/gaming, nostalgic UIs |
| Pixel-Transition | Pixelated page/screen transition | gsap | Scene changes, retro transitions |
| Ribbons | Flowing ribbon animation | ogl | Decorative, celebratory UIs |
| Shape-Blur | Shapes blur and sharpen | three | Abstract backgrounds |
| Splash-Cursor | Splash/water effect on cursor | none | Creative, playful interfaces |
| Star-Border | Star-shaped border animation | none | Awards, featured content |
| Sticker-Peel | Sticker peel/reveal effect | none | Playful UIs, product reveals |
| Strands | Flowing strand/thread animation | ogl | Abstract backgrounds, organic feel |
| Target-Cursor | Custom target/crosshair cursor | gsap | Gaming, precision interfaces |

---

## Backgrounds (45)

Full-screen ambient visuals, particles, gradients, and atmospheric effects.

| Template | What It Does | Dependencies | Best For |
|----------|--------------|--------------|----------|
| Aurora | Northern lights aurora effect | ogl | Hero sections, immersive backgrounds |
| Balatro | Card game inspired visual | ogl | Gaming, playful themes |
| Ballpit | Bouncing balls physics sim | three | Playful landing pages |
| Beams | Radiating light beams | three, @react-three/fiber, @react-three/drei | Dramatic heroes, announcements |
| Color-Bends | Color bending/refracting effect | three | Creative, artistic sites |
| Dark-Veil | Dark overlay with subtle movement | ogl | Dark themes, focus on content |
| Dither | Dithered pixel noise background | three, postprocessing, @react-three/fiber, @react-three/postprocessing | Retro/lo-fi aesthetics |
| Dot-Field | Animated dot field pattern | none | Tech, minimal backgrounds |
| Dot-Grid | Grid of animated dots | gsap | Technical, structured layouts |
| Evil-Eye | hypnotic eye-like animation | ogl | Creative, edgy projects |
| Faulty-Terminal | Glitching terminal/CRT effect | ogl | Hacking themes, retro tech |
| Ferrofluid | Ferrofluid magnetic simulation | gsap | Science, experimental UIs |
| Floating-Lines | Lines floating in space | three | Minimal, abstract backgrounds |
| Galaxy | Starfield/galaxy animation | ogl | Space themes, immersive heroes |
| Gradient-Blinds | Blinds opening to gradient | ogl | Reveals, page transitions |
| Grainient | Grain + gradient texture | ogl | Premium, editorial feel |
| Grid-Distortion | Warping/distorting grid | three | Creative, dynamic backgrounds |
| Grid-Motion | Moving grid pattern | gsap | Tech, geometric themes |
| Grid-Scan | Scanning line over grid | three, face-api.js | Sci-fi, scanning/security themes |
| Hyperspeed | Warp speed/hyperspace effect | three, postprocessing | Speed, futuristic themes |
| Iridescence | Rainbow oil-slick effect | ogl | Creative, colorful brands |
| Letter-Glitch | Glitching text characters | none | Tech, gaming, edgy UIs |
| Light-Pillar | Vertical light pillar | three | Dramatic, ethereal backgrounds |
| Light-Rays | Volumetric light rays | ogl | Cinematic, dramatic heroes |
| Lightfall | Cascading light effect | ogl | Elegant, premium backgrounds |
| Lightning | Lightning bolt animation | none | Energy, power, gaming |
| Line-Waves | Wave pattern made of lines | ogl | Ocean, music, flowing themes |
| Liquid-Chrome | Liquid metal/chrome effect | ogl | Luxury, futuristic brands |
| Liquid-Ether | Ethereal liquid animation | three | Dreamy, abstract backgrounds |
| Orb | Floating orb/sphere | ogl | Minimal, focused backgrounds |
| Particles | General particle system | ogl | Any atmospheric background |
| Pixel-Blast | Pixel explosion effect | three, postprocessing | Gaming, retro themes |
| Pixel-Snow | Falling pixel snow | three | Winter themes, retro |
| Plasma-Wave | Plasma wave animation | ogl | Sci-fi, energy themes |
| Plasma | Plasma color effect | ogl | Abstract, colorful backgrounds |
| Prism | Light prism/refraction | ogl | Creative, rainbow themes |
| Prismatic-Burst | Burst of prismatic colors | ogl | Celebratory, dynamic heroes |
| Radar | Radar sweep animation | ogl | Tech, military, tracking themes |
| Ripple-Grid | Grid with ripple effects | ogl | Interactive, water themes |
| Shape-Grid | Geometric shape grid | none | Structured, geometric designs |
| Side-Rays | Light rays from sides | ogl | Dramatic, stage-like backgrounds |
| Silk | Silk/fabric flowing effect | none | Luxury, fashion, elegant |
| Soft-Aurora | Gentle aurora effect | ogl | Calm, nature themes |
| Threads | Flowing thread animation | ogl | Textile, craft, organic themes |
| Waves | Ocean/wave animation | none | Nature, calm, fluid themes |

---

## Components (37)

UI elements — navigation, cards, galleries, sliders, menus, and widgets.

| Template | What It Does | Dependencies | Best For |
|----------|--------------|--------------|----------|
| Animated-List | List items animate in sequence | motion | Features, timelines, menus |
| Border-Glow | Glowing border effect on cards | none | Featured content, CTAs |
| Bounce-Cards | Cards with bounce animation | gsap | Playful galleries, features |
| Bubble-Menu | Bubble-shaped menu items | gsap | Creative navigation |
| Card-Nav | Navigation with card expansion | gsap | Landing pages, marketing |
| Card-Swap | Cards swap/flip between states | gsap | Before/after, comparisons |
| Carousel | Image/content carousel | motion | Galleries, testimonials |
| Chrome-Grid | Chrome/metal grid layout | gsap | Tech, industrial themes |
| Circular-Gallery | Circular image gallery | ogl | Portfolios, team sections |
| Counter | Animated number counter | motion | Stats, metrics, pricing |
| Decay-Card | Card with decay/dissolve effect | gsap | Creative, destructive themes |
| Dock | macOS-style dock navigation | motion | App-like interfaces |
| Dome-Gallery | 3D dome image gallery | @use-gesture/react | Immersive portfolios |
| Elastic-Slider | Slider with elastic physics | motion | Interactive, playful UIs |
| Flowing-Menu | Menu with flowing animation | gsap | Creative navigation |
| Fluid-Glass | Glassmorphism with fluid effect | three, @react-three/fiber, @react-three/drei, maath | Modern, premium UIs |
| Flying-Posters | Posters flying in 3D space | ogl | Portfolios, showcases |
| Folder | Folder open/close animation | none | File managers, organization |
| Glass-Icons | Glassmorphic icon buttons | none | Modern, clean navigation |
| Glass-Surface | Glass surface/card effect | none | Overlays, modal backgrounds |
| Gooey-Nav | Gooey/blobby navigation | none | Playful, creative sites |
| Infinite-Menu | Infinite scrolling menu | gl-matrix | Large navigation sets |
| Lanyard | ID badge/lanyard component | three, meshline, @react-three/fiber, @react-three/drei, @react-three/rapier | Team sections, profiles |
| Line-Sidebar | Minimal line-based sidebar | none | Dashboard, admin panels |
| Magic-Bento | Bento grid with magic effects | gsap | Dashboard, feature grids |
| Masonry | Pinterest-style masonry layout | gsap | Galleries, image grids |
| Model-Viewer | 3D model viewer | three, @react-three/fiber, @react-three/drei | Product showcases, 3D content |
| Pill-Nav | Pill-shaped navigation tabs | gsap | Clean, modern navigation |
| Pixel-Card | Pixelated card effect | none | Retro, gaming themes |
| Profile-Card | User profile card | none | Team, social, dashboards |
| Reflective-Card | Card with reflection effect | lucide-react | Premium, product displays |
| Scroll-Stack | Cards stack on scroll | lenis | Long-form content, timelines |
| Spotlight-Card | Spotlight follows cursor on card | none | Interactive, dramatic reveals |
| Stack | Stacked cards/pages | motion | Portfolios, card decks |
| Staggered-Menu | Menu items stagger in | gsap | Navigation reveals |
| Stepper | Step-by-step progress indicator | motion | Wizards, onboarding |
| Tilted-Card | 3D tilt effect on hover | motion | Interactive product cards |

---

## Text-Animations (23)

Typography effects — reveals, splits, scrambles, gradients, and transitions.

| Template | What It Does | Dependencies | Best For |
|----------|--------------|--------------|----------|
| ASCII-Text | Text renders as ASCII art | three | Retro, hacker, creative |
| Blur-Text | Text blurs in/out | motion | Subtle reveals, focus effects |
| Circural-Text | Text arranged in circle | motion | Logos, badges, creative |
| Count-Up | Numbers count up to value | motion | Stats, metrics, pricing |
| Curved-Loop | Text follows curved path | none | Logos, decorative text |
| Decrypted-Text | Text decrypts character by character | motion | Spy themes, reveals |
| Falling-Text | Characters fall into place | matter-js | Playful reveals, games |
| Fuzzy-Text | Text fuzzy/blurs then sharpens | none | Dream sequences, reveals |
| Glitch-Text | Glitching/distorted text | none | Tech, gaming, edgy brands |
| Gradient-Text | Animated gradient on text | none | Modern, colorful headlines |
| Rotating-Text | Words rotate/cycle through | motion | Dynamic headlines, CTAs |
| Scrambled-Text | Text scrambles then resolves | gsap | Tech, decoding themes |
| Scroll-Float | Text floats up on scroll | gsap | Hero reveals, sections |
| Scroll-Reveal | Text reveals on scroll | gsap | Section headers, content |
| Scroll-Velocity | Text speed matches scroll | motion | Dynamic, parallax effects |
| Shiny-Text | Shimmer/shine effect on text | motion | Premium, luxury brands |
| Shuffle | Characters shuffle then settle | gsap, @gsap/react | Playful reveals |
| Split-Text | Text splits into characters/words | gsap, @gsap/react | Hero headlines, emphasis |
| Text-Cursor | Blinking cursor types text | motion | Typewriter effects, terminals |
| Text-Pressure | Text responds to pressure/cursor | none | Interactive, playful UIs |
| Text-Type | Typewriter auto-typing effect | gsap | Intros, loading messages |
| True-Focus | Focus ring follows text | motion | Accessibility, emphasis |
| Variable-Proximity | Text size changes with proximity | motion | Dynamic, interactive text |

---

## Quick Selection Guide

### Website Types

| Project Type | Background | Animations | Components | Text |
|--------------|------------|------------|------------|------|
| **Landing Page** | Aurora | Split-Text (hero), Magnet (CTA) | Card-Nav | Gradient-Text |
| **Dashboard** | Dot-Grid | Fade-Content | Counter, Line-Sidebar, Scroll-Stack | Scroll-Reveal |
| **Portfolio** | Particles | Image-Trail | Masonry, Spotlight-Card | Glitch-Text |
| **SaaS** | Soft-Aurora | Fade-Content, Glare-Hover | Bounce-Cards, Counter | Gradient-Text |
| **Gaming** | Hyperspeed | Splash-Cursor, Pixel-Transition | Pixel-Card | Glitch-Text |
| **Creative/Agency** | Liquid-Ether | Blob-Cursor | Flying-Posters, Dome-Gallery | Scrambled-Text |

### Industry Types

| Project Type | Background | Animations | Components | Text |
|--------------|------------|------------|------------|------|
| **Restaurant** | Soft-Aurora | Fade-Content, Noise | Card-Nav, Masonry | Split-Text |
| **Real Estate** | Grainient | Glare-Hover | Spotlight-Card, Carousel | Gradient-Text |
| **Medical/Health** | Dot-Grid | Fade-Content | Profile-Card, Stepper | Scroll-Reveal |
| **Education** | Particles | Scroll-Float | Bounce-Cards, Animated-List | Count-Up |
| **Nonprofit** | Waves | Fade-Content | Card-Nav, Masonry | Split-Text |
| **Fashion/Luxury** | Silk | Metallic-Paint | Flying-Posters | Shiny-Text |
| **Music/Band** | Plasma | Blob-Cursor | Circular-Gallery | Glitch-Text |
| **Tech Startup** | Dot-Grid | Crosshair | Magic-Bento | Gradient-Text |
| **Photography** | Particles | Image-Trail | Masonry, Dome-Gallery | Blur-Text |
| **Event/Conference** | Beams | Click-Spark | Card-Nav, Counter | Scrambled-Text |
| **Coffee Shop** | Grainient | Noise | Card-Nav, Masonry | Split-Text |
| **Gym/Fitness** | Hyperspeed | Splash-Cursor | Bounce-Cards, Counter | Glitch-Text |
| **Architecture** | Grid-Distortion | Fade-Content | Masonry, Model-Viewer | Scroll-Reveal |
| **Legal/Corporate** | Dot-Grid | Fade-Content | Line-Sidebar, Profile-Card | Scroll-Reveal |

### Quick Recipes (copy-paste ready)

**Restaurant Website:**
```
Soft-Aurora (bg) + Fade-Content (anim) + Card-Nav (nav) + Masonry (gallery) + Split-Text (hero)
Dependencies: ogl, gsap, @gsap/react
```

**SaaS Landing Page:**
```
Dot-Grid (bg) + Glare-Hover (anim) + Bounce-Cards (features) + Counter (stats) + Gradient-Text (hero)
Dependencies: gsap, motion
```

**Portfolio:**
```
Particles (bg) + Image-Trail (anim) + Masonry (gallery) + Spotlight-Card (projects) + Glitch-Text (name)
Dependencies: ogl, gsap, none
```

**Gaming Site:**
```
Hyperspeed (bg) + Splash-Cursor (anim) + Pixel-Card (UI) + Glitch-Text (title)
Dependencies: three, postprocessing, none
```

**Fashion/Luxury:**
```
Silk (bg) + Metallic-Paint (anim) + Flying-Posters (showcase) + Shiny-Text (brand)
Dependencies: none, none, ogl, motion
```

---

## Dependency Groups

Quick lookup for common dependency stacks:

| Stack | Templates Using It |
|-------|-------------------|
| **none** | Click-Spark, Electric-Border, Fade-Content, Glare-Hover, Logo-Loop, Magic-Rings, Magnet-Lines, Magnet, Metallic-Paint, Noise, Splash-Cursor, Star-Border, Sticker-Peel, Dot-Field, Letter-Glitch, Lightning, Shape-Grid, Silk, Waves, Border-Glow, Folder, Glass-Icons, Glass-Surface, Gooey-Nav, Line-Sidebar, Pixel-Card, Profile-Card, Spotlight-Card, Curved-Loop, Fuzzy-Text, Glitch-Text, Gradient-Text, Text-Pressure |
| **gsap** | Animated-Contect, Blob-Cursor, Crosshair, Cubes, Image-Trail, Pixel-Transition, Target-Cursor, Dot-Grid, Ferrofluid, Grid-Motion, Bounce-Cards, Bubble-Menu, Card-Nav, Card-Swap, Chrome-Grid, Decay-Card, Flowing-Menu, Magic-Bento, Masonry, Pill-Nav, Staggered-Menu, Scrambled-Text, Scroll-Float, Scroll-Reveal, Text-Type |
| **gsap, @gsap/react** | Split-Text, Shuffle |
| **ogl** | Meta-Balls, Ribbons, Strands, Aurora, Balatro, Dark-Veil, Evil-Eye, Faulty-Terminal, Galaxy, Gradient-Blinds, Grainient, Iridescence, Light-Rays, Lightfall, Line-Waves, Liquid-Chrome, Orb, Particles, Plasma, Plasma-Wave, Prism, Prismatic-Burst, Radar, Ripple-Grid, Side-Rays, Soft-Aurora, Threads, Circular-Gallery, Flying-Posters |
| **three** | Ghost-Cursor, Laser-Flow, Shape-Blur, Ballpit, Color-Bends, Floating-Lines, Grid-Distortion, Liquid-Ether, Light-Pillar, Pixel-Snow, ASCII-Text |
| **three, @react-three/fiber** | Antigravity |
| **three, @react-three/fiber, @react-three/drei** | Pixel-Trail, Beams, Fluid-Glass, Model-Viewer |
| **three, @react-three/fiber, @react-three/drei, maath** | Fluid-Glass |
| **three, meshline, @react-three/fiber, @react-three/drei, @react-three/rapier** | Lanyard |
| **three, postprocessing** | Hyperspeed, Pixel-Blast |
| **three, postprocessing, @react-three/fiber, @react-three/postprocessing** | Dither |
| **three, face-api.js** | Grid-Scan |
| **motion** | Orbit-Images, Animated-List, Carousel, Counter, Dock, Stack, Stepper, Tilted-Card, Elastic-Slider, Blur-Text, Circural-Text, Count-Up, Decrypted-Text, Rotating-Text, Scroll-Velocity, Shiny-Text, Text-Cursor, True-Focus, Variable-Proximity |
| **mathjs** | Gradual-Blur |
| **matter-js** | Falling-Text |
| **@use-gesture/react** | Dome-Gallery |
| **gl-matrix** | Infinite-Menu |
| **lenis** | Scroll-Stack |
| **lucide-react** | Reflective-Card |
