import React from "react";
import "./styles.css";

const ConfirmProjectCard = () => {
  const project = localStorage.getItem("project");
  const techs = localStorage.getItem("techs").split(", ");
  const description = localStorage.getItem("description");
  const image = localStorage.getItem("image");
  return (
    <div className="confirm-project-card">
      <img src={image} alt="Logo Project" />

      <div className="info">
        <div className="names-group">
          <h1>{project}</h1>
          <h2>Fellipe</h2>
        </div>

        <p>{description}</p>

        <ul>
          {techs.map((tech) => (
            <li className="tech">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConfirmProjectCard;
