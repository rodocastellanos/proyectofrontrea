import './styles/buscador.css'

function Buscador(){
    return(
    <div class="input-group buscador">
        <span class="input-group-text titulo" id="inputGroup-sizing-default">Buscar Producto</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
    </div>
    )
}

export default Buscador