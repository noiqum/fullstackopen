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
      className={
        message.type === "success"
          ? "success-notification"
          : "error-notification"
      }
    >
      {message}
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default Notification;
