import React from 'react'
import Header from './Header'
import epk1 from "../images/epkshot1.jpg"
import epk2 from "../images/epkshot2.jpg"
import epk3 from "../images/epkshot3.jpg"
import epk4 from "../images/epkshot4.jpg"
import epk5 from "../images/epkshot5.jpg"
import epk6 from "../images/epkshot6.jpg"




const Contact = () => {
  return (
    <div className="component">
      <Header />
      <h1 className="page-title">Contact/EPK</h1>
      <section>
        <p className="text">For press, management, booking or general inquiries, please email symfinity@gmail.com. Full EPK below.</p>
        <span className="epkpiccontainer">
          <img src={epk1} className="epkpics"/><img src={epk2} className="epkpics"/><img src={epk3} className="epkpics"/><img src={epk4} className="epkpics"/><img src={epk5} className="epkpics"/><img src={epk6} className="epkpics"/>
        </span>

        <p className="text">NYC’s Symfinity harnesses the power of a full symphony orchestra, and combines it with metal edge and surprising pop-rock undertones to transport you elsewhere.  Featuring Seann as frontman/composer/orchestrator, Doc on guitar, Crystal on piano, and Muzikal A. on varied wind instruments, Symfinity drives home dramatic anthems that move audiences with their emotional impact.</p>
        <p className="text">This is symphonic metal as it’s never been done before.  With the closest comparison perhaps being  “Jethro Tull meets Nightwish”, or “The Moody Blues meets Kamelot”, Symfinity combines multiple genres in an innovative way that appeases a wide-reaching audience.   Their songs satisfy the uncommon role of being both family-friendly and metal-friendly, and touch on relatable life topics that resonate personally with listeners.</p>
        <p className="text">Symfinity is for everyone.  It’s for the person who gave up playing an instrument after middle school and looks back fondly at playing it.  It’s for the person looking for emotional musical riffs to get them through the school or work week. It’s for the gamer living in a world of fantasy.  It’s for the orchestra nerd who has a dark side. It’s for the high schooler who is trying to figure out life and themself, and needs feel-good anthems to hold onto for inspiration.  It’s for the middle-aged person who laments never getting to have learned an instrument, but was always enamored with the sound of a bombastic, minor-mode symphony played by a capable orchestra.  It’s for the fan who derives meaningful substance from the intricate partnership of lyrics and chords as they jump along, triumphantly.  It’s even for the unsuspecting onlookers who accidentally stumble upon the cacophony of sounds from instruments ringing out in harmony, who then linger to ogle this spectacle with unforeseen curiosity and wonder.</p>
        <p className="text">Symfinity just released their new album, Anthem, in March 2020 – which showcases their new, heavier sound.  Previous releases include their recently released singles, Flipside, Dynamite, Halfway, and Everything I Know Explodes – along with earlier, more rock ballad-styled albums Apocrypha and Intangible Dreams.  </p>

        <h2 className="important-text epk-header">Venues and Festivals</h2>
        <h3 className="text">Venues of Note</h3>
        <p className="text">Irving Plaza (New York, NY)</p>

        <p className="text">The Gramercy Theater (New York, NY)</p>

        <p className="text">Stage 48 (New York, NY)</p>

        <p className="text">The Stone Pony (Asbury Park, NJ)</p>

        <p className="text">Kungfu Necktie (Philadelphia, PA)</p>

        <p className="text">McStew's Irish Pub (Levittown, PA)</p>

        <p className="text">Mexicali Live (Teaneck, NJ)</p>

        <p className="text">Blackthorn 51 (Elmhurst, NY)</p>

        <p className="text">Revolution Bar and Music Hall (Amityville, NY)</p>

        <p className="text">The Bitter End (New York, NY)</p>

        <p className="text">Charlee Bravos (Putnam, CT)</p>

        <h3 className="text">Festivals</h3>
        <p className="text">Mayfest (New London, NH)</p>

        <p className="text">Howl at the Moon Festival (Nashville, TN)</p>

        <p className="text">BS Music Fest (Corvallis, OR)</p>

      </section>
    </div>
  )
}

export default Contact;
