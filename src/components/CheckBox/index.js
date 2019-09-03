import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { optionObjects } from '../../util';
// export const CheckboxGroup = ({
// 	options,
// 	value: values,
// 	disabled,
// 	onChange,
// 	...flags
// }) => {
// 	// const classes = ['checkbox-group', ...getMods([], flags, 'stacked')]
// 	const classes = cx('checkbox-group')
// 	const optionsObjects = optionObjects(options)

// 	return (
// 		<div className={classes}>
// 			{optionsObjects.map(({label, value: optValue}) => (
// 				<Checkbox
// 					key={optValue}
// 					value={values.indexOf(optValue) >= 0}
// 					label={label}
// 					onChange={handleToggle(optValue)}
// 					disabled={disabled}
// 				/>
// 			))}
// 		</div>
// 	)

// 	function handleToggle(optValue) {
// 		return !onChange
// 			? () => {}
// 			: function(isSet, evt) {
// 					const newValues = isSet
// 						? // this weirdness ensures the order of values matches the options
// 							optionsObjects
// 								.map(({value}) => value)
// 								.filter(
// 									value => value === optValue || values.indexOf(value) >= 0
// 								)
// 						: remove(values, optValue)
// 					onChange(newValues)
// 				}
// 	}

// 	function remove(arr, item) {
// 		const index = arr.indexOf(item)
// 		if (index < 0) {
// 			return arr
// 		}
// 		return [...arr.slice(0, index), ...arr.slice(index + 1)]
// 	}
// }

// CheckboxGroup.displayName = 'CheckboxGroup'

// CheckboxGroup.propTypes = {
// 	stacked: PropTypes.bool,
// 	// options: optionPropType.isRequired,
// 	value: PropTypes.arrayOf(PropTypes.string),
// 	disabled: PropTypes.bool,
// 	onChange: PropTypes.func,
// }

// CheckboxGroup.defaultProps = {
// 	value: [],
// }

export const Checkbox = ({name, label, disabled, value, onChange, onBlur}) => {
	const classNames = cx('checkbox');
	return (
		<div className={classNames}>
			<input
				type="checkbox"
				name={name}
				checked={value}
				disabled={disabled}
				onChange={onChange}
				onBlur={onBlur}
			/>
			<div className="checkbox--placeholder" />
			<label
			 className="checkbox--label" 
			>
				{label}
			</label>
		</div>
	)
}

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	name:PropTypes.string.isRequired,
	value: PropTypes.bool.isRequired,
	disabled: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func.isRequired
}

Checkbox.defaultProps = {
	label: '',
	name: '',
	value: false,
	disabled: false,
	onChange: noop,
	onBlur: noop,
}