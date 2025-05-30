import { useEffect, useState } from "react";

export const useMascotas = () => {
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

  useEffect(() => {
    fetchMascotas();
    fetchClientes();
  }, []);

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
    setForm({
      ...mascota,
      _idCliente: mascota._idCliente?._id || mascota._idCliente,
    });
    setEditingId(mascota._id);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/mascotas/${id}`, { method: "DELETE" });
    fetchMascotas();
  };

  return {
    mascotas,
    clientes,
    form,
    setForm,
    handleSubmit,
    handleEdit,
    handleDelete,
    editingId,
  };
};
