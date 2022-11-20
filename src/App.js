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
                    path="/Productos"
                    element={<Productos onclickfunc={onclickfunc} />}
                />
                <Route path="/Carrito" element={<Carrito />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/usuarios/registro" element={<CreateUsuario />} />
                <Route
                    path="/usuarios/update/:idUsuario"
                    element={<ActualizarUsuario />}
                />
                <Route
                    path="/usuarios/delete/:idUsuario"
                    element={<EliminarUsuario />}
                />

                <Route path="/editarproductos" element={<ProductosIndex />} />
                <Route
                    path="/productos/update/:idProdcuto"
                    element={<ActualizarProdcutos />}
                />
                <Route
                    path="/productos/delete/:idProdcuto"
                    element={<CreateProducto />}
                />
            </Routes>
        </div>
    );
}

export default App;
