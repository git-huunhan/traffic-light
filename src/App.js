import React, { Component } from 'react';
import './App.css';

import TrafficLight from './components/TrafficLight';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentColor :  GREEN
    };

    setInterval(() => {
      this.setState({
        currentColor : this.getNextColor(this.state.currentColor)
      });
    }, 2000)
  }

  getNextColor(color){
    switch(color){
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      default:
        return RED;
    }
  }

  render(){
    const { currentColor } = this.state;

    return (
      <div className="App">
        <TrafficLight currentColor = { currentColor } />
      </div>
    );
  }
}

export default App;
