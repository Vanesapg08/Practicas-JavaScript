let divVerCaracteristicas = document.getElementById("verCaracteristicas");
let divCrearCaracteristicas = document.getElementById("crearCaracteristicas");
let divBorrarCaracteristicas = document.getElementById("borrarCaracteristicas");


function mostrarSeccionCaracteristicas(){
    divCaracteristicas.hidden = false;
    divProductos.hidden = true;
    divInventario.hidden = true;
    divCategorias.hidden = true;
    divActualizar.hidden = true;
    divVerCaracteristicas.hidden = true;
    divCrearCaracteristicas.hidden = true;
    divBorrarCaracteristicas.hidden= true;
}

function mostrarVerCaracteristicas() {
    divVerCaracteristicas.hidden = false;
    divCrearCaracteristicas.hidden = true;
    divBorrarCaracteristicas.hidden= true;

    fetch("http://localhost:8080/v1/categorias", {
        method: "GET"
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal)
        let otroMas = document.getElementById("listaCaracteristicas");
        for (let i = 0; i < resultadoFinal.length; i++) {
            otroMas.innerHTML = otroMas.innerHTML + "<li>" + resultadoFinal[i].nombre + "</li>";

        }
    });    
}

function mostrarCrearCaracteristicas() {
    divCrearCaracteristicas.hidden = false;
    divVerCaracteristicas.hidden = true;
    divBorrarCaracteristicas.hidden = true;
}

function crearCaracteristicas() {
    divCrearCaracteristicas.hidden = false;
    let nombreInput = document.getElementById("nombreCaracteristicas");
    let descripcionInput = document.getElementById("descripcionCaracteristicas");

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
        let result = document.getElementById("listaCaracteristicas");
        for (let i = 0; i < resultadoFinal.length; i++) {
            result.innerHTML = result.innerHTML + "<li>" + resultadoFinal[i].nombre + "</li>";

        }
    });
}

function mostrarBorrarCaracteristicas() {
    divBorrarCaracteristicas.hidden = false;
    divCrearCaracteristicas.hidden = true;
    divVerCaracteristicas.hidden = true;

}

function borrarCaracteristicas() {
    let IDInput = document.getElementById("IDBorrarCaracteristicas");
    fetch("http://localhost:8080/v1/categorias/" + IDInput.value, {

        method: "GET"
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal);

    });
};