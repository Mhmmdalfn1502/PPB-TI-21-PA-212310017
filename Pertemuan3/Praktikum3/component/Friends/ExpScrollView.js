import React from "react";
import { ScrollView } from "react-native";
import UserItem from "./UserItem";
import Users from "../assets/Users";

const ExpScrollView = ({ Users }) => {
  return (
    <ScrollView>
      {Users.map((v, index) => (
        <UserItem item={v} key={index} />
      ))}
    </ScrollView>
  );
};

export default ExpScrollView;
