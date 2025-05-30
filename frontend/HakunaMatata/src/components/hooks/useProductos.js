import { useEffect, useState } from "react";

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({
    nombreProducto: "",
    despcripcionProducto: "",
    categoriaProducto: "",
    precioProducto: "",
    stockProducto: ""
  });
  const [editingId, setEditingId] = useState(null);

  const fetchProductos = async () => {
    const res = await fetch("/api/productos");
    const data = await res.json();
    setProductos(data);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `/api/productos/${editingId}` : "/api/productos";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({
      nombreProducto: "",
      despcripcionProducto: "",
      categoriaProducto: "",
      precioProducto: "",
      stockProducto: ""
    });
    setEditingId(null);
    fetchProductos();
  };

  const handleDelete = async (id) => {
    await fetch(`/api/productos/${id}`, { method: "DELETE" });
    fetchProductos();
  };

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
