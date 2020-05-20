import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";

import ContainerBackground from "../../components/ContainerBackground";
import RegisterForm from "../../components/RegisterForm";

import logoImg from "../../assets/LogoRegister.png";

export default function Register() {
  return (
    <ContainerBackground
      body={
        <div className="register-container">
          <RegisterForm />
          <div className="line-division"></div>
          <section>
            <h1>Bem vindo!</h1>
            <img src={logoImg} alt="Orclamp" />
            <Link className="login-link" to="/">
              Já tem uma conta? Login
              <FiLogIn size={30} color="#7AC14E" />
            </Link>
          </section>
        </div>
      }
    />
  );
}
