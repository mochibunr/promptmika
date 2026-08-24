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
