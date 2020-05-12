import React from "react";
import "./styles.css";

const ContainerBackground = ({ body }) => {
  return (
    <div className="container">
      <div className="card-content">{body}</div>
    </div>
  );
};

export default ContainerBackground;
