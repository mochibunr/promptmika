import type { ReactNode } from "react";
import React from "react";

/* ---------- YAML frontmatter → styled nested list (NOT a code block) ---------- */

type YEntry = { key?: string; text?: string; children?: YEntry[] };

function stripQuotes(s: string): string {
  const t = s.trim();
  return t.replace(/^["'](.*)["']$/, "$1");
}

/** Parse the leading `---` frontmatter into a shallow-nested entry tree.
    Handles: maps, string lists, scalars with wrapped continuation lines,
    comments and blank lines. Deliberately forgiving — falls back to null. */
export function parseYamlFrontmatter(md: string): YEntry[] | null {
  const lines = md.split("\n");
  if (lines[0]?.trim() !== "---") return null;
  let end = -1;
  for (let j = 1; j < lines.length; j++) {
    if (lines[j].trim() === "---") { end = j; break; }
  }
  if (end === -1) return null;

  const body = lines.slice(1, end);
  type Raw = { indent: number; text: string };
  const rows: Raw[] = [];
  for (const l of body) {
    if (!l.trim() || l.trim().startsWith("#")) continue;
    rows.push({ indent: l.match(/^\s*/)![0].replace(/\t/g, "  ").length, text: l.trim() });
  }

  function parseBlock(start: number, indent: number): [YEntry[], number] {
    const out: YEntry[] = [];
    let i = start;
    const SIBLING_KEY = /^[A-Za-z_][\w.$-]*:\s?/;
    while (i < rows.length) {
      const row = rows[i];
      if (row.indent < indent) break;

      // ---- list items ("- …") at this indent ----------------------------
      const li = /^-\s+(.*)$/.exec(row.text);
      if (row.indent === indent && li) {
        const rest = li[1].trim();
        if (!rest) {
          // bare dash: nested block belongs to the item
          if (i + 1 < rows.length && rows[i + 1].indent > indent) {
            const [kids, next] = parseBlock(i + 1, rows[i + 1].indent);
            out.push({ children: kids });
            i = next;
            continue;
          }
          out.push({ text: "" });
          i++;
          continue;
        }
        if (/^[^:]+:(\s|$)/.test(rest.replace(/^["']/, "").replace(/["']$/, ""))) {
          // map-style item: "- key: value" — reparse the remainder (+ following
          // deeper rows) as a block belonging to this item
          rows[i] = { indent: indent + 2, text: rest };
          const [kids, next] = parseBlock(i, indent + 2);
          out.push({ children: kids });
          i = next;
          continue;
        }
        out.push({ text: stripQuotes(rest) });
        i++;
        continue;
      }

      const kv = /^([^:{#][^:]*?):\s?(.*)$/.exec(row.text);
      if (row.indent === indent && kv) {
        const key = kv[1].trim();
        let rest = kv[2] ?? "";
        i++;
        // ---- block scalars (| > |- >- …) consume ALL deeper lines verbatim
        if (/^[|>][+-]?$/.test(rest.trim())) {
          const buf: string[] = [];
          while (i < rows.length && rows[i].indent > indent) {
            buf.push(stripQuotes(rows[i].text));
            i++;
          }
          out.push({ key, text: buf.join(" ") });
          continue;
        }
        // ---- plain scalar, possibly wrapped over deeper-indented lines
        let text = stripQuotes(rest);
        while (
          i < rows.length &&
          rows[i].indent > indent &&
          !/^- /.test(rows[i].text) &&
          !SIBLING_KEY.test(rows[i].text)
        ) {
          text += " " + stripQuotes(rows[i].text);
          i++;
        }
        out.push({ key, text });
        continue;
      }

      // same-indent dash list directly under a key ("key:" then "- item")
      if (row.indent === indent && out.length > 0) {
        const prev = out[out.length - 1];
        if (prev.key !== undefined && prev.text === undefined && !prev.children) {
          const kids: YEntry[] = [];
          while (i < rows.length && rows[i].indent === indent && /^-\s+/.test(rows[i].text)) {
            const m2 = /^-\s+(.*)$/.exec(rows[i].text)!;
            const rest2 = m2[1].trim();
            if (rest2 && /^[^:]+:(\s|$)/.test(stripQuotes(rest2))) {
              rows[i] = { indent: indent + 2, text: rest2 };
              const [k2, n2] = parseBlock(i, indent + 2);
              kids.push({ children: k2 });
              i = n2;
              continue;
            }
            kids.push({ text: stripQuotes(rest2) });
            i++;
          }
          prev.children = kids;
          continue;
        }
      }

      // deeper-than-current non-list, non-key row: continuation of previous
      // scalar that our rules stopped on — attach instead of dropping
      if (out.length > 0 && row.indent > indent) {
        const last = out[out.length - 1];
        const add = stripQuotes(row.text);
        if (last.text !== undefined) last.text += " " + add;
        else if (last.children && last.children.length > 0) {
          const l2 = last.children[last.children.length - 1];
          if (l2.text !== undefined) l2.text += " " + add;
        }
        i++;
        continue;
      }

      i++; // true orphan — skip
    }
    return [out, i];
  }

  if (rows.length === 0) return null;
  try {
    const [tree] = parseBlock(0, rows[0].indent);
    return tree.length ? tree : null;
  } catch {
    return null;
  }
}

export function YamlView({ entries }: { entries: YEntry[] }): ReactNode {
  return (
    <ul className="doc-yaml">
      {entries.map((e, i) => (
        <li key={i}>
          {e.key && <strong className="doc-yaml-key">{e.key}</strong>}
          {e.key && (e.text || e.children) ? " " : null}
          {e.text && <span dangerouslySetInnerHTML={{ __html: esc(e.text) }} />}
          {e.children && <YamlView entries={e.children} />}
        </li>
      ))}
    </ul>
  );
}

/* Minimal, safe markdown renderer shared by the /doc pages.
   Handles: fences, headings (first H1 skipped as page chrome), hr,
   blockquotes, lists (incl. - [ ] checkboxes), pipe tables, paragraphs;
   inline code / bold / italic. All HTML is escaped before inline passes. */

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s: string): string {
  return esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
}

export function renderMarkdown(md: string): ReactNode[] {
  const out: ReactNode[] = [];
  const lines = md.split("\n");
  let i = 0;
  let key = 0;
  let skippedFirstH1 = false;

  // YAML frontmatter (leading --- … ---) is metadata — never rendered.
  if (lines[0]?.trim() === "---") {
    let j = 1;
    while (j < lines.length && lines[j].trim() !== "---") j++;
    if (j < lines.length) i = j + 1;
  }

  while (i < lines.length) {
    const line = lines[i];

    // fenced code
    if (line.trimStart().startsWith("```")) {
      const buf: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) buf.push(lines[i++]);
      i++;
      out.push(
        <pre className="doc-code" key={key++}>
          <code>{buf.join("\n")}</code>
        </pre>
      );
      continue;
    }

    // headings
    const h = /^(#{1,4})\s+(.*)$/.exec(line);
    if (h) {
      let level = h[1].length;
      if (level === 1 && !skippedFirstH1) {
        skippedFirstH1 = true; // doc title duplicates the page header
        i++;
        continue;
      }
      if (level === 1) level = 2; // later H1s are real section breaks in some docs
      const text = inline(h[2]);
      const Tag = (level === 2 ? "h2" : level === 3 ? "h3" : "h4") as "h2" | "h3" | "h4";
      out.push(<Tag key={key++} dangerouslySetInnerHTML={{ __html: text }} />);
      i++;
      continue;
    }

    // hr
    if (/^---+$/.test(line.trim())) {
      out.push(<hr className="doc-hr" key={key++} />);
      i++;
      continue;
    }

    // blockquote
    if (line.trimStart().startsWith(">")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].trimStart().startsWith(">")) buf.push(lines[i++].replace(/^\s*>\s?/, ""));
      out.push(
        <blockquote className="doc-quote" key={key++}>
          <p dangerouslySetInnerHTML={{ __html: inline(buf.join(" ")) }} />
        </blockquote>
      );
      continue;
    }

    // pipe table — tolerant of blank lines between rows (common in hand-written docs)
    if (line.includes("|") && i + 1 < lines.length && /^\s*\|?[\s:-]+\|[\s|:-]*$/.test(lines[i + 1])) {
      const rows: string[][] = [];
      const parseRow = (l: string) =>
        l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      rows.push(parseRow(line));
      i += 2;
      while (i < lines.length) {
        const cur = lines[i];
        if (cur.includes("|") && cur.trim()) {
          rows.push(parseRow(cur));
          i++;
          continue;
        }
        // blank line — keep consuming if another table row follows it
        if (!cur.trim() && i + 1 < lines.length && lines[i + 1].includes("|") && lines[i + 1].trim() && !/^\s*([-*]|\d+\.|#{1,4}\s)/.test(lines[i + 1])) {
          i++;
          continue;
        }
        break;
      }
      out.push(
        <div className="doc-table-wrap" key={key++}>
          <table className="doc-table">
            <thead>
              <tr>{rows[0].map((c, ci) => <th key={ci} dangerouslySetInnerHTML={{ __html: inline(c) }} />)}</tr>
            </thead>
            <tbody>
              {rows.slice(1).map((r, ri) => (
                <tr key={ri}>{r.map((c, ci) => <td key={ci} dangerouslySetInnerHTML={{ __html: inline(c) }} />)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // list items
    if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
        let item = lines[i++].replace(/^\s*([-*]|\d+\.)\s+/, "");
        while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !/^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
          item += " " + lines[i++].trim();
        }
        items.push(item);
      }
      out.push(
        <ul key={key++}>
          {items.map((it, ii) => {
            const cb = /^\[( |x)\]\s*/.exec(it);
            const html = cb
              ? `<span class="doc-cb">${cb[1] === "x" ? "☑" : "☐"}</span> ${inline(it.slice(cb[0].length))}`
              : inline(it);
            return <li key={ii} dangerouslySetInnerHTML={{ __html: html }} />;
          })}
        </ul>
      );
      continue;
    }

    // blank
    if (!line.trim()) {
      i++;
      continue;
    }

    // paragraph
    const buf: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,4}\s|```|>|\s*[-*]\s|\s*\d+\.\s)/.test(lines[i]) &&
      !/^---+$/.test(lines[i].trim())
    ) {
      buf.push(lines[i++]);
    }
    out.push(<p key={key++} dangerouslySetInnerHTML={{ __html: inline(buf.join(" ")) }} />);
  }
  return out;
}
