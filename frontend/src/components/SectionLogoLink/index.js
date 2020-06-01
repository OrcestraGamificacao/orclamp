import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import LogoImg from '../../assets/logo.png';

import "./styles.css";

const SectionLogoLink = ({ page, titleLink }) => {
  return (
    <div className="logo-link">
      <Link className="back-projects" to={page}>
        <FiArrowLeft size={36} color="#7ac14e" />
        {titleLink}
      </Link>
      <img src={LogoImg} alt="Orclamp" />
    </div>
  );
};

export default SectionLogoLink;
