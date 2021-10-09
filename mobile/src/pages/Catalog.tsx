import React from "react";
import { View, Text, ScrollView } from "react-native";
import movieTest from '../assets/movie-test.png';
import MovieCard from "../components/MovieCard";
import { theme } from "../styles";

const Catalog: React.FC = () => {
  const movies = [
    {
      id: 0,
      title: "Teste Título",
      subTitle: "Teste Subtítulo",
      year: 2021,
      imgUrl: movieTest,
      synopsis: "TESTE DESCRIÇÃO",
      genre: { name: "Comédia" },
    },
    {
      id: 1,
      title: "Teste 2 Título",
      subTitle: "Teste 2 Subtítulo",
      year: 2021,
      imgUrl: movieTest,
      synopsis: "TESTE 2 DESCRIÇÃO",
      genre: { name: "Comédia" },
    },
    {
      id: 2,
      title: "Teste 3 Título",
      subTitle: "Teste 3 Subtítulo",
      year: 2021,
      imgUrl: movieTest,
      synopsis: "TESTE 3 DESCRIÇÃO",
      genre: { name: "Comédia" },
    },
    {
      id: 3,
      title: "Teste 2 Título",
      subTitle: "Teste 2 Subtítulo",
      year: 2021,
      imgUrl: movieTest,
      synopsis: "TESTE 2 DESCRIÇÃO",
      genre: { name: "Comédia" },
    },
  ];
  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.id} />
      ))}
    </ScrollView>
  );
};

export default Catalog;
