import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import InputGroup from "../InputGroup";
import Button from "../Button";

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

      <Button text="Logar" />

      <Link className="register-link" to="/register">
          Novo aqui? Cadastra-se
      </Link>
    </form>
  );
}
