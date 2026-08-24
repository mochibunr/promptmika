// PromptMika pack tools — MCP adapter wrapping pack-core.
// Registers all pack definitions as MCP tools on a McpServer instance.
// Import this from mcp-server.ts; import pack-core directly for plugin mode.

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { resolveDocument } from "./references";
import { PACKS, PACK_FILE_CAP, loadPack } from "./pack-core";

export function registerPackTools(server: McpServer): void {
  for (const [toolName, pack] of Object.entries(PACKS)) {
    const fileCount = pack.files.length;
    server.tool(
      toolName,
      `Load a bundle of ${fileCount} related PromptMika knowledge files in one call. ${pack.description} Files: ${pack.files.join(", ")}. Files are served in full — only files longer than ${PACK_FILE_CAP} lines are paged (the response names them and tells you to continue via load_reference).`,
      {
        file_offset: z
          .number()
          .int()
          .min(0)
          .optional()
          .describe(
            `File index to start from (0-${fileCount - 1}, default 0). Use to skip already-loaded files.`
          ),
      },
      async ({ file_offset }) => {
        const result = loadPack(toolName, { resolveDocument }, file_offset);
        if (typeof result === "string") {
          return { content: [{ type: "text" as const, text: result }], isError: true };
        }
        return { content: [{ type: "text" as const, text: result.text }] };
      }
    );
  }
}
