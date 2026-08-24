# Cross-Language Interoperability Guide

## C FFI (Foreign Function Interface)

C is the lingua franca for language interop. Most languages can call C
functions through FFI mechanisms.

### Calling C from Other Languages
- Python: ctypes, cffi, or Cython for wrapping C libraries.
- Rust: extern "C" blocks and bindgen for automatic header binding.
- Go: cgo for calling C code; use // #cgo directives for flags.
- Java: JNI (Java Native Interface) or JNA (Java Native Access).
- C#: P/Invoke with DllImport attributes.
- Node.js: N-API or node-ffi-napi for native addons.
- Haskell: FFI declarations with foreign import ccall.
- OCaml: external declarations with C stubs.

### ABI Considerations
- Understand calling conventions: cdecl, stdcall, fastcall, thiscall,
  System V AMD64 ABI, Windows x64 calling convention.
- Match struct layouts with packing and alignment directives.
- Use standard layout types across language boundaries.
- Be aware of name mangling in C++; use extern "C" for C-compatible names.

### Memory Ownership
- Document which language owns allocated memory.
- Use opaque pointers when passing objects across boundaries.
- Implement custom allocators/deallocators in the owning language.
- Never mix allocators (e.g., malloc in C, free in another language).

## C++ Interop

### C++ from C
- Use extern "C" wrapper functions around C++ classes.
- Export factory functions for object creation and destruction.
- Pass opaque pointers (void*) to C code.

### C++ from Other Languages
- Python: pybind11 for modern C++ binding.
- Rust: cxx for safe C++ interop.
- C#: C++/CLI for managed-unmanaged bridging.
- Node.js: node-addon-api or N-API with C++ wrappers.

### Object Lifetime
- Manage C++ object lifetime carefully across language boundaries.
- Use smart pointers internally but expose raw pointers externally.
- Implement reference counting if shared ownership is needed.

## Java Interop

### JNI (Java Native Interface)
- Use javah or javac -h to generate C header files.
- Implement native methods in C/C++.
- Handle Java exceptions in native code.
- Use local and global references correctly to prevent leaks.

### JNA (Java Native Access)
- Simpler alternative to JNI using reflection.
- Define Java interfaces mapping to C functions.
- Slower than JNI but easier to maintain.

### Java from Other Languages
- Use GraalVM polyglot API for embedding Java in other languages.
- Use JEP 389 (Foreign Function & Memory API) for modern FFI.

## C# Interop

### P/Invoke
- Use DllImport attributes to import C functions.
- Marshal structs with StructLayout attributes.
- Use IntPtr for opaque pointers.
- Handle string marshalling (Ansi, Unicode, UTF-8).

### C++/CLI
- Bridge managed C# and unmanaged C++.
- Use ref class for managed wrappers around native classes.
- Handle exceptions across the boundary.

### COM Interop
- Use COM objects from C# via interop assemblies.
- Register COM components for system-wide access.
- Handle reference counting and interface queries.

## Python Interop

### C Extensions
- Use Python C API for maximum control.
- Use pybind11 for modern C++ binding with automatic type conversion.
- Use Cython for C-like Python with C interop.
- Use ctypes for calling C libraries without compilation.

### Rust from Python
- Use PyO3 for safe Rust-Python bindings.
- Use maturin for building and publishing Python packages with Rust.
- Use rust-cpython as an alternative to PyO3.

### C# from Python
- Use pythonnet for .NET interop.
- Use CLR types directly from Python code.

## WebAssembly (WASM)

WASM enables running compiled code in web browsers and other hosts.

### Compiling to WASM
- Rust: wasm-pack for Rust-to-WASM with JS bindings.
- C/C++: Emscripten for compiling to WASM with POSIX emulation.
- Go: GOOS=js GOARCH=wasm for Go-to-WASM.
- C#: Blazor for .NET in the browser.

### WASM Security
- WASM runs in a sandboxed environment.
- Host functions provide controlled access to system resources.
- Validate all inputs at the host boundary.
- Be aware of Spectre/Meltdown implications in JIT-compiled WASM.

## gRPC and Protocol Buffers

Language-agnostic RPC using protobuf definitions.

### Workflow
1. Define services and messages in .proto files.
2. Generate code for each language using protoc plugins.
3. Implement server and client in respective languages.

### Language Support
- C++: grpc++ library.
- Java: grpc-java with Netty transport.
- Go: google.golang.org/grpc.
- Python: grpcio package.
- C#: Grpc.Net.Client and Grpc.AspNetCore.Server.
- Rust: tonic for async gRPC.
- Node.js: @grpc/grpc-js.

## REST API Interop

JSON over HTTP is the simplest cross-language communication.

### Serialization
- Use JSON Schema for validation.
- Use OpenAPI/Swagger for API documentation.
- Use language-specific JSON libraries with schema validation.

### Authentication
- Use JWT tokens for stateless auth.
- Use OAuth2 for third-party integration.
- Use API keys for service-to-service communication.

## Message Queues

Asynchronous communication between services in different languages.

### Options
- RabbitMQ with AMQP protocol.
- Apache Kafka for high-throughput streaming.
- Redis Pub/Sub for simple messaging.
- NATS for lightweight messaging.
- ZeroMQ for embedded messaging.
