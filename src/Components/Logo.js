import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';

const useStyles = makeStyles((theme) => ({
    root: {
                
    },
    logo1: {
        marginTop: '5px',
        textShadow: '2px 2px #0000ff',
        '&:hover': {
            transform: 'rotate(360deg)',
            transition:'all 0.7s ease-in-out 0s'
        }
    },
    logo2: {
        marginBottom: '10px',
        textShadow: '2px 2px #0000ff',
        '&:hover': {
            transform: 'rotate(360deg)',
            transition:'all 0.7s ease-in-out 0s'
        }
    },
    logo3: {
        marginTop: '5px',
        textShadow: '2px 2px #0000ff',
        '&:hover': {
            transform: 'rotate(360deg)',
            transition:'all 0.7s ease-in-out 0s'
            
        }
    },
}));


function Logo() {
    const classes = useStyles();
    // const [rotate, setrotate] = useState(false);
    return (
        <div className={classes.root}>
            <GradeRoundedIcon className={classes.logo1} />
            <GradeRoundedIcon className={classes.logo2}/>
            <GradeRoundedIcon className={classes.logo3}/>
        </div>
    )
}

export default Logo
