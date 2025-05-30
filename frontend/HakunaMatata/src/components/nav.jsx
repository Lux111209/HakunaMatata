import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}><Link to="/inicio" style={styles.link}>Inicio</Link></li>
        <li style={styles.li}><Link to="/productos" style={styles.link}>Productos</Link></li>
        <li style={styles.li}><Link to="/sobreNosotros" style={styles.link}>Sobre Nosotros</Link></li>
        <li style={styles.li}><Link to="/carrito" style={styles.link}>Carrito</Link></li>
        <li style={styles.li}><Link to="/terminos" style={styles.link}>Términos y Condiciones</Link></li>
      </ul>
      <div style={styles.loginContainer}>
        <Link to="/" style={styles.loginButton}>Login</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#f5a623',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
    gap: '30px',
  },
  li: {
    fontFamily: "'Comic Sans MS', 'Fredoka One', sans-serif",
    fontWeight: 'bold',
    fontSize: '18px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  loginContainer: {
    marginLeft: 'auto',
  },
  loginButton: {
    backgroundColor: 'white',
    color: '#f5a623',
    padding: '8px 16px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontFamily: "'Comic Sans MS', sans-serif",
  }
  


};

export default NavBar;
