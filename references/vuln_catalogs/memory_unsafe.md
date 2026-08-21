# Vulnerability Catalog: Memory-Unsafe Languages

Applies to: C, C++, Assembly, Zig, Nim, D, Ada, Fortran, COBOL, Pascal,
Delphi, BASIC, V, Carbon, Red, Chapel, Modula-2, Modula-3

## Buffer Overflow

A buffer overflow occurs when data is written beyond the allocated bounds of a
buffer. This corrupts adjacent memory, crashes the program, or enables code
execution.

Root causes: Unbounded string functions (strcpy, strcat, sprintf, gets), raw
array access without bounds checking, unchecked memcpy sizes, format string
bugs, integer overflow leading to undersized allocations.

Detection: AddressSanitizer, Valgrind, static analysis (Clang Static Analyzer,
PVS-Studio, Cppcheck), fuzzing (AFL++, libFuzzer).

Remediation: Replace strcpy with strncpy or strlcpy. Replace strcat with
strncat. Replace sprintf with snprintf. Never use gets. Use std::string and
std::vector in C++. Use slices with bounds checking in Zig. Use sequtils or
safe wrappers in Nim. Validate all sizes before memory operations.

## Use-After-Free

Accessing memory after it has been deallocated leads to undefined behavior,
crashes, and exploitable conditions.

Root causes: Dangling pointers from freed heap memory, returning pointers to
stack variables, iterator invalidation after container modification, race
conditions between free and access.

Detection: AddressSanitizer, MemorySanitizer, static analysis, code review.

Remediation: In C++, use smart pointers (unique_ptr, shared_ptr, weak_ptr). In
C, nullify pointers immediately after free. Document ownership explicitly.
Use arena allocators where appropriate. In Zig, use the allocator interface
with proper defer patterns.

## Double-Free

Freeing the same memory twice corrupts the heap allocator's metadata,
potentially leading to arbitrary code execution.

Root causes: Multiple ownership paths to the same pointer, exception paths
that free and then fall through to another free, copy constructors that shallow
copy pointers.

Detection: AddressSanitizer, Valgrind, static analysis.

Remediation: Transfer ownership clearly. In C++, use Rule of Three/Five/Zero.
In C, use reference counting or single-owner discipline. After free, set the
pointer to NULL immediately.

## Memory Leak

Allocated memory that is never freed consumes resources until the program
terminates or the system exhausts memory.

Root causes: Lost pointers, exception paths that skip deallocation, cyclic
references in reference counting, missing destructors.

Detection: Valgrind Massif, LeakSanitizer (part of AddressSanitizer), heap
profilers, static analysis.

Remediation: Use RAII in C++. Use garbage collection where available. In C,
document every allocation's free path. Use custom allocators with tracking.

## Integer Overflow

Arithmetic that exceeds the representable range of an integer type wraps around
or triggers undefined behavior, leading to incorrect calculations, buffer size
miscalculations, and security bypasses.

Root causes: Unchecked arithmetic on user-controlled values, signed/unsigned
mixing, implicit conversions, loop counters with large bounds.

Detection: UndefinedBehaviorSanitizer, static analysis, manual code review.

Remediation: Check bounds before arithmetic. Use compiler builtins like
__builtin_add_overflow. Use safe integer libraries. Prefer size_t for sizes
but still validate maximums. In Zig, use checked arithmetic builtins.

## Format String Bug

Passing user-controlled strings as format strings to printf-family functions
allows reading from and writing to arbitrary memory.

Root causes: Using variable format strings without validation, logging
functions that accept format strings with user data.

Detection: Static analysis, compiler warnings (-Wformat-security), manual
review.

Remediation: Always use literal format strings. If dynamic formats are
necessary, validate against an allow-list of safe specifiers. In C++20, use
std::format which is type-safe.

## Race Condition

Concurrent access to shared state without proper synchronization leads to data
corruption, logic errors, and security bypasses.

Root causes: Missing locks, incorrect lock ordering (deadlocks), torn reads/writes
on non-atomic variables, time-of-check to time-of-use.

Detection: ThreadSanitizer, Helgrind, static analysis, stress testing.

Remediation: Use mutexes, atomics, and memory barriers correctly. Prefer
higher-level concurrency primitives (channels, futures, async/await) where
available. Minimize shared mutable state. In C11/C++11+, use std::atomic with
explicit memory ordering.

## Stack Overflow

Excessive stack usage from deep recursion or large stack allocations causes
stack exhaustion and crashes.

Root causes: Unbounded recursion, large stack arrays (VLA in C), deep call
chains, signal handlers that use the main stack.

Detection: Stack canaries, AddressSanitizer stack overflow detection,
profiling.

Remediation: Convert recursion to iteration. Use heap allocation for large
buffers. Set stack size limits appropriately. In Zig, the compiler can detect
some stack overflow patterns at compile time.

## Type Confusion

Treating memory as an incompatible type leads to undefined behavior and
potential exploitation.

Root causes: Casting void pointers without validation, union misuse, object
slicing, incorrect downcasting.

Detection: UndefinedBehaviorSanitizer, static analysis, strict aliasing warnings.

Remediation: Avoid void pointer casts where possible. Use tagged unions. In
C++, use dynamic_cast with null checks. Respect strict aliasing rules.
