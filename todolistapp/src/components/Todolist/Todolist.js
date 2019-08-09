import React, { useState } from "react";
import TodolistForm from "../TodolistForm";
import TodolistView from "../TodolistView";

function Todolist() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTodos(todos => todos.concat(newTodo));
    setNewTodo("");
  }

  function handleDelete(todoIndex) {
    let newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  return (
    <article>
      <section>
        <TodolistForm
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={newTodo}
        />

        <TodolistView todos={todos} onDelete={handleDelete} />
      </section>
    </article>
  );
}

export default Todolist;
