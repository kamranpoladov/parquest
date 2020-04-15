import React, { Component } from 'react';
import 'react-html5-camera-photo/build/css/index.css';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import Link from "@material-ui/core/Link";

class CameraUse extends Component {
  onTakePhoto (dataUri) {
    // Do stuff with the dataUri photo...
    console.log('takePhoto');
  }

  render () {
    return (
         <header className="App-header">
      <div className="CameraUse">
        <Camera
          onTakePhoto = { (dataUri) => { this.onTakePhoto(dataUri); } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
           isImageMirror = {false}
        />
      </div>
        <div className="App-button">
                    <h1 className="glowR">
                    <Link
                        color="inherit"
                        noWrap
                        key='Facilities'
                        variant="body2"
                        href="/park"
                    >
                        Back
                    </Link>
                    </h1>
                </div>
         </header>
    );
  }
}

export default CameraUse;