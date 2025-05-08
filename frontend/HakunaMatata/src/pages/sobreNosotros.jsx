import React from 'react';
import '../css/sobreNosotros.css';
import bgAbout from '../assets/sobrenosotros1.png';

function SobreNosotros() {
  return (
    <section className="sobre-nosotros" style={{ backgroundImage: `url(${bgAbout})` }}>
      <div className="overlay">
        <h2 className="titulo">Sobre Nosotros</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Misión</h3>
            <p>
            En "Hakuna Matata", nuestra misión es nutrir el vínculo especial entre las personas y sus mascotas, ofreciendo productos de belleza y cuidado de alta calidad, junto con accesorios esenciales y divertidos. Nos dedicamos a promover el bienestar integral de cada animal, brindando soluciones prácticas y accesibles que faciliten una vida feliz y saludable para ellos. Queremos ser el aliado de confianza para todos los dueños de mascotas, simplificando su cuidado y celebrando la alegría que sus compañeros peludos traen a sus vidas.
            </p>
          </div>
          <div className="card">
            <h3>Visión</h3>
            <p>
            Aspiramos a que "Hakuna Matata" sea reconocida como la tienda de mascotas preferida por su enfoque amigable, su compromiso con el bienestar animal y la calidad de sus productos. Visualizamos un futuro donde cada mascota en nuestra comunidad disfrute de una vida plena y saludable, gracias al cuidado informado y los recursos accesibles que ofrecemos. Queremos ser un espacio donde los amantes de los animales se sientan bienvenidos y encuentren todo lo que necesitan para consentir y cuidar a sus compañeros, construyendo juntos una comunidad donde el bienestar de las mascotas sea siempre la prioridad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
