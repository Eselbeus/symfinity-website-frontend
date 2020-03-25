import React from 'react';
import symfinimage from "./images/symfinityroof.jpg";
import symifnityct from "./images/symfinityct.jpg"
import NewsUpdate from './components/NewsUpdate';
import PictureFrame from './components/PictureFrame'
import seannPic from './images/seann-hands1.jpg'
import seann from './images/Seannrevised.jpg'
import doc from './images/Docrevised.jpg'
import averi from './images/Averirevised.jpg'
import crystal from './images/Crystalrevised.jpg'

import './App.css';

class App extends React.Component {
  state: {
    newsItems: {},
    authors: {}
  }

  componentDidMount(){
    const script = document.createElement("script");

    script.src = "https://widget.bandsintown.com/main.min.js";
    script.async = true;

    document.body.appendChild(script);

    fetch(`http://localhost:3000/api/v1/posts`, {
      method: "GET",
      headers: {
        "contect-type": "application/json",
        accepts: "application/json"
      }
    })
    .then(resp => resp.json())
    .then(res => {
      this.setState({
        newsItems: res
      }, console.log(res, "hi"))
    })

    fetch(`http://localhost:3000/api/v1/users`, {
      method: "GET",
      headers: {
        "contect-type": "application/json",
        accepts: "application/json"
      }
    })
    .then(resp => resp.json())
    .then(res => {
      this.setState({
        authors: res
      })
    })
  }

  render(){
    let news;
    let authors;
    let author;
    if (this.state != null){
      news = this.state.newsItems
      authors = this.state.authors
      if (news != undefined){
        news = news.map(item => {
          if (this.state.authors != undefined){
            author = this.state.authors.find(author => {
              return author.id === item.user_id
            })
          }
          return <NewsUpdate item={item} author={author}/>
        })
      }
    }


// <h6>All News</h6>

    return (
      <div className="App component">
        <PictureFrame />
        <header className="App-header">
          <h1 className="site-title">Symfinity</h1>
          <div className="news">
          <h2>Latest News</h2>
          <p className="text news">Symfinity just released new album Anthem!!!! Get it on <a href="http://symfinity.bandcamp.com">Bandcamp</a> now! Also the CD is available for now at CD Baby. Tracks are streamable on Spotify/Deezer.</p>
          {news}

          <div className="columns">
            <div className="columns-left">
              <h2>Recent Video</h2>
              <hr/>
              <iframe className="vid main-page-vid" width="560" height="315" src="https://www.youtube.com/embed/tEVvAQo89fo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <h2>Shows</h2>
              <hr/>
              <div className="shows-container shows-main-page">
                <a class="bit-widget-initializer" data-artist-name="Symfinity" data-display-local-dates="false" data-display-past-dates="true" data-auto-style="false" data-text-color="#FFFFFF" data-link-color="#00b43a" data-background-color="rgba(0,0,0,0)" data-display-limit="15" data-display-start-time="false" data-link-text-color="#FFFFFF" data-display-lineup="false" data-display-play-my-city="true" data-separator-color="rgba(124,124,124,0.25)"></a>
              </div>
            </div>

            <div className="columns-right">
              <h2>Music</h2>
              <hr/>
              <iframe src="https://open.spotify.com/embed/playlist/1Ds78vMfSXXDK3ba8KUD9C" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
              <br/>
              <img src={seannPic} className="seannImgFront"/>
            </div>
          </div>
          <div className="bandpics">
            <h2>The Band</h2>
            <hr/>
            <span className="pics">
              <div className="pic-container">
                <p>Seann</p>
                <img src={seann} className="pic"/>
              </div>
              <div className="pic-container">
                <p>Doc</p>
                <img src={doc} className="pic"/>
              </div>
              <div className="pic-container">
                <p>Crystal</p>
                <img src={crystal} className="pic"/>
              </div>
              <div className="pic-container">
                <p>Averi</p>
                <img src={averi} className="pic"/>
              </div>
            </span>
          </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
