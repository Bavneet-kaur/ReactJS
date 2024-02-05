import React, { Component } from "react";
import Mount02 from "./Mount02";

/**
 * React has four built-in methods that gets called, in this order, when mounting a component:
 *?constructor()
 *?getDerivedStateFromProps()
 *?render()
 *?componentDidMount()
 */

class Mount01 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favColor: "Black",
    };
    console.log("Mounting01 --- constructor() is working");
  }

  /** stattic getDerivedStateFromProps() has two parameters --> props and state and
   * has to return new state or null
   */
  static getDerivedStateFromProps(props, state) {
    console.log("Mounting01 --- static getDerivedStateFromProps() is working");
    return null;
  }

  componentDidMount() {
    console.log("Mounting01 --- componentDidMount() is working");
    setTimeout(() => {
      this.setState({ favColor: "peach" });
    }, 4000);
  }

  render() {
    console.log("Mounting01 --- render() is working");
    return (
      <div>
        <h1 style={{backgroundColor: "chartreuse"}}>Mounting Lifecycle Method</h1>
        <h2>My favourite color is {this.state.favColor}</h2>
        <Mount02/>
      </div>
    );
  }
}

export default Mount01;