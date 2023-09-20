import PropTypes from "prop-types";

const Total = (props) => {
  function getTotalExercise() {
    let total = 0;
    props.list.forEach((element) => {
      total = total + element.exercises;
    });
    return total;
  }
  return <p>{`Number of exercises ${getTotalExercise()}`}</p>;
};

Total.propTypes = {
  list: PropTypes.array.isRequired,
};

export default Total;
