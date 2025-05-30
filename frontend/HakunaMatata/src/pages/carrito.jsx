import React, { useState } from 'react';
import '../css/carrito.css';
import fondoCarrito from '../assets/fondoCarrito.png';
import producto1 from '../assets/camaperro.jpg';

// Componente principal del carrito de compras
function Carrito() {
  // Precio unitario para los productos
  const precioUnitario = 19.99;
  // Estado para manejar la cantidad de cada producto (tres productos de ejemplo)
  const [cantidad, setCantidad] = useState([1, 1, 1]);

  // Función para modificar la cantidad de un producto
  const cambiarCantidad = (index, delta) => {
    setCantidad(prev =>
      prev.map((c, i) => (i === index ? Math.max(1, c + delta) : c))
    );
  };

  // Calcula el total sumando la cantidad de cada producto por su precio unitario
  const calcularTotal = () => {
    return cantidad.reduce((acc, c) => acc + c * precioUnitario, 0).toFixed(2);
  };

  // Muestra un mensaje simulando el pago
  const handlePago = () => {
    alert(`¡Pago realizado con éxito! Total: $${calcularTotal()}`);
  };

  return (
    <div
      className="carrito-page"
      style={{ backgroundImage: `url(${fondoCarrito})` }}
    >
      <h2 className="titulo-carrito">Carrito</h2>
      <br />
      <br />
      <br />

      {/* Muestra tres productos en el carrito */}
      {[0, 1, 2].map((_, index) => (
        <div className="card-producto" key={index}>
          <img src={producto1} alt="producto" className="imagen-producto" />
          <div className="detalle">
            {/* Precio total para la cantidad seleccionada de este producto */}
            <p className="precio">${(precioUnitario * cantidad[index]).toFixed(2)}</p>
            <div className="cantidad">
              {/* Botones para sumar o restar cantidad */}
              <button onClick={() => cambiarCantidad(index, -1)}>-</button>
              <span>{cantidad[index]}</span>
              <button onClick={() => cambiarCantidad(index, 1)}>+</button>
            </div>
          </div>
        </div>
      ))}

      {/* Muestra el total general */}
      <div className="total-pago">
        Total: <strong>${calcularTotal()}</strong>
      </div>

      {/* Botón para simular pago */}
      <button className="boton-pagar" onClick={handlePago}>
        Pagar
      </button>
    </div>
  );
}

export default Carrito;