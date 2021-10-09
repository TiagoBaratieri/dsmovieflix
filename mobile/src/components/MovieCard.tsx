import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { text, theme } from "../styles";
import { Movie } from "../types/Movie";

type Props = {
    movie: Movie;
}


const MovieCard: React.FC<Props> = ({movie}) => {
  return (
    <TouchableOpacity style={theme.movieCard}>
   <Image source={{ uri: movie.imgUrl }} style={theme.movieImage} />
      <View style={theme.movieDescriptionContainer}>
        <Text style={text.movieTitle}>{movie.title}</Text>
        <Text style={text.movieSubtitle}>{movie.subtitle}</Text>
        <Text style={text.movieYear}>{movie.year}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
