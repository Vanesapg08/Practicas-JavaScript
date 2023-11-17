//Solicita números al usuario hasta que introduzca un 0. Muestra la suma de todos los números introducidos.

const prompt = require("prompt-sync")();

let numero = prompt("Dame un numero: ");
numero = Number(numero);
if(isNaN(numero)){
  console.log("No ingresaste un numero");
} else {
	let sumatoria = numero;
	while(numero != 0) {
		numero = prompt("Dame otro numero: ");	
		numero = Number(numero);
		if (isNaN(numero)){
			console.log("no ingresaste un numero");
		} else {
			sumatoria = sumatoria + numero;
		}
	}		
	console.log("Muy bien ingresaste cero, la suma es: " + sumatoria );
}



//solicita al usuario por medio de prompt un numero, cambiarlo de string a numero por medio de Number si el numero ingresado no es numero indicar por medio de isNaN y de 
//console que no ingresaste un numero, de lo contrario continua 
//solicita otro numero al usuario nuevamente cambialo a numero y de no ser numero indica por console que no ingresaste un numero de lo contrario suma la opcion de sumatoria 
//mas el numero que ingreso el usuario.


