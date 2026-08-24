import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
// Max allowed function duration (Vercel fluid compute ceiling); the route is
// a pass-through proxy so long MCP calls/SSE streams aren't cut off at 60s.
export const maxDuration = 800;

const WORKER_URL = "https://promptmika.wvrncika.workers.dev/mcp";

export async function POST(req: NextRequest) {
  return proxy(req);
}

export async function GET(req: NextRequest) {
  return proxy(req);
}

export async function DELETE(req: NextRequest) {
  return proxy(req);
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept, Last-Event-ID, X-Forwarded-Origin",
    },
  });
}

async function proxy(req: NextRequest): Promise<Response> {
  const headers = new Headers();
  req.headers.forEach((v, k) => {
    if (k !== "host") headers.set(k, v);
  });

  // Tell the worker the full client-facing endpoint URL so the SSE endpoint event matches
  const origin = req.nextUrl.origin;
  headers.set("X-Forwarded-Origin", `${origin}/api/mcp`);

  const body = req.method !== "GET" && req.method !== "HEAD"
    ? await req.arrayBuffer()
    : undefined;

  const res = await fetch(WORKER_URL, {
    method: req.method,
    headers,
    body,
  });

  const contentType = res.headers.get("content-type") || "application/json";

  const baseHeaders = {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
    "Access-Control-Allow-Origin": "*",
  };

  // 204/304 must not carry a body — new Response(stream, { status: 204 }) throws
  if (res.status === 204 || res.status === 304 || res.body === null) {
    return new Response(null, { status: res.status, headers: baseHeaders });
  }

  // SSE streams — pass through as a real stream (don't buffer)
  if (contentType.includes("text/event-stream")) {
    return new Response(res.body, {
      status: res.status,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  // Regular JSON — buffer and return
  const bodyText = await res.text();
  return new Response(bodyText, {
    status: res.status,
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "no-store",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
