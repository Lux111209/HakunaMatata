/*
    Campos:
        _idCliente (ObjectId)
        _idProducto (ObjectId)
        productos (Array de ObjetcId)
        subtotalProducto (Number)
        totalProducto (Number)
        estadoProducto (String)
*/

import { Schema, model } from "mongoose";

const pedidosSchema = new Schema(
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

    productos: {
      type: [Schema.Types.ObjectId], // Array de Strings
      required: true,
    },

    subtotalProducto: {
        type: Number,
        required: true,
        min: 0,
      },

    totalProducto: {
      type: Number,
      required: true,
      min: 0,
    },

    estadoProducto: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Pedidos", pedidosSchema);
