import React from "react";

const Alert = ({ message, success }) => {
  return (
    <div className={`Alert alert-${success ? "success" : "error"}`}>
      {message}
    </div>
  );
};

export default Alert;
