import express from "express";
import ventasController from "../controllers/ventasController.js";
// Router() nos ayuda a colocar los métodos
// que tendrá la ruta
const router = express.Router();

router
  .route("/")
  .get(ventasController.getVentas)
  .post(ventasController.postVenta);

router
  .route("/:id")
  .put(ventasController.putVenta)
  .delete(ventasController.deleteVenta);

export default router;