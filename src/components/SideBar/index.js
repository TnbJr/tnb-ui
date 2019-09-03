import React from 'react';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames/bind';
import {List} from '../helpers';
// import './_style-guide.scss';


class Link extends React.Component {
  render(){
      const linkClassName = classNames({"nav__menu--display": this.props.display})
      console.log(this.props.children, "huhu")
      return(

       <NavLink {...this.props}>  
            {this.props.children}
        </NavLink>
      

      )
  }
}

// export const Link = ({children, ...rest}) => {
//   return (
//     <a {...rest}>
//         {children}
//     </a>
//   )
// }


export const NavGroup = ({title, children}) => (
	<div className="sidebar-nav-group">
		<div className="sidebar-nav-group--title">{title}</div>
		<List>{children}</List>
	</div>
)


const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div className="sidebar--nav">
        {props.children}
      </div>
    </div>
  )
}

SideBar.NavGroup = NavGroup
SideBar.NavLink = Link

export default SideBar;