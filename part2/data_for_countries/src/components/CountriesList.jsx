import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Country from "./Country";

function CountriesList({ countries }) {
  const [countriesWithShowToggle, setCountriesWithShowToggle] = useState([]);

  useEffect(() => {
    setCountriesWithShowToggle(
      countries.map((c) => {
        return { country: c, show: false };
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickShowCountry = (i) => {
    const updatedCountryList = countriesWithShowToggle.map((c, idx) => {
      if (i == idx) {
        c.show = !c.show;
      }
      return c;
    });
    setCountriesWithShowToggle(updatedCountryList);
  };

  return (
    <div style={{ lineHeight: "0.9rem" }}>
      {countriesWithShowToggle.map((country, i) => {
        let c = country.country;
        return (
          <>
            <p key={c.name.common[0] + i}>
              {c.name.common}{" "}
              <button onClick={() => onClickShowCountry(i)}>
                {!country.show ? "show" : "hide"}
              </button>
            </p>
            {country.show ? <Country country={c} /> : null}
          </>
        );
      })}
    </div>
  );
}

CountriesList.propTypes = {
  countries: PropTypes.array,
};

export default CountriesList;
