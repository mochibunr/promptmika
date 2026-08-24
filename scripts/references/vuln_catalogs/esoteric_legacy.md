# Vulnerability Catalog: Esoteric and Legacy Languages

Applies to: Brainfuck, Ook!, Malbolge, Befunge, Intercal, Whitespace, Piet,
Shakespeare, ArnoldC, Cow, Chef, JSFuck, LOLCODE, Velato, HQ9+, GolfScript,
Unlambda, FALSE, Fortran, COBOL, ALGOL, BASIC, Pascal, Simula, Smalltalk,
SNOBOL, APL, PL/I, Rexx, Modula-2, Modula-3, Turbo Pascal, Delphi, Ada 83

## Esoteric Language Security Considerations

While esoteric languages are rarely used in production, they can be exploited
when used in:
- Code golf competitions with untrusted input
- Educational platforms executing user code
- CTF challenges and security demonstrations
- Artistic installations with network connectivity

### Arbitrary Code Execution in Interpreters

Esoteric language interpreters written in memory-unsafe languages inherit all
C/C++ vulnerabilities. Buffer overflows in Brainfuck tape implementations,
stack overflows in Befunge recursion, and integer overflows in Piet color
processing are common.

Remediation: Use bounds-checked implementations. Validate program size limits.
Use sandboxed execution environments. Apply resource limits (CPU, memory, stack).

### Resource Exhaustion

Esoteric languages often have minimal runtime controls, making them susceptible
to denial of service through infinite loops or excessive memory usage.

Remediation: Implement execution step limits. Use timeouts. Apply memory
caps. Run in isolated containers with resource quotas.

### Legacy Language Security

Legacy languages power critical systems in finance, government, and
infrastructure. Their age means they predate modern security practices.

### COBOL Vulnerabilities

COBOL applications often process financial data with minimal validation.

Root causes: Fixed-length fields without bounds checking, ACCEPT statements
reading untrusted input, CALL statements to external programs with unvalidated
parameters, missing SQL parameterization in embedded SQL.

Remediation: Validate all input against PIC clauses. Use parameterized
queries in EXEC SQL. Sanitize parameters before CALL statements. Implement
input length validation. Use modern COBOL compilers with security extensions.

### Fortran Vulnerabilities

Scientific Fortran code often prioritizes performance over safety.

Root causes: Assumed-size arrays without bounds checking, implicit typing
leading to type confusion, COMMON blocks exposing global state, FORMAT
statements with dynamic specifiers, missing INTENT declarations.

Remediation: Use assumed-shape arrays with explicit interfaces. Enable
implicit none in all modules. Minimize COMMON block usage. Use parameterized
FORMAT statements. Declare INTENT for all procedure arguments.

### BASIC and Visual Basic Vulnerabilities

Legacy VB applications often have weak input validation and unsafe file
operations.

Root causes: InputBox and MsgBox with untrusted data, Shell function with
user input, FileSystemObject with unvalidated paths, missing error handling.

Remediation: Validate all input before processing. Use safe file APIs with
path validation. Implement proper error handling (On Error GoTo with cleanup).
Avoid Shell with user-controlled strings.

### Pascal and Delphi Vulnerabilities

Pascal's strong typing helps but buffer overflows still occur in string
handling.

Root causes: ShortString overflows, PChar manipulation without bounds checking,
unsafe type casts, unvalidated file operations, SQL string concatenation.

Remediation: Use AnsiString or UnicodeString instead of ShortString. Validate
all PChar operations. Use parameterized queries. Implement proper exception
handling.

### Ada Vulnerabilities

Ada is designed for safety but can still have security issues.

Root causes: Unchecked_Conversion bypassing type safety, Address clauses
for memory manipulation, pragma Suppress disabling checks, unvalidated
unchecked deallocation.

Remediation: Minimize use of Unchecked_Conversion. Validate all unchecked
operations. Use SPARK subset for critical code. Enable all runtime checks.

### PL/I Vulnerabilities

PL/I's flexibility can lead to unexpected behavior.

Root causes: Pointer arithmetic without bounds checking, implicit type
conversions, uncontrolled storage allocation, missing ON conditions.

Remediation: Use controlled storage where possible. Validate pointer
operations. Implement ON ERROR handlers. Use structured programming
constructs.

### APL Vulnerabilities

APL's compact notation can obscure security issues.

Root causes: Execute operator with user input, file I/O with unvalidated
paths, workspace sharing exposing sensitive data, quad input without
validation.

Remediation: Validate all input to execute operators. Use restricted file
access. Implement workspace isolation. Sanitize quad input.

## General Remediation for Legacy Systems

1. Input validation at every boundary
2. Use modern wrappers for legacy APIs
3. Implement logging and monitoring
4. Apply defense in depth with network segmentation
5. Regular security audits and penetration testing
6. Gradual modernization with secure interfaces
7. Static analysis with legacy-aware tools
8. Training developers in secure legacy coding practices
