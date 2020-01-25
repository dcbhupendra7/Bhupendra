import React, {Component} from 'react';
import './Dialogs.css'

class Dialog extends Component {

    submitForm=()=>{
        console.log('form has been submitted');
        this.props.modalToggle();
    };
    render() {
        return (
            <div className={'modal'}>
                <div className="modal-box">
                    <div className="form-area">
                        <h1>Your package has been selected</h1>
                            <h1>Have a fun Vacation.</h1>
                    </div>
                    <div className="button-area">
                        <button className="tbtn cancel-btn" onClick={this.props.modalToggle}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;