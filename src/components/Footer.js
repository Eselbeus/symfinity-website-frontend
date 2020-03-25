import React from 'react'
import '../App.css';
import fb from '../images/facebook.png'
import tw from '../images/twitter.png'
import ig from '../images/instagram.png'
import yt from '../images/youtube.png'

const Footer = () => {
  return (
    <div className="footer">
      <h4>Get in Touch</h4>
      <p>Email us at <a href="mailto:symfinity@gmail.com">symfinity@gmail.com</a> or get in touch on <a href="https://www.facebook.com/symfinity/">Facebook</a> or Instagram at <a href="https://www.instagram.com/symfinity">@symfinity</a>!</p>
      <p>Lead singer Seann is also a web developer and built this site. All updates come directly from the band.</p>
      <a href="https://www.facebook.com/symfinity/" target="_blank" title="Visit Us On Facebook"><img src={fb} alt="Visit Us On Facebook" height="40px" width="40px"/></a>
      <a href="https://www.instagram.com/symfinity/" target="_blank" title="Visit Us On Instagram"><img src={ig} alt="Visit Us On Instagram" height="40px" width="40px"/></a>
      <a href="https://www.youtube.com/user/symfinityband" target="_blank" title="Visit Us On Youtube"><img src={yt} alt="Visit Us On Youtube" height="40px" width="40px"/></a>
      <a href="http://www.twitter.com/@symfinity" target="_blank" title="Visit Us On Twitter"><img src={tw} alt="Visit Us On Twitter" height="40px" width="40px"/></a>
    </div>
  )
}

export default Footer;
