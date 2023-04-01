import React from "react";
import { Image } from "react-native";
import { StatusBar } from "react-native";
import { Text, View, StyleSheet } from "react-native";

const No3 = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image source={require("../assets/Logo IBIK Baru 2022.png")} style={styles.Image} />
      <View style={styles.container2}>
        <Text style={{ color: "white" }}> Loading... </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "purple",
    justifyContent: "center",
  },
  container2: {
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  Image: {
    width: 90,
    height: 90,
  },
});

export default No3;
