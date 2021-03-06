import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarMatch from './Components/starMatch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <StarMatch />
        </div>
      </div>
    );
  }
}

export default App;
