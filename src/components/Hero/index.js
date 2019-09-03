import React from 'react';
import PropTypes from 'prop-types';
import {Heading1, Overlay} from '../../index.js';

const Hero = ({header, subHeader, backgroundImage, children}) => {
    return (
        <div className="hero" style={{backgroundImage: `url(${backgroundImage})`}}> 
           <div className="hero-content">
                <Heading1 className="hero-header">{header}</Heading1>
                <p className="hero-sub-header">{subHeader}</p>
                {children}
            </div>
         </div>
    )
}

Hero.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string,
    backgroundImage: PropTypes.string
}

Hero.defaultProps = {
    header: '',
    subHeader: '',
    backgroundImage: ''
}



export default Hero;