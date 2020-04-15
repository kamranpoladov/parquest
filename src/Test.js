import React, { Component } from 'react';
import logo from "./media/logo.png";


const mapStyles = {
  width: '50%',
  height: '50%',
};



const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Test extends Component {


  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (

      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>

          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Select one of the National parks of Finland
                and start your journey
            </p>

      </div>
    );
  }
}

export default Test;