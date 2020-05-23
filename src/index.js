import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import * as serviceWorker from './serviceWorker';
import {getApikey} from './keys.js'

const config = {
  apiKey: getApikey(),
  authDomain: "eddy-13476.firebaseapp.com",
  databaseURL: "https://eddy-13476.firebaseio.com",
  projectId: "eddy-13476",
  storageBucket: "eddy-13476.appspot.com",
  messagingSenderId: "600311663745",
  appId: "1:600311663745:web:d3d2d1b5a8531d89f7d180",
  measurementId: "G-N9TQEYL98D"
}

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
