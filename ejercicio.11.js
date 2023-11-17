const promt = require("prompt-sync");

let numeros = [1,2,3,4,5,6,7,8,9,10];

let acumulador = 0;

for(let i = 0; i < 10; i = i+1){
	acumulador = acumulador + numeros[i];
}
console.log("La suma es: " + acumulador);
  
