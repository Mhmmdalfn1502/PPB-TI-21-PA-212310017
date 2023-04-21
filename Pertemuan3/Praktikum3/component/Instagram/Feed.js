import React from "react";
import { Text, Image, View, StyleSheet, ScrollView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Users } from "../assets/Users";

const Feed = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true} />

      <View style={styles.headerfeed}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.Ava}>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3233/3233483.png" }} style={styles.Ava2} />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 15, marginLeft: 10 }}>Alfan</Text>
        </View>
      </View>
      <Image source={{ uri: "https://cloudfront.slrlounge.com/wp-content/uploads/2020/06/best-landscape-photographers-to-follow-in-2020-1200x675.jpg" }} style={styles.postimg} />
      <View style={{ marginHorizontal: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 10 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <FontAwesome5 name={"heart"} size={25} color="black" />
            <FontAwesome5 name={"comment"} size={25} color="black" style={{ marginLeft: 20 }} />
            <FontAwesome5 name={"paper-plane"} size={25} color="black" style={{ marginLeft: 20 }} />
          </View>
          <View>
            <FontAwesome5 name={"bookmark"} size={25} color="black" />
          </View>
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>349.203 Suka</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Alfan</Text>
            <Text style={{ marginLeft: 10 }}>MasyaAllah...</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  headerfeed: {
    flexDirection: "row",
    paddingVertical: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Ava: {
    borderRadius: 100,
    borderColor: "purple",
    borderWidth: 2,
    padding: 2,
  },
  Ava2: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: "red",
  },
  postimg: {
    width: 500,
    height: 330,
  },
});

export default Feed;
