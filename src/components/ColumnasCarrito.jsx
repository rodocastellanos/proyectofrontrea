import "./styles/carrito.css";
import "./styles/indexstyle.css";
function Columnas(){
    return (
        <div>
            <h1 className="text-center">CARRITO</h1>
            <hr></hr>
            <div className="row">
                <div className="col-6">
                    <div className="shopping-cart-header">
                        <h6 className="negrita">Producto</h6>
                    </div>
                </div>
                <div className="col-2">
                    <div className="shopping-cart-header">
                        <h6 className="text-truncate negrita">Precio</h6>
                    </div>
                </div>
                <div className="col-4">
                    <div className="shopping-cart-header">
                        <h6 className="negritaName">Cantidad</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Columnas;