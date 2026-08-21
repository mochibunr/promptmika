import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromptMika — Elite Coding MCP Server",
  description:
    "PromptMika is an MCP server that makes AI models elite engineers: silent prompt refinement, minimalism-first code, security scanning, design intelligence, and project scaffolding.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
