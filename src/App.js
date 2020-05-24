import React, {Component} from 'react';
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Content from './components/Content';
import Subjects from './components/Subjects';
import './App.css';



class App extends Component {
  

  constructor() {
    super();
    this.state = {
      isDrawerOpen: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }


  toggleDrawer ()  {
    this.setState({isDrawerOpen: !this.state.isDrawerOpen})
  }

  render() {
    


    return (
      <ThemeProvider>
        <CssBaseline/>
        <NavBar toggleDrawer={this.toggleDrawer} isDrawerOpen={this.state.isDrawerOpen}/>
        <Content isDrawerOpen={this.state.isDrawerOpen}>
          <Subjects />
        </Content>
      </ThemeProvider>
    )
  }
}

export default App;
