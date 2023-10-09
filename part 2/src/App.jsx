import { useEffect } from "react";
import { useState } from "react";
import CountryFilter from "./components/CountryFilter.jsx/CountryFilter";
import FilterResult from "./components/FilterResult/FilterResult";
import { getAllCountries } from "./services/country";
const App = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([countries]);
  const [filter, setFilter] = useState("");
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    getAllCountries().then((countries) => {
      setCountries(countries);
    });
  }, []);

  useEffect(() => {
    if (filter.length === 0) return setCountriesToShow(countries);
    if (filter.length > 0) {
      const countriesToShow = countries.filter((country) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      );
      setCountriesToShow(countriesToShow);
    }
  }, [filter, countries]);

  return (
    <div>
      <CountryFilter value={filter} onChange={handleFilterChange} />
      {countriesToShow.length > 0 && countries.length > 0 && (
        <FilterResult countries={countriesToShow} />
      )}
    </div>
  );
};

export default App;
