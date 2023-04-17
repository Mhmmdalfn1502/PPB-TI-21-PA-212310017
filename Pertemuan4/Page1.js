import { TouchableOpacity, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Page1 = ({ navigation }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Page2", { name: "Alfan" })}>
        <View style={{ backgroundColor: "purple", padding: 10, borderRadius: 10, margin: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>Click here to see me</Text>
        </View>
      </TouchableOpacity>
    );
  };
}
