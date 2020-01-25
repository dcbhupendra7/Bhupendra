import React, { Component } from 'react';
import Tour from '../Tour/Tour';
import tourData from './tourData';
import '../All.css';

class AfterSearch extends Component {

    state={
        toursGet: [],
        searchedTerm: '',
	}
    //for nothing or just to make program right
    removeTour = keyword => {
        const tours = tourData;
        const sortedTours = tours.filter(tour => tour.name.includes(keyword)
                    || tour.info.includes(keyword) || tour.city.includes(keyword));
        console.log(sortedTours);
        this.setState({
            toursGet: sortedTours 
        });
    }

    componentDidUpdate(prevProps,prevState, snapshot){

        if(this.props!==prevProps){
            this.removeTour(this.props.match.params.search);
        }
    }
    componentDidMount(){
        this.setState({
            searchedTerm:this.props.match.params.search
        })
        this.removeTour(this.props.match.params.search);
    }
    render() {
         return (
            <section className="content ">
                <h1>Found {this.state.toursGet.length} results for {this.props.match.params.search}</h1>
                <div className="tourlist">
                {this.state.toursGet.map(tour =>{
                    return(
                    <Tour key={tour.id} tour={tour} removeTour ={this.removeTour}/>)
                })}
                </div>
            </section>
    
        )
        //         
		// 			{this.state.loading?<Loader/>:content}
    }
}

export default AfterSearch;