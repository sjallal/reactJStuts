import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  IncreCount() {
    // this.setState({ count: this.state.count + 1 }, () =>
    //   console.log(`Callback Value is ${this.state.count}`)
    // );
    console.log(`Asynchronous value while the setState executes ${this.state.count}`);
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  }

  IncreFive() {
    this.IncreCount();
    this.IncreCount();
    this.IncreCount();
    this.IncreCount();
    this.IncreCount();
  }
  render() {
    return (
      <div>
        <h1>Count = {this.state.count}</h1>
        <button onClick={() => this.IncreFive()}>Increment Count</button>
      </div>
    );
  }
}

export default Counter;
