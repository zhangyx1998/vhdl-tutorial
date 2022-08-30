# Examples of Synthesizing Behavioral Code to a Specific Structure

@vhdl:make-src-list

## Brief

- Illustrates the important rule that if you assign a signal on a rising clock edge, it becomes a register.

- Illustrates common mistakes with sequential logic.

- Goes over the use of signals and variables to accomplish different goals.

- Suggestion: synthesize each module and use an RTL viewer to ensure the schematic matches the architecture in the pdf. There are no provided testbenches for these examples since they are solely intended to match the structure of the circuits in architectures.pdf. 

## Schematics

@chart architectures.pdf

@vhdl:auto-index seq_example.vhd