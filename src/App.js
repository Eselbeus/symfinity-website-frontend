import React from 'react';
import symfinimage from "./images/symfinity2.jpeg";
import NewsUpdate from './components/NewsUpdate';

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
      }, console.log(res, "hi"))
    })
  }

  render(){
    let news;
    let authors;
    let author;
    if (this.state != null){
      news = this.state.newsItems
      authors = this.state.authors
      console.log("this thing!!!", authors)
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
      authors = this.state.authors

    }
    console.log(news)




    return (
      <div className="App">
        <header className="App-header">
          <h1 className="site-title">Symfinity</h1>
          <div className="news">
          <h2>Latest News</h2>
          {news}
          <h6>All News</h6>
          <h2>Recent Video</h2>
          <h2>Shows</h2>
          <h2>Music</h2>
          <h2>The Band</h2>


          </div>
        </header>
      </div>
    );
  }
}

export default App;
