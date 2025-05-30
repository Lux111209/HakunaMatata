import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config.js";

const loginController = {};

loginController.login = async (req, res) => {
  // Debug para ver qué está llegando en el body
  console.log("Body recibido:", req.body);

  // Validar que req.body exista y tenga email y password
  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Email y password son requeridos", success: false });
  }

  const { email, password } = req.body;

  try {
    let userFound = null;
    let userType = null;

    // Validar si es admin (usando config)
    if (
      email === config.adminf.ADMIN_EMAIL &&
      password === config.adminf.ADMIN_PASSWORD
    ) {
      userType = "Admin";
      userFound = { _id: "Admin" };
    } else {
      // Si no es admin, no permitimos acceso (solo admin)
      return res
        .status(401)
        .json({ message: "Acceso restringido solo para administradores", success: false });
    }

    // Generar token para admin
    jwt.sign(
      { id: userFound._id, userType },
      config.JWT.SECRET,
      { expiresIn: config.JWT.EXPIRES },
      (error, token) => {
        if (error) {
          console.error(error);
          return res
            .status(500)
            .json({ message: "Error generando token", success: false });
        }

        res.cookie("authToken", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        });

        res.json({
          message: "Login exitoso",
          success: true,
          userType,
          redirectTo: "/adInicio",
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor", success: false });
  }
};

export default loginController;
