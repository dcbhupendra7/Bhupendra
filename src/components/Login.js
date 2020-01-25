import React,{Component} from 'react';
// import {BrowserHistory} from
import './Login.css';

class Log extends Component {
    render(){
    return (
        <section className="content login">
        <div className = "login-box">
            <h1>Login</h1>
            <div className = "textbox">
                <i className="fa fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Username" required/>
            </div>
            <div className = "textbox">
                <i className="fa fa-lock" aria-hidden="true"></i> 
                <input type="password" placeholder="Password"required/>
            </div>
            {/* <input  type="button" name="" value="Log in"/> */}
            <button className="btn" onClick={()=>this.props.history.push('/tourlist') }>Log in</button>
            <button className="btn" onClick={()=>this.props.history.push('/SignUp')}>Sign up</button>
        </div>
        </section>
    );}
}

export default Log;
