import { makeStyles } from '@material-ui/core/styles';
import React, { useState , useEffect} from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { FactoryData } from './FactoryData';
import { UnitData } from './UnitData';

const useStyles = makeStyles((theme) => ({

    slider: {
        width:'100%',
        height:'100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    slide: {
        opacity: '0.2',
        transition: '0.8s ease-in-out 1.7s',
    },
    slideactive: {
        height: '100%',
        width:'100%',
        opacity: '1',
        transition: '0.3s ease-in-out 0.4s',
    },
    image: {
        display:'block',
        width: '100%' ,
        height: '100%' ,
        borderRadius: '10px',
        position: 'relative',
        
    },
    tags: {
        width: '100%',
        height:'auto',
        position:'absolute',
        color: '#fff',
        zIndex: '10',
        cursor: 'pointer',
        bottom: 1,
        left:0,
        backgroundColor: '#000',
        borderRadius: '10px',
        opacity: '0.4',
        fontSize: '2rem',
        // marginBottom: '5px',
        padding: '10px',
        '&:hover': {
            opacity: 0.7,
        },
    },
    leftarrow: {
        position: 'absolute',
        top: '50%',
        right: '32px',
        fontSize: '3rem',
        htmlColor: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
        zIndex: '10',
        cursor: 'pointer',
        userSelect: 'none',
    },
    rightarrow: {
        position: 'absolute',
        top: '50%',
        left: '32px',
        fontSize: '3rem',
        color: '#000',
        zIndex: '10',
        cursor: 'pointer',
        userSelect: 'none',
    },  
}));

const ImageSlider = ({ slides , data}) => {
    const classes = useStyles();
    const [current, setcurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            e.preventDefault();
            if (e.key === 'ArrowRight') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        })
        return () => {
            
        }
    })

    const prevSlide = () => {
        if (slides.length < current) {
            setcurrent(0)
        } else {
            setcurrent(current === 0 ? length - 1 : current - 1)
        }
    }

    const nextSlide = () => {
        
        if (slides.length < current) {
            setcurrent(0)
        } else {
            setcurrent(current === length - 1 ? 0 : current + 1)
        }
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }else
    return (
        <section className={classes.slider}>
            <ArrowBackIosIcon className={classes.rightarrow} onClick={prevSlide} />
            <ArrowForwardIosIcon className={classes.leftarrow} onClick={nextSlide} />
            {(data === 'UNITDATA' ? UnitData : FactoryData).map((slide, index) => {
                return (
                    <div className={index === current ? classes.slideactive : classes.slide} key={index}>
                        {index === current && <><img src={slide.image} alt='not-loaded' className={classes.image} />
                            <div className={classes.tags}>  {slide.tag1}  {slide.tag2}  {slide.tag3}  {slide.tag4} </div></>}
                    </div>
                )
            })
            }
        </section>
    )
}

export default ImageSlider