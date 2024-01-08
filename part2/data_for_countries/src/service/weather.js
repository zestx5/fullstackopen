import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_KEY;

const get = (lat, lon) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  return axios.get(URL).then((r) => r.data);
};

export default { get };
