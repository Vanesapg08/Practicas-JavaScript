const prompt = require("prompt-sync")();

//ingresa tres numeros y sumalos con 90 pasandolos a suma real 
// de javascript

let primerNumero = prompt("Ingresa primer numero: ");
let segundoNumero = prompt("Ingresa segundo numero: ");
let tercerNumero = prompt("Ingresa tercer numero: ");
let numero = 90;

primerNumero = Number(primerNumero);
segundoNumero = Number(segundoNumero);
tercerNumero = Number(tercerNumero);

let resultado = primerNumero + segundoNumero + tercerNumero + 
numero;

console.log("El resultado es: " + resultado); 


