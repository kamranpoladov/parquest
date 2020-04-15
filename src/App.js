import React from 'react';
import AppRouter from './AppRouter';
import logo from './media/logo.png';
import './App.css';
import SimpleMap from './SimpleMap'
import Park from "./Park";
import SubmitTask from './SubmitTask'
import Upload from "./Upload";
import Approve from "./Approve"
import Drop from "./Dropzone"

function App() {
  return (
        <div>
          <AppRouter/>
          <div className="App">
          </div>
        </div>

  );
}

export default App;
