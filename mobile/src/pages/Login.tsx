import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { colors, text, theme } from "../styles";

const Login: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={theme.loginContainer}>
      <View style={theme.cardLogin}>
        <Text style={text.LoginTitle}>LOGIN</Text>

        <TextInput
          style={text.input}
          placeholder="Email"
          placeholderTextColor={colors.placeholder}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={text.input}
          placeholder="Senha"
          placeholderTextColor={colors.placeholder}
          autoCapitalize="none"
        />

        <TouchableOpacity style={theme.primaryButton} activeOpacity={0.8}>
          <Text style={text.buttonLoginText}>Fazer Login</Text>
          <View style={theme.eyesContainer}></View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
