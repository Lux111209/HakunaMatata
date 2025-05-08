import React from 'react';
import '../css/HomePage.css';

import backgroundImage from '../assets/Home1.png';
import jugueteImg from '../assets/juguete.png';
import accesoriosImg from '../assets/accesorios.jpg';
import bellezaImg from '../assets/belleza.webp';

const HomePage = () => {
  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh'
      }}
    >
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p>Consiente a tu</p>
          <h1>PELUDITO EN CASA</h1>
          <button>Comenzar</button>
        </div>
      </section>

      {/* Categorías */}
      <section className="categories">
        <h2>Categorías</h2>
        <div className="category-list">
          <div className="category-item">Accesorios</div>
          <div className="category-item">Belleza</div>
          <div className="category-item">Utensilios y Alimentos</div>
          <div className="category-item">Juguetes</div>
        </div>
      </section>

      <br />


      {/* Promociones */}
      <section className="promotions">
        <h2>Promociones</h2>
        <div className="promo-cards">
          <div className="promo-card orange">
            <img src={jugueteImg} alt="Juguetes" className="promo-image" />
            <p className="category">Juguetes</p>
            <h3>Disfruta tu Verano</h3>
            <span className="discount">30%</span>
            <button>Ver Ahora</button>
          </div>
          <div className="promo-card beige">
            <img src={accesoriosImg} alt="Accesorios" className="promo-image" />
            <p className="category">Accesorios</p>
            <h3>Las mejores Prendas</h3>
            <span className="discount">15%</span>
            <button>Ver Ahora</button>
          </div>
          <div className="promo-card lilac">
            <img src={bellezaImg} alt="Belleza" className="promo-image" />
            <p className="category">Belleza</p>
            <h3>Transforma su Look</h3>
            <span className="discount">25%</span>
            <button>Ver Ahora</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
