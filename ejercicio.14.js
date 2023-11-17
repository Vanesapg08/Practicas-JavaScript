const prompt = require("prompt-sync")();

let libro1 = {titulo: "HarryPotter", autor: "rrr", ano: "1456"};
let libro2 = {titulo: "SenorAnillos", autor: "aa", ano: "1987"};
let libro3 = {titulo: "Pilares", autor: "ff", ano: "1990"};

let libros = [libro1, libro2, libro3];

console.log(libros);

let numero = prompt("ingresa un numero entre 1 y 3: ");
if(numero >0 && numero <4){
	console.log(libros[numero]);
} else {
	console.log("el numero ingresado no es valido");
}

