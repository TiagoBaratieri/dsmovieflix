import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const Login: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Bem vindo ao App</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Movies")}>
        <Text>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
