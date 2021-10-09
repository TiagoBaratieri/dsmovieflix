import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import MovieCard from "../components/MovieCard";
import { colors, theme } from "../styles";
import { getMovies } from "../services";
import { Genre, MoviesResponse } from "../types/Movie";
import Pagination from "../components/Pagination";
import { Search } from "../components";

const Catalog: React.FC = () => {
  const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
  const [activePage, setActivePage] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [genre, setGenre] = useState<Genre>({
    id: 0,
    name: "",
  });

  const fillMovies = useCallback(() => {
    const params = {
      page: activePage,
      genreId: genre?.id,
    };

    setIsLoading(true);
    getMovies(params)
      .then((response) => setMoviesResponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage, genre]);

  const handleChangeGenre = (genre: Genre) => {
    setGenre(genre);
  };

  useEffect(() => {
    fillMovies();
  }, [fillMovies]);

  return (
    <ScrollView contentContainerStyle={theme.scrollContainer}>
      <Search genre={genre} handleChangeGenre={handleChangeGenre} />
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
