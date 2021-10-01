import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { isAuthenticated } from '../services/auth';
import { text } from "../styles";

const HeaderText: React.FC = () => {
  const navigation = useNavigation();

  async function handleClick() {
    const result = await isAuthenticated();
    result ? navigation.navigate("Movie") : navigation.navigate("Login");
  }

  return (
    <TouchableOpacity onPress={() => handleClick()}>
      <Text style={text.navText}>MovieFlix</Text>
    </TouchableOpacity>
  );
};

export default HeaderText;


