import React from "react";
import "../css/Clientes.css";
import { useClientes } from "../components/hooks/useClientes"; // Ajusta la ruta si es necesario

const Clientes = () => {
  const {
    clientes,
    form,
    setForm,
    handleSubmit,
    handleDelete,
    handleEdit,
    editingId
  } = useClientes();

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
