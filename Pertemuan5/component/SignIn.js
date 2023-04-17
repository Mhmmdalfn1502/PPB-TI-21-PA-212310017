import React from 'react';
import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { View } from 'react-native-web';

const SignIn = () => {
    const [email, setMail] = useState("");
    const [password, setPassowrd] = useState("");
    
    return (
        <View style={styles.container}>
            <View style={styles.frm_row}>
                <Text style={styles.text_label}>Email</Text>
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
                style={{...styles.text_input, flexDirextion:"row", justifyContent:"space-between"}}>
                    <TextInput
                    secureTextEntry={true}
                    placeholder="Enter your password"
                    autoCorrect={false}
                    style={{...styles.text_input, borderWidth:0, padding:0, width:"90%"}}
                    defaultValue={password}
                    onChangeText={(text)=>setPassword(text)}
                    />
                    <Pressable>
                        <FontAwesome5 name={"eye"} size={25} color="purplle" />
                    </Pressable>
                </View>
        </View>
        <TouchabelOpacity style={styles.btn_signin} onPress={()=> handlerSignIn()} >
            <Text style={styles.btn_sign_text}>Sign In</Text>
        </TouchabelOpacity>
    );
};

const styles = StyleSheet.create({})

export default SignIn;
