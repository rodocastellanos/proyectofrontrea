import MainPage from "./MainPage";

function BodyIndex(props) {
    return (
        <div className="App">
            <h3>Usuarios</h3>
            <p>Bienvenidos a la pagina de administracion de usuarios</p>
            <MainPage
                data={props.datosTabla}
                path={"/usuarios"}
                name={"Tabla de Usuarios"}
                columns={[
                    "_id",
                    "firstName",
                    "lastName",
                    "email",
                    "username",
                    "password",
                    "tipoUsuario",
                ]}
                columnsAlias={[
                    "ID",
                    "Nombre",
                    "Apellidos",
                    "Correo",
                    "Usuario",
                    "Contrasena",
                    "Tipo Usuario",
                ]}
                tools={["update", "delete"]}
            />
        </div>
    );
}

export default BodyIndex;
