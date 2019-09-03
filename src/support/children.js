import React from 'react'

export function allByType(children, type) {
	return React.Children.toArray(children).filter(child => child.type === type)
}

export function oneByType(children, type) {
	const matches = allByType(children, type)
	return matches.length > 0 ? matches[0] : null
}

export function withoutTypes(children, ...types) {
	return React.Children
		.toArray(children)
		.filter(child => types.indexOf(child.type) < 0)
}
