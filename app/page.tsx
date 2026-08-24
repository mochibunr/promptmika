import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { LiveTerminal } from "@/components/LiveTerminal";
import { CmdPalette } from "@/components/CmdPalette";
import { CopyUrl, MCPUrl } from "@/components/MCPUrl";

/* ---------- tiny cut-paper decorations ---------- */

function Starburst({ line1, line2 }: { line1: string; line2: string }) {
  const points: string[] = [];
  const spikes = 14;
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? 62 : 47;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    points.push(`${65 + r * Math.cos(a)},${65 + r * Math.sin(a)}`);
  }
  return (
    <svg className="starburst" width="130" height="130" viewBox="0 0 130 130" role="img" aria-label={`${line1} ${line2}`}>
      <polygon points={points.join(" ")} fill="var(--orange)" stroke="var(--brown-deep)" strokeWidth="3" />
      <text x="65" y="60" textAnchor="middle" fontSize="26" fill="var(--brown-deep)">
        {line1}
      </text>
      <text x="65" y="84" textAnchor="middle" fontSize="19" fill="var(--brown-deep)">
        {line2}
      </text>
    </svg>
  );
}

function Sparkle({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg className={`sparkle ${className}`} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 0C13.1 7.4 16.6 10.9 24 12C16.6 13.1 13.1 16.6 12 24C10.9 16.6 7.4 13.1 0 12C7.4 10.9 10.9 7.4 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SquiggleCheck() {
  return (
    <svg className="squiggle-check" width="30" height="22" viewBox="0 0 30 22" aria-hidden="true">
      <path d="M2 12 Q6 20 10 13 Q14 4 18 10 L28 3" fill="none" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function Ticker() {
  const items = ["162 files", "13 packs", "23 tools", "zero dependencies", "one endpoint", "SSRF-guarded"];
  const strip = (hidden: boolean) => (
    <div className="ticker-half" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <span key={t}>
          {t} <span className="spark">✷</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="ticker" aria-label="PromptMika by the numbers">
      <div className="ticker-track">
        {strip(false)}
        {strip(true)}
      </div>
    </div>
  );
}

/* ---------- data ---------- */

const PACKS: { name: string; desc: string; files: number; size: string; tone?: string; tape?: boolean }[] = [
  { name: "load_frontend_design", desc: "Design philosophy, component patterns, responsive layout, anti-slop rules.", files: 4, size: "pack-lg" },
  { name: "load_security", desc: "Nine vulnerability catalogs — root causes to remediations, per language family.", files: 9, size: "pack-sm", tone: "dark", tape: true },
  { name: "load_contract", desc: "The skill definition + policy digest. First read of every session.", files: 2, size: "pack-md" },
  { name: "load_specialized_pages", desc: "Landing pages, portfolios, prototypes, decks, social cards — ten artifact recipes.", files: 10, size: "pack-md", tone: "olive" },
  { name: "load_horizontal_craft", desc: "Typography, animation, color, icons, accessibility, form validation, UX laws.", files: 12, size: "pack-sm" },
  { name: "load_design_systems", desc: "System selection guide, index, full catalog — matched by mood and formality.", files: 3, size: "pack-sm" },
  { name: "load_backend_api", desc: "Backend patterns, API design, integration contracts.", files: 2, size: "pack-sm" },
  { name: "load_testing", desc: "Unit, integration, e2e, mocking, coverage strategy — with the Build-Test-Loop wired in.", files: 2, size: "pack-lg", tape: true },
  { name: "load_state_management", desc: "Redux, Zustand, Jotai, signals — pattern selection by complexity.", files: 1, size: "pack-sm" },
  { name: "load_context_engine", desc: "Context retention, iteration workflow, quality gates across long sessions.", files: 3, size: "pack-md" },
  { name: "load_systems_devops", desc: "Architecture, build systems, interop, performance, universal patterns.", files: 5, size: "pack-md" },
  { name: "load_creative_writing", desc: "Narrative, prose, style, tone.", files: 1, size: "pack-sm" },
  { name: "load_token_efficiency", desc: "Token compression levels and the self-critique protocol.", files: 2, size: "pack-sm" },
];

const MODULES: { name: string; desc: string }[] = [
  { name: "web_fetch", desc: "Any URL as raw, text, markdown, links, or JSON — byte-capped, timeout-clamped." },
  { name: "web_search", desc: "DuckDuckGo → Serper → Bing cascade. Free, no key required." },
  { name: "web_crawl", desc: "Polite breadth-first crawler — robots-aware, same-domain, rate-limited." },
  { name: "browser_scrape", desc: "Jina Reader → Google Cache → direct chain for protected pages." },
  { name: "web_curl", desc: "curl -v debugging: headers, cookies, timing, redirect chains." },
  { name: "security_scan", desc: "Regex SAST across ~60 languages, severity-sorted findings with fixes." },
  { name: "generate_scaffold", desc: "Fourteen hardened project templates, CI + security scans wired in." },
];

const STATS = [
  { num: "162", label: "reference files, embedded" },
  { num: "23", label: "tools, one endpoint" },
  { num: "5k", label: "lines per pack call, max" },
];

export default function Home() {
  return (
    <>
      {/* ---------- masthead ---------- */}
      <nav className="nav" aria-label="Primary">
        <div className="nav-pill">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true" />
            PromptMika
          </Link>
          <div className="nav-links">
            <a href="#packs">Packs</a>
            <a href="#tools">Tools</a>
            <a href="/design">Design</a>
            <Link href="/connect" className="nav-cta">
              Connect
            </Link>
          </div>
        </div>
      </nav>

      {/* ---------- hero poster ---------- */}
      <header className="hero">
        <div className="hero-field" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">
                <span className="led" aria-hidden="true" />
                an MCP server for coding agents
              </p>
              <h1>
                Elite{" "}
                <span className="word-green">knowledge,</span>
                <br />
                <span className="word-outline">hand-cut.</span>
              </h1>
              <p className="note" style={{ marginTop: "var(--space-4)", transform: "rotate(-1.2deg)" }}>
                curated references, pasted straight into Claude, Cursor,
                Codex&nbsp;or&nbsp;opencode ↴
              </p>
              <div className="cta-row">
                <Link href="/connect" className="btn btn-primary">
                  Connect your client
                </Link>
                <a href="#packs" className="btn btn-ghost">
                  Leaf through the packs
                </a>
              </div>
              <div className="cta-row">
                <div className="endpoint-box">
                  <span className="endpoint-url">
                    <MCPUrl />
                  </span>
                  <CopyUrl />
                </div>
                <span className="note" style={{ transform: "rotate(-2deg)", alignSelf: "center" }}>
                  free, no keys
                </span>
              </div>
            </Reveal>
            <div className="starburst-wrap">
              <Starburst line1="23" line2="tools!" />
            </div>
          </div>

          <Reveal className="hero-stage" delay={150}>
            <span className="tape tl" aria-hidden="true" />
            <LiveTerminal />
            <span className="tape br" aria-hidden="true" />
            <p className="term-caption">fig. 1 — the shelf, listing itself live</p>
          </Reveal>
        </div>
      </header>

      <Ticker />

      {/* ---------- receipts: palette demo + stat scraps ---------- */}
      <section className="section" aria-label="Receipts">
        <div className="container">
          <div className="proof-grid">
            <Reveal className="proof-palette">
              <CmdPalette />
            </Reveal>
            <div className="proof-stats">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 90}>
                  <div className="scrap">
                    <span className="scrap-num">{s.num}</span>
                    <span className="scrap-label">{s.label}</span>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={280}>
                <p className="note" style={{ transform: "rotate(-1.5deg)", textAlign: "right" }}>
                  measured against the live server, not vibes
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- packs ---------- */}
      <section className="section" id="packs">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 720 }}>
              <span className="section-label">the drawer</span>
              <h2 className="section-title">
                Thirteen packs.{" "}
                <span className="word-green" style={{ display: "inline-block", transform: "rotate(-1deg)" }}>
                  Whole domains.
                </span>
              </h2>
              <p className="section-sub">
                Each pack bundles related references under a strict token budget —
                five thousand lines a call, paged automatically. Load what the task
                needs; nothing else rides along in your context window.
              </p>
            </div>
          </Reveal>
          <div className="pack-grid" style={{ marginTop: "var(--space-12)" }}>
            {PACKS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80} className={p.size}>
                <article className={`pack-card ${p.size} ${p.tone ?? ""}`}>
                  {p.tape && <span className="tape-bit" aria-hidden="true" />}
                  <span className="pack-name">{p.name}</span>
                  <span className="pack-desc">{p.desc}</span>
                  <span className="pack-count">
                    {p.files} {p.files === 1 ? "file" : "files"} · token-budgeted
                  </span>
                </article>
              </Reveal>
            ))}
            <Reveal delay={160} className="pack-sm">
              <div className="pack-card note-cell">
                <p className="note" style={{ textAlign: "center" }}>
                  that's the whole drawer —
                  <br />
                  new clippings land often ✷
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- tools index ---------- */}
      <section className="section" id="tools">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 700 }}>
              <span className="section-label">index of instruments</span>
              <h2 className="section-title">Seven tools, sharp ones.</h2>
              <p className="section-sub">
                Every module is dependency-free and guarded — the entire server
                compiles down to a single Worker bundle.
              </p>
            </div>
          </Reveal>
          <div style={{ marginTop: "var(--space-12)" }}>
            <Reveal delay={120}>
              <div className="modules" role="list">
                {MODULES.map((m, i) => (
                  <div className="module" role="listitem" key={m.name}>
                    <span className="module-no">{String(i + 1).padStart(2, "0")}</span>
                    <span className="module-name">{m.name}</span>
                    <span className="module-desc">{m.desc}</span>
                    <span className="module-check">
                      <SquiggleCheck />
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- how ---------- */}
      <section className="section" id="how">
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: 640 }}>
              <span className="section-label">procedure</span>
              <h2 className="section-title">Paste. Load. Ship.</h2>
            </div>
          </Reveal>
          <div className="steps" style={{ marginTop: "var(--space-12)" }}>
            {[
              {
                n: "01",
                t: "Point your client",
                d: "Paste the endpoint into Claude Desktop, Claude Code, Cursor, Codex, or opencode — copy-paste configs on the setup guide.",
              },
              {
                n: "02",
                t: "Load the contract",
                d: "load_contract reads the skill definition and policy digest first, so your agent knows the house rules.",
              },
              {
                n: "03",
                t: "Build, tested",
                d: "Packs load per task; the agent builds against loaded references, scans its own output, ships clean.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="step">
                  <span className="step-pin" aria-hidden="true" />
                  <div className="step-num">{s.n}</div>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- connect band ---------- */}
      <section className="section" id="connect">
        <div className="container">
          <Reveal>
            <div className="connect-band">
              <p className="eyebrow" style={{ color: "var(--paper)" }}>
                <span className="led" aria-hidden="true" />
                ready when you are
              </p>
              <h2 style={{ marginTop: 14 }}>Dial your client in.</h2>
              <p className="hero-sub" style={{ maxWidth: "48ch" }}>
                Stateless JSON-RPC over streamable HTTP. Paste the URL, restart,
                done — the setup guide has copy-paste configs for every client.
              </p>
              <div className="cta-row">
                <div className="endpoint-box">
                  <span className="endpoint-url">
                    <MCPUrl />
                  </span>
                  <CopyUrl />
                </div>
                <Link href="/connect" className="btn btn-primary">
                  Open the setup guide
                </Link>
              </div>
            </div>
          </Reveal>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "var(--space-4)" }}>
            <Sparkle size={26} />
          </div>
        </div>
      </section>

      {/* ---------- footer ---------- */}
      <footer className="footer">
        <div className="container">
          <Reveal>
            <div className="footer-wordmark">
              Prompt<span style={{ color: "var(--orange)" }}>Mika</span>
            </div>
          </Reveal>
          <div className="footer-inner">
            <span>MCP server · v3.5.0 · 23 tools · 162 references</span>
            <div className="footer-links">
              <Link href="/design">design</Link>
              <Link href="/skill">skill</Link>
              <Link href="/claude">claude</Link>
              <Link href="/connect">setup</Link>
              <a href="#packs">packs</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
