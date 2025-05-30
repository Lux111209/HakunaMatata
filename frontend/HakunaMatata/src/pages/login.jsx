import React, { useState } from "react";
import "../css/login.css";
import loginBg from "../assets/Login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Para enviar/recibir cookies si usas cookie
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error en login");
      } else {
        // Guardar token en localStorage para usar luego en otras pantallas
        if (data.token) {
          localStorage.setItem("token", data.token);
        }

        // Redirigir a la ruta indicada desde el backend o a /adInicio
        window.location.href = data.redirectTo || "/adInicio";
      }
    } catch (err) {
      console.error("Error en la solicitud:", err);
      setError("Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="app-background"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="container">
        <form className="login-box" onSubmit={handleSubmit}>
          <h2>
            Iniciar Sesión <span role="img" aria-label="paw">🐾</span>
          </h2>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="username"
          />

          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <button
              type="button"
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              onClick={() => setShowPassword((prev) => !prev)}
              className="show-password-btn"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <a href="#" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </a>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Cargando..." : "Iniciar Sesión"}{" "}
            <span role="img" aria-label="paw">🐾</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

