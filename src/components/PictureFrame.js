import React from 'react'
import symfinimage from "../images/symfinitygramercysdca.png";
import symfinityct from "../images/symfinityct.jpg"
import logo from '../images/logowhite.png'
import '../App.css';



const PictureFrame = () => {
  return (
    <div>
      <img className="main-pic" src={symfinityct}/>
      <img className="logo-pic" src={logo}/>
    </div>
  )
}

export default PictureFrame;
