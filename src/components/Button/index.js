import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ 
  children,
  secondary,
  big,
  huge,
  small,
  outline,
  darkoutline,
  transparent,
  stretch,
  warning,
  success,
  cancel,
  className,
  type
}) => {
  const classNames = cx(
    "button",
    className,
    { 
      'mod-secondary': secondary,
      'mod-big': big,
      'mod-huge': huge,
      'mod-small': small,
      'mod-outline': outline,
      'mod-darkoutline': darkoutline,
      'mod-transparent': transparent,
      'mod-stretch': stretch,
      'mod-warning': warning,
      'mod-success': success,
      'mod-cancel': cancel,
  
    }
  )

  return (
    <button className={classNames} type={type}>
      {children}
    </button>
  )
}

Button.defaultProps  = {
  huge: false,
  big: false,
  small: false,
  stretch: false,
  outline: false,
  darkoutline: false,
  transparent: false,
  warning: false,
  success: false,
  className: '',
  cancel: false,
  

}
Button.propTypes = {
   /** Description of prop "foo". */
	huge: PropTypes.bool,
	big: PropTypes.bool,
  small: PropTypes.bool,
  stretch: PropTypes.bool,
   /** Use on color background */
  outline: PropTypes.bool,
  darkoutline: PropTypes.bool,
  transparent: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  cancel: PropTypes.bool,
  className: PropTypes.string
}

export default Button;

export const ButtonContainer = ({children, centered, right}) => {
  const classNames = cx(
    'button-container',
    {
      'mod-centered': centered,
      'mod-right': right
    }
  )

	return <div className={classNames}>{children}</div>
}