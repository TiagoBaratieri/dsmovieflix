import React, { useState } from "react";
import { ActivityIndicator, ScrollView, View,Text, Image, TextInput, TouchableOpacity } from "react-native";
import { colors, text, theme } from "../styles";
import star from '../assets/star.png';
import movie from '../assets/movie-test.png';

const MovieDetails: React.FC = () => {
  const [loading, setLoading] = useState(false);

  return (
    <ScrollView style={theme.detailsContainer}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <>
          <View style={theme.detailsCard}>
            <Image source={movie} style={theme.detailsImage} />
            <View style={theme.detailsContent}>
              <Text style={text.movieTitle}>Título</Text>
              <Text style={text.movieSubtitle}>Subtítulo</Text>
              <Text style={text.movieYear}>Ano</Text>
              <View style={theme.descriptionContainer}>
                <Text style={text.detailsDescription}>Descrição</Text>
              </View>
            </View>
          </View>
          <View style={theme.formContainer}>
            <TextInput
              placeholder="Deixe sua avaliação aqui"
              style={theme.formInput}
            />
            <TouchableOpacity style={theme.formButton}>
              <Text style={text.formButtonText}>Salvar Avaliação</Text>
            </TouchableOpacity>
          </View>
          <View style={theme.reviewsContainer}>
            <View style={theme.reviewContainer}>
              <View style={theme.reviewNameContainer}>
                <Image source={star} style={theme.reviewImage} />
                <Text style={text.reviewName}>Nome</Text>
              </View>
              <View style={theme.reviewContent}>
                <Text style={text.reviewText}>Comentário</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default MovieDetails;
