//Array de metodos (C R U D)
const clientesController = {};
import clientesModel from "../models/Clientes.js";

// SELECT
clientesController.getCliente = async (req, res) => {
  const cliente = await clientesModel.find();
  res.json(cliente);
};

// INSERT
clientesController.postCliente = async (req, res) => {
  const { nombreCliente, emailCliente, telefonoCliente } = req.body;
  const newCliente= new clientesModel({ nombreCliente, emailCliente, telefonoCliente });
  await newCliente.save();
  res.json({ message: "Cliente save" });
};

// DELETE
clientesController.deleteCliente = async (req, res) => {
const deleteCliente = await clientesModel.findByIdAndDelete(req.params.id);
  if (!deleteCliente) {
    return res.status(404).json({ message: "Cliente dont find" });
  }
  res.json({ message: "Cliente deleted" });
};

// UPDATE
clientesController.putCliente = async (req, res) => {
  // Solicito todos los valores
  const { nombreCliente, emailCliente, telefonoCliente  } = req.body;
  // Actualizo
  await clientesModel.findByIdAndUpdate(
    req.params.id,
    {
        nombreCliente, 
        emailCliente,
        telefonoCliente
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Cliente update" });
};

export default clientesController;
