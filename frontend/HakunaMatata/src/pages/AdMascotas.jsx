import React from "react";
import "../css/Mascotas.css";
import { useMascotas } from "../components/hooks/useMascotas"; // Ajusta la ruta según tu estructura

const Mascotas = () => {
  const {
    mascotas,
    clientes,
    form,
    setForm,
    handleSubmit,
    handleEdit,
    handleDelete,
    editingId,
  } = useMascotas();

  return (
    <div className="mascotas-container">
      <h2>Gestión de Mascotas</h2>
      <form className="mascota-form" onSubmit={handleSubmit}>
        <select
          value={form._idCliente}
          onChange={(e) => setForm({ ...form, _idCliente: e.target.value })}
          required
        >
          <option value="">Selecciona un cliente</option>
          {clientes.map((cliente) => (
            <option key={cliente._id} value={cliente._id}>
              {cliente.nombreCliente}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Nombre"
          value={form.nombreMascota}
          onChange={(e) => setForm({ ...form, nombreMascota: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Especie"
          value={form.especieMascota}
          onChange={(e) => setForm({ ...form, especieMascota: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Raza"
          value={form.razaMascota}
          onChange={(e) => setForm({ ...form, razaMascota: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Edad"
          value={form.edadMascota}
          onChange={(e) => setForm({ ...form, edadMascota: e.target.value })}
          required
        />
        <button type="submit">
          {editingId ? "Actualizar Mascota" : "Agregar Mascota"}
        </button>
      </form>

      <div className="mascota-list">
        {mascotas.map((mascota) => (
          <div className="mascota-card" key={mascota._id}>
            <h3>{mascota.nombreMascota}</h3>
            <p>Especie: {mascota.especieMascota}</p>
            <p>Raza: {mascota.razaMascota}</p>
            <p>Edad: {mascota.edadMascota}</p>
            <p>Cliente: {mascota._idCliente?.nombreCliente || "N/A"}</p>
            <div className="card-buttons">
              <button onClick={() => handleEdit(mascota)}>Editar</button>
              <button onClick={() => handleDelete(mascota._id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mascotas;
