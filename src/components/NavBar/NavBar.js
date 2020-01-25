import React, { Component } from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import '../All.css'
import logo from '../../guy.gif';
import Search from './Search';

class NavBar extends Component {
    state = {
        Nav: [
            {label: 'Home', path: '/'},
            {label: 'Packages', path: '/Tourlist'},
            {label: 'About Us', path: '/AboutUs'},
        ],
        transVal: 0
    };
    
    render() {
        return (
            <nav className="navbar">
                <img src={logo} alt = 'city tours logo' onClick={()=>this.props.history.push('/')} className="image-logo" />
                <div className="nav-links">
                    {this.state.Nav.map((item,key)=>(
                        <NavLink to={item.path} className='headlink' activeClassName='activeheadlink' exact>
                            {item.label}
                        </NavLink>
                    ))}
                
                </div>
                <div className='cornernav'>
                <Search/>
                <div className='dropdown'>
                    <div className='fa fa-user-circle-o' id="dropbtn" style={{color: "white"}}></div>
                        <div className="dropdown-content">
                            <NavLink className='LogButton' to='/Login'>Log In</NavLink>
                            <NavLink className='LogButton' to='/SignUp'>Sign Up</NavLink>
                        </div>
                    
                </div></div>
            </nav>    
        )
    }
}

export default withRouter(NavBar);
