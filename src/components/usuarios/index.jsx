//import Table from "../table/Table";
import { getData } from "../../js/getData";
import MainPage from "../table/MainPage";
//import CreateButton from "../table/CreateBotton";
//import SearchBar from "../table/SearchBar";

function UsuariosIndex(props) {
    let datosTabla = getData("url", {}, "get", {});
    //procesar datos
    return (
        <div className="App">
            <h3>Usuarios</h3>
            <p>Bienvenidos a la pagina de administracion de usuarios</p>
            <MainPage
                data={datosTabla}
                path={"/usuarios"}
                name={"Tabla de Usuarios"}
                columns={["id", "firstName", "email", "username", "password"]}
                columnsAlias={[
                    "ID",
                    "Nombre",
                    "Correo",
                    "Usuario",
                    "Contrasena",
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

export default UsuariosIndex;
