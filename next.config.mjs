/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/api/mcp": ["./public/**/*", "./references/**/*", "./SKILL.md", "./DESIGN.md", "./user-policy/**/*"],
    "/design": ["./DESIGN.md"],
    "/skill": ["./SKILL.md"],
    "/claude": ["./user-policy/CLAUDE.md"],
    "/claude/digest": ["./user-policy/CLAUDE.digest.md"],
  },
  async rewrites() {
    // Accept /mcp as an alias for /api/mcp so both deployment targets
    // (Vercel and Cloudflare Worker) expose the same MCP path.
    return [{ source: "/mcp", destination: "/api/mcp" }];
  },
  async headers() {
    return [
      {
        source: "/mcp-app.html",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=31536000",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [{ key: "X-Content-Type-Options", value: "nosniff" }],
      },
    ];
  },
};

export default nextConfig;