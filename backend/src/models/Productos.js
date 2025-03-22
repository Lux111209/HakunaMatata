/*
    Campos:
        nombreProducto
        despcripcionProducto
        categoriaProducto
        precioProducto
        stockProducto
        imagenesProducto
*/
 
import { Schema, model } from "mongoose";
 
const productosSchema = new Schema(
  {
    nombreProducto: {
      type: String,
      require: true,
    },
 
    despcripcionProducto: {
      type: String,
    },
 
    categoriaProducto: {
      type: String,
      require: true,
    },
 
    precioProducto: {
      type: Number,
      require: true,
      min: 0,
    },
 
    stockProducto: {
        type: Number,
        require: true,
        min: 0,
    },
 
    imagenesProducto: [{
      url: {
      type: String,
      require: true,
      }
    }]
  },
  {
    timestamps: true,
    strict: false,
  }
);
 
export default model("Productos", productosSchema);