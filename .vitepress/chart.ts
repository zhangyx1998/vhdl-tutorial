import type MarkdownIt from "markdown-it/lib"
import loadSrc from "./loadSrc"

interface MarkdownItEnv {
	path: string,
	relativePath: string,
	content: string,
	frontmatter: Object
}

const Rx = {
	get mdEscape() {
		return /^\@chart\s+(?<path>\S+)$/i
	}
}

export default function (md: MarkdownIt): void {
	const { parse } = md
	md.parse = function (src: string, env: MarkdownItEnv): any {
		// Scan and insert code blocks
		const modifiedSrc = src
			.split('\n')
			.map((line, lineNumber) => {
				if (!Rx.mdEscape.test(line)) return line
				else {
					const
						path = Rx.mdEscape.exec(line)?.groups?.path || '',
						envExt = { action: 'Chart Data', line, lineNumber, ...env }
					if (path.toLowerCase().endsWith('.svg')) return loadSrc(
						envExt,
						path,
						buf => buf.toString()
					)
					else if (path.toLowerCase().endsWith('.pdf')) return loadSrc(
						envExt,
						path,
						buf => [
							`<iframe
							src="data:application/pdf;base64,${buf.toString('base64')}#toolbar=0&navpanes=0"
							style="width: 100%; border: none; rule: none; min-height: 30rem;"
						>`,
							'</iframe>',
							'',
							`> Alternative link: <a href="data:application/pdf;base64,${buf.toString('base64')}" download="${path}">${path}</a>`,
						].join('\n')
					)
					else return `<image src="${path}" />`
				}
			})
			.join('\n')
		// Pass down modified content
		return parse.apply(md, [modifiedSrc, env])
	}
}
