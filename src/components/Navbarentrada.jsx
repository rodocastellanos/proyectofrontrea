import { Link } from "react-router-dom";
// import logo from "./styles/logo.png";
import "./styles/navegacion.css";

function Navegacion({ count }) {
    return (
        <header
            id="header"
            className="header fixed-top d-flex align-items-center"
        >
            <div className="container d-flex align-items-center ">
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            <Link to={"/"} className="nav-link" href="#">
                                Los Campesinos
                            </Link>
                        </li>
                        <li>
                            <Link to={"/carrito"} className="nav-link" href="#">
                                <div className="carro">
                                    Carrito{" "}
                                    <span className="circuloContador">
                                        {count}
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/productos"}
                                className="nav-link"
                                href="#"
                            >
                                Productos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/editarproductos"}
                                className="nav-link"
                                href="#"
                            >
                                Productos Editar
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/usuarios"}
                                className="nav-link"
                                href="#"
                            >
                                Usuarios
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/nosotros"}
                                className="nav-link"
                                href="#"
                            >
                                {" "}
                                Nosotros{" "}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/contactenos"}
                                className="nav-link"
                                href="#"
                            >
                                Contáctenos
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Link
                    to={"/"}
                    className="nav-link btn-login"
                    aria-current="page"
                    href="#"
                >
                    Login
                </Link>
            </div>
        </header>
    );
}
export default Navegacion;
