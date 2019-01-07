import React, { Component } from 'react';
import Cycling from './cycling.js';
import './App.css';
import SignUp from './signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SignUp/>
        <Cycling/>
      </div>
    );
  }
}

export default App;
