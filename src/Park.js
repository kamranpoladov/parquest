import React from 'react';
import Popup from "reactjs-popup";
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

import Markdown from './Markdown';
import post1 from './media/rev1.md';
import post2 from './media/rev2.md';
import post3 from './media/rev3.md';

import "./App.css";

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
        fontweight: 'bold',
        fontFamily: 'Montserrat',
    },

    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        fontFamily: 'Montserrat',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },

    mainFeaturedPost: {
        position: 'relative',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

         backgroundColor:  'rgba(0,0,0,.3)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        fontweight: 'bold',
        fontFamily: 'Montserrat',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
        fontFamily: 'Montserrat',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(6),
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card: {
        display: 'flex',
        backgroundColor: 'rgba(131,129,114,0.3)',
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
    },
    cardDetails: {
        flex: 1,
        fontFamily: 'Montserrat',
    },
    typography: {
        backgroundColor: 'rgba(131,129,114,0.3)',
        color: '#FFFFFF',
        fontFamily: 'Montserrat',
    },

    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
        fontFamily: 'Montserrat',
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
        fontFamily: 'Montserrat',
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
        fontFamily: 'Montserrat',
    },
    Link: {
        color: '#350a27',
         fontweight:'bold',
        fontFamily: 'Montserrat',
    },

    footer: {
        color: '#8E0606',
        fontweight: 'bold',
        backgroundPosition: 'center',
        fontFamily: 'Montserrat',
    },

}));

const sections = [
    'History',
    'Events',
    'Facilities',
    'About',

];



const archives = [
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

export default function Park() {
    const classes = useStyles();


    return (
     <header className="App-heade">
        <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>

                      <div className="App-button">
                         <Link
                                color="inherit"
                                noWrap
                                key= 'Facilities'
                                variant="body2"
                                href="/drop"
                                className={classes.toolbarLink}
                            >
                                History
                            </Link>
                      </div>


                         <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            className={classes.toolbarTitle}
                        >

                        </Typography>

                      <div className="App-button">
                         <Link
                                color="inherit"
                                noWrap
                                key= 'Facilities'
                                variant="body2"
                                href="/drop"
                                className={classes.toolbarLink}
                            >
                                Events
                            </Link>
                      </div>



                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            className={classes.toolbarTitle}
                        >

                        </Typography>
                      <div className="App-button">
                         <Link
                                color="inherit"
                                noWrap
                                key= 'Facilities'
                                variant="body2"
                                href="/drop"
                                className={classes.toolbarLink}
                            >
                                About
                            </Link>
                      </div>
                    </Toolbar>

                    <main>
                        {/* Main featured post */}
                        <Paper className={classes.mainFeaturedPost}>
                            {/* Increase the priority of the hero background image */}
                            {
                                <img
                                    style={{display: 'none'}}
                                    src="/pa.jpeg"
                                    alt="background"
                                />
                            }
                            <div className={classes.overlay}/>
                            <Grid container>
                                <Grid item md={6}>
                                    <div className={classes.mainFeaturedPostContent}>
                                         <h1 className="Glow">
                                            Nuuksio National Park
                                         </h1>
                                        <h1 className="glowt">
                                           Within easy reach of the Finnish capital you can escape into wild natural settings and enjoy typically
                                            Finnish scenery, with lovely lakes, green forests and rugged crags. Pack your backpack for a memorable family picnic or campout.
                                            The nearby Finnish Nature Centre Haltia spotlights the best of Finland's natural treasures from across the country.
                                        </h1>
                                        <Link variant="subtitle1" href="/readmore">
                                           <h1 className="glow">

                                            Continue reading…
                                          </h1>
                                        </Link>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>

                        <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <CardActionArea component="a" href="/get">
                                        <Card className={classes.card}>
                                            <div className={classes.cardDetails}>
                                               <card>
                                                    <h1 className="glowC">
                                                         Are you ready to join Treasure Hunt?
                                                    </h1>
                                                    <Typography variant="subtitle1" paragraph>
        Once you join you can open the  world of treasure, adrenalin and fun. Explore the park and keep in mind: the hero who can rock the Final Challenge might be you!
                                                    </Typography>
                                                </card>
                                            </div>
                                        </Card>
                                    </CardActionArea>
                                </Grid>


                        </Grid>


                      <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <CardActionArea component="a" href="/scores">
                                        <Card className={classes.card}>
                                            <div className={classes.cardDetails}>
                                                <card>
                                                    <h1 className="glowC">
                                                       Leaderboard
                                                    </h1>
                                                    <Typography variant="subtitle1" paragraph>
                                                  Discover Top-10 Best Hunters.  Can you overthrow them?
                                                    </Typography>
                                                </card>
                                            </div>
                                        </Card>
                                    </CardActionArea>
                                </Grid>

                        </Grid>

                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            className={classes.toolbarTitle}
                        >

                        </Typography>

                      <div className="App-button">
                          <h1 className="glowR">>
                         <Link
                                color="inherit"
                                noWrap
                                key= 'Facilities'
                                variant="body2"
                                href="/subscribe"
                                className={classes.toolbarLink}
                            >
                                Subscribe to get hot updates
                            </Link>
                          </h1>
                      </div>


                        {/* End sub featured posts */}
                        <Grid container spacing={5} className={classes.mainGrid}>

                            {/* End main content */}
                            {/* Sidebar */}
                            <Grid item xs={12} md={4}>

                                <h1 className="glowBlue">
                                    Archives
                                </h1>
                                {archives.map(archive => (
                                     <h1 className="glowD">
                                        {archive}
                                     </h1>
                                ))}
                                <h1 className="glowBlue">
                                    Follow us on social media
                                </h1>
                                {social.map(network => (
                                    <h1 className="glowD">
                                      <Link display="block" variant="body1" href="/media" key={network}>
                                          {network}
                                      </Link>
                                    </h1>
                                ))}
                            </Grid>
                            {/* End sidebar */}
                        </Grid>
                    </main>

                    
                </Container>
        </React.Fragment>
  </header>
    );
}
