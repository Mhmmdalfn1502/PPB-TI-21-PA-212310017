import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Main from "./Praktikum3/component/Instagram/Main";
import HomePage from "./Praktikum3/component/HomePage";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
