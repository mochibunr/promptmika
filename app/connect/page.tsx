import Link from "next/link";
import { MCPUrl, CopyUrl } from "@/components/MCPUrl";
import ConnectTabs from "@/components/ConnectTabs";
import Reveal from "@/components/Reveal";

export default function ConnectPage() {
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
            <a href="/design">Design</a>
            <a href="/connect">Setup guide</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-field" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <p className="eyebrow">Setup guide</p>
            <h1 style={{ maxWidth: "18ch" }}>
              Dial your client into <em>PromptMika.</em>
            </h1>
            <p className="hero-sub">
              The server speaks stateless JSON-RPC over streamable HTTP at a
              single URL. Pick your client below, paste, restart, done.
            </p>
            <div className="cta-row">
              <div className="endpoint-box">
                <span className="endpoint-url">
                  <MCPUrl />
                </span>
                <CopyUrl />
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <Reveal delay={100}>
            <ConnectTabs />
          </Reveal>
          <Reveal delay={180}>
            <dl className="connect-facts">
              <div className="fact">
                <dt>Endpoint</dt>
                <dd>/api/mcp, aliased as /mcp on both hosts</dd>
              </div>
              <div className="fact">
                <dt>Transports</dt>
                <dd>Streamable HTTP POST plus SSE event streams</dd>
              </div>
              <div className="fact">
                <dt>Verify</dt>
                <dd>POST tools/list to the URL and you should get 23 tools back</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <span>PromptMika MCP · v3.5.0</span>
          <div className="footer-links">
            <Link href="/">Back to home</Link>
            <a href="#top">Top</a>
          </div>
        </div>
      </footer>
    </>
  );
}
