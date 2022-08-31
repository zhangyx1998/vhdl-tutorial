import { defineConfig, DefaultTheme } from 'vitepress'

import * as composed from './composer'

import VHDL_Loader from './vhdl'
import Chart_Loader from './chart'

const ogDescription = 'Yet Another VHDL Tutorial'
const ogImage = '/icon.png'
const ogTitle = 'VHDL Tutorial'
const ogUrl = 'https://gstitt.ece.ufl.edu/'

export default defineConfig({
	title: `VHDL Tutorial`,
	description: 'Quickly get started with VHDL language',
	base: '/vhdl-tutorial/',
	head: [
		['link', { rel: 'icon', type: 'image/png', href: '/vhdl-tutorial/icon.png' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:title', content: ogTitle }],
		['meta', { property: 'og:image', content: ogImage }],
		['meta', { property: 'og:url', content: ogUrl }],
		['meta', { property: 'og:description', content: ogDescription }],
		// ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
		// ['meta', { name: 'twitter:site', content: '@xxx' }],
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

		editLink: {
			pattern: 'https://github.com/ARC-Lab-UF/vhdl-tutorial/edit/main/:path',
			text: 'View markdown source'
		},

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/ARC-Lab-UF/vhdl-tutorial/' }
		],

		// algolia: {
		// 	appId: 'XXXXXXXXXX',
		// 	apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
		// 	indexName: 'vhdl-toturial',
		// 	searchParameters: {
		// 		facetFilters: ['tags:en']
		// 	}
		// },
		
		...composed,

		footer: {
			message: `Released under GNU GENERAL PUBLIC LICENSE.`,
			copyright: 'Copyright © 2022-present Greg Stitt'
		}
	}
})
