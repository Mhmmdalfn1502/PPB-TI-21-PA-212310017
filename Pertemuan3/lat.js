import { SafeAreaView, StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";

export class Lat extends Component {
  render() {
    return (
      <SafeAreaView style={style.container}>
        <StatusBar hidden={false} style="Light" />
        <View style={style.header}></View>
        <View style={style.body}></View>
      </SafeAreaView>
    );
  }
}

export default Lat;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  header: { flex: 1, justifyContent: "center", paddingHorizontal: 10, backgroundColor: "orange" },
  body: { flex: 10, backgroundColor: "green" },
});
