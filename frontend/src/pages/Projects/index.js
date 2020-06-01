import React from "react";
import "./styles.css";
import Header from '../../components/Header';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  return (
    <div className="projects-container">
      <Header />
      <div className="body-content">
        <ProjectCard />
      </div>
    </div>
  );
}
