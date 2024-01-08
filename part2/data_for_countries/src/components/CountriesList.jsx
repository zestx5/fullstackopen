import PropTypes from "prop-types";

function CountriesList({ countries }) {
  return (
    <div style={{ lineHeight: "0.9rem" }}>
      {countries.map((c, i) => (
        <p key={c.name.common[0] + i}>{c.name.common}</p>
      ))}
    </div>
  );
}

CountriesList.propTypes = {
  countries: PropTypes.array,
};

export default CountriesList;
