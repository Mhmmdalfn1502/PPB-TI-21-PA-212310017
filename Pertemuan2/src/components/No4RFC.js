import { View, Text } from "react-native";
import React from "react";

const MyBio = {
  identity: {
    npm: 212310017,
    firstName: "MUHAMMAD",
    lastName: "ALFAN",
  },
  educations: [
    { id: 1, school: "SDN Tanah Sareal 1 Bogor" },
    { id: 2, school: "SMPN 8 Kota Bogor" },
    { id: 3, school: "SMAN 6 Kota Bogor" },
  ],
  mobile_phone: "08984977703",
  email: "212310017@student.ibik.ac.id",
  gender: "M",
  tall_body: 170,
  weight_body: 55,
};

const No4RFC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ borderWidth: 1, padding: 10, width: 300 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>No.4 RFC</Text>
        <Text style={{ fontWeight: "bold" }}>Identity</Text>
        <Text>NPM : {MyBio.identity.npm}</Text>
        <Text>First Name : {MyBio.identity.firstName}</Text>
        <Text>Last Name : {MyBio.identity.lastName}</Text>
        <Text style={{ fontWeight: "bold" }}>Educations</Text>
        {MyBio.educations.map((education) => {
          return (
            <Text>
              {education.id}. {education.school}
            </Text>
          );
        })}
        <Text>Mobile Phone : {MyBio.mobile_phone}</Text>
        <Text>Email : {MyBio.email}</Text>
        <Text>Gender : {MyBio.gender}</Text>
        <Text>Tall Body : {MyBio.tall_body}</Text>
        <Text>Weight Body : {MyBio.weight_body}</Text>
      </View>
    </View>
  );
};

export default No4RFC;
