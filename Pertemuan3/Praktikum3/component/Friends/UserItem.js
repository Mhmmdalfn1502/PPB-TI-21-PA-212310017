import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import Users from "../assets/Users";

const UserItem = ({ item }) => {
  return (
    <View style={styles.search_container}>
      <View style={styles.search_account}>
        <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3233/3233483.png" }} style={styles.story_ava} />
        <View>
          <Text style={{ ...styles.story_name, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={styles.story_name}>{Users.fullname}</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity activeOpacity={0.6} style={styles.btn_follow}>
          <Text style={styles.story_name}>Follow</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  search_account: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  story_ava: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#f0f8f1",
    marginRight: 15,
  },
  story_name: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
  },
  btn_follow: {
    backgroundColor: "purple",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default UserItem;
