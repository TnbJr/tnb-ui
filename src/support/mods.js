import {exists} from '../util'

function getMods(addOns = [], props = {}, ...flags) {
	return [...flags.map(flag => (props[flag] ? flag : null)), ...addOns]
		.filter(exists)
		.map(toModClass)
}

export const toModClass = mod => `mod-${mod}`

export default getMods
