import React, { useState, useEffect } from "react";
import "../css/Products.css"; // Asegúrate de tener este archivo CSS

const Products = () => {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({
    nombreProducto: "",
    despcripcionProducto: "",
    categoriaProducto: "",
    precioProducto: "",
    stockProducto: ""
    // imagenesProducto eliminado del estado principal
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

  return (
    <div className="products-container">
      <h2>Gestión de Productos</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          placeholder="Nombre"
          value={form.nombreProducto}
          onChange={(e) => setForm({ ...form, nombreProducto: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Descripción"
          value={form.despcripcionProducto}
          onChange={(e) => setForm({ ...form, despcripcionProducto: e.target.value })}
        />
        <input
          type="text"
          placeholder="Categoría"
          value={form.categoriaProducto}
          onChange={(e) => setForm({ ...form, categoriaProducto: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Precio"
          value={form.precioProducto}
          onChange={(e) => setForm({ ...form, precioProducto: e.target.value })}
          required
          min="0"
        />
        <input
          type="number"
          placeholder="Stock"
          value={form.stockProducto}
          onChange={(e) => setForm({ ...form, stockProducto: e.target.value })}
          required
          min="0"
        />
        <button type="submit">{editingId ? "Actualizar" : "Agregar"}</button>
      </form>

      <div className="product-list">
        {productos.map((producto) => (
          <div key={producto._id} className="product-card">
            <h3>{producto.nombreProducto}</h3>
            <p>{producto.despcripcionProducto}</p>
            <p><strong>Precio:</strong> ${producto.precioProducto}</p>
            <p><strong>Stock:</strong> {producto.stockProducto}</p>
            <p><strong>Categoría:</strong> {producto.categoriaProducto}</p>
            <div className="card-buttons">
              <button onClick={() => handleEdit(producto)}>Editar</button>
              <button onClick={() => handleDelete(producto._id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
