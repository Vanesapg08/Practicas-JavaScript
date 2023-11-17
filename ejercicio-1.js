const prompt = require('prompt-sync')();

//Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor de edad o no

let edad = prompt("Ingresa tu edad: ");

edad = Number(edad);

if(edad >= 18){
console.log("Eres mayor de edad");
} else { 

        console.log("Eres menor de edad");
}
