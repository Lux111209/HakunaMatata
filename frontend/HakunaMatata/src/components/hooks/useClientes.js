import { useState, useEffect } from "react";
 
// Hook para manejar clientes
export const useClientes = () => {
  const [clientes, setClientes] = useState([]);
 
  // Formulario de cliente
  const [form, setForm] = useState({
    nombreCliente: "",
    emailCliente: "",
    telefonoCliente: ""
  });
 
  // ID del cliente que se está editando
  const [editingId, setEditingId] = useState(null);
 
  // Obtener clientes desde el servidor
  const fetchClientes = async () => {
    const res = await fetch("/api/clientes");
    const data = await res.json();
    setClientes(data);
  };
 
  // Cargar los clientes
  useEffect(() => {
    fetchClientes();
  }, []);
 
  // Insertar o actualizar clientes
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/clientes/${editingId}` : "/api/clientes";
 
    // Envía una solicitud al servidor (convierte formulario a JSON)
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
 
    // Limpia el formulario y restablece el estado de edición
    setForm({ nombreCliente: "", emailCliente: "", telefonoCliente: "" });
    setEditingId(null);
    fetchClientes();
  };
 
  // Eliminar un cliente por su ID
  const handleDelete = async (id) => {
    await fetch(`/api/clientes/${id}`, { method: "DELETE" });
    fetchClientes();
  };
 
  // Cargar los datos de un cliente en el formulario para editar
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