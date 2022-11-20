function Cell(props) {
    if (props.index === 0) {
        return <th scope="row">{props.value}</th>;
    } else {
        return <td>{props.value}</td>;
    }
}
export default Cell;
