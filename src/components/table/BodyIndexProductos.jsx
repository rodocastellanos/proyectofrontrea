//import Table from "../table/Table";
import MainPage from "./MainPage";
//import CreateButton from "../table/CreateBotton";
//import SearchBar from "../table/SearchBar";

import React from "react";


function ProductosIndex(props) {
    //procesar datos
    return (
        <div className="App">
            <h3>Productos</h3>
            <p>Bienvenidos a la pagina de administracion de Productos</p>
            <MainPage
                data={props.datosTabla}
                path={"/productos"}
                name={"Tabla de Productos"}
                columns={[
                    "_id",
                    "Producto",
                    "precio",
                    "Proveedor",
                    "Tipo",
                ]}
                columnsAlias={[
                    "ID",
                    "Producto",
                    "Precio",
                    "Proveedor",
                    "Tipo",
                ]}
                tools={["update", "delete"]}
            />
            {/* <div className="d-flex">
                <div className="col-6">
                    <Table />
                </div>
                <div className="col-6">
                    <Table />
                </div>
            </div> */}
        </div>
    );
}

export default ProductosIndex;