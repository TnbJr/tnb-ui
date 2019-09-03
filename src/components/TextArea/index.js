import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import cx from 'classnames';

const TextArea = ({
    name,
    value,
    onChange,
    onBlur,
    disabled,
    placeholder,
    classNames,
    }) => {
    const classes = cx('text-area-input', classNames, {
        'disabled': disabled
    })
    return(
        <div className={classes}>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                placeholder={placeholder}
            />
        </div>
    )
}

export default TextArea;

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    placeholder: PropTypes.string,

}

TextArea.defaultProps = {
    name: '',
    value: '',
    disabled: false,
    onChange: noop,
    onBlur: noop,
    placeholder: ''
}