import { useState, useContext } from "react";
import { TodoListContext } from "../TodoListContext";

function TodoForm() {
  const dateID = Date.now();
  const [value, setValue] = useState("");
  const [_, setTodos] = useContext(TodoListContext);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos((prevs) => [
            ...prevs,
            { id: dateID, name: value, completed: false },
          ]);
          setValue(""); // not working
        }}
      >
        <input
          type="text"
          placeholder="yeni item ekle "
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default TodoForm;
