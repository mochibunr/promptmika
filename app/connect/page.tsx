import Link from "next/link";
import { MCPUrl } from "@/components/MCPUrl";

const TOOLS_TABLE = [
  ["generate_scaffold", "tool", "15+ languages · full file map · interactive App UI"],
  ["security_scan", "tool", "100+ languages · severity-ranked · fixes included"],
  ["search_references", "tool", "Keyword search over the knowledge base"],
  ["load_reference", "tool", "Load any reference file in full"],
  ["list_references", "tool", "Catalog of all 50+ reference files"],
  ["references://{path}", "resource", "Read any knowledge reference"],
  ["skill://SKILL.md", "resource", "The full PromptMika skill definition"],
  ["ui://scaffold/mcp-app.html", "resource", "Interactive scaffold preview UI"],
];

export default function ConnectPage() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <Link className="logo" href="/">
            <span className="logo-mark">PM</span>
            PromptMika
          </Link>
          <div className="nav-links">
            <Link href="/#how">How it works</Link>
            <Link href="/#tools">Tools</Link>
            <Link href="/#connect">Connect</Link>
            <Link href="/connect" style={{ color: "#e8eaed" }}>
              Setup guide
            </Link>
          </div>
          <span className="status-pill">
            <span className="status-dot" />
            MCP server live
          </span>
        </div>
      </nav>

      <header className="hero" style={{ padding: "72px 0 40px" }}>
        <div className="container hero-inner">
          <span className="eyebrow">Setup guide</span>
          <h1 style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)" }}>
            Connect PromptMika to your client
          </h1>
          <p className="hero-sub">
            The MCP server runs over Streamable HTTP at a single URL. Add it to any MCP-capable
            client. No local install required.
          </p>
          <div className="url-box" style={{ maxWidth: 560 }}>
            <MCPUrl />
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="section-label">01 — Claude Desktop</div>
          <h2 style={{ fontSize: "1.5rem" }}>Add the server</h2>
          <p className="section-sub">
            Edit <code>claude_desktop_config.json</code> (Claude → Settings → Developer → Edit
            Config) and add:
          </p>
          <pre>{`{
  "mcpServers": {
    "promptmika": {
      "type": "http",
      "url": "<MCP_URL>"
    }
  }
}`}</pre>
          <p className="section-sub" style={{ marginTop: 18, marginBottom: 0 }}>
            Restart Claude Desktop. The tools appear under the server name{" "}
            <b>promptmika</b>.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">02 — Claude Code</div>
          <h2 style={{ fontSize: "1.5rem" }}>CLI</h2>
          <pre>{`claude mcp add --transport http promptmika <MCP_URL>`}</pre>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">03 — Cursor / other clients</div>
          <h2 style={{ fontSize: "1.5rem" }}>Generic MCP client</h2>
          <p className="section-sub">
            Any client that supports remote MCP servers over Streamable HTTP. Cursor: Settings →
            MCP → Add new global MCP server, with URL type.
          </p>
          <pre>{`URL: <MCP_URL>
Transport: Streamable HTTP (POST/SSE)`}</pre>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">Tools &amp; resources</div>
          <h2 style={{ fontSize: "1.5rem" }}>What the server exposes</h2>
          <p className="section-sub">
            After connecting, the model can discover and use everything below automatically.
          </p>
          <div
            style={{
              display: "grid",
              gap: 8,
              fontSize: 13.5,
              fontFamily: "var(--mono)",
            }}
          >
            {TOOLS_TABLE.map(([name, type, desc]) => (
              <div
                key={name}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "baseline",
                  background: "var(--bg-3)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius-sm)",
                  padding: "10px 16px",
                }}
              >
                <span style={{ color: "var(--accent)", minWidth: 40 }}>{type}</span>
                <span style={{ color: "#e8eaed" }}>{name}</span>
                <span style={{ color: "var(--faint)", fontSize: 12 }}>{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">Try it</div>
          <h2 style={{ fontSize: "1.5rem" }}>Example prompts</h2>
          <div className="faq">
            <div className="faq-item">
              <h4>Frontend</h4>
              <p>&quot;make me a login page&quot;</p>
            </div>
            <div className="faq-item">
              <h4>Backend</h4>
              <p>&quot;build a REST API for user management&quot;</p>
            </div>
            <div className="faq-item">
              <h4>Scaffold</h4>
              <p>&quot;scaffold a TypeScript project called my-app&quot;</p>
            </div>
            <div className="faq-item">
              <h4>Security</h4>
              <p>&quot;scan my code for security issues&quot;</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>PromptMika MCP · v3.0.0 · Deployed on Vercel</span>
          <Link href="/">← Back to home</Link>
        </div>
      </footer>
    </>
  );
}
