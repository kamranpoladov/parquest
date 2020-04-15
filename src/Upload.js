import React from 'react';
import logo from './media/logo.png';
import './App.css';
import Dropzone from './Dropzone'

export default function Upload(){
    return (
      <div className="Upload">
        <span className="Title">Upload Files</span>
        <div className="Content">
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          <div className="Files">
            // Add this:
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Actions">

        </div>
      </div>
    );
}
