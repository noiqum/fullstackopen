import PropTypes from "prop-types";

const StatisticLine = (props) => {
  return (
    <div>
      <span>{props.text}</span>
      <span>{props.value}</span>
    </div>
  );
};
StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StatisticLine;
