import React from 'react'
import Header from './Header'
import seann1 from '../images/seann1.jpg'

class Shows extends React.Component {
  state = {
    widget: false
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render(){

    return (


      <div className="component">
        <Header />
        <h1 className="page-title">Shows</h1>
        <h2 className="text">All shows currently on hold due to pandemic. Please visit YouTube, Bandcamp and socials and support us there!</h2>
        <div className="shows-container">
          <a class="bit-widget-initializer" data-artist-name="Symfinity" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#FFFFFF" data-link-color="#00b43a" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-display-start-time="false" data-link-text-color="#FFFFFF" data-display-lineup="false" data-display-play-my-city="true" data-separator-color="rgba(124,124,124,0.25)"></a>
        </div>
          <img className="shows-page-pics" src={seann1}/>


      </div>
    )
  }
}

export default Shows;
