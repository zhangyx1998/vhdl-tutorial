import contents from './contents'

export const
	basics = [
		{
			text: 'Combinational Logic',
			collapsible: true,
			items: contents.combinational
		},
		{
			text: 'Structural Architectures',
			collapsible: true,
			items: contents.structural
		},
		{
			text: 'Sequential Logic',
			collapsible: true,
			items: contents.sequential
		},
	],
	advanced = [
		{
			text: 'Finite-State Machines',
			collapsible: true,
			items: contents.fsm
		},
		{
			text: 'Finite-State Machines + Datapaths',
			collapsible: true,
			items: contents.fsmd
		},
	],
	extras = {
		text: 'VHDL Extras',
	}