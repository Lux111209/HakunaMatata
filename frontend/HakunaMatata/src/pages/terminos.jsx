import React from 'react';
import '../css/terminos.css';
import fondoTerminos from '../assets/fondoTerminos.png'; 
import perroImagen from '../assets/perroSentado.png';   

function Terminos() {
  return (
    <div
      className="terminos-container"
      style={{ backgroundImage: `url(${fondoTerminos})` }}
    >
        <br />
        <br /><br />
      <div className="contenido">
        <div className="imagen-lado">
          <img src={perroImagen} alt="Perro sentado" />
        </div>
        <div className="texto-lado">
          <h2>Términos y Condiciones</h2>
          <p>
          Aceptación de los Términos
            Al acceder y utilizar esta aplicación, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguno de estos términos, debes dejar de usar la aplicación.
          </p>
          <p>
            
            2. Descripción del Servicio
            Nuestra aplicación proporciona información sobre productos farmacéuticos, permite la compra de medicamentos, ofrece servicios relacionados con la salud y proporciona contenido educativo.

          </p>
          <p>
          3. Registro de Usuario
Para acceder a ciertas funciones de la aplicación, es posible que debas registrarte y crear una cuenta. Eres responsable de mantener la confidencialidad de tus credenciales y de todas las actividades que ocurran bajo tu cuenta.

          </p>
          <p>
          3.1. Información del Usuario
Al registrarte, te comprometes a proporcionar información precisa, completa y actualizada. Si la información proporcionada es inexacta, nos reservamos el derecho de suspender tu cuenta.

          </p>
          <p>
          4. Uso Aceptable
Te comprometes a utilizar la aplicación de manera legal y ética. Está prohibido:
- Utilizar la aplicación para fines ilegales.
- Realizar actividades que puedan dañar la aplicación o sus usuarios.
- Compartir información falsa o engañosa.
- Interferir con el funcionamiento de la aplicación o intentar acceder a áreas no autorizadas.


          </p>
        </div>
      </div>
    </div>
  );
}

export default Terminos;
