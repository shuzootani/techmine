import React, { Component } from 'react';
import './App.css';
import SearchBoxContainer from './containers/SearchBoxContainer'
import SearchResultContainer from './containers/SearchResultContainer'

// import parser from 'ogp-parser' Pocketみたいなスクリーンスクレイピングしたい。
// import fetchJsonp from 'fetch-jsonp' fetchAPIでJSONP使いたかったけどうまくいかない。

class App extends Component {

  componentDidMount() {
  }
  

  render() {
    return (
      <div className="App">
        <h1>TECH MINE</h1>
        <SearchBoxContainer/>
        <SearchResultContainer/>
      </div>
    );
  }
}

export default App;
