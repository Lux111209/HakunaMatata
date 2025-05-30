import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  const footerStyle = {
    backgroundColor: '#f5a623',
    padding: '40px 20px',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    marginTop: '50px'
  };

  const iconStyle = {
    margin: '0 10px',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#fff',
    transition: 'color 0.3s ease'
  };

  const linkContainer = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    fontSize: '14px'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    transition: 'text-decoration 0.3s'
  };

  const iconHoverStyle = { ...iconStyle, color: '#333' };

  return (
    <footer style={footerStyle}>
      <div>
        <h3 style={{ marginBottom: '15px' }}>HAKUNAMATATA &copy; {new Date().getFullYear()}</h3>
        <div>
          <FaFacebookF style={iconStyle} />
          <FaInstagram style={iconStyle} />
          <FaTwitter style={iconStyle} />
        </div>

        <div style={linkContainer}>
          <a href="/sobre-nosotros" style={linkStyle}>Sobre Nosotros</a>
          <a href="/terminos" style={linkStyle}>Términos y Condiciones</a>
          <a href="/contacto" style={linkStyle}>Contacto</a>
          <a href="/ayuda" style={linkStyle}>Ayuda</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
