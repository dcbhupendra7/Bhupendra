import React, { Component } from 'react';
import { ReactComponent as Facebook } from "../Footer/facebook.svg";
import { ReactComponent as Twitter } from "../Footer/twitter.svg";
import { ReactComponent as Linkedin } from "../Footer/linkedin.svg";
import { ReactComponent as Instagram } from "../Footer/instagram.svg";
import '../All.css'

class IkonBar extends Component {
    render() {
        return (
            <div className="ikonbar">
                <div className="svg-card-3">
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fvacation_planner09%3Figshid%3Ddtbo0ue1pvzd%26fbclid%3DIwAR0Tivj33xNFiR2qnU1aRknJvP7AmbcNla6rh3-FdFOjc5wS6fn_LcsY8C4&h=AT0DVJlM4Y9dzXvbZRcPRUCRNKNIjHvLSisCCefG0F05AdiqF8eK_rg4zaG5YCIejJHwYkQOnZ2XMvkpQ9tR85ss8jrOAci22A8LQnX7zsCYNihSsLOqiGjEqBvHrc7G8HgTUQ">
                        <Instagram width="3.5vh" height="3.5vh" strokeWidth="2" />
                    </a>
                </div>
                <div className="svg-card-3">
                    <a href="https://linkedin.com">
                        <Linkedin width="3.5vh" height="3.5vh" strokeWidth="2" />
                    </a>
                </div>
                <div className="svg-card-3">
                    <a href="https://twitter.com/VacationPlanne6">
                        <Twitter width="3.5vh" height="3.5vh" strokeWidth="2" />
                    </a>
                </div>
                <div className="svg-card-3">
                    <a href="https://www.facebook.com/Vacation-Planner-105512911004794/" >
                        <Facebook width="3.5vh" height="3.5vh" strokeWidth="2" />
                    </a>
                </div>
            </div>
        )
    }
}

export default IkonBar;
