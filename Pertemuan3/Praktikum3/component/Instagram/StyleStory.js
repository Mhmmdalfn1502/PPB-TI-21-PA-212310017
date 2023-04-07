import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Story from "./Story";

const StyleStory = ({ item }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.story}>
          <View style={styles.profile}>
            <Image source={uri("https://cdn-icons-png.flaticon.com/512/3135/3135715.png")} style={styles.photoprofile} />
          </View>
          <Text style={{ color: "white" }}>{item.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  story: {
    flexDirection: "column",
  },
  profile: {
    width: 70,
    height: 70,
    backgroundColor: "red",
    borderRadius: 100,
  },
  photoprofile: {
    width: 70,
    height: 70,
  },
});

export default StyleStory;
