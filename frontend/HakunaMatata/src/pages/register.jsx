import React from 'react';

import '../css/register.css'; ; 

const register = () => {
  return (
    <div className="register-container">
      <div className="cat-section">
        <img src={catImage} alt="Gatito" className="cat-image" />
      </div>
      <div className="register-box">
        <h2>🐾 Registro 🐾</h2>
        <input type="text" placeholder="Usuario" />
        <input type="email" placeholder="Correo Electrónico" />
        <input type="tel" placeholder="Número Telefónico" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirmar Contraseña" />
        <button>Registrarme 🐾</button>
      </div>
    </div>
  );
};

export default register;
