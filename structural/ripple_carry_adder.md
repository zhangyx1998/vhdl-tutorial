---
outline: deep
---
# Ripple-Carry Adder

@vhdl:make-src-list

## Brief

- Introduces the for-generate construct.    

- See the schematic below for reference.

::: warning Important Point
Use the "for generate" statement anytime that there is a pattern in a structural description. This construct will allow you to specify very large structures with very little code.
:::

## Schematic

@chart ripple_carry_adder.pdf

@vhdl:auto-index ripple_carry_adder.vhd
@vhdl:auto-index ripple_carry_adder_tb.vhd