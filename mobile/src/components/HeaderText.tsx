import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { text } from "../styles";

const HeaderText: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Movies")}>
      <Text style={text.navText}>MovieFlix</Text>
    </TouchableOpacity>
  );
};

export default HeaderText;
