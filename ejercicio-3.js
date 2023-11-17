const prompt = require('prompt-sync')();

//Escribir un programa que almacene la cadena de caracteres contraseña en una variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida por el usuario 
//coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas.

let a = "contrasena";
let contrasenaUsuario = prompt("Escribe una contrasena: ");

if(a == contrasenaUsuario){
console.log("La contrasena introducida coincide con la guardada");
} else {
console.log("La contrasena no coincide");
}

