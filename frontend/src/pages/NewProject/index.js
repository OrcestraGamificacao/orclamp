import React from "react";

import NewProjectForm from "../../components/NewProjectForm";
import ContainerBackground from "../../components/ContainerBackground";
import SectionLogoLink from "../../components/SectionLogoLink";

import "./styles.css";

export default function NewProject() {
  return (
    <ContainerBackground
      body={
        <div className="new-project-container">
          <SectionLogoLink
            titleLink="Voltar para página incial"
            page="/projects"
          />

          <NewProjectForm />
        </div>
      }
    />
  );
}
