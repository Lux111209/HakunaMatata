//Array de metodos (C R U D)
const productosController = {};
import productosModel from "../models/Productos.js";

// SELECT
productosController.getProductos = async (req, res) => {
  const productos = await productosModel.find().populate();
  res.json(productos);
};

// INSERT
productosController.postProductos = async (req, res) => {
  const { nombreProducto, despcripcionProducto, categoriaProducto, precioProducto, stockProducto, imagenesProducto } = req.body;
  const newProducto = new productosModel({ nombreProducto, despcripcionProducto, categoriaProducto, precioProducto, stockProducto, imagenesProducto });
  await newProducto.save();
  res.json({ message: "Producto saved" });
};

// DELETE
productosController.deleteProductos = async (req, res) => {
  const deletedProducto = await productosModel.findByIdAndDelete(req.params.id);
  if (!deletedProducto) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }
  res.json({ message: "Producto deleted" });
};

// UPDATE
productosController.putProductos = async (req, res) => {
  // Solicito todos los valores
  const { nombreProducto, despcripcionProducto, categoriaProducto, precioProducto, stockProducto, imagenesProducto } = req.body;
  // Actualizo
  await productosModel.findByIdAndUpdate(
    req.params.id,
    {
        nombreProducto,
        despcripcionProducto,
        categoriaProducto,
        precioProducto,
        stockProducto,
        imagenesProducto
    },
    { new: true }
  );
  // muestro un mensaje que todo se actualizo
  res.json({ message: "Producto updated" });
};

export default productosController;
