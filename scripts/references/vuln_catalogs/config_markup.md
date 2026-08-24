# Vulnerability Catalog: Configuration and Markup Languages

Applies to: YAML, JSON, TOML, INI, XML, HTML, CSS, Markdown, LaTeX,
Dockerfile, Terraform HCL, Ansible playbooks, Puppet manifests, Chef recipes,
Makefile, CMake, Bazel Starlark, Nix, GitHub Actions YAML, Jenkinsfile,
BBCode, AsciiDoc, reStructuredText, SGML, SVG, MathML

## Secret Leakage

Configuration files are a primary source of credential exposure.

Root causes: Hardcoded API keys in YAML/JSON/TOML, database passwords in
environment variable files, private keys embedded in Docker images, tokens in
CI/CD pipeline definitions, secrets in Markdown documentation.

Detection: Secret scanners (GitLeaks, TruffleHog, detect-secrets, GitGuardian),
pre-commit hooks, repository monitoring.

Remediation: Use environment variables or secret management systems (Vault,
AWS Secrets Manager, Azure Key Vault). Reference secrets indirectly in config.
Use .gitignore for sensitive files. Scan repositories before commits. Never
embed secrets in container images; mount them at runtime.

## Unsafe Interpolation and Templating

Dynamic values inserted into configuration without proper escaping enable
injection.

Root causes: String interpolation of user input in YAML/JSON generation,
Jinja2 templates with untrusted variables in Ansible, Terraform variable
interpolation with sensitive data, Dockerfile ENV with dynamic values.

Detection: Static analysis of config generation, template security scanners,
code review.

Remediation: Use structured data APIs instead of string templating for config
generation. Validate all interpolated values. Use allow-lists for template
functions. In Terraform, use sensitive = true for variables. In Docker,
use BuildKit secrets for build-time secrets.

## YAML-Specific Vulnerabilities

YAML's flexible syntax enables unexpected type coercion and code execution.

Root causes: YAML loading with unsafe constructors (Python yaml.load without
Loader), type tags (!!python/object) executing code, YAML anchors and aliases
causing billion laughs attacks, implicit type conversion (YES -> true, 08 -> 8).

Detection: Static analysis, YAML security scanners, input validation.

Remediation: Use safe_load or safe constructors exclusively. Disable custom
tags. Validate schema after parsing. Limit alias expansion depth. Use JSON
for untrusted data interchange. Be aware of implicit type conversions.

## XML External Entity (XXE) Injection

XML parsers with DTD processing enabled can read local files and make network
requests.

Root causes: Enabling DTD processing, allowing external entities, using
vulnerable XML parsers, XInclude without restrictions.

Detection: XXE scanners, static analysis, dynamic testing.

Remediation: Disable DTD processing entirely. Disable external entities and
external parameter entities. Use safe XML parsers (defusedxml in Python). Use
JSON instead of XML for data interchange where possible.

## JSON-Specific Issues

JSON appears safe but has edge cases that enable attacks.

Root causes: Prototype pollution through __proto__ keys, JSON parsing with
reviver functions that execute code, large JSON payloads causing denial of
service, Unicode escape sequences bypassing filters.

Detection: Static analysis, payload size limits, input validation.

Remediation: Validate all JSON keys against allow-lists. Sanitize keys before
object creation. Set maximum payload sizes. Use safe JSON parsers without
arbitrary code execution. Validate Unicode escape sequences.

## Dockerfile Security

Container images can leak secrets, run as root, or include vulnerable base
images.

Root causes: Hardcoded secrets in ENV or ARG, running as root USER, using
latest tag for base images, copying entire source directories including
.git, missing .dockerignore for sensitive files.

Detection: Docker image scanners (Trivy, Clair, Snyk), Dockerfile linters
(Hadolint), secret scanners.

Remediation: Use multi-stage builds to exclude build secrets from final images.
Run as non-root user. Pin base image versions with SHA digests. Use BuildKit
secrets for sensitive build arguments. Include .dockerignore. Scan images
before deployment.

## Terraform Misconfiguration

Infrastructure-as-code can create insecure cloud resources.

Root causes: Open security groups (0.0.0.0/0), unencrypted storage, missing
access logging, overly permissive IAM policies, hardcoded credentials in
.tf files, state files with secrets in plain text.

Detection: Terraform security scanners (Checkov, tfsec, Terrascan), policy-as-code.

Remediation: Use security group rules with specific CIDR blocks. Enable
encryption at rest and in transit. Use remote state with encryption. Store
credentials in Vault or cloud secret managers. Implement policy-as-code with
Sentinel or OPA. Scan plans before apply.

## CI/CD Pipeline Vulnerabilities

CI/CD definitions can be exploited for supply-chain attacks.

Root causes: Using untrusted actions or plugins, missing input validation on
workflow triggers, secrets in pipeline logs, self-hosted runners without
isolation, pull_request_target with untrusted code checkout.

Detection: CI/CD security scanners, code review, access auditing.

Remediation: Pin action versions with SHA commits. Use least-privilege tokens.
Avoid pull_request_target for untrusted PRs. Isolate self-hosted runners.
Mask secrets in logs. Implement branch protection and required reviews.

## Makefile and Build Script Injection

Build scripts can execute arbitrary commands during compilation.

Root causes: User-controlled variables in Makefiles, shell command
substitution with untrusted data, recursive Make with untrusted subdirectories,
build scripts downloaded and executed without verification.

Detection: Static analysis of build scripts, code review, sandboxed builds.

Remediation: Quote all variables in shell commands. Validate paths before use.
Use sandboxed build environments. Verify checksums of downloaded build tools.
Avoid executing shell commands with user-controlled data.

## Markdown and Documentation XSS

Rendered documentation can contain XSS through HTML injection.

Root causes: Allowing raw HTML in Markdown, unsafe link protocols
(javascript:), SVG images with embedded scripts, untrusted user-generated
documentation.

Detection: HTML sanitization, content security policy, code review.

Remediation: Sanitize rendered Markdown with libraries like DOMPurify. Disable
raw HTML if possible. Validate link protocols. Use Content Security Policy on
documentation sites. Review user-generated content before publication.

## Nix Expression Security

Nix expressions can fetch and execute arbitrary code.

Root causes: Using untrusted nixpkgs channels, IFD (import from derivation)
with untrusted sources, missing sandboxing, binary cache poisoning.

Detection: Nix expression review, sandbox testing, binary cache verification.

Remediation: Pin nixpkgs to specific commits. Enable sandboxing. Verify binary
cache signatures. Review all IFD sources. Use pure evaluation mode.

## Ansible Playbook Security

Ansible can execute arbitrary commands on managed nodes.

Root causes: Using shell/command modules with user input, missing become
validation, untrusted inventory sources, vault files with weak passwords.

Detection: Ansible-lint, playbook review, privilege auditing.

Remediation: Use specialized modules instead of shell where possible. Validate
all variables. Use Ansible Vault for secrets. Implement least-privilege for
managed nodes. Review all tasks that use become.
