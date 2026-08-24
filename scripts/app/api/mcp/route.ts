import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

const WORKER_URL = "https://promptmika.wvrncika.workers.dev/mcp";

async function proxy(req: NextRequest): Promise<Response> {
  const headers = new Headers();
  req.headers.forEach((v, k) => {
    if (k !== "host") headers.set(k, v);
  });

  const body = req.method !== "GET" && req.method !== "HEAD" ? await req.text() : undefined;

  const res = await fetch(WORKER_URL, {
    method: req.method,
    headers,
    body,
  });

  const contentType = res.headers.get("content-type") || "application/json";
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
      "Access-Control-Allow-Headers": "Content-Type, Accept",
    },
  });
}
