import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Main from "./Praktikum3/component/Instagram/Main";
import HomePage from "./Praktikum3/component/HomePage";
import MyFriends from "./Praktikum3/component/Friends/MyFriends";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MyFriends />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
