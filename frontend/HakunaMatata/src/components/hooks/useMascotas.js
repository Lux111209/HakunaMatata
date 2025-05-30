import { useEffect, useState } from "react";
 
// Hook para manejar mascotas y clientes
export const useMascotas = () => {
  const [mascotas, setMascotas] = useState([]);
 
  const [clientes, setClientes] = useState([]);
 
  // Formulario de mascotas
  const [form, setForm] = useState({
    _idCliente: "",      
    nombreMascota: "",  
    especieMascota: "",  
    razaMascota: "",    
    edadMascota: "",    
  });
 
  // ID de la mascota que se está editando
  const [editingId, setEditingId] = useState(null);
 
  // Obtener la lista de mascotas desde el servidor
  const fetchMascotas = async () => {
    const res = await fetch("/api/mascotas");
    const data = await res.json();
    setMascotas(data);
  };
 
  // Obtener la lista de clientes desde el servidor
  const fetchClientes = async () => {
    const res = await fetch("/api/clientes");
    const data = await res.json();
    setClientes(data);
  };
 
  // Componente para cargar mascotas y clientes
  useEffect(() => {
    fetchMascotas();
    fetchClientes();
  }, []);
 
  // Insertar o actualizar una mascota
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/mascotas/${editingId}` : "/api/mascotas";
 
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
 
    // Limpia el formulario y vuelve el estado de edición
    setForm({
      _idCliente: "",
      nombreMascota: "",
      especieMascota: "",
      razaMascota: "",
      edadMascota: "",
    });
 
    setEditingId(null);
 
    // Recarga después de la actualización
    fetchMascotas();
  };
 
  // Cargar los datos en el formulario para edición
  const handleEdit = (mascota) => {
    setForm({
      ...mascota,
      _idCliente: mascota._idCliente?._id || mascota._idCliente,
    });
 
    setEditingId(mascota._id);
  };
 
  // Eliminar una mascota por su ID
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