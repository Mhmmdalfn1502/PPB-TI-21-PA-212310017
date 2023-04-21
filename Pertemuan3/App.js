import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyFriends from './Friends/MyFriends';
import Main from './Praktikum3/component/Instagram/Main';

function HomeScreen() {
  return (
    <Main />
  );
}

function SettingsScreen() {
  return (
    <MyFriends />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="HomePage" component={HomeScreen} />
        <Tab.Screen name="FriendList" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}