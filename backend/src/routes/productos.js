import express from "express";
import productosController from "../controllers/productosController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(productosController.getProductos)
  .post(productosController.postProductos);

router
  .route("/:id")
  .put(productosController.putProductos)
  .delete(productosController.deleteProductos);

export default router;
