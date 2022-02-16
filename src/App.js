import React from "react";
import "./style.css";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import { TodoListProvider } from "./TodoListContext";

function App() {
  return (
    <TodoListProvider>
      <div>
        <Navbar />
        <h1>Todo App</h1>
        <TodoList />
        <TodoForm />
      </div>
    </TodoListProvider>
  );
}

export default App;
