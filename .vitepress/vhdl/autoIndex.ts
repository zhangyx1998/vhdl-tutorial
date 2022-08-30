import extract from "./extract";

export default function autoIndex (src) {
	return src
		.split('\n')
		.filter(str => /^\s?(architecture|entity|package)/i.test(str))
		.map(str => {
			const rule = str.replace(/\sis\s?$/i, '')
			return [
				`## ${rule
					.replace(/^architecture/i, 'ARCH `')
					.replace(/^entity/i, 'ENTITY `')
					.replace(/^package/i, 'PKG `')
					.replace(/\sof\s/i, '` of `')
				}\``,
				'',
				extract(src, str.replace(/\sis\s?$/i, '')),
				''
			].join('\n')
		})
		.join('\n')
}