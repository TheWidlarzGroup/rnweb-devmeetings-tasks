import React from "react";
import "./App.css";
import { title, subtitle } from "common/app.json";
import { useToDo } from "common/useTodo";
import { commonStyles, theme } from "common/styles";

function App() {
  const [todos, addTodo, removeTodo, newValue, setNewValue] = useToDo();

  return (
    <div style={styles.container}>
      <p>{title}</p>
      <p>{subtitle}</p>
      <div style={styles.inputWrapper}>
        <input
          style={styles.input}
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button onClick={addTodo}>Add todo</button>
      </div>
      {todos.map(({ value, id }) => (
        <div key={id} style={styles.todoContainer}>
          <p>{value}</p>
          <button onClick={() => removeTodo(id)}>Remove todo</button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 900,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  inputWrapper: {
    ...commonStyles.inputWrapper,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    ...commonStyles.input,
    width: "100%",
  },
  todoContainer: {
    display: "flex",
    ...commonStyles.todoContainer,
  },
};

export default App;
