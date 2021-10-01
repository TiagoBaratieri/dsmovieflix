import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { text, theme } from "../styles";

interface MovieProps {
  id: number;
  title: string;
  subTitle: string;
  year: number;
  imgUrl: ImageSourcePropType;
  synopsis: string;
  genre: {};
  reviews?: [];
}

const MovieCard: React.FC<MovieProps> = ({
  id,
  title,
  subTitle,
  year,
  imgUrl,
  synopsis,
  genre,
}) => {
  return (
    <TouchableOpacity style={theme.movieCard}>
      <Image source={imgUrl} style={theme.movieImage} />
      <View style={theme.movieDescriptionContainer}>
        <Text style={text.movieTitle}>{title}</Text>
        <Text style={text.movieSubtitle}>{subTitle}</Text>
        <Text style={text.movieYear}>{year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
