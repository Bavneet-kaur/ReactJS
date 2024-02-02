import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }
  changeUsername = (events) => {
    this.setState({
      username: events.target.value,
    });
  };
  changeComments = (events) => {
    this.setState({
      comments: events.target.value,
    });
  };
  changeTopic = (events) => {
    this.setState({
      topic: events.target.value,
    });

    handleSubmit = (events) => {
      alert(
        `${this.state.username} ${this.state.comments} ${this.state.topic}`
      );
      events.preventDefault(); /* after submiiting submit data will not be lost */
    };
    render()
    {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.changeUsername}
            />
            {/* to prevent default behavior and let React control the form. by adding 
            two things: first the state component and seconding adding "onChange" event */}
          </div>
          <br />
          <div>
            <label>Comments: </label>
            <textarea
              value={this.state.comments}
              onChange={this.changeComments}
            />
          </div>
          <br />
          <div>
            <label>Topic: </label>
            <select value={this.state.topic} onChange={this.changeTopic}>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      );
    }
  };
}
export default Forms;
