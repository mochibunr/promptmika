import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/SiteChrome";
import { renderMarkdown, parseYamlFrontmatter, YamlView } from "@/lib/render-md";

const DOCS = [
  { href: "/design", label: "DESIGN.md" },
  { href: "/guide", label: "GUIDELINES.md" },
  { href: "/skill", label: "SKILL.md" },
  { href: "/claude", label: "CLAUDE.md" },
  { href: "/claude/digest", label: "CLAUDE.digest.md" },
];

export function DocReader({
  file,
  uri,
  href,
  title,
  note,
}: {
  file: string;
  uri: string;
  href: string;
  title: string;
  note: string;
}) {
  const md = fs.readFileSync(path.join(process.cwd(), file), "utf-8");
  const siblings = DOCS.filter((d) => d.href !== href);

  return (
    <div className="pm-site">
      <SiteNav />

      <main className="pm-content-shell">
        <header className="pm-content-hero">
          <div>
            <span className="pm-kicker">{uri} / MCP RESOURCE</span>
            <h1>{title}</h1>
            <p>{note}</p>
          </div>

          <aside className="pm-content-side">
            <span>READ NEXT</span>
            {siblings.map((s) => (
              <Link key={s.href} href={s.href}>
                {s.label}<b>↗</b>
              </Link>
            ))}
          </aside>
        </header>

        <section className="pm-doc-layout">
          <aside className="pm-doc-rail">
            <span className="pm-kicker">RESOURCE</span>
            <code>{uri}</code>
            <p>Available on the website and through PromptMika's reference tools. Large documents remain pageable over MCP.</p>
          </aside>

          <article className="doc">
            {(() => {
              const fm = parseYamlFrontmatter(md);
              return fm ? (
                <div className="doc-frontmatter">
                  <p className="doc-fm-label">frontmatter</p>
                  <YamlView entries={fm} />
                </div>
              ) : null;
            })()}
            {renderMarkdown(md)}
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
