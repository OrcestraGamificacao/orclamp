import React from "react";
import "./styles.css";

import Logo from "../../assets/LogoRegister.png";
import LoginForm from "../../components/LoginForm";
import ContainerBackground from "../../components/ContainerBackground";

export default function Login() {
  return (
    <ContainerBackground
      body={
        <div className="login-container">
          <section>
            <img src={Logo} alt="Orclamp" />
            <h1>Orclamp</h1>
          </section>

          <LoginForm />
        </div>
      }
    />
  );
}
