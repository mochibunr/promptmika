import { fetchWithRetry } from "./fetch";
import { extractPageMetadata } from "./html";
import { loadRobotsPolicy } from "./robots";
import { assertSafeUrl } from "./ssrf";

export async function probeUrl(rawUrl: string) {
  const target = assertSafeUrl(rawUrl);
  let res = await fetchWithRetry(target.toString(), {
    method: "HEAD",
    timeoutMs: 12_000,
    maxBytes: 0,
  }, 1);

  let usedGetFallback = false;
  if (res.status === 405 || res.status === 501 || res.contentType === "") {
    usedGetFallback = true;
    res = await fetchWithRetry(target.toString(), {
      method: "GET",
      timeoutMs: 15_000,
      maxBytes: 80_000,
      headers: { Range: "bytes=0-79999" },
    }, 1);
  }

  const metadata = res.text && (res.contentType.includes("html") || /<html\b/i.test(res.text))
    ? extractPageMetadata(res.text, new URL(res.finalUrl))
    : null;
  const robots = await loadRobotsPolicy(new URL(res.finalUrl).origin);

  const header = (name: string) => res.headers[name.toLowerCase()] ?? "";
  return {
    ok: res.ok,
    requested_url: res.requestedUrl,
    final_url: res.finalUrl,
    status: res.status,
    status_text: res.statusText,
    method: res.method,
    used_get_fallback: usedGetFallback,
    redirects: res.redirectChain,
    timing_ms: res.timingMs,
    response: {
      content_type: res.contentType,
      charset: res.charset,
      content_length: res.contentLength ?? null,
      captured_bytes: res.bytes,
      truncated: res.truncated,
      server: header("server"),
      cache_control: header("cache-control"),
      etag: header("etag"),
      last_modified: header("last-modified"),
      content_encoding: header("content-encoding"),
    },
    security_headers: {
      strict_transport_security: header("strict-transport-security"),
      content_security_policy: header("content-security-policy"),
      x_content_type_options: header("x-content-type-options"),
      referrer_policy: header("referrer-policy"),
      permissions_policy: header("permissions-policy"),
      cross_origin_opener_policy: header("cross-origin-opener-policy"),
      cross_origin_resource_policy: header("cross-origin-resource-policy"),
    },
    metadata,
    robots: {
      status: robots.status,
      source: robots.source,
      allowed: robots.source !== "unreachable",
      sitemaps: robots.sitemaps,
      crawl_delay_ms: robots.crawlDelayMs ?? null,
    },
  };
}
