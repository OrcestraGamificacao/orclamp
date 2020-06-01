import React from "react";
import "./styles.css";
import Logo from "../../assets/LogoRegister.png";

import ContainerBackground from "../../components/ContainerBackground";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <ContainerBackground
      body={
        <div className="login-container">
          <section>
            <h1>Orclamp</h1>
            <img src={Logo} alt="Orclamp" />
          </section>

          <LoginForm />
        </div>
      }
    />
  );
}
