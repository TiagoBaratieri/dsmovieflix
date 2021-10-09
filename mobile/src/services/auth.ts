import { api } from "./index";
import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN = "Basic bW92aWVmbGl4Ym9vdGNhbXA6bW92aWVmbGl4MTkxMDE5ODg=";

interface AuthProps {
    username: string,
    password: string
}

export async function login(userInfo: AuthProps) {
    const data = queryString.stringify({ ...userInfo, grant_type: "password" });

    const result = await api.post('/oauth/token', data, {
        headers: {
            Authorization: TOKEN,
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    const { access_token } = result.data;
    setAsyncKeys("@token", access_token);

    return result;
}

async function setAsyncKeys(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.warn(e);
    }
}

export async function isAuthenticated() {

    const token = await AsyncStorage.getItem("@token");

    return token ? true : false;
}

export async function doLogout() {
    try {
        AsyncStorage.removeItem("@token");
    } catch (e) {
        console.warn(e);
    }
} 