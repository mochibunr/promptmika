import Link from "next/link";
import Reveal from "@/components/Reveal";
import { LiveTerminal } from "@/components/LiveTerminal";
import { CmdPalette } from "@/components/CmdPalette";
import { CopyUrl, MCPUrl } from "@/components/MCPUrl";

const PACKS = [
  ["load_contract", "Start here", "Design language, policy digest, and skill contract."],
  ["load_frontend_design", "Build the interface", "Frontend craft, responsive rules, anti-slop guidance, and DESIGN.md."],
  ["load_design_systems", "Pick an art direction", "58-style catalog, selection rules, and implementation references."],
  ["load_horizontal_craft", "Polish the details", "Typography, color, motion, accessibility, icons, forms, and UX laws."],
  ["load_backend_api", "Shape the backend", "Backend patterns, API contracts, and integration guidance."],
  ["load_security", "Break it before users do", "Nine vulnerability catalogs across language families."],
  ["load_testing", "Prove it works", "Unit, integration, e2e, mocking, and coverage strategy."],
  ["load_state_management", "Control state", "Redux, Zustand, Jotai, signals, persistence, and tradeoffs."],
  ["load_systems_devops", "Ship the system", "Architecture, builds, DevOps, performance, and interop."],
  ["load_context_engine", "Stay coherent", "Long-session context, iteration loops, and quality gates."],
  ["load_token_efficiency", "Spend context wisely", "Compression, selective loading, and self-review."],
  ["load_creative_writing", "Write with intent", "Narrative, prose, tone, and style."],
  ["load_specialized_pages", "Use page recipes", "Landing pages, portfolios, prototypes, decks, tools, and more."],
] as const;

const TOOL_GROUPS = [
  {
    eyebrow: "orient",
    title: "Context & references",
    tools: [
      ["promptmika_info", "See server capabilities, version, packs, tools, and reference count."],
      ["get_context", "Describe the task; PromptMika recommends the smallest useful context set."],
      ["search_references", "Search the embedded knowledge base by topic."],
      ["inspect_reference", "Preview headings, stats, and metadata before loading a large file."],
      ["load_reference", "Load exactly one reference with paging."],
      ["list_references", "List the whole embedded reference shelf."],
      ["load_claude_policy", "Load the compact policy or the full version only when needed."],
    ],
  },
  {
    eyebrow: "research",
    title: "Web & extraction",
    tools: [
      ["web_search", "Search the web with free-first fallbacks."],
      ["web_fetch", "Fetch raw, text, Markdown, links, or JSON."],
      ["web_curl", "Inspect headers, redirects, cookies, timing, and response bodies."],
      ["web_scrape", "Use PromptMika's multi-strategy scraper."],
      ["browser_scrape", "Try Jina, cache, then direct extraction for difficult pages."],
      ["web_crawl", "Crawl politely with depth, domain, robots, and rate controls."],
      ["web_batch_fetch", "Fetch up to ten URLs in one guarded call."],
      ["extract_html", "Turn supplied HTML into text, Markdown, links, or a structural summary."],
      ["compare_extractions", "Compare raw, text, and Markdown output before choosing one."],
    ],
  },
  {
    eyebrow: "verify",
    title: "Debug & build",
    tools: [
      ["browser_verify", "Check deployed-page status, metadata, H1s, viewport, alt coverage, and links."],
      ["debug_website", "Diagnose markup, HTTP behavior, common error signatures, and page structure."],
      ["debug_screenshot", "Check screenshot readiness and capture dimensions without pretending pixels were rendered."],
      ["security_scan", "Scan supplied source for suspicious patterns and actionable fixes."],
      ["generate_scaffold", "Generate a secure project scaffold with build instructions."],
      ["list_web_templates", "List web-oriented recipes in the knowledge base."],
      ["search_web_templates", "Find page recipes by purpose or style."],
      ["load_web_template", "Load one selected template recipe."],
    ],
  },
] as const;

function Burst() {
  const points: string[] = [];
  for (let i = 0; i < 28; i++) {
    const radius = i % 2 === 0 ? 63 : 45;
    const angle = (Math.PI * i) / 14 - Math.PI / 2;
    points.push(`${65 + radius * Math.cos(angle)},${65 + radius * Math.sin(angle)}`);
  }

  return (
    <svg className="hero-burst" viewBox="0 0 130 130" aria-label="37 tools">
      <polygon points={points.join(" ")} />
      <text x="65" y="57" textAnchor="middle">37</text>
      <text x="65" y="80" textAnchor="middle">TOOLS</text>
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <nav className="nav" aria-label="Primary">
        <div className="nav-pill">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true" />
            PromptMika
          </Link>
          <div className="nav-links">
            <a href="#why">Why</a>
            <a href="#packs">Packs</a>
            <a href="#tools">Tools</a>
            <Link href="/design">58 styles</Link>
            <Link href="/connect" className="nav-cta">Connect</Link>
          </div>
        </div>
      </nav>

      <main>
        <header className="hero hero-v2">
          <div className="hero-field" aria-hidden="true" />
          <div className="container hero-grid hero-grid-v2">
            <div className="hero-copy hero-copy-v2">
              <Reveal>
                <p className="eyebrow"><span className="led" /> context for coding agents, cut by hand</p>
                <h1>
                  Give your agent
                  <span className="hero-cut"> better taste,</span>
                  <span className="hero-outline"> better context.</span>
                </h1>
                <p className="hero-deck">
                  PromptMika is one MCP endpoint with curated design, engineering, security,
                  debugging, and web-research references. Load what the task needs. Leave the rest out.
                </p>

                <div className="cta-row">
                  <Link href="/connect" className="btn btn-primary">Connect PromptMika</Link>
                  <Link href="/design" className="btn btn-ghost">Browse 58 design styles</Link>
                </div>

                <div className="hero-endpoint">
                  <span className="endpoint-kicker">MCP endpoint</span>
                  <div className="endpoint-box">
                    <span className="endpoint-url"><MCPUrl /></span>
                    <CopyUrl />
                  </div>
                </div>
              </Reveal>
              <div className="burst-anchor"><Burst /></div>
            </div>

            <Reveal className="hero-stage hero-stage-v2" delay={120}>
              <span className="tape tl" aria-hidden="true" />
              <LiveTerminal />
              <span className="tape br" aria-hidden="true" />
              <p className="term-caption">live shelf · the server lists itself</p>
            </Reveal>
          </div>
        </header>

        <section className="ticker ticker-v2" aria-label="PromptMika stats">
          <div className="ticker-track">
            <div className="ticker-half">
              <span>37 tools <i>✷</i></span>
              <span>13 packs <i>✷</i></span>
              <span>58 design styles <i>✷</i></span>
              <span>162+ references <i>✷</i></span>
              <span>one endpoint <i>✷</i></span>
              <span>SSRF guarded <i>✷</i></span>
            </div>
            <div className="ticker-half" aria-hidden="true">
              <span>37 tools <i>✷</i></span>
              <span>13 packs <i>✷</i></span>
              <span>58 design styles <i>✷</i></span>
              <span>162+ references <i>✷</i></span>
              <span>one endpoint <i>✷</i></span>
              <span>SSRF guarded <i>✷</i></span>
            </div>
          </div>
        </section>

        <section className="section philosophy-band" id="why">
          <div className="container philosophy-grid">
            <Reveal className="philosophy-lead">
              <span className="section-label">the premise</span>
              <h2 className="section-title">Stop making the model guess.</h2>
              <p className="section-sub">
                PromptMika turns a giant reference library into selective context. It searches first,
                recommends what matters, then loads only the relevant material.
              </p>
            </Reveal>

            <Reveal className="philosophy-proof" delay={100}>
              <CmdPalette />
            </Reveal>

            <Reveal className="margin-scrap" delay={180}>
              <strong>01</strong>
              <span>ask</span>
              <p>Describe the actual task, not a vague category.</p>
            </Reveal>
            <Reveal className="margin-scrap offset" delay={240}>
              <strong>02</strong>
              <span>route</span>
              <p><code>get_context</code> points at the smallest useful set of packs and references.</p>
            </Reveal>
            <Reveal className="margin-scrap dark" delay={300}>
              <strong>03</strong>
              <span>verify</span>
              <p>Use the debug, web, test, and security tools against the result.</p>
            </Reveal>
          </div>
        </section>

        <section className="section design-band">
          <div className="container design-band-grid">
            <Reveal className="design-poster">
              <p className="poster-kicker">DESIGN.md / v8</p>
              <div className="poster-number">58</div>
              <p className="poster-word">visual languages</p>
              <span className="poster-note">one dominant style per page ↗</span>
            </Reveal>

            <Reveal className="design-copy" delay={120}>
              <span className="section-label">not a moodboard dump</span>
              <h2 className="section-title">A style selector with rules.</h2>
              <p className="section-sub">
                Paper-Cut Editorial, Pixel Pastoral, Neo-Terminal Community, Spatial SaaS Workbench,
                Tactile Menu Restaurant, Immersive App Showcase, and fifty-two more. Each style defines
                composition, type, imagery, motion, responsive behavior, accessibility risks, and failure modes.
              </p>
              <div className="signature-row" aria-label="Paper-Cut Editorial signature">
                <span>oversized type</span>
                <span>warm paper</span>
                <span>earthy green</span>
                <span>burnt orange</span>
                <span>controlled imperfection</span>
              </div>
              <Link href="/design" className="ink-link">Open the design catalog ↗</Link>
            </Reveal>
          </div>
        </section>

        <section className="section" id="packs">
          <div className="container">
            <Reveal>
              <span className="section-label">thirteen drawers</span>
              <h2 className="section-title">Load a domain, not the entire library.</h2>
              <p className="section-sub">
                Packs are the fast path. They bundle related references under a controlled budget,
                while large files stay pageable instead of flooding context.
              </p>
            </Reveal>

            <div className="pack-ledger">
              {PACKS.map(([name, kicker, desc], index) => (
                <Reveal key={name} delay={(index % 4) * 45}>
                  <article className="pack-ledger-row">
                    <span className="ledger-no">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <span className="ledger-kicker">{kicker}</span>
                      <h3>{name}</h3>
                    </div>
                    <p>{desc}</p>
                    <span className="ledger-arrow">↗</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section tools-band" id="tools">
          <div className="container">
            <Reveal>
              <span className="section-label">the instruments</span>
              <h2 className="section-title">Twenty-four utilities. Thirteen packs.</h2>
              <p className="section-sub">
                The utility layer handles context routing, web work, extraction, verification, debugging,
                templates, security, and scaffolding. The pack layer handles deep domain knowledge.
              </p>
            </Reveal>

            <div className="tool-columns">
              {TOOL_GROUPS.map((group, groupIndex) => (
                <Reveal key={group.title} delay={groupIndex * 90} className="tool-sheet">
                  <div className="tool-sheet-head">
                    <span>{group.eyebrow}</span>
                    <strong>{String(groupIndex + 1).padStart(2, "0")}</strong>
                  </div>
                  <h3>{group.title}</h3>
                  <div className="tool-sheet-list">
                    {group.tools.map(([name, desc]) => (
                      <div className="tool-line" key={name}>
                        <code>{name}</code>
                        <p>{desc}</p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section connect-section" id="connect">
          <div className="container">
            <Reveal>
              <div className="connect-poster">
                <div>
                  <span className="section-label light-label">one endpoint</span>
                  <h2>Paste it once.<br />Use the whole shelf.</h2>
                  <p>
                    Stateless JSON-RPC over HTTP/SSE. Works with clients that support remote MCP servers.
                  </p>
                </div>
                <div className="connect-actions">
                  <div className="endpoint-box endpoint-dark">
                    <span className="endpoint-url"><MCPUrl /></span>
                    <CopyUrl />
                  </div>
                  <Link href="/connect" className="btn btn-primary">Setup guide</Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer footer-v2">
        <div className="container footer-v2-inner">
          <div className="footer-wordmark">Prompt<span>Mika</span></div>
          <p>v3.6.0 · 37 tools · 58 design styles · Vercel Analytics enabled</p>
          <div className="footer-links">
            <Link href="/design">design</Link>
            <Link href="/guide">guide</Link>
            <Link href="/connect">connect</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
