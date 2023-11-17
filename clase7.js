const prompt = require("prompt-sync")();

let numeros = [];
let acumulador = 0;

let cuantosNumeros = prompt("Ey cuantos numeros quieres sumar: ");
cuantosNumeros = Number(cuantosNumeros);
if(isNaN(cuantosNumeros)){
   console.log("No ingresaste un numero!");
} else if(cuantosNumeros < 1) {
   console.log("Ingresa un numero positivo");
} else {
for(let i = 1; i<=cuantosNumeros; i++){
	numeros[i] = prompt("Dame el " + i + " numero: ");
	numeros[i] = Number(numeros[i]);
	if(isNaN(numeros[i])){
		console.log("Ingresaste algo que no es un numero");
		break;
	}
	acumulador = acumulador + numeros[i];
}

console.log(numeros);
console.log("La suma de los numeros es: " + acumulador);
}
console.log("--------FIN DEL PROGRAMA--------"); 
