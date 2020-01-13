import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

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

export default Checkbox;