// Hardened HTTP fetch layer for PromptMika.
// SSRF-guarded, bounded streaming, redirect-safe credentials, and retry-aware.

import { assertSafeUrl } from "./ssrf";

export const PROMPTMIKA_UA =
  "PromptMika/3.7 (+https://promptmika.vercel.app/; web-research-tool)";

const BROWSER_UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0 Safari/537.36 PromptMika/3.7";
const DEFAULT_MAX_REDIRECTS = 8;
const HARD_MAX = 1_048_576;
const DEFAULT_MAX = 262_144;
const RETRYABLE_STATUS = new Set([408, 425, 429, 500, 502, 503, 504]);
const SAFE_RETRY_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

export interface RedirectHop {
  status: number;
  url: string;
  location: string;
  method: string;
}

export interface FetchResult {
  ok: boolean;
  requestedUrl: string;
  status: number;
  statusText: string;
  finalUrl: string;
  method: string;
  headers: Record<string, string>;
  bytes: number;
  contentLength?: number;
  contentType: string;
  charset: string;
  text: string;
  truncated: boolean;
  redirects: number;
  redirectChain: RedirectHop[];
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
  maxRedirects?: number;
}

function cookieHeader(cookies?: Record<string, string>): string {
  if (!cookies || Object.keys(cookies).length === 0) return "";
  return Object.entries(cookies)
    .map(([k, v]) => `${k}=${v}`)
    .join("; ");
}

function responseHeaders(res: Response): Record<string, string> {
  const out: Record<string, string> = {};
  res.headers.forEach((v, k) => { out[k.toLowerCase()] = v; });
  return out;
}

function parseContentType(value: string | null): { type: string; charset: string } {
  if (!value) return { type: "", charset: "utf-8" };
  const [type, ...params] = value.split(";").map((x) => x.trim());
  const charsetParam = params.find((x) => x.toLowerCase().startsWith("charset="));
  return {
    type: type.toLowerCase(),
    charset: (charsetParam?.slice("charset=".length).replace(/^["']|["']$/g, "") || "utf-8").toLowerCase(),
  };
}

function makeDecoder(charset: string): TextDecoder {
  try { return new TextDecoder(charset, { fatal: false }); }
  catch { return new TextDecoder("utf-8", { fatal: false }); }
}

async function readBodyLimited(
  res: Response,
  maxBytes: number,
  charset: string,
): Promise<{ bytes: number; text: string; truncated: boolean }> {
  if (!res.body) return { bytes: 0, text: "", truncated: false };

  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  let truncated = false;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    const remaining = maxBytes - total;
    if (remaining <= 0) {
      truncated = true;
      await reader.cancel().catch(() => {});
      break;
    }

    if (value.length > remaining) {
      chunks.push(value.slice(0, remaining));
      total += remaining;
      truncated = true;
      await reader.cancel().catch(() => {});
      break;
    }

    chunks.push(value);
    total += value.length;
  }

  const buf = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    buf.set(chunk, offset);
    offset += chunk.length;
  }

  return {
    bytes: total,
    text: makeDecoder(charset).decode(buf),
    truncated,
  };
}

function sanitizeHeaders(input: Record<string, string>): Record<string, string> {
  const blocked = new Set([
    "host", "content-length", "connection", "transfer-encoding",
    "accept-encoding", "upgrade", "via", "forwarded",
  ]);
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(input)) {
    if (!blocked.has(key.toLowerCase())) out[key] = String(value);
  }
  return out;
}

function dropCrossOriginSecrets(headers: Record<string, string>): Record<string, string> {
  const sensitive = new Set(["authorization", "proxy-authorization", "cookie"]);
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(headers)) {
    if (!sensitive.has(key.toLowerCase())) out[key] = value;
  }
  return out;
}

function withoutEntityHeaders(headers: Record<string, string>): Record<string, string> {
  const entity = new Set(["content-type", "content-length", "transfer-encoding"]);
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(headers)) {
    if (!entity.has(key.toLowerCase())) out[key] = value;
  }
  return out;
}

function isRedirect(status: number): boolean {
  return status === 301 || status === 302 || status === 303 || status === 307 || status === 308;
}

function redirectMethod(status: number, method: string): string {
  if (status === 303 && method !== "HEAD") return "GET";
  if ((status === 301 || status === 302) && method === "POST") return "GET";
  return method;
}

function contentLength(headers: Record<string, string>): number | undefined {
  const raw = headers["content-length"];
  if (!raw) return undefined;
  const value = Number(raw);
  return Number.isFinite(value) && value >= 0 ? value : undefined;
}

export function looksBinaryContentType(contentType: string): boolean {
  if (!contentType) return false;
  if (contentType.startsWith("text/")) return false;
  return !(
    contentType.includes("json") ||
    contentType.includes("xml") ||
    contentType.includes("javascript") ||
    contentType.includes("x-www-form-urlencoded") ||
    contentType.includes("svg")
  );
}

export async function fetchGuarded(
  rawUrl: string,
  opts: FetchOptions = {},
): Promise<FetchResult> {
  const requestedUrl = assertSafeUrl(rawUrl).toString();
  let url = new URL(requestedUrl);
  let method = (opts.method ?? "GET").toUpperCase();
  let body = opts.body;
  const timeoutMs = Math.max(100, Math.min(opts.timeoutMs ?? 15_000, 30_000));
  const maxBytes = Math.max(0, Math.min(opts.maxBytes ?? DEFAULT_MAX, HARD_MAX));
  const followRedirects = opts.followRedirects ?? true;
  const maxRedirects = Math.max(0, Math.min(opts.maxRedirects ?? DEFAULT_MAX_REDIRECTS, 12));

  let headers = sanitizeHeaders({
    "User-Agent": opts.userAgent ?? BROWSER_UA,
    Accept: "text/html,application/xhtml+xml,application/xml,application/json,text/plain;q=0.9,*/*;q=0.5",
    "Accept-Language": "en-US,en;q=0.8",
    ...(opts.headers ?? {}),
  });

  if (opts.cookies) {
    const value = cookieHeader(opts.cookies);
    if (value) headers.Cookie = value;
  }

  const startedAt = Date.now();
  const deadline = startedAt + timeoutMs;
  const redirectChain: RedirectHop[] = [];

  for (let hop = 0; hop <= maxRedirects; hop++) {
    const remainingMs = deadline - Date.now();
    if (remainingMs <= 0) throw new Error(`Timeout after ${timeoutMs}ms`);

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), remainingMs);
    let res: Response;

    try {
      res = await fetch(url.toString(), {
        method,
        headers,
        body: method === "GET" || method === "HEAD" ? undefined : body,
        redirect: "manual",
        signal: controller.signal,
      });
    } catch (error: any) {
      const name = error?.name ?? "";
      throw new Error(
        name === "AbortError" || name === "TimeoutError"
          ? `Timeout after ${timeoutMs}ms`
          : `Fetch failed: ${error?.message ?? String(error)}`,
      );
    } finally {
      clearTimeout(timer);
    }

    const hdrs = responseHeaders(res);
    const parsedType = parseContentType(hdrs["content-type"] ?? null);
    const location = hdrs.location;

    if (isRedirect(res.status) && location) {
      if (!followRedirects) {
        return {
          ok: false,
          requestedUrl,
          status: res.status,
          statusText: res.statusText,
          finalUrl: url.toString(),
          method,
          headers: hdrs,
          bytes: 0,
          contentLength: contentLength(hdrs),
          contentType: parsedType.type,
          charset: parsedType.charset,
          text: "",
          truncated: false,
          redirects: redirectChain.length,
          redirectChain,
          timingMs: Date.now() - startedAt,
        };
      }

      if (redirectChain.length >= maxRedirects) {
        throw new Error(`Too many redirects (max ${maxRedirects})`);
      }

      let next: URL;
      try { next = new URL(location, url); }
      catch { throw new Error(`Invalid redirect Location: ${location}`); }
      assertSafeUrl(next.toString());

      redirectChain.push({
        status: res.status,
        url: url.toString(),
        location: next.toString(),
        method,
      });

      const nextMethod = redirectMethod(res.status, method);
      if (next.origin !== url.origin) headers = dropCrossOriginSecrets(headers);
      if (nextMethod !== method) {
        body = undefined;
        headers = withoutEntityHeaders(headers);
      }

      method = nextMethod;
      url = next;
      continue;
    }

    if (method === "HEAD" || maxBytes === 0) {
      return {
        ok: res.ok,
        requestedUrl,
        status: res.status,
        statusText: res.statusText,
        finalUrl: url.toString(),
        method,
        headers: hdrs,
        bytes: 0,
        contentLength: contentLength(hdrs),
        contentType: parsedType.type,
        charset: parsedType.charset,
        text: "",
        truncated: false,
        redirects: redirectChain.length,
        redirectChain,
        timingMs: Date.now() - startedAt,
      };
    }

    const bodyResult = await readBodyLimited(res, maxBytes, parsedType.charset);
    const declaredLength = contentLength(hdrs);
    const truncated =
      bodyResult.truncated ||
      (declaredLength !== undefined && declaredLength > bodyResult.bytes);

    return {
      ok: res.ok,
      requestedUrl,
      status: res.status,
      statusText: res.statusText,
      finalUrl: url.toString(),
      method,
      headers: hdrs,
      bytes: bodyResult.bytes,
      contentLength: declaredLength,
      contentType: parsedType.type,
      charset: parsedType.charset,
      text: bodyResult.text,
      truncated,
      redirects: redirectChain.length,
      redirectChain,
      timingMs: Date.now() - startedAt,
    };
  }

  throw new Error(`Too many redirects (max ${maxRedirects})`);
}

function parseRetryAfter(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const seconds = Number(value);
  if (Number.isFinite(seconds) && seconds >= 0) return seconds * 1000;
  const timestamp = Date.parse(value);
  if (!Number.isNaN(timestamp)) return Math.max(0, timestamp - Date.now());
  return undefined;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchWithRetry(
  rawUrl: string,
  opts: FetchOptions = {},
  retries = 2,
): Promise<FetchResult> {
  const method = (opts.method ?? "GET").toUpperCase();
  const retryableMethod = SAFE_RETRY_METHODS.has(method);
  const maxRetries = Math.max(0, Math.min(retries, 4));
  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await fetchGuarded(rawUrl, opts);
      const shouldRetry =
        retryableMethod &&
        attempt < maxRetries &&
        RETRYABLE_STATUS.has(result.status);

      if (!shouldRetry) return result;

      const retryAfter = parseRetryAfter(result.headers["retry-after"]);
      const backoff = retryAfter ?? Math.min(450 * 2 ** attempt, 4000);
      await sleep(Math.min(backoff, 5000));
    } catch (error) {
      lastError = error as Error;
      if (!retryableMethod || attempt >= maxRetries) throw lastError;
      await sleep(Math.min(450 * 2 ** attempt, 4000));
    }
  }

  throw lastError ?? new Error("Fetch failed after retries");
}
