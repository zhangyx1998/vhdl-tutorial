import contents from '../contents.js'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import { existsSync, readFileSync } from 'fs'
const PROJECT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const
	categories = Object.fromEntries(
		contents.map(({ category }) => [category, []])
	),
	sidebarEntries = []

function relativePath(obj, base) {
	if (typeof obj !== 'object') return;
	if ('link' in obj && typeof obj.link === 'string') {
		let resolved_link = resolve('/', base, obj.link)
		obj.link = obj.link.endsWith('/')
			? resolved_link + '/'
			: resolved_link
	}
	// Recursively update all nested links
	for (const key in obj) {
		relativePath(obj[key], base);
	}
	// Return the result
	return obj
}

export const nav = contents.map(({ category, directories }) => {
	return {
		text: category.replace(/^\w/i, l => l.toUpperCase()),
		items: directories.map(dir => {
			// Register this category into the categories list
			sidebarEntries.push([`/${dir}/`, categories[category]])
			const
				readmePath = resolve(PROJECT_ROOT, dir, 'README.md'),
				contentsPath = resolve(PROJECT_ROOT, dir, 'contents.json')
			if (!existsSync(readmePath)) {
				return {
					text: `${dir} (TBD)`,
					link: '/404'
				}
			} else {
				for (const line of readFileSync(readmePath).toString().split('\n')) {
					const Rx = /^\s*#\s+/
					if (Rx.test(line)) {
						const title = line.replace(Rx, '').trim()
						if (existsSync(contentsPath)) {
							try {
								categories[category].push({
									text: title,
									collapsible: true,
									items: relativePath(
										JSON.parse(
											readFileSync(contentsPath).toString()
										),
										dir
									)
								})
							} catch (e) {
								console.error(e);
								categories[category].push({
									text: 'ERROR: ' + e.message,
									link: '/500'
								})
							}
						} else {
							categories[category].push({
								text: title,
								link: `/${dir}/README`
							})
						}
						return {
							text: title,
							link: `/${dir}/README`
						}
					}
				}
			}
			// README.md exists but no h1 title can be extracted
			return {
				text: dir,
				link: `/${dir}/README`
			}
		})
	}
})

export const sidebar = Object.fromEntries(sidebarEntries)
