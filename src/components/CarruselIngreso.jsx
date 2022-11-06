import slider1 from "./slider1.png";
import slider2 from "./slider2.png";
import slider3 from "./slider3.png";

function CarruselIngreso(props){
    return (
        <div class="row g-0">
            <div class="col-lg-7">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                      <img src={slider1} class="d-block w-100" alt="..."/>
                    </div>
                      <div class="carousel-item">
                      <img src={slider2} class="d-block w-100" alt="..."/>
                      </div>
                      <div class="carousel-item">
                      <img src={slider3} class="d-block w-100" alt="..."/> 
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </div>
            <div class="col-lg-5 d-flex flex-column align-items-end min-vh-100">
                <div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 w-75">
                      
                </div>
                <div class="px-lg-5 py-lg-2 p-4 w-100">
                    <h1 class=" font-weight-bold nb-4" >Bienvenido</h1>
                    <form method="post">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label font-weight-bold">Usuario</label>
                          <input type="text" class="form-control border-0" placeholder="Ingresa tu usario" id="exampleInputEmail1" aria-describedby="emailHelp" required></input>
                        </div>
                        <div class="mb-3">
                          <label for="exampleInputPassword1" class="form-label font-weight-bold">Contraseña</label>
                          <input type="password" class="form-control border-0" placeholder="Ingresa tu contraseña" id="exampleInputPassword1" required></input>
                        </div>
                        <div id="errorBox">
                        </div>
                        <a class="w-100 text-decoration-none" href="/registro">¿Eres Nuevo? Registrate aquí</a>
                        <button type="button" onclick="login()" class="btn btn-primary w-100">Iniciar Sesión</button>
                      </form>
                </div>
            </div>
        </div>
    );
}
export default CarruselIngreso;