//Pide al usuario ingresar tres números y muestra el número más grande.

const prompt = require("prompt-sync")();

let numero1 = prompt("Ingresa el primer numero:");
numero1 = Number(numero1);
let numero2 = prompt("Ingresa el segundo numero:");
numero2 = Number(numero2);
let numero3 = prompt("Ingresa el tercer numero:");
numero3 = Number(numero3);

let mayor = numero1;

if (numero2 > mayor) {
  mayor = numero2;
}

if (numero3 > mayor) {
  mayor = numero3;
}

console.log("El numero más grande es: " + mayor);
