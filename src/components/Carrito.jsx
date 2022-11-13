import Columnas from "./ColumnasCarrito";
import StartTotal from "./StartTotal";
import "./styles/carrito.css";
import "./styles/indexstyle.css";
function Carrito(){
    return (
        
        <section class="shopping-cart">
            <div class="container">
                <Columnas></Columnas>
                <StartTotal></StartTotal>
                {/* <Modal></Modal> */}
            </div>
        </section>
    )
}

export default Carrito;