import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function NewProject() {
  return (
    <div className="new-project-content">
      <div className="content">
        <section>
          <img src={logoImg} alt="Orclamp" />
        </section>

        <form>
          <h1>Criar Projeto</h1>
          <input
            className="project"
            placeholder="Nome do Projeto"
            onChange={() => { }}
          />

          <input
            className="technology"
            placeholder="Tecnologias"
            onChange={() => { }}
          />

          <textarea
            placeholder="Descrição"
            onChange={() => { }}
          />

          <button className="button" type="submit">
            Próximo
          </button>

        </form>
      </div>
    </div>
  );
}
