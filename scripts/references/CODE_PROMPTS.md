---
version: 2.1.0
last_updated: 2026-06-09
related:
  - iteration-workflow.md (Build-Test-Loop)
  - CONTEXT_ENGINE.md (cross-skill injection target)
  - vuln_catalogs/ (security references)
  - STATE_MANAGEMENT.md (state patterns)
  - API_INTEGRATION.md (API patterns)
  - TESTING_PATTERNS.md (testing strategies)
---

# Code Prompts — Software Engineering and Development

## Domain-Specific Context to Inject
When refining a coding or software engineering prompt, automatically include context that users forget to mention.

### Environment and Tooling
- Programming language and minimum version.
- Framework and version: React eighteen, Django five, Spring Boot three.
- Build tool and package manager: Vite, Webpack, Cargo, Poetry, npm, pnpm.
- Testing framework: Jest, Vitest, pytest, Rust test, Google Test.
- Linting and formatting: ESLint, Prettier, Black, Clippy, rustfmt.
- Continuous integration requirements: test coverage thresholds, static analysis gates.

### Code Quality Standards
- Error handling strategy: exceptions, result types, error codes, logging.
- Input validation approach: schema validation, manual checks, parser combinators.
- Documentation requirements: inline comments, doc strings, external documentation, architecture decision records.
- Naming conventions: camel case, snake case, Hungarian notation, domain-specific vocabulary.
- Complexity limits: maximum function length, maximum cyclomatic complexity, maximum nesting depth.

### Architectural Constraints
- Design pattern requirements: model-view-controller, microservices, event-driven, hexagonal, clean architecture.
- Database and storage: PostgreSQL, MongoDB, Redis, S3, local filesystem.
- Caching strategy: in-memory, distributed, cache invalidation rules.
- Concurrency model: threads, async-await, actors, coroutines.
- State management: centralized, distributed, event sourcing, command query responsibility segregation.

### Security and Compliance
- Authentication mechanism: OAuth, SAML, JWT, session cookies, API keys.
- Authorization model: role-based, attribute-based, access control lists.
- Data privacy: personally identifiable information handling, encryption at rest and in transit, retention policies.
- Regulatory requirements: GDPR, HIPAA, SOC two, PCI DSS.
- Secret management: environment variables, vault services, key management services.

## Cross-Skill Injection for Code
When the user's prompt involves software development, automatically inject the following:

### From Security Handbook
- Never trust input. Validate length, type, range, encoding, structure at all boundaries.
- Use parameterized queries exclusively. Never concatenate user input into SQL.
- Never pass user input to system execution functions. Use allowlists.
- Sanitize all output for context. Content security policy headers mandatory.
- Cryptographically secure randomness for tokens, passwords, sessions. Never standard library random.
- Password storage: Argon2id minimum fifteen megabytes memory, three iterations.
- Symmetric encryption: AES-256-GCM or ChaCha20-Poly1305. Unique nonce per encryption.
- Asymmetric: Ed25519 signatures, X25519 key exchange.
- TLS minimum version one point three.
- Session tokens two hundred fifty-six bits entropy. HttpOnly Secure SameSite Strict.
- JWT only for short-lived access tokens under fifteen minutes.

### From Context Engine
- Track all file names, function names, architecture decisions, and open issues across conversation.
- Quote exact identifiers from previous messages. Never approximate.
- If previous solution rejected or modified, current state is last agreed version. Prior versions obsolete.
- Maintain mental state map: tech stack, design patterns, directory structure.
- Before answering, scan last ten exchanges. Search full history for relevant context.
- If user corrects you, acknowledge, explain, apply permanently. Never say as I mentioned earlier if you said opposite.

## Code Prompt Enhancement Patterns

### Pattern One: From Feature Request to Specification
User input: build a user authentication system.
Refinement additions:
- Define the authentication flows: registration, login, password reset, email verification, multi-factor authentication.
- Define the session strategy: stateless JWT, stateful sessions, refresh token rotation.
- Define the password policy: minimum length, complexity requirements, breach detection.
- Define the rate limiting: attempts per minute, lockout duration, notification behavior.
- Define the audit requirements: log every authentication event, retention period, alert triggers.
- Inject Build-Test-Loop: build auth modules, test with npm test, detect failures, loop until clean, verify end-to-end.

### Pattern Two: From Bug Description to Debug Prompt
User input: fix the error in my code.
Refinement additions:
- Request the complete error message including stack trace and line numbers.
- Request the relevant code snippet and the surrounding context.
- Request the environment details: operating system, language version, dependency versions.
- Request the reproduction steps: exact inputs, expected output, actual output.
- Instruct the target AI to explain the root cause before proposing a fix.
- Instruct the target AI to provide a test case that would have caught the bug.
- Inject Build-Test-Loop: build with correct fix, test with full suite, detect regressions, loop until clean.

### Pattern Three: From Refactor Request to Safe Transformation
User input: refactor this to be cleaner.
Refinement additions:
- Define what cleaner means: reduced cyclomatic complexity, eliminated duplication, improved naming, extracted functions.
- Define the safety boundary: behavior must remain identical, all existing tests must pass, no external interface changes.
- Define the scope: one function, one file, one module, or the entire codebase.
- Define the performance constraints: no regressions in time complexity, no regressions in space complexity.
- Instruct the target AI to produce the refactored code and a diff showing the changes.
- Inject Build-Test-Loop: refactor, test existing suite, detect behavior changes, loop until clean.

### Pattern Four: From Algorithm Request to Rigorous Specification
User input: sort this data faster.
Refinement additions:
- Define the data characteristics: size, distribution, memory constraints, stability requirement.
- Define the comparison model: comparison-based or non-comparison-based.
- Define the parallelization opportunity: single-threaded, multi-threaded, distributed.
- Define the existing approach and its bottleneck.
- Instruct the target AI to analyze complexity, prove correctness, and benchmark against the baseline.
- Inject Build-Test-Loop: implement algorithm, test with benchmark suite, detect performance regressions, loop until clean.

## Anti-Patterns to Forbid in Code Prompts
- Do not request code without specifying error handling. Silent failures are unacceptable.
- Do not request code without specifying input validation. Trusting input is unacceptable.
- Do not request optimizations without establishing a baseline and success metric.
- Do not request rewrites without defining the safety boundary and test requirements.
- Do not request integrations without specifying fallback behavior and timeout handling.
- Do not omit security considerations for any data handling, authentication, or network operation.
