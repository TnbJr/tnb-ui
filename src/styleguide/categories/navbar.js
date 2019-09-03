import React from 'react';
import { NavBar } from '../../index.js'

const Logo = () => {
    return(
        <img src="#"/>
    )
}

export default () => (
    <div>
        <NavBar Logo={Logo} navLinks={[{"url": "#", "header": "Project"}, {"url": "#", "header": "Gallery"}, {"url": "#", "header": "Contact Us"}, {"url": "#", "header": "Donate"}]}/>
            <div className="container">
                <h2>This is a container</h2>
            </div>
    </div>
  )