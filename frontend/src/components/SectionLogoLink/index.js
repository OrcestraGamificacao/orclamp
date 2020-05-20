import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.png";

import "./styles.css";

const SectionLogoLink = ({ titleLink, page }) => {
  return (
    <div className="logo-link">
      <Link className="back-projects" to={page}>
        <FiArrowLeft size={36} color="#7AC14E" />
        {titleLink}
      </Link>
      <img src={logoImg} alt="Orclamp" />
    </div>
  );
};

export default SectionLogoLink;
