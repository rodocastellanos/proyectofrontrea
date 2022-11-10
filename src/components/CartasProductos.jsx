function Cartas(){
    return (
    // <!--Cartas Productos-->
    <div>
    <h2  style="text-align: center;">Productos</h2>
    <span class="mesajeVacio" text="${mensaje}"></span>
    <div class="conedortarjetas">
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="'nav-item ' +${activadoVerduras == true ? 'active' : ''}">
          <a href="/verduras" class="nav-link " aria-current="page">
            Verduras
          </a>
        </li>
        <li class="'nav-item ' +${activadoFrutas == true ? 'active' : ''}">
          <a href="/frutas" class="nav-link " aria-current="page">
            Frutas
          </a>
        </li>
        <li class="'nav-item ' +${activadoGranos == true ? 'active' : ''}">
          <a href="/granos" class="nav-link " aria-current="page">
            Granos
          </a>
        </li>
      </ul>
      <div class="tarjetas">
        

          <div class="card" style="width: 18rem;" if="${!productos.isEmpty()}" each="producto: ${productos}">
            <img class="card-img-top" alt="..."></img>
            <div class="card-body">
              <span class="product-price" text="${producto.getPrecioKilo}"></span>
              <p class="card-description" text="${producto.getNombre}"></p>
            </div>
            <button class="addToCart" onclick="addToCart([[${producto.idProducto}]]);"><i class="fa-sharp fa-solid fa-cart-shopping"></i></button>
          </div>
      </div>
    </div>
    </div>
    )
}

export default Cartas;