import React, { useState, useMemo } from "react";
import { useHistory } from "react-router-dom";

import { FiUpload } from "react-icons/fi";

import Button from "../../components/Button";

import "./styles.css";

export default function NewPtojectForm() {
  const [image, setImage] = useState(null);
  const [project, setProject] = useState("");
  const [techs, setTechs] = useState("");
  const [description, setDescription] = useState("");

  const preview = useMemo(() => {
    return image ? URL.createObjectURL(image) : null;
  }, [image]);

  const history = useHistory();

  function handleNext(e) {
    e.preventDefault();

    localStorage.setItem("project", project);
    localStorage.setItem("techs", techs);
    localStorage.setItem("description", description);
    localStorage.setItem("image", URL.createObjectURL(image));

    history.push("/project/new/confirm");
  }

  return (
    <div className="content-form-project">
      <form onSubmit={handleNext}>
        <h1>Criar Projeto</h1>
        <input
          className="project"
          placeholder="Nome do Projeto"
          value={project}
          onChange={(e) => setProject(e.target.value)}
        />

        <input
          className="technology"
          placeholder="Tecnologias"
          value={techs}
          onChange={(e) => setTechs(e.target.value)}
        />

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="upload-group">
          <label
            id="upload"
            style={{ backgroundImage: `url(${preview})` }}
            className={image ? "has-image" : ""}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {image ? "" : <FiUpload size={30} color="#7AC14E" />}
            {image ? "" : "Imagem do Projeto"}
          </label>
        </div>

        <Button text="PRÓXIMO" />
      </form>
    </div>
  );
}
