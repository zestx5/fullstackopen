import PropTypes from "prop-types";
import weatherService from "../service/weather";
import { useEffect, useState } from "react";

function Country({ country }) {
  const [weather, setWeather] = useState(null);

  const languages = [];
  for (const key in country.languages) {
    if (Object.hasOwnProperty.call(country.languages, key)) {
      const element = country.languages[key];
      languages.push(element);
    }
  }
  const [lat, lon] = country.capitalInfo.latlng;
  useEffect(() => {
    weatherService.get(lat, lon).then((d) => {
      setWeather(d);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!weather) {
    return;
  }

  return (
    <>
      <div>
        <h2>{country.name.common}</h2>
        <div>
          <p>Capital: {country.capital[0]}</p>
          <p>Area: {country.area}</p>
        </div>
        <h3>Languages: </h3>
        <ul>
          {languages.map((l, i) => (
            <li key={l[0] + i}>{l}</li>
          ))}
        </ul>
        <img src={country.flags.png} />
      </div>
      <div>
        <h2>Weather in {country.capital[0]}</h2>
        <p>Temperature {weather.main.temp} Celcius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        />
        <p>wind {weather.wind.speed}</p>
      </div>
    </>
  );
}

Country.propTypes = {
  country: PropTypes.object,
};

export default Country;
