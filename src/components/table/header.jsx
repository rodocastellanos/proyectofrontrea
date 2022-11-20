function Header(props) {
    let toolHeaders = undefined;
    if (props.tools && props.tools.length > 0) {
        toolHeaders = <th scope="col">Tools</th>;
    }
    return (
        <thead>
            <tr>
                {props.columns.map(function (value, index) {
                    return <th scope="col">{value}</th>;
                })}
                {/*<th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
            <th scope="col">Handle</th>*/}
                {toolHeaders}
            </tr>
        </thead>
    );
}
export default Header;
