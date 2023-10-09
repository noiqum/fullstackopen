import Proptypes from "prop-types";

const Country = ({ country }) => {
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
  }).isRequired,
};

export default Country;
