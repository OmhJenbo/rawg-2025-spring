import axios from "axios";
const apiClient = axios.create({
    baseURL: "gttps://api.rawg.io/api",
    });

    export default apiClient;
