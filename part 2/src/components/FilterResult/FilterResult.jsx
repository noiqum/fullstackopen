import PropTypes from "prop-types";
import Country from "../Country/Country";

const FilterResult = ({ countries }) => {
  return (
    <div>
      {countries.length > 10 && <p>Too many matches, specify another filter</p>}
      {countries.length > 1 &&
        countries.length < 10 &&
        countries.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))}
      {countries.length === 1 && <Country country={countries[0]} />}
    </div>
  );
};
FilterResult.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default FilterResult;
