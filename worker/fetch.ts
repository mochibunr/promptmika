// Fetch with SSRF guard — Cloudflare Workers compatible.

import { assertSafeUrl } from "./ssrf";

const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";
const MAX_REDIRECTS = 8;
const HARD_MAX = 1_048_576;
const DEFAULT_MAX = 262_144;

export interface FetchResult {
  status: number;
  statusText: string;
  finalUrl: string;
  headers: Record<string, string>;
  bytes: number;
  text: string;
  redirects: number;
  timingMs: number;
}

export interface FetchOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  timeoutMs?: number;
  maxBytes?: number;
  cookies?: Record<string, string>;
  userAgent?: string;
  followRedirects?: boolean;
}

function cookieHeader(cookies?: Record<string, string>): string {
  if (!cookies || Object.keys(cookies).length === 0) return "";
  return Object.entries(cookies)
    .map(([k, v]) => `${k}=${v}`)
    .join("; ");
}

async function readBodyLimited(res: Response, maxBytes: number): Promise<{ bytes: number; text: string }> {
  if (!res.body) {
    const text = await res.text().catch(() => "");
    return { bytes: text.length, text };
  }
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (total + value.length > maxBytes) {
      await reader.cancel();
      break;
    }
    chunks.push(value);
    total += value.length;
  }
  const buf = new Uint8Array(total);
  let off = 0;
  for (const c of chunks) {
    buf.set(c, off);
    off += c.length;
  }
  return { bytes: total, text: new TextDecoder().decode(buf) };
}

export async function fetchGuarded(
  rawUrl: string,
  opts: FetchOptions = {}
): Promise<FetchResult> {
  const method = (opts.method ?? "GET").toUpperCase();
  const timeoutMs = Math.min(opts.timeoutMs ?? 15_000, 30_000);
  const maxBytes = Math.min(opts.maxBytes ?? DEFAULT_MAX, HARD_MAX);
  const followRedirects = opts.followRedirects ?? true;

  let url = assertSafeUrl(rawUrl);
  const blocked = new Set(["host", "content-length", "connection", "accept-encoding"]);
  const headers: Record<string, string> = {
    "User-Agent": opts.userAgent ?? BROWSER_UA,
    Accept:
      "text/html,application/xhtml+xml,application/xml,application/json;q=0.9,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
    ...(opts.headers ?? {}),
  };
  if (opts.cookies) {
    const ck = cookieHeader(opts.cookies);
    if (ck) headers["Cookie"] = ck;
  }
  for (const key of Object.keys(headers)) {
    if (blocked.has(key.toLowerCase())) delete headers[key];
  }

  let finalUrl = url.toString();
  let redirectCount = 0;
  const t0 = Date.now();

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let res: Response;
    try {
      res = await fetch(url.toString(), {
        method,
        headers,
        body:
          method === "GET" || method === "HEAD" || method === "DELETE"
            ? undefined
            : opts.body,
        redirect: "manual",
        signal: controller.signal,
      });
    } catch (e: any) {
      throw new Error(
        e.name === "AbortError"
          ? `Timeout after ${timeoutMs}ms`
          : `Fetch failed: ${e.message}`
      );
    } finally {
      clearTimeout(timer);
    }
    finalUrl = url.toString();

    if (res.status >= 300 && res.status < 400) {
      if (!followRedirects) {
        const hdrs: Record<string, string> = {};
        res.headers.forEach((v, k) => {
          hdrs[k] = v;
        });
        return {
          status: res.status,
          statusText: res.statusText,
          finalUrl,
          headers: hdrs,
          bytes: 0,
          text: "",
          redirects: redirectCount,
          timingMs: Date.now() - t0,
        };
      }
      const loc = res.headers.get("location");
      if (!loc) {
        const hdrs: Record<string, string> = {};
        res.headers.forEach((v, k) => {
          hdrs[k] = v;
        });
        return {
          status: res.status,
          statusText: res.statusText,
          finalUrl,
          headers: hdrs,
          bytes: 0,
          text: "",
          redirects: redirectCount,
          timingMs: Date.now() - t0,
        };
      }
      try {
        url = new URL(loc, url);
      } catch {
        throw new Error(`Invalid redirect Location: ${loc}`);
      }
      assertSafeUrl(url.toString());
      redirectCount++;
      continue;
    }

    const body = await readBodyLimited(res, maxBytes);
    const hdrs: Record<string, string> = {};
    res.headers.forEach((v, k) => {
      hdrs[k] = v;
    });
    return {
      status: res.status,
      statusText: res.statusText,
      finalUrl,
      headers: hdrs,
      bytes: body.bytes,
      text: body.text,
      redirects: redirectCount,
      timingMs: Date.now() - t0,
    };
  }
  throw new Error(`Too many redirects (max ${MAX_REDIRECTS})`);
}

export async function fetchWithRetry(
  rawUrl: string,
  opts: FetchOptions = {},
  retries = 2
): Promise<FetchResult> {
  let lastErr: Error | undefined;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fetchGuarded(rawUrl, opts);
    } catch (e) {
      lastErr = e as Error;
      if (i < retries) {
        const delay = Math.min(1000 * 2 ** i, 5000);
        await new Promise((r) => setTimeout(r, delay));
      }
    }
  }
  throw lastErr;
}
