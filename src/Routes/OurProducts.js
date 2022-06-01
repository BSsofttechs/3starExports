import React from 'react';
import Navbar from '../Navbar/Navbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '3rem',
    backgroundColor: '#f00f00',
    width:'100%',
    height:'100vh',
  },
  navBar: {
    position: 'absolute',
    top: '0',
    margin: '0',
},
}));

function Community() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        
        <Navbar className={classes.navBar}/>
      </div>
    )
}

export default Community
