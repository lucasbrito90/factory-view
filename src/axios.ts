import axios from "axios";

export const request = axios.create({});

export function setToken(token: string) {
    request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
