import React, { useState } from "react";

import "./styles.css";

import Button from '../../components/Button';

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [githubUsername, setGithubUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div className="content-form-register">
      <form>
        <p>
          Crie sua conta para começar. Depois disso, você pode criar ou entrar
          para projetos.
        </p>

        <h1>Email</h1>
        <input
          className="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <h1>Github username</h1>
        <input
          className="github-username"
          required
          value={githubUsername}
          onChange={(e) => setGithubUsername(e.target.value)}
        />

        <h1>Senha</h1>
        <input
          className="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <h1>Confirmar senha</h1>
        <input
          className="confirm-password"
          type="password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button text="CADASTRAR" />
      </form>
    </div>
  );
}
