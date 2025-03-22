import express from "express";
import mascotasController from "../controllers/mascotasController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(mascotasController.getMascotas)
  .post(mascotasController.postMascotas);

router
  .route("/:id")
  .put(mascotasController.putMascotas)
  .delete(mascotasController.deleteMascotas);

export default router;
