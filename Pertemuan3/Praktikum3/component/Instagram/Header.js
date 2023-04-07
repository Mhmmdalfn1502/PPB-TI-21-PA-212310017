import React from "react";
import { View, StyleSheet, Image, SafeAreaView } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../assets/Instagram_logo.svg.png")} style={styles.LogoInstagram} />
      </View>
      <View style={styles.massage}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png" }} style={styles.icon} />
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1617/1617469.png" }} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  massage: {
    flexDirection: "row",
  },
  LogoInstagram: {
    width: 150,
    height: 50,
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
});

export default Header;
