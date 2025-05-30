import jwt from "jsonwebtoken";
import { config } from "../config.js";

export const validarTokenAdmin = (req, res, next) => {
  // El token puede venir en la cookie o en el header Authorization Bearer
  const token = req.cookies?.authToken || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, config.JWT.SECRET);

    if (decoded.userType !== "Admin") {
      return res.status(403).json({ message: "Acceso denegado: solo administradores" });
    }

    req.user = decoded; 
    next();
  } catch (error) {
    console.error("Token inválido:", error);
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};
