import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';



function App() {
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
      () =>
        createMuiTheme({
          palette: {
            type: prefersDarkMode ? 'dark' : 'light',
          },
        }),
        [prefersDarkMode],
    );


    

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <NavBar />
      </ThemeProvider>
    )
}

export default App;
