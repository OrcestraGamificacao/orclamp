import React from "react";
import "./styles.css";

const InputGroup = ({ title, value, onChange, type }) => {
  return (
    <div className="group-container">
      <h2>{title}</h2>
      <input
        type={type}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
