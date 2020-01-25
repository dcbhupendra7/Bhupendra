import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import tourdata from '../TourList/tourData'
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
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    }
    componentDidMount(){
        this.updateBookedList(this.props.match.params.package);
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
