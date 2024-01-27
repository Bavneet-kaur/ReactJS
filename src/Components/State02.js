import React from "react";
/**
 ** using state in class components
 */

class Bike extends React.Component {
  constructor() {
    super();
    this.state = {
      make: "Yamaha",
      model: "R15",
      color: "BLUE",
    };
  }

  changeBikeColor = () => {
    this.setState({ color: "BLACK" });
  };

  render() {
    return (
      <div>
        <h2>My {this.state.make}</h2>
        <h3>It is a {this.state.color} {this.state.model}.</h3>
        <button
          type="button"
          style={{ border: "none", backgroundColor: "black", color: "white", fontSize: "20px" }}
          onClick={this.changeBikeColor}>
          Change color
        </button>
      </div>
    );
  }
}
export default Bike;