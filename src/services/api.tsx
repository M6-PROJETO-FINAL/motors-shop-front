import axios from "axios";

// Local host - precisa executar o back
const api = axios.create({

    baseURL: "http://localhost:3001",
    timeout: 5000
})

// const api = axios.create({
//   baseURL: "https://motorshop-back.onrender.com",
//   timeout: 5000,
// });

export default api;
