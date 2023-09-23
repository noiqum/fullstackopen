import PropTypes from "prop-types";

const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);

  return (
    <div>
      <h1>{course.name}</h1>
      {course.parts.map((exer) => {
        return (
          <p key={exer.id}>
            <span>{exer.name}</span> <span>{exer.exercises}</span>
          </p>
        );
      })}
      <strong>{`total of ${total} exercises`}</strong>
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
