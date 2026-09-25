# PromptMika

MCP server that serves curated knowledge packs to AI coding sessions. Load domain-specific references — frontend design, backend patterns, security, testing, systems engineering — on demand.

## Setup

### MCP Server (any client)

Point your MCP client at the hosted server:

```
https://promptmika.vercel.app/api/mcp
```

Protocol: JSON-RPC 2.0 over HTTP POST. Headers: `Content-Type: application/json`, `Accept: application/json, text/event-stream`.

### opencode Plugin

Add to `opencode.json`:

```json
{ "plugin": ["promptmika-pack"] }
```

Or with a custom URL:

```json
{ "plugin": ["promptmika-pack", { "url": "https://your-deployment.vercel.app/api/mcp" }] }
```

### Codex Plugin

Add `.mcp.json` to your project:

```json
{
  "mcp_servers": {
    "promptmika": {
      "type": "url",
      "url": "https://promptmika.vercel.app/api/mcp"
    }
  }
}
```

Or use the bundled plugin in this repo (`.codex-plugin/`).

## Packs

| Pack | Files | Description |
|------|-------|-------------|
| `load_contract` | 3 | Skill definition + policy digest + project design language. Load first. |
| `load_frontend_design` | 5 | Project design language + design philosophy, component patterns, responsive layout, anti-slop rules |
| `load_design_systems` | 3 | System selection guide, index, full catalog |
| `load_horizontal_craft` | 12 | Typography, animation, color, icons, accessibility, UX laws |
| `load_backend_api` | 2 | Backend patterns, API design, integration |
| `load_security` | 9 | All vulnerability catalogs |
| `load_testing` | 2 | Unit, integration, e2e, mocking patterns |
| `load_state_management` | 1 | Redux, Zustand, Jotai, signals |
| `load_systems_devops` | 5 | Architecture, DevOps, performance |
| `load_creative_writing` | 1 | Narrative, prose, style |
| `load_token_efficiency` | 2 | Token optimization, self-critique |
| `load_context_engine` | 3 | Context retention, iteration workflow |
| `load_specialized_pages` | 10 | Landing pages, portfolios, prototypes |

All packs are token-budgeted (10,000 lines per call). Files are served whole up to 10,000 lines — longer files are paginated; use `file_offset` to page through large packs.

## Web Library (TS/JS/Node.js)

The web tools (`fetch`, `crawl`, `search`, `scrape`) are also available as a standalone library. Zero external dependencies, SSRF-guarded, free search (no API keys).

```ts
import { fetchGuarded, crawlSite, searchWeb, scrapeUrl } from "./lib/web";

// Fetch a page as markdown
const page = await fetchGuarded("https://example.com", { extract: "markdown" });

// Crawl a site
const { pages, skipped, errors } = await crawlSite("https://docs.example.com", {
  maxPages: 10,
  maxDepth: 3,
  extract: "markdown",
  delayMs: 500,  // rate limiting
});

// Search the web
const { results, source } = await searchWeb("react hooks patterns", { count: 5 });

// Scrape JS-rendered / Cloudflare-protected pages
const scraped = await scrapeUrl("https://example.com", {
  strategies: ["cloudflare-worker", "jina", "direct"],
  cfWorkerUrl: "https://your-worker.workers.dev",
});

// Retry with exponential backoff
import { fetchWithRetry } from "./lib/web";
const res = await fetchWithRetry("https://unstable-api.example.com", {}, 3);
```

All functions are fully typed. See `lib/web/types.ts` for the full API.

## Local dev

```bash
npm install
npm run dev
```

Server runs at `http://localhost:3000/api/mcp`.

Test with curl:

```bash
curl -X POST http://localhost:3000/api/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'
```

## Deploy to Cloudflare

```bash
# Set your Serper API key
npx wrangler secret put SERPER_API_KEY

# Build references + deploy
npm run deploy:worker
```

Your MCP is live at `https://promptmika.<your-subdomain>.workers.dev/mcp`.

Set `SERPER_API_KEY` as a Cloudflare Worker secret for Google search fallback. Without it, DDG → Bing still works.

## Deploy to Vercel

```bash
npx vercel --prod
```

## Structure

```
├── app/api/mcp/route.js        # MCP endpoint (Next.js/Vercel)
├── lib/
│   ├── mcp-server.ts           # Tool definitions, request handler
│   ├── references.ts           # File loader, resolver
│   ├── pack-core.ts            # Pack logic (dependency-injected)
│   ├── pack-tools.ts           # MCP adapter for pack tools
│   ├── scaffold-generator.ts   # Project scaffolding
│   └── web/                    # Standalone web library (TS/JS/Node.js)
│       ├── index.ts            # Library entry point
│       ├── types.ts            # TypeScript types
│       ├── ssrf.ts             # SSRF guard (private IP blocking)
│       ├── fetch.ts            # fetchGuarded, fetchWithRetry
│       ├── html.ts             # HTML→markdown/text extraction
│       ├── crawl.ts            # Breadth-first crawler
│       ├── search.ts           # DuckDuckGo + Serper + Bing search
│       └── scrape.ts           # Jina/direct scrape chain
├── worker/                     # Cloudflare Worker (standalone, no Node.js deps)
│   ├── index.ts                # Worker entry point (MCP JSON-RPC handler)
│   ├── tools.ts                # All tool definitions
│   ├── refs.ts                 # Embedded reference resolver
│   ├── search.ts               # DDG → Serper → Bing
│   ├── crawl.ts                # Crawler
│   ├── scrape.ts               # Scraper
│   ├── fetch.ts                # SSRF-guarded fetch
│   ├── html.ts                 # HTML extraction
│   ├── ssrf.ts                 # Pattern-based SSRF guard
│   └── embedded-refs.json      # 162 references bundled at build time
├── scripts/
│   └── build-references.ts     # Bundles references into Worker
├── references/                 # Knowledge base (markdown)
├── skills/                     # Codex plugin skills
├── .codex-plugin/              # Codex plugin manifest
├── .mcp.json                   # Codex MCP server config
├── promptmika-pack.ts          # opencode plugin
├── wrangler.toml               # Cloudflare Worker config
├── SKILL.md                    # Skill definition
├── APPLE.md                    # Apple/iOS 26–27 Liquid Glass design reference
└── DESIGN.md                   # Project design language (served at design://DESIGN.md, rendered at /design)
```
