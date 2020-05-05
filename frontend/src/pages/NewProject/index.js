import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

import NewProjectForm from "../../components/NewProjectForm";

import "./styles.css";

import logoImg from "../../assets/logo.png";

export default function NewProject() {
  return (
    <div className="new-project-content">
      <div className="content">
        <header>
          <Link className="back-projects" to="/projects">
            <FiArrowLeft size={36} color="#7AC14E" />
            Voltar para página principal
          </Link>
          <h1>Criar Projeto</h1>
        </header>
        <body>
          <section>
            <img src={logoImg} alt="Orclamp" />
          </section>

          <NewProjectForm />
        </body>
      </div>
    </div>
  );
}
