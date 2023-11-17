const prompt = require("prompt-sync")();

//ongresar 10 movimientos a una cuenta y luego sumarlos.

let primerMovimiento = prompt("Ingresa un movimiento ");
let segundoMovimiento = prompt("Dame otro movimiento ");
let tercerMovimiento = prompt("Ingresa otro movimiento ");
let cuartoMovimiento = prompt("Dame otro movimiento ");
let quintoMovimiento = prompt("Ingresa otro movimiento ");
let sextoMovimiento = prompt("Dame otro movimiento ");
let septimoMovimiento = prompt("Ingresa otro movimiento ");
let octavoMovimiento =  prompt("Dame otro movimiento ");
let novenoMovimiento = prompt("Ingresa otro movimiento ");
let decimoMovimiento = prompt("Dame el ultimo  movimiento ");


primerMovimiento = Number(primerMovimiento);
segundoMovimiento = Number(segundoMovimiento);
tercerMovimiento = Number(tercerMovimiento);
cuartoMovimiento = Number(cuartoMovimiento);
quintoMovimiento = Number(quintoMovimiento);
sextoMovimiento = Number(sextoMovimiento);
septimoMovimiento = Number(septimoMovimiento);
octavoMovimiento = Number(octavoMovimiento);
novenoMovimiento = Number(novenoMovimiento);
decimoMovimiento = Number(decimoMovimiento);


if (isNaN(primerMovimiento)) {
	console.log("El primer movimiento no es un numero no puedes continuar");
} else if (isNaN(segundoMovimiento)) {
        console.log("El segundo movimiento no es un numero no puedes continuar");
} else if (isNaN(tercerMovimiento)) {
        console.log("El tercer movimiento no es un numero no puedes continuar");
} else if (isNaN(cuartoMovimiento)) {
        console.log("El cuarto movimiento no es un numero no puedes continuar");
} else if (isNaN(quintoMovimiento)) {
        console.log("El quinto movimiento no es un numero no puedes continuar");
} else if (isNaN(sextoMovimiento)) {
        console.log("El sexto movimiento no es un numero no puedes continuar");
} else if (isNaN(septimoMovimiento)) {
        console.log("El septimo movimiento no es un numero no puedes continuar");
} else if (isNaN(octavoMovimiento)) {
        console.log("El octavo movimiento no es un numero no puedes continuar");
} else if (isNaN(novenoMovimiento)) {
        console.log("El noveno movimiento no es un numero no puedes continuar");
} else if (isNaN(decimoMovimiento)) {
        console.log("El decimo movimiento no es un numero no puedes continuar");
} else {

	let saldo = primerMovimiento + segundoMovimiento + tercerMovimiento + cuartoMovimiento + quintoMovimiento + sextoMovimiento + septimoMovimiento + octavoMovimiento + novenoMovimiento + decimoMovimiento; 

	console.log(saldo);
}


