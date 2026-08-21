# Test Fixtures — Coding Behavior Validation

Use these fixtures to validate that PromptMika produces correct coding behavior. Each fixture contains a raw user input, what the AI should internally figure out (silent refinement), and the minimum required elements in the output.

The user should NEVER see the "Internal Refinement" section. It exists only for test validation.

---

## Fixture 1: Vague Frontend Request

**Raw input:** "make me a login page"

**Internal refinement (invisible):**
- Intent: authentication UI with email/password fields
- Missing: framework, design direction, security requirements, responsive behavior
- Defaults: React + TypeScript, responsive mobile-first, form validation, CSRF protection, accessible

**Minimum required elements in output:**
- React component with email + password fields
- Form validation (email format, password minimum length)
- Error states (invalid credentials, network error)
- Loading state during submission
- Responsive layout (mobile breakpoint tested)
- Accessible (labels, aria attributes, keyboard navigation)
- Security: no hardcoded credentials, input sanitization
- Build-Test-Loop: lint, typecheck, test pass

**Token budget:** 200-400 lines of code

---

## Fixture 2: Vague Backend Request

**Raw input:** "build me a REST API"

**Internal refinement (invisible):**
- Intent: CRUD API for data management
- Missing: language, database, authentication, data model
- Defaults: Python + FastAPI, PostgreSQL, JWT auth, User model as starting point

**Minimum required elements in output:**
- FastAPI app with proper project structure
- User model with CRUD endpoints (GET, POST, PUT, DELETE)
- Pydantic models for request/response validation
- Database connection with SQLAlchemy or similar
- JWT authentication middleware
- Error handling with proper HTTP status codes
- Input validation on all endpoints
- Security: parameterized queries, no SQL injection
- Tests for all endpoints
- Build-Test-Loop: pytest, mypy, ruff check

**Token budget:** 300-500 lines of code

---

## Fixture 3: Bug Fix Request

**Raw input:** "fix the bug in my code" (no code provided)

**Internal refinement (invisible):**
- Intent: debug and fix an issue
- Missing: code, error message, expected vs actual behavior
- Action: ASK for the code, error, and reproduction steps — this is the one case where asking is required

**Minimum required elements in output:**
- Specific questions: what's the error message? where's the code? what did you expect?
- Do NOT guess. Do NOT write placeholder code.
- Once code is provided: explain root cause, show fix, add test case

**Validation:** AI does not fabricate a fix without seeing the actual code.

---

## Fixture 4: Frontend + Design Request

**Raw input:** "design a landing page for my SaaS product"

**Internal refinement (invisible):**
- Intent: marketing landing page with conversion focus
- Missing: product details, target audience, design system, tech stack
- Defaults: React/Next.js, load design-systems/ to match SaaS mood/formality
- Must: synthesize DESIGN.md tokens into code (colors, typography, radii, spacing)
- Must: apply anti-slop rules (no generic gradient hero, no emoji icons, no indigo-for-no-reason)
- Must: responsive, accessible, performant

**Minimum required elements in output:**
- Hero section with clear value proposition
- Features/benefits section
- Social proof or trust signals
- CTA section
- Responsive at all breakpoints
- Design tokens applied (specific hex colors, font stack, border-radius values from matched DESIGN.md)
- Anti-slop: every design choice tied to content reason
- Accessibility: contrast ratios, alt text, keyboard nav
- Build-Test-Loop: lint, typecheck, test, visual verification

**Token budget:** 400-600 lines of code

---

## Fixture 5: State Management Request

**Raw input:** "add state management to my app"

**Internal refinement (invisible):**
- Intent: centralize shared state
- Missing: framework, complexity level, what state needs sharing
- Defaults: evaluate based on app complexity
- Must: follow STATE_MANAGEMENT.md pattern selection guide

**Minimum required elements in output:**
- Pattern choice with justification (useState? Zustand? Redux? Context?)
- Store/slice definition with proper typing
- Selectors or hooks for accessing state
- Actions/mutations defined
- No state duplication
- Derived state computed, not stored
- Tests for state logic
- Build-Test-Loop: lint, typecheck, test

**Validation:** Pattern matches complexity (don't use Redux for a toggle, don't use useState for 50 shared entities).

---

## Fixture 6: Security Audit Request

**Raw input:** "check my code for security issues"

**Internal refinement (invisible):**
- Intent: security review of existing code
- Missing: code, language, framework
- Action: scan the codebase using `universal_security_scanner.py`
- Must: load relevant vuln_catalogs/ for the language

**Minimum required elements in output:**
- Specific vulnerabilities found with file:line references
- Severity levels (HIGH/MEDIUM/LOW)
- Fix recommendations for each issue
- Categories from vuln_catalogs (injection, XSS, hardcoded secrets, etc.)
- If no issues found: confirm by listing what was checked

**Validation:** Uses actual scanner output, not generic security advice.

---

## Fixture 7: Minimalism Filter — YAGNI Test

**Raw input:** "build me a todo app with user auth, real-time sync, drag-and-drop, dark mode, i18n, offline support, and a mobile app"

**Internal refinement (invisible):**
- Intent: todo app with many features
- Missing: which features are actually needed right now?
- Action: apply YAGNI — ask what's the MVP, or build the core and note what's deferred
- Must: NOT build all 7 features in one shot unless explicitly told

**Minimum required elements in output:**
- Core todo CRUD (add, complete, delete)
- Clean, minimal implementation
- Either: build the MVP first and list deferred features, OR ask which to prioritize
- Do NOT: build a massive app with 7 features when the user might just need a todo list
- Token count should reflect minimalism — no boilerplate, no unused abstractions

**Validation:** Code is minimal. No unused functions. No over-engineered abstractions. YAGNI applied.

---

## Fixture 8: Stdlib-First Test

**Raw input:** "write a function that parses a URL and returns its components"

**Internal refinement (invisible):**
- Intent: URL parsing
- Missing: language (assume common)
- Action: check if stdlib has URL parsing — it does in every major language

**Minimum required elements in output:**
- JavaScript: `new URL(url)` — one line, not a regex parser
- Python: `urllib.parse.urlparse(url)` — stdlib, not a custom parser
- Go: `url.Parse(url)` — stdlib
- Rust: `url::Url::parse(url)` — use the `url` crate, it's the standard

**Validation:** Uses stdlib/library. Does NOT write a custom URL parser from regex. The answer should be 1-3 lines, not 50.

---

## Fixture 9: Reuse-First Test

**Raw input:** "I need a debounce function"

**Internal refinement (invisible):**
- Intent: debounce utility
- Action: check if lodash is installed, check if framework has debounce

**Minimum required elements in output:**
- If lodash installed: `import { debounce } from 'lodash'` — one line
- If lodash-debounce installed: use it
- If no dependencies: write a minimal 5-line implementation
- If React: consider `useDeferredValue` or a custom hook

**Validation:** Checks for existing solutions first. Only writes custom code if nothing exists.

---

## Fixture 10: Iteration — Adding to Existing Code

**Raw input (turn 1):** "build me a dashboard"
**Raw input (turn 2):** "add real-time updates"
**Raw input (turn 3):** "make it darker"

**Internal refinement (invisible):**
- Turn 1: Build a dashboard with data display, charts, filters. Track component names, file structure.
- Turn 2: Add WebSocket or SSE for live data. Preserve turn 1 context. Add reconnection logic.
- Turn 3: Dark mode theme. Preserve turns 1 and 2. Apply dark mode tokens from design-systems/.

**Minimum required elements in output:**
- Turn 1: Dashboard components with data display
- Turn 2: Real-time updates added without breaking turn 1 functionality
- Turn 3: Dark theme applied, all previous features still work
- Each iteration: exact same component names, no renaming unless user asked
- Context retention: references files/components from previous turns

**Validation:** Context retained across all turns. No regressions. Each version strictly better than the last.

---

## How to Run Tests

1. Feed each raw input into PromptMika
2. Verify the AI does NOT show the internal refinement to the user
3. Check the output against minimum required elements
4. Verify YAGNI: no unnecessary code, no over-engineering
5. Verify stdlib-first: custom code only when nothing exists
6. Verify reuse-first: existing solutions used when available
7. Verify Build-Test-Loop: lint, typecheck, test all pass
8. Verify security: vuln catalog knowledge applied
9. Verify design: design tokens applied for UI tasks
10. Verify context retention: iteration fixtures maintain state across turns
