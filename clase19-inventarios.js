let divVerInventario = document.getElementById("verInventario");
let divCrearInventario = document.getElementById("crearInventario");
let divBorrarInventario = document.getElementById("borrarInventario");

function mostrarSeccionInventario(){
    divInventario.hidden = false;
    divCategorias.hidden = true;
    divProductos.hidden = true;
    divCaracteristicas.hidden = true;
    divActualizar.hidden = true;
    divVerInventario.hidden = true;
    divCrearInventario.hidden = true;
    divBorrarInventario.hidden = true;
}

function mostrarVerInventario() {
    divVerInventario.hidden = false;
    divCrearInventario.hidden = true;
    divBorrarInventario.hidden = true;
}
    function ejecutarVerInventario() {
    let fresaInput = document.getElementById("fresaInput");
    
    fetch("http://localhost:8080/v1/inventory/" + fresaInput.value, {
        
        method: "GET"
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal)
        let invent = document.getElementById("listaInventario");
        invent.innerText="El inventario tiene " + resultadoFinal;
        }
    )};


function mostrarCrearInventario() {
    divCrearInventario.hidden = false;
    divVerInventario.hidden = true;
    divBorrarInventario.hidden = true;
}

function crearInventario() {
    divCrearInventario.hidden = false;
    let nombreInput = document.getElementById("nombreInventario");
    let descripcionInput = document.getElementById("descripcionInventario");

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
        let result = document.getElementById("listaInventario");
        for (let i = 0; i < resultadoFinal.length; i++) {
            result.innerHTML = result.innerHTML + "<li>" + resultadoFinal[i].nombre + "</li>";

        }
    });
}

function mostrarBorrarInventario() {
    divBorrarInventario.hidden = false;
    divCrearInventario.hidden = true;
    divVerInventario.hidden = true;

}

function borrarInventario() {
    let IDInput = document.getElementById("IDBorrarInventario");
    fetch("http://localhost:8080/v1/categorias/" + IDInput.value, {

        method: "GET"
    }).then(function (resultado) {
        return resultado.json();
    }).then(function (resultadoFinal) {
        console.log(resultadoFinal);

    });
};
