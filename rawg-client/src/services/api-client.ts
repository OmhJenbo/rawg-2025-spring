import axios from "axios";
const apiClient = axios.create({
    baseURL: "gttps://api.rawg.io/api",
    params: {
        key: import.meta.env.VITE_API_KEY,
    }
    });

    export default apiClient;
