import { Link } from "react-router-dom";
import editar from "./editar.png";

function ActualizarTools(props) {
    let url = props.path + "/update/" + props.id;
    return (
        <Link to={url}>
            <img src={editar} alt="E" width="20px" />
        </Link>
    );
}

export default ActualizarTools;
