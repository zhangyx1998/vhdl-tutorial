# Combinational Logic

This part of tutorial talks about how to create synthesizable behavior descriptions of combinational logic. All examples include testbenches for simulation, which uses the name of the module being simulated with a  `_tb.vhd` suffix. Testbenches are commented, but will be explained in detail in a different section of the tutorial. Some of the examples may also have a `_tb.sv` suffix to demonstrate using SystemVerilog testbenches to test VHDL code.

## Methodology: design the circuit, then write the code.

As with all circuits, first design the combinational circuit, then write the code. With combinational logic, this methodology is often confusing because synthesis tools are generally very good at optimizing combinational logic. So, unlike other types of logic, you can write often combinational logic in many ways that will all synthesize to efficient circuits. However, you should at the very least consider the I/O interface before starting to write the code. You could also try to simplify the logic manually, but for pure combinational logic, synthesis tools will likely do a better job.

## Coding Guidelines for Combinational Logic

The exmples below give many suggestions, but there are two guidelines that should never be violated for combinational logic:

1. All inputs must be in the sensitivty list for a process, or there likely will be difference between simulation and synthesis.

1. All outputs must be defined on all paths through a process, or latches will be created during synthesis.
