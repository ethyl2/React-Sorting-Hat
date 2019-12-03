import React, { Component } from 'react';
import hat from './witch-hat.png';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hat} className="App-logo" alt="logo" />
          <h1 className="App-title">Listen to the Sorting Hat</h1>
        </header>
    
        <Route exact path='/' component={Home} />
        <Route path='/quiz' component={Quiz} />

      </div>
    );
  }
}

export default App;
