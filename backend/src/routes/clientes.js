import express from "express";
import clientesController from "./controllers/clientesController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(clientesController.getCliente)
  .post(clientesController.postCliente);

router
  .route("/:id")
  .put(clientesController.putCliente)
  .delete(clientesController.deleteCliente);

export default router;
