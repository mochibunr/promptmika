import Link from "next/link";
import { MCPUrl, CopyUrl } from "@/components/MCPUrl";

const TOOLS = [
  {
    name: "generate_scaffold",
    ui: true,
    desc: "Secure, production-ready project scaffold for 15+ languages. Returns every file + build commands. Renders an interactive preview UI.",
    args: 'language: "python", project_name: "my-api", project_type: "api"',
  },
  {
    name: "security_scan",
    ui: false,
    desc: "Scans code across 100+ languages for vulnerabilities — SQL injection, XSS, hardcoded secrets, unsafe deserialization. Severity-ranked with fixes.",
    args: 'path: "./src", min_severity: "high"',
  },
  {
    name: "search_references",
    ui: false,
    desc: "Search the 50+ file knowledge base: coding patterns, design systems, security catalogs, testing strategies, state management, APIs.",
    args: 'query: "sql injection"',
  },
  {
    name: "load_reference",
    ui: false,
    desc: "Load any knowledge reference in full — DESIGN_BIBLE, anti-ai-slop, vuln catalogs, state management, API integration, and more.",
    args: 'path: "horizontal-craft/anti-ai-slop.md"',
  },
  {
    name: "list_references",
    ui: false,
    desc: "Browse the complete knowledge base catalog with URIs for every reference file.",
    args: "{}",
  },
  {
    name: "skill://SKILL.md",
    ui: false,
    desc: "The PromptMika skill definition as an MCP resource — silent refinement workflow, minimalism mindset, and all core directives.",
    args: "resource · text/markdown",
  },
];

const DOMAINS = [
  "Frontend & Design",
  "Design Systems",
  "Security Catalogs",
  "Backend & APIs",
  "State Management",
  "Testing Strategies",
  "System Architecture",
  "Token Efficiency",
  "Responsive Design",
  "Anti-AI Slop",
];

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="logo" href="#top">
            <span className="logo-mark">PM</span>
            PromptMika
          </a>
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#tools">Tools</a>
            <a href="#connect">Connect</a>
            <Link href="/connect">Setup guide</Link>
          </div>
          <span className="status-pill">
            <span className="status-dot" />
            MCP server live
          </span>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="container hero-inner">
          <span className="eyebrow">Model Context Protocol · Streamable HTTP</span>
          <h1>
            An MCP server that makes AI an <span className="grad">elite engineer</span>.
          </h1>
          <p className="hero-sub">
            PromptMika turns vague requests into great code. The AI silently refines your prompt,
            applies a minimalism-first mindset, scans for vulnerabilities, and draws on a deep
            knowledge base — coding, design, security, testing.
          </p>
          <div className="cta-row">
            <Link href="#connect" className="btn btn-primary">
              Connect to Claude
            </Link>
            <Link href="/connect" className="btn btn-ghost">
              Setup guide →
            </Link>
          </div>

          <div className="terminal">
            <div className="term-bar">
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-dot" />
              <span className="term-title">mcp — promptmika</span>
            </div>
            <div className="term-body">
              <span className="c"># user</span> build me a login page<br />
              <span className="c"># assistant</span> → reads config, assesses prompt, fills gaps
              silently<br />
              <span className="a">&nbsp;&nbsp;→ load_reference(</span>
              <span className="s">&quot;horizontal-craft/form-validation.md&quot;</span>
              <span className="a">)</span>
              <br />
              <span className="a">&nbsp;&nbsp;→ load_reference(</span>
              <span className="s">&quot;vuln_catalogs/web_frontend.md&quot;</span>
              <span className="a">)</span>
              <br />
              <span className="a">&nbsp;&nbsp;→ security_scan(</span>
              <span className="s">&quot;./src&quot;</span>
              <span className="a">)</span>
              <br />
              <span className="g">&nbsp;&nbsp;✓ 0 HIGH | 0 MEDIUM | 0 LOW</span>
              <br />
              <span className="c"># result</span> tested · minimal · secure · shipped
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="how">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2>You describe. It refines. It builds.</h2>
          <p className="section-sub">
            No prompt engineering required. The AI does the thinking internally and delivers
            exceptional code.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-num">01</div>
              <h3>You send any prompt</h3>
              <p>
                Vague, terse, or incomplete — &quot;make me a login page&quot;, &quot;fix the
                bug&quot;, &quot;add real-time updates&quot;. Even a word or two works.
              </p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h3>It refines silently</h3>
              <p>
                The AI reads your config, fills gaps, sharpens vocabulary, loads the right
                knowledge references, and applies the YAGNI filter — all internally.
              </p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h3>It ships great code</h3>
              <p>
                Minimal. Secure. Tested. Built with the right design system, scanned against
                vulnerability catalogs, and verified with build-test-loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="tools">
        <div className="container">
          <div className="section-label">Tools &amp; resources</div>
          <h2>Everything an elite engineer needs</h2>
          <p className="section-sub">
            Six MCP tools and 50+ knowledge references served as resources — available to any
            capable AI model over a single endpoint.
          </p>
          <div className="tools">
            {TOOLS.map((t) => (
              <div className="tool" key={t.name}>
                <div className="tool-hdr">
                  <span className="tool-name">{t.name}</span>
                  {t.ui && <span className="tool-badge ui">App UI</span>}
                </div>
                <p>{t.desc}</p>
                <div className="tool-args">{t.args}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="knowledge">
        <div className="container">
          <div className="section-label">Knowledge base</div>
          <h2>Depth across every domain</h2>
          <p className="section-sub">
            50+ reference files served as MCP resources — from memory-safe C++ patterns to
            typography grids, from OWASP vulnerability catalogs to Redux anti-patterns.
          </p>
          <div className="chips">
            {DOMAINS.map((d) => (
              <span className="chip" key={d}>
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="connect">
        <div className="container">
          <div className="section-label">Connect</div>
          <h2>One URL. Any MCP client.</h2>
          <p className="section-sub">
            Point Claude Desktop, Claude Code, Cursor, or any MCP client at the endpoint. The
            server runs on Vercel — nothing to install, nothing to host.
          </p>
          <div className="connect-grid">
            <div className="card">
              <h3>Endpoint</h3>
              <p>Streamable HTTP MCP endpoint. Stateless — works on serverless.</p>
              <div className="url-box">
                <MCPUrl />
                <CopyUrl />
              </div>
            </div>
            <div className="card">
              <h3>Claude Desktop</h3>
              <p>
                Add to <code>claude_desktop_config.json</code> and restart. Full setup guide
                on the next page.
              </p>
              <pre>{`{
  "mcpServers": {
    "promptmika": {
      "type": "http",
      "url": "<MCP_URL>"
    }
  }
}`}</pre>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-label">FAQ</div>
          <h2>Questions</h2>
          <div className="faq">
            <div className="faq-item">
              <h4>Does this work with any AI model?</h4>
              <p>
                Yes. MCP is model-agnostic. Claude, GPT, Gemini, Llama — any model that speaks
                MCP over Streamable HTTP can use it.
              </p>
            </div>
            <div className="faq-item">
              <h4>Is the refinement really invisible?</h4>
              <p>
                Yes. The AI internally upgrades weak prompts and never narrates what it improved.
                You get code, not a lesson in prompt engineering.
              </p>
            </div>
            <div className="faq-item">
              <h4>What happens when I call generate_scaffold?</h4>
              <p>
                The AI gets the full file map and creates every file. In MCP App-capable hosts,
                an interactive preview renders — file tree, copy buttons, build commands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>PromptMika MCP · v3.0.0 · Deployed on Vercel</span>
          <Link href="/connect">Setup guide →</Link>
        </div>
      </footer>
    </>
  );
}
