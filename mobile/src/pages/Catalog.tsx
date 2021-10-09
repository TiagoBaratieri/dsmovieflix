import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import { getProducts } from "../services";
import { colors, theme } from "../styles";
import { Genre, MoviesResponse } from "../types/Movie";

const Catalog: React.FC = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [activePage, setActivePage] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [genre, setGenre] = useState<Genre>();

  const fillMovies = useCallback(() => {
    const params = {
      page: activePage,
    };

    setIsLoading(true);
    getProducts(params)
      .then((response) => setMoviesResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage]);

  useEffect(() => {
    fillMovies();
  }, [fillMovies]);

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      {isLoading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        moviesResponse?.content.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))
      )}

      {moviesResponse && (
        <View style={theme.paginationContainer}>
          <Pagination
            totalPages={moviesResponse.totalPages}
            activePage={activePage}
            onChange={(page) => setActivePage(page)}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Catalog;
