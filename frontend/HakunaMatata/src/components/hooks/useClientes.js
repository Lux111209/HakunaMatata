import { useState, useEffect } from "react";

export const useClientes = () => {
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

  return {
    clientes,
    form,
    setForm,
    handleSubmit,
    handleDelete,
    handleEdit,
    editingId
  };
};
