// HTML extraction — improved markdown, readability

export function decodeEntities(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h: string) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d: string) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "...")
    .replace(/&mdash;/g, "--")
    .replace(/&ndash;/g, "-")
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&times;/g, "x")
    .replace(/&copy;/g, "(c)")
    .replace(/&reg;/g, "(R)");
}

function strip(s: string): string {
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

function collapse(s: string): string {
  return s.replace(/\n{3,}/g, "\n\n").replace(/[ \t]{2,}/g, " ").trim();
}

function processInline(s: string): string {
  return s
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, "**$1**")
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, "**$1**")
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, "*$1*")
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, "*$1*")
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_: string, c: string) => `\`${strip(c).trim()}\``)
    .replace(/<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_: string, href: string, inner: string) => {
      const label = strip(inner).trim();
      if (!label) return "";
      if (/^https?:\/\//i.test(href) || href.startsWith("/")) return `[${label}](${href})`;
      return label;
    })
    .replace(/<img[^>]*alt="([^"]*)"[^>]*src="([^"]*)"[^>]*>/gi, "![$1]($2)")
    .replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*>/gi, "![$2]($1)")
    .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, "![img: $1]")
    .replace(/<img[^>]*src="([^"]*)"[^>]*>/gi, "![]($1)");
}

function processBlock(html: string): string {
  let md = html;

  md = md.replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_: string, n: string, inner: string) => {
    return `\n\n${"#".repeat(Number(n))} ${strip(inner).trim()}\n\n`;
  });

  md = md.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_: string, code: string) => {
    return `\n\`\`\`\n${decodeEntities(strip(code)).trim()}\n\`\`\`\n\n`;
  });
  md = md.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_: string, content: string) => {
    return `\n\`\`\`\n${decodeEntities(strip(content)).trim()}\n\`\`\`\n\n`;
  });

  md = md.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_: string, content: string) => {
    const lines = strip(content).trim().split("\n");
    return "\n" + lines.map((l: string) => `> ${l.trim()}`).join("\n") + "\n\n";
  });

  md = md.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_: string, tc: string) => {
    const rows: string[][] = [];
    const rowRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let rm: RegExpExecArray | null;
    while ((rm = rowRe.exec(tc)) !== null) {
      const cells: string[] = [];
      const cellRe = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi;
      let cm: RegExpExecArray | null;
      while ((cm = cellRe.exec(rm[1])) !== null) {
        cells.push(strip(cm[1]).trim());
      }
      if (cells.length > 0) rows.push(cells);
    }
    if (rows.length === 0) return "";
    const cols = Math.max(...rows.map((r) => r.length));
    const padded = rows.map((r) => { while (r.length < cols) r.push(""); return r; });
    const header = `| ${padded[0].join(" | ")} |`;
    const sep = `| ${padded[0].map(() => "---").join(" | ")} |`;
    const body = padded.slice(1).map((r) => `| ${r.join(" | ")} |`).join("\n");
    return `\n\n${header}\n${sep}\n${body}\n\n`;
  });

  md = md.replace(/<li[^>]*>/gi, "\n- ");
  md = md.replace(/<\/li>/gi, "");
  md = md.replace(/<br\s*\/?>/gi, "\n");
  md = md.replace(/<p[^>]*>/gi, "\n\n");
  md = md.replace(/<\/p>/gi, "");
  md = md.replace(/<hr[^>]*>/gi, "\n---\n");
  md = md.replace(/<div[^>]*>/gi, "\n");
  md = md.replace(/<\/div>/gi, "\n");
  md = md.replace(/<section[^>]*>/gi, "\n");
  md = md.replace(/<\/section>/gi, "\n");
  md = md.replace(/<article[^>]*>/gi, "\n");
  md = md.replace(/<\/article>/gi, "\n");

  md = processInline(md);
  md = md.replace(/<[^>]+>/g, "");
  return collapse(decodeEntities(md));
}

export function htmlToText(html: string): string {
  const cleaned = cleanHtml(html)
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/li>/gi, "")
    .replace(/<h([1-6])[^>]*>/gi, (_: string, n: string) => `\n\n${"#".repeat(Number(n))} `)
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<p[^>]*>/gi, "\n\n")
    .replace(/<\/p>/gi, "")
    .replace(/<tr[^>]*>/gi, "\n")
    .replace(/<td[^>]*>|<\/td>/gi, " | ")
    .replace(/<\/tr>/gi, "\n")
    .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, " [img: $1] ")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ");
  return decodeEntities(cleaned).trim();
}

export function htmlToMarkdown(html: string): string {
  const cleaned = cleanHtml(html);
  return processBlock(cleaned);
}

export function extractLinks(html: string, base: URL): string[] {
  const out = new Set<string>();
  const re = /<a[^>]+href=["']([^"']+)["']/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const href = m[1];
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("javascript:")) continue;
    try {
      const u = new URL(href, base);
      if (u.protocol === "http:" || u.protocol === "https:") out.add(u.toString());
    } catch { /* skip */ }
  }
  return [...out];
}

export function extractTitle(html: string): string {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(strip(m[1])).trim() : "";
}

export function isCloudflareChallenge(text: string): boolean {
  return (
    text.length > 50 &&
    text.includes("Just a moment") &&
    (text.includes("security verification") ||
      text.includes("checking your browser") ||
      text.includes("Please stand by") ||
      text.includes("DDoS protection") ||
      text.includes("Enable JavaScript") ||
      text.includes("challenge-platform") ||
      text.includes("cf_chl_opt"))
  );
}

/**
 * Readability-style extraction: find the <article> or largest <div> by
 * text density and strip everything else. Returns extracted HTML.
 */
export function extractMainContent(html: string): string {
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (articleMatch) return articleMatch[1];

  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) return mainMatch[1];

  const contentMatch = html.match(/<div[^>]*class="[^"]*(?:content|article|post|entry)[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
  if (contentMatch) return contentMatch[1];

  return html;
}
