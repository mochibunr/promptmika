# Vulnerability Catalog: Functional and Logic Languages

Applies to: Haskell, OCaml, F#, Erlang, Elixir, Elm, Scala, Racket, ML,
Standard ML, Lisp, Scheme, Common Lisp, Clojure, Prolog, Mercury, Idris,
Agda, Coq, Lean, PureScript, Miranda, Forth

## Logic Errors from Excessive Laziness

Lazy evaluation can defer computation until unexpected times, causing space
leaks, non-termination, or evaluation of sensitive expressions in unintended
contexts.

Root causes: Infinite lazy data structures, accumulating thunks without
forcing evaluation, lazy I/O with resource management, mixing lazy and strict
evaluation without clear boundaries.

Detection: Heap profiling (GHC heap profiling), strictness analysis, code
review, testing with large inputs.

Remediation: Use strict data types (Data.Text.Strict, Data.Map.Strict) where
appropriate. Force evaluation with seq, deepseq, or strictness annotations.
Use strict folds (foldl') instead of lazy folds. Be explicit about evaluation
order in I/O code.

## Denial of Service through Deep Recursion

Functional languages encourage recursion, but deep recursion without tail call
optimization can exhaust the stack.

Root causes: Non-tail-recursive functions on large inputs, mutual recursion
without base cases, recursive data structure traversal without trampolining.

Detection: Stack overflow testing, static analysis for recursion depth,
property-based testing with large inputs.

Remediation: Use tail recursion with accumulator parameters. Use trampolining
for mutual recursion. Convert recursion to iteration where performance matters.
In Scala, use @tailrec annotation. In Erlang/Elixir, rely on tail call
optimization which is guaranteed.

## Unsafe FFI Usage

Foreign Function Interface calls can bypass the language's safety guarantees.

Root causes: Passing Haskell strings to C without proper marshalling,
incorrect pointer lifetime management across language boundaries, missing null
checks on C return values, using unsafe FFI variants for convenience.

Detection: Code review, AddressSanitizer on FFI boundaries, static analysis.

Remediation: Use safe FFI wrappers. Manage pointer lifetimes explicitly with
ForeignPtr. Validate all C return values. Use the safe calling convention
unless profiling proves the overhead is unacceptable. In Rust, use bindgen with
proper unsafe block documentation.

## Type System Bypass

Unsafe operations can bypass strong type systems.

Root causes: unsafeCoerce in Haskell, Obj.magic in OCaml, unchecked casts in
Scala, unsafe blocks in Rust FFI, using foreign pointers without type safety.

Detection: Static analysis for unsafe operations, code review, linting rules.

Remediation: Minimize unsafe operations. Document every unsafe usage with
invariants that must be maintained. Encapsulate unsafe code behind safe APIs.
Use newtypes and phantom types to enforce invariants at compile time.

## Atomity Violations in Actor Systems

Erlang/Elixir actor model can have race conditions across multiple actors.

Root causes: Shared state between actors, message ordering assumptions,
missing acknowledgments, gen_server timeouts without handling.

Detection: Concurrency testing (Concuerror for Erlang), property-based testing,
stress testing.

Remediation: Keep actor state isolated. Use message passing for all
communication. Handle all gen_server timeout cases. Use monitors and links
for failure detection. Design for eventual consistency where applicable.

## Prolog Injection

Prolog's metaprogramming capabilities can be exploited if user input reaches
the interpreter.

Root causes: Using call/1 or assert/1 with user-controlled terms, dynamic
predicate modification with untrusted input, term reading from external sources
without validation.

Remediation: Validate all terms before dynamic execution. Use safe term reading
with specified functors and arities. Avoid assert/retract with user input.
Use sandboxed execution environments.

## Macro Abuse (Lisp Family)

Macros can introduce subtle bugs and security issues if they execute untrusted
code during expansion.

Root causes: Evaluating user input during macro expansion, unhygienic macros
that capture variables, code injection through read-eval-print loops.

Detection: Static analysis, code review, macro expansion inspection.

Remediation: Use hygienic macros (syntax-rules, syntax-parse, macroexpand).
Never evaluate user input during macro expansion. Sanitize all input to REPLs.
Use sandboxed evaluation environments.

## Partial Function Application Risks

Partial application of functions with sensitive arguments can create
unexpected closures.

Root causes: Currying functions with secrets or tokens, partial application
in public APIs, closure capture of mutable state.

Remediation: Avoid currying functions that handle secrets. Use explicit
parameter passing for sensitive data. Be aware of closure capture in
higher-order functions.

## Pattern Matching Exhaustiveness

Missing pattern matches can lead to runtime exceptions or unexpected behavior.

Root causes: Incomplete case expressions, missing catch-all patterns,
refactoring that introduces new constructors without updating matches.

Detection: Compiler warnings (GHC -Wall, OCaml compiler warnings), static
analysis, property-based testing.

Remediation: Enable compiler warnings for incomplete patterns. Use catch-all
patterns with explicit handling. Use total functions where possible. In
Idris/Agda, leverage dependent types for total pattern matching.

## Memoization Side Effects

Memoization can cache sensitive data or create information leaks.

Root causes: Memoizing functions with user-specific data, shared memoization
caches across users, memoizing functions with side effects.

Remediation: Scope memoization caches to appropriate boundaries. Clear caches
on session changes. Avoid memoizing functions with side effects or sensitive
inputs.
