import React from "react";
import "./styles.css";

import ContainerBackground from "../../components/ContainerBackground";
import SectionLogoLink from "../../components/SectionLogoLink";
import NewProjectForm from "../../components/NewProjectForm";

export default function NewProject() {
  return (
    <ContainerBackground
      body={
        <div className="new-project-container">
          <SectionLogoLink
            titleLink="Voltar para página inicial"
            page="/projects"
          />

          <NewProjectForm />
        </div>
      }
    />
  );
}
