import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Seta from "../assets/seta.png";
import { text, theme } from "../styles";

const Login: React.FC = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  
  async function handleLogin() {
    console.warn(userInfo);
    navigation.navigate("Catalog");
}

  return (
    <View style={theme.containerLogin}>
      <View style={theme.loginCard}>
        <Text style={text.loginTitle}>Login</Text>
        <View>
          <TextInput
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            style={theme.textInput}
            value={userInfo.username}
            onChangeText={(e) => {
              const newUserInfo = { ...userInfo };
              newUserInfo.username = e;
              setUserInfo(newUserInfo);
            }}
          />
          <TextInput
            placeholder="Senha"
            autoCapitalize="none"
            style={theme.textInput}
            value={userInfo.password}
            secureTextEntry={true}
            onChangeText={(e) => {
              const newUserInfo = { ...userInfo };
              newUserInfo.password = e;
              setUserInfo(newUserInfo);
            }}
          />
          <TouchableOpacity
        style={theme.LoginButton}
        activeOpacity={0.8}
        onPress={() => handleLogin()}
      >
        <Text style={text.buttonText}>Fazer Login</Text>
        <View style={theme.arrowContainer}>
          <Image source={Seta} />
        </View>
      </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
