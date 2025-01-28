import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = "asdf";

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axios;
