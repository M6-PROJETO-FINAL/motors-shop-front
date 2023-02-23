import axios from "axios";

const api = axios.create({

    baseURL: "https://localhost:3000/",
    timeout: 15000
})

export default api;
