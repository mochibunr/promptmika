# Vulnerability Catalog: Web Frontend Languages

Applies to: HTML, CSS, JavaScript, TypeScript, and all web frameworks

## Cross-Site Scripting (XSS)

XSS occurs when untrusted data is rendered in a browser without proper output
encoding, allowing attackers to execute scripts in the victim's context.

Types:
- Stored XSS: malicious payload persists in the application (database, comments)
- Reflected XSS: payload in URL parameters reflected in the response
- DOM-based XSS: client-side JavaScript writes untrusted data to the DOM
- Template injection: server-side template engines execute user input as code

Root causes: Missing output encoding, innerHTML with user data, document.write,
eval with dynamic strings, href with javascript: URLs, React dangerouslySetInnerHTML,
Vue v-html with untrusted content.

Detection: XSS scanners (OWASP ZAP, Burp Suite), static analysis (ESLint
security plugins, Semgrep), manual testing.

Remediation: Encode all output based on context (HTML entities, JavaScript
escaping, CSS escaping, URL encoding). Use framework auto-escaping (React's
JSX, Vue's {{ }}, Angular's interpolation). Implement Content Security Policy.
Validate and sanitize input on entry. Use DOMPurify for HTML sanitization.
Never use innerHTML, document.write, or eval with untrusted data.

## Cross-Site Request Forgery (CSRF)

CSRF tricks authenticated users into performing unintended actions on a web
application.

Root causes: State-changing operations via GET requests, missing anti-CSRF
tokens, insecure cookie settings, missing SameSite attributes.

Detection: CSRF testing tools, static analysis, manual testing.

Remediation: Use anti-CSRF tokens for all state-changing operations. Implement
SameSite=Strict or SameSite=Lax cookie attributes. Use custom headers that
require CORS preflight. Validate the Origin and Referer headers.

## Clickjacking / UI Redressing

Attackers embed a target site in a transparent iframe to trick users into
clicking hidden elements.

Root causes: Missing X-Frame-Options header, missing Content-Security-Policy
frame-ancestors directive, allowing the site to be framed by any origin.

Remediation: Set X-Frame-Options: DENY or SAMEORIGIN. Use CSP frame-ancestors
to specify allowed framing origins. Implement frame-busting JavaScript as a
fallback.

## Insecure Direct Object References (IDOR)

Users can access resources by manipulating identifiers in URLs or parameters.

Root causes: Exposing internal database IDs, missing authorization checks on
resource access, predictable resource identifiers.

Remediation: Use indirect reference maps (UUIDs instead of sequential IDs).
Implement authorization checks on every resource access. Validate ownership
before serving data.

## Client-Side Prototype Pollution

Modifying Object.prototype in the browser affects all JavaScript execution.

Root causes: Merging URL parameters into objects without key validation,
recursive object assignment from user input, JSON parsing with revivers.

Remediation: Use Object.create(null) for dictionaries. Validate all keys.
Freeze prototypes. Avoid lodash merge with untrusted data.

## Insecure Content Security Policy

A weak or missing CSP allows execution of inline scripts and loading of
untrusted resources.

Root causes: script-src 'unsafe-inline' or 'unsafe-eval', missing CSP
entirely, overly permissive directives.

Remediation: Use strict CSP with nonces or hashes for inline scripts. Define
specific allowed sources for each directive. Use report-uri or report-to for
violation monitoring. Start with report-only mode before enforcement.

## Dependency Supply-Chain Attacks

Malicious or compromised npm packages inject code into applications.

Root causes: Installing packages without verification, using unpinned versions,
malicious post-install scripts, compromised maintainer accounts.

Detection: npm audit, Snyk, Socket.dev, dependency confusion scanners.

Remediation: Use package-lock.json or yarn.lock. Verify package integrity with
npm audit signatures. Use private registries. Review dependency changes.
Enable npm's provenance attestations.

## Insecure Storage

Storing sensitive data in localStorage, sessionStorage, or cookies without
protection.

Root causes: Storing JWTs in localStorage (vulnerable to XSS), storing
passwords client-side, missing encryption for sensitive cookies.

Remediation: Store tokens in httpOnly, secure, SameSite cookies. Use
sessionStorage only for non-sensitive data. Encrypt sensitive data before
client-side storage. Use the Web Crypto API for client-side encryption.

## CSS Injection

Malicious CSS can exfiltrate data, track users, or manipulate the UI.

Root causes: Allowing user-controlled CSS, importing external stylesheets
without validation, CSS expressions in legacy browsers.

Remediation: Sanitize user-controlled CSS. Use strict CSP style-src directives.
Avoid allowing arbitrary CSS injection. Validate CSS property values.

## WebSocket Security

Unsecured WebSocket connections can be hijacked or used for unauthorized
communication.

Root causes: Missing authentication on WebSocket connections, no origin
validation, unencrypted ws:// instead of wss://, missing rate limiting.

Remediation: Authenticate WebSocket connections before accepting messages.
Validate the Origin header. Use wss:// in production. Implement message rate
limiting and size limits. Validate all message formats.
