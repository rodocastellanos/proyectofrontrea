import './styles/registrostyle.css'

function Registro(){
    return (
    <div className="form-register">
            <h4>Formulario Registro</h4>
            <form method="post">
                <input className="controls" type="text" name="nombres" id="nombres" placeholder="Ingresa tu nombre"></input>
                <input className="controls" type="text" name="username" id="username" placeholder="Ingresa un username"></input>
                <input className="controls" type="email" name="correo" id="correo" placeholder="Ingresa un correo"></input>
                <input className="controls" type="password" name="contraseña" id="contraseña" placeholder="Ingresa una contraseña"></input>
                <div id="errorBox"></div>
                <input className="botons" type="button" onclick="register()" value="Registrarse"></input>
            </form>
    </div>
    )
}

export default Registro;