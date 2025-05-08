import React from 'react';
import '../css/login.css';
import loginBg from '../assets/Login.png';

const Login = () => {
  return (
    <div
      className="app-background"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="container">
        <div className="login-box">
          <h2>Iniciar Sesión <span role="img" aria-label="paw">🐾</span></h2>
          <input type="text" placeholder="Usuario" />
          <div className="password-input">
            <input type="password" placeholder="Contraseña" />
            <span role="img" aria-label="eye">👁️</span>
          </div>
          <a href="#">¿Olvidaste tu contraseña?</a>
          <button>Iniciar Sesión <span role="img" aria-label="paw">🐾</span></button>
        </div>
      </div>
    </div>
  );
};

export default Login;


