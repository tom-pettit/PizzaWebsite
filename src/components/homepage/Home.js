import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  extrabuttons: {
    ['@media (max-width: 660px)']: {
        display: 'none',
    }
    },
  overview: {
    backgroundColor: 'transparent', 
    fontFamily: 'Poppins', 
    width: '100%',
    margin: 40,
    marginTop: '15%'
  },
  description: {
      width: '50%'
  },
  margin: {
    margin: 40,
  },
  }
));

const StyledTextField = withStyles({
    root: {
      "&:not(.Mui-disabled):hover::before": {
        borderColor: "#0D948E"
      }
    }
  })(TextField);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: 'transparent', boxShadow: 'none', fontFamily: 'Poppins'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} style={{color: 'black', fontFamily: 'Poppins'}}>
            myPizza
          </Typography>
          <div className={classes.extrabuttons}>
            <Button style={{fontFamily: 'Poppins', marginRight: 15}} color="black">Home</Button>
            <Button style={{fontFamily: 'Poppins', marginRight: 15}} color="black">Services</Button>
            <Button style={{fontFamily: 'Poppins', marginRight: 15}} color="black">Tracking</Button>
            <Button style={{fontFamily: 'Poppins', marginRight: 15}} color="black">Support</Button>
          </div>
          <Button variant="contained" style={{boxShadow: 'none', backgroundColor:'#0D948E', color: 'white', fontFamily: 'Poppins'}}>Order Now</Button>

        </Toolbar>
      </AppBar>
      <div className={classes.overview}>
          <h1 className={classes.description}>Tasty food delivered to you in minutes</h1>
          <p className={classes.description}>Freshly cooked pizzas made with the highest quality ingredients, just a few clicks away from your door...</p>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <StyledTextField id="input-with-icon-grid" color='#0D948E'/>
          </Grid>
          <Grid item>
            <SearchIcon />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}