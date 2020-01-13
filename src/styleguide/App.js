import React from 'react';
import { Switch, Route, Link, NavLink, BrowserRouter } from 'react-router-dom';
import { throttle } from 'lodash';
import validation from '../util/validation';
import { Overlay, NavBar, SideDrawer, DynamicForm, Hero, Icon, SideBar, DataTable, Chart} from '../index'
import {ICONS} from '../constants';
import { chartData } from '../components/Charts';
const chartConfig = [
    {
        key: 'uv',
        color: '#40ee86'
    },
    {
        key: 'pv',
        color: "#67d6c0", 
    },
    {
        key: 'amt',
        color: '#127197',
    },
    {
        key: 'pizza',
        color: "#e96d8d"
    }
    
]

const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];



class App extends React.Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClcickHandler = () => {
        console.log("onclick")
        this.setState(prevState => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen }
        })
    }

    backdropClickHandler = () => {
        console.log("back drop clcik")
        this.setState({ sideDrawerOpen: false })
    }

    onSubmit = () => {
        console.log("yay")
    }

    componentDidMount() {
        window.addEventListener('resize', throttle(() => {
            // console.log(document.body.clientWidth)
            if(document.body.clientWidth <= 768){
                this.setState(()=>({sideDrawerOpen: false }))
            }
        }, 500)
        )
    }

    render(){
        const { sideDrawerOpen } = this.state
        const fields = [
            {
                label: 'First Name',
                type: 'input',
                name: 'firstName',
                value: '',
                classNames: "tetx",
                placeholder: 'placeHolder',
                required: true,
            },
            // {
            //     label: 'Last Name',
            //     type: 'input',
            //     name: 'lastName',
            //     value: ''
            // },
            {
                label: 'Occupation',
                type: 'select',
                options: ['Teacher', 'Software Engineer', 'Doctor', 'Lawyer'],
                name: 'occupation',
                value: '',
                placeholder: 'Please Select',
                required: false,
                classNames: "occupation-class"
            },
            {
                label: 'Talk to me nice',
                type: 'textarea',
                name: 'message',
                value: '',
                placeholder: 'text area place holder',
                required: true,
                classNames: "occupatextareation-class"
            },
            {
                label: 'Agree to Terms & Conditions',
                type: 'checkbox',
                name: 'terms',
                value: false,
                required: true,
            },
            {
                label: 'Verify You are a human',
                type: 'recaptcha',
                name: 'recaptcha',
                value: '',
                required: true,
                siteKey: '6Lc7UqIUAAAAAACgbIu3XSiRMLdS18ogCXFHFEqZ'
            },
            {
                label: 'HAnnn',
                type: 'button',
                btnType: 'submit',
                name: 'button',
            },
          ];
        return(

            <div style={{height: '100%'}}>
                <NavBar 
                    drawerClickHandler={this.drawerToggleClcickHandler}
                />
                <Overlay 
                    show={sideDrawerOpen}
                    backdropClick={this.backdropClickHandler}
                />
                <SideDrawer 
                    show={sideDrawerOpen}
                    // show={true}
                    closeBtnClickHandler={this.backdropClickHandler}
                />
                <main style={{ margin: '1rem' }} className="styleguide">
                    <BrowserRouter>
                    <SideBar className="styleguide--sidebar slime-bar">
                        <SideBar.NavGroup title="Test">
                            <SideBar.NavLink link="/">
                                Link 1
                            </SideBar.NavLink>
                            <SideBar.NavLink link="/home">
                                Link 2
                            </SideBar.NavLink>
                            <SideBar.NavLink link="/han">
                                 Link 3
                            </SideBar.NavLink>
                        </SideBar.NavGroup>
                        <SideBar.NavGroup title="Yurr">
                            <SideBar.NavLink link="/uhu">
                                 Link 1
                            </SideBar.NavLink>
                            <SideBar.NavLink link="/home">
                                Link 2
                            </SideBar.NavLink>
                            <SideBar.NavLink link="/han">
                                 Link 3
                            </SideBar.NavLink>
                        </SideBar.NavGroup>
                    </SideBar>
                    </BrowserRouter>
                    <div className="styleguide--content">
                        <DataTable/>
                        <Chart
                            chartData={data}
                            chartConfig={chartConfig}
                        />
                    </div>
                    
                </main>
            </div>
        )
    }
}



export default App;