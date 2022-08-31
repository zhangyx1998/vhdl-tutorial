# Structural Logic

This directory provides a tutorial on how to create structural descriptions, which are generally just code representations of a schematic. A schematic is just an interconnection
of existing components, which can be any type of logic, and any level of granularity.

# Methodology: design the circuit, then write the code.

For structural descriptions, designing the circuit means creating the schematic. For every component in the schematic, you will simply instantiate an existing entity 
(or create one if necessary), and then connect them together as shown in the schematic. The primary creativity in structural descriptions is identifying patterns (or exceptions) 
in the structure that can be described with generate constructs, as the examples will show.

# Suggested Study Order

1. [4:1 mux](mux4x1.md)  
1. [Ripple-Carry Adder](ripple_carry_adder.md)
1. [Delay](delay.md)
<!-- 1. [Add Tree (TBD)]() -->
    

