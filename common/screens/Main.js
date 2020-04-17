import React from "react";
import List from "../List";
import { SafeAreaView, StyleSheet } from "react-native";
import NavigationBar from "../NavigationBar";
import { useToDo } from "common/useTodo";
import Modal from "../components/Modal";

const Main = ({ navigation }) => {
  const savedTodos = navigation.state.params?.todos || [];

  const todoHandler = useToDo(savedTodos);

  const modalVisible = todoHandler[5];
  const closeModal = todoHandler[6];

  const saveTodos = (todos) => navigation.setParams({ todos });

  const goToDetails = () => {
    // saveTodos(todoHandler[0]);
    navigation.navigate("Details");
  };

  const activeRoute = navigation.state.routeName;

  return (
    // <SafeAreaView style={styles.mainContainer}>
    <>
      <List
        todoHandler={todoHandler}
        saveTodos={saveTodos}
        savedTodos={savedTodos}
        goToDetails={goToDetails}
      />
      <NavigationBar navigation={navigation} activeRoute={activeRoute} />
      {/* </SafeAreaView> */}
      {modalVisible && (
        <Modal
          children="Nie mozna dodac pustego todo"
          closeModal={closeModal}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 20,
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
});

export default Main;
