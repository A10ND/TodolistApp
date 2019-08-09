import React from "react";

function TodolistItem(props) {
  return (
    <li key={props.index}>
      {props.data}
      <button className="btn btn-primary" onClick={props.onDelete}>
        Delete Todo
      </button>
    </li>
  );
}

export default TodolistItem;
