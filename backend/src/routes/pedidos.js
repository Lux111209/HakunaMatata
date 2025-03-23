import express from "express";
import pedidosController from "../controllers/pedidosController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(pedidosController.getPedidos)
  .post(pedidosController.postPedido);

router
  .route("/:id")
  .put(pedidosController.putPedido)
  .delete(pedidosController.deletePedido);

export default router;
