# Sequential Logic

This directory provides a tutorial on how to create behavioral descriptions of sequential logic. Technically, sequential logic only includes flip-flops and registers
(possibly latches in rare cases or for ASICs), so the tutorial actually shows how to model circuits that are a combination of both sequential logic and
combinational logic. The ultimate purpose of this tutorial is to understand how registers get synthesized, and where they get placed in relation to other logic. One of the most
common mistakes when writing RTL code is accidentally introducing an incorrect number of registers.

## Methodology: design the circuit, then write the code.

For circuits with sequential logic, designing the circuit means deciding exactly how many registers you want, and what those registers should be connected to. Although synthesis 
optimizations may change this some (e.g. via retiming), use of registers is a critical design decision because it affects the timing of your design, which is something RTL 
synthesis cannot change. Similar to structural architectures, "designing the circuit" for sequential logic usually means creating a schematic that illustrates the exact number
and placement of all registers. With this schematic, you can easily apply the guidelines given below to ensure your design synthesizes as intended.
