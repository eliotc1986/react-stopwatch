import React, { Component } from 'react';
import './StopWatch.css';


class StopWatchButtons extends Component {
  render() {
    return (
      <div className="stopwatch-buttons">
        <button onClick={() => this.props.onClick()}>Start</button>
      </div>
    );
  }
}

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elapsed: 0,
    };
  }

  startTimer() {
    this.timer = setInterval(this.tick.bind(this), 50);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  resetTimer() {
    clearInterval(this.timer);

    this.setState({
      elapsed: 0
    });
  }

  // This function is called every 50 ms. It updates the
  // elapsed counter. Calling setState causes the component to be re-rendered
  tick() {
    this.setState({
      elapsed: new Date() - this.props.start
    });
  }

  render() {
    const elapsed = Math.round(this.state.elapsed / 100);

    // This will give a number with one digit after the decimal dot (xx.x):
    const seconds = (elapsed / 10).toFixed(1);

    // Although we return an entire <p> element, react will smartly update
    // only the changed parts, which contain the seconds variable.
    return (
      <div className="stop-watch-wrapper">
        <p className="time"><b>{seconds} seconds</b></p>
        <StopWatchButtons
          onClick={() => this.startTimer()}
        />
      </div>
    );
  }
}

export default StopWatch;
