import React, { Component } from "react";

import TaskOne from "./TaskOne";
import TaskTwo from "./TaskTwo";

class Main extends Component {
  render() {
    return (
      <div>
        <TaskOne />
        <TaskTwo />
      </div>
    );
  }
}

export default Main;
