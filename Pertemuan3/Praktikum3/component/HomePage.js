import React from "react";
import { FlatList, Image, ScrollView } from "react-native";
import { StatusBar } from "react-native";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const HomePage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 0.5, backgroundColor: "white", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10, borderBottomColor: "white" }}>
        <Image source={require("../component/assets/Instagram_logo.svg.png")} style={{ width: 100, height: 40, marginRight: 5 }} />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png" }} style={{ width: 25, height: 25, marginHorizontal: 20 }} />
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/1617/1617469.png" }} style={{ width: 25, height: 25 }} />
          <View style={{ borderRadius: 100, width: 18, height: 18, backgroundColor: "red", alignItems: "center", justifyContent: "center", marginBottom: 5 }}>
            <Text style={{ fontSize: 10, color: "white" }}>5</Text>
          </View>
        </View>
      </View>

      {/* AWAL STORY */}
      <View style={{ flex: 10 }}>
        <View style={{ flex: 0.8 }}>
          <ScrollView horizontal={true}>
            <View style={{ backgroundColor: "#EEEEEE", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 10 }}>
              <View style={styles.sg}>
                <View style={styles.story}>
                  <Image source={{ uri: "https://static1.purebreak.com.br/articles/2/14/48/2/@/74079-seria-naruto-o-ninja-mais-poderoso-de-opengraph_1200-1.jpg" }} style={styles.imgstory} />
                </View>
                <Text style={styles.sgnick}>Uzumaki Naruto</Text>
              </View>
              <View style={styles.sg}>
                <View style={styles.story}>
                  <Image source={{ uri: "https://ovicio.com.br/wp-content/uploads/2023/01/20230108-ovicio-sasuke-naruto-730x365.jpg" }} style={styles.imgstory} />
                </View>
                <Text style={styles.sgnick}>Sasuke Uchiha</Text>
              </View>
              <View style={styles.sg}>
                <View style={styles.story}>
                  <Image source={{ uri: "https://static.wikia.nocookie.net/7f99df8d-0ac9-4e20-be60-d8ce6a2d5d70/scale-to-width/755" }} style={styles.imgstory} />
                </View>
                <Text style={styles.sgnick}>Sakura Haruno</Text>
              </View>
              <View style={styles.sg}>
                <View style={styles.story}>
                  <Image source={{ uri: "https://t-2.tstatic.net/style/foto/bank/images/kakashi-hatake-dari-anime-naruto-2.jpg" }} style={styles.imgstory} />
                </View>
                <Text style={styles.sgnick}>Kakashi Hatake</Text>
              </View>
              <View style={styles.sg}>
                <View style={styles.story}>
                  <Image source={{ uri: "https://dafunda.com/wp-content/uploads/2021/04/Mengenal-Uchiha-Madara-Pemimpin-Legendaris-Klan-Uchiha.jpg" }} style={styles.imgstory} />
                </View>
                <Text style={styles.sgnick}>Madara Uchiha</Text>
              </View>
              <View style={styles.sg}>
                <View style={styles.story}>
                  <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiBTfRDpnac9oJ3nwTUAYANSlitmA2sXemGNXy8CI3xyCP-9i9k_M6J3mXQqluhIdXg6w&usqp=CAU" }} style={styles.imgstory} />
                </View>
                <Text style={styles.sgnick}>Minato Namikaze</Text>
              </View>
              <View style={styles.sg}>
                <View style={styles.story}>
                  <Image source={{ uri: "https://i.pinimg.com/originals/37/20/b2/3720b20452397ebee91543c54020068e.webp" }} style={styles.imgstory} />
                </View>
                <Text style={styles.sgnick}>Hinata Hyuga</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* AKHIR STORY */}

        {/* AWAL FEED */}

        <ScrollView style={{ flex: 8, backgroundColor: "#FFFFFF" }}>
          <View style={{ alignItems: "center" }}>
            <View style={{ ...styles.Feedpost, borderBottomWidth: 1 }}>
              <View style={styles.Navprofile}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={styles.profile}
                    source={{
                      uri: "https://static1.purebreak.com.br/articles/2/14/48/2/@/74079-seria-naruto-o-ninja-mais-poderoso-de-opengraph_1200-1.jpg",
                    }}
                  />
                  <Text style={styles.nickname}>Uzumaki Naruto</Text>
                </View>
                <Text style={{ color: "black", fontWeight: "bold", marginRight: 10 }}>...</Text>
              </View>
              <Image source={{ uri: "https://www.themarysue.com/wp-content/uploads/2022/06/naruto.jpg?fit=1200%2C625" }} style={styles.ImgPost} />
              {/* <View style={styles.FooterPost}> */}
              <View style={{ flexDirection: "column", marginTop: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome5 name={"heart"} size={25} color="black" style={styles.heart} />
                    <FontAwesome5 name={"comment"} size={25} color="black" style={{ marginLeft: 20 }} />
                    <FontAwesome5 name={"paper-plane"} size={25} color="black" style={{ marginLeft: 20 }} />
                  </View>
                  <View>
                    <FontAwesome5 name={"bookmark"} size={25} color="black" />
                  </View>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>Uzumaki Naruto</Text>
                    <Text style={{ marginLeft: 10 }}>だってばよ..</Text>
                  </View>
                  <Text style={{ marginTop: 10 }}>Selengkapnya..</Text>
                </View>
              </View>
              {/* </View> */}
            </View>

            <View style={{ ...styles.Feedpost, marginTop: 150, borderTopWidth: 1 }}>
              <View style={{ ...styles.Navprofile }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={styles.profile}
                    source={{
                      uri: "https://ovicio.com.br/wp-content/uploads/2023/01/20230108-ovicio-sasuke-naruto-730x365.jpg",
                    }}
                  />
                  <Text style={styles.nickname}>Sasuke Uchiha</Text>
                </View>
                <Text style={{ color: "black", fontWeight: "bold", marginRight: 10 }}>...</Text>
              </View>
              <Image source={{ uri: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sasuke-Uchiha.Naruto.webp" }} style={styles.ImgPost} />
              <View style={{ flexDirection: "column", marginTop: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome5 name={"heart"} size={25} color="black" />
                    <FontAwesome5 name={"comment"} size={25} color="black" style={{ marginLeft: 20 }} />
                    <FontAwesome5 name={"paper-plane"} size={25} color="black" style={{ marginLeft: 20 }} />
                  </View>
                  <View>
                    <FontAwesome5 name={"bookmark"} size={25} color="black" />
                  </View>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>Sasuke Uchiha</Text>
                    <Text style={{ marginLeft: 10 }}>"私は兄との絆、憎しみの"</Text>
                  </View>
                  <Text style={{ marginTop: 10 }}>Selengkapnya..</Text>
                </View>
              </View>
            </View>

            <View style={{ ...styles.Feedpost, marginTop: 150, borderTopWidth: 1 }}>
              <View style={{ ...styles.Navprofile }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={styles.profile}
                    source={{
                      uri: "https://static.wikia.nocookie.net/7f99df8d-0ac9-4e20-be60-d8ce6a2d5d70/scale-to-width/755",
                    }}
                  />
                  <Text style={styles.nickname}>Sakura Haruno</Text>
                </View>
                <Text style={{ color: "black", fontWeight: "bold", marginRight: 10 }}>...</Text>
              </View>
              <Image source={{ uri: "https://www.greenscene.co.id/wp-content/uploads/2020/05/Sakura.jpg" }} style={styles.ImgPost} />
              <View style={{ flexDirection: "column", marginTop: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome5 name={"heart"} size={25} color="black" />
                    <FontAwesome5 name={"comment"} size={25} color="black" style={{ marginLeft: 20 }} />
                    <FontAwesome5 name={"paper-plane"} size={25} color="black" style={{ marginLeft: 20 }} />
                  </View>
                  <View>
                    <FontAwesome5 name={"bookmark"} size={25} color="black" />
                  </View>
                </View>
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>Sakura Haruno</Text>
                    <Text style={{ marginLeft: 10 }}>絆だけを共有しています！</Text>
                  </View>
                  <Text style={{ marginTop: 10 }}>Selengkapnya..</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* AKHIR FEED */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // AWAL STORY

  sg: {
    alignItems: "center",
  },
  imgstory: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "purple",
  },
  sgnick: {
    fontSize: 10,
    color: "black",
    marginTop: 3,
  },
  story: {
    flexDirection: "column",
    borderRadius: 100,
    width: 70,
    height: 70,
    backgroundColor: "red",
    marginRight: 5,
    marginLeft: 5,
  },

  // AKHIR STORY

  // AWAL FEED

  Feedpost: {
    width: 350,
    height: 300,
    borderTopColor: "black",
    borderBottomColor: "black",
    borderWidth: 1,
  },
  ImgPost: {
    width: 380,
    marginLeft: -15,
    height: 270,
    borderRadius: 5,
  },
  Navprofile: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    width: 380,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginLeft: -10,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderColor: "purple",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nickname: {
    fontWeight: "bold",
    marginLeft: 10,
    color: "black",
  },
  // FooterPost: {
  //   flexDirection: "row",
  //   width: 350,
  //   height: 70,
  //   paddingHorizontal: 10,
  //   justifyContent: "space-between",
  //   marginTop: 5,
  // },
  // FeedpostSasuke: {
  //   // marginTop: 20,
  //   width: 350,
  //   height: 300,
  //   backgroundColor: "white",
  // },
  // NavprofileSasuke: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   height: 60,
  //   width: 350,
  //   paddingHorizontal: 10,
  //   paddingVertical: 10,
  //   alignItems: "center",
  //   backgroundColor: "#FFFFFF",
  // },

  // AKHIR FEED
});

export default HomePage;
