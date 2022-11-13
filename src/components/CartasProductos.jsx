import "./styles/productos.css"
import Buscador from "./buscador";


function Cartas({onclickfunc}){
    return (
    // <!--Cartas Productos-->
    <div className="fondo-blanco">
    <h2 className="letra-18 centrar">Productos</h2>
    <span className="mesajeVacio" text=""></span>
    <Buscador></Buscador>
    <div className="conedortarjetas">
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="">
          <a href="/verduras" className="nav-link filtro" aria-current="page">
            Verduras
          </a>
        </li>
        <li className="">
          <a href="/frutas" className="nav-link filtro" aria-current="page">
            Frutas
          </a>
        </li>
        <li className="">
          <a href="/granos" className="nav-link filtro" aria-current="page">
            Granos
          </a>
        </li>
      </ul>

      <div className="tarjetas">
          <div className="card letra-18"  if="" each="">
            <img className="card-img-top" alt="..."></img>
            <div className="card-body">
              <span className="product-price" text=""></span>
              <p className="card-description" text=""></p>
            </div>
            <button className="addToCart" onClick={onclickfunc}><i className="fa-sharp fa-solid fa-cart-shopping">Agregar Al Carrito</i></button>
          </div>
          <div className="card letra-18"  if="" each="">
            <img className="card-img-top" alt="..."></img>
            <div className="card-body">
              <span className="product-price" text=""></span>
              <p className="card-description" text=""></p>
            </div>
            <button className="addToCart" onClick={onclickfunc}><i className="fa-sharp fa-solid fa-cart-shopping">Agregar Al Carrito</i></button>
          </div>
          <div className="card letra-18"  if="" each="">
            <img className="card-img-top" alt="..."></img>
            <div className="card-body">
              <span className="product-price" text=""></span>
              <p className="card-description" text=""></p>
            </div>
            <button className="addToCart" onClick={onclickfunc}><i className="fa-sharp fa-solid fa-cart-shopping">Agregar Al Carrito</i></button>
          </div>
          <div className="card letra-18"  if="" each="">
            <img className="card-img-top" alt="..."></img>
            <div className="card-body">
              <span className="product-price" text=""></span>
              <p className="card-description" text=""></p>
            </div>
            <button className="addToCart" onClick={onclickfunc}><i className="fa-sharp fa-solid fa-cart-shopping">Agregar Al Carrito</i></button>
          </div>
      </div>
    </div>
    </div>
    )

}


export default Cartas;