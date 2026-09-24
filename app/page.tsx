import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/SiteChrome";
import { CopyUrl, MCPUrl } from "@/components/MCPUrl";

const packs = [
  "contract", "frontend design", "design systems", "horizontal craft",
  "backend + API", "security", "testing", "state", "systems + DevOps",
  "creative writing", "token efficiency", "context engine", "specialized pages",
];

const tools = [
  ["Context", "get_context · search_references · load_reference · inspect_reference"],
  ["Web", "web_search · web_fetch · web_scrape · web_crawl · web_batch_fetch"],
  ["Verify", "browser_verify · debug_website · debug_screenshot · security_scan"],
  ["Templates", "list_web_templates · search_web_templates · load_web_template"],
];

const featuredTemplates = [
  ["17", "Kaleo", "warm editorial", "kaleo-style"],
  ["14", "Exhibition", "cinematic editorial", "exhibition-style"],
  ["03", "Flow Shader", "creative coding", "3-flow-shader-frontend"],
  ["23", "Swiss Dada", "typographic disruption", "swiss-dada-style"],
  ["22", "Shibumi", "quiet minimalism", "shibumi-style"],
];

export default function Home() {
  return (
    <div className="pm-site">
      <SiteNav />

      <main>
        <section className="pm-hero">
          <div className="pm-hero-copy">
            <span className="pm-kicker">MCP SERVER / V3.6 / FOR CODING AGENTS</span>
            <h1>
              Context with
              <em> taste.</em>
              <br />
              Tools with teeth.
            </h1>
            <p>
              PromptMika gives agents curated design, engineering, security, web research,
              debugging, and template references without drowning the context window.
            </p>
            <div className="pm-actions">
              <Link href="/connect" className="pm-btn pm-btn-dark">Connect PromptMika ↗</Link>
              <Link href="/templates" className="pm-btn pm-btn-line">Browse templates</Link>
            </div>

            <div className="pm-endpoint">
              <span>endpoint</span>
              <code><MCPUrl /></code>
              <CopyUrl />
            </div>
          </div>

          <div className="pm-hero-art" aria-label="PromptMika capabilities">
            <div className="pm-orbit pm-orbit-main">
              <span className="pm-orbit-face">M</span>
              <small>promptmika</small>
            </div>
            <div className="pm-orbit pm-orbit-blue">
              <strong>39</strong><span>tools</span>
            </div>
            <div className="pm-orbit pm-orbit-coral">
              <strong>25</strong><span>templates</span>
            </div>
            <div className="pm-orbit pm-orbit-lime">
              <strong>58</strong><span>styles</span>
            </div>
            <div className="pm-orbit pm-orbit-cream">
              <strong>162+</strong><span>refs</span>
            </div>
            <svg className="pm-squiggle" viewBox="0 0 400 220" aria-hidden="true">
              <path d="M18 161C71 48 128 208 188 87C236 -10 288 180 382 44" />
            </svg>
          </div>
        </section>

        <div className="pm-marquee" aria-hidden="true">
          <div>
            <span>DESIGN</span><i>✳</i><span>RESEARCH</span><i>✳</i>
            <span>DEBUG</span><i>✳</i><span>VERIFY</span><i>✳</i>
            <span>TEMPLATES</span><i>✳</i><span>BUILD</span><i>✳</i>
            <span>DESIGN</span><i>✳</i><span>RESEARCH</span><i>✳</i>
            <span>DEBUG</span><i>✳</i><span>VERIFY</span><i>✳</i>
          </div>
        </div>

        <section className="pm-why" id="why">
          <div className="pm-section-title">
            <span className="pm-kicker">WHY PROMPTMIKA</span>
            <h2>Stop asking the model to improvise the missing half.</h2>
          </div>

          <div className="pm-story">
            <article className="pm-story-a">
              <span>01</span>
              <h3>Route before loading.</h3>
              <p><code>get_context</code> finds the packs, references, and web templates that actually fit the task.</p>
            </article>
            <article className="pm-story-b">
              <span>02</span>
              <h3>Study real references.</h3>
              <p>Design systems, implementation guides, and 25 read-only WebTemplate studies give the agent something concrete to reason from.</p>
            </article>
            <article className="pm-story-c">
              <span>03</span>
              <h3>Check the result.</h3>
              <p>Research, crawl, scrape, inspect, security-scan, and verify the website before calling it finished.</p>
            </article>
          </div>
        </section>

        <section className="pm-template-feature">
          <div className="pm-template-intro">
            <span className="pm-kicker">NEW / WEB TEMPLATE LIBRARY</span>
            <h2>25 references.<br />Study them, don’t clone them.</h2>
            <p>
              PromptMika now reads the WyvernCW/WebTemplate library as reference-only material.
              Agents can search it, load one study, summarize its design DNA, then create a fresh implementation.
            </p>
            <Link href="/templates" className="pm-text-link">Open the whole library ↗</Link>
          </div>

          <div className="pm-template-stack">
            {featuredTemplates.map(([id, name, tag, folder], index) => (
              <div className={"pm-template-ticket pm-ticket-" + index} key={folder}>
                <div>
                  <span>{id}</span>
                  <small>{tag}</small>
                </div>
                <strong>{name}</strong>
                <code>{folder}</code>
              </div>
            ))}
          </div>
        </section>

        <section className="pm-tools" id="tools">
          <div className="pm-section-title">
            <span className="pm-kicker">THE TOOLBOX</span>
            <h2>Small surface area.<br />A lot of reach.</h2>
          </div>

          <div className="pm-tool-list">
            {tools.map(([name, list], index) => (
              <article key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{name}</h3>
                <p>{list}</p>
                <i>↗</i>
              </article>
            ))}
          </div>
        </section>

        <section className="pm-packs">
          <div className="pm-pack-heading">
            <span className="pm-kicker">13 KNOWLEDGE PACKS</span>
            <h2>Deep context,<br />kept modular.</h2>
          </div>
          <div className="pm-pack-cloud">
            {packs.map((pack, index) => (
              <span key={pack} className={"pm-pack-chip pm-pack-" + (index % 5)}>{pack}</span>
            ))}
          </div>
        </section>

        <section className="pm-final">
          <div className="pm-final-copy">
            <span className="pm-kicker">ONE ENDPOINT</span>
            <h2>Give your agent better material.</h2>
            <p>No API key required for the primary path. Connect the MCP once and use the whole shelf.</p>
          </div>
          <div className="pm-final-box">
            <code><MCPUrl /></code>
            <div>
              <CopyUrl />
              <Link href="/connect" className="pm-btn pm-btn-dark">Setup guide ↗</Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
