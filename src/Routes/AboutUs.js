import React from 'react';
import Navbar from '../Navbar/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Imgabt from '../Images/About.JPG'
import { Paper, Typography } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: '5rem',    
  },
  image1: {
    width: '100%',
    height: '25rem',
  },
  title: {
    color: '#0099ff',
    textIndent: 0,
  },
  paper: {
    width: '95%',
    marginLeft: '2.5%',
    marginRight: '2.5%',
    textIndent: '3em',
    padding: '5em',
  },
  navBar: {
    position: 'absolute',
    top: '0',
    margin: '0',
},
}));

function AboutUs() {
  const classes = useStyles();
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div className={classes.root}>
      <img className={classes.image1} src={Imgabt} alt="loading" />
      <Paper className={classes.paper} variant='elevation' elevation={5}>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" gutterBottom className={classes.title}> OUR VISION :</Typography>
          <Typography variant="h6" gutterBottom > To be the premium manufacturer of quality apparel in India.
          Star Exports will maintain a modern manufacturing facility in India for the purpose of satisfying customers
            with our product in quality and designs. </Typography>
          <Typography variant="h4" gutterBottom className={classes.title}> VALUES :</Typography>
          <Typography variant="h6" gutterBottom > We the responsibility for quality. We deliver customer satisfaction. We provide leadership
          as a company and as individuals. We act with integrity in all we do. We value our customers.
            We regard our suppliers as essential team members. </Typography>
          <Typography variant="h4" gutterBottom className={classes.title}> BRIEF DESCRIPTION :</Typography>
          <Typography variant="h6" gutterBottom > Star Exports was establishment in March 1995 with manufacturing of Mens & Ladies
          Knitted wears. Since then it has embarked on an ambitious program to expand, modernize and upgrade its infrastructure,
          equipment and services to increase its efficiency, reliability and competitiveness. </Typography>
          <Typography variant="h6" gutterBottom > The company is vibrant and dynamic organization where state-of-the art technology is
          standard in business practice and communications. A high shifted and enthusiastic
          workforce strives for nothing short of excellence in production, quality and service.</Typography>
          <Typography variant="h6" gutterBottom > The company is long recognized as a leader manufacturing of ladies pyjamas for
          exporting. Star Exports has a well entrenched competitive position and is not only able to
          maintain its position but has the strategic intent to get stronger with an aggressive
          expansion method via internal growth. This is due to an increased demand for its products
          opportunities for the local communities.</Typography>
          <Typography variant="h6" gutterBottom > Star Exports engages its strong marketing mix of high quality products, a competitive
          price strategy, adequate distribution channels and ample promotion through word of
          mouth to reach a long running litany of satisfied customers. </Typography>
          <Typography variant="h6" gutterBottom > Star Exports is committed to not only meeting but also exceeding all customer
          requirements, thus ensuring a 100% quality target that is carried throughout each step of
          the manufacturing process. The end result leads to the complete satisfaction of every
          customer and enhanced growth and success of the company. </Typography>
          <Typography variant="h6" gutterBottom > With the Perspective to offer our clients with the premium quality readymade
          garments, we cosistently endeavor hard towards developing innovative and attractive
          fashion wear. Supported by our highly experienced tailors and craftsman, we are
          committed to provide the flawless range of readymade garments that are made up of pure
          fabrics that are procured from our trustworthy and certified using requisite machinery like
          sewing machines and steam pressing. Keeping in mind the ever changing trends and
          demands of the industry, we manufacturer our exclusive range of readymade garments in
          full observance of the pre-defined industry quality standards. </Typography>
        </ThemeProvider>
      </Paper>
      <Navbar className={classes.navBar}/>
    </div>
  )
}

export default AboutUs
