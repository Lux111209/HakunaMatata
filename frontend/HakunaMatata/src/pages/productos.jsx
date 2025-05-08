import React from 'react';
import '../css/productos.css';

import bgImage from '../assets/product.png';
import promo1 from '../assets/promo1.jpeg';
import promo2 from '../assets/promo2.jpg';
import promo3 from '../assets/promo3.jpeg';
import promo4 from '../assets/promo4.jpg';
import promo5 from '../assets/promo5.jpg';
import promo6 from '../assets/promo6.jpg';

function Productos() {
  return (
    <div
      className="productos-page"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      <header className="productos-hero">
        <h1>Productos</h1>
      </header>

      <section className="promociones-section">
        <h2>Promociones</h2>
        <div className="promociones-grid">
          <div className="promo-card"><img src={promo1} alt="Promo 1" /></div>
          <div className="promo-card"><img src={promo2} alt="Promo 2" /></div>
          <div className="promo-card"><img src={promo3} alt="Promo 3" /></div>
        </div>
      </section>

      <section className="promociones-section">
        <h2>Promociones</h2>
        <div className="promociones-grid">
          <div className="promo-card"><img src={promo4} alt="Promo 4" /></div>
          <div className="promo-card"><img src={promo5} alt="Promo 5" /></div>
          <div className="promo-card"><img src={promo6} alt="Promo 6" /></div>
        </div>
      </section>
    </div>
  );
}

export default Productos;
