import React, { useCallback, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import MovieCard from "../components/MovieCard";
import { getProducts } from "../services";
import { theme } from "../styles";
import { Genre, MoviesResponse } from "../types/Movie";

const Catalog: React.FC = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [activePage, setActivePage] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [genre, setGenre] = useState<Genre>();

  const fillMovies = useCallback(() => {
    const params = {
      page: 0,
    };

    setIsLoading(true);
    getProducts(params)
      .then((response) => setMoviesResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fillMovies();
  }, [fillMovies]);

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      {moviesResponse?.content.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ScrollView>
  );
};

export default Catalog;
