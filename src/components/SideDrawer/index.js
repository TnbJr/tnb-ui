import React from 'react';
import className from 'classnames';
// import {Icons} from '../../index.js';

class SideDrawer extends React.Component{

    renderNavLinks(){
        const { navLinks } = this.props;
        return navLinks.map(nav => (
            <li><a href={nav.url}>{nav.header}</a></li> 
        ))
    }

    render(){
        const {closeBtnClickHandler, show } = this.props;
        const classes = className("side-drawer", {
            "side-drawer--open": show
        })
        return(
            // <div className="overlay">
                <nav className={classes}>
                    <div className="side-drawer-close-btn">
                        <a href="#" onClick={closeBtnClickHandler}>
                            {/* <Icons.Close /> */}
                        </a>
                    </div>
                    <ul className="side-drawer-nav">
                        {this.renderNavLinks()}
                    </ul>
                    {/* <div className="side-drawer-footer">
                        Footer
                    </div> */}
                </nav> 
            // </div>

        )
    }
}

export default SideDrawer;

SideDrawer.defaultProps = {
    navLinks: [],
}