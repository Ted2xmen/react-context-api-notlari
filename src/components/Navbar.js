import { useContext } from "react";
import { TodoListContext } from "../TodoListContext";

function Navbar() {
  const [todos, setTodos] = useContext(TodoListContext);

  return (
    <div>
      <h1>NAVBAR toplam todo: {todos.length} </h1>
      <hr />
    </div>
  );
}

export default Navbar;
