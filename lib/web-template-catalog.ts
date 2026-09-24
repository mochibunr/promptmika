export type WebTemplateKind = "origin" | "frontend" | "fullstack" | "style";

export interface WebTemplateMeta {
  id: number;
  name: string;
  folder: string;
  kind: WebTemplateKind;
  description: string;
  liveDemo?: string;
}

export const WEB_TEMPLATE_CATALOG: WebTemplateMeta[] = [
  { id: 0, name: "Origin", folder: "0-origin", kind: "origin", description: "Base reference template from which the library derives." },
  { id: 1, name: "Cyber Rain", folder: "1-cyber-rain-frontend", kind: "frontend", description: "Cyberpunk immersive landing with neon aesthetics and rain effects.", liveDemo: "https://cyber-rain-ten.vercel.app/" },
  { id: 2, name: "Color Room", folder: "2-color-room-frontend", kind: "frontend", description: "Immersive gallery-like frontend with editorial typography and spatial scenes.", liveDemo: "https://colorroom.vercel.app/" },
  { id: 3, name: "Flow Shader", folder: "3-flow-shader-frontend", kind: "frontend", description: "Generative art and creative-coding studio with shader-driven visuals.", liveDemo: "https://flowshader.vercel.app/" },
  { id: 4, name: "Sunset Trip", folder: "4-sunset-trip-frontend", kind: "frontend", description: "Luxury slow-travel experience for curated sunset journeys.", liveDemo: "https://sunsettrip.vercel.app/" },
  { id: 5, name: "Dream Run", folder: "5-dream-run-frontend", kind: "frontend", description: "High-energy athletic brand showcase with dynamic motion.", liveDemo: "https://dreamrun.vercel.app/" },
  { id: 6, name: "ASCII Moon", folder: "6-ascii-moon-frontend", kind: "frontend", description: "Retro terminal-inspired portfolio with ASCII-art aesthetics.", liveDemo: "https://asciimoon.vercel.app/" },
  { id: 7, name: "Vortex Gallery", folder: "7-vortex-gallery-frontend", kind: "frontend", description: "Immersive 3D gallery experience with spatial navigation.", liveDemo: "https://vortexgalery.vercel.app/" },
  { id: 8, name: "Liquid Paint", folder: "8-liquit-paint-frontend", kind: "frontend", description: "Fluid organic visuals with paint-like interactions and blending.", liveDemo: "https://liquid-paint.vercel.app/" },
  { id: 9, name: "Moon Note", folder: "9-moon-note-fullstack", kind: "fullstack", description: "Note-taking application with Markdown support and cloud sync." },
  { id: 10, name: "Calm Space", folder: "10-calm-space-fullstack", kind: "fullstack", description: "Mindfulness and meditation app with session tracking." },
  { id: 11, name: "My Blog", folder: "11-my-blog-fullstack", kind: "fullstack", description: "Personal blogging platform with CMS-like post management." },
  { id: 12, name: "Seaside Stay", folder: "12-seaside-stay-fullstack", kind: "fullstack", description: "Beach resort booking system with availability calendar." },
  { id: 13, name: "Airlens", folder: "airlens-style", kind: "style", description: "Clean aviation-inspired direction with light blues and rounded UI." },
  { id: 14, name: "Exhibition", folder: "exhibition-style", kind: "style", description: "Museum-grade editorial layout with dramatic whitespace and cinematic interaction." },
  { id: 15, name: "Exvia", folder: "exvia-style", kind: "style", description: "Modern tech brand direction with bold gradients and geometric patterns." },
  { id: 16, name: "Forest", folder: "forest-style", kind: "style", description: "Nature-inspired earthy tones with organic textures." },
  { id: 17, name: "Kaleo", folder: "kaleo-style", kind: "style", description: "Warm editorial direction with expressive typography, organic color, and cinematic rhythm." },
  { id: 18, name: "Lipstick", folder: "lipstick-style", kind: "style", description: "Bold feminine aesthetic with deep reds and elegant serif typography." },
  { id: 19, name: "Modo", folder: "modo-style", kind: "style", description: "Dark mode-first UI with neon accents and glass-like layering." },
  { id: 20, name: "Photographer", folder: "photographer-style", kind: "style", description: "Full-bleed imagery portfolio with minimal chrome." },
  { id: 21, name: "Playza", folder: "playza-style", kind: "style", description: "Gaming-inspired UI with vibrant saturated color and energetic interaction." },
  { id: 22, name: "Shibumi", folder: "shibumi-style", kind: "style", description: "Japanese wabi-sabi influenced minimalism with warm neutrals." },
  { id: 23, name: "Swiss Dada", folder: "swiss-dada-style", kind: "style", description: "Bauhaus grid meets surrealist typographic disruption." },
  { id: 24, name: "Villa", folder: "villa-style", kind: "style", description: "Mediterranean luxury with terracotta, olive, and stone textures." },
];
