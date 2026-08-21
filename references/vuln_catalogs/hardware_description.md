# Vulnerability Catalog: Hardware Description Languages

Applies to: Verilog, SystemVerilog, VHDL, MyHDL, Chisel, Bluespec,
SpinalHDL, Clash, Lava, nMigen, Amaranth

## Timing Violations

Setup and hold time violations cause metastability and incorrect data capture.

Root causes: Combinational logic delays exceeding clock period, clock skew
between related registers, improper clock domain crossings, missing timing
constraints, false paths not declared.

Detection: Static timing analysis (STA), simulation with timing checks,
formal verification.

Remediation: Meet setup time through pipeline stages and retiming. Ensure
hold time with proper buffering. Use synchronizers for clock domain crossings.
Apply correct timing constraints in synthesis. Declare false paths and
multicycle paths explicitly.

## Metastability

When a signal crosses clock domains without proper synchronization, it can
settle to an unpredictable value.

Root causes: Single-flop synchronizers, missing synchronization on control
signals, asynchronous resets without synchronization, data buses crossing
domains without handshake protocols.

Detection: Simulation with random delays, formal verification of CDC protocols,
metastability injection testing.

Remediation: Use two-flop synchronizers for single-bit signals. Use
handshake protocols (FIFO, valid/ready) for multi-bit buses. Use gray code
for counters crossing domains. Apply proper reset synchronization.

## Race Conditions

Simultaneous signal changes can cause non-deterministic behavior.

Root causes: Unintended latches from incomplete case statements, blocking
assignments in sequential logic, multiple drivers on the same signal,
combinational loops.

Detection: Simulation race detection, linting tools, formal verification.

Remediation: Use non-blocking assignments (<=) in sequential always blocks.
Use blocking assignments (=) only in combinational logic. Ensure complete
case statements with default. Avoid combinational loops. Use one driver per
signal.

## Clock Domain Crossing (CDC) Errors

Improper handling of signals between different clock domains.

Root causes: Direct connection between domains without synchronizers,
missing gray code on counters, pulse synchronization without proper
protocols, data buses without handshake.

Detection: CDC checking tools, formal verification, simulation with assertion
based verification.

Remediation: Use dedicated CDC FIFOs for data transfer. Use pulse
synchronizers for single-cycle events. Ensure all control signals are
synchronized. Use gray code for pointer-based FIFOs.

## Glitch Propagation

Combinational logic glitches can trigger unintended behavior in downstream logic.

Root causes: Unregistered outputs feeding control signals, decoder outputs
used without qualification, priority encoders with overlapping conditions.

Detection: Glitch analysis in synthesis, simulation with delay annotation,
formal verification.

Remediation: Register all outputs that feed control logic. Use one-hot
encoding where appropriate. Add qualification signals to prevent false
triggers.

## Latch Inference

Unintended latches are inferred from incomplete conditional statements.

Root causes: Missing else in if statements, incomplete case statements
without default, combinational always blocks with incomplete assignments.

Detection: Synthesis warnings, linting tools, code review.

Remediation: Always include else or default. Assign all outputs in every
branch. Use explicit latch instantiation if latches are truly needed. Prefer
flip-flops over latches.

## Reset Domain Crossing

Asynchronous resets from different domains can cause synchronization issues.

Root causes: Asynchronous resets without synchronization, reset release
racing with clock edges, missing reset synchronizers.

Detection: Reset domain checking, formal verification, simulation.

Remediation: Synchronize asynchronous resets to the local clock before
use. Use reset synchronizer chains. Ensure reset release meets recovery and
removal times.

## Power Analysis Side Channels

Power consumption patterns can leak sensitive information.

Root causes: Data-dependent power consumption in cryptographic operations,
missing power analysis countermeasures, unmasked implementations.

Detection: Power analysis simulation, formal verification of masking schemes.

Remediation: Use constant-time implementations for cryptography. Apply
masking schemes to hide data-dependent power. Use dedicated secure elements
where available.

## Testability Issues

Designs without proper test infrastructure are difficult to verify.

Root causes: Missing scan chains, inadequate controllability and
observability, missing boundary scan, no built-in self-test.

Detection: Test coverage analysis, ATPG (Automatic Test Pattern Generation)
reports, code review.

Remediation: Include scan chain insertion in synthesis. Design for testability
with accessible internal nodes. Implement JTAG boundary scan. Add BIST for
memory and logic.

## Synthesis-Simulation Mismatch

Differences between simulation behavior and synthesized hardware.

Root causes: Using synthesis directives that change semantics, X-propagation
differences, uninitialized registers, different handling of don't-care states.

Detection: Equivalence checking, formal verification, gate-level simulation.

Remediation: Avoid synthesis-only constructs in behavioral code. Initialize
all registers explicitly. Handle X states consistently. Use equivalence
checking between RTL and netlist.
