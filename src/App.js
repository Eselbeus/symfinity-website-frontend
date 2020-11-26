import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Bio from './components/Bio'
import Shows from './components/Shows'
import Music from './components/Music'
import Media from './components/Media'
import Merch from './components/Merch'
import Contact from './components/Contact'
import Nav from './components/Nav'
import Footer from './components/Footer'
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/media' component={Media}/>
          <Route exact path='/music' component={Music}/>
          <Route exact path='/shows' component={Shows}/>
          <Route exact path='/bio' component={Bio}/>
          <Route exact path='/' component={Home}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
