import { TOOLS } from "../../../worker/tools";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 800;

type JsonRpcId = number | string | null;

interface JsonRpcRequest {
  jsonrpc: "2.0";
  id?: number | string;
  method: string;
  params?: Record<string, unknown>;
}

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept, Last-Event-ID, MCP-Session-Id",
};

function jsonResponse(body: unknown, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...CORS_HEADERS,
      ...extraHeaders,
    },
  });
}

function jsonRpcOk(id: JsonRpcId, result: unknown) {
  return { jsonrpc: "2.0" as const, id, result };
}

function jsonRpcError(id: JsonRpcId, code: number, message: string) {
  return { jsonrpc: "2.0" as const, id, error: { code, message } };
}

async function handleRpc(rpc: JsonRpcRequest): Promise<unknown> {
  if (rpc.method === "initialize") {
    return {
      protocolVersion: "2024-11-05",
      capabilities: { tools: {} },
      serverInfo: { name: "promptmika", version: "3.8.0" },
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
    const params = rpc.params as
      | { name?: string; arguments?: Record<string, unknown> }
      | undefined;

    if (!params?.name) {
      throw { code: -32602, message: "Missing tool name" };
    }

    const tool = TOOLS[params.name];
    if (!tool) {
      throw { code: -32602, message: `Unknown tool: ${params.name}` };
    }

    const result = await tool.handler(params.arguments ?? {}, {
      SERPER_API_KEY: process.env.SERPER_API_KEY,
    });

    return {
      content: [{ type: "text", text: result }],
    };
  }

  throw { code: -32601, message: `Method not found: ${rpc.method}` };
}

export async function POST(req: Request) {
  let rpc: JsonRpcRequest;

  try {
    rpc = (await req.json()) as JsonRpcRequest;
  } catch {
    return jsonResponse(jsonRpcError(null, -32700, "Parse error"), 400);
  }

  if (!rpc || rpc.jsonrpc !== "2.0" || typeof rpc.method !== "string") {
    return jsonResponse(jsonRpcError(rpc?.id ?? null, -32600, "Invalid Request"), 400);
  }

  if (rpc.method === "notifications/initialized") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  let payload: ReturnType<typeof jsonRpcOk> | ReturnType<typeof jsonRpcError>;

  try {
    const result = await handleRpc(rpc);
    payload = jsonRpcOk(rpc.id ?? null, result);
  } catch (error: unknown) {
    const err = error as { code?: number; message?: string };
    payload = jsonRpcError(
      rpc.id ?? null,
      err?.code ?? -32603,
      err?.message ?? String(error),
    );
  }

  const accept = req.headers.get("accept") ?? "";
  const wantsSse =
    accept.includes("text/event-stream") && !accept.includes("application/json");

  if (wantsSse) {
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        controller.enqueue(
          encoder.encode(`event: message\ndata: ${JSON.stringify(payload)}\n\n`),
        );
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

  return jsonResponse(payload);
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const endpoint = `${url.origin}/api/mcp`;
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(
        encoder.encode(`event: endpoint\ndata: ${endpoint}\n\n`),
      );
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

export async function DELETE() {
  return new Response(null, { status: 200, headers: CORS_HEADERS });
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}
