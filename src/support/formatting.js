import 'number-to-locale-string'

import {exists} from '../util'

const THOUSAND = 1000
const MILLION = 1000000
const BILLION = 1000000000

export const dashify = value => value.toLowerCase().replace(/\s+/g, '-')

export const commas = formatNumber()
export const flat = formatNumber(0)
export const single = formatNumber(1)
export const double = formatNumber(2)

export const readableNum = value => {
	const absValue = Math.abs(value)
	if (absValue >= BILLION) return `${currency(single(absValue / BILLION))}BB`
	if (absValue >= MILLION) return `${currency(single(absValue / MILLION))}MM`
	if (absValue >= THOUSAND) return `${currency(single(absValue / THOUSAND))}K`
	return currency(flat(absValue))
}

export const psf = value => `${currency(flat(value))}/SF`

export const psfCalc = area => value => psf(Math.abs(value) / area)

// monthYear :: Maybe MonthYear -> String
export const monthYear = (value, {short = false} = {}) => {
	if (!value) return ''
	const {month, year} = value
	const monthFull = month > 9 ? month : `0${month}`
	return `${monthFull}/${short ? year.toString().slice(-2) : year}`
}

export const currency = val => (val === 'NA' ? val : `$${val}`)
currency.flat = val => currency(flat(val))
currency.single = val => currency(single(val))
currency.double = val => currency(double(val))
export const ratio = val => (val === 'NA' ? val : `${val}x`)
ratio.flat = val => ratio(flat(val))
ratio.single = val => ratio(single(val))
ratio.double = val => ratio(double(val))
export const percent = val => (val === 'NA' ? val : `${val}%`)
percent.flat = val => percent(flat(val))
percent.single = val => percent(single(val))
percent.double = val => percent(double(val))

function formatNumber(decimals) {
	return value => {
		if (value == null) return 'NA'
		if (exists(decimals)) {
			return Number(value).toLocaleString('en-US', {
				maximumFractionDigits: decimals,
				minimumFractionDigits: decimals,
			})
		} else {
			return Number(value).toLocaleString('en-US', {maximumFractionDigits: 20})
		}
	}
}
