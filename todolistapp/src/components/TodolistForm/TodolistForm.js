import React from 'react';

function TodolistForm(props) {
    return (
        <div className="form-group">
            <label htmlFor="todoToAddText">Add New Todo</label>
            <form onSubmit={props.onSubmit}>
                <input type="text"
                    name="todoToAddText"
                    className="form-control"
                    placeholder="Add Todo" value={props.value} onChange={props.onChange}
                />
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </form>
        </div>
    );
}

export default TodolistForm;