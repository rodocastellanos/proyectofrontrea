import "./css/App.css";
//Componentes
import CarruselIngreso from "./components/CarruselIngreso";
import Nosotros from "./components/Nosotros";
import Inicio from "./components/Inicio";
import Contactenos from "./components/Contactenos";
import Registro from "./components/Registro";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
import Navegacion from "./components/Navbarentrada";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Usuarios from "./components/usuarios";
import ProductosIndex from "./components/productos/index";
import ActualizarUsuario from "./components/usuarios/actualizarUsuario";
import CreateUsuario from "./components/usuarios/createUsuario";
import EliminarUsuario from "./components/usuarios/eliminarUsuario";
import ActualizarProdcutos from "./components/productos/actualizarProducto";
import CreateProducto from "./components/productos/createProducto";
import EliminarProducto from "./components/productos/eliminarProducto";

function App() {
    var [count, setCount] = useState(0);
    let onclickfunc = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <div className="APP">
                <Navegacion count={count} />
            </div>
            <Routes>
                <Route path="/" element={<CarruselIngreso />} />
                <Route path="/Nosotros" element={<Nosotros />} />
                <Route path="/Inicio" element={<Inicio />} />
                <Route path="/Contactenos" element={<Contactenos />} />
                <Route path="/usuarios/Registro" element={<Registro />} />
                <Route
                    path="/ProductosVenta"
                    element={<Productos onclickfunc={onclickfunc} />}
                />
                <Route path="/Carrito" element={<Carrito />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/usuarios/create" element={<CreateUsuario />} />
                <Route
                    path="/usuarios/update/:idUser"
                    element={<ActualizarUsuario />}
                />
                <Route
                    path="/usuarios/delete/:idUser"
                    element={<EliminarUsuario />}
                />

                <Route path="/productos" element={<ProductosIndex />} />
                <Route
                    path="/productos/update/:idProducto"
                    element={<ActualizarProdcutos />}
                />
                <Route path="/productos/create" element={<CreateProducto />}/>
                <Route
                    path="/productos/delete/:idProducto"
                    element={<EliminarProducto />}
                />
            </Routes>
        </div>
    );
}

export default App;
