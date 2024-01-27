import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello! Event Binding",
    };
    // this.clickHandler = this.clickHandler.bind(this) --- #third approach
  }

  /**
   **clickHandler() {
    **this.setState({
        **message: "Good Bye Event Binding",
    **});
  **}
  */

  clickHandlerTwo = () => {
    this.setState({
        message: "GoodBye with fourth approach! -- silly"
    })
  }

  render() {
    return (
      <div>
        {this.state.message}
        {/* <button onClick = {this.clickHandler}>Event Binder</button> */}
        {/*error --> cannot read properties of undefined (reading 'setState') --JS error not react's */}

        {/** first approach --- using the bind keword */}
        {/* <button onClick = {this.clickHandler.bind(this)}>Event Binder</button>  */}

        {/** second approach --- using arrow functions in the 'render()' method
         * we don't need of '{}' braces or 'return' keyword while using arrow functions
         * because function body is a single statement and 
         * calling the event with parenthesis "this.clickHandler()" is neccessary in this approach*/}
        {/*<button onClick={() => this.clickHandler()}>Event Binder</button> */}

        {/** third approach --- binding the event in the constructor() instead of render()  */}
        {/* <button onClick = {this.clickHandler}>Event Binder</button>  */}

        {/** fourth approach --- 'clickHandlerTwo'  as an arrow function in the class
         * Binding Event Handler using Arrow Function as a Class Property */}
        <button onClick = {this.clickHandlerTwo}>Event Binder</button> 
      </div>
    );
  }
}

export default EventBind;
