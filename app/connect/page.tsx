import Link from "next/link";
import { MCPUrl, CopyUrl } from "@/components/MCPUrl";
import ConnectTabs from "@/components/ConnectTabs";

export default function ConnectPage() {
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
        <Link href="/" className="nav-button">Home</Link>
      </nav>

      <main className="connect-page">
        <header className="connect-hero">
          <div>
            <span className="section-kicker">REMOTE MCP SETUP</span>
            <h1>Connect your client to PromptMika.</h1>
            <p>
              One stateless JSON-RPC endpoint exposes all 37 tools, 13 knowledge packs,
              and the embedded reference library.
            </p>
          </div>
          <div className="connect-endpoint-card">
            <span>ENDPOINT</span>
            <code><MCPUrl /></code>
            <CopyUrl />
          </div>
        </header>

        <section className="connect-workbench">
          <div className="connect-main">
            <ConnectTabs />
          </div>

          <aside className="connect-facts-v2">
            <div>
              <span>TRANSPORT</span>
              <strong>HTTP + SSE</strong>
              <p>Streamable JSON-RPC over the Vercel endpoint.</p>
            </div>
            <div>
              <span>VERIFY</span>
              <strong>tools/list</strong>
              <p>Expect 37 tools from the current v3.6.0 server.</p>
            </div>
            <div>
              <span>DEFAULT URL</span>
              <strong>/api/mcp</strong>
              <p>Use the full HTTPS URL in clients that support remote MCP servers.</p>
            </div>
          </aside>
        </section>
      </main>

      <footer className="site-footer">
        <div className="logo"><span className="logo-mark">P</span><span>PromptMika</span></div>
        <p>v3.6.0 · 37 tools · remote MCP</p>
        <div><Link href="/">Home</Link><Link href="/design">Design</Link></div>
      </footer>
    </>
  );
}
