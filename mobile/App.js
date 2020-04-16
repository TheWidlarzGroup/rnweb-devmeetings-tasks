import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {title, subtitle} from 'common/app.json';
import {useToDo} from 'common/useTodo';
import {commonStyles, theme} from 'common/styles';

const App = () => {
  const [todos, addTodo, removeTodo, newValue, setNewValue] = useToDo();

  return (
    <SafeAreaView style={styles.mainContainer}>
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
        keyExtractor={(_, index) => index}
        renderItem={({item}) => (
          <View style={styles.todoContainer}>
            <Text>{item.value}</Text>
            <TouchableOpacity onPress={() => removeTodo(item.id)}>
              <Text>Delete todo</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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

export default App;
