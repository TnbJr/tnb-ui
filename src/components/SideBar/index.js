import React from 'react';
import {NavLink} from 'react-router-dom';
import cx from 'classnames/bind';
import {List} from '../helpers';

class Link extends React.Component {
  render(){
      const { children, link, className} = this.props;
      const classes = cx("nav-item", className);
      return(

       <NavLink {...this.props} to={link} className={classes}>  
            {children}
        </NavLink>
      

      )
  }
}

export const NavGroup = ({title, children}) => (
	<div className="sidebar-nav-group">
		<div className="sidebar-nav-group--title">{title}</div>
		<List>{children}</List>
	</div>
)

const SideBar = ({children, className}) => {
  const classNames = cx("sidebar", className)
  return (
    <div className={classNames}>
      <div className="sidebar--nav">
        {children}
      </div>
    </div>
  )
}

SideBar.NavGroup = NavGroup
SideBar.NavLink = Link

export default SideBar;