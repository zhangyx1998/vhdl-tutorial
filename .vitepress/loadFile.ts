import { resolve, dirname } from "path"
import { existsSync, readFileSync } from "fs"

export default function loadFile(env, target: string, next: (src: Buffer) => string): string {
	const vhdlSrcPath = resolve(dirname(env.path), target)
	if (existsSync(vhdlSrcPath)) {
		return next(readFileSync(vhdlSrcPath));
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