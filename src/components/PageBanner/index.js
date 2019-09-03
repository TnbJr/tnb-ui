import React from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'

const Banner = ({children, warning, error, highlight}) => {
    const classNames = className(
        'page-banner', {
            'mod-warning': warning,
            'mod-error': error,
            'mod-highlight': highlight
        }
    )
	return (
		<div className={classNames}>
			<p>{children}</p>
		</div>
	)
}

Banner.propTypes = {
	warning: PropTypes.bool,
	error: PropTypes.bool,
	highlight: PropTypes.bool,
}

export default Banner
