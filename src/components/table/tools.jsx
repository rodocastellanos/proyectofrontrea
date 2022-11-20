import ActualizarTools from "./actualizarTools";
import EliminarlTools from "./eliminarTools";

function Tools(props) {
    if (props.tools && props.tools.length > 0) {
        let toolsElement = [];
        if (props.tools.indexOf("update") >= 0) {
            toolsElement.push(
                ActualizarTools({ path: props.path, id: props.id })
            );
        }
        if (props.tools.indexOf("delete") >= 0) {
            toolsElement.push(
                EliminarlTools({ path: props.path, id: props.id })
            );
        }
        return <td>{toolsElement}</td>;
    }
    return null;
}
export default Tools;
