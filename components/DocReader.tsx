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
      <nav className="nav" aria-label="Primary">
        <div className="nav-pill">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true" />
            PromptMika
          </Link>
          <div className="nav-links">
            <a href="/#packs">Packs</a>
            <a href="/#tools">Tools</a>
            <Link href="/" className="nav-cta">
              Home
            </Link>
          </div>
        </div>
      </nav>

      <header className="hero doc-hero">
        <div className="hero-field" aria-hidden="true" />
        <div className="container">
          <p className="eyebrow">
            <span className="led" aria-hidden="true" />
            {uri} · also served over MCP
          </p>
          <h1 style={{ marginTop: 14 }}>{title}</h1>
          <p className="note" style={{ transform: "rotate(-1deg)", marginTop: 10 }}>
            {note}
          </p>
          <p className="doc-siblings">
            read also:{" "}
            {siblings.map((s, i) => (
              <span key={s.href}>
                {i > 0 && " · "}
                <Link href={s.href}>{s.label}</Link>
              </span>
            ))}
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
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
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>MCP server · v3.5.0 · load via {uri}</span>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/connect">Setup</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
