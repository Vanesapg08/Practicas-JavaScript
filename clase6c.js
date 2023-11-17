const prompt = require("prompt-sync")();


//Imprimir los numeros desde donde el usuario diga hasta donde el usuario diga, validar que si sea numero.

let numeroIngresado = prompt("Ingresa un numero: ");
numeroIngresado = Number(numeroIngresado);

let numeroDosIngresado = prompt("Ingresa un segundo numero: ");
numeroDosIngresado = Number(numeroDosIngresado);

if(isNaN(numeroIngresado)) {                           
  console.log("El primer numero ingresado no es un numero intenta nuevamente");
} else if(isNaN(numeroDosIngresado)) {
  console.log("El segundo numero ingresado no es un numero intenta nuevamente");
} else {

if(numeroIngresado <= numeroDosIngresado){

console.log("Estos son los numeros ingresados por el usuario con for");
for (let a = numeroIngresado; a <=numeroDosIngresado; a = a+1){
console.log(a);
}

console.log("Estos son los numeros ingresados por el usuario con while");

let i = numeroIngresado;
while(i<=numeroDosIngresado){
console.log(i);
i = i+1;
}

} else {
for (let a = numeroIngresado; a >=numeroDosIngresado; a = a-1){
console.log(a);
}

let i = numeroIngresado;
while(i>=numeroDosIngresado){
console.log(i);
i = i-1;
}
}
}
