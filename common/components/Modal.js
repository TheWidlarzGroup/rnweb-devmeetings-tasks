import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

const { Value } = Animated;

const Modal = ({ closeModal, children }) => {
  const [animation] = useState(new Value(0));

  const fadeIn = () => {
    Animated.timing(animation, {
      toValue: 0.5,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animation, {
      toValue: 0.2,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      closeModal();
    });
  };

  const popup = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 0],
  });

  React.useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: "black",
          zIndex: 20,
          justifyContent: "center",
          alignItems: "center",
          opacity: animation,
        },
      ]}
    >
      <Animated.View
        style={StyleSheet.flatten([
          styles.modal,
          { transform: [{ translateY: popup }] },
        ])}
      >
        <Text>{children || "Empty modal"}</Text>
        <TouchableOpacity style={styles.closeBtn} onPress={fadeOut}>
          <Text>OK</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    width: "80%",
    // minHeight: "40%",
    justifyContent: "space-between",
  },
  closeBtn: {
    marginTop: 20,
  },
});

export default Modal;
