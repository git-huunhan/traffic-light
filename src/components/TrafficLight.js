import React, { Component } from 'react';
import className from 'classnames';
import './TrafficLight.css'

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class TrafficLight extends Component {
  render(){
    const { currentColor } = this.props;

    return(
      <div className="TrafficLight">
        <div className={className('bulb', 'red', {
          active: currentColor === RED
        })}></div>
         <div className={className('bulb', 'yellow', {
          active: currentColor === YELLOW
        })}></div>
         <div className={className('bulb', 'green', {
          active: currentColor === GREEN
        })}></div>
      </div>
    );
  }
}

export default TrafficLight;