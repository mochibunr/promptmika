# Performance Optimization Reference

## Profiling Methodology

1. Measure before optimizing. Use profiling tools to identify actual
   bottlenecks, not assumed ones.
2. Focus on hot paths: the 20% of code that runs 80% of the time.
3. Optimize algorithms before micro-optimizations.
4. Benchmark changes with statistical significance.
5. Document performance requirements and measure against them.

## Algorithmic Optimization

### Big O Analysis
- Use appropriate data structures for access patterns.
- O(1): Hash maps, arrays by index.
- O(log n): Binary search, balanced trees.
- O(n): Linear search, single pass algorithms.
- O(n log n): Efficient sorting, divide and conquer.
- Avoid O(n^2) nested loops where possible.

### Caching and Memoization
- Cache expensive computations with deterministic inputs.
- Use LRU caches for bounded memory usage.
- Memoize recursive functions to avoid redundant work.
- Use bloom filters for approximate membership testing.

## Memory Optimization

### Cache Locality
- Structure data for sequential access (Structure of Arrays vs Array of Structures).
- Keep hot fields together at the beginning of structs.
- Align data to cache line boundaries (64 bytes on x86).
- Avoid pointer chasing in hot loops.

### Memory Allocation
- Minimize allocations in hot paths.
- Use object pools for frequently created/destroyed objects.
- Use arena allocators for bulk allocations.
- Prefer stack allocation for small, fixed-size buffers.

### Memory Layout
- Use compact representations: bitfields, enums instead of strings.
- Compress data structures where memory is constrained.
- Use memory-mapped files for large datasets.
- Consider NUMA awareness on multi-socket systems.

## CPU Optimization

### Branch Prediction
- Arrange code for predictable branches.
- Use likely/unlikely hints where supported.
- Sort data to reduce branch mispredictions.
- Consider branchless algorithms for simple conditionals.

### Loop Optimization
- Unroll loops to reduce overhead (but not excessively).
- Use loop interchange for better cache locality.
- Use loop fusion to reduce overhead.
- Use loop-invariant code motion.

### SIMD (Single Instruction, Multiple Data)
- Use compiler auto-vectorization with simple loops.
- Use explicit intrinsics for complex operations: SSE/AVX on x86,
  NEON on ARM, WASM SIMD for web.
- Align data to SIMD register width.
- Consider libraries: xsimd, Eigen, oneMKL, OpenCV.

### Parallelization
- Use threads for CPU-bound work.
- Use async I/O for I/O-bound work.
- Use GPU computing (CUDA, OpenCL, Vulkan Compute) for massively parallel tasks.
- Use SIMD before threading for single-core optimization.

## I/O Optimization

### Disk I/O
- Batch I/O operations.
- Use buffered streams.
- Use memory-mapped files for random access.
- Use asynchronous I/O (io_uring on Linux, overlapped on Windows).
- Compress data to reduce I/O volume.

### Network I/O
- Use connection pooling.
- Use HTTP/2 or HTTP/3 for multiplexing.
- Use compression (gzip, brotli) for text data.
- Use caching headers (ETag, Cache-Control).
- Use CDN for static assets.

### Database I/O
- Use connection pooling.
- Use prepared statements to reduce parsing overhead.
- Batch inserts and updates.
- Use appropriate indexes for query patterns.
- Use read replicas for read-heavy workloads.
- Use caching layers (Redis, Memcached) for hot data.

## Language-Specific Optimizations

### C/C++
- Use restrict for non-aliasing pointers.
- Use inline for small, hot functions.
- Use constexpr for compile-time computation.
- Use move semantics to avoid copies.
- Profile with perf, Valgrind, Intel VTune.

### C#
- Use Span<T> and Memory<T> for zero-copy operations.
- Use ArrayPool<T> for temporary arrays.
- Use ValueTask for synchronous-hot async paths.
- Use struct for small, immutable data.
- Avoid LINQ in tight loops.

### Java
- Use primitive types instead of boxed types in hot paths.
- Use StringBuilder for string concatenation.
- Use off-heap memory (ByteBuffer, MemorySegment) for large data.
- Use JIT-friendly code patterns.
- Profile with JFR and async-profiler.

### Python
- Use NumPy/Pandas for numerical computing.
- Use Cython or Rust extensions for hot paths.
- Use asyncio for I/O-bound concurrency.
- Use multiprocessing for CPU-bound parallelism.
- Profile with cProfile and py-spy.

### JavaScript/TypeScript
- Use Web Workers for CPU-intensive tasks.
- Use requestAnimationFrame for UI updates.
- Use virtual scrolling for large lists.
- Use code splitting and lazy loading.
- Profile with Chrome DevTools Performance tab.

### Go
- Use sync.Pool for object reuse.
- Use bytes.Buffer for string building.
- Use goroutines for concurrency, but avoid excessive spawning.
- Use pprof for CPU and memory profiling.

### Rust
- Use zero-copy deserialization with serde.
- Use iterators instead of explicit loops.
- Use Rc/Arc sparingly; prefer borrowing.
- Use cargo flamegraph for profiling.

### Haskell
- Use strict data structures in hot paths.
- Use unboxed vectors for numerical arrays.
- Use stream fusion with vector library.
- Profile with GHC heap profiling and eventlog.

## Database Optimization

### Query Optimization
- Use EXPLAIN ANALYZE to understand query plans.
- Add indexes for WHERE, JOIN, and ORDER BY columns.
- Use covering indexes to avoid table lookups.
- Avoid SELECT *; fetch only needed columns.
- Use pagination with keyset pagination for large datasets.

### Schema Design
- Normalize to reduce redundancy, denormalize for read performance.
- Use appropriate data types (smaller is faster).
- Use partitioning for large tables.
- Use foreign keys for data integrity.

### Caching Strategies
- Use application-level caching for computed results.
- Use database query caching where supported.
- Use materialized views for expensive aggregations.
- Use read replicas for read-heavy workloads.

## Web Performance

### Frontend
- Minimize and bundle JavaScript/CSS.
- Use tree shaking to eliminate dead code.
- Optimize images (WebP, responsive images, lazy loading).
- Use service workers for offline caching.
- Use HTTP/2 server push (sparingly).

### Backend
- Use response caching with appropriate headers.
- Use CDN for static assets and edge caching.
- Use connection pooling for databases and HTTP clients.
- Use batch APIs to reduce round trips.
- Use GraphQL for precise data fetching.

## Measuring Performance

### Metrics
- Latency: time to complete a request (p50, p95, p99).
- Throughput: requests per second.
- Error rate: percentage of failed requests.
- Resource utilization: CPU, memory, disk, network.

### Tools
- APM: New Relic, Datadog, Dynatrace, AppDynamics.
- OpenTelemetry for distributed tracing.
- Prometheus + Grafana for metrics and dashboards.
- Jaeger or Zipkin for tracing.
