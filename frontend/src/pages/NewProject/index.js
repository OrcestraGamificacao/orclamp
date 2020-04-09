import React, { useState, useMemo } from 'react';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function NewProject() {
  const [image, setImage] = useState(null);

  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null;
  }, [image]);

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
            <label
              id="upload"
              style={{ backgroundImage: `url(${preview})` }}
              className={image ? 'has-image' : ''}
            >
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
              { image ? '' : <FiUpload size={30} color="#7AC14E" /> }
              { image ? '' : 'Imagem do Projeto'}
            </label>
          </div>

          <button className="button" type="submit">
            PRÓXIMO
          </button>

        </form>
      </div>
    </div>
  );
}
