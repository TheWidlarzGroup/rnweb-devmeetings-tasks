import React from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";

const Details = ({ navigation }) => {
  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={goBack}>
        <Text style={{ fontSize: 40 }}>Back</Text>
      </TouchableOpacity>
      <Text>details</Text>
    </SafeAreaView>
  );
};

export default Details;
