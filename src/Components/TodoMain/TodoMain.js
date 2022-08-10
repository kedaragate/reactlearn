import React from "react";
import TodoItems from "../TodoItems/TodoItems";
import TodoItem from "../TodoItem/TodoItem";
import "./todo-main.css";

// import { useContext } from "react";
// import MyContext from "../Context/Context";

class TodoMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeToDoName = this.handleChangeToDoName.bind(this);
    this.handleChangeToDoDescription =
      this.handleChangeToDoDescription.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const toDoArry = [this.state];
    toDoArry.map((todoItem) => {
      return (
        <li>
          <h4>{todoItem.name}</h4>
          <p>{todoItem.description}</p>
        </li>
      );
    });
  }
  handleChangeToDoName(e) {
    this.setState({ name: e.target.value });
  }
  handleChangeToDoDescription(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    // const mainState = useContext(MyContext);

    return (
      <div className="main">
        <div className="sub-component">
          <TodoItems handleSubmit={this.handleSubmit} />
        </div>
        <div className="sub-component">
          <TodoItem
            name={this.state.name}
            description={this.state.description}
            handleChangeToDoName={this.handleChangeToDoName}
            handleChangeToDoDescription={this.handleChangeToDoDescription}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default TodoMain;
