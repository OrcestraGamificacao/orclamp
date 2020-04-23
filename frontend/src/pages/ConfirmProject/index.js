import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import ConfirmProjectCard from "../../components/ConfirmProjectCard";
import Button from "../../components/Button";

import logoImg from "../../assets/logo.png";

import "./styles.css";

export default function ConfirmProject() {
  return (
    <div className="confirm-project-container">
      <div className="content">
        <div className="content-header">
          <Link className="back-link" to="/project/new">
            <FiArrowLeft size={36} color="#7AC14E" />
            Voltar para criação de projetos
          </Link>

          <h1>Adicionar Projeto</h1>
        </div>

        <div className="content-body">
          <section>
            <img src={logoImg} alt="Orclamp" />
          </section>

          <div className="box-container">
            <ConfirmProjectCard />

            <Button text="ADICIONAR PROJETO" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
