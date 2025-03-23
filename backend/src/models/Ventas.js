import { Schema, model } from "mongoose";

const ventasSchema = new Schema(
  {
    idPedido: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Pedidos",
    },

    direccionEnvio: {
      type: String,
      required: true,
    },

    metodoPago: {
      type: String,
      required: true,
      enum: ["Tarjeta de crédito", "Transferencia bancaria"], 
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

export default model("Ventas", ventasSchema);