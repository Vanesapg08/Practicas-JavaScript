const prompt = require('prompt-sync')();

//Escribir un programa que pida al usuario dos números y muestre por pantalla su división. Si el divisor es cero el programa debe mostrar un error.

let primerNumero = prompt("Ingresa por favor un primer numero dividendo: ");
let segundoNumero = prompt("Ingresa por favor segundo numero divisor: ");

primerNumero = Number(primerNumero);
segundoNumero = Number(segundoNumero);

if(segundoNumero == 0) {
console.log("Error el numero no se puede dividir por cero");
} else {

let resultado = primerNumero / segundoNumero;

console.log("El resultado de la division es: " + resultado);

}

