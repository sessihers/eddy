import React from 'react'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles ((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },

}))

const Hero = () => {

    const classes = useStyles();

    return (
        <div>
            <Container 
                className = {classes.root}
            >
            </Container>
        </div>
    )
}

export default Hero;