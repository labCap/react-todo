import React from "react";

export const ToDo = ({ todo, toggleTask, removeTask }) => {
  return (
    <div key={todo.id} className="todo__item todo-item">
      <div
        className={`complete-btn ${todo.complete && "complete"}`}
        onClick={() => toggleTask(todo.id)}
      ></div>
      <p className={`text ${todo.complete && "strike"}`}>{todo.task}</p>
      <div className="remove-btn" onClick={() => removeTask(todo.id)}>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};
