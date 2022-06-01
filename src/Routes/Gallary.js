import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ImageSlider from '../Components/ImageSlider';
import { FactoryData } from '../Components/FactoryData';
import { UnitData } from '../Components/UnitData';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    textAlign: 'center',
    backgroundColor: '#333',
    height: '100%',
    width: '100%',
  },
  title: {
    position: 'absolute',
    marginTop: '3rem',
    top: 0,
    left: '40%',
    color: '#fff',
    padding: '5px',
    borderRadius: '10px',
    textDecoration: 'underline',
    textDecorationStyle: 'double',
    backgroundColor: 'black',
    opacity: '0.4',
    '&:hover': {
      opacity: 0.7,
    },
  },
  home: {
    position: 'absolute',
    marginTop: '1rem',
    top: 0,
    right: "1rem",
    color: '#fff',
    padding: '5px',
    borderRadius: '0.5rem',
    backgroundColor: 'black',
    textDecoration:'none',
    opacity: '0.4',
    '&:hover': {
      opacity: 0.7,
      color:'#0099ff'
    },
  },
}));

function Gallary() {
  const classes = useStyles();
  const [gallaryType, setgallaryType] = useState("Factory");

  const handleChange = (event) => {
    setgallaryType(event.target.value);
    
  };

  return (
    <div className={classes.root}>

      {gallaryType === "Factory" ?
        <ImageSlider slides={FactoryData} data='FACTORYDATA' /> :
        <ImageSlider slides={UnitData} data='UNITDATA' />}

      <FormControl component="fieldset" className={classes.title}>
        <RadioGroup row="false" value={gallaryType} onChange={handleChange}>
          <FormControlLabel value="Factory" control={<Radio />} label="Factory Photos" />
          <FormControlLabel value="Unit" control={<Radio />} label="Factory Units" />
        </RadioGroup>
      </FormControl>

      <Link to='/' className={classes.home}>  Home  </Link>

    </div>

  )
}

export default Gallary
