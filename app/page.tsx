import Link from "next/link";
import { LiveTerminal } from "@/components/LiveTerminal";
import { CopyUrl, MCPUrl } from "@/components/MCPUrl";

const PACKS = [
  ["load_contract", "Start every session with the operating contract."],
  ["load_frontend_design", "Frontend systems, responsive behavior, interaction, and design quality."],
  ["load_design_systems", "58 visual systems with selection rules and implementation guidance."],
  ["load_horizontal_craft", "Typography, motion, color, icons, accessibility, forms, and UX laws."],
  ["load_backend_api", "Backend patterns, API design, and integration contracts."],
  ["load_security", "Nine vulnerability catalogs across language families."],
  ["load_testing", "Unit, integration, e2e, mocking, and coverage strategy."],
  ["load_state_management", "Redux, Zustand, Jotai, signals, persistence, and tradeoffs."],
  ["load_systems_devops", "Architecture, builds, DevOps, performance, and interop."],
  ["load_context_engine", "Long-session context, iteration loops, and quality gates."],
  ["load_token_efficiency", "Selective loading, compression, and self-review."],
  ["load_creative_writing", "Narrative, tone, prose, and style references."],
  ["load_specialized_pages", "Landing pages, portfolios, prototypes, decks, tools, and more."],
] as const;

const UTILITIES = [
  ["get_context", "Route a task to the smallest useful context set."],
  ["search_references", "Search the embedded knowledge base by topic."],
  ["inspect_reference", "Inspect headings, metadata, and size before loading."],
  ["web_search", "Search the web through PromptMika's free-first cascade."],
  ["web_fetch", "Fetch URLs as text, Markdown, JSON, links, or raw response."],
  ["web_crawl", "Crawl sites with depth, robots, and domain controls."],
  ["browser_verify", "Verify a deployment's status, metadata, structure, and accessibility-adjacent signals."],
  ["debug_website", "Diagnose response behavior, markup, links, and common failure signatures."],
  ["security_scan", "Scan supplied source for security issues and fixes."],
  ["generate_scaffold", "Generate secure project scaffolds with build instructions."],
] as const;

function WorkflowScene() {
  return (
    <div className="workflow-scene" aria-label="PromptMika workflow">
      <div className="scene-topbar">
        <span className="scene-brand">promptmika</span>
        <span className="scene-state"><i /> connected</span>
      </div>

      <div className="scene-grid">
        <div className="scene-input">
          <span className="scene-label">TASK</span>
          <p>Build a fast, accessible SaaS landing page with a distinctive visual system.</p>
          <div className="scene-command">get_context</div>
        </div>

        <div className="scene-route">
          <span className="scene-label">ROUTE</span>
          <div className="route-chip active">load_frontend_design</div>
          <div className="route-chip">load_design_systems</div>
          <div className="route-chip">load_testing</div>
        </div>

        <div className="scene-output">
          <span className="scene-label">VERIFY</span>
          <div className="metric-row"><span>references loaded</span><strong>8</strong></div>
          <div className="metric-row"><span>security findings</span><strong>0 high</strong></div>
          <div className="metric-row"><span>design styles available</span><strong>58</strong></div>
          <div className="metric-row"><span>tools available</span><strong>37</strong></div>
        </div>
      </div>

      <div className="scene-connector c1" />
      <div className="scene-connector c2" />

      <div className="scene-note note-a">
        <span>01</span>
        route first
      </div>
      <div className="scene-note note-b">
        <span>02</span>
        load selectively
      </div>
      <div className="scene-note note-c">
        <span>03</span>
        verify the result
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <nav className="top-nav">
        <Link href="/" className="logo">
          <span className="logo-mark">P</span>
          <span>PromptMika</span>
        </Link>
        <div className="nav-center">
          <a href="#workflow">Workflow</a>
          <a href="#packs">Packs</a>
          <a href="#tools">Tools</a>
          <Link href="/design">Design systems</Link>
        </div>
        <Link href="/connect" className="nav-button">Connect MCP</Link>
      </nav>

      <main>
        <section className="hero-shell">
          <div className="hero-copy">
            <div className="eyebrow">MCP CONTEXT SYSTEM / V3.6</div>
            <h1>Give coding agents the right context before they build.</h1>
            <p className="hero-lede">
              PromptMika turns a large design and engineering library into task-specific context.
              Search, route, load, research, debug, and verify through one MCP endpoint.
            </p>

            <div className="hero-actions">
              <Link href="/connect" className="primary-action">Connect PromptMika</Link>
              <Link href="/design" className="secondary-action">Explore 58 design systems</Link>
            </div>

            <div className="endpoint-inline">
              <span>endpoint</span>
              <code><MCPUrl /></code>
              <CopyUrl />
            </div>

            <div className="hero-metrics">
              <div><strong>37</strong><span>tools</span></div>
              <div><strong>13</strong><span>knowledge packs</span></div>
              <div><strong>58</strong><span>design systems</span></div>
              <div><strong>162+</strong><span>references</span></div>
            </div>
          </div>

          <div className="hero-product">
            <WorkflowScene />
          </div>
        </section>

        <section className="proof-strip" id="workflow">
          <div className="proof-copy">
            <span className="section-kicker">WORKFLOW</span>
            <h2>Context is treated like part of the build system.</h2>
            <p>
              PromptMika does not dump an entire library into the model. It finds the useful slice,
              keeps the task grounded in the right references, then exposes verification tools for the result.
            </p>
          </div>

          <div className="workflow-steps">
            <article>
              <span>01</span>
              <h3>Route</h3>
              <p><code>get_context</code> maps the task to relevant packs and references.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Load</h3>
              <p>Only the selected material enters the context window. Large references stay pageable.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Research</h3>
              <p>Search, fetch, crawl, scrape, and inspect outside material without leaving the MCP workflow.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Verify</h3>
              <p>Use deployment checks, security scans, debugging, and extraction comparison before shipping.</p>
            </article>
          </div>
        </section>

        <section className="system-section" id="packs">
          <div className="section-heading">
            <div>
              <span className="section-kicker">KNOWLEDGE LAYER</span>
              <h2>Thirteen packs. Load by domain.</h2>
            </div>
            <p>
              Packs are curated entry points, not generic categories. Each one groups references that belong together.
            </p>
          </div>

          <div className="pack-table">
            {PACKS.map(([name, desc], index) => (
              <div className="pack-row" key={name}>
                <span className="row-index">{String(index + 1).padStart(2, "0")}</span>
                <code>{name}</code>
                <p>{desc}</p>
                <span className="row-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="product-evidence">
          <div className="evidence-copy">
            <span className="section-kicker">DESIGN SYSTEM</span>
            <h2>58 visual systems with actual implementation rules.</h2>
            <p>
              Not a gallery of screenshots. Each style includes selection criteria, composition rules, typography,
              palette, media treatment, responsive behavior, accessibility risks, signatures, and failure modes.
            </p>
            <Link href="/design" className="text-link">Browse the design catalog →</Link>
          </div>

          <div className="style-workbench">
            <div className="style-workbench-top">
              <span>STYLE SELECTOR</span>
              <span>58 AVAILABLE</span>
            </div>
            <div className="style-current">
              <span className="style-index">45</span>
              <div>
                <strong>Spatial SaaS Workbench</strong>
                <p>workflow-first / product evidence / calm technical composition</p>
              </div>
            </div>
            <div className="style-bars">
              <div><span>product fit</span><i style={{ width: "92%" }} /></div>
              <div><span>interaction fit</span><i style={{ width: "90%" }} /></div>
              <div><span>accessibility fit</span><i style={{ width: "90%" }} /></div>
              <div><span>content density</span><i style={{ width: "82%" }} /></div>
            </div>
            <div className="style-alt">
              <span>alternates</span>
              <code>dreamy-indie-software</code>
              <code>pixel-humanist-agency</code>
              <code>neo-future-aigc</code>
            </div>
          </div>
        </section>

        <section className="tools-section" id="tools">
          <div className="section-heading inverse">
            <div>
              <span className="section-kicker">UTILITY LAYER</span>
              <h2>Research, inspect, debug, and build.</h2>
            </div>
            <p>
              Twenty-four utility tools sit beside the thirteen packs. The most useful ones are shown here.
            </p>
          </div>

          <div className="utility-grid">
            {UTILITIES.map(([name, desc], index) => (
              <article key={name}>
                <span className="utility-no">{String(index + 1).padStart(2, "0")}</span>
                <code>{name}</code>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="terminal-section">
          <div className="terminal-copy">
            <span className="section-kicker">LIVE SERVER</span>
            <h2>The shelf can list itself.</h2>
            <p>
              The homepage calls the same MCP endpoint clients use, so the reference list is coming from the actual server.
            </p>
          </div>
          <LiveTerminal />
        </section>

        <section className="connect-section">
          <div>
            <span className="section-kicker">ONE ENDPOINT</span>
            <h2>Connect once. Use the whole system.</h2>
          </div>
          <div className="connect-panel">
            <code><MCPUrl /></code>
            <CopyUrl />
            <Link href="/connect" className="primary-action">Open setup guide</Link>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="logo"><span className="logo-mark">P</span><span>PromptMika</span></div>
        <p>v3.6.0 · 37 tools · 13 packs · 58 design systems</p>
        <div>
          <Link href="/design">Design</Link>
          <Link href="/guide">Guide</Link>
          <Link href="/connect">Connect</Link>
        </div>
      </footer>
    </>
  );
}
