import PropTypes from 'prop-types'

const responsive = type =>
	PropTypes.oneOfType([
		type,
		PropTypes.shape({lg: type, sm: type, md: type, xs: type}),
	])
responsive.objectify = val => {
	const mapped = typeof val === `object` ? val : {lg: val}
	mapped.lg = mapped.lg || mapped.md || mapped.sm || mapped.xs
	return mapped
}

export default {
	responsive,
	...PropTypes,
}
