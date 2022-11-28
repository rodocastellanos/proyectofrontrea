import { getRequest } from "../../js/dbProductos";
import React, { useState } from "react";
import backendConfig from "../../config";
import { useEffect } from "react";
//import { loadData } from "../../js/getData";
import BodyIndexProductos from "../table/BodyIndexProductos";

function ProductosIndex(props) {
    //let data = loadData();
    const [datosTabla, setDatosTabla] = useState({});
    const [state, setState] = useState("loading");
    const [error, setError] = useState("");

    useEffect(function () {
        let promiseData = getRequest(
            backendConfig.FULL_API_PATH + "productos/all",
            {},
            "get",
            {}
        );
        promiseData
            .then(function (response) {
                console.log(response);
                setState("loaded");
                setDatosTabla(response.data);
            })
            .catch(function (err) {
                setState("error");
                setError(err);
                console.log(err);
            });
    }, []);
    if (state === "error") {
        return (
            <div className="mx-3 d.flex">
                <h3>{error.toString()}</h3>
            </div>
        );
    }
    if (state === "loading") {
        return (
            <div className="mx-3 d.flex">
                <h3>Loading...</h3>
            </div>
        );
    }
    return <BodyIndexProductos datosTabla={datosTabla} />;
    //procesar datos
}

export default ProductosIndex;
