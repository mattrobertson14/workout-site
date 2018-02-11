import React, { Component } from 'react';
import logo from '../logo.svg';
import '../stylesheets/App.css';

import Details from './Details';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Road To Dunk & 200lbs</h1>
        <Details/>

      </div>
    );
  }
}

export default App;
