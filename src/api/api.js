import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api",
  headers: { "x-api-key": "free_user_3LdzbYQD5jyzNUBCMGv1nOhmOzm" },
});

export default api;