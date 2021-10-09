import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosRequestConfig } from "axios";
import { Review } from "../types/Movie";

const baseUrl = "https://catalogmovieflix.herokuapp.com";

export const api = axios.create({
  baseURL: baseUrl,
});

export async function userToken() {
  const token = await AsyncStorage.getItem("@token");
  return token;
}

export async function getMovies(params) {
  const authToken = await userToken();
  const res = await api.get(
    `/movies?page=${params.page}${
      params.genreId !== null ? `&genreId=${params.genreId}` : ``
    }`,
    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return res;
}

export async function getMovie(id: number) {
  const authToken = await userToken();
  const res = await api.get(`/movies/${id}`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return res;
}

export async function postReview(data: Review) {
  const authToken = await userToken();
  const res = await api.post("/reviews", data, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return res;
}

export async function getGenres() {
  const authToken = await userToken();
  const res = await api.get("/genres", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return res;
}
