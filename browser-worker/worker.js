// PromptMika browser-worker — optional Cloudflare Worker for browser_scrape.
// Fetches from INSIDE Cloudflare's network, so Cloudflare-protected sites do not
// show JS challenges to it. Free tier: 100k requests/day. No credit card needed
// for a workers.dev deployment.
//
// Deploy (2 minutes, no card):
//   1. https://dash.cloudflare.com/ -> Workers & Pages -> Create Worker
//   2. Paste this file's contents, click Deploy
//   3. Set PROMPTMIKA_CF_WORKER_URL=https://<name>.<you>.workers.dev/scrape
//      as an environment variable on the Vercel project, then redeploy.
// Or with wrangler: `cd browser-worker && npx wrangler deploy`.

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

const HDR = {
  "User-Agent": UA,
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.9",
  "Sec-Fetch-Dest": "document",
  "Sec-Fetch-Mode": "navigate",
  "Sec-Fetch-Site": "none",
  "Sec-Fetch-User": "?1",
  "Upgrade-Insecure-Requests": "1",
};

function isChallenge(text) {
  return (
    text &&
    text.length > 50 &&
    text.includes("Just a moment") &&
    (text.includes("security verification") ||
      text.includes("checking your browser") ||
      text.includes("Please stand by") ||
      text.includes("DDoS protection") ||
      text.includes("Enable JavaScript") ||
      text.includes("challenge-platform") ||
      text.includes("cf_chl_opt"))
  );
}

async function tryFetch(url, retries) {
  for (let i = 0; i < retries; i++) {
    if (i > 0) await new Promise((r) => setTimeout(r, 500 * (i + 1)));
    try {
      const res = await fetch(url, { headers: HDR, redirect: "follow" });
      const text = await res.text();
      if (!isChallenge(text)) return { text, ok: true };
    } catch (e) {
      if (i === retries - 1) throw e;
    }
  }
  return null;
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const target = url.searchParams.get("url");
  if (!target) {
    return new Response(JSON.stringify({ error: "Missing ?url= parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const result = (await tryFetch(target, 3)) || (await fetch(target, { headers: HDR, redirect: "follow" }).then(async (res) => ({ text: await res.text(), ok: true })));
    return new Response(result.text, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "X-Fetch-Is-Challenge": isChallenge(result.text) ? "true" : "false",
      },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export default {
  async fetch(request) {
    if (request.method !== "GET") return new Response("Method not allowed", { status: 405 });
    return handleRequest(request);
  },
};