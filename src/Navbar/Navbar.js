// import React, { useState, useEffect, useRef } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import { Link } from 'react-router-dom';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Paper from '@material-ui/core/Paper';
// import Slide from '@material-ui/core/Slide';
// import Popper from '@material-ui/core/Popper';
// import Logo from '../Components/Logo';

// const useStyles = makeStyles((theme) => ({
//     navBox: {
//         //backgroundColor: '#fff',
//         width: '100%',
//         height: 'auto',
//         textAlign: 'center',
//         padding: '10px 20px',
//         position: 'fixed',
//         top: '0',        
//         // overflow: 'auto',  
//     },
//     name: {
//         padding: '10px 15px',   
//         color: '#0099ff',
//         fontSize: '2.5rem',
//         textDecoration: 'none',
//         display: 'flex',
//         float: 'left',
//         fontFamily: 'serif',
//         textShadow: '2px 2px #0000ff'
//     },
//     anchor: {
//         padding: '25px 15px',
//         display: 'flex',
//         float: 'right',
//         gravity: '',
//         color: '#000',
//         fontSize: '1.5rem',
//         textDecoration: 'none',
//         alignSelf: 'center',
//         transition:' 0.5s ease-in-out',
//         '&:hover': {
//             backgroundColor: '#000',
//             borderRadius:'10px',
//             color: '#0099ff',
//         },
//         [theme.breakpoints.only('sm')]: {
//             fontSize: '1.2rem',
            
//         },
//     },
//     optionButton: {
//         display: 'flex',
//         float: 'right',
//         color: '#000'
//     },
//     paper: {
//         backgroundColor: '#FFF',
//         display: 'flex-end',
//         textAlign: 'center',
//         letterSpacing: '5px'
//     },
//     menuItems: {
//         display: 'block',
//         textDecoration: 'none',
//         color: '#000',
//         padding: '10px',
//         fontSize: '1.5rem',
//         borderBottom: '0.1px groove',
//         '&:hover': {
//             backgroundColor: '#fff',
//             color: '#0099ff',
//             opacity: '0.8',
//         },
//     },
//     crr: {
//         display: 'inline-flex',
        
//     },
//     three: {
//         fontFamily:'serif',
//     },
// }));

// const MenuItems = [{
//     title: 'Touch With us',
//     url: '/Touch With US',
// }, {
//     title: 'Gallery',
//     url: '/Gallery',
// }, {
//     title: 'Our Products',
//     url: '/Our Products',
// }, {
//     title: 'About us',
//     url: '/About US',
// },]

// function Navbar() {

//     const classes = useStyles();
//     const [drawerMenu, setdrawerMenu] = useState(false);
//     const [elanchor, setelanchor] = useState(null);
//     const [background, setBackground] = useState(false)

//     const isMountedRef = useRef(null);
    
//     useEffect(() => {
//         isMountedRef.current = true;
//         const changeBackground = () => {
//             console.log(window.scrollY);
//             if (window.scrollY >= 150) {
//                 setBackground(true)
//             } else {
//                 setBackground(false)
//             }
//         };
//         window.addEventListener('scroll', changeBackground);

//         return () => isMountedRef.current = false;
//     }, [background]);

//     const DrawerMenu = () => {

//         return (
//             <><Popper open={drawerMenu} anchorEl={elanchor}>
//                 <Slide direction="down" in={drawerMenu} mountOnEnter unmountOnExit>
//                     <Paper variant="outlined" elevation={4} square className={classes.paper} >
//                         {MenuItems.slice(0).reverse().map((item, index) => {
//                             return (<Link to={item.url} key={index} className={classes.menuItems} onClick={() => {
//                                 if (drawerMenu === true) {
//                                     setdrawerMenu(false)
//                                 }
//                             }}>{item.title} </Link>)
//                         })}
//                     </Paper>
//                 </Slide>
//             </Popper>
//             </>
//         )
//     }

//     return (<>
//         <Box className={classes.navBox}
//              style={{ backgroundColor: background ? "#fff" : "transparent" }}
//         >
//             <Link to='/' className={classes.name}>
//                 <span className={classes.crr}> <Logo /><span className={ classes.three}>3</span>Star Export </span>
//             </Link>
//             <Box display={{ xs: 'none', sm:'none', md: 'block' }}>
//                 {MenuItems.map((item, index) => { return (<Link to={item.url} key={index} className={classes.anchor}>{item.title}</Link>) })}
//             </Box>
//             <Box display={{ xs: 'block', sm:'block', md: 'none' }}>
//                 <IconButton aria-label="Options" className={classes.optionButton} onClick={(e) => {
//                     e.preventDefault();
//                     setelanchor(e.currentTarget)
//                     if (drawerMenu === true) {
//                         setdrawerMenu(false)
//                     } else if (drawerMenu === false) {
//                         setdrawerMenu(true)
//                     }
//                 }}>
//                     <MenuIcon />
//                 </IconButton>
//             </Box>
//         </Box>
//         <Box display={{ xs: 'block', sm: 'none' }}>
//             {drawerMenu ? <DrawerMenu /> : null}
//         </Box>
//     </>
//     )

// }

// export default Navbar;