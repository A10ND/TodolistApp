import React from "react";
import TodolistItem from "../TodolistItem";

function TodolistView(props) {
  return (
    <ul>
      {props.todos.map((todoData, index) => {
        return (
          <TodolistItem
            index={index}
            onDelete={props.onDelete}
            data={todoData}
          />
        );
      })}
    </ul>
  );
}

export default TodolistView;
