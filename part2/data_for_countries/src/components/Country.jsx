import PropTypes from "prop-types";

function Country({ country }) {
  const languages = [];
  for (const key in country.languages) {
    if (Object.hasOwnProperty.call(country.languages, key)) {
      const element = country.languages[key];
      languages.push(element);
    }
  }

  return (
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
  );
}

Country.propTypes = {
  country: PropTypes.object,
};

export default Country;
