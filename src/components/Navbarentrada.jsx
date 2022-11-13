import {Link} from "react-router-dom";
import './styles/navegacion.css'

function Navegacion({count}){
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Los Campesinos</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link" aria-current="page" href="#">Login</Link>
              </li>
              <li className="nav-item">
                <Link to={"/carrito"} className="nav-link" href="#"><div className="carro">Carrito <span className="circuloContador">{count}</span></div></Link>
              </li>
              <li className="nav-item">
                <Link to={"/productos"} className="nav-link" href="#">Productos</Link>
              </li>
              <li className="nav-item">
              <Link to={"/nosotros"} className="nav-link" href="#"> Nosotros </Link>
              </li>
              <li className="nav-item">
              <Link to={"/contactenos"} className="nav-link" href="#">Contactenos</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    )
}
export default Navegacion;