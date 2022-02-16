import { createContext, useState } from "react";

export const TodoListContext = createContext(null); // state'i kullanmak istediğin componentlerde import et.

export function TodoListProvider({children}) {  // app.js üzerinde componentleri sar

    const [todos, setTodos] = useState([
        { id: 1, name: "Ted", completed: false },
        { id: 2, name: "Tugrul", completed: true },
        { id: 3, name: "Erdem", completed: false },
        { id: 5, name: "Tr", completed: true }
      ]);



    return ( // value ile komponentlere göndermek istediğimiz state'leri seçiyoruz.
        <TodoListContext.Provider value={[todos, setTodos]}> 
            {children}
        </TodoListContext.Provider>
    )
} 