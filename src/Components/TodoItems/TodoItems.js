import React from "react";
import "./todo-items.css";

class TodoItems extends React.Component {
  render() {
    return (
      <div>
        <h1>this is to do</h1>
        <ol>{this.props.handleSubmit}</ol>
      </div>
    );
  }
}

export default TodoItems;
