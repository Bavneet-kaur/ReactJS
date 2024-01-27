import React, { Component } from 'react'
import ParentChildComp from './ParentChildComp';

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Papa"
      }

      this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        alert(` Hello ${this.state.parentName} from ${childName}`)
    };
    
  render() {
    return (
      <div>
        <ParentChildComp greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComp
