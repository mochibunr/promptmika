# Vulnerability Catalog: Dynamic and Scripting Languages

Applies to: Python, Ruby, PHP, JavaScript, TypeScript, Perl, Lua, Shell, Bash,
PowerShell, Raku, Tcl, awk, sed, AppleScript, AutoHotkey, VBScript, Batch

## Injection Attacks

Dynamic languages are particularly susceptible to injection because of their
flexible string handling and eval capabilities.

Manifestations:
- SQL injection through string formatting or concatenation
- Command injection through os.system, subprocess, backticks, or exec
- Code injection through eval, exec, or dynamic code execution
- Template injection in server-side rendering engines
- XPath injection in XML processing
- LDAP injection in directory queries

Root causes: String interpolation with untrusted data, dynamic query
construction, lack of parameterized APIs, trusting client input.

Detection: Static analysis (Bandit for Python, Brakeman for Ruby, ESLint
security plugins, Semgrep), dynamic testing, code review.

Remediation: Use parameterized queries (psycopg2, SQLAlchemy in Python;
PDO in PHP; ActiveRecord in Ruby). Use safe subprocess APIs with argument lists
instead of shell strings. Never use eval with untrusted input. Sanitize and
validate all input. In JavaScript/TypeScript, use template literal tag
functions for safe HTML construction.

## Path Traversal

File path manipulation allows access to files outside the intended directory.

Root causes: Using user input in file paths without validation, allowing
relative path sequences (../), accepting absolute paths, missing path
canonicalization.

Detection: Static analysis, dynamic testing, code review.

Remediation: Canonicalize paths and verify they remain within the allowed base
directory. Use allow-lists for permitted filenames. In Python, use
pathlib.Path.resolve(). In Node.js, use path.resolve() and check with
startsWith(). Never expose raw filesystem paths.

## Command Execution from Untrusted Input

Passing user input to shell execution functions enables arbitrary command
execution.

Root causes: os.system, subprocess with shell=True (Python), backticks,
exec, passthru, system (PHP), backticks and system (Ruby), child_process
with shell (Node.js).

Detection: Static analysis, taint tracking, code review.

Remediation: Use subprocess with shell=False and explicit argument lists. In
Node.js, use execFile or spawn without shell. In PHP, use escapeshellarg
and escapeshellcmd if shell execution is unavoidable. Prefer library APIs
over shell commands.

## Prototype Pollution (JavaScript/TypeScript)

Modifying Object.prototype through malicious input affects all objects in the
application.

Root causes: Merging user-controlled objects without key validation, recursive
object assignment, JSON parsing with object creation, lodash merge with
untrusted data.

Detection: Static analysis (eslint-plugin-security), dynamic testing,
prototype pollution scanners.

Remediation: Use Object.create(null) for dictionaries. Validate all keys
before assignment. Use Object.freeze on prototypes. Use structuredClone instead
of JSON.parse for deep copying. Use libraries that prevent prototype pollution
(Object.assign with validation, safe-deep-clone).

## Insecure File Handling

Improper file operations can lead to information disclosure, arbitrary file
writes, or code execution.

Root causes: Writing to user-controlled paths, reading sensitive files based
on user input, insecure temporary file creation, race conditions in file
operations, missing permission checks.

Detection: Static analysis, dynamic testing, code review.

Remediation: Use secure temporary file APIs (tempfile in Python, tmpfile in
PHP, Tempfile in Ruby). Set restrictive permissions on created files. Validate
all file operations against allow-lists. Use atomic file operations where
possible.

## Dependency and Package Attacks

Third-party packages can contain malicious code, backdoors, or known
vulnerabilities.

Root causes: Installing packages without verification, using unpinned
versions, typosquatting, compromised maintainer accounts, malicious post-install
scripts.

Detection: Dependency scanners (Snyk, npm audit, pip-audit, bundler-audit),
integrity verification, SBOM analysis.

Remediation: Pin dependency versions with lock files. Verify package checksums.
Use private registries for internal packages. Review dependency changes in
pull requests. Use tools like Dependabot or Renovate for automated updates.
Scan with language-specific tools regularly.

## Server-Side Request Forgery (SSRF)

Server makes requests to unintended destinations based on user-controlled URLs.

Root causes: Webhooks with unvalidated URLs, image proxies, PDF generators,
API integrations with user-configured endpoints, URL fetching with user input.

Detection: Static analysis, dynamic testing, network monitoring.

Remediation: Validate URLs against strict allow-lists. Block private IP ranges,
localhost, and internal DNS names. Use network segmentation. Implement URL
parsing with scheme validation (allow only http/https).

## Insecure Deserialization

Deserializing untrusted data can lead to code execution.

Root causes: pickle.loads with untrusted bytes (Python), YAML.load with
unsafe constructors, JSON.parse with reviver functions that execute code,
PHP unserialize, Ruby Marshal.load.

Detection: Static analysis, dynamic testing, code review.

Remediation: Use safe deserialization: json instead of pickle in Python,
YAML.safe_load instead of YAML.load, JSON.parse without revivers for
untrusted data. Validate all deserialized data against schemas.

## Unsafe Dynamic Code Execution

Eval and similar functions execute arbitrary code.

Root causes: Using eval, exec, compile, or Function constructor with user
input. Dynamic import with user-controlled paths. Template engines that allow
code execution.

Detection: Static analysis, code review.

Remediation: Never use eval or exec with untrusted input. Use safe
alternatives: JSON.parse for data, template engines with sandboxed execution,
AST-based validators. If dynamic execution is necessary, use restricted
execution environments (sandboxing, capability-based security).

## Secrets in Source Code

Hardcoded credentials, API keys, and tokens in scripts.

Root causes: Embedding keys in configuration files, committing .env files,
hardcoding database passwords, including private keys in repositories.

Detection: Secret scanners (GitLeaks, TruffleHog, detect-secrets), pre-commit
hooks.

Remediation: Use environment variables, secret management services (AWS
Secrets Manager, Azure Key Vault, HashiCorp Vault), or encrypted
configuration files. Never commit secrets. Use .gitignore for sensitive files.

## Shell Injection (Bash/PowerShell)

Passing untrusted data to shell commands enables arbitrary execution.

Root causes: Unquoted variables in shell scripts, using eval with user input,
command substitution with untrusted data, passing user input to cmdlets in
PowerShell without parameter binding.

Detection: Static analysis (ShellCheck for Bash, PSScriptAnalyzer for
PowerShell), code review.

Remediation: Always quote variables ("$var"). Use arrays for multiple arguments.
Avoid eval. In PowerShell, use parameter binding instead of string concatenation.
Use Invoke-Expression only with validated input.
