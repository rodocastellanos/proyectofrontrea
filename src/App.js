import './css/App.css';
//Componentes
import CarruselIngreso from './components/CarruselIngreso';
import Navbar from './components/Navbar';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
import Contactenos from './components/Contactenos';
import Registro from './components/Registro';
import Productos from './components/Productos';
import Carrito from './components/Carrito';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
<div>
    <div className='APP'>
    <Navbar/>
    </div>
    <Routes>
    <Route path="/" element={<CarruselIngreso/>}/>
    <Route path="/Nosotros" element={<Nosotros/>}/>
    <Route path="/Inicio" element={<Inicio/>}/>
    <Route path="/Contactenos" element={<Contactenos/>}/>
    <Route path="/Registro" element={<Registro/>}/>
    <Route path="/Productos" element={<Productos/>}/>
    <Route path="/Carrito" element={<Carrito/>}/>
    </Routes>
  </div>
  );
}

export default App;
