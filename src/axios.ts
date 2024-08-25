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

// Get all errors from the response
// axios.interceptors.response.use(response => {
//     return response;
// }, error => {
//     if (error.response && error.response.data) {
//         console.log(error.response.data.message);
//     }
//     return Promise.reject(error);
// });
