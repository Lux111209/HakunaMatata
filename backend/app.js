// Importo todo lo de la libreria de Express
import express from "express";
import clientesRoutes from "./src/routes/clientes.js";
import productosRoutes from "./src/routes/productos.js";
import mascotasRoutes from "./src/routes/mascotas.js";
//s
// Creo una constante que es igual a la libreria que importé
const app = express();
//s
//Que acepte datos en json
app.use(express.json());

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/clientes", clientesRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/mascotas", mascotasRoutes);

// Exporto la constante para poder usar express en otros archivos
export default app;
