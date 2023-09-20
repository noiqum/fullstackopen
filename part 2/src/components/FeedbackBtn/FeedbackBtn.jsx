import PropTypes from "prop-types";

export const FeedbackBtn = (props) => {
  return <button onClick={props.clickHandler}>{props.name}</button>;
};

FeedbackBtn.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
