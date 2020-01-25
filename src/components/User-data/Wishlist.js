import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import tourdata from '../TourList/tourData1'
import '../All.css';

class Wishlist extends Component {
    state={
        tours: tourdata,
        wishlist:[],
    };
    updateWishList=(id)=>{
        if(id!=0){
            const {tours,wishlist} = this.state;
            const sortedTours = tours.filter(tour => tour.id == id)[0];
            this.setState({
                wishlist: [...wishlist,sortedTours]
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
        this.updateWishList(this.props.match.params.package);
    }
    render() {
        const {wishlist} = this.state;
        return (
            <section className="content">
                <h1>Your Booking List</h1>
                <div className="tourlist">
                    {wishlist.map(tour =>{
                        return(
                        <Tour key={tour.id} tour={tour} removeTour = {this.removeTour}/>
                        )
                    })}
                </div>
            </section>
        );
    }
}

export default Wishlist;
