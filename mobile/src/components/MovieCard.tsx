import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { text, theme } from "../styles";
import { Movie } from "../types/Movie";

type Props = {
  movie: Movie;
};

const MovieCard: React.FC<Props> = ({ movie }) => {
  const navigation = useNavigation();
  const { id } = movie;

  return (
    <TouchableOpacity
      style={theme.movieCard}
      onPress={() => navigation.navigate("MovieDetails", { id })}
    >
      <Image source={{ uri: movie.imgUrl }} style={theme.movieImage} />
      <View style={theme.movieDescriptionContainer}>
        <Text style={text.movieSubtitle}>{movie.subTitle}</Text>
        <Text style={text.movieTitle}>{movie.title}</Text>
        <Text style={text.movieYear}>{movie.year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
