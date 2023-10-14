import Proptypes from "prop-types";
import { useEffect, useState } from "react";

import { getCurrentWeather } from "../../services/country";

const Country = ({ country }) => {
  const [weatherResponse, setWeatherResponse] = useState(null);
  useEffect(() => {
    getCurrentWeather(
      country.capitalInfo.latlng[0],
      country.capitalInfo.latlng[1]
    ).then((res) => setWeatherResponse(res));
  }, [country]);
  useEffect(() => {
    console.log(import.meta.env.VITE_OPENWEATHER_KEY);
    console.log(weatherResponse);
  }, [weatherResponse]);
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km²</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag" width="200" />
      <h2>
        Weather in <span>{country.capital}</span>
      </h2>
      <p>{`Temperature ${weatherResponse.main.temp} Celcius`}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`}
        alt=""
      />
      <p>wind {weatherResponse.wind.speed} m/s</p>
    </div>
  );
};

Country.propTypes = {
  country: Proptypes.shape({
    name: Proptypes.shape({
      common: Proptypes.string.isRequired,
      official: Proptypes.string.isRequired,
    }).isRequired,
    capital: Proptypes.arrayOf(Proptypes.string.isRequired).isRequired,
    area: Proptypes.number.isRequired,
    languages: Proptypes.arrayOf(Proptypes.object.isRequired).isRequired,
    flags: Proptypes.shape({
      svg: Proptypes.string.isRequired,
      png: Proptypes.string.isRequired,
    }).isRequired,
    capitalInfo: Proptypes.shape({
      latlng: Proptypes.arrayOf(Proptypes.string.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Country;
