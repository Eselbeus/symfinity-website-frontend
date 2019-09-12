import React from 'react';
import symfinimage from "./images/symfinity2.jpeg";
import NewsUpdate from './components/NewsUpdate';
import PictureFrame from './components/PictureFrame'

import './App.css';

class App extends React.Component {
  state: {
    newsItems: {},
    authors: {}
  }

  componentDidMount(){
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




    return (
      <div className="App component">
        <PictureFrame />
        <header className="App-header">
          <h1 className="site-title">Symfinity</h1>
          <div className="news">
          <h2>Latest News</h2>
          {news}
          <h6>All News</h6>
          <h2>Recent Video</h2>
          <hr/>
          <h2>Shows</h2>
          <hr/>
          <h2>Music</h2>
          <hr/>
          <h2>The Band</h2>
          <hr/>


          </div>
        </header>
      </div>
    );
  }
}

export default App;
