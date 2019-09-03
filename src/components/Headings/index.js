import React from 'react';
import cx from 'classnames';

const Heading = type => ({id, children, className, ...props}) => {
	const element = {type}
	const classes = cx('content-heading', className)
	return (
		<element.type id={id} className={classes}>
			{children}
		</element.type>
	)
}


export const Heading1 = Heading('h1')
Heading1.displayName = 'Heading1'
export const Heading2 = Heading('h2')
Heading2.displayName = 'Heading2'
export const Heading3 = Heading('h3')
Heading3.displayName = 'Heading3'
export const Heading4 = Heading('h4')
Heading4.displayName = 'Heading4'
export const Heading5 = Heading('h5')
Heading5.displayName = 'Heading5'
export const Heading6 = Heading('h6')
Heading6.displayName = 'Heading6'