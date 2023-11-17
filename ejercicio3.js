const prompt = require("prompt-sync")();

//Dame una tasa de interes mensual y dame un valor para 
//calcular cuanto es.

let tasaDeInteresMensual = prompt("Dame una tasa de interes mensual: ");
let valorCalculo = prompt("Dame un valor: ");

tasaDeInteresMensual = Number(tasaDeInteresMensual);
valorCalculo = Number(valorCalculo);

let resultado = tasaDeInteresMensual * valorCalculo;

console.log("Los intereses generado son: " + resultado); 

