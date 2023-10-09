import PropTypes from "prop-types";

const CountryFilter = (props) => {
  const { value, onChange } = props;
  return (
    <label>
      Find countries
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};
CountryFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CountryFilter;
