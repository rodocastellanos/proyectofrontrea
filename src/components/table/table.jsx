import Body from "./body";
import Header from "./header";

function Table(props) {
    return (
        <div className="mx-5">
            <table class="table">
                <caption>{props.name}</caption>
                <Header columns={props.columnsAlias} tools={props.tools} />
                <Body
                    path={props.path}
                    data={props.data}
                    columns={props.columns}
                    tools={props.tools}
                />
            </table>
        </div>
    );
}
export default Table;
