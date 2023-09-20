import Part from "../Part/Part";
import PropTypes from "prop-types";
const Content = (props) => {
  return (
    <>
      <Part
        name={props.parts[0].name}
        exerciseNbr={props.parts[0].exercises}
      ></Part>
      <Part
        name={props.parts[1].name}
        exerciseNbr={props.parts[1].exercises}
      ></Part>
      <Part
        name={props.parts[2].name}
        exerciseNbr={props.parts[2].exercises}
      ></Part>
    </>
  );
};

Content.propTypes = {
  parts: PropTypes.array.isRequired,
};

export default Content;
