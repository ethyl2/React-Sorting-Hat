import React, { Component } from 'react';
import hat from './witch-hat.png';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import HouseInfo from './components/HouseInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      house: 'R'
    }
  }

  setHouse = winningHouse => {
    console.log('in setHouse');
    this.setState({...this.state, house: winningHouse})
    console.log(winningHouse);
    console.log(this.state.house);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={hat} className="App-logo" alt="logo" />
          <h1 className="App-title">Listen to the Sorting Hat</h1>
        </header>
    
        <Route exact path='/' component={Home} />
        <Route path='/quiz' render={(props) => <Quiz {...props} setHouse={this.setHouse} />} />
        <Route path='/house' render={(props) => <HouseInfo {...props} house={this.state.house} />} />
      </div>
    );
  }
}

export default App;
