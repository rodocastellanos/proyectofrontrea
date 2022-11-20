import getData from "../../js/db";
import MAinPage from "../table/mainPage";

function ProductosIndex(props) {
    let datosTabla = getData("url", {}, "get", {});
    console.log(datosTabla);
    return (
        <div class="App">
            <h3>Productos</h3>
            <p>Bienvenidos a la pagina de administracion de Productos</p>

            <MAinPage
                data={datosTabla}
                path={"/Productos"}
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
                    "Codigo",
                    "Producto",
                    "Precio",
                    "Proveedor",
                    "Tipo",
                    "Imagen",
                ]}
                tools={["update", "delete"]}
            />
        </div>
    );
}
export default ProductosIndex;
