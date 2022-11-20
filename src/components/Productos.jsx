import Cartas from "./CartasProductos"
function Productos({onclickfunc}){
    return (
        <div>
            <Cartas onclickfunc={onclickfunc}/>
        </div>
    )
}

export default Productos;