const prompt = require("prompt-sync")();

let borrar = prompt("Indica que posicion deseas eliminar: ");

let borrado = [1,2,3,4,5,6,7,8];
borrado.splice(2,1);
	console.log(borrado); 
