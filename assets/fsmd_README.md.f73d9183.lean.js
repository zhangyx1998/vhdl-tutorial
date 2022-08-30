import{_ as a,c as i,o as s,b as t,d as e}from"./app.19d4c3c2.js";const y=JSON.parse('{"title":"Finite-State Machines + Datapaths","description":"","frontmatter":{},"headers":[{"level":2,"title":"Methodology: design the circuit, then write the code.","slug":"methodology-design-the-circuit-then-write-the-code","link":"#methodology-design-the-circuit-then-write-the-code","children":[]}],"relativePath":"fsmd/README.md"}'),n={name:"fsmd/README.md"},o=t("h1",{id:"finite-state-machines-datapaths",tabindex:"-1"},[e("Finite-State Machines + Datapaths "),t("a",{class:"header-anchor",href:"#finite-state-machines-datapaths","aria-hidden":"true"},"#")],-1),r=t("p",null,"This directory provides a tutorial on how to create controllers and datapaths to implement a specific algorithm. The examples demonstrate two different specification styles: FSMDs and FSM+Ds. An FSMD describes both the controller and datapath functionality at the same time in a single module. An FSM+D first creates an explicit datapath and a corresponding controller, and then combines them together.",-1),h=t("h2",{id:"methodology-design-the-circuit-then-write-the-code",tabindex:"-1"},[e("Methodology: design the circuit, then write the code. "),t("a",{class:"header-anchor",href:"#methodology-design-the-circuit-then-write-the-code","aria-hidden":"true"},"#")],-1),d=t("p",null,"For FSMDs and FSM+Ds, designing the circuit first requires designing an algorithm, which in many cases of hardware design is provided by a separate designer. For an FSMD, the next step in designing the circuit is breaking up the operations in the algorithm into separate states. The resulting design is essentially a finite state machine, but where instead of just having outputs and next-state transitions, you also have datapath operations assigned to states. After creating a diagram for this FSMD, there is a straightfoward translation into code. For FSM+Ds, the next step after creating the algorithm is to design a datapath to provide the necessary resources. You then create a module to capture this datapath, often structurally using other modules. After designing the datapath, you then create a corresponding controller, which is just a normal FSM. In some cases, that FSM will match the control states of the FSMD, but not always. After designing the controller, the FSM+D simply connects the controller with the datapath to provide a complete solution.",-1),c=[o,r,h,d];function l(p,g,u,m,f,_){return s(),i("div",null,c)}const F=a(n,[["render",l]]);export{y as __pageData,F as default};
