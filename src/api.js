import axios from "axios";

const API = axios.create({
  baseURL: "https://food-delivery-backend-1-nw7r.onrender.com/api",
});

export default API;