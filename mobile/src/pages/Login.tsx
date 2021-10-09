import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Seta from "../assets/seta.png";

import eyesOpened from "../assets/eyes-opened.png";
import eyesClosed from "../assets/eyes-closed.png";
import { text, theme } from "../styles";
import { isAuthenticated, login } from "../services/auth";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [userFetchData, setUserFetchData] = useState({});
  const [hasError, setHasError] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  async function handleLogin() {
    const data = await login(userInfo)
      .then(() => {
        setHasError(false);
        setUserFetchData(userInfo);
        navigation.navigate("Catalog");
      })
      .catch(() => {
        navigation.navigate("Login");
        setHasError(true);
      });
  }

  return (
    <View style={theme.containerLogin}>
      <View style={theme.loginCard}>
        <Text style={text.loginTitle}>Login</Text>
        {hasError && (
          <View style={theme.loginError}>
            <Text style={text.loginErrorText}>Usuário ou senha inválidos</Text>
          </View>
        )}
        <View style={theme.form}>
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
          <View style={theme.passwordGroup}>
            <TextInput
              placeholder="Senha"
              secureTextEntry={hidePassword}
              autoCapitalize="none"
              style={theme.textInput}
              value={userInfo.password}
              onChangeText={(e) => {
                const newUserInfo = { ...userInfo };
                newUserInfo.password = e;
                setUserInfo(newUserInfo);
              }}
            />

            <TouchableOpacity
              style={theme.toggle}
              onPress={() => setHidePassword(!hidePassword)}
            >
              <Image
                source={hidePassword ? eyesOpened : eyesClosed}
                style={{ width: 32, height: 32 }}
              />
            </TouchableOpacity>
          </View>
        </View>
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
  );
};

export default Login;
