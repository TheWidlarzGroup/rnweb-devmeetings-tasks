import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "./styles";

const NavigationBar = ({ activeRoute, navigation }) => {
  return (
    <View style={styles.navbarContainer}>
      {["Main", "Details"].map((link) => (
        <TouchableOpacity onPress={() => navigation.navigate(link)} key={link}>
          <Text
            style={StyleSheet.flatten([
              styles.btn,
              activeRoute === link && styles.active,
            ])}
          >
            {link}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: "absolute",
    bottom: theme.space * 4,
    padding: theme.space * 2,
    backgroundColor: theme.colors.light,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    zIndex: 2,
  },
  btn: {
    backgroundColor: theme.colors.grey,
    paddingHorizontal: theme.space * 2,
    padding: theme.space,
  },
  active: {
    backgroundColor: theme.colors.green,
  },
});

export default NavigationBar;
