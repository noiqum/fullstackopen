import PropTypes from "prop-types";

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((exer) => {
        return <p key={exer.id}>{exer.name}</p>;
      })}
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    parts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        exercises: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }),
};

export default Course;
