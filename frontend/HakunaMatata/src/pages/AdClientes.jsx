import React, { useEffect, useState } from "react";
import "../css/Clientes.css"; 

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [form, setForm] = useState({
    nombreCliente: "",
    emailCliente: "",
    telefonoCliente: ""
  });
  const [editingId, setEditingId] = useState(null);

  const fetchClientes = async () => {
    const res = await fetch("/api/clientes");
    const data = await res.json();
    setClientes(data);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/clientes/${editingId}` : "/api/clientes";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ nombreCliente: "", emailCliente: "", telefonoCliente: "" });
    setEditingId(null);
    fetchClientes();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/clientes/${id}`, { method: "DELETE" });
    fetchClientes();
  };

  const handleEdit = (cliente) => {
    const { _id, ...clienteData } = cliente;
    setForm(clienteData);
    setEditingId(_id);
  };

  return (
    <div className="clientes-container">
      <h2>Gestión de Clientes</h2>
      <form className="cliente-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombreCliente}
          onChange={(e) => setForm({ ...form, nombreCliente: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.emailCliente}
          onChange={(e) => setForm({ ...form, emailCliente: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={form.telefonoCliente}
          onChange={(e) => setForm({ ...form, telefonoCliente: e.target.value })}
          required
        />
        <button type="submit">{editingId ? "Actualizar" : "Agregar"}</button>
      </form>

      <div className="cliente-list">
        {clientes.map((cliente) => (
          <div className="cliente-card" key={cliente._id}>
            <h3>{cliente.nombreCliente}</h3>
            <p>Email: {cliente.emailCliente}</p>
            <p>Teléfono: {cliente.telefonoCliente}</p>
            <div className="card-buttons">
              <button onClick={() => handleEdit(cliente)}>Editar</button>
              <button onClick={() => handleDelete(cliente._id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientes;
