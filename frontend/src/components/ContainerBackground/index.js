import React from "react";
import "./styles.css";

export default function ContainerBackground({ body }) {
  return (
    <div className="container">
      <div className="card-content">{body}</div>
    </div>
  );
}
