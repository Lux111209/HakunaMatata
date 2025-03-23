import { Schema, model } from "mongoose";

const reseñaProductosSchema = new Schema(
  {
    _idCliente: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Clientes",
    },

    _idProducto: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Productos",
    },

    calificacionProducto: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },

    comentarioProducto: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, 
    strict: false,
  }
);

export default model("ReseñaProductos", reseñaProductosSchema);