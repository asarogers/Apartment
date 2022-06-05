import { getByPlaceholderText } from "@testing-library/react";
import React, { Component } from "react";

//counter class extends to the component class
class Counter extends Component {
  state = {
    count: 0,
    tage: ['tag1','tag2','tag3']
  };
  style = {
    fontSize: "10",
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span className={this.GetBadgeClasses()}>{this.formatCount()}</span>
        <button className="BTN btn-secondary btn-sm">Increment</button>
        <ul>
            <li></li>
        </ul>
      </div>
    );
  }
  GetBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
