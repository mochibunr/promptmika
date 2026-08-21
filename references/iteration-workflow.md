---
version: 2.1.0
last_updated: 2026-06-09
related:
  - TOKEN_EFFICIENCY.md (compression rules)
  - SELF_IMPROVEMENT.md (ten-model simulation)
  - CODE_PROMPTS.md (Build-Test-Loop patterns)
  - FRONTEND_PROMPTS.md (frontend-specific loops)
---

# Iteration Workflow — Build-Test-Loop + Refinement Protocol

## Philosophy

Software that is not tested is not built. Every prompt that instructs an AI to produce software must include a build-test-loop. Every refinement must follow a structured workflow. This file combines both into a single mandatory protocol.

**Critical rule for output:** The refined prompt must read as a clean, natural instruction set. Never label internal sections with process names like "Build → Test → Loop" or "Step 1, Step 2, Step 3." The target AI should never see scaffolding language — it should see instructions that sound like they were written by a thoughtful human, not a system following a checklist.

---

## Part 1: Build-Test-Loop Protocol

### Step One: Build

Construct all components, modules, pages, or functions required by the specification. Build must proceed in dependency order: foundational layers first, dependent layers after. No component is considered complete until it satisfies its own specification in isolation.

### Step Two: Test

Verify every change using the appropriate verification method for the technology stack.

- **Node.js / JavaScript**: `npm build`, `npm test`, `npm run lint`, `npm run typecheck`. Zero errors, zero warnings, zero type failures.
- **Python**: `pytest`, `mypy`, `pylint`, `black --check`. Zero test failures, zero type errors, zero lint violations.
- **Rust**: `cargo build`, `cargo test`, `cargo clippy`, `cargo fmt --check`. Zero compilation errors, zero test failures, zero clippy warnings.
- **Go**: `go build`, `go test`, `go vet`, `gofmt -l`. Zero errors, zero vet issues, zero format drift.
- **Java**: `mvn compile`, `mvn test`, `checkstyle`. Zero compilation errors, zero test failures, zero style violations.
- **C / C++**: `make`, `ctest`, `cppcheck`, `valgrind`. Zero build errors, zero test failures, zero memory leaks.
- **Infrastructure / Config**: `terraform plan`, `terraform validate`, `cfn-lint`, `kubeval`. Zero plan errors, zero validation failures.
- **Documentation**: `markdownlint`, `vale`, `linkchecker`. Zero lint errors, zero style violations, zero broken links.

### Step Three: Detect

Examine test output, build logs, and verification reports for any failures, warnings, deprecations, or anomalies. Every detected issue must be logged with file path, line number, error category, and severity.

### Step Four: Loop

Return to Step One and rebuild the affected components to fix every detected issue. The loop continues until the test step produces a completely clean report with zero issues of any kind. No partial fixes. No ignoring warnings. No shipping with known defects.

### Step Five: Verify

Perform a final comprehensive verification after the loop exits clean:

- End-to-end user journey validation
- Cross-browser or cross-platform compatibility check
- Accessibility audit against target compliance level
- Performance benchmark against defined budgets
- Security scan for common vulnerability categories
- Mobile responsiveness verification at all breakpoints

### Non-Negotiable Rules

- The Build-Test-Loop block is mandatory for all software prompts. No exceptions.
- The target AI must perform the loop automatically without waiting for user confirmation between iterations.
- The target AI must report the final clean state explicitly: all tests pass, all builds clean, all scans clear.
- If the user provides an existing codebase, the loop must include regression testing: verify existing functionality remains intact after changes.

### Integration Template

Embed these instructions naturally in the prompt. Do not label them "Build-Test-Loop" — write them as direct instructions:

```
Build all components in dependency order: foundational layers first.
After each component, run [stack-appropriate test commands]. Verify zero errors, zero warnings.
If any test fails, log the failure with file, line, and error message. Rebuild the affected component. Repeat until all tests pass.
Final verification: end-to-end user journey, cross-browser compatibility, accessibility audit, performance benchmark, security scan, mobile responsiveness at all breakpoints.
```

---

## Part 2: Refinement Workflow

This workflow is mandatory. Follow it precisely every time the user asks you to refine a prompt.

### Step One: Intent Extraction

Read the user's raw input and extract the following dimensions silently before producing any output:

- **Surface intent**: what does the user literally ask for.
- **Latent intent**: what problem are they actually trying to solve. The literal ask and the real need often differ.
- **Domain**: frontend, backend, creative, systems, analysis, automation, or hybrid.
- **Audience**: who will consume the final AI output. Technical expert, layperson, executive, developer.
- **Urgency**: is this exploratory, draft-quality, or production-critical.
- **Constraints**: time, budget, technology, compatibility, regulatory, or aesthetic boundaries mentioned or implied.

### Step Two: Gap Analysis

Compare the user's raw prompt against the seven-layer anatomy of a high-fidelity prompt. Identify which layers are missing or underdeveloped:

1. Is there a role definition or is the AI expected to guess its persona.
2. Is there context or does the AI lack background to make informed decisions.
3. Is the task bounded or is it an open-ended request that will produce unfocused output.
4. Is the output format specified or will the AI choose arbitrarily.
5. Are constraints listed or will the AI include unwanted elements.
6. Are examples provided or will the AI misinterpret the desired style.
7. Is reasoning instructed or will the AI jump directly to a potentially flawed conclusion.

### Step Three: Domain Enrichment

Load the relevant domain resource file and inject domain-specific context that the user did not mention but should have:

- **Frontend**: responsive behavior, accessibility, performance budgets, browser support, design system constraints.
- **Code**: environment, quality standards, architectural constraints, security, compliance.
- **Creative**: narrative context, character context, worldbuilding, visual art parameters, content strategy.
- **Systems**: scale, reliability, infrastructure, operations, cost constraints.

### Step Four: Cross-Skill Intelligence Injection

Determine if the prompt touches domains covered by external skill knowledge. If yes, inject silently:

- **UI/UX or visual design present** → inject classical composition, grid systems, typography scale, responsive breakpoints, accessibility requirements, no-AI-slop rules.
- **Security or data protection present** → inject input validation, threat modeling, cryptography standards, session management, vulnerability prevention, defense in depth.
- **Long conversation or complex project present** → inject state tracking, consistency enforcement, verification loops, error correction, anchor points, anti-hallucination measures.

### Step Five: Vocabulary Sharpening

Replace subjective and vague words with objective and precise equivalents:

- Good → accessible to screen readers, keyboard navigable, performant under three-second load
- Fast → first contentful paint under one second, time to interactive under two point five seconds
- Modern → uses CSS grid and flexbox, supports dark mode, follows eight-pixel baseline grid
- Beautiful → uses harmonious color palette with four point five to one contrast ratios and clear visual hierarchy
- Secure → implements defense in depth with input validation, parameterized queries, content security policy, mutual TLS
- Scalable → horizontally shardable with stateless application servers and read replicas

### Step Six: Token Compression

Apply the intensity system from TOKEN_EFFICIENCY.md to the entire prompt:

- Select intensity level: LITE for complex ambiguous tasks, FULL for general use, ULTRA for expert users and simple tasks.
- Drop articles, filler, pleasantries, and hedging.
- Use fragments where meaning remains clear.
- Replace multi-word phrases with short synonyms.
- Use bullets for parallel items to eliminate conjunctions.
- Quantify with exact numbers instead of wordy quantifiers.
- Preserve proper nouns and technical terms exactly.
- Never compress examples or constraints into ambiguity.

### Step Seven: Build-Test-Loop Injection

If the prompt involves software, applications, websites, systems, or code generation, append the mandatory Build-Test-Loop block (Part 1 above).

### Step Eight: Self-Improvement Execution

Run the ten-model simulation from SELF_IMPROVEMENT.md:

1. Generate baseline draft.
2. Generate nine variants varying compression, examples, structure, constraints, role, cross-skill, simplicity, reasoning, and hybrid.
3. Critique each against clarity, completeness, measurability, feasibility, token efficiency, domain accuracy, universal compatibility, edge case coverage, and cross-skill enrichment.
4. Score, rank, select winner.
5. Apply final polish pass.
6. Stress test against short context, weak model, overeager AI, lazy AI, non-English interface, and evolving project.

### Step Nine: Delivery

Present the refined prompt to the user in a clean, copy-paste-ready format:

- Wrap the final prompt in a clearly labeled container.
- Keep explanation to 2-3 sentences max outside the prompt block.
- State the intensity level selected.
- Do NOT explain what you added inside the prompt — the prompt should read as a natural instruction set.
- Do NOT use labels like "Build → Test → Loop" inside the prompt — embed these as direct instructions.
- Invite the user to iterate: "Let me know if anything needs adjusting."

---

## Iteration Handling

If the user responds with feedback or adjustments, repeat steps one through nine incorporating the new information. Never discard previously established context unless the user explicitly overrides it. Track the prompt version implicitly and ensure each iteration is strictly superior to the previous one in both quality and token efficiency.

---

## Build-Test-Loop by Stack (Quick Reference)

| Stack | Build | Test | Lint/Check |
|-------|-------|------|------------|
| Node.js | `npm build` | `npm test` | `npm run lint && npm run typecheck` |
| Python | — | `pytest` | `mypy && pylint && black --check` |
| Rust | `cargo build` | `cargo test` | `cargo clippy && cargo fmt --check` |
| Go | `go build` | `go test` | `go vet && gofmt -l` |
| Java | `mvn compile` | `mvn test` | `checkstyle` |
| C/C++ | `make` | `ctest` | `cppcheck && valgrind` |
| Infra | `terraform plan` | — | `terraform validate && cfn-lint && kubeval` |
| Docs | — | — | `markdownlint && vale && linkchecker` |
