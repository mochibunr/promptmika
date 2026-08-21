# Vulnerability Catalog: Managed Languages

Applies to: Java, C#, Kotlin, Swift, Go, Dart, Scala, F#, VB.NET, Groovy,
Clojure, Crystal, Vala, Apex

## Unsafe Deserialization

Deserializing untrusted data into objects can lead to remote code execution
through gadget chains or type confusion.

Root causes: Using native serialization with untrusted streams (Java
ObjectInputStream, .NET BinaryFormatter), XML deserialization with DTD
processing enabled, YAML loading with unsafe constructors, JSON deserialization
with polymorphic type handling.

Detection: Static analysis (FindSecBugs, Security Code Scan), runtime monitoring,
dependency scanning.

Remediation: Use safe serialization formats (JSON with schema validation,
Protocol Buffers). Disable polymorphic deserialization. Validate all input
before deserialization. In Java, use ObjectInputFilter. In C#, use
System.Text.Json instead of BinaryFormatter.

## Injection Flaws

Untrusted input reaches an interpreter without proper sanitization.

Manifestations: SQL injection through string concatenation, LDAP injection,
XPath injection, NoSQL injection, command injection through Runtime.exec or
ProcessBuilder, expression language injection in templating engines.

Detection: Static analysis (Semgrep, CodeQL, SpotBugs), dynamic testing,
parameterized query enforcement.

Remediation: Use parameterized queries and prepared statements. Validate and
sanitize all input. Use safe APIs that separate code from data. In Java, use
JPA criteria queries. In C#, use Entity Framework Core with LINQ.

## Authentication and Session Management Flaws

Weak authentication and session handling allow impersonation and unauthorized
access.

Root causes: Weak password policies, missing MFA, predictable session IDs,
insecure cookie settings, JWT secret exposure, OAuth misconfiguration,
insufficient token expiration.

Detection: Security audits, penetration testing, static analysis.

Remediation: Use strong adaptive hashing (Argon2, bcrypt). Implement MFA. Use
secure, httpOnly, sameSite cookies. Rotate JWT secrets regularly. Validate
all OAuth flows. Use short-lived access tokens with refresh token rotation.

## Weak Cryptography

Using weak or deprecated cryptographic algorithms undermines confidentiality
and integrity.

Root causes: MD5 or SHA1 for hashing, DES or 3DES for encryption, RSA keys
under 2048 bits, ECB mode for block ciphers, hardcoded keys, custom crypto
implementations.

Detection: Static analysis (CryptoGuard, CodeQL), dependency scanning, manual
review.

Remediation: Use modern algorithms: AES-GCM for encryption, SHA-256 or higher
for hashing, RSA 2048+ or ECDSA for signatures, Argon2 for passwords. Use
established libraries: BouncyCastle (Java), System.Security.Cryptography (C#),
CryptoKit (Swift). Never implement custom cryptography.

## Concurrency Bugs

Improper synchronization in multi-threaded code leads to data races, deadlocks,
and atomicity violations.

Root causes: Missing synchronization, incorrect lock ordering, publishing
references before construction completes, non-atomic compound operations,
thread-unsafe collections used concurrently.

Detection: ThreadSanitizer (Go), Java concurrency static analysis, stress
testing, code review.

Remediation: Use thread-safe collections (ConcurrentHashMap, ConcurrentBag).
Use immutable objects where possible. Apply proper synchronization (synchronized,
ReentrantLock, Monitor). In Go, use channels for communication. In C#, use
ConcurrentDictionary and lock statements. In Kotlin, use coroutines with proper
contexts.

## Null Pointer Dereference

Dereferencing a null reference causes crashes and potential denial of service.

Root causes: Missing null checks, unchecked return values, optional chaining
without fallbacks, Java interop with nullable types.

Detection: Static analysis (NullAway, Kotlin compiler null safety, Swift
optionals), runtime checks.

Remediation: Use nullable types with explicit handling (Optional in Java,
? in Kotlin, optionals in Swift). Enable strict null checking. Use null
object patterns where appropriate.

## Resource Leaks

Failing to release resources (files, sockets, database connections) exhausts
system resources.

Root causes: Missing close calls, exception paths that skip cleanup,
unclosed streams, connection pool exhaustion.

Detection: Static analysis, profiling, resource monitoring.

Remediation: Use try-with-resources (Java), using statements (C#), defer
patterns (Go, Swift). Use connection pooling with proper limits. Implement
finalizers or dispose patterns for unmanaged resources.

## Reflection Abuse

Dynamic code execution through reflection can bypass access controls and
enable injection.

Root causes: Reflective invocation with user-controlled class names,
serialization that uses reflection to set private fields, annotation processing
with untrusted input.

Detection: Static analysis, runtime monitoring, code review.

Remediation: Validate all reflective targets against allow-lists. Use security
managers where available. Avoid reflection with untrusted input. Use dependency
injection frameworks that validate bindings.
