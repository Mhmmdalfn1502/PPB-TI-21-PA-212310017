import React from "react";
import { Image } from "react-native";
import { StatusBar } from "react-native";
import { Text, View, StyleSheet } from "react-native";

const No2 = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <View style={styles.paragraph}>
          <View style={{ flex: 1 }}>
            <Text style={styles.judul}> History of Bicycle </Text>
          </View>
          <Text style={{ textAlign: "justify" }}>
            An bicycle, also called a<Text style={{ color: "red" }}>pedal cycle</Text>,<Text style={{ fontWeight: "bold" }}>bike</Text>,<Text style={{ fontStyle: "italic" }}>push-bike or cycle</Text>, is a human-powered on m o t o r - p o w
            e r e d assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.
          </Text>
        </View>
        <View style={styles.container2}>
          <Image source={require("../assets/417777.png")} style={styles.image} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    width: 150,
    borderWidth: 1,
    paddingBottom: 20,
  },
  container2: {
    backgroundColor: "aqua",
    padding: 10,
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
  },
  judul: {
    fontWeight: "bold",
    backgroundColor: "brown",
    textAlign: "center",
    textDecorationLine: "underline",
    padding: 10,
    marginBottom: 10,
    color: "white",
  },
  image: {
    width: 70,
    height: 70,
    borderWidth: 1,
    backgroundColor: "white",
  },
});

export default No2;
