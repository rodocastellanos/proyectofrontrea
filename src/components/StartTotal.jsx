import "./styles/carrito.css";
import "./styles/indexstyle.css";
function StartTotal(){
    return (
        <div>
            <div className="row">
            <div className="col-12">
                <div className="shopping-cart-total d-flex align-items-center">
                    <p className="mb-0 negrita">Total $</p>
                    <p className="ml-4 mb-0 shoppingCartTotal total" id="total">0</p>
                    <div className="toast ml-auto bg-info" role="alert" aria-live="assertive" aria-atomic="true"
                        data-delay="2000">
                        <div className="toast-header">
                            <span>✅</span>
                            <strong className="mr-auto ml-1 text-secondary">Elemento en el carrito</strong>
                            <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="toast-body text-white">
                            Se aumentó correctamente la cantidad
                        </div>
                    </div>
                    <button className="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                        data-target="#comprarModal" onclick="vaciar()">Comprar</button>
                </div>
            </div>
            </div>
        </div>
                
    )
}

export default StartTotal;