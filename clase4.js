const prompt = require('prompt-sync')();

//preguntar al usuario un numero si ingresa 1 quiere decir que le voya pedir 2 numeros y los voy a sumar y mostrar el resultado, si ingresa 2 se deben restar y si ingresa 
//7 que se van a multiplicar y si ingresa 8 se van a dividir y permitir que se dividan sobre 0. 

let numero = prompt("Buenos dias, las opciones son numero 1 para sumar dos numeros, numero 2 para restar dos numeros, numero 7 para multiplicarlos y numero 8 para dividirlos ");

switch (numero) {
 	case "1":
	let numeroUno = prompt("Ingresa un numero: ");
	let numeroDos = prompt("Ingresa otro numero: ");
	numeroUno = Number(numeroUno);
	numeroDos = Number(numeroDos);	
	if(isNaN(numeroUno) || isNaN(numeroDos)){
		console.log("No ingresaste informacion correcta");
	} else { 
		let resultado = numeroUno + numeroDos;
		console.log("El resultado es " + resultado);
	} 
	break;
	case "2":
	let uno = prompt("Ingresa un numero: ");
	let Dos = prompt("Ingresa otro numero: ");
        let resultado1 = uno - Dos;
	Uno = Number(uno);
	Dos = Number(Dos);
	if(isNaN(uno) || isNaN(Dos)){
                console.log("No ingresaste informacion correcta");
        } else {
                let resultado = uno + Dos;
		console.log("El resultado es " + resultado1);
	}
	break;


	case "7":
	let otroNumero = prompt("Ingresa un numero: ");
        let otroNumero2 = prompt("Ingresa otro numero: ");
        let resultado2 = otroNumero * otroNumero2;
	otroNumero = Number(otroNumero);
	otroNumero2 = Number(otroNumero2);
 	if(isNaN(otroNumero) || isNaN(otroNumero2)){
                console.log("No ingresaste informacion correcta");
        } else {
                let resultado = otroNumero + otroNumero2;	
		console.log("El resultado es " + resultado2);
	}
	break;
	
	case "8":
	let numerito = prompt("Ingresa un numero: ");
	let numerito2 = prompt("Ingresa otro numero: ");
	let resultado3 = numerito / numerito2;
	numerito = Number(numerito);
	numerito2 = Number(numerito2);
	if(isNaN(numerito) || isNaN(numerito2)){
                console.log("No ingresaste informacion correcta");
        } else {
                let resultado = numerito + numerito2;		
		console.log("El resultado es " + resultado3);
	}
	break;
	default:
	console.log("El numero ingresado no es valido");
	break;
}

