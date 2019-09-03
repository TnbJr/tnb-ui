import React from 'react';
import PropTypes from 'prop-types';


const Icon = props => (
    <svg
        width={`${props.size}px`}
        height={`${props.size}px`}
        viewBox="0 0 1024 1024">
        <path
            d={props.icon}
        ></path>
    </svg>
);

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
};

Icon.defaultProps = {
    size: 16
}

export default Icon