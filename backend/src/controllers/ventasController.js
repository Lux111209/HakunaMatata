// Array de métodos (C R U D)
const ventasController = {};
import ventasModel from "../models/Ventas.js";

// SELECT
ventasController.getVentas = async (req, res) => {
  try {
    const ventas = await ventasModel.find().populate("idPedido");
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las ventas", error });
  }
};

// INSERT
ventasController.postVenta = async (req, res) => {
  try {
    const { idPedido, direccionEnvio, metodoPago, estadoProducto } = req.body;
    const nuevaVenta = new ventasModel({
      idPedido,
      direccionEnvio,
      metodoPago,
      estadoProducto,
    });
    await nuevaVenta.save();
    res.json({ message: "Venta guardada exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar la venta", error });
  }
};

// DELETE
ventasController.deleteVenta = async (req, res) => {
  try {
    const ventaEliminada = await ventasModel.findByIdAndDelete(req.params.id);
    if (!ventaEliminada) {
      return res.status(404).json({ message: "Venta no encontrada" });
    }
    res.json({ message: "Venta eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la venta", error });
  }
};

// UPDATE
ventasController.putVenta = async (req, res) => {
  try {
    const { idPedido, direccionEnvio, metodoPago, estadoProducto } = req.body;
    const ventaActualizada = await ventasModel.findByIdAndUpdate(
      req.params.id,
      {
        idPedido,
        direccionEnvio,
        metodoPago,
        estadoProducto,
      },
      { new: true }
    );
    if (!ventaActualizada) {
      return res.status(404).json({ message: "Venta no encontrada para actualizar" });
    }
    res.json({ message: "Venta actualizada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la venta", error });
  }
};

export default ventasController;