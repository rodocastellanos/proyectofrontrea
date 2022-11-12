import Cartas from "./CartasProductos"
function Productos({setCount}, {count}){
    return (
        <div>
            <Cartas setCount={setCount} count={count}/>
        </div>
    )
}

export default Productos;