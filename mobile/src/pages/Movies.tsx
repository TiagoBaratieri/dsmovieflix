import React, { useCallback, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import MovieCard from "../components/MovieCard";
import { getMovies } from "../services";
import { theme } from "../styles";
import { Genre, MoviesResponse } from "../types/Movie";

const Movies: React.FC = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [activePage, setActivePage] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [genre, setGenre] = useState<Genre>();

  const fillMovies = useCallback(() => {
    const params = {
      page: 0,
    };

    setIsLoading(true);
    getMovies(params)
      .then((response) => setMoviesResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      {moviesResponse?.content.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ScrollView>
  );
};

export default Movies;


