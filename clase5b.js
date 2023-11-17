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

let movimiento = [];

primerMovimiento = Number(primerMovimiento);
movimiento[0] = primerMovimiento;
segundoMovimiento = Number(segundoMovimiento);
movimiento[1] = segundoMovimiento;
tercerMovimiento = Number(tercerMovimiento);
movimiento[2] = tercerMovimiento;
cuartoMovimiento = Number(cuartoMovimiento);
movimiento[3] = cuartoMovimiento;
quintoMovimiento = Number(quintoMovimiento);
movimiento[4] = quintoMovimiento;
sextoMovimiento = Number(sextoMovimiento);
movimiento[5] = sextoMovimiento;
septimoMovimiento = Number(septimoMovimiento);
movimiento[6] = septimoMovimiento;
octavoMovimiento = Number(octavoMovimiento);
movimiento[7] = octavoMovimiento;
novenoMovimiento = Number(novenoMovimiento);
movimiento[8] = novenoMovimiento;
decimoMovimiento = Number(decimoMovimiento);
movimiento[9] = decimoMovimiento;
                     
if (isNaN(movimiento[0])) {
        console.log("El primer movimiento no es un numero no puedes continuar");
} else if (isNaN(movimiento[1])) {
        console.log("El segundo movimiento no es un numero no puedes continuar");
} else if (isNaN(movimiento[2])) {
        console.log("El tercer movimiento no es un numero no puedes continuar");
} else if (isNaN(movimiento[3])) {
        console.log("El cuarto movimiento no es un numero no puedes continuar");
} else if (isNaN(movimiento[4])) {
        console.log("El quinto movimiento no es un numero no puedes continuar");
} else if (isNaN(movimiento[5])) {
        console.log("El sexto movimiento no es un numero no puedes continuar");
} else if (isNaN(movimiento[6])) {
        console.log("El septimo movimiento no es un numero no puedes continuar");
} else if (isNaN(movimiento[7])) {
        console.log("El octavo movimiento no es un numero no puedes continuar");
} else if (isNaN(movimiento[8])) {
        console.log("El noveno movimiento no es un numero no puedes continuar");
} else if (isNaN(movimiento[9])) {
        console.log("El decimo movimiento no es un numero no puedes continuar");
} else {

        let saldo = movimiento[0] + movimiento[1] + movimiento[2] + movimiento[3] + movimiento[4] + movimiento[5] + movimiento[6] + movimiento[7] + movimiento[8] + movimiento[9];

        console.log(saldo); 
	console.log(movimiento);  
}


