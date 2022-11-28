import { useParams } from "react-router-dom";
import { getRequest } from "../../js/getData";
import backendConfig from "../../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function ActualizarProdcutos(props) {
    let { idProducto } = useParams();
    // let producto = getProductos(idProducto);
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
            <h3>Pagina: Actualizar Productos</h3>
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
                        <label for="Producto" class="form-label">
                            Nombre del producto
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="Prodcucto"
                            placeholder="Nombre del productos"
                            defaultValue={datosTabla.Producto}
                            required={true}
                            minLength={4}
                        />
                    </div>

                    <div class="col-12">
                        <label for="precio" class="form-label">
                            Precio
                        </label>
                        <div class="input-group has-validation">
                            <input
                                type="text"
                                class="form-control"
                                id="precio"
                                placeholder="precio"
                                defaultValue={datosTabla.precio}
                                required={true}
                                minLength={4}
                            />
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="Proveedor" class="form-label">
                            Proveedor
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="Proveedor"
                            placeholder="Proveedor"
                            defaultValue={datosTabla.Proveedor}
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="text" class="form-label">
                            Tipo de producto
                        </label>
                        <input
                            type={"text"}
                            class="form-control"
                            id="Tipo"
                            placeholder="Topo de producto"
                            defaultValue={datosTabla.Tipo}
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="Imagen" class="form-label">
                            Url imagen
                        </label>
                        <input
                            type={"text"}
                            class="form-control"
                            id="Imagen"
                            placeholder="url Imagen"
                            defaultValue={datosTabla.Imagen}
                            required={true}
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
    let _id = document.getElementById("id").value;
    let Producto = document.getElementById("Prodcucto").value;
    let precio = document.getElementById("precio").value;
    let Proveedor = document.getElementById("Proveedor").value;
    let Tipo = document.getElementById("Tipo").value;
    let Imagen = document.getElementById("Imagen").value;
    console.log(_id, Producto, precio, Proveedor, Tipo, Imagen)
    //contruimos la peticion
    //construimos el body
    let bodyData = {
        _id,
        Producto,
        precio,
        Proveedor,
        Tipo,
        Imagen,
    };
    let url = backendConfig.FULL_API_PATH + "productos/update/" + _id;
    let promesaCreate = getRequest(url, {}, "post", bodyData);
    //enviamos la peticion
    promesaCreate
        .then(function (res) {
            if (res.status < 300) {
                //redireccionar
                console.log("Productos Actualizado");
                navigate("/productos");
            }
            console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        });
    //segun el resultado, mostramos errores O cargamos la pagina de usuarios
}

export default ActualizarProdcutos;
