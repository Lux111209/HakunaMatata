import React, { useState } from 'react';
import '../css/carrito.css';
import fondoCarrito from '../assets/fondoCarrito.png';
import producto1 from '../assets/camaperro.jpg';

function Carrito() {
  const precioUnitario = 19.99;
  const [cantidad, setCantidad] = useState([1, 1, 1]);

  const cambiarCantidad = (index, delta) => {
    setCantidad(prev =>
      prev.map((c, i) => (i === index ? Math.max(1, c + delta) : c))
    );
  };

  const calcularTotal = () => {
    return cantidad.reduce((acc, c) => acc + c * precioUnitario, 0).toFixed(2);
  };

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

      {[0, 1, 2].map((_, index) => (
        <div className="card-producto" key={index}>
          <img src={producto1} alt="producto" className="imagen-producto" />
          <div className="detalle">
            <p className="precio">${(precioUnitario * cantidad[index]).toFixed(2)}</p>
            <div className="cantidad">
              <button onClick={() => cambiarCantidad(index, -1)}>-</button>
              <span>{cantidad[index]}</span>
              <button onClick={() => cambiarCantidad(index, 1)}>+</button>
            </div>
          </div>
        </div>
      ))}

      <div className="total-pago">
        Total: <strong>${calcularTotal()}</strong>
      </div>

      <button className="boton-pagar" onClick={handlePago}>
        Pagar
      </button>
    </div>
  );
}

export default Carrito;
