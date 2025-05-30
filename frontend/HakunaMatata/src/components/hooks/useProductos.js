import { useEffect, useState } from "react";
 
// Para manejar productos
export const useProductos = () => {
  const [productos, setProductos] = useState([]);
 
  // Formulario de productos
  const [form, setForm] = useState({
    nombreProducto: "",    
    descripcionProducto: "",
    categoriaProducto: "",  
    precioProducto: "",  
    stockProducto: ""    
  });
 
  // ID del producto que se está editando
  const [editingId, setEditingId] = useState(null);
 
  // Obtener la lista de productos desde el servidor
  const fetchProductos = async () => {
    const res = await fetch("/api/productos");
    const data = await res.json();
    setProductos(data);
  };
 
  // Componente para cargar los productos
  useEffect(() => {
    fetchProductos();
  }, []);
 
  // Insertar o actualizar un producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/productos/${editingId}` : "/api/productos";
 
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
 
    // Limpia el formulario y se restablece al estado de edición
    setForm({
      nombreProducto: "",
      descripcionProducto: "",
      categoriaProducto: "",
      precioProducto: "",
      stockProducto: ""
    });
 
    setEditingId(null);
 
    // Se recarga la lista luego de actualizar
    fetchProductos();
  };
 
  // Función para eliminar un producto por su ID
  const handleDelete = async (id) => {
    await fetch(`/api/productos/${id}`, { method: "DELETE" });
    fetchProductos();
  };
 
  // cargar los datos de un producto en el formulario para edición
  const handleEdit = (producto) => {
    const { _id, ...productoData } = producto;
    setForm(productoData);
    setEditingId(_id);
  };
 
  return {
    productos,
    form,
    setForm,
    handleSubmit,
    handleEdit,
    handleDelete,
    editingId
  };
};