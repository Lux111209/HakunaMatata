import express from "express";
import cookieParser from "cookie-parser";
import clientesRoutes from "./src/routes/clientes.js";
import productosRoutes from "./src/routes/productos.js";
import mascotasRoutes from "./src/routes/mascotas.js";
import pedidosRoutes from "./src/routes/pedidos.js";
import reseñasRoutes from "./src/routes/reseñaProductos.js";
import ventasRoutes from "./src/routes/ventas.js";
import loginRoutes from "./src/routes/login.js";
import logoutRoutes from "./src/routes/logout.js"
import cors from "cors";
import { validarTokenAdmin } from "./src/middleware/authMiddleware.js";  

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());       // Para que req.body no sea undefined al recibir JSON
app.use(cookieParser()); 

// Protegemos estas rutas con el middleware para que solo admin acceda
app.use("/api/clientes", validarTokenAdmin, clientesRoutes);
app.use("/api/productos", validarTokenAdmin, productosRoutes);
app.use("/api/mascotas", validarTokenAdmin, mascotasRoutes);

// Las demás rutas pueden ser públicas o protegidas según necesidad
app.use("/api/pedidos", pedidosRoutes);
app.use("/api/reseñas", reseñasRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/logout", logoutRoutes);

export default app;
