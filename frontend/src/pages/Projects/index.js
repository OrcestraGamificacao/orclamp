import React from "react";

import "./styles.css";

import ProjectCard from '../../components/ProjectCard';

import Header from '../../components/Header';

export default function Projects() {
  return (
    <div className="content-projects">
      <Header />
      <div className="body-content">
        <ProjectCard />
      </div>
    </div>
  );
}