import { getRequest } from "../../js/dbProductos";
import backendConfig from "../../config";
import { useNavigate } from "react-router-dom";

function CreateProducto(props) {
    let navigate = useNavigate();
    return (
        <div className="col-12 w-75 mx-auto App">
            <h3>Pagina: Crear Productos</h3>
            <form>
                <div class="row g-3">
                    <div class="col-12">
                        <label for="Producto" class="form-label">
                            Nombre del producto
                        </label>
                        <input
                            type="text"
                            class="form-control"
                            id="Prodcucto"
                            placeholder="Nombre del productos"
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
                            required={true}
                        />
                    </div>

                    <div class="col-12">
                        <label for="Tipo" class="form-label">
                            Tipo de producto
                        </label>
                        <input
                            type={"text"}
                            class="form-control"
                            id="Tipo"
                            placeholder="Topo de producto"
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
    let Producto = document.getElementById("Prodcucto").value;
    let precio = document.getElementById("precio").value;
    let Proveedor = document.getElementById("Proveedor").value;
    let Tipo = document.getElementById("Tipo").value;
    let Imagen = document.getElementById("Imagen").value;
    //contruimos la peticion
    //construimos el body
    let bodyData = {
        Producto,
        precio,
        Proveedor,
        Tipo,
        Imagen
    };
    let url = backendConfig.FULL_API_PATH + "productos/create";
    let promesaCreate = getRequest(url, {}, "post", bodyData);
    //enviamos la peticion
    promesaCreate
        .then(function (res) {
            if (res.status < 300) {
                //redireccionar
                console.log("Producto creado");
                navigate("/productos");
                // alert("tal")
            }
            console.log(res);
        })
        .catch(function (err) {
            console.log(err);
        });
    //segun el resultado, mostramos errores O cargamos la pagina de usuarios
}

export default CreateProducto;
