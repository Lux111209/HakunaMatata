import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/AdInicio.css";
import { jwtDecode } from "jwt-decode";  

const AdInicio = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      if (decoded.userType !== "Admin") {
        navigate("/"); 
      }
    } catch (err) {
      console.error("Token inválido", err);
      navigate("/"); 
    }
  }, [navigate]);

  return (
    <div className="ad-inicio-container">
      <h1 className="ad-title">Panel Administrativo</h1>
      <div className="button-group">
        <button onClick={() => navigate("/adClientes")} className="admin-button">
          Gestión de Clientes
        </button>
        <button onClick={() => navigate("/adMascotas")} className="admin-button">
          Gestión de Mascotas
        </button>
        <button onClick={() => navigate("/adProductos")} className="admin-button">
          Gestión de Productos
        </button>
      </div>
    </div>
  );
};

export default AdInicio;
