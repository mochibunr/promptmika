import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/SiteChrome";
import { WEB_TEMPLATE_CATALOG } from "@/lib/web-template-catalog";

const groups = [
  ["frontend", "Frontend templates", "Interactive landing pages, portfolios, product showcases, and creative web experiences."],
  ["fullstack", "Full-stack templates", "Application references with backend, data, auth, and persistent product logic."],
  ["style", "Style references", "Visual direction studies for typography, layout, atmosphere, motion, and brand character."],
] as const;

export default function TemplatesPage() {
  const origin = WEB_TEMPLATE_CATALOG.find((item) => item.kind === "origin");

  return (
    <div className="pm-site">
      <SiteNav />

      <main className="pm-library">
        <header className="pm-library-hero">
          <div>
            <span className="pm-kicker">WEB TEMPLATE REFERENCE LIBRARY</span>
            <h1>25 ways to study a website without copying one.</h1>
            <p>
              PromptMika exposes WyvernCW/WebTemplate as a read-only reference library.
              Search a direction, load the study notes, summarize the design DNA, then build something original for the active project.
            </p>
          </div>
          <div className="pm-library-rule">
            <span>REFERENCE CONTRACT</span>
            <strong>70%</strong>
            <p>design inspiration</p>
            <strong>30%</strong>
            <p>project-specific adaptation</p>
            <strong>0%</strong>
            <p>direct code copying</p>
          </div>
        </header>

        {origin && (
          <section className="pm-origin-band">
            <span>00 / CORE</span>
            <div>
              <h2>{origin.name}</h2>
              <p>{origin.description}</p>
            </div>
            <code>{origin.folder}</code>
          </section>
        )}

        {groups.map(([kind, title, description]) => {
          const items = WEB_TEMPLATE_CATALOG.filter((item) => item.kind === kind);
          return (
            <section className="pm-library-group" key={kind}>
              <div className="pm-library-group-head">
                <div>
                  <span className="pm-kicker">{String(items.length).padStart(2, "0")} REFERENCES</span>
                  <h2>{title}</h2>
                </div>
                <p>{description}</p>
              </div>

              <div className="pm-library-grid">
                {items.map((item) => (
                  <article className={"pm-library-card pm-library-" + item.kind} key={item.id}>
                    <div className="pm-library-card-top">
                      <span>{String(item.id).padStart(2, "0")}</span>
                      <span>{item.kind}</span>
                    </div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <code>{item.folder}</code>
                    <div className="pm-library-card-actions">
                      {item.liveDemo ? <a href={item.liveDemo} target="_blank" rel="noreferrer">Live demo ↗</a> : <span>study reference</span>}
                      <span>load_web_template</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        <section className="pm-library-how">
          <span className="pm-kicker">MCP WORKFLOW</span>
          <h2>Three tools. One rule: learn, then transform.</h2>
          <div>
            <article><span>01</span><code>list_web_templates</code><p>See the full 25-item catalog or filter by category.</p></article>
            <article><span>02</span><code>search_web_templates</code><p>Search by product type, mood, visual direction, or architecture.</p></article>
            <article><span>03</span><code>load_web_template</code><p>Load the selected study notes with the anti-copy contract attached.</p></article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
