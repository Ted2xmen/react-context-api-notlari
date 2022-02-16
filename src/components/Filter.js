import { useContext } from "react";
import { TodoListContext } from "../TodoListContext";

function Filter() {
  const [todos, setTodos] = useContext(TodoListContext); // context'ten gelen state'imiz

  return (
    <div>
      <a href="#">ALL {todos.length}</a> <br />
      <a href="#">
        Completed {todos.filter((todo) => todo.completed).length}
      </a>
      <br />
      <a href="#">
        Uncompleted {todos.filter((todo) => !todo.completed).length}
      </a>
    </div>
  );
}

export default Filter;
