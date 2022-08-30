import { resolve } from 'path'

function relative(obj, base) {
	if (typeof obj !== 'object') return;
	if ('link' in obj && typeof obj.link === 'string') {
		let resolved_link = resolve('/', base, obj.link)
		obj.link = obj.link.endsWith('/')
			? resolved_link + '/'
			: resolved_link
	}
	// Recursively update all nested links
	for (const key in obj) {
		relative(obj[key], base);
	}
	// Return the result
	return obj
}
// Actual Contents
import combinational from '../combinational/contents'
import sequential from '../sequential/contents'
import structural from '../structural/contents'
import fsm from '../fsm/contents'
import fsmd from '../fsmd/contents'
// Exports
export default Object.fromEntries(
	Object
		.entries({
			combinational,
			sequential,
			structural,
			fsm,
			fsmd
		})
		.map(([key, val]) => [key, relative(val, key)])
)