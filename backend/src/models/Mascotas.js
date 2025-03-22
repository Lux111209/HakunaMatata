/*
    Campos:
        _idCliente
        nombreMascota
        especieMascota
        razaMascota
        edadMascota
*/
 
import { Schema, model } from "mongoose";
 
const mascotasSchema = new Schema(
  {
    _idCliente: {
      type: Schema.Types.ObjectId,
      ref: "Clientes",
    },
 
    nombreMascota: {
      type: String,
      require: true,
    },
 
    especieMascota: {
      type: String,
      require: true,
    },
 
    razaMascota: {
      type: String,
      require: true,
    },
 
    edadMascota: {
        type: String,
        require: true,
    }
  },
  {
    timestamps: true,
    strict: false,
  }
);
 
export default model("Mascotas", mascotasSchema);