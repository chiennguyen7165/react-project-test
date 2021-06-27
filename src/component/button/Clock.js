import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), text: "Xin chao" };
  }

  // cach khác là arrow function
  updateState (e) {
    // this.setState({ date: new Date() });
    console.log("updateState", e);
  }

  componentDidMount() {
    console.log("componentDidMount: ");
    // this.timer = setInterval(() => this.updateState, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: ");
    // clearInterval(this.timer);
  }

  render() {
    console.log("render: ");
    return (
      <div>
        <h1>{this.state.text}</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <button onClick={(e) => this.updateState(e)}>Click me</button>
      </div>
    );
  }
}

export default Clock;
