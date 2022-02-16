import React from "react";
import { useContext } from "react";
import Filter from "./Filter";
import { TodoListContext } from "../TodoListContext";

function TodoList() {
  const [todos, setTodos] = useContext(TodoListContext);

  return (
    <div>
      <Filter />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {todo.name} --- {todo.id} </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
