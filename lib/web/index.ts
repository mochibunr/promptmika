// PromptMika Web — fetch, crawl, search, scrape library for TS/JS/Node.js
// Zero external dependencies. SSRF-guarded. Free search (no API keys).

export { fetchGuarded, fetchWithRetry } from "./fetch";
export { crawlSite } from "./crawl";
export { searchWeb } from "./search";
export { scrapeUrl } from "./scrape";
export { assertSafeUrl, isPrivateIp } from "./ssrf";
export {
  decodeEntities, cleanHtml, htmlToText, htmlToMarkdown,
  extractLinks, extractTitle, isCloudflareChallenge, extractMainContent,
} from "./html";

export type {
  FetchOptions, FetchResult, ExtractMode,
  SearchResult, SearchOptions,
  CrawlPage, CrawlOptions, CrawlResult,
  ScrapeResult, ScrapeOptions,
  WebClientOptions,
} from "./types";
