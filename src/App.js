import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BreadBakingChart from './components/BreadBakingChart'
import GeorgianWordCloud from './components/GeorgianWordCloud'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>A Tribute to JumpStart</h1>
        <BreadBakingChart />
        {/* <img src={logo} /> */}
        <GeorgianWordCloud />
      </div>
    );
  }
}

export default App;
