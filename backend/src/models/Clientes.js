/*
    Campos:
        nombreCliente
        emailCliente
        telefonoCliente
*/
 
import { Schema, model } from "mongoose";
 
const clientesSchema = new Schema(
  {
    nanombreCliente: {
      type: String,
      require: true,
    },
 
    emailCliente: {
      type: String,
    },
 
    telefonoCliente: {
      type: String,
      require: true,
    }
  },
  {
    timestamps: true,
    strict: false,
  }
);
 
export default model("Clientes", clientesSchema);