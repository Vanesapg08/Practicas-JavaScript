let divVerCategorias = document.getElementById("verCategorias");
let divCrearCategorias = document.getElementById("crearCategorias");
let divBorrarCategorias = document.getElementById("borrarCategorias");
//hacer el de actualizar

function mostrarSeccionCategorias() {
    divCategorias.hidden = false;
    divInventario.hidden = true;
    divProductos.hidden = true;
    divCaracteristicas.hidden = true;
    divActualizar.hidden = true;
    divVerCategorias.hidden = true;
    divCrearCategorias.hidden = true;
    divBorrarCategorias.hidden = true;
}

function mostrarVerCategorias() {
    divVerCategorias.hidden = false;
    divCrearCategorias.hidden = true;
    divBorrarCategorias.hidden = true;

    fetch("http://localhost:8080/v1/categorias", {
        method: "GET"
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal)
        let sdhflsdfkjahd = document.getElementById("listaCategorias");
        for (let i = 0; i < resultadoFinal.length; i++) {
            sdhflsdfkjahd.innerHTML = sdhflsdfkjahd.innerHTML + "<li>" + resultadoFinal[i].nombre + "</li>";

        }
    });
}

function mostrarCrearCategorias() {
    console.log("SI esta ")
    divCrearCategorias.hidden = false;
    divVerCategorias.hidden = true;
    divBorrarCategorias.hidden = true;
}

function crearCategorias() {
    divCrearCategorias.hidden = false;
    let nombreInput = document.getElementById("nombreCategoria");
    let descripcionInput = document.getElementById("descripcionCategoria");

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
        let result = document.getElementById("listaCategorias");
        for (let i = 0; i < resultadoFinal.length; i++) {
            result.innerHTML = result.innerHTML + "<li>" + resultadoFinal[i].nombre + "</li>";

        }
    });
}

function mostrarBorrarCategorias() {
    divBorrarCategorias.hidden = false;
    divCrearCategorias.hidden = true;
    divVerCategorias.hidden = true;

}

function borrarCategorias() {
    let IDInput = document.getElementById("IDBorrarCategorias");
    fetch("http://localhost:8080/v1/categorias/" + IDInput.value, {

        method: "GET"
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal);

    });
};