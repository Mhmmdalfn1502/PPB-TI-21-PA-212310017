import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import Header from "./Header";
import Story from "./Story";
import Feed from "./Feed";
import { Users } from "../../../const-data/Users";

const Main = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} style="light" />
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.story}>
        <Story />
      </View>
      <View style={styles.feed}>
        <Feed />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "white",
  },
  story: {
    flex: 1.5,
    backgroundColor: "white",
  },
  feed: {
    flex: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "EAEAEA",
  },
});

export default Main;
