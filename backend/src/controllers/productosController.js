const productosController = {};
import productosModel from "../models/Productos.js";

// GET: Obtener todos los productos
productosController.getProductos = async (req, res) => {
  try {
    const productos = await productosModel.find().populate();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos", error });
  }
};

// POST: Crear un nuevo producto
productosController.postProductos = async (req, res) => {
  try {
    const {
      nombreProducto,
      despcripcionProducto,
      categoriaProducto,
      precioProducto,
      stockProducto,
    } = req.body;

    // Validación básica
    if (!nombreProducto || !categoriaProducto || precioProducto == null || stockProducto == null) {
      return res.status(400).json({ message: "Campos obligatorios faltantes" });
    }

    const newProducto = new productosModel({
      nombreProducto,
      despcripcionProducto,
      categoriaProducto,
      precioProducto,
      stockProducto,
    });

    await newProducto.save();
    res.status(201).json({ message: "Producto creado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al crear el producto", error });
  }
};

// DELETE: Eliminar un producto por ID
productosController.deleteProductos = async (req, res) => {
  try {
    const deletedProducto = await productosModel.findByIdAndDelete(req.params.id);
    if (!deletedProducto) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el producto", error });
  }
};

// PUT: Actualizar un producto por ID
productosController.putProductos = async (req, res) => {
  try {
    const {
      nombreProducto,
      despcripcionProducto,
      categoriaProducto,
      precioProducto,
      stockProducto,
    } = req.body;

    const updated = await productosModel.findByIdAndUpdate(
      req.params.id,
      {
        nombreProducto,
        despcripcionProducto,
        categoriaProducto,
        precioProducto,
        stockProducto,
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json({ message: "Producto actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el producto", error });
  }
};

export default productosController;
