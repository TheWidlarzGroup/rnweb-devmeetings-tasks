import { useState } from "react";

export const useToDo = (savedTodos) => {
  const [todos, setTodos] = useState(savedTodos || []);
  const [modal, setModal] = useState(false);

  const [newValue, setNewValue] = useState("");

  const rand = () => {
    const id = (Math.random() * 1000).toFixed(0);
    return `${id}${Date.now()}`;
  };

  const addTodo = () => {
    if (newValue.length > 0) {
      setTodos((prev) => [...prev, { id: rand(), value: newValue }]);
      setNewValue("");
    } else {
      setModal(true);
    }
  };

  const closeModal = () => setModal(false);

  const removeTodo = (idToRemove) => {
    setTodos((prev) => prev.filter(({ id }) => id !== idToRemove));
  };

  return [todos, addTodo, removeTodo, newValue, setNewValue, modal, closeModal];
};
