import './css/App.css';
//Componentes
import CarruselIngreso from './components/CarruselIngreso';
import Nosotros from './components/Nosotros';
import Inicio from './components/Inicio';
import Contactenos from './components/Contactenos';
import Registro from './components/Registro';
import Productos from './components/Productos';
import Carrito from './components/Carrito';
import Navegacion from './components/Navbarentrada';
import {Route, Routes} from 'react-router-dom';
import React, { useState } from "react"


function App() {
  var [count, setCount] = useState(0);
  let onclickfunc = () => {
      setCount(count + 1);
    };
  return (
<div>
    <div className='APP'>
    <Navegacion count={count}/>
    </div>
    <Routes>
    <Route path="/" element={<CarruselIngreso/>}/>
    <Route path="/Nosotros" element={<Nosotros/>}/>
    <Route path="/Inicio" element={<Inicio/>}/>
    <Route path="/Contactenos" element={<Contactenos/>}/>
    <Route path="/Registro" element={<Registro/>}/>
    <Route path="/Productos" element={<Productos onclickfunc={onclickfunc}/>}/>
    <Route path="/Carrito" element={<Carrito/>}/>
    </Routes>
  </div>
  );
}

export default App;
