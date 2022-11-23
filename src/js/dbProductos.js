let usuarios = [
    {
        id: 1,
        Producto: "Tomate",
        precio: 5000,
        Proveedor: "Proveedor1",
        Tipo: "Verdura",
        Imagen: "",
    },
    {
        id: 2,
        Producto: "Cebolla Cabezona",
        precio: 3000,
        Proveedor: "Proveedor2",
        Tipo: "Verdura",
        Imagen: "",
    },
    {
        id: 3,
        Producto: "Cebolla Larga",
        precio: 2500,
        Proveedor: "Proveedor3",
        Tipo: "Verdura",
        Imagen: "",
    },
    {
        id: 4,
        Producto: "Papa Pastusa",
        precio: 2500,
        Proveedor: "Proveedor4",
        Tipo: "Verdura",
        Imagen: "",
    },
    {
        id: 5,
        Producto: "Manzana",
        precio: 7000,
        Proveedor: "Proveedor5",
        Tipo: "Frutas",
        Imagen: "",
    },
    {
        id: 6,
        Producto: "Banano",
        precio: 4000,
        Proveedor: "Proveedor6",
        Tipo: "Frutas",
        Imagen: "",
    },
    {
        id: 7,
        Producto: "lenteja",
        precio: 4000,
        Proveedor: "Proveedor7",
        Tipo: "Granos",
        Imagen: "",
    },
    {
        id: 8,
        Producto: "Frijol Bola Roja",
        precio: 4000,
        Proveedor: "Proveedor8",
        Tipo: "Granos",
        Imagen: "",
    },
    {
        id: 9,
        Producto: "Garvanzo",
        precio: 4000,
        Proveedor: "Proveedor9",
        Tipo: "Granos",
        Imagen: "",
    },
];

function getDataProductos(url, headers, httpMethod, data) {
    return usuarios;
}
function getProductos(id) {
    let result = {};
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === id) {
            result = usuarios[i];
            break;
        }
    }
    return result;
}

function getProductosByTipo(tipo){
    let result = {};
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].tipo === tipo) {
            result = usuarios[i];
            break;
        }
    }
    return result;
}

export { getDataProductos, getProductos, getProductosByTipo };
