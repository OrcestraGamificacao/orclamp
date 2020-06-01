import React from 'react'
import { Link } from 'react-router-dom';
import './styles.css';
import ContainerBackground from '../../components/ContainerBackground';
import RegisterForm from '../../components/RegisterForm';
import Logo from '../../assets/LogoRegister.png';

export default function Register() {
    return (
        <ContainerBackground body={
            <div className="register-container">
                <RegisterForm />
                <div className="line-division" />
                <section>
                    <h1>Bem vindo!</h1>
                    <img src={Logo} alt="Orclamp" />
                    <Link className="login-link" to="/">
                        Já tem uma conta? Login
                    </Link>
                </section>
            </div>
        } />
    );
}