import React from 'react';
import { ReactComponent as Facebook } from "./Footer/facebook.svg";
import { ReactComponent as Twitter } from "./Footer/twitter.svg";
import { ReactComponent as Linkedin } from "./Footer/linkedin.svg";
import { ReactComponent as Instagram } from "./Footer/instagram.svg";
import './All.css';

function About() {
    return (
        <section className='content about'>
            <div className="text-area">   
            <h1>More about us </h1>
            <div className="breaker"></div>
            <div className='aboutnote'>
                Our website is currently in development and so faults can occur. 
                If any <br/>faults occur enter your problem in the box below and send it to us. 
                <br/>Thank You.
            </div>
            <p className='aboutbody'> 
                Our services provide you a list of packages of places for you to visit during<br/> your Holidays. Each 
                package includes a 5-day trip around the city that the<br/> package include. All the services like
                 accomodations, food and tour route <br/>will be provided by us. You can visit the city on your own on
                the last day, so <br/>you can visit the place you want or just relax.
            </p>
            </div>
            <div className="ourcontacts">
                <a href="https://www.facebook.com/Vacation-Planner-105512911004794/" >
                    <div className="svg-card-2">
                        <Facebook width="7vh" height="7vh" strokeWidth="1" className="card1"/>
                    </div>
                </a>
                
                <a href="https://twitter.com/VacationPlanne6">
                    <div className="svg-card-2">
                        <Twitter width="7vh" height="7vh" strokeWidth="1" className="card1"/>
                    </div></a>
                
                
                <a href="https://linkedin.com">
                    <div className="svg-card-2">
                        <Linkedin width="7vh" height="7vh" strokeWidth="1" className="card1"/>
                    </div>
                </a>
                
                
                <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fvacation_planner09%3Figshid%3Ddtbo0ue1pvzd%26fbclid%3DIwAR0Tivj33xNFiR2qnU1aRknJvP7AmbcNla6rh3-FdFOjc5wS6fn_LcsY8C4&h=AT0DVJlM4Y9dzXvbZRcPRUCRNKNIjHvLSisCCefG0F05AdiqF8eK_rg4zaG5YCIejJHwYkQOnZ2XMvkpQ9tR85ss8jrOAci22A8LQnX7zsCYNihSsLOqiGjEqBvHrc7G8HgTUQ">
                    <div className="svg-card-2">
                        <Instagram width="7vh" height="7vh" strokeWidth="1" className="card1"/>
                    </div>
                </a>
                
            </div>
        </section>
    )
}

export default About
