import React, {Component} from 'react';
import logo from "./media/lo.png";
import VisitorMap from "./visitorMapComponent"

import "./App.css";
import rate from "./media/rate1.png"
import Link from "@material-ui/core/Link";

const mapStyles = {
    width: '50%',
    height: '80%',
};



class SimpleMap extends Component {


    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            <header className="App-header">
                <div style={{height: '100vh', width: '100%'}}>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="glow" >
                        Select one of the National parks of Finland
                        and start your journey.
                    </h1>
                    <h1 className="glowBlue" >
                        You can see real-time people flow in National parks and plan your visit.
                        The more intensive the colour on the map is, the bigger amount of people is visiting this park at the moment.
                    </h1>

                    <img src={rate} className="App-logosmall" alt="rate"/>

                    <h1 className="glowBlue" >
                        Challenge yourself and have a lot of fun with our new Treasure Hunt game.
                    </h1>

                    <a href="/visitormap">
                        <h1 className="glow" >
                           Try it
                        </h1>
                    </a>
                </div>
            </header>
        );
    }
}

export default SimpleMap;