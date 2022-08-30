# Delay

@vhdl:make-src-list

## Brief

- Illustrates behavioral alternative to earlier structural delay that still synthesizes the same circuit.

- Illustrates default input values.

- Illustrates synthesis attributes to prevent inferring of non-flip-flop resources (e.g., embedded RAM).

- NOTE: This is very useful entity. I use it in almost every application I work on. I've had heavily pipelined applications where delays were the primary resource resource bottleneck.

@vhdl:auto-index delay.vhd
@vhdl:auto-index delay_tb.vhd