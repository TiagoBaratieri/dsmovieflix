import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { colors, text, theme } from "../styles";
import star from "../assets/star.png";
import { Movie, Review } from "../types/Movie";
import { getMovie, postReview } from "../services";
import Toast from "react-native-tiny-toast";

const MovieDetails: React.FC = ({
  route: {
    params: { id },
  },
}) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();
  const [review, setReview] = useState<Review>();

  const fillMovie = useCallback(() => {
    setLoading(true);
    getMovie(id)
      .then((response) => setMovie(response.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSave = () => {
    setLoading(true);
    const data = {
      ...review,
      movieId: id,
    };
    postReview(data)
      .then(() => {
        Toast.showSuccess("Salvo com sucesso");
        setReview({ text: "" });
        fillMovie();
      })
      .catch(() => Toast.show("Erro ao salvar"))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fillMovie();
  }, [fillMovie]);

  return (
    <ScrollView style={theme.detailsContainer}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <>
          <View style={theme.detailsCard}>
            <Image source={{ uri: movie?.imgUrl }} style={theme.detailsImage} />
            <View style={theme.detailsContent}>
              <Text style={text.movieTitle}>{movie?.title}</Text>
              <Text style={text.movieSubtitle}>{movie?.subtitle}</Text>
              <Text style={text.movieYear}>{movie?.year}</Text>
              <View style={theme.descriptionContainer}>
                <Text style={text.detailsDescription}>{movie?.synopsis}</Text>
              </View>
            </View>
          </View>
          {loading ? (
            <ActivityIndicator size="large" color={colors.primary} />
          ) : (
            <View style={theme.formContainer}>
              <TextInput
                placeholder="Deixe sua avaliação aqui"
                style={theme.formInput}
                value={review?.text}
                onChangeText={(e) => setReview({ ...review, text: e })}
              />
              <TouchableOpacity
                style={theme.formButton}
                onPress={() => handleSave()}
              >
                <Text style={text.formButtonText}>Salvar Avaliação</Text>
              </TouchableOpacity>
            </View>
          )}
          {movie?.reviews?.map((review) => (
            <View style={theme.reviewsContainer} key={review.id}>
              <View style={theme.reviewContainer}>
                <View style={theme.reviewNameContainer}>
                  <Image source={star} style={theme.reviewImage} />
                  <Text style={text.reviewName}>{review.user.name}</Text>
                </View>
                <View style={theme.reviewContent}>
                  <Text style={text.reviewText}>{review.text}</Text>
                </View>
              </View>
            </View>
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default MovieDetails;
