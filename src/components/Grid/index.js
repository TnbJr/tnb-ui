import React from "react";
import cx from 'classnames/bind';
// import './grid.scss'



export const Row = ({ children, className }) => {
  const classes = cx('container-row',
    className
  )
return (<div className={classes}>{children}</div>)
}

export const Column = (props) => {
  const classes = cx(
    props.className,
    {
      [`container__col-${props.col}`]: props.col ? true : false,
      [`container__col-xl-${props.xl}`]: props.xl ? true : false,
      [`container__col-lg-${props.lg}`]: props.lg ? true : false,
      [`container__col-md-${props.md}`]: props.md ? true : false,
      [`container__col-sm-${props.sm}`]: props.sm ? true : false,
      [`container__col-offset-${props["offset"]}`]: props["offset"] ? true : false,
      [`container__col-xl-offset-${props["offset-xl"]}`]: props["offset-xl"] ? true : false,
      [`container__col-lg-offset-${props["offset-lg"]}`]: props["offset-lg"] ? true : false,
      [`container__col-md-offset-${props["offset-md"]}`]: props["offset-md"] ? true : false,
      [`container__col-sm-offset-${props["offset-sm"]}`]: props["offset-sm"] ? true : false,
      [`hidden-xl-up`]: props["hidden-xl-up"],
      [`hidden-xl-down`]: props["hidden-xl-down"],
      [`hidden-lg-up`]: props["hidden-lg-up"],
      [`hidden-lg-down`]: props["hidden-lg-down"],
      [`hidden-md-up`]: props["hidden-md-up"],
      [`hidden-md-down`]: props["hidden-md-down"],
      [`hidden-sm-up`]: props["hidden-sm-up"],
      [`hidden-sm-down`]: props["hidden-sm-down"],
    }
  )
  return(
    <div className={classes}>
      {props.children}
    </div>
  )
}

const Grid = ({ children, className }) => <div className={className}>{children}</div>

Grid.Row = Row
Grid.Column = Column

export default Grid