import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from 'react-icons/fi';

import "./styles.css";

import Button from "../../components/Button";
import InputGroup from "../../components/InputGroup";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form id="login">
      <h1>Login</h1>

      <InputGroup
        title="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputGroup
        title="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button text="LOGAR" />

      <Link className="register-link" to="/register">
        Novo aqui? Cadastre-se
        <FiArrowRight size={30} color="#7AC14E" />
      </Link>
    </form>
  );
}
