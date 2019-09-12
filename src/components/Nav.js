import React from 'react'
import { BrowserRouter as Link, NavLink, Router } from 'react-router-dom'
import '../App.css';

class Nav extends React.Component {
  render(){
    return (
      <nav className="navBar">
        <NavLink className="nav-elem" to="/">HOME</NavLink>
        <NavLink className="nav-elem" to="/bio">BIO</NavLink>
        <NavLink className="nav-elem" to="/shows">SHOWS</NavLink>
        <NavLink className="nav-elem" to="/music">MUSIC</NavLink>
        <NavLink className="nav-elem" to="/media">MEDIA</NavLink>
        <NavLink className="nav-elem" to="/merch">MERCH</NavLink>
        <NavLink className="nav-elem" to="/contact">GET IN TOUCH</NavLink>
      </nav>
    )
  }

}

export default Nav
