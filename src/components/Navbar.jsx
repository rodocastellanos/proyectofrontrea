import {Link} from "react-router-dom";

function Navbar (props){
    return (
<nav className="navbar navbar-expand-md navbar-primary bg-primary" aria-label="Fourth navbar example">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Los Campesinos APP</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        
      </button>

      <div>
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
          <Link to={"/"} className="nav-link active" href="#"> Inicio </Link>
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

export default Navbar;
