import Link from "next/link";
import { CopyUrl, MCPUrl } from "@/components/MCPUrl";

const PACKS = [
  "load_contract",
  "load_frontend_design",
  "load_design_systems",
  "load_horizontal_craft",
  "load_backend_api",
  "load_security",
  "load_testing",
  "load_state_management",
  "load_systems_devops",
  "load_creative_writing",
  "load_token_efficiency",
  "load_context_engine",
  "load_specialized_pages",
] as const;

const TOOL_GROUPS = [
  {
    label: "CONTEXT",
    tools: ["promptmika_info", "get_context", "search_references", "inspect_reference", "load_reference", "list_references", "load_claude_policy"],
  },
  {
    label: "WEB",
    tools: ["web_search", "web_fetch", "web_curl", "web_scrape", "browser_scrape", "web_crawl", "web_batch_fetch", "extract_html", "compare_extractions"],
  },
  {
    label: "VERIFY",
    tools: ["browser_verify", "debug_website", "debug_screenshot", "security_scan", "generate_scaffold", "list_web_templates", "search_web_templates", "load_web_template"],
  },
] as const;

function StateRibbon() {
  return (
    <div className="ia-ribbon" aria-label="PromptMika state ribbon">
      <article className="ia-state ia-state-task">
        <div className="ia-state-head">
          <span>01 / TASK</span>
          <i className="ia-dot ia-dot-live" />
        </div>
        <div className="ia-prompt">
          <span className="ia-prompt-mark">›</span>
          <p>Build a distinctive, accessible landing page for my developer tool.</p>
        </div>
        <div className="ia-state-foot">input received</div>
      </article>

      <div className="ia-flow-arrow">→</div>

      <article className="ia-state ia-state-context">
        <div className="ia-state-head">
          <span>02 / CONTEXT</span>
          <code>get_context</code>
        </div>
        <div className="ia-context-list">
          <div><b>01</b><span>load_frontend_design</span><em>0.94</em></div>
          <div><b>02</b><span>load_design_systems</span><em>0.91</em></div>
          <div><b>03</b><span>load_testing</span><em>0.78</em></div>
        </div>
        <div className="ia-state-foot">3 packs recommended</div>
      </article>

      <div className="ia-flow-arrow">→</div>

      <article className="ia-state ia-state-research">
        <div className="ia-state-head">
          <span>03 / RESEARCH</span>
          <code>web_fetch</code>
        </div>
        <div className="ia-browser">
          <div className="ia-browser-bar">
            <i />
            <span>reference source</span>
          </div>
          <div className="ia-browser-body">
            <strong>200</strong>
            <p>content extracted as markdown</p>
            <small>42.8 KB · 318 ms</small>
          </div>
        </div>
        <div className="ia-state-foot">source grounded</div>
      </article>

      <div className="ia-flow-arrow">→</div>

      <article className="ia-state ia-state-verify">
        <div className="ia-state-head">
          <span>04 / VERIFY</span>
          <code>browser_verify</code>
        </div>
        <div className="ia-checks">
          <div><span>HTTP</span><b>200</b></div>
          <div><span>viewport</span><b>✓</b></div>
          <div><span>single H1</span><b>✓</b></div>
          <div><span>alt coverage</span><b>1.00</b></div>
        </div>
        <div className="ia-state-foot ia-state-foot-ok">ready to ship</div>
      </article>
    </div>
  );
}

function InterfaceStage() {
  return (
    <div className="ia-stage">
      <div className="ia-stage-chrome">
        <span className="ia-stage-brand"><i /> PromptMika</span>
        <span className="ia-stage-status">REMOTE MCP · CONNECTED</span>
      </div>

      <div className="ia-stage-body">
        <aside className="ia-stage-rail">
          <span className="is-active">01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
        </aside>

        <div className="ia-stage-main">
          <div className="ia-stage-query">
            <span>REQUEST</span>
            <h3>Design a music app landing page that does not look generic.</h3>
            <code>get_context(task)</code>
          </div>

          <div className="ia-stage-result">
            <div className="ia-result-head">
              <span>RECOMMENDED CONTEXT</span>
              <b>3 MATCHES</b>
            </div>
            <div className="ia-result-row active">
              <div>
                <small>STYLE / 58</small>
                <strong>immersive-app-showcase</strong>
              </div>
              <span>0.96</span>
            </div>
            <div className="ia-result-row">
              <div>
                <small>PACK</small>
                <strong>load_frontend_design</strong>
              </div>
              <span>0.92</span>
            </div>
            <div className="ia-result-row">
              <div>
                <small>PACK</small>
                <strong>load_design_systems</strong>
              </div>
              <span>0.88</span>
            </div>
          </div>
        </div>

        <div className="ia-stage-inspector">
          <span className="ia-inspector-title">SESSION</span>
          <dl>
            <div><dt>tools</dt><dd>37</dd></div>
            <div><dt>packs</dt><dd>13</dd></div>
            <div><dt>styles</dt><dd>58</dd></div>
            <div><dt>refs</dt><dd>162+</dd></div>
          </dl>
          <div className="ia-inspector-live"><i /> live endpoint</div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="ia-site">
      <nav className="ia-nav">
        <Link href="/" className="ia-logo">
          <span className="ia-logo-mark">M</span>
          <span>PromptMika</span>
        </Link>
        <div className="ia-nav-links">
          <a href="#flow">Flow</a>
          <a href="#system">System</a>
          <a href="#tools">Tools</a>
          <Link href="/design">58 styles</Link>
        </div>
        <Link href="/connect" className="ia-nav-cta">Connect MCP</Link>
      </nav>

      <main>
        <section className="ia-hero">
          <div className="ia-hero-copy">
            <span className="ia-kicker">PROMPTMIKA / MCP CONTEXT ENGINE</span>
            <h1>
              Your agent should
              <span>see what matters.</span>
            </h1>
            <p>
              Curated design, engineering, security, research, and debugging context,
              delivered through one MCP endpoint exactly when the task needs it.
            </p>

            <div className="ia-hero-actions">
              <Link href="/connect" className="ia-button ia-button-primary">Connect PromptMika</Link>
              <Link href="#flow" className="ia-button ia-button-secondary">See the flow</Link>
            </div>

            <div className="ia-endpoint">
              <span>ENDPOINT</span>
              <code><MCPUrl /></code>
              <CopyUrl />
            </div>
          </div>

          <div className="ia-hero-stage">
            <div className="ia-orbit-label ia-orbit-a">37 tools</div>
            <div className="ia-orbit-label ia-orbit-b">58 styles</div>
            <InterfaceStage />
          </div>
        </section>

        <section className="ia-state-section" id="flow">
          <div className="ia-section-intro">
            <span className="ia-kicker">STATE RIBBON / REAL MCP FLOW</span>
            <h2>One task. Four useful states.</h2>
            <p>
              The newest style in your DESIGN.md is built around showing real interface state changes.
              PromptMika already has a natural sequence for that, so the website now demonstrates the product instead of describing it from a distance.
            </p>
          </div>
          <StateRibbon />
        </section>

        <section className="ia-proof-section">
          <div className="ia-proof-big">
            <span className="ia-kicker">WHY IT EXISTS</span>
            <h2>Less context noise.<br />More grounded work.</h2>
          </div>
          <div className="ia-proof-grid">
            <article>
              <span>01</span>
              <h3>Route first</h3>
              <p><code>get_context</code> recommends the relevant packs and references before the model starts loading everything in sight.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Use real sources</h3>
              <p>References, URLs, crawls, extractions, and template guidance stay inspectable instead of becoming invisible assumptions.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Verify the result</h3>
              <p>Deployment checks, extraction comparison, security scanning, and website diagnostics live beside the knowledge layer.</p>
            </article>
          </div>
        </section>

        <section className="ia-system-section" id="system">
          <div className="ia-system-heading">
            <span className="ia-kicker">KNOWLEDGE SYSTEM</span>
            <h2>Thirteen packs.<br />Load only what belongs.</h2>
            <p>
              Packs are domain-sized context entry points. They are intentionally separate so one task does not drag an entire reference library into the model.
            </p>
          </div>

          <div className="ia-pack-filmstrip">
            {PACKS.map((name, index) => (
              <div className="ia-pack-frame" key={name}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <code>{name}</code>
                <i>↗</i>
              </div>
            ))}
          </div>
        </section>

        <section className="ia-design-section">
          <div className="ia-design-copy">
            <span className="ia-kicker">DESIGN.md / STYLE 58</span>
            <h2>The design catalog is part of the product.</h2>
            <p>
              PromptMika carries 58 visual systems, each with selection logic, composition rules,
              typography, media behavior, motion, accessibility risks, and failure modes.
            </p>
            <Link href="/design" className="ia-text-link">Browse all 58 styles ↗</Link>
          </div>

          <div className="ia-design-player">
            <div className="ia-player-top">
              <span>STYLE / 58</span>
              <span>IMMERSIVE APP SHOWCASE</span>
            </div>
            <div className="ia-player-screen">
              <div className="ia-player-ribbon">
                <span className="active">promise</span>
                <span>core flow</span>
                <span>feature scenes</span>
                <span>proof</span>
                <span>ecosystem</span>
                <span>try</span>
              </div>
              <div className="ia-player-center">
                <span>STATE RIBBON</span>
                <strong>Interface states become the story.</strong>
                <p>Real product behavior, synchronized explanation, no decorative fake screens.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ia-tools-section" id="tools">
          <div className="ia-tools-head">
            <span className="ia-kicker">37 TOOLS / ONE ENDPOINT</span>
            <h2>Context. Web. Verify.</h2>
          </div>

          <div className="ia-tool-groups">
            {TOOL_GROUPS.map((group) => (
              <article key={group.label}>
                <header>
                  <span>{group.label}</span>
                  <b>{String(group.tools.length).padStart(2, "0")}</b>
                </header>
                <div>
                  {group.tools.map((tool) => <code key={tool}>{tool}</code>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="ia-final">
          <div>
            <span className="ia-kicker">READY / REMOTE MCP</span>
            <h2>Connect once.<br />Use the whole system.</h2>
          </div>
          <div className="ia-final-action">
            <code><MCPUrl /></code>
            <div>
              <CopyUrl />
              <Link href="/connect" className="ia-button ia-button-primary">Open setup guide</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="ia-footer">
        <div className="ia-logo">
          <span className="ia-logo-mark">M</span>
          <span>PromptMika</span>
        </div>
        <span>v3.6.0 · 37 tools · 13 packs · 58 styles</span>
        <div>
          <Link href="/design">Design</Link>
          <Link href="/guide">Guide</Link>
          <Link href="/connect">Connect</Link>
        </div>
      </footer>
    </div>
  );
}
