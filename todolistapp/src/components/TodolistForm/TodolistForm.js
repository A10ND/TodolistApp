import React from "react";
import PropTypes from "prop-types";

function TodolistForm(props) {
  return (
    <div className="form-group">
      <label htmlFor="todoToAddText">Add New Todo</label>
      <form onSubmit={props.onSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="todoToAddText"
            className="form-control"
            placeholder="Add Todo"
            value={props.value}
            onChange={props.onChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button>
      </form>
    </div>
  );
}

TodolistForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default TodolistForm;
