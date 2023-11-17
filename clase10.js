const prompt = require("prompt-sync")();

let equipoDeFotografia = [];

let cuantos = prompt("Dime cuantos equipos quieres ingresar: ");

for(let i = 0; i<cuantos; i++){
let id = prompt("ingresa por favor un numero de id: ");
id = Number(id);
if(isNaN(id)){
break;
} else {
}
let nombre = prompt("ingresa el nombre del equipo fotografico por favor: ");
let tipo = prompt("ingresa por favor el tipo de equipo fotografico: ");
let descripcion = prompt("ingresa la descripcion del equipo fotografico: ");
let precio = prompt("ingresa el valor por dia del equipo fotografico: ");
precio = Number(precio);
if(isNaN(precio)){
break;                                                                                                                                                               
} else {
}
equipoDeFotografia.push({id: id, nombre: nombre, tipoDeEquipo: tipo, descripcionEquipo: descripcion, precioDia: precio});
}



console.log(equipoDeFotografia);
console.log(equipoDeFotografia.length);
