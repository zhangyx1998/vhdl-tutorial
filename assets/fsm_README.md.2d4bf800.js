import{_ as e,c as t,o,a as s}from"./app.19d4c3c2.js";const g=JSON.parse('{"title":"Finite-State Machines","description":"","frontmatter":{},"headers":[{"level":2,"title":"Methodology: design the circuit, then write the code.","slug":"methodology-design-the-circuit-then-write-the-code","link":"#methodology-design-the-circuit-then-write-the-code","children":[]},{"level":2,"title":"Schematic","slug":"schematic","link":"#schematic","children":[]}],"relativePath":"fsm/README.md"}'),a={name:"fsm/README.md"},i=s(`<h1 id="finite-state-machines" tabindex="-1">Finite-State Machines <a class="header-anchor" href="#finite-state-machines" aria-hidden="true">#</a></h1><p>This directory provides a tutorial on how to create finite state machines (FSMs) in VHDL. The example demonstrates two different models, which I refer to as the 1-process and 2-process models. The 1-process model uses the coding guidelines from sequential logic to capture the state register, next-state logic, and output logic in a single process. However, this model has the limitation of registering the outputs, which I don&#39;t recommend unless you have a good reason to do so. The 2-process model uses one process for sequential logic (the state register) and another process for combinational logic (next-state and output logic). I strongly recommend the 2-process model to avoid the extra cycle of delay on the output of the 1-process model.</p><p>You might see other people using 3- and 4-process models, but I&#39;ve never seen an advantage. <a href="http://www.sunburst-design.com/papers/CummingsSNUG2019SV_FSM1.pdf" target="_blank" rel="noreferrer">This paper</a> is an excellent paper on different FSM coding styles. It reports advantages of their 3- and 4- process models, but I can represent everything in those models using 2 processes, so to my knowledge there is no inherent technical advantage, possibly just a convenience advantage. In any case, I will explore the issue further and update the examples for any new findings.</p><h2 id="methodology-design-the-circuit-then-write-the-code" tabindex="-1">Methodology: design the circuit, then write the code. <a class="header-anchor" href="#methodology-design-the-circuit-then-write-the-code" aria-hidden="true">#</a></h2><p>For FSMs, designing the circuit is a little more obvious, and corresponds to creating the states, transitions between states, and outputs for each state and/or transition. Basically, you want create a diagram for the FSM. Given that diagram, it is trivial to convert the FSM into code, as shown in the examples below.</p><h2 id="schematic" tabindex="-1">Schematic <a class="header-anchor" href="#schematic" aria-hidden="true">#</a></h2><iframe src="fsm.pdf#toolbar=0&amp;navpanes=0" style="width:100%;border:none;rule:none;min-height:30rem;">
</iframe><blockquote><p>Alternative link: <a href="fsm.pdf" target="_blank">fsm.pdf</a></p></blockquote>`,8),n=[i];function r(c,h,d,l,p,m){return o(),t("div",null,n)}const f=e(a,[["render",r]]);export{g as __pageData,f as default};
