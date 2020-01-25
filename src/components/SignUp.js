import React,{Component} from 'react';
import './Login.css';

class Sign extends Component {
    render(){
    return (
        <section className="content login">
        <form className = "login-box">
            <h1>SignUp</h1>
            <div className = "textbox">
                <i className="fa fa-user" aria-hidden="true"></i>
                <input type="text" placeholder="Username" required/>
            </div>
            <div className = "textbox">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <input type="email" placeholder="Email" required/>
            </div>
            
            <div className = "textbox">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <input type="tel" placeholder="Phone" required/>
            </div>
            <div className = "textbox">
                <i className="fa fa-address-book" aria-hidden="true"></i>
                <input type="address" placeholder="Address" required/>
            </div>
            <div className = "textbox">
                <i className="fa fa-lock" aria-hidden="true"></i> 
                <input type="password" placeholder="Password" required/>
            </div>
            <div className = "textbox">
                <i className="fa fa-lock" aria-hidden="true"></i> 
                <input type="password" placeholder="Re-enter Password" required/>
            </div>
            {/* <button className="btn" >Sign up</button> */}
            <input className="btn" onClick={()=>this.props.history.push('/tourlist')} type="Submit" name="" value="SignUp" /> */}
        </form>
        </section>
    );}
}

export default Sign;
