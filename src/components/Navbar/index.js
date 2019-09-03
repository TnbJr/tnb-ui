import React from 'react';
import { noop } from 'lodash';
import className from 'classnames';
import PropTypes from 'prop-types';


class NavBar extends React.Component {
    renderNavLinks(){
        const { navLinks } = this.props;
        return navLinks.map(nav => (
            <li><a href={nav.url}>{nav.header}</a></li> 
        ))
    }

    render(){
        const { drawerClickHandler, Logo } = this.props;
        return(
            <nav className="navbar">
            <div className="navbar-logo">
                <Logo/>
            </div>
            <div className="navbar-links">
                <ul>
                    {this.renderNavLinks()}
                </ul>
            </div>
            <div className="navbar-toggle" onClick={drawerClickHandler}>
                <div dangerouslySetInnerHTML={{ __html: '&#9776'}}></div>
            </div>
        </nav>
        )
    }
}
export default NavBar;

NavBar.propTypes = {
    drawerClickHandler: PropTypes.func.isRequired,
    Logo: PropTypes.element.isRequired
}

NavBar.defaultProps = {
    drawerClickHandler: noop,
    Logo: () => (<img src=""></img>),
    navLinks: [],
}