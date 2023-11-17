const prompt = require('prompt-sync')();

//pedirle al usuario una tasa nominal y un valor e imprimir la tasa mensual y el valor de 
//los intereses. 


let tasaNominal = prompt("Dame una tasa de interes nominal: ");
let valor = prompt("Dame un valor: ");

tasaNominal = Number(tasaNominal);
valor = Number(valor);

let noEsUnNumero = isNaN(tasaNominal);
let noEsUnValor = isNaN(valor);

if(noEsUnNumero || noEsUnValor){
console.log("No es un numero, intente de nuevo")
} else {

if(tasaNominal > 0 && tasaNominal < 1){
 
	let resultado = tasaNominal / 12;
	let resultadoUno = resultado * valor;

	console.log("Los intereses generados mes a mes son: " + resultadoUno);
	console.log("La tasa de interes mes vencida es: " + resultado);
} else {
console.log("Por favor ingrese una tasa entre 0 y 1");
}
}
