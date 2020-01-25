import React from 'react';
import './Login.css';

function Log() {
    return (
        <section className="content login">
        <div className = "login-box">
            <h1>Login</h1>
            <div className = "textbox">
                <i className="fa fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Username"/>
            </div>
            <div className = "textbox">
                <i className="fa fa-lock" aria-hidden="true"></i> 
                <input type="password" placeholder="Password"/>
            </div>
            <input className="btn" type="button" name="" value="Log in"/>
        </div>
        </section>
    );
}

export default Log;
