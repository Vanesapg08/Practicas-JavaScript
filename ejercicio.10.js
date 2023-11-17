
const prompt = require("peompt-sync")();

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let suma = 0;

// Usar un bucle for para recorrer el array y sumar los elementos

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma de los números es: " + suma);
