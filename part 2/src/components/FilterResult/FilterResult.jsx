import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const FilterResult = ({ countries }) => {
  const [display, setDisplay] = useState(null);
  const renderContent = () => {
    if (countries.length === 1) {
      return <Country country={countries[0]} />;
    }
    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    } else if (countries.length > 1 && countries.length < 10) {
      return countries.map((country) => (
        <p key={country.name.common}>
          {country.name.common}{" "}
          <button onClick={() => setDisplay(country)}>show</button>
        </p>
      ));
    }
  };
  useEffect(() => {
    setDisplay(null);
  }, [countries]);
  return (
    <div>
      {display !== null ? (
        <Country country={display}></Country>
      ) : (
        renderContent()
      )}
    </div>
  );
};
FilterResult.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default FilterResult;
