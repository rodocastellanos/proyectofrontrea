import "./styles/productos.css"
import Buscador from "./buscador";
import { getRequest } from "../js/dbProductos.js";
import React, { useState } from "react";
import backendConfig from "../config.js";
import { useEffect } from "react";
//import { loadData } from "../../js/getData";


function Cartas({onclickfunc}){
    const [datosTabla, setDatosTabla] = useState({});
    const [state, setState] = useState("loading");
    const [error, setError] = useState("");

    useEffect(function () {
        let promiseData = getRequest(
            backendConfig.FULL_API_PATH + "productos/all",
            {},
            "get",
            {}
        );
        promiseData
            .then(function (response) {
                console.log(response);
                setState("loaded");
                setDatosTabla(response.data);
            })
            .catch(function (err) {
                setState("error");
                setError(err);
                console.log(err);
            });
    }, []);
    if (state === "error") {
        return (
            <div className="mx-3 d.flex">
                <h3>{error.toString()}</h3>
            </div>
        );
    }
    if (state === "loading") {
        return (
            <div className="mx-3 d.flex">
                <h3>Loading...</h3>
            </div>
        );
    }
    return (
    // <!--Cartas Productos-->
    <div className="fondo-blanco">
    <h2 className="letra-18 centrar">Productos</h2>
    <span className="mesajeVacio" text=""></span>
    <Buscador></Buscador>
    <div className="conedortarjetas">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="">
          <a href="/verduras" className="nav-link filtro" aria-current="page">
            Verduras
          </a>
        </li>
        <li className="">
          <a href="/frutas" className="nav-link filtro" aria-current="page">
            Frutas
          </a>
        </li>
        <li className="">
          <a href="/granos" className="nav-link filtro" aria-current="page">
            Granos
          </a>
        </li>
      </ul>

      <div className="tarjetas">
            {datosTabla.map(function (value, index){
              return (
                <div className="card letra-18"  if="" each="">
                  <img src={value.Imagen} className="card-img-top" alt="..."></img>
                  <div className="card-body">
                    <span className="product-price" text="">$ {value.precio}</span><br />
                    <span className="tituloProducto">{value.Producto}</span>
                  </div>
                  <button className="addToCart" onClick={onclickfunc}><i className="fa-sharp fa-solid fa-cart-shopping">Agregar Al Carrito</i></button>
                </div>
              )
            })}
          
      </div>
    </div>
    </div>
    )

}


export default Cartas;