import React from "react";
import List from "../List";
import { SafeAreaView, StyleSheet } from "react-native";

const Main = ({ navigation }) => {
  const goToDetails = (data) => {
    console.log(data);
    navigation.navigate("Details");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <List goToDetails={goToDetails} />
    </SafeAreaView>
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
