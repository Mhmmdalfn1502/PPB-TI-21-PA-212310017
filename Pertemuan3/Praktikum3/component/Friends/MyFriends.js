import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import ExpScrollView from "./ExpScrollView";

const MyFriends = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} style="light" />
      <View style={styles.header}>
        <SearchBar />
      </View>
      <View style={styles.body}>{/* <ExpScrollView Users={Users} /> */}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flex: 10,
    backgroundColor: "yellow",
  },
});

export default MyFriends;
