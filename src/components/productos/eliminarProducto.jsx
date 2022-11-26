import { Await, useParams } from "react-router-dom";
import { getRequest } from "../../js/getData";
import backendConfig from "../../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getProductos } from "../../js/dbProductos";

function EliminarProducto(props) {
    let { idProducto } = useParams();
    console.log(idProducto);
    let navigate = useNavigate();

    const [datosTabla, setDatosTabla] = useState({});
    const [state, setState] = useState("loading");
    const [error, setError] = useState("");

    useEffect(function () {
        let promiseData = getRequest(
            backendConfig.FULL_API_PATH + "productos/get/" + idProducto,
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
            <h3>Pagina: Eliminar Productos</h3>
            <form>
                <div class="row g-3">
                    <div class="">
                        <label for="identifier" class="form-label">
                            Id
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="identifier"
                            defaultValue={idProducto}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="">
                        <label for="firstName" class="form-label">
                            Producto
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="firstName"
                            placeholder="Nombre de la persona"
                            defaultValue={datosTabla.Producto}
                            required={true}
                            minLength={4}
                            readOnly={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="username" class="form-label">
                            Precio
                        </label>
                        <div class="input-group has-validation">
                            <span class="input-group-text">@</span>
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Username"
                                defaultValue={datosTabla.precio}
                                required={true}
                                minLength={4}
                                readOnly={true}
                            />
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="email" class="form-label">
                            Proveedor
                        </label>
                        <input
                            type={"email"}
                            class="form-control"
                            id="email"
                            placeholder="ejemplo@dominio.com"
                            defaultValue={datosTabla.Proveedor}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="password" class="form-label">
                            Tipo
                        </label>
                        <input
                            type={"password"}
                            class="form-control"
                            id="password"
                            defaultValue={datosTabla.Tipo}
                            required={true}
                            readOnly={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="username" class="form-label">
                            Imagen
                        </label>
                        <div class="input-group has-validation">
                            <input
                                type="text"
                                class="form-control"
                                id="username"
                                placeholder="Username"
                                defaultValue={datosTabla.Imagen}
                                required={true}
                                minLength={4}
                                readOnly={true}
                            />
                        </div>
                    </div>

                    <hr class="my-4" />

                    <button
                        class="w-100 btn btn-outline-danger btn-lg"
                        type="button"
                        onClick={() => {
                            onClickSubmit(navigate);
                        }}
                    >
                        Eliminar
                    </button>
                </div>
            </form>
        </div>
    );
}

function onClickSubmit(navigate) {
    //capturamos los datos del formulario
    let idProducto = document.getElementById("id").value;
    let url = backendConfig.FULL_API_PATH + "productos/delete/" + idProducto;
    let promesaCreate = getRequest(url, {}, "delete", {});
    //enviamos la peticion
    promesaCreate
        .then(function (res) {
            if (res.status === 200) {
                //redireccionar
                console.log("Producto eliminado");
                navigate("/productos");
            }
            console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        });
    //segun el resultado, mostramos errores O cargamos la pagina de usuarios
}


export default EliminarProducto;
