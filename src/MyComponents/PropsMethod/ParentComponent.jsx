// Here Parent send props as a method Props to the children Component

import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Great to See You!",
    };

    //for better event handling using apprach 3 binding constructor
    this.greetMessage = this.greetMessage.bind(this);
  }

  greetMessage(childName) {
    //2) getting a props from the childComponent as a parameter
    //this method can be pass to childComponent
    alert(`Hello ${this.state.message}, ${childName}`);
  }
  render() {
    return (
      <div>
        <ChildComponent clickHandler={this.greetMessage} />
      </div>
    );
  }
}

export default ParentComponent;
