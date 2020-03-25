import React from 'react'
import Header from './Header'

const Media = () => {
  return (
    <div className="component">
      <Header />
      <h1 className="page-title">Media</h1>
      <div className='vids'>
        <iframe className="youtubevid" width="560" height="315" src="https://www.youtube.com/embed/tEVvAQo89fo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="youtubevid" width="560" height="315" src="https://www.youtube.com/embed/Cjw3hJTpWg0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="youtubevid" width="560" height="315" src="https://www.youtube.com/embed/_kW9Q_NXYYw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <iframe className="youtubevid" width="560" height="315" src="https://www.youtube.com/embed/5LUFHkDKA0g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Media;
