import { useState } from "react";
import CreateButton from "./createButton";
import SearchBar from "./searchBar";
import Table from "./table";

function MAinPage(props) {
    const [dataForTable, setDataforTable] = useState(props.data);
    return (
        <div>
            <div className="d-flex text-center mx-auto">
                <CreateButton path={props.path} />
                <SearchBar
                    data={props.data}
                    setDataforTable={setDataforTable}
                    columns={props.columns}
                />
            </div>
            <Table
                data={dataForTable}
                path={props.path}
                name={props.name}
                columns={props.columns}
                columnsAlias={props.columnsAlias}
                tools={props.tools}
            />
        </div>
    );
}
export default MAinPage;
