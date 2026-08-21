import { NextRequest } from "next/server";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { createServer } from "@/lib/mcp-server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export const maxDuration = 60;

const NO_CACHE = { "Cache-Control": "no-store" };

async function makeTransport(req: NextRequest, parsedBody?: unknown) {
  const server = createServer();
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  await server.connect(transport);
  try {
    const res = await transport.handleRequest(req as unknown as Request, {
      ...(parsedBody !== undefined ? { parsedBody } : {}),
    });
    res.headers.set("Cache-Control", "no-store");
    return res;
  } catch (err) {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32603, message: `Internal error: ${(err as Error).message}` },
        id: null,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...NO_CACHE },
      }
    );
  }
}

export async function POST(req: NextRequest) {
  const raw = await req.text();
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32700, message: "Parse error: Invalid JSON" },
        id: null,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json", ...NO_CACHE },
      }
    );
  }
  return makeTransport(req, parsed);
}

export async function GET(req: NextRequest) {
  const accept = req.headers.get("accept") ?? "";
  if (!accept.includes("text/event-stream")) {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32000, message: "Not Acceptable: Client must accept text/event-stream" },
        id: null,
      }),
      {
        status: 406,
        headers: { "Content-Type": "application/json", ...NO_CACHE },
      }
    );
  }
  return makeTransport(req);
}

export async function DELETE(req: NextRequest) {
  return makeTransport(req);
}
