import React, { useEffect, useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { getGenres } from "../services";
import { theme } from "../styles";
import { Genre } from "../types/Movie";

type Props = {
  genre: Genre;
  handleChangeGenre: (genre: Genre) => void;
};

const Search = ({ genre, handleChangeGenre }: Props) => {
  const [showGenres, setShowGenres] = useState(false);
  const [genres, setGenres] = useState<Genre[]>();
  const [loading, setLoading] = useState(false);

  async function loadGenres() {
    setLoading(true);
    const result = await getGenres();
    setGenres(result.data);
    setLoading(false);
  }

  useEffect(() => {
    loadGenres();
  }, []);

  return (
    <View style={theme.modalContainer}>
      <Modal
        visible={showGenres}
        animationType="fade"
        transparent={true}
        presentationStyle="overFullScreen"
      >
        <ScrollView contentContainerStyle={theme.modalContent}>
          {genres?.map((genre) => (
            <TouchableOpacity
              style={theme.modalItem}
              key={genre.id}
              onPress={() => {
                handleChangeGenre(genre);
                setShowGenres(!showGenres);
              }}
            >
              <Text>{genre.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Modal>
      <TouchableOpacity
        onPress={() => setShowGenres(!showGenres)}
        style={theme.searchSelect}
      >
        <Text
          style={
            genres?.length === 0 ? { color: "#cecece" } : { color: "#000" }
          }
        >
          {genres?.length === 0 ? "Escolha um gênero" : ""}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
