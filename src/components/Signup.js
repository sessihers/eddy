import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { render } from '@testing-library/react';


const useStyles = makeStyles ((theme) => {
    root: {

    }
});

export function handleSignUp() {
    render(
        <Signup />
    )
}

const Signup = () => {
    
    return (
        <form noValidate >
            <Grid
                container
            >
                <Grid
                    item
                    xs={12}
                >
                    <TextField id="standard-basic" label="Netfang" />
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <TextField id="standard-basic" label="Lykilorð" />
                </Grid>
            </Grid>
        </form>
    )


}

export default Signup;