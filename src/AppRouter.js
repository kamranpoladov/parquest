import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Approve from './Approve';
import Test from './Test';
import Park from './Park'
import Map from './SimpleMap'
import Drop from './Dropzone'
import Scores from "./Scores"
import GetTask from "./GetTask"
import SubmitTask from "./SubmitTask";
import CameraUse from "./CameraUse";
import MapTask from "./MapTask";
import VisitorMap from "./visitorMapComponent"
import Subscribe from "./Subscribe";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' component={Map} exact/>
                <Route path='/test-test' component={Test}/>
                <Route path='/park' component={Park}/>
                <Route path='/approve' component={Approve}/>
                <Route path='/submit' component={SubmitTask}/>
                <Route path='/get' component={GetTask}/>
                <Route path='/scores' component={Scores}/>
                <Route path='/camera' component={CameraUse}/>
                <Route path='/maptask' component={MapTask}/>
                <Route path='/visitormap' component={VisitorMap}/>
                <Route path='/subscribe' component={Subscribe}/>

            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;