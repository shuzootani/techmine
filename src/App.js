import React, { Component } from 'react';
import './App.css';
import SearchBoxContainer from './containers/SearchBoxContainer'
import SearchResultContainer from './containers/SearchResultContainer'
import TabContainer from './containers/TabContainer'
import logo from './images/techmine.png'

// import parser from 'ogp-parser' Pocketみたいなスクリーンスクレイピングしたい。
// import fetchJsonp from 'fetch-jsonp' fetchAPIでJSONP使いたかったけどうまくいかない。

class App extends Component {

  componentDidMount() {
  }
  

  render() {
    return (
      <div className="App">
        <h1 className='appTitle'>
          TECH <img src={logo} width='35' height='35' alt='tech mine'/> MINE
        </h1>
        <SearchBoxContainer/>
        <TabContainer/>
        <SearchResultContainer/>
      </div>
    );
  }
}

export default App;
