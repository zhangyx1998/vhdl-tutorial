import { resolve, dirname } from "path"
import { existsSync, readFileSync } from "fs"

export default function loadSrc (env, target: string, next: (src: string) => string): string {
	const vhdlSrcPath = resolve(
		dirname(env.path),
		/\.vhdl?$/i.test(target)
			? target
			: target + '.vhd'
	)
	if (existsSync(vhdlSrcPath)) {
		return next(readFileSync(vhdlSrcPath).toString());
	} else {
		return [
			`::: danger Error Resolving ${env.action || 'Inline Import'}:`,
			'',
			`File \`${vhdlSrcPath}\` dose not exist`,
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