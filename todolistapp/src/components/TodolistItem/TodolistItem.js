import React from "react";
import PropTypes from "prop-types";

function TodolistItem(props) {
  return (
    <li key={props.index}>
      {props.data}
      <button
        className="btn btn-primary"
        onClick={() => props.onDelete(props.index)}
      >
        Delete Todo
      </button>
    </li>
  );
}

TodolistItem.propTypes = {
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired
};

export default TodolistItem;
