/* eslint-disable no-undef */
import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/";
const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;

const getAllCountries = () => {
  return axios.get(`${baseUrl}api/all`).then((response) => response.data);
};
const getCountry = (country) => {
  return axios
    .get(`${baseUrl}api/name/${country}`)
    .then((response) => response.data);
};
const getCurrentWeather = (lat, lon) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    )
    .then((response) => response.data);
};
export { getAllCountries, getCountry, getCurrentWeather };
