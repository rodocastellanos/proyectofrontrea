function Contactenos(props) {
    return (
        <section className="form-register">
            <h4>Formulario de contacto</h4>
            <form method="post">
                <input
                    className="controls"
                    type="text"
                    name="nombres"
                    id="nombres"
                    placeholder="Ingresa tu nombre"
                />
                <input
                    className="controls"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Ingresa un nombre de usuario"
                />
                <input
                    className="controls"
                    type="email"
                    name="correo"
                    id="correo"
                    placeholder="Ingresa un correo"
                />
                <textarea
                    className="controls"
                    name="message"
                    rows="5"
                    placeholder="Escribe tu mensaje"
                ></textarea>
                <div id="errorBox"></div>
                <input
                    className="botons"
                    type="button"
                    onclick="register()"
                    value="Enviar"
                />
            </form>
        </section>
    );
}

export default Contactenos;
