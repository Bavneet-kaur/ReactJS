import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  Increment = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback Value: ", this.state.count);
      }
    );

    /*whenever you need to execute some code after the state has been changes don't place
     it after the 'setState' methhod instead place that code within the callback that is passed
    as a second parameter to 'setSate()'*/
    console.log(this.state.count);
  };
  render() {
    return ( 
      <div>
        <br />
        Count - {this.state.count}
        <button
          type="button"
          style={{
            border: "none",
            backgroundColor: "green",
            color: "white",
            fontSize: "20px",
          }}
          onClick={this.Increment}
        >
          Increment
        </button>
      </div>
    );
  }
}
export default Counter;
