import React from 'react'
import Header from './Header'

const Music = () => {
  return (
    <div className="component">
      <Header />
      <h1 className="page-title">Music</h1>
      <iframe className="follow" src="https://open.spotify.com/follow/1/?uri=spotify:artist:2K9xZnN6sLgsSw9Z2pNprV&size=detail&theme=light" width="300" height="56" scrolling="no" frameborder="0" allowtransparency="true"></iframe>
      <br/>
      <div className="musicPage">

        <iframe className="spotify-player" src="https://open.spotify.com/embed/album/65GrdAFFGtg0HRSR7ZhLIw" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe className="spotify-player" src="https://open.spotify.com/embed/album/16KGN6CNOTEPazQjMRjJNP" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>


        <iframe className="spotify-player" src="https://open.spotify.com/embed/album/1PHPMUs9ys3BGHPwLwp8Jz" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

        <iframe className="spotify-player" src="https://open.spotify.com/embed/album/2tc6GWm7q97OdbwMhffekV" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  )
}

export default Music;
