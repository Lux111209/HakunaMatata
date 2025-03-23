import express from "express";
import mascotasController from "../controllers/mascotasController.js";
// Router() nos ayuda a colocar los metodos
// que tendra mi ruta
const router = express.Router();

router
  .route("/")
  .get(mascotasController.getMascotas)
  .post(mascotasController.postMascota);

router
  .route("/:id")
  .put(mascotasController.putMascota)
  .delete(mascotasController.deleteMascota);

export default router;
