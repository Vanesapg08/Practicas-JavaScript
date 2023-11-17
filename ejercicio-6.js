const prompt = require('prompt-sync')();

//Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los 
//hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le 
//corresponde.

let nombre = prompt("Escriba su nombre: ");
let sexo = prompt("Escriba su sexo: ");

let inicial = nombre[0];

if(inicial < "m" && sexo == "mujer"){
console.log("Perteneces al grupo A");
} else {
console.log("Pertenece al grupo B");

}

