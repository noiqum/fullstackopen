import PropTypes from "prop-types";
import { useEffect } from "react";

const Notification = ({ message }) => {
  useEffect(() => {
    console.log("message", message);
  }, [message]);
  if (message === null) {
    return null;
  }

  return (
    <div
      className="Notification
  "
    >
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
