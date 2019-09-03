import React from 'react';
import ReactSelect from 'react-select'
import PropTypes from 'prop-types';
import { optionObjects } from '../../util';

const MultiSelect = ({
	value,
	disabled,
	onChange,
	options,
	placeholder,
}) => (
		<ReactSelect
            multi={true}
            className='multi-select'
            classNamePrefix="react-select"
			placeholder={placeholder}
			value={value || []}
			disabled={disabled}
			options={optionObjects(options)}
			onChange={selected => onChange((selected || []).map(({value}) => value))}
		/>
)

MultiSelect.displayName = 'MultiSelect'

MultiSelect.propTypes = {
	value: PropTypes.arrayOf(PropTypes.string),
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	// options: optionPropType.isRequired,
	disabled: PropTypes.bool,
}

export default MultiSelect;