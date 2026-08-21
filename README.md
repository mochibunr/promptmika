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
| `load_contract` | 2 | Skill definition + policy digest. Load first. |
| `load_frontend_design` | 4 | Design philosophy, component patterns, responsive layout, anti-slop rules |
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

All packs are token-budgeted (2400 tokens max). Files are paginated at 800 lines — use `file_offset` to page through large packs.

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

## Deploy

```bash
npx vercel --prod
```

## Structure

```
├── app/api/mcp/route.js        # MCP endpoint
├── lib/
│   ├── mcp-server.js           # Tool definitions, request handler
│   ├── references.js           # File loader, resolver
│   ├── pack-core.js            # Pack logic (dependency-injected)
│   ├── pack-tools.js           # MCP adapter for pack tools
│   └── scaffold-generator.js   # Project scaffolding
├── references/                 # Knowledge base (markdown)
├── skills/                     # Codex plugin skills
├── .codex-plugin/              # Codex plugin manifest
├── .mcp.json                   # Codex MCP server config
├── promptmika-pack.ts          # opencode plugin
└── SKILL.md                    # Skill definition
```
