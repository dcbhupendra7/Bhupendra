import React, { Component } from 'react';
import tourData from './tourData';
import Dialogs from "../Dialogs";
import '../All.css';

class Package extends Component {
    state={
        tours: tourData,
        isOpen:false
    };
    // modalToggleHandler = () => {
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // };
    getTourInfo=(id)=>{
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id == id)[0];
        this.setState({
            tours: sortedTours
        });
    }
    componentDidMount(){
        this.getTourInfo(this.props.match.params.package);
    }
    render() {
        const {tours}=this.state;
        return (
            <section className="content">
                <div className = "big-img">
                    <img src={tours.img} alt='bigg picture' className="big-pic"/>
                </div>
                 <div className="all-info">
                    <div className="big-city">{tours.name}</div>
                    <div className="big-name">{tours.city}</div>
                    <div className="big-start">{tours.start}</div>
                    <div className='big-info'>Destination Info:</div>
                    <div className='greenline'></div>
                   <span className="real-info">{tours.info}</span>
                     <div>Available Packages</div>
                    
                     {/* {tours.packages.map( packet=>{
                            return(
                               
                                    <div>
                                        <div>{packet.day}days</div>
                                        <div>{packet.info}</div>
                                        <div>{packet.price} per person</div>
                                    </div>    
                            );
                            })} */}
                    <div className="price-description-area">
                        <button onClick={()=>this.props.history.replace('/BookingList/'+tours.id)} className="price-description">150$</button>
                    </div>
                    {/* {this.state.isOpen ?<Dialogs modalToggle={this.modalToggleHandler}/> : ''} */}
                </div>
                
            </section>
        )
    }
}

export default Package;
