import React, { Component } from "react";
/** Event Handling - class components*/

class ClassClick extends Component {
    clickHandler(){
        console.log("Button clicked")
    }
  render() {
    return(
        <div>
            <button onClick = {this.clickHandler}>Class Click</button>
        </div>
    )
  }
}

export default ClassClick;
