import React from 'react'
import PropTypes from 'prop-types'
import getMods from '../../support/mods'
import {iff, exists} from '../../util'

export const Message = ({title, children, ...props}) => {
	const classes = [
		'message',
		...getMods([], props, 'small', 'warning', 'error', 'tip'),
	]

	return (
		<div className={classes.join(' ')}>
			{iff(title, () => <h3 className="message--title">{title}</h3>)}
			<div className="message--content">{children}</div>
		</div>
	)
}

Message.propTypes = {
	title: PropTypes.string,
	small: PropTypes.bool,
	warning: PropTypes.bool,
	error: PropTypes.bool,
	tip: PropTypes.bool,
}

export const InputMessage = ({message: {severity, message}}) => {
	const classes = ['validation-item--message', ...getMods([severity])]
	return (
		<div className={classes.join(' ')}>
			<div className="validation-item--message--content">
				<p>{message}</p>
			</div>
		</div>
	)
}

InputMessage.propTypes = {
	message: PropTypes.shape({
		severity: PropTypes.string.isRequired,
		message: PropTypes.string.isRequired,
	}).isRequired,
}
