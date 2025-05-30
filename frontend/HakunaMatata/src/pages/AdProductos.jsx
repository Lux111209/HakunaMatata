import React from "react";
import "../css/Products.css";
import { useProductos } from "../components/hooks/useProductos";

// Componente para gestionar productos: permite agregar, editar, eliminar y listar productos.
const Products = () => {
  const {
    productos,
    form,
    setForm,
    handleSubmit,
    handleEdit,
    handleDelete,
    editingId
  } = useProductos();

  return (
    <div className="products-container">
      <h2>Gestión de Productos</h2>
      {/* Formulario para agregar o editar un producto */}
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

      {/* Lista de productos */}
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