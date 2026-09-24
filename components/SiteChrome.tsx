import Link from "next/link";

export function SiteNav() {
  return (
    <nav className="pm-nav" aria-label="Primary">
      <Link href="/" className="pm-brand">
        <span className="pm-brand-mark" aria-hidden="true">M</span>
        <span>PromptMika</span>
      </Link>
      <div className="pm-nav-links">
        <Link href="/#why">Why</Link>
        <Link href="/#tools">Tools</Link>
        <Link href="/templates">Templates</Link>
        <Link href="/design">Design</Link>
        <Link href="/guide">Guide</Link>
      </div>
      <Link href="/connect" className="pm-nav-cta">Connect <span>↗</span></Link>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="pm-footer">
      <div className="pm-footer-brand">
        <span className="pm-brand-mark" aria-hidden="true">M</span>
        <strong>PromptMika</strong>
      </div>
      <p>Context, references, templates, web research, and verification for coding agents.</p>
      <div className="pm-footer-links">
        <Link href="/templates">25 templates</Link>
        <Link href="/design">58 styles</Link>
        <Link href="/skill">Skill</Link>
        <Link href="/connect">Connect</Link>
      </div>
    </footer>
  );
}
