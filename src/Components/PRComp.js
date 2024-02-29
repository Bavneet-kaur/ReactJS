import React, { Component } from 'react'
import PureComp from './PureComp'
import ReguComp from './ReguComp'
// this is a parent component
class PRComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         animal: "dog"
      }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                animal: "dog"
            })
        },5000)
    }
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <PureComp animal={this.state.animal}></PureComp>
        <ReguComp animal={this.state.animal}></ReguComp>
      </div>
    )
  }
}

export default PRComp
