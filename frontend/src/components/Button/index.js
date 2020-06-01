import React from "react";
import "./styles.css";

const Button = ({ onClick, text }) => {
  return (
    <button id="general" type="submit" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
