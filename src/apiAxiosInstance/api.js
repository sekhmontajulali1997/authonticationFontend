import axios from "axios";

const API = axios.create({
  baseURL:
    "https://authonticationauthoriation-backend-latest.onrender.com/api/v1",
  withCredentials: true,
  
});
export default API;
