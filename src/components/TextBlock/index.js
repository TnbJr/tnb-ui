import React from 'react';
// import './_text-block.scss';

const TextBlock = ({children}) => (
	<div className="text-block">{children}</div>
)

// TextBlock.Intro = ({children, ...props}) => {
// 	const classes = ['intro', ...getMods([], props, 'centered')]
// 	return <p className={classes.join(' ')}>{children}</p>
// }

// TextBlock.Intro.displayName = 'TextBlock.Intro'

// TextBlock.Intro.propTypes = {
// 	centered: PropTypes.bool,
// }


export default TextBlock;