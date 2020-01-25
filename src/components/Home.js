import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './All.css';

class Home extends Component {
    render(){
        return (
            <section className="content welcome"> 
                    <div className="motto">Jobs fill your pocket. Adventure Fills your soul.</div>
                    <div className="direction">Start your adventure and fill your soul by clicking the button below</div>
                    <button className='tbtn packages' onClick={()=>this.props.history.push('/tourlist')} >Get Started</button>
            </section>
        )
    }
}

export default Home;