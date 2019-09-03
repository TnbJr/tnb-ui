import React, { Component } from 'react';
import { Switch, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';
import Buttons from './categories/buttons'
import Inputs from './categories/inputs'
import Forms from './categories/forms'
import Radio from './categories/radio'
import CheckBox from './categories/checkbox'
import Select from './categories/select';
import Icon from './categories/icons';
import SwitchInput from './categories/switch';
import PageBanner from './categories/page-banner';
import Notifications from './categories/notifications';
import Modal from './categories/modal';
import Tooltip from './categories/tooltip';
import Grid from './categories/grid';
import NavBar from './categories/navbar';
import Hero from './categories/hero';


const SideBar = ({ match }) => (
  <div className="styleguide--sidebar">
    <ul className="styleguide--nav">
      <li className="styleguide--nav--item"><NavLink exact to="/">Buttons</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/inputs">Input</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/forms">Forms</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/radio">Radio Input</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/checkbox">Checkbox Input</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/select">Select Input</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/icon">Icons</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/switch">Switch</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/page-banner">Page Banner</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/notification">Notification</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/modal">Modal</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/tooltip">Tooltip</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/grid">Grid</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/navbar">Nav Bar</NavLink></li>
      <li className="styleguide--nav--item"><NavLink exact to="/hero">Hero</NavLink></li>
    </ul>
  </div>
)

class StyleGuide extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <div className="styleguide">
            <SideBar />
            <div className="styleguide--content">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={Buttons}
                // render={(props) => <div>heyy</div>}
                />
                <Route
                  path="/inputs"
                  component={Inputs}
                />
                <Route
                  path="/forms"
                  component={Forms}
                />
                <Route
                  path="/radio"
                  component={Radio}
                />
                <Route
                  path="/checkbox"
                  component={CheckBox}
                />
                <Route
                  path="/select"
                  component={Select}
                />
                <Route
                  path="/icon"
                  component={Icon}
                />
                <Route
                  path="/switch"
                  component={SwitchInput}
                />
                <Route
                  path="/page-banner"
                  component={PageBanner}
                />
                <Route
                  path="/notification"
                  component={Notifications}
                />
                <Route
                  path="/modal"
                  component={Modal}
                />
                <Route
                  path="/tooltip"
                  component={Tooltip}
                />
                <Route
                  path="/grid"
                  component={Grid}
                />
                <Route
                  path="/navbar"
                  component={NavBar}
                />
                <Route
                  path="/hero"
                  component={Hero}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>

      </>
    );
  }
}

export default StyleGuide;
