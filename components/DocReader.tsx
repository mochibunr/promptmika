import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
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
    <>
      <nav className="top-nav">
        <Link href="/" className="logo">
          <span className="logo-mark">P</span>
          <span>PromptMika</span>
        </Link>
        <div className="nav-center">
          <Link href="/#workflow">Workflow</Link>
          <Link href="/#packs">Packs</Link>
          <Link href="/#tools">Tools</Link>
          <Link href="/design">Design systems</Link>
        </div>
        <Link href="/connect" className="nav-button">Connect MCP</Link>
      </nav>

      <main className="doc-shell">
        <header className="doc-hero-v2">
          <div>
            <span className="section-kicker">{uri} / MCP RESOURCE</span>
            <h1>{title}</h1>
            <p>{note}</p>
          </div>
          <div className="doc-meta-panel">
            <span>READ ALSO</span>
            {siblings.map((s) => (
              <Link key={s.href} href={s.href}>{s.label}<b>↗</b></Link>
            ))}
          </div>
        </header>

        <section className="doc-page">
          <aside className="doc-aside">
            <span className="section-kicker">RESOURCE</span>
            <code>{uri}</code>
            <p>Served both as a website document and through PromptMika's MCP reference tools.</p>
          </aside>

          <article className="doc doc-spatial">
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

      <footer className="site-footer">
        <div className="logo"><span className="logo-mark">P</span><span>PromptMika</span></div>
        <p>v3.6.0 · resource: {uri}</p>
        <div><Link href="/">Home</Link><Link href="/connect">Connect</Link></div>
      </footer>
    </>
  );
}
