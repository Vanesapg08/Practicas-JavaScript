const prompt = require("prompt-sync")();

let numeroCedula = prompt("Ingresa tu numero de cedula: ");

numeroCedula = Number(numeroCedula);

if(isNaN(numeroCedula)) {
  console.log("El numero de cedula no es un numero intenta nuevamente");
} else {

let nombreCedula = prompt("Ingresa tu nombre: ");
let apellidoCedula = prompt("Ingresa tu apellido: ");
let ciudadNacimiento = prompt("Ingresa tu ciudad de nacimiento: ");
let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento: ");
let ciudadDeExpedicion = prompt("Ingresa la ciudad de expedicion de la cedula: ");
let fechaExpedicion = prompt("Ingresa la fecha de expedicion de la cedula: ");
let estaturaCedula = prompt("Ingresa tu estatura: ");

estaturaCedula = Number(estaturaCedula);

if(isNaN(estaturaCedula)) {
  console.log("El numero de estatura ingresa es incorrecto");
} else {

let sexo = prompt("Ingresa tu sexo: ");

if(sexo == "M" || sexo == "F"){
	let persona = {
		cedula: numeroCedula,
		nombre: nombreCedula,
		apellido: apellidoCedula, 
		Nacimiento: ciudadNacimiento,
		fechaNac: fechaNacimiento,
		Expedicion: ciudadDeExpedicion,
		fechaExp: fechaExpedicion,
		Estatura: estaturaCedula,
		SexoCedula: sexo
	};
	console.log(persona);
} else {
   console.log("Ingresaste un sexo que no es valido");
}
}
}
