import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import { title, subtitle } from "common/app.json";
import { useToDo } from "common/useTodo";
import { commonStyles, theme } from "common/styles";
import Modal from "./components/Modal";

const List = ({ goToDetails, saveTodos, todoHandler }) => {
  const [
    todos,
    addTodo,
    removeTodo,
    newValue,
    setNewValue,
    modal,
    closeModal,
  ] = todoHandler;

  return (
    <View style={styles.mainContainer}>
      <Text>{title}</Text>
      <Text>{subtitle}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Add new todo"
          placeholderTextColor={theme.colors.green}
          style={styles.input}
          value={newValue}
          onSubmitEditing={addTodo}
          onChangeText={(value) => setNewValue(value)}
        />
      </View>
      <TouchableOpacity onPress={addTodo}>
        <Text>Add todo</Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={styles.todosWrapper}
        data={todos}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <Text>{item.value}</Text>
            <TouchableOpacity
              onPress={() => {
                goToDetails(item);
                // saveTodos(todos);
              }}
            >
              <Text>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTodo(item.id)}>
              <Text>Delete todo</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    marginTop: 80,
  },
  inputWrapper: {
    ...commonStyles.inputWrapper,
  },
  input: {
    ...commonStyles.input,
  },
  todosWrapper: {
    ...commonStyles.todosWrapper,
  },
  todoContainer: {
    ...commonStyles.todoContainer,
  },
});

export default List;
