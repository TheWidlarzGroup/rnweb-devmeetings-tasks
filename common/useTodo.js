import { useState } from "react";

export const useToDo = () => {
  const [todos, setTodos] = useState([]);

  const [newValue, setNewValue] = useState("");

  const rand = () => {
    const id = (Math.random() * 1000).toFixed(0);
    return `(${id}${Date.now()})`;
  };

  const addTodo = () => {
    if (newValue.length > 0) {
      setTodos((prev) => [...prev, { id: rand(), value: newValue }]);
      setNewValue("");
    }
  };

  const removeTodo = (idToRemove) => {
    setTodos((prev) => prev.filter(({ id }) => id !== idToRemove));
  };

  return [todos, addTodo, removeTodo, newValue, setNewValue];
};
