import { TextInput, View, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SearchBar = () => {
  return (
    <View style={styles.search_box}>
      <FontAwesome5 name={"search"} size={25} color="grey" />
      <TextInput style={styles.search_input} placeholder="Search" />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search_box: {
    width: "97%",
    padding: 10,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
  },
  search_input: {
    fontSize: 18,
    width: "90%",
    color: "black",
    marginLeft: 10,
  },
});
