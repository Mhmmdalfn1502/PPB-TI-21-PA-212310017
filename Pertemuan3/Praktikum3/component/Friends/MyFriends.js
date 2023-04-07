import { SafeAreaView, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";

export class MyFriends extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} style="light" />
        <View style={styles.header}></View>
        <View style={styles.body}></View>
      </SafeAreaView>
    );
  }
}

export default MyFriends;

const styles = StyleSheetList.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "orange",
  },
  body: {
    flex: 10,
    backgroundColor: "green",
  },
});
