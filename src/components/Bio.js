import React from 'react'
import Header from './Header'
import bio1 from "../images/bio1.jpg"
import bio2 from "../images/bio2.jpg"
import bio3 from "../images/bio3.jpg"

const Bio = () => {
  return (
    <div className="component">
      <Header />
      <h1 className="page-title">Biography</h1>
      <h1 className="important-text">Symfinity</h1>
      <section className="bio-text-area">
        <span className="bio-p"><p className="text">NYC’s Symfinity harnesses the power of a full symphony orchestra, and combines it with metal edge and surprising pop-rock undertones to transport you elsewhere.  Featuring Seann as frontman/composer/orchestrator, Doc on guitar, Crystal on piano, and Muzikal A. on varied wind instruments, Symfinity drives home dramatic anthems that move audiences with their emotional impact.</p><img className="biopage-imgs" src={bio1}/></span>
        <p className="text">This is symphonic metal as it’s never been done before.  With the closest comparison perhaps being  “Jethro Tull meets Nightwish”, or “The Moody Blues meets Kamelot”, Symfinity combines multiple genres in an innovative way that appeases a wide-reaching audience.   Their songs satisfy the uncommon role of being both family-friendly and metal-friendly, and touch on relatable life topics that resonate personally with listeners.</p>
        <span className="bio-p"><img className="biopage-imgs" src={bio2}/> <p className="text">Symfinity is for everyone.  It’s for the person who gave up playing an instrument after middle school and looks back fondly at playing it.  It’s for the person looking for emotional musical riffs to get them through the school or work week. It’s for the gamer living in a world of fantasy.  It’s for the orchestra nerd who has a dark side. It’s for the high schooler who is trying to figure out life and themself, and needs feel-good anthems to hold onto for inspiration.  It’s for the middle-aged person who laments never getting to have learned an instrument, but was always enamored with the sound of a bombastic, minor-mode symphony played by a capable orchestra.  It’s for the fan who derives meaningful substance from the intricate partnership of lyrics and chords as they jump along, triumphantly.  It’s even for the unsuspecting onlookers who accidentally stumble upon the cacophony of sounds from instruments ringing out in harmony, who then linger to ogle this spectacle with unforeseen curiosity and wonder.</p></span>
        <span className="bio-p"><p className="text">Symfinity just released their new album, Anthem, in March 2020 – which showcases their new, heavier sound.  Previous releases include their recently released singles, Flipside, Dynamite, Halfway, and Everything I Know Explodes – along with earlier, more rock ballad-styled albums Apocrypha and Intangible Dreams.  </p><img className="biopage-imgs" src={bio3}/></span>
      </section>
    </div>
  )
}

export default Bio;
