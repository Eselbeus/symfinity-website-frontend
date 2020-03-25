import React from 'react'
import { BrowserRouter as Link, NavLink, Router } from 'react-router-dom'
import '../App.css';
import HamburgerMenu from 'react-hamburger-menu';

class Nav extends React.Component {
  state = {
    open: false,
    hideOrShowHambugerDropDown: 'hamburgerDropDown'
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  handleClick2 = () => {
    this.setState({open: false});
  }

  displayHamburgerMenu = () => {
        return (
            <HamburgerMenu
                    isOpen={this.state.open}
                    menuClicked={this.handleClick.bind(this)}
                    width={22}
                    height={18}
                    strokeWidth={2}
                    rotate={0}
                    color='#999999'
                    borderRadius={0}
                    animationDuration={0.5}
                />
        )
    }

  desktopNav = () => {
    return (
      <nav className="nav">
        <NavLink className="nav-elem" to="/">HOME</NavLink>
        <NavLink className="nav-elem" to="/bio">BIO</NavLink>
        <NavLink className="nav-elem" to="/shows">SHOWS</NavLink>
        <NavLink className="nav-elem" to="/music">MUSIC</NavLink>
        <NavLink className="nav-elem" to="/media">MEDIA</NavLink>
        <a className="nav-elem" href="http://symfinity.bandcamp.com">MERCH</a>
        <NavLink className="nav-elem" to="/contact">GET IN TOUCH</NavLink>
      </nav>
    )
  }

  mobileNav = () => {
    return (
      <nav className='hamburgerDropDown nav-mobile'>
        <NavLink className="nav-elem" onClick={this.handleClick.bind(this)} to="/">HOME</NavLink>
        <NavLink className="nav-elem" onClick={this.handleClick.bind(this)} to="/bio">BIO</NavLink>
        <NavLink className="nav-elem" onClick={this.handleClick.bind(this)} to="/shows">SHOWS</NavLink>
        <NavLink className="nav-elem" onClick={this.handleClick.bind(this)} to="/music">MUSIC</NavLink>
        <NavLink className="nav-elem" onClick={this.handleClick.bind(this)} to="/media">MEDIA</NavLink>
        <a className="nav-elem" href="http://symfinity.bandcamp.com">MERCH</a>
        <NavLink className="nav-elem" onClick={this.handleClick.bind(this)} to="/contact">GET IN TOUCH</NavLink>
      </nav>
    )
  }

  render(){
    // <NavLink className="nav-elem" to="/merch">MERCH</NavLink>
    return (
            <div className='nav-bar'>
                <nav className="nav">
                  <NavLink className="nav-elem" to="/">HOME</NavLink>
                  <NavLink className="nav-elem" to="/bio">BIO</NavLink>
                  <NavLink className="nav-elem" to="/shows">SHOWS</NavLink>
                  <NavLink className="nav-elem" to="/music">MUSIC</NavLink>
                  <NavLink className="nav-elem" to="/media">MEDIA</NavLink>
                  <a className="nav-elem" href="http://symfinity.bandcamp.com">MERCH</a>
                  <NavLink className="nav-elem" to="/contact">GET IN TOUCH</NavLink>
                </nav>
                { this.state.open ?  this.mobileNav() : this.displayHamburgerMenu()}

            </div>
      );
  }

}

export default Nav
