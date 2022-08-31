import type MarkdownIt from "markdown-it/lib"

import loadFile from "../loadFile"
import extract from './extract'
import autoIndex from "./autoIndex"
import srcList from "./srcList"

interface MarkdownItEnv {
	path: string,
	relativePath: string,
	content: string,
	frontmatter: Object
}

const Rx = {
	get mdEscape() {
		return /^\@vhdl(\:(?<action>\S+))?(\s(?<params>.+))?$/i
	}
}

export default function (md: MarkdownIt): void {
	const { parse } = md
	md.parse = function (src: string, env: MarkdownItEnv): any {
		const { path, relativePath, content, frontmatter } = env;
		// Scan and insert code blocks
		const modifiedSrc = src
			.split('\n')
			.map((line, lineNumber) => {
				const match = Rx.mdEscape.exec(line)?.groups
				if (!match || typeof match !== "object") return line
				else {
					const
						{ action = '', params = '' } = match,
						envExt = { action: 'VHDL File', line, lineNumber, ...env }
					switch (action.toUpperCase()) {
						case 'MAKE-SRC-LIST': return srcList(envExt, params.trim());
						case 'AUTO-INDEX': {
							const target = params.trim()
							return loadFile(envExt, target, buf =>autoIndex(buf.toString()))
						};
						case 'EXTRACT': default: {
							const [rule, target = '.'] = params.split(/\sfrom\s/i)
							return loadFile(envExt, target, buf => extract(buf.toString(), rule));
						}
					}
				}
			})
			.join('\n')
		// Pass down modified content
		return parse.apply(md, [modifiedSrc, env])
	}
}
