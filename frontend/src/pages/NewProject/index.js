import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function NewProject() {
  const [image, setImage] = useState('');

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

          <div className="upload-group">
            <label for="upload">
              <FiUpload size={16} color="#7AC14E" />
              Imagem do Projeto
            </label>
            <input
              id="upload"
              type="file"
              accept="image/*"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <span>{image}</span>
          </div>

          <button className="button" type="submit">
            PRÓXIMO
          </button>

        </form>
      </div>
    </div>
  );
}
