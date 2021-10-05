import React from "react";
import { Text, TouchableOpacity, Image, ScrollView, View, ImageStore, ImageSourcePropType } from "react-native";
import movieImage from "../assets/movie-image.png";
import { text, theme } from "../styles";

interface MovieProps {
  title: string;
  subTitle: string;
  year: number;
  imgUrl: ImageSourcePropType;
  synopsis: string;
}

const MovieCard: React.FC<MovieProps> = ({
  title,
  subTitle,
  year,
  imgUrl,
  synopsis,
}) => {
  return (
    <TouchableOpacity style={theme.cardMovie} activeOpacity={0.8}>
      <Image source={movieImage} style={theme.movieImage} />
      <View style={theme.cardDescription}>
        <View>
          <Text style={text.cardTitle}>{title}</Text>
        </View>
        <View>
          <Text style={text.cardYear}>{year}</Text>
        </View>
        <View>
          <Text style={text.cardSubTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
