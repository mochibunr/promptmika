# Testing Strategies Reference

## Unit Testing

Unit tests verify individual functions, methods, or classes in isolation.

### C/C++
- GoogleTest: Industry standard for C++ unit testing.
- Catch2: Header-only, modern C++ testing framework.
- doctest: Lightweight alternative to Catch2.
- Unity/CMock: For embedded C testing.

### C#
- xUnit: Modern, extensible testing framework.
- NUnit: Mature alternative with rich assertions.
- MSTest: Microsoft's official testing framework.
- FluentAssertions: Readable assertion library.

### Java
- JUnit 5: Modern testing with parameterized tests and extensions.
- TestNG: Alternative with advanced features.
- AssertJ: Fluent assertion library.
- Mockito: Mocking framework.

### Python
- pytest: Primary testing framework with fixtures and plugins.
- unittest: Standard library testing.
- hypothesis: Property-based testing.

### JavaScript/TypeScript
- Vitest: Fast Vite-native testing.
- Jest: Feature-rich testing framework.
- Mocha: Flexible testing framework.
- Jasmine: Behavior-driven testing.

### Go
- testing: Standard library testing.
- testify: Assertions and mocking.
- ginkgo/gomega: BDD-style testing.

### Rust
- Built-in test framework with #[test] attribute.
- rstest for parameterized tests.
- mockall for mocking.

### Functional Languages
- Haskell: HUnit, Hspec, tasty.
- OCaml: OUnit, Alcotest.
- Elixir: ExUnit.
- Clojure: clojure.test, midje.

## Integration Testing

Integration tests verify that multiple components work together correctly.

### Database Integration
- Use test databases (SQLite in-memory, Testcontainers for Dockerized DBs).
- Apply migrations before tests.
- Clean up data between tests (transactions, truncation).

### API Integration
- Use httptest (Go), TestServer (ASP.NET), supertest (Node.js).
- Mock external services with WireMock, Mountebank, or MSW.
- Verify request/response contracts.

### Web Integration
- Use Selenium, Playwright, or Cypress for browser automation.
- Test critical user journeys end-to-end.
- Use Page Object Model for maintainability.

## Property-Based Testing

Generate random inputs to find edge cases.

### Tools
- Python: hypothesis.
- C++: RapidCheck.
- Haskell: QuickCheck.
- Rust: proptest.
- Java: jqwik.
- C#: FsCheck.
- Go: gopter.

### Best Practices
- Define properties that should always hold.
- Use shrinking to find minimal failing cases.
- Combine with example-based tests for documentation.

## Fuzzing

Fuzzing discovers crashes and vulnerabilities through random input generation.

### Tools
- libFuzzer: Coverage-guided fuzzing for C/C++.
- AFL++: Advanced fuzzing with instrumentation.
- cargo-fuzz: Rust fuzzing with libFuzzer.
- Jazzer: Java fuzzing.
- python-afl: Python fuzzing.
- go-fuzz: Go fuzzing.

### Best Practices
- Define fuzz targets for input parsing functions.
- Use dictionaries and seeds for structured inputs.
- Run fuzzers continuously in CI.
- Minimize crashing inputs for debugging.

## Static Analysis

Static analysis finds bugs without executing code.

### C/C++
- Clang Static Analyzer.
- PVS-Studio.
- Cppcheck.
- Coverity.
- SonarQube.

### C#
- Roslyn analyzers.
- SonarQube.
- ReSharper.
- Security Code Scan.

### Java
- SpotBugs/FindBugs.
- PMD.
- Checkstyle.
- SonarQube.
- Error Prone (Google).

### Python
- mypy: Type checking.
- pylint: Linting.
- flake8: Style and error checking.
- bandit: Security scanning.
- pyright: Fast type checking.

### JavaScript/TypeScript
- ESLint: Linting.
- TypeScript compiler: Type checking.
- SonarJS: Code quality.
- Semgrep: Security scanning.

### Rust
- cargo clippy: Linting.
- cargo audit: Dependency vulnerability scanning.
- Miri: Undefined behavior detection.

### Go
- go vet: Basic static analysis.
- golangci-lint: Comprehensive linting.
- staticcheck: Advanced static analysis.

## Security Testing

### Dynamic Application Security Testing (DAST)
- OWASP ZAP: Web application security scanner.
- Burp Suite: Professional web security testing.
- Nikto: Web server scanner.

### Static Application Security Testing (SAST)
- Semgrep: Lightweight static analysis for multiple languages.
- CodeQL: GitHub's semantic code analysis.
- SonarQube with security plugins.
- Checkmarx: Enterprise SAST.

### Dependency Scanning
- Snyk: Multi-language dependency scanning.
- OWASP Dependency-Check.
- npm audit / yarn audit.
- cargo audit.
- pip-audit.
- bundler-audit.

### Penetration Testing
- Manual testing by security professionals.
- Automated tools for common vulnerabilities.
- Bug bounty programs for continuous testing.

## Performance Testing

### Benchmarking
- C++: Google Benchmark.
- C#: BenchmarkDotNet.
- Java: JMH (Java Microbenchmark Harness).
- Python: pytest-benchmark, timeit.
- Rust: Criterion.rs.
- Go: testing.B built-in benchmarks.

### Load Testing
- JMeter: Apache load testing tool.
- k6: Modern load testing for APIs.
- Locust: Python-based load testing.
- Gatling: Scala-based load testing.

### Profiling
- C/C++: perf, Valgrind, Intel VTune, AMD uProf.
- C#: dotTrace, dotMemory, PerfView.
- Java: JFR, async-profiler, VisualVM.
- Python: cProfile, py-spy, Austin.
- Rust: cargo flamegraph, perf.
- Go: pprof, trace.

## Continuous Integration

### CI/CD Platforms
- GitHub Actions.
- GitLab CI/CD.
- Azure DevOps.
- Jenkins.
- CircleCI.
- Travis CI.

### CI Best Practices
- Run tests on every pull request.
- Use matrix builds for multiple OS and language versions.
- Cache dependencies between builds.
- Run security scans in CI.
- Generate coverage reports and enforce thresholds.
- Run performance benchmarks on dedicated hardware.
- Use artifacts for build outputs.
