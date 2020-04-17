import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import NavigationBar from "../NavigationBar";

const { Value } = Animated;

const Details = ({ navigation }) => {
  const goBack = () => navigation.goBack();

  const [animationV] = useState(new Value(0));

  useEffect(() => {
    Animated.spring(animationV, {
      toValue: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <TouchableOpacity style={{ marginTop: 40 }} onPress={goBack}>
        <Text style={{ fontSize: 40 }}>Back</Text>
      </TouchableOpacity>
      <Animated.View style={{ transform: [{ translateY: animationV }] }}>
        <Text style={{ alignSelf: "center", fontSize: 80 }}>details</Text>
      </Animated.View>

      <NavigationBar
        activeRoute={navigation.state.routeName}
        navigation={navigation}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Details;
