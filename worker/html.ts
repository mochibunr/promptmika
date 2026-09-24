// HTML extraction for Cloudflare Workers — no node dependencies.

export function decodeEntities(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h: string) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "...").replace(/&mdash;/g, "--").replace(/&ndash;/g, "-");
}

export function strip(s: string): string {
  return s.replace(/<[^>]+>/g, "");
}

export function cleanHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<nav[\s\S]*?<\/nav>/gi, "")
    .replace(/<footer[\s\S]*?<\/footer>/gi, "")
    .replace(/<header[\s\S]*?<\/header>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<aside[\s\S]*?<\/aside>/gi, "")
    .replace(/<form[\s\S]*?<\/form>/gi, "");
}

export function htmlToText(html: string): string {
  const c = cleanHtml(html)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ").replace(/<\/li>/gi, "")
    .replace(/<h([1-6])[^>]*>/gi, (_: string, n: string) => `\n\n${"#".repeat(Number(n))} `)
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<p[^>]*>/gi, "\n\n").replace(/<\/p>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n").replace(/[ \t]{2,}/g, " ");
  return decodeEntities(c).trim();
}

export function htmlToMarkdown(html: string): string {
  let md = cleanHtml(html);
  md = md.replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_: string, n: string, inner: string) =>
    `\n\n${"#".repeat(Number(n))} ${strip(inner).trim()}\n\n`);
  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_: string, code: string) =>
    `\n\`\`\`\n${decodeEntities(strip(code)).trim()}\n\`\`\`\n\n`);
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_: string, c: string) =>
    `\n\`\`\`\n${decodeEntities(strip(c)).trim()}\n\`\`\`\n\n`);
  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_: string, c: string) =>
    "\n" + c.split("\n").map((l: string) => `> ${l.trim()}`).join("\n") + "\n\n");
  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_: string, tc: string) => {
    const rows: string[][] = [];
    const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let rm: RegExpExecArray | null;
    while ((rm = rowRe.exec(tc)) !== null) {
      const cells: string[] = [];
      const cellRe = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi;
      let cm: RegExpExecArray | null;
      while ((cm = cellRe.exec(rm[1])) !== null) cells.push(strip(cm[1]).trim());
      if (cells.length > 0) rows.push(cells);
    }
    if (rows.length === 0) return "";
    const cols = Math.max(...rows.map((r) => r.length));
    const padded = rows.map((r) => { while (r.length < cols) r.push(""); return r; });
    return `\n\n| ${padded[0].join(" | ")} |\n| ${padded[0].map(() => "---").join(" | ")} |\n${padded.slice(1).map((r) => `| ${r.join(" | ")} |`).join("\n")}\n\n`;
  });
  md = md.replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_: string, href: string, inner: string) => {
    const label = strip(inner).trim();
    return label ? `[${label}](${href})` : "";
  });
  md = md.replace(/<li[^>]*>/gi, "\n- ").replace(/<\/li>/gi, "").replace(/<br\s*\/?>/gi, "\n");
  md = md.replace(/<p[^>]*>/gi, "\n\n").replace(/<\/p>/gi, "").replace(/<hr[^>]*>/gi, "\n---\n");
  md = md.replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**").replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**");
  md = md.replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*").replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "*$1*");
  md = md.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_: string, c: string) => `\`${strip(c).trim()}\``);
  md = md.replace(/<[^>]+>/g, "").replace(/\n{3,}/g, "\n\n").replace(/[ \t]{2,}/g, " ");
  return decodeEntities(md).trim();
}

export function extractLinks(html: string, base: URL): string[] {
  const out = new Set<string>();
  const re = /<a[^>]+href=["']([^"']+)["']/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const href = m[1];
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("javascript:")) continue;
    try { const u = new URL(href, base); if (u.protocol === "http:" || u.protocol === "https:") out.add(u.toString()); } catch {}
  }
  return [...out];
}

export function extractTitle(html: string): string {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(strip(m[1])).trim() : "";
}

export function isCloudflareChallenge(text: string): boolean {
  return text.length > 50 && text.includes("Just a moment") &&
    (text.includes("security verification") || text.includes("checking your browser") ||
     text.includes("challenge-platform") || text.includes("cf_chl_opt"));
}


export interface LinkRecord {
  url: string;
  text: string;
  rel: string[];
  nofollow: boolean;
}

export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  lang: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
}

function readAttr(tag: string, name: string): string {
  const safe = name.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
  const re = new RegExp("\\b" + safe + "\\s*=\\s*[\"']([^\"']*)[\"']", "i");
  return tag.match(re)?.[1] ?? "";
}

function readMeta(html: string, key: string): string {
  const safe = key.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
  const a = html.match(new RegExp("<meta[^>]+(?:name|property)=[\"']" + safe + "[\"'][^>]+content=[\"']([^\"']*)[\"'][^>]*>", "i"));
  const b = html.match(new RegExp("<meta[^>]+content=[\"']([^\"']*)[\"'][^>]+(?:name|property)=[\"']" + safe + "[\"'][^>]*>", "i"));
  return decodeEntities((a?.[1] ?? b?.[1] ?? "").trim());
}

export function extractPageMetadata(html: string, base?: URL): PageMetadata {
  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] ?? "";
  const rawCanonical =
    html.match(/<link\b[^>]+rel=[\"'][^\"']*canonical[^\"']*[\"'][^>]+href=[\"']([^\"']+)[\"']/i)?.[1] ??
    html.match(/<link\b[^>]+href=[\"']([^\"']+)[\"'][^>]+rel=[\"'][^\"']*canonical[^\"']*[\"']/i)?.[1] ??
    "";
  let canonical = decodeEntities(rawCanonical).trim();
  if (canonical && base) {
    try { canonical = new URL(canonical, base).toString(); } catch {}
  }
  return {
    title: extractTitle(html),
    description: readMeta(html, "description"),
    canonical,
    lang: readAttr(htmlTag, "lang"),
    robots: readMeta(html, "robots"),
    ogTitle: readMeta(html, "og:title"),
    ogDescription: readMeta(html, "og:description"),
  };
}

export function extractLinkRecords(html: string, base: URL): LinkRecord[] {
  const found = new Map<string, LinkRecord>();
  const re = /<a\b([^>]*)href=[\"']([^\"']+)[\"']([^>]*)>([\s\S]*?)<\/a>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    const href = decodeEntities(match[2]).trim();
    if (!href || href.startsWith("#") || /^(mailto|tel|javascript|data):/i.test(href)) continue;
    try {
      const url = new URL(href, base);
      if (url.protocol !== "http:" && url.protocol !== "https:") continue;
      url.hash = "";
      const tag = "<a " + match[1] + " href=\"" + match[2] + "\" " + match[3] + ">";
      const rel = readAttr(tag, "rel").toLowerCase().split(/\s+/).filter(Boolean);
      const record = {
        url: url.toString(),
        text: decodeEntities(strip(match[4])).replace(/\s+/g, " ").trim(),
        rel,
        nofollow: rel.includes("nofollow"),
      };
      if (!found.has(record.url)) found.set(record.url, record);
    } catch {}
  }
  return [...found.values()];
}

export function extractionQuality(markdown: string, html = ""): {
  score: number;
  words: number;
  headings: number;
  links: number;
  thin: boolean;
} {
  const words = markdown.trim() ? markdown.trim().split(/\s+/).length : 0;
  const headings = (markdown.match(/^#{1,6}\s+/gm) ?? []).length;
  const links = (markdown.match(/\[[^\]]+\]\([^)]+\)/g) ?? []).length;
  const visibleChars = strip(cleanHtml(html)).replace(/\s+/g, " ").trim().length;
  let score = words >= 80 ? 35 : Math.min(35, Math.round(words / 3));
  score += Math.min(20, headings * 5);
  score += Math.min(15, links * 2);
  if (markdown.length >= 1000) score += 20;
  if (visibleChars > 0 && markdown.length >= visibleChars * 0.2) score += 10;
  score = Math.max(0, Math.min(100, score));
  return { score, words, headings, links, thin: words < 60 || markdown.length < 400 };
}

export function isLikelyJsShell(html: string, markdown?: string): boolean {
  const extracted = markdown ?? htmlToMarkdown(html);
  const quality = extractionQuality(extracted, html);
  const scripts = (html.match(/<script\b/gi) ?? []).length;
  const shellMarker = /__next|__nuxt|data-reactroot|id=[\"']root[\"']|id=[\"']app[\"']/i.test(html);
  return quality.thin && (scripts >= 6 || shellMarker);
}
