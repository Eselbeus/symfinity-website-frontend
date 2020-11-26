import React from 'react'

import '../App.css';

const NewsUpdate = (props) => {
  return (
    <div>
      <span className="headline-line"><h2>{props.item.headline}</h2><h6 className="author">by {props.author !== undefined ? props.author.name : ''}</h6></span>
      <p>{props.item.body}</p>
    </div>
  )
}

export default NewsUpdate;
