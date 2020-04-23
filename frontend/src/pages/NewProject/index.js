import React from 'react';

import NewProjectForm from '../../components/NewProjectForm';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function NewProject() {

  return (
    <div className="new-project-content">
      <div className="content">
        <section>
          <img src={logoImg} alt="Orclamp" />
        </section>

        <NewProjectForm />
      </div>
    </div>
  );
}
