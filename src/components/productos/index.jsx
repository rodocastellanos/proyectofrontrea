//import Table from "../table/Table";
import { getDataProductos } from "../../js/dbProductos";
import MainPage from "../table/MainPage";
//import CreateButton from "../table/CreateBotton";
//import SearchBar from "../table/SearchBar";

function ProductosIndex(props) {
    let datosTabla = getDataProductos("url", {}, "get", {});
    //procesar datos
    return (
        <div className="App">
            <h3>Productos</h3>
            <p>Bienvenidos a la pagina de administracion de Productos</p>
            <MainPage
                data={datosTabla}
                path={"/productos"}
                name={"Tabla de Productos"}
                columns={[
                    "id",
                    "Producto",
                    "precio",
                    "Proveedor",
                    "Tipo",
                    "Imagen",
                ]}
                columnsAlias={[
                    "ID",
                    "Producto",
                    "Precio",
                    "Proveedor",
                    "Tipo",
                    "imagen",
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
