import PropTypes from "prop-types";

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exerciseNbr}
    </p>
  );
};

Part.propTypes = {
  name: PropTypes.string.isRequired,
  exerciseNbr: PropTypes.number.isRequired,
};

export default Part;
