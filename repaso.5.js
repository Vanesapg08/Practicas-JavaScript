//Pide al usuario un número. Si el número es igual a 0, muestra "Cero". Si es positivo, muestra "Positivo". Si es negativo, muestra "Negativo".

const prompt = require("prompt-sync")();

let numero = prompt("Ingresa un numero: ");
numero = Number(numero);

if (numero == 0){
console.log("Cero");
} else if (numero > 0) {
    console.log("Positivo");
} else {
    console.log("Negativo");
}


//pide al usuario un numero si es igual a 0 muestra cero por consola
//si el numero que ingreso el usuario es == a 0 muestra en console la palabra 0, si el numero es menor a 0 es positivo de lo contrario es negativo.
 
