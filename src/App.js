import React from "react";
import { useState } from "react";
import { ToDo } from "./components/ToDo";
import { ToDoForm } from "./components/ToDoForm";

function App() {
  const [toDos, setToDos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false,
      };

      setToDos([...toDos, newItem]);
    }
  };

  const removeTask = (id) => {
    setToDos([...toDos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setToDos([
      ...toDos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="todo">
      <div className="container">
        <div className="todo__inner">
          <ToDoForm addTask={addTask} />
          <div className="todo__list">
            {toDos?.map((todo) => (
              <ToDo
                todo={todo}
                key={todo.id}
                toggleTask={handleToggle}
                removeTask={removeTask}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
