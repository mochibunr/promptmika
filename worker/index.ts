// PromptMika Cloudflare Worker — MCP JSON-RPC over HTTP POST + SSE.
// Zero node: dependencies. All tools self-contained. References embedded at build time.

import { TOOLS } from "./tools";

interface Env {
  SERPER_API_KEY?: string;
}

interface JsonRpcRequest {
  jsonrpc: "2.0";
  id: number | string;
  method: string;
  params?: Record<string, unknown>;
}

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Last-Event-ID, X-Forwarded-Origin",
};

function jsonResponse(body: string, status = 200, extra: Record<string, string> = {}): Response {
  return new Response(body, {
    status,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS, ...extra },
  });
}

function jsonRpcOk(id: number | string | null, result: unknown): Response {
  return jsonResponse(JSON.stringify({ jsonrpc: "2.0", id, result }));
}

function jsonRpcError(id: number | string | null, code: number, message: string): Response {
  return jsonResponse(JSON.stringify({ jsonrpc: "2.0", id, error: { code, message } }));
}

function cors(): Response {
  return new Response(null, { headers: CORS_HEADERS });
}

// ── JSON-RPC router (stateless, shared by both transports) ──────────────────

async function handleRpc(rpc: JsonRpcRequest, env: Env): Promise<unknown> {
  if (rpc.method === "initialize") {
    return {
      protocolVersion: "2024-11-05",
      capabilities: { tools: {} },
      serverInfo: { name: "promptmika", version: "3.6.0" },
    };
  }

  if (rpc.method === "notifications/initialized") return null;

  if (rpc.method === "ping") return {};

  if (rpc.method === "tools/list") {
    return {
      tools: Object.entries(TOOLS).map(([name, def]) => ({
        name,
        description: def.description,
        inputSchema: def.inputSchema,
      })),
    };
  }

  if (rpc.method === "tools/call") {
    const params = rpc.params as { name: string; arguments?: Record<string, unknown> } | undefined;
    if (!params?.name) throw { code: -32602, message: "Missing tool name" };
    const tool = TOOLS[params.name];
    if (!tool) throw { code: -32602, message: `Unknown tool: ${params.name}` };
    const result = await tool.handler(params.arguments ?? {}, env);
    return { content: [{ type: "text", text: result }] };
  }

  throw { code: -32601, message: `Method not found: ${rpc.method}` };
}

// ── SSE transport (GET /mcp → event stream) ─────────────────────────────────

function handleSSEGet(req: Request): Response {
  const url = new URL(req.url);
  // X-Forwarded-Origin: full base URL of the client-facing endpoint (e.g. "https://promptmika.vercel.app/api/mcp").
  // The proxy sets this so the SSE endpoint URL matches where the client connected from.
  // Direct Worker calls fall back to the worker's own /mcp path.
  const forwarded = req.headers.get("X-Forwarded-Origin");
  const endpoint = forwarded || `${url.origin}/mcp`;
  const encoder = new TextEncoder();

  let keepAlive: ReturnType<typeof setInterval>;
  let closed = false;

  const stream = new ReadableStream({
    start(controller) {
      // Send endpoint event — client POSTs messages here
      controller.enqueue(encoder.encode(`event: endpoint\ndata: ${endpoint}\n\n`));

      // Keep-alive heartbeat every 15 s
      keepAlive = setInterval(() => {
        if (closed) { clearInterval(keepAlive); return; }
        try { controller.enqueue(encoder.encode(`: heartbeat\n\n`)); }
        catch { closed = true; clearInterval(keepAlive); }
      }, 15_000);
    },
    cancel() {
      closed = true;
      clearInterval(keepAlive);
    },
  });

  return new Response(stream, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      ...CORS_HEADERS,
    },
  });
}

// ── POST /mcp — handles both plain JSON and SSE-wrapped responses ───────────

async function handlePost(req: Request, env: Env): Promise<Response> {
  const accept = req.headers.get("Accept") || "";

  let rpc: JsonRpcRequest;
  try {
    rpc = await req.json() as JsonRpcRequest;
  } catch {
    return jsonRpcError(null, -32700, "Parse error");
  }

  if (!rpc || rpc.jsonrpc !== "2.0") {
    return jsonRpcError(rpc?.id ?? null, -32600, "Invalid Request");
  }

  // notifications/initialized — no response body
  if (rpc.method === "notifications/initialized") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  // Process the RPC
  let result: unknown;
  let error: { code: number; message: string } | null = null;
  try {
    result = await handleRpc(rpc, env);
  } catch (e: any) {
    error = { code: e.code ?? -32603, message: e.message ?? String(e) };
  }

  // Only SSE-wrap if the client ONLY accepts text/event-stream (not application/json).
  // Most MCP clients send "Accept: application/json, text/event-stream" and expect plain JSON.
  const wantsSSE = accept.includes("text/event-stream") && !accept.includes("application/json");

  if (wantsSSE) {
    const encoder = new TextEncoder();
    const payload = error
      ? JSON.stringify({ jsonrpc: "2.0", id: rpc.id, error })
      : JSON.stringify({ jsonrpc: "2.0", id: rpc.id, result });

    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(encoder.encode(`event: message\ndata: ${payload}\n\n`));
        controller.close();
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        ...CORS_HEADERS,
      },
    });
  }

  // Plain JSON response (Streamable HTTP transport)
  if (error) return jsonRpcError(rpc.id, error.code, error.message);
  return jsonRpcOk(rpc.id, result);
}

// ── Main router ──────────────────────────────────────────────────────────────

async function handleRequest(req: Request, env: Env): Promise<Response> {
  if (req.method === "OPTIONS") return cors();

  const url = new URL(req.url);

  // Health check
  if (url.pathname === "/health") {
    return jsonResponse(JSON.stringify({
      status: "ok",
      version: "3.6.0",
      tools: Object.keys(TOOLS).length,
      transports: ["sse", "http"],
    }));
  }

  // MCP endpoints
  if (url.pathname === "/mcp") {
    if (req.method === "GET")  return handleSSEGet(req);
    if (req.method === "POST") return handlePost(req, env);
    if (req.method === "DELETE") return new Response(null, { status: 200, headers: CORS_HEADERS });
    return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
  }

  return new Response("Not found", { status: 404 });
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    try {
      return await handleRequest(req, env);
    } catch (e: any) {
      return jsonResponse(JSON.stringify({ error: e.message }), 500);
    }
  },
};
