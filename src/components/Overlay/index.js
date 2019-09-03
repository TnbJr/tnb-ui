import React from 'react';
import cx from 'classnames';


const Overlay = ({show, backdropClick, classNames }) => {
    const classes = cx('overlay', classNames, {'active': show})
    return(<div onClick={backdropClick} className={classes}></div>)
}

export default Overlay;