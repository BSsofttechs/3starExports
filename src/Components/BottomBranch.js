import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#1fc8db',
        backgroundImage: 'linear-gradient(to right, #12c2e9, #fff);',
        //  color:'#fff',
        width: '100%',
        height: 'auto',
        padding: '1rem',
        marginBottom: '0',
        position: 'relative',
        bottom: 0,
        left: 0,

    },
    gridfull: {
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    typo: {
        display: 'block',
        textAlign: 'Left',
        marginLeft:'auto',
        marginRight: 'auto',
        color: '#000',
    },
    gap: {
        marginBottom: '2rem',
        marginLeft: '25%',
        marginRight:'25%',
    },
    header: {

    }
}));

function BottomBranch() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2} className={classes.gridfull}>
                <Grid className={classes.typo} container item xs={12} md={6} lg={6} spacing={3}>
                    <Addresscard country="INDIA OFFICE" line1="97, Srivenkateshwara Nagar, Valayankadu"
                        line2="Gandhinagar PO, Tirupur - 641 601." line3="Mobile No: 99443-97534" />
                    {/* </Grid> */}
                    {/* <Grid className={ classes.typo} container item xs={12} lg={4} spacing={3}> */}
                    <Addresscard country="DUBAI OFFICE"
                        line1="Waraqat al Madeena Garments Trading LLC"
                        line2="1st Floor, office No.101, Opp.Mashreq Bank"
                        line3="Murshid Bazar, Deira, DUBAI - U.A.E."
                        line4="Mobile: 971-524337957" />
                </Grid>
                <Grid className={classes.typo} container item xs={12} md={6} lg={6} spacing={3}>
                    <Addresscard country="SOUDI OFFICE"
                        line1="NUQA GARMENTS TRADING EST."
                        line2="Mfrs. : Importers & Export"
                        line3="Wholesale for Readymade Garments"
                        line4="Al-Rajhi Commercial Center, Shop Ni. 440"
                        line5="Al-Wazeer St. Riyadh - Batha."
                        line6="Ph: 0580746438, 0569496723, 0550279284"
                        line7="Vat No.: 300282066300003"
                        line8="Contact Person : Mr. Samad, Ph.: 00966569496723"
                        line9="E-Mail: csaif68@gmail.com" />
                </Grid>
            </Grid>
        </div>
    )
}

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Addresscard = ({ country, line1, line2, line3, line4, line5, line6, line7, line8, line9 }) => {
    const classes = useStyles();
    return (<>
        <ThemeProvider theme={theme}>
            <div className={classes.gap}>
                <Typography variant='h5' className={classes.header}>{country}</Typography>
                <Typography variant='subtitle1'>{line1}</Typography>
                <Typography variant='subtitle1'>{line2} </Typography>
                <Typography variant='subtitle1'>{line3} </Typography>
                <Typography variant='subtitle1'>{line4} </Typography>
                <Typography variant='subtitle1'>{line5} </Typography>
                <Typography variant='subtitle1'>{line6} </Typography>
                <Typography variant='subtitle1'>{line7} </Typography>
                <Typography variant='subtitle1'>{line8} </Typography>
                <Typography variant='subtitle1'>{line9} </Typography>
            </div>
        </ThemeProvider>
    </>)

};
export default BottomBranch
