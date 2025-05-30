import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import NavBar from './components/nav.jsx';
import Home from './pages/inicio.jsx';
import Productos from './pages/productos.jsx';
import SobreNosotros from './pages/sobreNosotros.jsx';
import Carrito from './pages/carrito.jsx';
import Terminos from './pages/terminos.jsx';
import Footer from './components/footer.jsx';
import AdProductos from './pages/AdProductos.jsx';
import AdClientes from './pages/AdClientes.jsx';
import AdMascotas from './pages/AdMascotas.jsx';
import AdInicio from './pages/AdInicio.jsx';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/sobreNosotros" element={<SobreNosotros />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/adProductos" element={<AdProductos />} />
        <Route path="/adClientes" element={<AdClientes />} />
        <Route path="/adMascotas" element={<AdMascotas />} />
        <Route path="/adInicio" element={<AdInicio />} />
        
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

