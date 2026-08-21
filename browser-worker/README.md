# PromptMika browser-worker (optional)

A Cloudflare Worker that powers the MCP's `browser_scrape` tool for sites that
block plain HTTP fetching — JS-rendered pages and Cloudflare-protected sites
("Just a moment", JS challenges, DDoS protection).

## Why it works

The Worker fetches from **inside Cloudflare's own network**. When it requests a
Cloudflare-protected site, Cloudflare treats it as an internal/origin request
and does not present the challenge page. Free tier: 100k requests/day.

## Deploy (2 minutes, no credit card)

1. https://dash.cloudflare.com/ → **Workers & Pages** → **Create Worker**
2. Paste the contents of `worker.js`, click **Deploy**
3. Copy the URL: `https://<name>.<you>.workers.dev`
4. Add environment variable on the Vercel project:
   `PROMPTMIKA_CF_WORKER_URL=https://<name>.<you>.workers.dev`
5. Redeploy PromptMika.

Or via CLI: `cd browser-worker && npx wrangler deploy`

## Verify

```bash
curl "https://<name>.<you>.workers.dev?url=https://example.com"
```

## How `browser_scrape` uses it

Strategy chain (first hit wins):

1. **Your Cloudflare Worker** (if `PROMPTMIKA_CF_WORKER_URL` is set) — best for
   Cloudflare-protected sites
2. **Jina Reader** (`r.jina.ai`, free proxy, no key) — handles many JS/CF sites
3. **Direct fetch** — plain HTTP with browser headers

Without the Worker, most sites still work via strategies 2-3; only the
hardest Cloudflare walls need it.