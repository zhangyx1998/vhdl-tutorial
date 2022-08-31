const Rx = {
	get vhdlComment() {
		return /^\s?-{2,}\s?/
	},
	get vhdlDeclares() {
		return /^\s*(library|use)/i
	},
	capture(type: string, name: string, of: string | undefined) {
		return {
			get start() {
				return new RegExp(
					(of ? [type, name, 'of', of, 'is'] : [type, name, '(of', '.+)?is']).join('\\s'),
					'i'
				)
			},
			get end() {
				return new RegExp(
					['(^|\\s)end', `(${name}|${type})` + '\\s*;'].join('\\s'),
					'i'
				)
			},
		}
	}
}

export default function extract(src: string, rule: string): string {
	const
		{ type, name, of } = /^(?<type>\S+?)\s(?<name>\S+?)(\sof\s(?<of>.+))?\s?$/i.exec(rule.trim())?.groups || {},
		capture = Rx.capture(type, name, of)
	// Flag of current scan status
	let flag_capture = false,
		// Flag of open code blocks
		pending_code: string[] = [],
		lines: string[] = []
	// Function to auto-close code fence
	function close_code_fence() {
		// Only runs when code_fence is open
		if (!pending_code.length) return
		// Backward scan
		const whitespace: string[] = []
		while (pending_code.length && !pending_code[pending_code.length - 1].trim()) {
			whitespace.push(pending_code.pop() || '')
		}
		// Reverse whitespace stack
		whitespace.reverse()
		// Insert triple back-quotes
		lines.push(
			'',
			['```vhdl', ...pending_code, '```'].join('\n'),
			'',
			...whitespace
		)
		// Empty code blocks
		pending_code = []
	}
	// Scan the source code for matching code block
	for (const line of src.split('\n')) {
		if (!flag_capture) {
			if (capture.start.test(line)) {
				flag_capture = true;
				lines.push('```vhdl')
			}
			// Empty line ends up in the tmp lines
			else if (!line.trim() && !pending_code.length) lines.push(line)
			else if (!line.trim() && pending_code.length) pending_code.push(line)
			// Comments are converted into normal content
			else if (Rx.vhdlComment.test(line)) {
				close_code_fence()
				const stripped_comment = line.replace(Rx.vhdlComment, '')
				lines.push(stripped_comment)
				if (/^university of/i.test(stripped_comment.trim())) lines = []
			}
			// 'use' and 'library' declarations won't interrupt prefix flow
			else if (Rx.vhdlDeclares.test(line)) {
				pending_code.push(line)
			}
			// Other type of uncommented code flushes tmp memory
			else {
				close_code_fence()
				lines = []
			}
		}
		// flag_capture is subject to change within the codeblock above
		if (flag_capture) {
			lines.push(line)
			// Return synthesized code upon end of block
			if (capture.end.test(line))
				return lines.join('\n') + '\n```'
		}
	}
	// No matching block found in code
	return ''
}