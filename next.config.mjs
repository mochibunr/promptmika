/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/api/mcp": ["./public/**/*", "./references/**/*", "./SKILL.md", "./user-policy/**/*"],
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