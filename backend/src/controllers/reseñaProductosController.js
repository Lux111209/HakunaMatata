// Array de métodos (C R U D)
const reseñaProductosController = {};
import reseñaProductosModel from "../models/ReseñaProductos.js";

// SELECT
reseñaProductosController.getReseñas = async (req, res) => {
  const reseñas = await reseñaProductosModel.find().populate("_idCliente _idProducto");
  res.json(reseñas);
};

// INSERT
reseñaProductosController.postReseña = async (req, res) => {
  const { _idCliente, _idProducto, calificacionProducto, comentarioProducto } = req.body;
  const nuevaReseña = new reseñaProductosModel({
    _idCliente,
    _idProducto,
    calificacionProducto,
    comentarioProducto,
  });
  await nuevaReseña.save();
  res.json({ message: "Reseña guardada exitosamente" });
};

// DELETE
reseñaProductosController.deleteReseña = async (req, res) => {
  const reseñaEliminada = await reseñaProductosModel.findByIdAndDelete(req.params.id);
  if (!reseñaEliminada) {
    return res.status(404).json({ message: "Reseña no encontrada" });
  }
  res.json({ message: "Reseña eliminada correctamente" });
};

// UPDATE
reseñaProductosController.putReseña = async (req, res) => {
  const { _idCliente, _idProducto, calificacionProducto, comentarioProducto } = req.body;
  const reseñaActualizada = await reseñaProductosModel.findByIdAndUpdate(
    req.params.id,
    { _idCliente, _idProducto, calificacionProducto, comentarioProducto },
    { new: true }
  );
  if (!reseñaActualizada) {
    return res.status(404).json({ message: "Reseña no encontrada para actualizar" });
  }
  res.json({ message: "Reseña actualizada correctamente" });
};

export default reseñaProductosController;