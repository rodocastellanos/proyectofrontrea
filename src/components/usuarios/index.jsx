import getData from "../../js/getData";
import MAinPage from "../table/mainPage";

function UsuariosIndex(props) {
    let datosTabla = getData("url", {}, "get", {});
    console.log(datosTabla);
    return (
        <div className="App">
            <h3>Usuarios</h3>
            <p>Bienvenidos a la pagina de administracion de Usuarios</p>

            <MAinPage
                data={datosTabla}
                path={"/usuarios"}
                name={"Tabla de Usuarios"}
                columns={["id", "firstName", "email", "username", "password"]}
                columnsAlias={["Id", "Nombre", "Email", "Usuario", "Password"]}
                tools={["update", "delete"]}
            />
        </div>
    );
}
export default UsuariosIndex;
