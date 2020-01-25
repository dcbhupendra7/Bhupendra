import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Dialogs from "../Dialogs";
import '../All.css';




class Tour extends Component {
  state={
    isOpen:false
  }
  modalToggleHandler = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
  };
  render(){
    const {id,city,name,img,start} = this.props.tour;
    const {removeTour} = this.props;
    return (
        <div className="tour">
            <Link to={'/package/'+id} className="tour-nav">
              <div className = "img-container">
              <img src={img}  className="pic" onClick={() => removeTour(id)} />
              </div>
              <h3>{name}</h3>
              <h4>{city}</h4>
              From:{start}
            </Link>
           {/* <div className="booking-description-area">
              <button onClick={this.modalToggleHandler} className="tbtn booking-btn">Book Now</button>
              </div>
               {this.state.isOpen ?<Dialogs modalToggle={this.modalToggleHandler}/> : ''} */}
        </div>
    );
  }
 
}

export default Tour;
