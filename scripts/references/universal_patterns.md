# Universal Security and Architecture Patterns

## The Universal Vulnerability Taxonomy

Every programming language, regardless of paradigm or runtime, is susceptible
to a core set of vulnerability classes. Understanding these universal classes
allows you to reason about security across language boundaries.

### Injection
Injection occurs when untrusted data is interpreted as code by an interpreter.
This is the most common and dangerous vulnerability class across all languages.

Manifestations:
- SQL injection in database queries
- Command injection in shell execution
- LDAP injection in directory queries
- XPath injection in XML processing
- NoSQL injection in document databases
- Template injection in rendering engines
- Expression language injection in frameworks
- Code injection in eval or dynamic execution

Defense: Never concatenate untrusted input into interpreted strings. Use
parameterized queries, prepared statements, safe APIs, and strict input
validation. Treat all external input as hostile until proven otherwise.

### Broken Authentication
Weak or missing authentication allows attackers to impersonate users or
services.

Manifestations:
- Default credentials
- Weak password policies
- Missing multi-factor authentication
- Session fixation
- Insecure session storage
- JWT secret exposure
- OAuth misconfiguration

Defense: Use strong, adaptive hashing for passwords (Argon2, bcrypt, scrypt).
Implement MFA. Use short-lived tokens with secure rotation. Store secrets in
hardware security modules or key management services.

### Insecure Deserialization
Deserializing untrusted data can lead to remote code execution if the
serializer instantiates arbitrary types or executes methods during
reconstruction.

Manifestations:
- Java ObjectInputStream with untrusted streams
- Python pickle with untrusted bytes
- PHP unserialize with user-controlled strings
- .NET BinaryFormatter with untrusted input
- YAML loading with unsafe constructors
- XML external entity expansion

Defense: Use safe serialization formats (JSON with schema validation,
Protocol Buffers with known types). Validate all deserialized data against
strict schemas. Never deserialize directly into polymorphic types from
untrusted sources.

### Path Traversal
Path traversal allows attackers to access files outside the intended directory
using relative path sequences or absolute paths.

Manifestations:
- File upload handlers without path validation
- Static file servers with user-controlled paths
- Log file viewers with filename parameters
- Report generators with template paths

Defense: Canonicalize all paths and verify they remain within the allowed base
directory. Use allow-lists for permitted filenames. Never expose raw filesystem
paths to users.

### Server-Side Request Forgery (SSRF)
SSRF occurs when a server makes requests to unintended destinations based on
user-controlled URLs.

Manifestations:
- Webhooks with unvalidated URLs
- Image proxies fetching arbitrary URLs
- PDF generators rendering remote content
- API integrations with user-configured endpoints

Defense: Validate URLs against strict allow-lists. Block private IP ranges,
localhost, and internal DNS names. Use network segmentation to limit server
outbound access.

### Cross-Site Scripting (XSS)
XSS occurs when untrusted data is rendered in a browser without proper output
encoding.

Manifestations:
- Reflected XSS through URL parameters
- Stored XSS through persistent user content
- DOM-based XSS through client-side JavaScript
- Template injection in server-side rendering

Defense: Encode all output based on context (HTML, JavaScript, CSS, URL).
Use Content Security Policy headers. Validate and sanitize input on entry.
Use modern frameworks with automatic escaping.

### Cross-Site Request Forgery (CSRF)
CSRF tricks authenticated users into performing unintended actions.

Defense: Use anti-CSRF tokens for state-changing operations. Implement SameSite
cookie attributes. Use custom headers that require CORS preflight.

### Broken Access Control
Missing or incorrect authorization checks allow users to access resources or
perform actions beyond their privileges.

Manifestations:
- Missing authorization on API endpoints
- Insecure direct object references
- Privilege escalation through parameter tampering
- CORS misconfiguration allowing cross-origin access

Defense: Deny by default. Implement authorization checks on every endpoint.
Use indirect reference maps. Validate ownership before resource access.

### Secrets Exposure
Sensitive data leaks through source code, logs, error messages, or
configuration files.

Manifestations:
- Hardcoded API keys in repositories
- Passwords in configuration files
- Database connection strings in logs
- Stack traces revealing internal paths
- Debug endpoints in production

Defense: Use secret management systems. Scan repositories for secrets with
tools like GitLeaks or TruffleHog. Sanitize logs. Return generic error messages
in production.

### Dependency and Supply-Chain Risk
Third-party dependencies can introduce vulnerabilities, backdoors, or
compromised code.

Manifestations:
- Known vulnerabilities in dependencies
- Typosquatting in package registries
- Compromised maintainer accounts
- Malicious packages in public repositories
- Transitive dependency vulnerabilities

Defense: Pin dependency versions. Use lock files. Scan dependencies with
Snyk, OWASP Dependency-Check, or language-specific tools. Use private
registries for internal packages. Review dependency changes in pull requests.

### Logic Flaws
Logic flaws occur when application behavior deviates from intended business
rules due to incorrect implementation.

Manifestations:
- Race conditions in financial transactions
- Time-of-check to time-of-use vulnerabilities
- Business rule bypass through parameter manipulation
- State machine violations
- Incorrect authorization logic

Defense: Threat model business logic. Use atomic operations for critical
sections. Implement proper state machines. Validate all state transitions.

## Defense in Depth

No single defense is sufficient. Apply multiple layers:

1. Input validation at the boundary
2. Parameterized queries and safe APIs
3. Output encoding based on context
4. Authentication and authorization on every request
5. Encryption for data at rest and in transit
6. Logging and monitoring for anomaly detection
7. Rate limiting and resource quotas
8. Principle of least privilege
9. Regular security scanning and dependency updates
10. Incident response planning

## Secure Defaults

Every project should start secure:

- Enable all compiler security flags
- Use the strictest linter rules
- Enable dependency vulnerability scanning
- Configure Content Security Policy
- Set secure HTTP headers
- Use HTTPS everywhere
- Implement proper logging without sensitive data
- Require authentication by default
- Validate all inputs
- Escape all outputs
