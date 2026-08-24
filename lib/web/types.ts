// ── Types ──────────────────────────────────────────────

export interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
  headers?: Record<string, string>;
  body?: string;
  timeoutMs?: number;
  maxBytes?: number;
  userAgent?: string;
  /** Proxy URL (http/socks5). Node.js only — requires undici or global-agent. */
  proxy?: string;
  /** Cookies sent with the request. */
  cookies?: Record<string, string>;
  /** Follow redirects. Default: true. */
  followRedirects?: boolean;
}

export interface FetchResult {
  status: number;
  statusText: string;
  finalUrl: string;
  headers: Record<string, string>;
  bytes: number;
  text: string;
  /** Number of redirects followed. */
  redirects?: number;
  /** Request duration in ms. */
  timingMs?: number;
}

export type ExtractMode = "raw" | "text" | "markdown" | "links" | "json";

export interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

export interface SearchOptions {
  count?: number;
  /** Search engine. Default: auto (DDG → Serper → Bing fallback chain). */
  engine?: "auto" | "duckduckgo" | "serper" | "bing";
  /** Serper API key. Falls back to SERPER_API_KEY env var. */
  serperApiKey?: string;
}

export interface CrawlPage {
  url: string;
  depth: number;
  status: number;
  title: string;
  content: string;
  links: number;
}

export interface CrawlOptions {
  maxPages?: number;
  maxDepth?: number;
  sameDomain?: boolean;
  extract?: "text" | "markdown";
  /** Delay between requests in ms (rate limiting). Default: 300. */
  delayMs?: number;
  /** Respect robots.txt. Default: true. */
  respectRobots?: boolean;
}

export interface CrawlResult {
  pages: CrawlPage[];
  skipped: string[];
  errors: string[];
}

export interface ScrapeResult {
  title: string;
  text: string;
  source: string;
}

export interface ScrapeOptions {
  /** Custom fetch function (for environments without native fetch). */
  fetchFn?: typeof globalThis.fetch;
  /** Strategy order override. Default: ["jina", "google-cache", "direct"]. */
  strategies?: ("jina" | "google-cache" | "direct" | "cloudflare-worker")[];
  /** Cloudflare Worker URL (or set PROMPTMIKA_CF_WORKER_URL env). */
  cfWorkerUrl?: string;
}

export interface WebClientOptions {
  /** Default timeout for all requests in ms. Default: 15000. */
  timeoutMs?: number;
  /** Default max response bytes. Default: 262144. */
  maxBytes?: number;
  /** Default User-Agent header. */
  userAgent?: string;
  /** Proxy URL for all requests. */
  proxy?: string;
  /** Default cookies for all requests. */
  cookies?: Record<string, string>;
  /** Default search engine. */
  searchEngine?: "auto" | "duckduckgo" | "bing";
  /** Cloudflare Worker URL. */
  cfWorkerUrl?: string;
}
