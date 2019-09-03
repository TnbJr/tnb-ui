import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import {iff} from '../../util';

const Notifications = ({children}) => (
	<div className="notifications">{children}</div>
)

Notifications.Item = ({button, children, warning, error, highlight}) => {
    const classNames = className('notifications--item', {
        'mod-warning': warning,
        'mod-error': error,
        'mod-highlight': highlight
    })

	return (
		<div className={classNames}>
			<p>{children}</p>
			{iff(!!button, () => (
				<Button small outline {...button}>
					{button.text}
				</Button>
			))}
		</div>
	)
}

Notifications.Item.displayName = 'Notifications.Item'

Notifications.Item.propTypes = {
	button: PropTypes.shape({
		...Button.propTypes,
		text: PropTypes.string.isRequired,
	}),
	warning: PropTypes.bool,
	error: PropTypes.bool,
	highlight: PropTypes.bool,
}

export default Notifications
