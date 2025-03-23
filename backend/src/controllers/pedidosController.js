// Array de métodos (C R U D)
const pedidosController = {};
import pedidosModel from "../models/Pedidos.js";

// SELECT
pedidosController.getPedidos = async (req, res) => {
  try {
    const pedidos = await pedidosModel.find().populate("_idCliente _idProducto");
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los pedidos", error });
  }
};

// INSERT
pedidosController.postPedido = async (req, res) => {
  try {
    const { _idCliente, _idProducto, productos, subtotalProducto, totalProducto, estadoProducto } = req.body;
    const nuevoPedido = new pedidosModel({
      _idCliente,
      _idProducto,
      productos,
      subtotalProducto,
      totalProducto,
      estadoProducto,
    });
    await nuevoPedido.save();
    res.json({ message: "Pedido guardado exitosamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar el pedido", error });
  }
};

// DELETE
pedidosController.deletePedido = async (req, res) => {
  try {
    const pedidoEliminado = await pedidosModel.findByIdAndDelete(req.params.id);
    if (!pedidoEliminado) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }
    res.json({ message: "Pedido eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el pedido", error });
  }
};

// UPDATE
pedidosController.putPedido = async (req, res) => {
  try {
    const { _idCliente, _idProducto, productos, subtotalProducto, totalProducto, estadoProducto } = req.body;
    const pedidoActualizado = await pedidosModel.findByIdAndUpdate(
      req.params.id,
      {
        _idCliente,
        _idProducto,
        productos,
        subtotalProducto,
        totalProducto,
        estadoProducto,
      },
      { new: true }
    );
    if (!pedidoActualizado) {
      return res.status(404).json({ message: "Pedido no encontrado para actualizar" });
    }
    res.json({ message: "Pedido actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el pedido", error });
  }
};

export default pedidosController;