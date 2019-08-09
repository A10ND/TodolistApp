import React from "react";
import TodolistItem from "../TodolistItem";
import PropTypes from "prop-types";

function TodolistView(props) {
  return (
    <ul>
      {props.todos.map((todoData, index) => {
        return (
          <TodolistItem
            key={index}
            index={index}
            onDelete={props.onDelete}
            data={todoData}
          />
        );
      })}
    </ul>
  );
}

TodolistView.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default TodolistView;
