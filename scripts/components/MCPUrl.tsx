"use client";

import { useEffect, useState } from "react";

export function MCPUrl() {
  const [url, setUrl] = useState("https://<your-project>.vercel.app/api/mcp");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}/api/mcp`);
    }
  }, []);

  return <span>{url}</span>;
}

export function CopyUrl() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    const url = `${window.location.origin}/api/mcp`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    });
  };

  return (
    <button className={`copy-btn${copied ? " ok" : ""}`} onClick={copy}>
      {copied ? "Copied!" : "Copy URL"}
    </button>
  );
}
