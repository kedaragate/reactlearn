import React from "react";

import "./todo-item.css";

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <form className="todo-item">
          <input
            placeholder="Todo Name"
            value={this.props.name}
            onChange={this.props.handleChangeToDoName}
          ></input>
          <textarea
            placeholder="Todo Description"
            value={this.props.description}
            onChange={this.props.handleChangeToDoDescription}
          ></textarea>
          <button
            type="submit"
            className="primary-btn"
            onClick={this.props.handleSubmit}
          >
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default TodoItem;
