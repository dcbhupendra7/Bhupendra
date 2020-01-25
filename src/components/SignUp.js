import React from 'react';
import './Login.css';

function Sign() {
    return (
        <section className="content login">
        <div className = "login-box">
            <h1>SignUp</h1>
            <div className = "textbox">
                <i className="fa fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Username"/>
            </div>
            <div className = "textbox">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input type="email" placeholder="Email"/>
            </div>
            
            <div className = "textbox">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <input type="phone" placeholder="Phone"/>
            </div>
            <div className = "textbox">
                <i className="fa fa-address-book" aria-hidden="true"></i>
                <input type="address" placeholder="Address"/>
            </div>
            <div className = "textbox">
                <i className="fa fa-lock" aria-hidden="true"></i> 
                <input type="password" placeholder="Password"/>
            </div>
            <div className = "textbox">
                <i className="fa fa-lock" aria-hidden="true"></i> 
                <input type="password" placeholder="Re-enter Password"/>
            </div>
           
            <input className="btn" type="button" name="" value="SignUp"/>
        </div>
        </section>
    );
}

export default Sign;
