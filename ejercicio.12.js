const prompt = require("prompt-sync")();

let nombres = ["sebastian", "alonso", "vanesa", "cleopatra", "rosa", "pepe"];

let nombreUsuario = prompt("Ingresa un nombre: ");

for(let i = 0; i<=5; i++){
	if(nombreUsuario == nombres[i]){
  	console.log("El nombre que ingresaste si esta en el arrays");
}
}
 

