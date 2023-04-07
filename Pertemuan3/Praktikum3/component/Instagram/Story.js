import React from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";

const Story = ({ Users }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={true}>
        {/* {Users.map((v, index) => (
          <View style={styles.eachStory} key={index}>
            {v.gender == "M" ? (
              <Image source={{ uri: "https://www.freeiconspng.com/thumbs/male-icon/male-icon-15.png" }} style={styles.imgstry} />
            ) : (
              <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Female_icon.svg/920px-Female_icon.svg.png" }} style={styles.imgstry} />
            )}
            <Text>{v.name}</Text>
          </View>
        ))} */}
        <View style={{ flexDirection: "row" }}>
          <View style={styles.eachStory}>
            <View style={styles.imgstry1}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3233/3233483.png" }} style={styles.imgstry} />
            </View>
            <Text style={styles.uname}>Alfan</Text>
          </View>
          <View style={styles.eachStory}>
            <View style={styles.imgstry1}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3577/3577099.png" }} style={styles.imgstry} />
            </View>
            <Text style={styles.uname}>Kevina</Text>
          </View>
          <View style={styles.eachStory}>
            <View style={styles.imgstry1}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3233/3233483.png" }} style={styles.imgstry} />
            </View>
            <Text style={styles.uname}>Adrian</Text>
          </View>
          <View style={styles.eachStory}>
            <View style={styles.imgstry1}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3233/3233483.png" }} style={styles.imgstry} />
            </View>
            <Text style={styles.uname}>Mahesa</Text>
          </View>
          <View style={styles.eachStory}>
            <View style={styles.imgstry1}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3577/3577099.png" }} style={styles.imgstry} />
            </View>
            <Text style={styles.uname}>Frilla</Text>
          </View>
          <View style={styles.eachStory}>
            <View style={styles.imgstry1}>
              <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/3577/3577099.png" }} style={styles.imgstry} />
            </View>
            e<Text style={styles.uname}>Daphne</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    paddingBottom: 10,
    flexDirection: "row",
    borderBottomWidth: 180,
    borderColor: "#B2B2B2",
  },
  eachStory: {
    alignItems: "center",
    marginRight: 10,
  },
  imgstry1: {
    borderRadius: 100,
    borderColor: "purple",
    borderWidth: 2,
    padding: 2,
  },
  imgstry: {
    width: 68,
    height: 68,
    borderRadius: 100,
    backgroundColor: "red",
  },
  uname: {
    fontSize: 15,
    color: "black",
  },
});

export default Story;
