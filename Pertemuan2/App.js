import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Motorcycle from "./src/components/Motorcycle";
import Car from "./src/components/Car";
import Bicycle from "./src/components/Bicycle";
import Forms from "./src/components/Forms";

export default function App() {
  // return (
  //   <SafeAreaView>
  //     <Car />
  //   </SafeAreaView>
  // );

  // return <Motorcycle />;
  // return <Car />;
  return <Forms />;
  // return <Bicycle />;
}
