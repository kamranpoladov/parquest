import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import logo from "./media/lo.png";

import "./App.css";
import Link from "@material-ui/core/Link";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const mapStyles = {
    width: '50%',
    height: '80%',
};


const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,

  },
});

export default function Scores() {
  const classes = useStyles();

        return (
            <header className="App-header">
                <div style={{height: '100vh', width: '100%'}}>
                    <a href="/park">
                    <img src={logo} className="App-logo" alt="logo"/>
                    </a>
                    <h1 className="glow" >
                        TOP-10 BEST PLAYERS
                    </h1>
<h1 className="glowF" >
                <Table>
                      <thead>
                        <tr>
                          <th>
                               <h1 className="glow" >
                                   Place
                               </h1>
                          </th>
                           <th>
                               <h1 className="glow" >
                                   Name
                               </h1>
                          </th>
                           <th>
                               <h1 className="glow" >
                                   Score
                               </h1>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <th>Player5</th>
                          <th>420</th>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <th>Player2</th>
                          <th>410</th>
                        </tr>
                         <tr>
                          <th scope="row">3</th>
                          <th>Player3</th>
                          <th>399</th>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <th>Player1</th>
                          <th>375</th>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <th>Player4</th>
                          <th>333</th>
                        </tr>
                         <tr>
                          <th scope="row">6</th>
                          <th>Player7</th>
                          <th>324</th>
                         </tr>
                         <tr>
                          <th scope="row">7</th>
                          <th>Player9</th>
                          <th>289</th>
                        </tr>
                        <tr>
                          <th scope="row">8</th>
                          <th>Player6</th>
                          <th>265</th>
                        </tr>
                        <tr>
                          <th scope="row">9</th>
                          <th>Player8</th>
                          <th>200</th>
                        </tr>
                         <tr>
                          <th scope="row">10</th>
                          <th>Player10</th>
                          <th>188</th>
                         </tr>
                      </tbody>
                    </Table>
</h1>

                <div className="App-buttoner">
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
                     </div>
            </header>
        );
}
