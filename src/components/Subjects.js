import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme => ({
    root: {
        height: theme.spacing(5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'


    },
})));


const Subject = () => {
    const classes = useStyles();
    return(
        <Grid
        item
        xs = {12}
        sm = {6}
        md = {4}
        lg = {3}
        xl = {2}
        >
            <Paper 
            elevation={3}
            className={classes.root}
            >
                <p>This is content</p>
            </Paper>
        </Grid>
    )
}

const Subjects = () => {
    const Subs = [];
    for(var i = 0; i < 12; i++) {
        Subs.push(<Subject />);
    }
    return(
        <Grid 
            container 
            direction="row" 
            justify="center" 
            alignItems="center"
            spacing = {2}


        >
            {Subs}
        </Grid>
    )
}

export default Subjects;
