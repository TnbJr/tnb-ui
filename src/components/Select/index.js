import React from 'react';
import ReactSelect from 'react-select'
import cx from 'classnames';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import { optionObjects, iff } from '../../util';

export const Select = ({
	name,
	value,
	required,
	disabled,
	onChange,
	onBlur,
	options,
	placeholder,
	label,
	classNames,
	...props
}) => {
	const classes = cx('select', classNames, {
		'disabled': disabled
	})
	return (
		<div className={classes}>
			<select
				name={name}
				value={value}
				disabled={disabled}
				onChange={onChange}
				onBlur={onBlur}
				{...props}
			>
				<option value="None">{placeholder}</option>
				{optionObjects(options).map(({label, value: optValue}) => (
					<option key={optValue} value={optValue}>
						{label}
					</option>
				))}
			</select>
			<div className="select--placeholder"/>
		</div>
	)
}

Select.displayName = 'Select'

Select.propTypes = {
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
	disabled: PropTypes.bool,
	required: PropTypes.bool,
	classNames: PropTypes.string,
}

Select.defaultProps = {
	value: '',
	name: '',
	options: [],
	required: false,
	disabled: false,
	onChange: noop,
	onBlur: noop,
	classNames: '',
}
export const MultiSelect = ({
	value,
	disabled,
	onChange,
	options,
	placeholder,
}) => (
	<div className="multi-select">
		<ReactSelect
			multi={true}
			placeholder={placeholder}
			value={value || []}
			disabled={disabled}
			options={optionObjects(options)}
			onChange={selected => onChange((selected || []).map(({value}) => value))}
		/>
	</div>
)

MultiSelect.displayName = 'MultiSelect'

MultiSelect.propTypes = {
	value: PropTypes.arrayOf(PropTypes.string),
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	// options: optionPropType.isRequired,
	disabled: PropTypes.bool,
}
export default Select;