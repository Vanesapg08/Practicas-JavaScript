//Esto es para imprimir por consola cosas
console.log("Bienvenida Vane");
//Vamos a pedir al usuario que ingrese un valor
//y lo vamos a ir sumando hasta que el diga no 
//quiere mas.
//Para poder usar prompt en la terminal hay que 
//hacer esto:

//1. Ejecutar npm install prompt-sync
//2. Importarlo en cada archivo que se vaya a usar

const prompt = require('prompt-sync')();

//Pedir al usuario 2 numeros y pasarlos por medio de la 
//funcion de javascript a numeros reales

let primerNumero = prompt("Ingresa por favor un primer numero: ");
let segundoNumero = prompt("Ingresa por favor segundo numero: ");

primerNumero = Number(primerNumero);
segundoNumero = Number(segundoNumero);

let resultado = primerNumero + segundoNumero;

console.log("la suma de tus dos numeros es: " + resultado);

