import { getRequest } from "../../js/getData";
import backendConfig from "../../config";
import { useNavigate } from "react-router-dom";

function CreateUsuario(props) {
    let navigate = useNavigate();
    return (
        <div className="col-12 w-75 mx-auto App">
            <h3>Pagina: Crear Usuario</h3>
            <form>
                <div class="row g-3">
                    <div class="col-12">
                        <label for="firstName" class="form-label">
                            Nombre Persona
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="Nombre de la persona"
                            defaultValue=""
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
                            defaultValue=""
                            required={true}
                            minLength={4}
                        />
                    </div>

                    <div class="col-12">
                        <label for="username" class="form-label">
                            Usuario
                        </label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Username"
                                defaultValue=""
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
                            defaultValue=""
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
                            defaultValue=""
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
                            defaultValue=""
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
                            defaultValue=""
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
                        Continue to checkout
                    </button>
                </div>
            </form>
        </div>
    );
}

function onClickSubmit(navigate) {
    //capturamos los datos del formulario
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let tipoUsuario = document.getElementById("tipoUsuario").value;
    //contruimos la peticion
    //construimos el body
    let bodyData = {
        firstName,
        lastName,
        username,
        email,
        password,
        tipoUsuario,
    };
    let url = backendConfig.FULL_API_PATH + "usuarios/create";
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

export default CreateUsuario;
