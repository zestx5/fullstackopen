/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import countriesService from "./service/countries";
import { useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import CountriesList from "./components/CountriesList";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    countriesService
      .getAll()
      .then((d) => setCountries(d))
      .catch((e) => console.log(e.message));
    setFilteredCountries(countries);
  }, []);

  useEffect(() => {
    if (!filteredCountries && !countries) {
      return;
    }
    const updatedCountryList = countries.filter((c) =>
      c.name.common.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCountries(updatedCountryList);
  }, [filter]);

  if (!countries) {
    return;
  }
  const onChangeUpdateCountryList = (e) => {
    setFilter(e.target.value);
  };

  const renderInfo = () => {
    if (!filteredCountries) {
      return <p>Too many matches, specify another filter</p>;
    }
    const len = filteredCountries.length;
    console.log(len);
    if (len > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (len == 1) {
      return <Country country={filteredCountries[0]} />;
    } else {
      return <CountriesList countries={filteredCountries} />;
    }
  };

  return (
    <div>
      <Header />
      <Search onChangeHandler={onChangeUpdateCountryList} value={filter} />
      {renderInfo()}
    </div>
  );
}

export default App;
