import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

const Switch = ({value, disabled, offLabel, onLabel, onChange}) => {
    // const classes = ['switch', disabled ? 'disabled' : null].filter(exists)
    const classNames = className('switch')
	return (
		<div className={classNames}>
			{/* {iff(offLabel, () => <div className="switch--label">{offLabel}</div>)} */}
			<div className="switch--control-container">
				<input
					type="checkbox"
					checked={value}
					onChange={e => onChange(!value, e)}
					disabled={disabled}
					// onKeyUp={e => iff(e.key === 'Enter', () => onChange(!value, e))}
				/>
				<div className="switch--control" />
			</div>
			{/* {iff(onLabel, () => <div className="switch--label">{onLabel}</div>)} */}
		</div>
	)
}

Switch.displayName = 'Switch'

Switch.propTypes = {
	value: PropTypes.bool,
	offLabel: PropTypes.string,
	onLabel: PropTypes.string,
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
}

Switch.defaultProps = {
	onChange: () => {},
}

export default Switch;