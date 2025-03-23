import express from "express";
import reseñaProductosController from "../controllers/reseñaProductosController.js";
// Router() nos ayuda a colocar los métodos
// que tendrá la ruta
const router = express.Router();

router
  .route("/")
  .get(reseñaProductosController.getReseñas)
  .post(reseñaProductosController.postReseña);

router
  .route("/:id")
  .put(reseñaProductosController.putReseña)
  .delete(reseñaProductosController.deleteReseña);

export default router;