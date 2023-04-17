import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, Pressable} from
"react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SignInNo6 = ({navigation}) => {
 const [email, setMail] = useState("");
 const [password, setPassword] = useState("");
 
 return (
     <View style={styles.container}>
        <View style={{alignItems:"center"}}>
        <Image source={require('../assets/IBIKLOGO.png')} style={styles.img} />
        </View>
         <View style={styles.frm_row}>
            <Text style={styles.text_label}>Email </Text>
                 <TextInput
                    placeholder="npm@student.ibik.ac.id"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={styles.text_input}
                    defaultValue={email}
                    onChangeText={(text) => setMail(text)}
                />
        </View>
                  <View style={styles.frm_row}>
                    <Text style={styles.text_label}>Password</Text>
            <View
                style={{...styles.text_input,
                flexDirection: "row",
                justifyContent: "space-between",
    }}
 >
                <TextInput
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    autoCorrect={false}
                    style={{...styles.text_input, borderWidth:0, padding:0, width:"90%"}}
                    defaultValue={password}
                    onChangeText={(text)=>setPassword(text)}
            />
                <Pressable>
                    <FontAwesome5 name={"eye"} size={25} color="purple" />
                </Pressable>
        </View>
    </View>
    <TouchableOpacity style={styles.btn_signin} onPress={()=> navigation.navigate("ScrollViewNo5")} >
        <Text style={styles.btn_signin_text}>Sign In</Text>
    </TouchableOpacity>
 </View>
 );
};
export default SignInNo6;
const styles = StyleSheet.create({
    container: {
    flex:1,
    padding: 20,
    backgroundColor: "#eeeeee"
 },
    img: {
    width:150,
    height:150,
    }, 
    frm_row: { marginBottom: 15 },
    text_label: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
 },
    text_input: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "purple",
 },
    btn_signin: {
    backgroundColor: "purple",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop:15
 },
    btn_signin_text:{ color: "white", textAlign: "center", fontSize: 16 }
});
