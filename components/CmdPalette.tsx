"use client";

import { useEffect, useRef, useState } from "react";

type Row = { title: string; detail: string; tag: string };
type Scene = { query: string; rows: Row[]; status: string };

const SCENES: Scene[] = [
  {
    query: "make me a login page",
    rows: [
      { title: "load_reference", detail: "horizontal-craft/form-validation.md", tag: "ref" },
      { title: "load_reference", detail: "vuln_catalogs/web_frontend.md", tag: "ref" },
      { title: "security_scan", detail: "./src — 0 HIGH · 0 MEDIUM · 0 LOW", tag: "scan" },
    ],
    status: "shipped · tested · secure",
  },
  {
    query: "build a REST API for users",
    rows: [
      { title: "search_references", detail: '"sql injection" — 4 matches', tag: "search" },
      { title: "generate_scaffold", detail: "python · user-api · 14 files · CI wired", tag: "gen" },
    ],
    status: "scaffold ready",
  },
  {
    query: "why is my app slow",
    rows: [
      { title: "web_search", detail: '"postgres N+1 detection" — 8 results', tag: "web" },
      { title: "load_reference", detail: "performance_guide.md", tag: "ref" },
      { title: "fix applied", detail: "3 queries batched · 830ms → 9ms", tag: "done" },
    ],
    status: "measured, not guessed",
  },
];

const REDUCED =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function CmdPalette() {
  const [scene, setScene] = useState(0);
  const [chars, setChars] = useState(0);
  const [rowsShown, setRowsShown] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (REDUCED) {
      setChars(SCENES[0].query.length);
      setRowsShown(SCENES[0].rows.length);
      return;
    }
    let dead = false;
    const s = SCENES[scene % SCENES.length];

    if (chars < s.query.length) {
      timer.current = setTimeout(() => !dead && setChars(chars + 1), 34 + Math.random() * 40);
    } else if (rowsShown < s.rows.length) {
      timer.current = setTimeout(() => !dead && setRowsShown(rowsShown + 1), 420);
    } else {
      timer.current = setTimeout(() => {
        if (dead) return;
        setScene((v) => v + 1);
        setChars(0);
        setRowsShown(0);
      }, 3200);
    }
    return () => {
      dead = true;
      if (timer.current) clearTimeout(timer.current);
    };
  }, [chars, rowsShown, scene]);

  const s = SCENES[scene % SCENES.length];
  const visible = s.rows.slice(0, REDUCED ? s.rows.length : rowsShown);

  return (
    <div className="palette-wrap">
      <div className="palette" role="img" aria-label="Animated demo of the PromptMika command palette processing prompts">
        <div className="palette-query">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M11 11l3.4 3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="palette-typed">{s.query.slice(0, chars)}</span>
          <span className="term-caret" aria-hidden="true" />
        </div>
        <div className="palette-rows">
          {visible.map((r, i) => (
            <div className={`palette-row${i === 0 && rowsShown <= i + 1 ? " active" : ""}`} key={`${scene}-${i}`}>
              <span className={`row-glyph g-${r.tag}`} aria-hidden="true" />
              <span className="row-title">{r.title}</span>
              <span className="row-detail">{r.detail}</span>
            </div>
          ))}
          {visible.length === 0 && (
            <div className="palette-row ghost">
              <span className="row-title">thinking…</span>
            </div>
          )}
        </div>
        <div className="palette-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> run</span>
          <span className="palette-status">✓ {s.status}</span>
        </div>
      </div>
      <p className="term-caption">Fig. 1 — a session through the library, roughly</p>
    </div>
  );
}