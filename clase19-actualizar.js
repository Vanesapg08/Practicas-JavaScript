let divVerActualizar = document.getElementById("verActualizar");
let divCrearActualizar = document.getElementById("crearActualizar");
let divBorrarActualizar = document.getElementById("borrarActualizar");


function mostrarSeccionActualizar() {
    divActualizar.hidden = false;
    divCategorias.hidden = true;
    divInventario.hidden = true;
    divProductos.hidden = true;
    divCaracteristicas.hidden = true;
    divVerActualizar.hidden = true;
    divCrearActualizar.hidden = true;
    divBorrarActualizar.hidden = true;
}

function mostrarVerActualizar() {
    divVerActualizar.hidden = false;
    divCrearActualizar.hidden = true;
    divBorrarActualizar.hidden = true;

    fetch("http://localhost:8080/v1/categorias", {
        method: "GET"
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal)
        let ultimo = document.getElementById("listaActualizar");
        for (let i = 0; i < resultadoFinal.length; i++) {
            ultimo.innerHTML = ultimo.innerHTML + "<li>" + resultadoFinal[i].nombre + "</li>";

        }
    });
}

function mostrarCrearActualizar() {
    divCrearActualizar.hidden = false;
    divVerActualizar.hidden = true;
    divBorrarActualizar.hidden = true;
}

function crearActualizar() {
    divCrearActualizar.hidden = false;
    let nombreInput = document.getElementById("nombreActualizar");
    let descripcionInput = document.getElementById("descripcionActualizar");

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
        let result = document.getElementById("listaActualizar");
        for (let i = 0; i < resultadoFinal.length; i++) {
            result.innerHTML = result.innerHTML + "<li>" + resultadoFinal[i].nombre + "</li>";

        }
    });
}

function mostrarBorrarActualizar() {
    divBorrarActualizar.hidden = false;
    divCrearActualizar.hidden = true;
    divVerActualizar.hidden = true;

}

function borrarActualizar() {
    let IDInput = document.getElementById("IDBorrarActualizar");
    fetch("http://localhost:8080/v1/categorias/" + IDInput.value, {

        method: "GET"
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal);

    });
};