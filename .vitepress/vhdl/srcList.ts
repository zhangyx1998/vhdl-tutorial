import { readdirSync, readFileSync } from "fs"
import { basename, dirname, resolve } from "path"

const style = Object.entries({
	border: '1px solid var(--vp-c-brand-darker)',
	color: 'var(--vp-c-brand-darker)',
	padding: '0.4em 0.8em',
	margin: '0 0.8em 0.4em 0',
})
	.map(([key, val]) => `${key}: ${val}`)
	.join('; ')

export default function srcList(env, params) {
	// Parse params
	const range = [
		...params.split(/\s+/g),
		basename(env.path).replace(/\.md$/i, '')
	].map(s => (
		t => (new RegExp(`^${s}(_(tb|pkg))?\\.vhdl?$`, 'i')).test(t)
	))
	const target = resolve(dirname(env.path), params)
	try {
		const list = readdirSync(target).filter(f => {
			for (const r of range) if (r(f)) return true
			return false
		})
		return [
			'::: details Get source code for this page',
			'<div style="display: flex; flex-direction: row; flex-wrap: wrap;">',
			...list
				.map(f => [f, readFileSync(resolve('/', dirname(env.path), f)).toString()])
				.map(([name, data]) => `
					<a
						href="data:text/plain;charset=utf-8,${encodeURIComponent(data)}"
						style="text-decoration: none !important;"
						download="${name}"
					>
						<code style="${style}">${name}</code>
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