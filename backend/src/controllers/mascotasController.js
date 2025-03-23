// Array de métodos (C R U D)
const mascotasController = {};
import mascotasModel from "../models/Mascotas.js";

// SELECT
mascotasController.getMascotas = async (req, res) => {
  try {
    const mascotas = await mascotasModel.find().populate("_idCliente");
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las mascotas", error });
  }
};

// INSERT
mascotasController.postMascota = async (req, res) => {
  try {
    const { _idCliente, nombreMascota, especieMascota, razaMascota, edadMascota } = req.body;
    const nuevaMascota = new mascotasModel({
      _idCliente,
      nombreMascota,
      especieMascota,
      razaMascota,
      edadMascota,
    });
    await nuevaMascota.save();
    res.json({ message: "Mascota guardada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar la mascota", error });
  }
};

// DELETE
mascotasController.deleteMascota = async (req, res) => {
  try {
    const mascotaEliminada = await mascotasModel.findByIdAndDelete(req.params.id);
    if (!mascotaEliminada) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }
    res.json({ message: "Mascota eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la mascota", error });
  }
};

// UPDATE
mascotasController.putMascota = async (req, res) => {
  try {
    const { _idCliente, nombreMascota, especieMascota, razaMascota, edadMascota } = req.body;
    const mascotaActualizada = await mascotasModel.findByIdAndUpdate(
      req.params.id,
      {
        _idCliente,
        nombreMascota,
        especieMascota,
        razaMascota,
        edadMascota,
      },
      { new: true }
    );
    if (!mascotaActualizada) {
      return res.status(404).json({ message: "Mascota no encontrada para actualizar" });
    }
    res.json({ message: "Mascota actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la mascota", error });
  }
};

export default mascotasController;