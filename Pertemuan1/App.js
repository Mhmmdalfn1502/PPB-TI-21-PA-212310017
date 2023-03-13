import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-web";
import { Image } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <StatusBar hidden={true} />

      {/* PROFILE START */}
        <View style={styles.container2}>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                source={require("./fan.png")}
                style={{width: 120,height: 120,alignItems: "center",backgroundColor: "white",borderRadius: 120 / 2,borderColor: "blue", borderWidth:1 }}/>
            </View>
            <View style={{ padding: 10, alignItems:"center" }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Muhammad Alfan</Text>
              <Text style={{ fontSize: 10, color:"#4C4C4C" }}>@mhmmdalfn_1502</Text>
              <Text style={{ fontSize: 10, color:"#4C4C4C" }}>UI Designer | Content Creator</Text>
            </View>
          </View>
          <View style={styles.container4}>
            <View style={styles.post}>
              <Text style={{ fontWeight: "bold", fontSize:18 }}>99</Text> <Text style={{fontSize:15}} >Post</Text>
            </View>
            <View style={styles.Followers}>
              <Text style={{ fontWeight: "bold", fontSize:18 }}>1.9M</Text> <Text style={{fontSize:15}} >Followers</Text>
            </View>
            <View style={styles.Following}>
              <Text style={{ fontWeight: "bold", fontSize:18 }}>522</Text> <Text style={{fontSize:15}} >Following</Text>
            </View>
          </View>
        </View>

      {/* PROFILE END */}

      {/* FEED START */}

      <View style={styles.Feed}>
          <View style={{flex: 1, alignItems: "center", height: 40, padding: 10, marginRight: 10, marginLeft:35, borderWidth:1}}>
            <Text>Massage</Text>
          </View>
          <View style={{flex: 1, alignItems: "center", height: 40, padding: 10, backgroundColor:"#303030", marginRight:35, marginLeft: 10}}>
            <Text style={{color:"white"}}>Follow</Text>
          </View>
        </View>

       <View style={{ flexDirection:"row", marginHorizontal:10, marginTop:10,  }}>
        <View style={{alignItems:"center", flex:1}}>
        <image/>
        <Text style={{ borderBottomWidth:1, borderBottomColor:"black" }}>POST</Text>
        </View >
        <View style={{alignItems:"center", flex:1}}>
        <image/>
        <Text>SAVE</Text>
        </View>
        <View style={{alignItems:"center", flex:1}}>
        <image/>
        <Text>TAG</Text>
        </View>
       </View>

        {/* START POSTAN */}

        <View style={{ marginTop:10, marginHorizontal:5, alignItems:"center" }}>
        <View style={{ flexDirection:"row" }}>
          <Image source={require("./1.png")} style={styles.postan}/>
          <Image source={require("./2.png")} style={styles.postan}/>
          <Image source={require("./3.png")} style={styles.postan}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <Image source={require("./4.png")} style={styles.postan}/>
          <Image source={require("./5.png")} style={styles.postan}/>
          <Image source={require("./6.png")} style={styles.postan}/>
        </View>
        <View style={{ flexDirection:"row" }}>
          <Image source={require("./7.png")} style={styles.postan}/>
          <Image source={require("./8.png")} style={styles.postan}/>
          <Image source={require("./9.png")} style={styles.postan}/>
        </View>
        <View style={{flexDirection:"row"}}>
          <Image source={require("./4.png")} style={styles.postan}/>
          <Image source={require("./1.png")} style={styles.postan}/>
          <Image source={require("./7.png")} style={styles.postan}/>
        </View>
        </View>

        {/* END POSTAN */}

          <View>
          </View>

      {/* FEED END */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    width: "auto",
    // shadowColor: "black",
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
    // borderBottomLeftRadius: 50 / 2,
    // borderBottomRightRadius: 50 / 2,
  },

  container4: {
    flexDirection: "row",
    marginTop: 10,
  },
  post: {
    alignItems: "center",
    marginRight: 50,
  },
  Followers: {
    fontSize: 15,
    alignItems: "center",
  },
  Following: {
    fontSize: 15,
    alignItems: "center",
    marginLeft: 50,
  },
  Feed: {
    flexDirection: "row",
    // marginTop: 20
  },
  postan: {
    width: 115,
    height:115,
    marginHorizontal:2,
    marginVertical:2,
    borderRadius:8
  }
});
