import React from "react";
import "./styles.css";
import ContainerBackground from "../../components/ContainerBackground";
import SectionLogoLink from "../../components/SectionLogoLink";
import ConfirmProjectCard from "../../components/ConfirmProjectCard";
import Button from "../../components/Button";

export default function ConfirmProject() {
  return (
    <ContainerBackground
      body={
        <div className="confirm-project-container">
          <SectionLogoLink
            titleLink="Voltar para criação de projetos"
            page="/project/new"
          />

          <div className="add-project">
            <h1>Adicionar Projeto</h1>

            <ConfirmProjectCard />

            <Button text="ADICIONAR PROJETO" />
          </div>
        </div>
      }
    />
  );
}
