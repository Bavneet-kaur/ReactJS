import React, { Component } from "react";

class Mount02 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favColor: "Black",
    };
    console.log("Mounting02 --- constructor() is working");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Mounting02 --- static getDerivedStateFromProps() is working");
    return null;
  }

  componentDidMount() {
    console.log("Mounting02 --- componentDidMount() is working");
    setTimeout(() => {
      this.setState({ favColor: "purple" });
    }, 4000);
  }

  render() {
    console.log("Mounting02 --- render() is working");
    return (
      <div>
        <h1 style={{backgroundColor: "grey"}}>Mounting Lifecycle Method</h1>
        <h2>My favourite color is {this.state.favColor}</h2>
      </div>
    );
  }
}

export default Mount02;