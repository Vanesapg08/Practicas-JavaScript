const prompt = require('prompt-sync')();

/*Los tramos impositivos para la declaración de la renta en un determinado país son los siguientes:

Renta	Tipo impositivo
Menos de 10000€	5%
Entre 10000€ y 20000€	15%
Entre 20000€ y 35000€	20%
Entre 35000€ y 60000€	30%
Más de 60000€	45%
Escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo impositivo que le corresponde.*/

let rentaA = prompt("Indica cual es tu renta anual: ");

if(rentaA < 10000){
console.log("Te toca 5%");
} else {

if(rentaA >= 10000 && rentaA < 20000){
console.log("Te toca 15%");
} else {

if(rentaA >= 20000 && rentaA < 35000){
console.log("Te toca 20%");
} else {

if(rentaA >= 35000 && rentaA <= 60000){
console.log("Te toca 30%");
} else {

if(rentaA < 60000){
console.log("Te toca 45%");
} 

}
}
}
}
