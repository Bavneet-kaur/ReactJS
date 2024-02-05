import React, { Component } from "react";

/**React has five built-in methods that gets called, in this order, when a component is updated:
 *?getDerivedStateFromProps()
 *?shouldComponentUpdate()
 *?render()
 *?getSnapshotBeforeUpdate()
 *?componentDidUpdate()
 */

class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favColor: "Black",
    };
    console.log("Mounting --- constructor() is working");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Mounting --- static getDerivedStateFromProps() is working");
    return null;
  }

  shouldComponentUpdate() {
    console.log("Updating --- shouldComponentUpdate() is working")
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Updating --- getSnapshotBeforeUpdate() is working")
    return null;
  }

  componentDidUpdate() {
    console.log("Updating --- componentDidUpdate() is working")
    
  }
  changeState(){
    this.setState= ({
        favColor: "blue"
    })
  }
  componentDidMount() {
    console.log("Mounting --- componentDidMount() is working");
    setTimeout(() => {
      this.setState({ favColor: "green" });
    }, 4000);
  }

  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: "chocolate", color: "white" }}>
          Updating Lifecycle Method
        </h1>
        <h2>My favourite color is {this.state.favColor}</h2>
      </div>
    );
  }
}

export default Update;
