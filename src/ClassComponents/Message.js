import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage1() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  changeMessage2() {
    this.setState({
      message: "Hope to see you soon",
    });
  }

  render() {
    const mystyle = {
      border: "2px solid red",
      margin: "30px 300px",
      padding: "10px",
      backgroundColor: "lightblue",
    };
    return (
      <div>
        <h1 style={mystyle}>{this.state.message}</h1>
        <button onClick={() => this.changeMessage1()}>Subscribe</button>
        <button onClick={() => this.changeMessage2()}>Unscribe</button>
      </div>
    );
  }
}

export default Message;
