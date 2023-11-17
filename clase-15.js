const arreglo = [
    { nombre: "sebas", edad: 20 },
    { nombre: "vane", edad: 30 }
];

// Las functiones de los arreglos .map, .filter .find .forEach
// Reciben un callback es decir una funcion para que se ejecute.

function a(e) {
    console.log(e.nombre);
    return { nombre: e.nombre };
}

const nuevoArreglo = arreglo.map(a);


const nuevoArreglo2 = [];
arreglo.forEach(function (e) {
    console.log(e.nombre);
    nuevoArreglo2.push({ nombre: e.nombre })
})

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i].nombre);
}


console.log(nuevoArreglo);



function sebas(a) {

    a();// callback: es un parametro que en realidad es una funcion
}


function sisas() {

    console.log("Soy sebas");
}

sebas(sisas)





/*
const Array = {
    elementos: [1,2,3,4],
    map: function (a){
        a(this.elementos)
    },
    filter: function (a){
        return a(this.elementos);
    }
}
*/

function functionCaso1() {
    console.log("Este es una funcion")
}


function ejecutarMenu() {
    let opcion = "";


        opcion = document.getElementById("caca");
        switch (opcion.value) {
            case "1":
                functionCaso1();
                console.log("apretaste el 1")
                break;
            case "2":
                functionCaso1();
                console.log("apretaste el 2")
                break;
            case "3":
                functionCaso1();
                console.log("apretaste el 3")
                break;
            case "0":
                functionCaso1();
                console.log("chao");
            default:
                console.log("opcion no valida")
                break;
        }
}



// 1. Debes de haber aprendido callbacks: functiones que reciben funciones como parametro
// 2. a Hacer el menu con while y prompt
// 3. Repasar map, forEach y filter y find.
// 4. A ya no usar prompt sino conectar con el html y enlazarlo mediante script
// 5. a conectecar mediante ids y getElemebtById el html con el javascript para
// Acceder a valores.
// 6. Ejecutar un menu sin while sino con html.