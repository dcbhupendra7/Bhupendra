import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import tourdata from '../TourList/tourData1'
import {messageService} from './blist';
import '../All.css';

class Booked extends Component {
    state={
        tours: tourdata,
        bookedlist:[],
    };
    updateBookedList=(id)=>{
        if(id!=0){
            const {tours,bookedlist} = this.state;
            const sortedTours = tours.filter(tour => tour.id == id)[0];
            this.setState({
                bookedlist: [...bookedlist,sortedTours]
            });
        }
    }
    removeTour = id => {
        
    }
    componentDidMount(){
        this.updateBookedList(this.props.match.params.package);
        // this.subscription=messageService.addpackage.subscribe(message=>{
        //     if(message!=0){
        //         const {tours} = this.state;
        //         const sortedTours = tours.filter(tour => tour.id !== message);
        //         this.setState({
        //             tours: sortedTours
        //     });
        //     }
        // })
    }
    render() {
        const {bookedlist} = this.state;
        return (
            <section className="content">
                <h1>Your Booking List</h1>
                <div className="tourlist">
                    {bookedlist.map(tour =>{
                        return(
                        <Tour key={tour.id} tour={tour} removeTour = {this.removeTour}/>
                        )

                    })}
                </div>
            </section>
        );
    }
}

export default Booked;
