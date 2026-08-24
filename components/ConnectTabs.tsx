"use client";

import { useEffect, useState } from "react";

const PANES = [
  {
    id: "claude-desktop",
    label: "Claude Desktop",
    lang: "json",
    code: (url: string) =>
      JSON.stringify(
        { mcpServers: { promptmika: { type: "http", url } } },
        null,
        2
      ),
    note: "Paste into claude_desktop_config.json, then restart Claude Desktop.",
  },
  {
    id: "claude-code",
    label: "Claude Code",
    lang: "sh",
    code: (url: string) => `claude mcp add --transport http promptmika ${url}`,
    note: "Run it in any project. Tools appear under the promptmika server.",
  },
  {
    id: "cursor",
    label: "Cursor",
    lang: "json",
    code: (url: string) =>
      JSON.stringify({ mcpServers: { promptmika: { url } } }, null, 2),
    note: "Settings, MCP, then add a new server of type URL.",
  },
  {
    id: "opencode",
    label: "opencode",
    lang: "json",
    code: () => JSON.stringify({ plugin: ["promptmika-pack"] }, null, 2),
    note: "Or pass options: [\"promptmika-pack\", { \"url\": \"...\" }].",
  },
];

export default function ConnectTabs() {
  const [origin, setOrigin] = useState("https://promptmika.vercel.app");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") setOrigin(window.location.origin);
  }, []);

  const pane = PANES[active];
  const code = pane.code(`${origin}/api/mcp`);

  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };

  return (
    <div className="tabs" role="tablist" aria-label="MCP client setup">
      <div className="tabs-rail" role="presentation">
        {PANES.map((p, i) => (
          <button
            key={p.id}
            role="tab"
            id={`tab-${p.id}`}
            aria-selected={i === active}
            aria-controls={`panel-${p.id}`}
            tabIndex={i === active ? 0 : -1}
            className={`tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") setActive((active + 1) % PANES.length);
              if (e.key === "ArrowLeft")
                setActive((active - 1 + PANES.length) % PANES.length);
            }}
          >
            <span className="tab-led" aria-hidden="true" />
            {p.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${pane.id}`}
        aria-labelledby={`tab-${pane.id}`}
        className="tabs-panel"
      >
        <div className="panel-chrome">
          <span className="chrome-dot" aria-hidden="true" />
          <span className="chrome-dot" aria-hidden="true" />
          <span className="chrome-dot" aria-hidden="true" />
          <span className="chrome-title">{pane.label}</span>
          <button type="button" className="copy-btn" onClick={copy}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="panel-code">
          <code>{code}</code>
        </pre>
        <p className="panel-note">{pane.note}</p>
      </div>
    </div>
  );
}
