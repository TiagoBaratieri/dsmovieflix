import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme, text } from "../styles";
import MainImage from "../assets/main-image.png";
import arrow from "../assets/arrow.png";

const Login: React.FC = () => {

  const navigation = useNavigation();

  return (
    <View style={theme.container}>
      <View style={theme.card}>
      <View>
        <Text style={text.title}>Avalie filmes.</Text>
        <Text style={ text.subtitle }>
        Diga o que achou do seu {'\n'} filme favorito.
      </Text>
        </View>
        <Image source={MainImage} style={theme.mainImage} />
        <TouchableOpacity style={theme.primaryButton}
         activeOpacity={0.8}
         onPress={() => navigation.navigate("Login")}
         >
        <Text style={text.buttonText}>
        Catálogo Filmes
        </Text>
        <View style={theme.arrowContainer}>
          <Image source={arrow} style={{ width: 15, height: 15 }} />
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
