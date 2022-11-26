// let PORT = 8080;
// let HOST = "localhost";
// let PROTOCOL = "http";
// let API_ROUTE = "/api/";
// let FULL_PATH = PROTOCOL + "://" + HOST + ":" + PORT + "/";
// let FULL_API_PATH = PROTOCOL + "://" + HOST + ":" + PORT + API_ROUTE;

let PORT = 80;
let HOST = "backend-proyecto-campesinos.vercel.app";
let PROTOCOL = "https";
let API_ROUTE = "/api/";
let FULL_PATH = PROTOCOL + "://" + HOST + ":" + PORT + "/";
let FULL_API_PATH = PROTOCOL + "://" + HOST + ":" + PORT + API_ROUTE;

if (PORT === 80) {
    FULL_PATH = PROTOCOL + "://" + HOST + "/";
    FULL_API_PATH = PROTOCOL + "://" + HOST + API_ROUTE;
}

module.exports = {
    PORT,
    HOST,
    PROTOCOL,
    FULL_PATH,
    FULL_API_PATH,
};
