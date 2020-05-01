import React from 'react';

import './styles.css';

import Logo from '../../assets/LogoRegister.png';

import LoginForm from '../../components/LoginForm';

export default function Login() {
  return (
    <div className="login-content">
      <div className="content">
        <section>
          <img src={Logo} alt="Orclamp" />
          <h1>Orclamp</h1>
        </section>

        <LoginForm />
      </div>
    </div>
  );
}
