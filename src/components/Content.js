import React, {Component} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Subjects from './Subjects';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));


const Content = (props) => {
    
    
    const classes = useStyles();

    const isDrawerOpen = props.isDrawerOpen;

    console.log(isDrawerOpen);


    return(
        <main
        className={clsx(classes.root, {
            [classes.contentShift] : isDrawerOpen,
        })}>
            <div className={classes.drawerHeader} />
            <Container>
                    {props.children}
            </Container>
        </main>
    )
}

export default Content;