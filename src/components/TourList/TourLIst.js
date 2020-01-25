import React, {Component} from 'react';

import Tour from '../Tour/Tour';
import tourData from './tourData1';



class TourList extends Component {
  state={
    tours: tourData
  };
  removeTour = id => {
    // const {tours} = this.state;
    // const sortedTours = tours.filter(tour => tour.id !== id);
    // this.setState({
    //   tours: sortedTours
    // });
  }
  render(){
    const {tours} = this.state;
    return (
        <section className="content">
        <div className="tourlist">
         {tours.map(tour =>{
            return(
              <Tour key={tour.id} tour={tour} removeTour = {this.removeTour}  />
            )

          })}
          </div>
        </section>
    );
  }
 
}

export default TourList;
