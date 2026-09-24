import Link from "next/link";
import { SiteNav, SiteFooter } from "@/components/SiteChrome";
import { MCPUrl, CopyUrl } from "@/components/MCPUrl";
import ConnectTabs from "@/components/ConnectTabs";

export default function ConnectPage() {
  return (
    <div className="pm-site">
      <SiteNav />

      <main className="pm-content-shell">
        <header className="pm-content-hero">
          <div>
            <span className="pm-kicker">REMOTE MCP / SETUP</span>
            <h1>Plug PromptMika into your client.</h1>
            <p>
              One stateless endpoint exposes 39 tools, 13 knowledge packs,
              58 design styles, and the 25-reference WebTemplate library.
            </p>
          </div>

          <aside className="pm-content-side pm-connect-endpoint">
            <span>ENDPOINT</span>
            <code><MCPUrl /></code>
            <CopyUrl />
          </aside>
        </header>

        <section className="pm-connect-layout">
          <div className="pm-connect-tabs">
            <ConnectTabs />
          </div>

          <aside className="pm-connect-notes">
            <article>
              <span>01</span>
              <strong>Transport</strong>
              <p>Streamable HTTP POST plus SSE-compatible responses.</p>
            </article>
            <article>
              <span>02</span>
              <strong>Verify</strong>
              <p>Call <code>tools/list</code> and expect 39 tools from v3.7.0.</p>
            </article>
            <article>
              <span>03</span>
              <strong>Templates</strong>
              <p>Use <code>list_web_templates</code> to see all 25 read-only studies.</p>
            </article>
          </aside>
        </section>

        <div className="pm-connect-back">
          <Link href="/templates">Browse WebTemplate library ↗</Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
