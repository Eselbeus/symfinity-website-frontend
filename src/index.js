import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import Bio from './components/Bio'
import Shows from './components/Shows'
import Nav from './components/Nav'
import PictureFrame from './components/PictureFrame'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Nav />
    <Route exact path='/shows' component={Shows}/>
    <Route exact path='/bio' component={Bio}/>
    <Route exact path='/' component={App}/>

  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
