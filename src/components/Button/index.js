import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ 
  children,
  big,
  huge,
  small,
  outline,
  darkoutline,
  transparent,
  stretch,
  warning,
  success,
  highlight,
  cancel,
  className,
  type
}) => {
  const classNames = cx(
    "button",
    className,
    { 
      'mod-big': big,
      'mod-huge': huge,
      'mod-small': small,
      'mod-outline': outline,
      'mod-darkoutline': darkoutline,
      'mod-transparent': transparent,
      'mod-stretch': stretch,
      'mod-warning': warning,
      'mod-success': success,
      'mod-highlight': highlight,
      'mod-cancel': cancel,
    }
  )

  return (
    <button className={classNames} type={type}>
      {children}
    </button>
  )
}


Button.propTypes = {
   /** Description of prop "foo". */
	huge: PropTypes.bool,
	big: PropTypes.bool,
  small: PropTypes.bool,
  stretch: PropTypes.bool,
  outline: PropTypes.bool,
  darkoutline: PropTypes.bool,
  transparent: PropTypes.bool,
  warning: PropTypes.bool,
  success: PropTypes.bool,
  highlight: PropTypes.bool,
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