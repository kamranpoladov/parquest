import React from 'react';
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
import "./Approve.css";
import logo from "./media/lo.png";
import waterfall from "./media/wat.jpg"


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },

    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://images.unsplash.com/photo-1461723447431-e229d9930353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        fontweight: 'bold',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
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
    },
    cardDetails: {
        flex: 1,
    },
    typography: {
        backgroundColor: 'rgba(131,129,114,0.3)',
        color: '#FFFFFF',
    },

    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },

    Button: {
        color: '#cb0a0b',
    },

    footer: {
        color: '#8E0606',
        fontweight: 'bold',
        backgroundPosition: 'center',
    },
}));


const featuredPosts = [
    {
        title: 'You nailed it!',
    },
    {
        title: 'Your next task:',
        description:
            'Find a treasure hidden by other player',
    },

];


const social = ['GitHub', 'Twitter', 'Facebook'];

export default function Blog() {
    const classes = useStyles();

    return (
        <header className="App-heade">
            <React.Fragment>
                <CssBaseline/>
                <Container maxWidth="lg">
                    <Toolbar className={classes.toolbar}>

                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                            className={classes.toolbarTitle}
                        >

                        </Typography>
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
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                        {/* End main featured post */}
                        {/* Sub featured posts */}

                    <img src={waterfall} className="App-log" alt="waterfall"/>


                        <Grid container spacing={4}>
                            {featuredPosts.map(post => (
                                <Grid item key={post.title} xs={12} md={6}>
                                    <CardActionArea component="a" href="/test-test">
                                        <Card className={classes.card}>
                                            <div className={classes.cardDetails}>
                                                <card>
                                                     <h1 className="glow">
                                                       {post.title}
                                                    </h1>

                                                    <h1 className="glowC">
                                                        {post.description}
                                                    </h1>
                                                </card>
                                            </div>
                                        </Card>
                                    </CardActionArea>
                                </Grid>
                            ))}

                        </Grid>
                        {/* End sub featured posts */}


                        <div className="App-button">
                          <h1 className="glowR">
                         <Link
                                color="inherit"
                                noWrap
                                key= 'Facilities'
                                variant="body2"
                                href="/camera"
                                className={classes.toolbarLink}
                            >
                                Start
                            </Link>
                          </h1>
                      </div>
                    </main>
                </Container>

            </React.Fragment>
            </header>
                );
                }
