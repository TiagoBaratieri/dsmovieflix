import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MainImage from "../assets/mainImage.png";
import Seta from "../assets/seta.png";
import { theme, text } from "../styles";

const Home: React.FC = () => {

  const navigation = useNavigation();
  return (
    <View style={theme.container}>
      <View style={theme.card}>
        <View style={theme.textContainer}>
          <Text style={text.bold}>Avalie filmes</Text>
          <Text style={text.regular}>
            Diga o que você achou do seu filme favorito.
          </Text>
        </View>
        <Image source={MainImage} style={theme.MainImage} />
        <TouchableOpacity
        style={theme.primaryButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={text.primaryText}>INICIE AGORA SUA BUSCA</Text>
        <View style={theme.arrowContainer}>
          <Image source={Seta} />
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
