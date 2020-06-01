import React, { useState } from "react";
import "./styles.css";
import InputGroup from "../InputGroup";
import Button from "../Button";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <form id="register">
      <p>
        Crie sua conta para começar. Depois disso, você pode criar ou entrar
        para projetos.
      </p>

      <InputGroup
        title="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputGroup
        title="Github username"
        value={githubUsername}
        onChange={(e) => setGithubUsername(e.target.value)}
      />
      <InputGroup
        title="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputGroup
        title="Confirmar senha"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button text="CADASTRAR" />
    </form>
  );
};

export default RegisterForm;
