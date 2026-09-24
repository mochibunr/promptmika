"use client";

import { useEffect, useState } from "react";

type Line = { text: string; cls: string };

const FALLBACK = [
  "DESIGN_BIBLE.md",
  "horizontal-craft/anti-ai-slop.md",
  "vuln_catalogs/web_frontend.md",
  "STATE_MANAGEMENT.md",
  "TESTING_PATTERNS.md",
  "performance_guide.md",
  "API_INTEGRATION.md",
  "TOKEN_EFFICIENCY.md",
  "landing-page.md",
  "quality-gate.md",
];

const PREFACE: Line[] = [
  { text: "$ promptmika --open", cls: "cmd" },
  { text: "tools/list \u00b7 37 tools", cls: "dim" },
  { text: "list_references \u00b7 162 files \u00b7 reading shelf\u2026", cls: "dim" },
];

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function LiveTerminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    let cancelled = false;

    const build = async () => {
      let names: string[] = FALLBACK;
      try {
        const res = await fetch("/api/mcp", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text/event-stream",
          },
          body: JSON.stringify({
            jsonrpc: "2.0",
            id: 1,
            method: "tools/call",
            params: { name: "list_references", arguments: {} },
          }),
        });
        const data = await res.json();
        const text: string = data?.result?.content?.[0]?.text ?? "";
        const parsed = text
          .split("\n")
          .filter((l) => l.startsWith("- "))
          .map((l) => l.slice(2))
          .filter(Boolean);
        if (parsed.length > 0) names = parsed;
      } catch {
        // fallback list — on the wire this always succeeds
      }
      if (cancelled) return;

      const fileLines: Line[] = names.slice(0, 10).map((f) => ({ text: f, cls: "file" }));
      const tail: Line[] =
        names.length > 10
          ? [
              { text: `\u2026 +${names.length - 10} more`, cls: "dim" },
              { text: "\u2713 shelf loaded \u00b7 ready to build", cls: "ok" },
            ]
          : [{ text: "\u2713 shelf loaded \u00b7 ready to build", cls: "ok" }];

      const all = [...PREFACE, ...fileLines, ...tail];
      setLines(all);

      if (reduceMotion()) {
        setShown(all.length);
        return;
      }
      let i = 0;
      const step = () => {
        if (cancelled) return;
        i += 1;
        setShown(i);
        if (i < all.length) setTimeout(step, 40);
      };
      setTimeout(step, 350);
    };

    build();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="terminal" role="log" aria-label="Live: the server lists its own references">
      <div className="term-bar">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-title">promptmika / session</span>
        <span className="term-state">
          <span className="status-dot" />
          live
        </span>
      </div>
      <div className="term-body">
        {lines.slice(0, shown).map((l, i) => (
          <div key={i} className={`tl ${l.cls}`}>
            {l.text}
          </div>
        ))}
        <span className="term-caret" aria-hidden="true" />
      </div>
    </div>
  );
}