import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';
import cx from 'classnames';
const TextInput = ({
	name,
	type,
	value,
	onBlur,
	onChange,
	onFocus,
	disabled,
	placeholder,
	errors,
	tiny,
	small,
	long,
	big,
	stretch,
	classNames
  }) => {
	  const classes = cx('text-input', classNames,
	 	{
			'disabled': disabled,
			'mod-big': big,
			'mod-tiny': tiny,
			'mod-small': small,
			'mod-long': long,
			'mod-stretch': stretch,
			'mod-error': errors
		 } 
	  )
	return ( 
		<div className={classes}>
			<input
				name={name}
				value={value}
				type={type}
				onBlur={onBlur}
				onChange={onChange}
				onFocus={onFocus}
				placeholder={placeholder}
			/>
		</div>
	)
  }


TextInput.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string,
	password: PropTypes.bool,
	disabled: PropTypes.bool,
	onFocus: PropTypes.func,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	// sizing
	tiny: PropTypes.bool,
	small: PropTypes.bool,
	long: PropTypes.bool,
	stretch: PropTypes.bool,
	classNames: PropTypes.string,
}

TextInput.defaultProps = {
	type: "text",
	value: '',
	name: '',
	placeholder: '',
    onFocus: noop,
	onChange: noop,
	onBlur: noop,
	disabled: false,
	tiny: false,
	small: false,
	long: false,
	big: false,
	stretch: false,
	classNames: ''
}

export default TextInput;