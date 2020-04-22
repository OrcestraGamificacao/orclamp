import React from "react";

import "./styles.css";

const ConfirmProjectCard = () => {
  const project = localStorage.getItem("project");
  const techs = localStorage.getItem("techs");
  const description = localStorage.getItem("description");
  const image = localStorage.getItem("image");

  const technology = techs.split(", ");

  return (
    <div className="card-content">
      <div className="img-block">
        <img src={image} alt="Logo Project" />
      </div>

      <div className="info">
        <div className="names-group">
          <h1>{project}</h1>
          <h2>Fellipe</h2>
        </div>

        <p>{description}</p>

        <ul>
          {technology.map((tech) => (
            <li className="tech">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ConfirmProjectCard;
