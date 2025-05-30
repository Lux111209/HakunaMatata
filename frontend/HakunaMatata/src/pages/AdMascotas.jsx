import React, { useEffect, useState } from "react";
import "../css/Mascotas.css";

const Mascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState({
    _idCliente: "",
    nombreMascota: "",
    especieMascota: "",
    razaMascota: "",
    edadMascota: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Cargar mascotas y clientes al inicio
  useEffect(() => {
    fetchMascotas();
    fetchClientes();
  }, []);

  const fetchMascotas = async () => {
    const res = await fetch("/api/mascotas");
    const data = await res.json();
    setMascotas(data);
  };

  const fetchClientes = async () => {
    const res = await fetch("/api/clientes");
    const data = await res.json();
    setClientes(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/mascotas/${editingId}` : "/api/mascotas";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      _idCliente: "",
      nombreMascota: "",
      especieMascota: "",
      razaMascota: "",
      edadMascota: "",
    });
    setEditingId(null);
    fetchMascotas();
  };

  const handleEdit = (mascota) => {
    setForm({ ...mascota, _idCliente: mascota._idCliente._id || mascota._idCliente });
    setEditingId(mascota._id);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/mascotas/${id}`, { method: "DELETE" });
    fetchMascotas();
  };

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
