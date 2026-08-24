# Build Systems Reference

## C/C++ Build Systems

### CMake
CMake is the de facto standard for C++ cross-platform builds.
- Use target-based commands: target_sources, target_include_directories,
  target_compile_features, target_link_libraries.
- Set C++ standard via target_compile_features with cxx_std_20 or cxx_std_23.
- Use FetchContent for dependency management or find_package for system libraries.
- Define CMake presets in CMakePresets.json for configure, build, and test profiles.
- Use generator expressions for conditional logic.

### Make
Use Make for simple projects or as a wrapper around CMake.
- Define .PHONY targets explicitly.
- Use automatic variables ($@, $<, $^) correctly.
- Avoid recursive Make where possible.
- Use pattern rules for generic compilation.

### Ninja
Ninja is a fast, low-level build system. Use it as the generator for CMake
or for projects requiring maximum build speed.

### vcpkg / Conan
- vcpkg: Microsoft-backed package manager with CMake integration.
- Conan: Fine-grained version resolution with binary caching.
- Both support pinning versions and cross-compilation.

## C# Build Systems

### dotnet CLI
The primary build tool for .NET projects.
- Use dotnet build for compilation.
- Use dotnet test for running tests.
- Use dotnet publish for deployment.
- Use dotnet pack for creating NuGet packages.
- Use global.json to pin SDK versions.

### MSBuild
Direct MSBuild for advanced scenarios.
- Use Directory.Build.props for shared properties.
- Use MSBuild conditions for platform-specific logic.
- Use custom targets for build automation.

## Java Build Systems

### Maven
- Use pom.xml with dependency management.
- Use BOMs for version alignment.
- Use profiles for environment-specific builds.
- Use maven-enforcer-plugin for version constraints.

### Gradle
- Use Kotlin DSL (build.gradle.kts) for type-safe build scripts.
- Use version catalogs for dependency management.
- Use convention plugins for shared build logic.

## JavaScript/TypeScript Build Systems

### npm / yarn / pnpm
- Use lock files (package-lock.json, yarn.lock, pnpm-lock.yaml).
- Use workspaces for monorepos.
- Use npm audit or pnpm audit for vulnerability scanning.

### Vite
Fast development server and bundler.
- Use for modern web applications.
- Supports HMR (Hot Module Replacement).
- Optimized builds with Rollup.

### esbuild / swc
Ultra-fast bundlers and transpilers.
- Use for large codebases where build speed matters.
- swc is a Rust-based alternative to Babel.

### webpack
Feature-rich but slower bundler.
- Use for complex legacy configurations.
- Supports loaders, plugins, and code splitting.

## Python Build Systems

### setuptools
Standard packaging tool.
- Use pyproject.toml for modern configuration.
- Use setup.cfg or setup.py for legacy projects.

### Poetry
Modern dependency management and packaging.
- Uses pyproject.toml exclusively.
- Locks dependencies with poetry.lock.
- Supports publishing to PyPI.

### uv
Ultra-fast Python package installer and resolver.
- Written in Rust.
- Replaces pip and virtualenv.

## Rust Build System

### Cargo
- Use Cargo.toml for project configuration.
- Use workspaces for multi-crate projects.
- Use features for conditional compilation.
- Use cargo clippy for linting.
- Use cargo fmt for formatting.
- Use cargo audit for vulnerability scanning.

## Go Build System

### Go Modules
- Use go.mod for dependency management.
- Use go.sum for checksum verification.
- Use go.work for workspace mode.
- Use go vet for static analysis.
- Use golangci-lint for comprehensive linting.

## Functional Language Build Systems

### Stack (Haskell)
- Uses stack.yaml for resolver and extra-deps.
- Uses package.yaml for package configuration.
- Supports Docker integration for reproducible builds.

### dune (OCaml)
- Uses dune files for build rules.
- Supports incremental compilation.
- Integrates with opam for package management.

### Mix (Elixir)
- Uses mix.exs for project configuration.
- Supports tasks, dependencies, and releases.
- Uses distillery or mix release for production deployments.

### Leiningen / tools.deps (Clojure)
- Leiningen: project.clj with plugins and profiles.
- tools.deps: deps.edn for dependency graphs.
- Both support REPL-driven development.

## Hardware Description Build Systems

### Verilog/VHDL
- Use Make or Python scripts for simulation workflows.
- Use Vivado, Quartus, or ISE for FPGA synthesis.
- Use cocotb or UVM for verification.

### Chisel (Scala)
- Uses sbt for building.
- Generates Verilog from Scala descriptions.
- Uses FIRRTL for intermediate representation.
