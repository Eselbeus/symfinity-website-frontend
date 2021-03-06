import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Bio from './components/Bio'
import Shows from './components/Shows'
import Music from './components/Music'
import Media from './components/Media'
import Merch from './components/Merch'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Footer from './components/Footer'
import PictureFrame from './components/PictureFrame'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
