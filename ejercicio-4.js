const prompt = require('prompt-sync')();

//Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par o impar.

let numeroEntero = prompt("Ingresa un numero entero ");

if(numeroEntero / 2){
console.log("El numero " + numeroEntero + "es par ");
} else {
console.log("El numero " + numeroEntero + "es impar ");

}
