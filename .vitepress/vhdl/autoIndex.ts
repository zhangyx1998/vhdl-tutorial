import extract from "./extract";

export default function autoIndex(src: string) {
	return src
		.split('\n')
		.filter(str => /^\s?(architecture|entity|package)/i.test(str))
		.map(str => {
			const
				rule = str.replace(/\sis\s?$/i, ''),
				[prop, of] = rule.split(/\s+of\s+/i),
				subTitle = prop
					.replace(/^architecture\s+/i, '### Arch `')
					.replace(/^entity\s+/i, '## Entity `')
					.replace(/^package\s+/i, '## Package `')
					+ '`',
				hashLink = `#entity-${of?.toLowerCase().replace(/\s|_/gi, '-')}`
			return [
				`${subTitle}${of ? ` of [\`${of}\`](${hashLink})` : ''}`,
				'',
				extract(src, str.replace(/\sis\s?$/i, '')),
				''
			].join('\n')
		})
		.join('\n')
}