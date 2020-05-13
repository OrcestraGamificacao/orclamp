import React from "react";

import "./styles.css";

import ImgProject from "../../assets/project.png";
import Avatar from "../../assets/avatar.jpeg";
import Button from "../../components/Button";

function ProjectCard() {
  const data = [
    {
      id: 1,
      logo: ImgProject,
      title: "Plataforma Educacional Gamificada 1",
      name: "Fellipe Araujo",
      avatar: Avatar,
      technology: ["ReactJS", "React Native", "Node.js", "Javascript"],
      description:
        "Plataforma web em react em que o professor poderá disponibilizar trechos de contos para seus alunos e os alunos acumulariam pontos para passar de níveis...",
    },
    {
      id: 2,
      logo: ImgProject,
      title: "Plataforma Educacional Gamificada 2",
      name: "Fellipe Araujo",
      avatar: Avatar,
      technology: ["ReactJS", "Node.js", "Javascript"],
      description:
        "Plataforma web em react em que o professor poderá disponibilizar trechos de contos para seus alunos e os alunos acumulariam pontos para passar de níveis...",
    },
    {
      id: 3,
      logo: ImgProject,
      title: "Plataforma Educacional Gamificada 3",
      name: "Fellipe Araujo",
      avatar: Avatar,
      technology: ["ReactJS", "Node.js", "Javascript"],
      description:
        "Plataforma web em react em que o professor poderá disponibilizar trechos de contos para seus alunos e os alunos acumulariam pontos para passar de níveis...",
    },
  ];
  return data.map((project) => (
    <div className="project-card">
      <img src={project.logo} alt="Logo Project" />
      <div className="info-project">
        <h1>{project.title}</h1>
        <div className="profile">
          <img src={project.avatar} alt="Avatar" />
          <h2>{project.name}</h2>
        </div>
        <ul>
          {project.technology.map((tech) => (
            <li className="tech">{tech}</li>
          ))}
        </ul>
        <p>{project.description}</p>
        <Button text="PARTICIPAR" />
      </div>
    </div>
  ));
}

export default ProjectCard;
