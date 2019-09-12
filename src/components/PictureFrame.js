import React from 'react'
import symfinimage from "../images/symfinity2.jpeg";
import logo from '../images/symfinity-logo.png'
import '../App.css';



const PictureFrame = () => {
  return (
    <div>
      <img className="main-pic" src={symfinimage}/>
      <img className="logo-pic" src={logo}/>
    </div>
  )
}

export default PictureFrame;
