import React from 'react';
import className from 'classnames';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { optionObjects } from '../../util';
// import './_radio-buttons.scss';

export const RadioGroup = ({options, value, disabled, onChange, stacked}) => {
	const classNames = className('radio-button-group', {'mod-stacked': stacked})
	return (
		<div className={classNames}>
			{optionObjects(options).map(({label, value: optValue}) => (
				<Radio
					key={optValue}
					checked={value === optValue}
					label={label}
					value={optValue}
					onChange={onChange}
					disabled={disabled}
				/>
			))}
		</div>
	)
}

RadioGroup.displayName = 'RadioGroup'

RadioGroup.propTypes = {
	stacked: PropTypes.bool,
	// options: optionPropType.isRequired,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
}

RadioGroup.defaultProps = {
    onChange: noop,
}

export const Radio = ({checked, label, value, disabled, onChange}) => {
    // const classes = ['radio-button', disabled ? 'disabled' : null].filter(exists)
    const classNames = className('radio-button')
	return (
		<div className={classNames}>
			<input
				type="radio"
				value={value}
				checked={checked}
				disabled={disabled}
				onChange={e => onChange(e.target.value, e)}
				// onKeyUp={e => iff(e.key === 'Enter', () => onChange(value, e))}
			/>
			<div className="radio-button--placeholder" />
			<label className="radio-button--label">{label}</label>
		</div>
	)
}

Radio.propTypes = {
	checked: PropTypes.bool,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
}