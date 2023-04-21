import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SignInBasic = () => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [validEmail, setValidEmail] = useState("");
  const handlerValidMail = (value)=> {
    if(value){
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(\.?\w+)+)@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(value)) {
            setValidEmail("Invalid Email Address");
        } else {
            setValidEmail("");
        }
    } else {
        setValidEmail("This field is required");
    }
  }

  const [isOpenPass, setOpenPass] = useState(true);
  const handlerOpenPassword = () => {
    switch (!isOpenPass) {
        case true:
            setOpenPass(true);
            break;
            default:
            setOpenPass(false);
            break;
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "purple" }}>
      <View style={styles.ibik}>
        <Image source={require("../assets/IBIKLOGO.png")} style={{ width: 70, height: 70 }} />
        <View style={{ flexDirection: "column", marginLeft: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>IBI Kesatuan</Text>
          <Text style={{ color: "white" }}>Bogor Indonesia</Text>
        </View>
      </View>
      <View>
        <Image source={require("../assets/bg.png")} style={styles.bg} />
      </View>
      <View style={styles.container}>
        <View style={styles.frm_row}>
          <Text style={styles.text_label}>Email </Text>
          <TextInput placeholder="npm@student.ibik.ac.id" keyboardType="email-address" autoCorrect={false} autoCapitalize="none" style={styles.text_input} defaultValue={email} onChangeText={(text) => handlerValidMail(text)} />
          <Text style={{color:"red"}}>{validEmail}</Text>
        </View>
        <View style={styles.frm_row}>
          <Text style={styles.text_label}>Password</Text>
          <View
            style={{
              ...styles.text_input,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              secureTextEntry={isOpenPass}
              placeholder="Enter your password"
              autoCorrect={false}
              style={{ ...styles.text_input, borderWidth: 0, padding: 0, width: "90%" }}
              defaultValue={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Pressable onPress={()=>handlerOpenPassword()}>
              <FontAwesome5 name={(isOpenPass) ? "eye":"eye-slash"} size={25} color="purple" />
            </Pressable>
          </View>
        </View>
        <TouchableOpacity style={styles.btn_signin} onPress={() => handlerSignIn()}>
          <Text style={styles.btn_signin_text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignInBasic;
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  ibik: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  bg: {
    width: 400,
    height: 250,
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
    marginTop: 15,
  },
  btn_signin_text: { color: "white", textAlign: "center", fontSize: 16 },
});
