import { useParams } from "react-router-dom";
import { getProductos } from "../../js/dbProductos";

function ActualizarProdcutos(props) {
    let { idProducto } = useParams();
    let producto = getProductos(idProducto);
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
                            defaultValue={producto.id}
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
                            defaultValue={producto.Producto}
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
                                defaultValue={producto.precio}
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
                            defaultValue={producto.Proveedor}
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
                            defaultValue={producto.Tipo}
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
                            defaultValue={producto.Imagen}
                            required={true}
                        />
                    </div>

                    <hr class="my-4" />

                    <button
                        class="w-100 btn btn-primary btn-lg"
                        type="submit"
                        onClick={onClickSubmit}
                    >
                        Continue to checkout
                    </button>
                </div>
            </form>
        </div>
    );
}

function onClickSubmit(e) {
    console.log(e);
}

export default ActualizarProdcutos;
