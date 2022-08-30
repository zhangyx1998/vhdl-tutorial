import { readdirSync } from "fs"
import { dirname, resolve } from "path"

const style = Object.entries({
	border: '1px solid var(--vp-c-brand-darker)',
	color: 'var(--vp-c-brand-darker)',
	padding: '0.4em 0.8em',
	'margin-right': '0.8em',
})
	.map(([key, val]) => `${key}: ${val}`)
	.join('; ')

export default function srcList(env, dir) {
	const target = resolve(dirname(env.path), dir || '.')
	try {
		const list = readdirSync(target).filter(f => /\.vhdl?$/i.test(f))
		return [
			'::: details Get source code for this page',
			'<div style="display: flex; flex-direction: row;">',
			...list.map(f => `
				<a href="${resolve('/', dirname(env.relativePath), f)}" target="_blank" style="text-decoration: none !important;">
				<code style="${style}">${f}</code>
				</a>
			`.trim()),
			'</div>',
			'<div style="font-size: 0.8em; font-weight: bold; margin-top: 1em;">',
			'If your browser displays the code as plain text,',
			'press <code style="font-size: inherit;">Ctrl/Cmd</code> + <code style="font-size: inherit;">S</code> to save it.',
			'</div>',
			':::'
		].join('\n')
	} catch (e) {
		return [
			'::: danger Error Creating Src Index:',
			'',
			e.stack,
			'',
			`> Trace ( @${env.relativePath}:${env.lineNumber} ):`,
			'> ',
			'> ```markdown',
			'> ' + env.line,
			'> ```',
			':::'
		].join('\n')
	}
}