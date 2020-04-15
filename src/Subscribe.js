import React, {Component} from 'react';
import logo from "./media/lo.png";
import VisitorMap from "./visitorMapComponent"

import "./App.css";
import form from "./media/form.png"
import Link from "@material-ui/core/Link";

const mapStyles = {
    width: '50%',
    height: '80%',
};



class Subscribe extends Component {


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
                    <img src={form} className="App-logobig" alt="form"/>

                </div>
            </header>
        );
    }
}

export default Subscribe;