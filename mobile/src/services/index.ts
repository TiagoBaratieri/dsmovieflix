import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosRequestConfig } from "axios";

const baseUrl = "https://catalogmovieflix.herokuapp.com";

export const api = axios.create({
    baseURL: baseUrl,
}); 


export async function userToken() {
    const token = await AsyncStorage.getItem("@token");
    return token;
}

export async function getProducts(params) {
    const authToken = await userToken();
    const res = await api.get(`/movies?page=${params.page}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        }
    });
    return res;
} 