import React, { Component } from 'react';

class Userdatadisplay extends Component {
    render() {
        return (
            <section className="content">
                <button onClick={()=>this.props.history.push('/BookingList/0')}>Booked List</button>
                <button onClick={()=>this.props.history.push('/WishList/0')}>Wish List</button>
            </section>
        )
    }
}

export default Userdatadisplay
