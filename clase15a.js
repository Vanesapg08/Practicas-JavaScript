//const prompt = require("prompt-sync")();

//Escribe una funcion que retorne la suma de dos numeros enviados por parametros.

function ejercicio(numero, numero2){
    let resultado = numero + numero2;
    return resultado;
}
 let resultadoFinal = ejercicio(5,7);
 console.log(resultadoFinal);

 // Opcion 1 Abrir una cuenta, para ello vas a pedir la cedula y el nombre y vas a retorna el imprimirle
 // Al usuario el numero de cuenta.

 // Opcion 2 El usuario puede meterle dinero a la cuenta

 // Opcion 3 el usuario puede sacar dinero de la cuenta

 // opcion 4 el usuario puede saber el saldo de la cuenta

 // opcion 0 el usuario se sale del menu
 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
 const cuentas = [];
 class Cuenta {
    constructor(cedula, nombre){
        this.cedula = cedula;
        this.nombre = nombre;
        this.numeroCuenta = getRandomInt(0,1000) // Genera un numero aleatorio de cuenta
        this.saldo = 0;
    }
 }
 
 function crearCuenta() {
    let cedula = prompt("Por favor ingresa tu cédula:");
    let nombre = prompt("Por favor ingresa tu nombre:");

    if (cedula && nombre) {
        let nuevaCuenta = new Cuenta(cedula, nombre);
        console.log(nuevaCuenta)
        console.log("Gracias por abrir una cuenta con nosotros " + nombre + " Tu número de cuenta es: " + nuevaCuenta.numeroCuenta);
        cuentas.push(nuevaCuenta);
        return nuevaCuenta;
    } else {
        console.log("Por favor, introduce una cedula y un nombre validos");
        return null;
    }
}


function saldo() {
    let numeroCta = prompt(" por favor ingresa tu numero de cuenta ");
    let resultado = cuentas.find(function(e) {
        return e.numeroCuenta == numeroCta
    })

    console.log(resultado.saldo);
}

function ingresar() {
    let cta = prompt("ingresa el numero de tu cuenta: ");
    let saldo = prompt("Cual es el saldo que deseas ingresar en la cta ");
    saldo = Number(saldo);
    let resul = cuentas.findIndex((cuenta) => cuenta.numeroCuenta == cta);
    console.log(cuentas[resul].saldo);
    cuentas[resul].saldo = cuentas[resul].saldo + saldo;
    console.log(cuentas[resul].saldo);
}

 
function retirar() {
    let cta = prompt("ingresa el numero de tu cuenta: ");
    let saldo = prompt("Cual es el saldo que deseas retirar en la cta ");
    saldo = Number(saldo);
    let resul = cuentas.findIndex((cuenta) => cuenta.numeroCuenta == cta);
    console.log(cuentas[resul].saldo);
        if (saldo > cuentas[resul].saldo){
            console.log("No tienes dinero");
        } else {
    cuentas[resul].saldo = cuentas[resul].saldo - saldo;
    console.log(cuentas[resul].saldo);
        }
}


function ejecutarMenu() {
    let opcion = "";


        opcion = document.getElementById("opc");
        switch (opcion.value) {
            case "1":
                crearCuenta();
                console.log("apretaste el 1 deseas crear una cuenta")
                break;
            case "2":
                ingresar();
                console.log("apretaste el 2, desear ingresar dinero")
                break;
            case "3":
                retirar();
                console.log("apretaste el 3, deseas retirar dinero")
                break;
            case "4":
                saldo();
                console.log("apretaste el 4, deseas retirar dinero")
                break;
            default:
                console.log("opcion no valida")
                break;
        }
}