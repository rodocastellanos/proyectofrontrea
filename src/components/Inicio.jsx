import slider1 from "./slider1.png";
import slider2 from "./slider2.png";
import slider3 from "./slider3.png";

function Inicio(props){
return (
    <div className="row g-0">
    <div className="col-lg-7">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img src={slider1} class="d-block w-100" alt="..."/>
            </div>
              <div className="carousel-item">
              <img src={slider2} class="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
              <img src={slider3} class="d-block w-100" alt="..."/> 
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
    <div className="col-lg-5 d-flex flex-column align-items-end min-vh-100">
        <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 w-75">
              
        </div>
        <div className="px-lg-5 py-lg-2 p-4 w-100">
            <h1 className=" font-weight-bold nb-4" >Bienvenido</h1>
            <form method="post">
                <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label font-weight-bold">Usuario</label>
                  
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" className="form-label font-weight-bold">Contraseña</label>
                  
                </div>
                <div id="errorBox">
                </div>
                <a className="w-100 text-decoration-none" href="/registro">¿Eres Nuevo? Registrate aquí</a>
                <button type="button" onclick="login()" class="btn btn-primary w-100">Iniciar Sesión</button>
              </form>
        </div>
    </div>
</div>

)
}
export default Inicio;