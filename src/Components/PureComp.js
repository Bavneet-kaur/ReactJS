// rpce is a shorthand for creating a pure component -- ES7 extension
import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    return (
      <>
        <h1>Pure Component - {this.props.animal}</h1>
        <p style={{ fontSize: "24px" }}>
          Generally, In ReactJS, we use 'shouldComponentUpdate()' Lifecycle
          method to customize the default behavior and implement it when the
          React component should re-render or update itself.
          <br />
          ReactJS has provided us with a Pure Component. If we extend a class
          with Pure Component, there is no need for shouldComponentUpdate()
          Lifecycle Method. ReactJS Pure Component Class compares the current
          state and props with new props and states to decide whether the React
          component should re-render itself or Not.
          <br />
          In simple words, <b style={{color:"dodgerblue"}}>If the previous value of the state or props and the
          new value of the state or props are the same, the component will not
          re-render itself. Pure Components restricts the re-rendering when
          there is no use for re-rendering of the component. Pure Components are
          Class Components that extend React.PureComponent.</b>
        </p>
      </>
    );
  }
}

export default PureComp;
