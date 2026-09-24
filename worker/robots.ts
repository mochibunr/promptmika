import { fetchGuarded, PROMPTMIKA_UA } from "./fetch";

export interface RobotsRule {
  allow: boolean;
  pattern: string;
}

export interface RobotsPolicy {
  origin: string;
  status: number;
  source: "fetched" | "unavailable" | "unreachable";
  rules: RobotsRule[];
  sitemaps: string[];
  crawlDelayMs?: number;
  fetchedAt: number;
}

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const robotsCache = new Map<string, { expiresAt: number; policy: RobotsPolicy }>();

interface ParsedGroup {
  agents: string[];
  rules: RobotsRule[];
  crawlDelayMs?: number;
}

function parseRobots(text: string, productToken: string): {
  rules: RobotsRule[];
  sitemaps: string[];
  crawlDelayMs?: number;
} {
  const groups: ParsedGroup[] = [];
  const sitemaps: string[] = [];
  let current: ParsedGroup | null = null;
  let sawRule = false;

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*$/, "").trim();
    if (!line) continue;
    const idx = line.indexOf(":");
    if (idx < 0) continue;
    const key = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();

    if (key === "sitemap") {
      if (value) sitemaps.push(value);
      continue;
    }

    if (key === "user-agent") {
      if (!current || sawRule) {
        current = { agents: [], rules: [] };
        groups.push(current);
        sawRule = false;
      }
      if (value) current.agents.push(value.toLowerCase());
      continue;
    }

    if (!current) continue;

    if (key === "allow" || key === "disallow") {
      sawRule = true;
      if (key === "disallow" && !value) continue;
      if (value) current.rules.push({ allow: key === "allow", pattern: value });
      continue;
    }

    if (key === "crawl-delay") {
      const seconds = Number(value);
      if (Number.isFinite(seconds) && seconds >= 0) {
        current.crawlDelayMs = Math.min(seconds * 1000, 10_000);
      }
    }
  }

  const token = productToken.toLowerCase();
  const specific = groups.filter((group) =>
    group.agents.some((agent) => agent !== "*" && token.includes(agent)),
  );
  const selected = specific.length > 0
    ? specific
    : groups.filter((group) => group.agents.includes("*"));

  return {
    rules: selected.flatMap((group) => group.rules),
    sitemaps: [...new Set(sitemaps)],
    crawlDelayMs: selected
      .map((group) => group.crawlDelayMs)
      .filter((value): value is number => value !== undefined)
      .reduce<number | undefined>((max, value) => max === undefined ? value : Math.max(max, value), undefined),
  };
}

function patternRegex(pattern: string): RegExp {
  const anchored = pattern.endsWith("$");
  const body = anchored ? pattern.slice(0, -1) : pattern;
  const escaped = body
    .replace(/[.+?^$(){}|[\]\\]/g, "\\$&")
    .replace(/\*/g, ".*");
  return new RegExp("^" + escaped + (anchored ? "$" : ""));
}

function specificity(pattern: string): number {
  return pattern.replace(/[\*$]/g, "").length;
}

export function robotsAllows(policy: RobotsPolicy, url: URL): boolean {
  if (policy.source === "unreachable") return false;
  if (policy.source === "unavailable" || policy.rules.length === 0) return true;
  if (url.pathname === "/robots.txt") return true;

  const path = url.pathname + url.search;
  const matches = policy.rules.filter((rule) => {
    try { return patternRegex(rule.pattern).test(path); }
    catch { return false; }
  });
  if (matches.length === 0) return true;

  matches.sort((a, b) => {
    const diff = specificity(b.pattern) - specificity(a.pattern);
    if (diff !== 0) return diff;
    return Number(b.allow) - Number(a.allow);
  });
  return matches[0].allow;
}

export async function loadRobotsPolicy(origin: string): Promise<RobotsPolicy> {
  const base = new URL(origin);
  const normalizedOrigin = base.origin;
  const now = Date.now();
  const cached = robotsCache.get(normalizedOrigin);
  if (cached && cached.expiresAt > now) return cached.policy;

  let policy: RobotsPolicy;
  try {
    const res = await fetchGuarded(normalizedOrigin + "/robots.txt", {
      timeoutMs: 8_000,
      maxBytes: 512 * 1024,
      userAgent: PROMPTMIKA_UA,
      maxRedirects: 8,
    });

    if (res.status >= 200 && res.status < 300) {
      const parsed = parseRobots(res.text, "PromptMikaBot");
      policy = {
        origin: normalizedOrigin,
        status: res.status,
        source: "fetched",
        rules: parsed.rules,
        sitemaps: parsed.sitemaps,
        crawlDelayMs: parsed.crawlDelayMs,
        fetchedAt: now,
      };
    } else if (res.status >= 400 && res.status < 500) {
      policy = {
        origin: normalizedOrigin,
        status: res.status,
        source: "unavailable",
        rules: [],
        sitemaps: [],
        fetchedAt: now,
      };
    } else {
      policy = {
        origin: normalizedOrigin,
        status: res.status,
        source: "unreachable",
        rules: [],
        sitemaps: [],
        fetchedAt: now,
      };
    }
  } catch {
    policy = {
      origin: normalizedOrigin,
      status: 0,
      source: "unreachable",
      rules: [],
      sitemaps: [],
      fetchedAt: now,
    };
  }

  robotsCache.set(normalizedOrigin, { expiresAt: now + CACHE_TTL_MS, policy });
  return policy;
}
