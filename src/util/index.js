import {ONE_DAY} from './constants'

export const iff = (exp, cb) => (exp ? cb() : null)

export const switchiff = (exp, cases) => {
	const matches = cases.filter(
		c => c.case === exp || (Array.isArray(c.case) && c.case.indexOf(exp) >= 0)
	)
	if (matches.length) return matches[0].run()

	const defaultMatches = cases.filter(c => !!c.default)
	if (defaultMatches.length) return defaultMatches[0].default()

	return null
}

export function range(end, start = 0) {
	return end < start
		? range(start, end)
		: Array.apply(null, Array(end + 1 - start)).map((_, index) => index + start)
}

export const exists = value => value != null && value != undefined

export const getFirstFocusable = parent => {
	const focusable = parent.querySelectorAll(
		'input,button,textarea,select,table'
	)[0]
	if (focusable instanceof HTMLTableElement) {
		const rows = focusable.querySelectorAll('tr')
		return rows.length > 1
			? getFirstFocusable(rows[1])
			: getFirstFocusable(rows[0])
	}
	return focusable
}

/*
 * this returns the difference in days ignoring the current time
 */
export function diffInDays(date1, date2) {
	const time1 = date1.getTime()
	const time2 = date2.getTime()

	const dayStart1 = time1 - time1 % ONE_DAY
	const dayStart2 = time2 - time2 % ONE_DAY

	return (dayStart2 - dayStart1) / ONE_DAY
}


/* HELPERS */

export function optionObjects(options) {
	if (Array.isArray(options)) {
		return options.map(label => ({value: label, label}))
	} else {
		return Object.keys(options).map(value => ({value, label: options[value]}))
	}
}