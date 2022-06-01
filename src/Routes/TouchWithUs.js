import React from 'react';
import Navbar from '../Navbar/Navbar';
import BackgroundImage from '../Images/ContactImage.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import BottomBranch from '../Components/BottomBranch';

const useStyles = makeStyles((theme) => ({
  root: {
    // paddingTop: '3rem',

  },
  imageBG: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'absolute',
    zIndex: 'auto',
    alignSelf: 'center',
    backgroundSize: 'cover',
    textAlign: 'center',
    top: '0',
    webkitFilter: 'blur(3px)',
    filter: 'blur(3px)',
  },
  navBar: {
    position: 'fixed',
    top: '0',
    margin: '0',
  },
  grid: {
    marginTop: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexGrow: 1,
    overflow: 'hidden',
  },
  form1: {
    backgroundColor: '#fff',
    width: '100%',
    height: '75vh',
    position: 'relative',
    marginTop: '1.5rem',
    marginLeft: '0',
    marginRight: 'auto',
    opacity: '0.89',
    transition: '0.5s',
    '&:hover': {
      opacity: 1,

    },
  },
  txfeild: {
    display: 'block',
    width: '80%',
    marginTop: '1.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',

    color: '#1aa3ff',
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000",
      opacity: '0.4',
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000",
      opacity: '1',

    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1aa3ff",
      opacity: '1',

    },
    "& .MuiFormLabel-root.MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-animated.MuiInputLabel-outlined.MuiInputLabel-shrink": {
      color: "#1aa3ff",
    }
  },
  btn: {
    display: 'block',
    width: '60%',
    marginTop: '1.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom:'8px',
    backgroundColor: '#1aa3ff',
    opacity: '0.7',
    transition: '0.7s',
    '&:hover': {
      opacity: 1,
      backgroundColor: '#1aa3ff',
      color: '#fff'
    },
  },
  contactdetail: {
    backgroundColor: '#1aa3ff',
    width: '100%',
    height: '75vh',
    position: 'relative',
    marginTop: '1.5rem',
    marginLeft: 'auto',
    marginRight: '0',
    opacity: '0.89',
    transition: '0.5s',
    '&:hover': {
      opacity: 1,

    },
  },
  headsay: {
    textAlign: 'center',
    padding: '1.5rem',
    color: '#fff',
  },
  headsub: {
    color: '#fff',
    fontSize: '2rem',
    cursor: 'none',
  },
  txt: {
    fontSize: '1.75rem',
    marginBottom: '2rem',
  },
  txtad: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
}));

function Categories() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.imageBG} src={BackgroundImage} alt="loading" />
      <Grid container spacing={0} className={classes.grid}>
        <Grid className={classes.form1} item xs={12} sm={12} md={6}>
          <Card variant="outlined">
            <CardContent >
              <form noValidate autoComplete="off">
                <TextField className={classes.txfeild} fullWidth={true} type="text" label="Full Name" variant="outlined" />
                <TextField className={classes.txfeild} fullWidth={true} type="email" label="Email Id" variant="outlined" />
                <TextField className={classes.txfeild} fullWidth={true} type="number" label="Mobile No" variant="outlined" />
                <TextField className={classes.txfeild} fullWidth={true} label="Subject" variant="outlined" />
                <TextField className={classes.txfeild} fullWidth={true} label="Details" multiline={true} rows={4} variant="outlined" />
                <Button className={classes.btn} variant="outlined" >Submit</Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Card className={classes.contactdetail} >
            <CardContent>
              <Typography variant="h4" component="h3" gutterBottom className={classes.headsay}>SAY HELLO TO US</Typography>
              <Typography variant="h4" component="body1" gutterBottom className={classes.headsub}>Address :</Typography>
              <Typography variant="h6" component="h6" gutterBottom className={classes.txtad}>
                <LocationOnIcon /> <span >97, Srivenkateshwara Nagar, Valayankadu <br /> Gandhi Nagar PO, TIRUPUR-641601.</span></Typography>
              <Typography variant="h4" component="body1" gutterBottom className={classes.headsub}>Mobile :</Typography>
              <Typography variant="h6" component="h6" gutterBottom className={classes.txt}>
                <PhoneAndroidIcon /><span > +91 99443 97534</span></Typography>
              <Typography variant="h4" component="body1" gutterBottom className={classes.headsub}>Email :</Typography>
              <Typography variant="h6" component="h6" gutterBottom className={classes.txt}>
                <EmailIcon /><span > 3starxx@gmail.com</span></Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <>
      <BottomBranch />
      </>
      <Navbar className={classes.navBar} />
    </div>
  )
}

export default Categories
