import { defineConfig, DefaultTheme } from 'vitepress'

import * as sidebar from './sidebar'

import VHDL_Loader from './vhdl'
import Chart_Loader from './chart'

const ogDescription = 'Next Generation Frontend Tooling'
const ogImage = 'https://vitejs.dev/og-image.png'
const ogTitle = 'Vite'
const ogUrl = 'https://vitejs.dev'

export default defineConfig({
	title: `VHDL Tutorial`,
	description: 'Quickly get started with VHDL language',
	base: '/vhdl-tutorial/',
	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/icon.png' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:title', content: ogTitle }],
		['meta', { property: 'og:image', content: ogImage }],
		['meta', { property: 'og:url', content: ogUrl }],
		['meta', { property: 'og:description', content: ogDescription }],
		['meta', { name: 'twitter:card', content: 'summary_large_image' }],
		['meta', { name: 'twitter:site', content: '@vite_js' }],
		['meta', { name: 'theme-color', content: '#646cff' }]
	],

	vue: {
		reactivityTransform: true
	},

	markdown: {
		config: md => {
			VHDL_Loader(md)
			Chart_Loader(md)
		}
	},

	themeConfig: {
		logo: '/icon.png',

		// editLink: {
		// 	pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
		// 	text: 'Suggest changes to this page'
		// },

		// socialLinks: [
		// 	{ icon: 'twitter', link: 'https://twitter.com/vite_js' },
		// 	{ icon: 'discord', link: 'https://chat.vitejs.dev' },
		// 	{ icon: 'github', link: 'https://github.com/vitejs/vite' }
		// ],

		// algolia: {
		// 	appId: '7H67QR5P0A',
		// 	apiKey: 'deaab78bcdfe96b599497d25acc6460e',
		// 	indexName: 'vitejs',
		// 	searchParameters: {
		// 		facetFilters: ['tags:en']
		// 	}
		// },

		footer: {
			message: `Released under GNU GENERAL PUBLIC LICENSE.`,
			copyright: 'Copyright © 2022-present Greg Stitt'
		},

		nav: [
			{
				text: 'Basics',
				items: [
					{
						text: 'Combinational Logic',
						link: '/combinational/README'
					},
					{
						text: 'Structural Architectures',
						link: '/structural/README'
					},
					{
						text: 'Sequential Logic',
						link: '/sequential/README'
					}
				]
			},
			{
				text: 'Advanced',
				items: [
					{ text: 'Finite-State Machines', link: '/fsm/README' },
					{ text: 'Finite-State Machines + Datapaths', link: '/fsmd/README' },
				]
			},
			{
				text: 'Extras',
				items: [
					{ text: 'Misc (TBD)', link: '/404' },
					{ text: 'Testbenches (TBD)', link: '/404' }
				]
			},
		],

		sidebar: {
			'/combinational/': sidebar.basics,
			'/structural/': sidebar.basics,
			'/sequential/': sidebar.basics,
			'/fsm/': sidebar.advanced,
			'/fsmd/': sidebar.advanced,
			// '/misc/': sidebar.extras,
			// '/tb/': sidebar.extras,
		}
	}
})
