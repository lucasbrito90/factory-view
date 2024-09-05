import axios from "axios";

axios.interceptors.request.use(config => {
    const token: string | null = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, error => {
    return Promise.reject(error);
});
