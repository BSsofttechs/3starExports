import React from 'react';
// import Navbar from '../Navbar/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundHome from '../Images/BackImageHome.jpeg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AboutUs from './AboutUs';
import Value1 from '../Images/Value.jpg'
import Goal from '../Images/Goal-1.png'
import OurCommitment from '../Images/OurCommitment.jpg'
import OurStructure from '../Images/Structure.jpg'
// import BottomBranch from '../Components/BottomBranch';
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    // paddingTop: '3rem',
    position: 'relative',
    marginBottom: '0',
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
    // 
    // filter: 'blur(5px)',
  },
  cname: {
    opacity: '1',
    color: '#1aa3ff',
    letterSpacing: '0.45em',
    fontFamily: 'Times New Roman',
    fontVariant: 'petite-caps',
    textShadow: '3px 3px #0000ff'
  },
  csubname: {
    color: '#1aa3ff',
    letterSpacing: '0.3em',
    fontVariant: 'petite-caps',
    textShadow: '3px 3px #0000ff'
  },
  bottom: {
    margin: '0',
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'rgb(235, 195, 64)',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
  welcome: {
    backgroundColor: '#000',
    textAlign: 'center',
    width: '50%',
    position: 'absolute',
    marginTop: '15rem',
    opacity: '0.7',
    borderRadius: '20px',
    marginLeft: '25%',
    marginRight: '25%',
  },
  carddiv: {
    width: '100%',
    marginLeft: 'auto',
    marginRiht:'auto',
    position: 'absolute',
    marginTop: '40rem',
    backgroundImage: 'linear-gradient(to bottom, #1aa3ff, #12c2e9);',
    height: 'auto',
        
  },
  fullcards: {
    // margin:'2%'
    marginLeft: '3%',
    marginRight:'3%',
  },
  cardOne: {
  },
  cardtwo: {
    marginTop: '5%',
    border:'5rem',
  },
  card1: {
    width: '80%',
    height:'fit-content',
    marginLeft: '1rem',
    marginRight: '1rem',
    '&:hover': {
      transition: 'transform .3s  ease-in-out ',
      transform: 'scale(1.05)',
    }
  },
  title: {
    fontSize: 'large',
    fontFamily: 'fantasy',
    textDecoration: 'underline',
  },
  navBar: {
    position: 'fixed',
    top: '0',
    margin: '0',
  },
  last: {
    bottom: '0',
    left:'0'
  },
  about: {
    marginTop:'10rem',
  },
  imgtitle:{
    width: '12rem',
    height:'10rem',
  }
}));

export default function Home() {
  const classes = useStyles();

  return (<><>
    <div className={classes.root}>
      <img className={classes.imageBG} src={BackgroundHome} alt="loading" />
      <NameCard />
      
      <div className={classes.carddiv}>
        <Grid className={classes.fullcards} container spacing={4}>
          <Grid container className={classes.cardOne} item xs={12} sm={6} md={3} lg={3} spacing={3}>
            <Value title={<Title tname={Value1}/>}
              line1="Integrity"
              line2="Fairness"
              line3="Innovation"
              line4="Environment"
              line5="Commitment"
              line6="Customer Statisfication"
              line7="Comparitive Price"
              line8="Product Quality" />
          </Grid>
          <Grid container className={classes.cardtwo} item xs={12} sm={6} md={3} lg={3} spacing={3}>
            <Value title={<Title tname={Goal}/>}
              line1="3-STAR EXPORTS combiningit's resources of advanced machineries, spirited attitude and professional workers and
              belief in honest and fast Communication to became an icon in the fashion world Product Quality "/>
          </Grid>
          <Grid container className={classes.cardOne} item xs={12} sm={6} md={3} lg={3} spacing={3}>
            <Value title={<Title tname={OurCommitment}/>}
              line1="We strive to attain corporate governance, empowering and inspiring our associates, meeting & exceeding customer needs,
              demands & expectations, engaging with community, caring for environment and maintaining networks with our global partners."/>
          </Grid>
          <Grid container className={classes.cardtwo} item xs={12} sm={6} md={3} lg={3} spacing={3}>
            <Value title={<Title tname={OurStructure}/>}
              line1="STAR EXPORTS emerging strongly as one of the most regarded organizations in the country. Looking ahead,
              STAR EXPORTS is focusing more towards the front-end of the chain, the end customer."/>
          </Grid>
        </Grid>
      </div>
    </div>
    
    {/* <Navbar className={classes.navBar} /> */}
    {/* <div className={classes.last}>
    <BottomBranch className={classes.bottom}/>
    </div> */}
  </>
    <>
    
    </>
    <AboutUs className={ classes.about}/>
    </>
  )
}

const Title = ({ tname }) => {
  const classes = useStyles();
  return (
  <img src={tname} alt="loading" className={classes.imgtitle}/>)
}

const NameCard = () => {
  
  const classes = useStyles();
  return (
    <Card className={classes.welcome}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.cname} variant='h2' component='h3'>3Star Export</Typography>
            <Typography className={classes.csubname} variant='h4' component='h3'>Manufacture & Exporter</Typography> 
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const Value = ({ title, line1, line2, line3, line4, line5, line6, line7, line8 }) => {
  const classes = useStyles();
  return (

    <Card className={classes.card1}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          { title }
        </Typography>
        <Typography >{line1} </Typography>
        <Typography >{line2} </Typography>
        <Typography >{line3} </Typography>
        <Typography >{line4} </Typography>
        <Typography >{line5} </Typography>
        <Typography >{line6} </Typography>
        <Typography >{line7} </Typography>
        <Typography >{line8} </Typography>
      </CardContent>
    </Card>

  )
}