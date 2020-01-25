import React, {Component} from 'react';
import './Dialogs.css';
import tourData from './TourList/tourData1';
import {withRouter} from 'react-router-dom'

class Dialog extends Component {
    state={
        tours: tourData,
    };
  

    // submitForm=()=>{
    //     console.log('form has been submitted');
    //     this.props.modalToggle();
    // };
    render() {
        console.log(this.props.id)
        const {id}=this.props;
        return (
            <div className={'modal'}>
                <div className="modal-box">
                    <div className="form-area">
                        <h1>Are you sure you want to select this package.</h1>
                            
                    </div>
                    <div className="button-area">
                        <button className="tbtn-cancel-btn" onClick={()=>this.props.history.replace('/BookingList/'+this.props.id)}>Yes</button>
                        <button className="tbtn-cancel-btn" onClick={this.props.modalToggle}>No</button>

                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Dialog);