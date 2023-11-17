let divVerProductos = document.getElementById("verProductos");
let divCrearProductos = document.getElementById("crearProductos");
let divBorrarProductos = document.getElementById("borrarProductos");


function mostrarSeccionProductos(){
    divProductos.hidden = false;
    divInventario.hidden = true;
    divCategorias.hidden = true;
    divCaracteristicas.hidden = true;
    divActualizar.hidden = true;
    divVerProductos.hidden = true;
    divCrearProductos.hidden = true;
    divBorrarProductos.hidden = true;
}

function mostrarVerProductos() {
    divVerProductos.hidden = false;
    divCrearProductos.hidden = true;
    divBorrarProductos.hidden = true;

    fetch("http://localhost:8080/v1/categorias", {
        method: "GET"
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal)
        let unoMas = document.getElementById("listaProductos");
        for (let i = 0; i < resultadoFinal.length; i++) {
            unoMas.innerHTML = unoMas.innerHTML + "<li>" + resultadoFinal[i].nombre + "</li>";

        }
    });
}

function mostrarCrearProductos() {
    divCrearProductos.hidden = false;
    divVerProductos.hidden = true;
    divBorrarProductos.hidden = true;
}

function crearProductos() {
    divCrearProductos.hidden = false;
    let nombreInput = document.getElementById("nombreProductos");
    let descripcionInput = document.getElementById("descripcionProductos");

    fetch("http://localhost:8080/v1/categorias", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            "nombre": nombreInput.value,
            "descripcion": descripcionInput.value,
        })
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal);
        let result = document.getElementById("listaProductos");
        for (let i = 0; i < resultadoFinal.length; i++) {
            result.innerHTML = result.innerHTML + "<li>" + resultadoFinal[i].nombre + "</li>";

        }
    });
}

function mostrarBorrarProductos() {
    divBorrarProductos.hidden = false;
    divCrearProductos.hidden = true;
    divVerProductos.hidden = true;

}

function borrarProductos() {
    let IDInput = document.getElementById("IDBorrarProductos");
    fetch("http://localhost:8080/v1/categorias/" + IDInput.value, {

        method: "GET"
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal);

    });
};