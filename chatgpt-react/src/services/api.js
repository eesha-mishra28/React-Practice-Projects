import axios from "axios";
const API_URL = "https://fakestoreapi.com";

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use((config) => {
  console.log("Request:", config.method, config.url);
  return config;
});

api.interceptors.response.use((response) => {
   console.log("Response:", response.status, response.config.url);
  return response;
});

export default api;