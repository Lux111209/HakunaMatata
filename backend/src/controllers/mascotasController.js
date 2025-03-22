//Array de metodos (C R U D)
const mascotasController = {};
import mascotasModel from "../models/Mascotas.js";

// SELECT
mascotasController.getMascotas = async (req, res) => {
  const mascotas = await mascotasModel.find();
  res.json(mascotas);
};

// INSERT
mascotasController.postMascotas = async (req, res) => {
  const { _idCliente, nombreMascota, especieMascota, razaMascota, edadMascota } = req.body;
  const newmascotas = new mascotasModel({ _idCliente, nombreMascota, especieMascota, razaMascota, edadMascota });
  await newmascotas.save();
  res.json({ message: "Mascota save" });
};

// DELETE
mascotasController.deleteMascotas = async (req, res) => {
const deletedmascota = await mascotasModel.findByIdAndDelete(req.params.id);
  if (!deletedmascota) {
    return res.status(404).json({ message: "Mascota dont find" });
  }
  res.json({ message: "Mascota deleted" });
};

// UPDATE
mascotasController.putMascotas = async (req, res) => {
  // Solicito todos los valores
  const { _idCliente, nombreMascota, especieMascota, razaMascota, edadMascota } = req.body;
  // Actualizo
  await mascotasModel.findByIdAndUpdate(
    req.params.id,
    {
        _idCliente, 
        nombreMascota, 
        especieMascota,
        razaMascota, 
        edadMascota
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Mascota update" });
};

export default mascotasController;
