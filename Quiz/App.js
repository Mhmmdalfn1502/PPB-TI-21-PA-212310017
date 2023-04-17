// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import Latihan from "./component/Latihan";
// import Quiz from "./component/Quiz.js";
// import Quiz2 from "./component/Quiz2.js";
// import ScrollViewNo5 from "./component/No5/ScrollViewNo5";
// import FlatListNo5 from "./component/No5/FlatListNo5";
// import SignInNo6 from "./component/SignInNo6";
// import No7 from "./component/No7";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";


// export default function App() {
//   // const Stack = createNativeStackNavigator();
//   // const Tab = createBottomTabNavigator();
//   return (
//     <SafeAreaView style={{flex:1}}>
//       <No7 />
//       {/* <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Quiz2" component={SignInNo6} />
//           <Stack.Screen name="ScrollViewNo5" component={ScrollViewNo5} />
//         </Stack.Navigator>
//       </NavigationContainer> */}
//       {/* <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={SignInNo6} />
//         <Tab.Screen name="Quiz2" component={Quiz2} />
//       </Tab.Navigator>
//       </NavigationContainer> */}
//     </SafeAreaView>
//   );
// }

import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
