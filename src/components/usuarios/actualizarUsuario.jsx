import { useParams } from "react-router-dom";
import { getRequest } from "../../js/getData";
import backendConfig from "../../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function ActualizarUsuario(props) {
    let { idUser } = useParams();
    console.log(idUser);
    let navigate = useNavigate();

    const [datosTabla, setDatosTabla] = useState({});
    const [state, setState] = useState("loading");
    const [error, setError] = useState("");

    useEffect(function () {
        let promiseData = getRequest(
            backendConfig.FULL_API_PATH + "usuarios/get/" + idUser,
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
        <div className="col-12 w-75 mx-auto App">
            <h3>Pagina: Actualizar Usuario</h3>
            <form>
                <div class="row g-3">
                    <div class="">
                        <label for="identifier" class="form-label">
                            Id
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="id"
                            defaultValue={idUser}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="">
                        <label for="firstName" class="form-label">
                            Nombre Persona
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="Nombre de la persona"
                            defaultValue={datosTabla.firstName}
                            required={true}
                            minLength={4}
                        />
                    </div>
                    <div class="col-12">
                        <label for="lastName" class="form-label">
                            Apellidos de la Persona
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="lastName"
                            placeholder="Apellidos"
                            defaultValue={datosTabla.lastName}
                            required={true}
                            minLength={4}
                        />
                    </div>

                    <div class="col-12">
                        <label for="username" class="form-label">
                            Nombre de Usuario
                        </label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Username"
                                defaultValue={datosTabla.username}
                                required={true}
                                minLength={4}
                            />
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">
                            Correo
                        </label>
                        <input
                            type={"email"}
                            class="form-control"
                            id="email"
                            placeholder="ejemplo@dominio.com"
                            defaultValue={datosTabla.email}
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="password" class="form-label">
                            Contrasena
                        </label>
                        <input
                            type={"password"}
                            class="form-control"
                            id="password"
                            defaultValue={datosTabla.password}
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="password2" class="form-label">
                            Repita la Contrasena:
                        </label>
                        <input
                            type={"password"}
                            class="form-control"
                            id="password2"
                            defaultValue={datosTabla.password}
                            required={true}
                        />
                    </div>
                    <div class="col-12">
                        <label for="tipoUsiario" class="form-label">
                            Tipo Usuario
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="tipoUsuario"
                            placeholder="Tipo Usuario (admin/user)"
                            defaultValue={datosTabla.tipoUsuario}
                            required={true}
                            minLength={4}
                        />
                    </div>

                    <hr class="my-4" />

                    <button
                        class="w-100 btn btn-primary btn-lg"
                        type="button"
                        onClick={() => {
                            onClickSubmit(navigate);
                        }}
                    >
                        Actualice Usuario
                    </button>
                </div>
            </form>
        </div>
    );
}

function onClickSubmit(navigate) {
    //capturamos los datos del formulario
    let _id = document.getElementById("id").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let tipoUsuario = document.getElementById("tipoUsuario").value;
    //contruimos la peticion
    //construimos el body
    let bodyData = {
        _id,
        firstName,
        lastName,
        username,
        email,
        password,
        tipoUsuario,
    };
    let url = backendConfig.FULL_API_PATH + "usuarios/update/" + _id;
    let promesaCreate = getRequest(url, {}, "post", bodyData);
    //enviamos la peticion
    promesaCreate
        .then(function (res) {
            if (res.status < 300) {
                //redireccionar
                console.log("Usuario creado");
                navigate("/usuarios");
            }
            console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        });
    //segun el resultado, mostramos errores O cargamos la pagina de usuarios
}
export default ActualizarUsuario;
