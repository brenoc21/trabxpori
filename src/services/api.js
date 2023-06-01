
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com/weather/?key=d8e9559a&city_name=Fortaleza,CE",
});
export default api;