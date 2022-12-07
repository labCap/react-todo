import React from "react";
import { useState } from "react";

export const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(userInput);

    setUserInput("");
  };

  const handleKeyPress = (e) => {
    return e.key === "Enter" ? handleSubmit(e) : null;
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        placeholder={"Enter task..."}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <button type="submit">
        <div></div>
        <div></div>
      </button>
    </form>
  );
};
